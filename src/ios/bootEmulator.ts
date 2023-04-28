import chalk from 'chalk';
import { exec } from 'child_process';
import { runCommand } from '../utils';

const openSimulator = async () => {
  const openSimulatorCommand = 'open -a Simulator';

  try {
    const { stderr } = await runCommand(openSimulatorCommand);

    if (stderr) {
      console.log(`Error in standard output: ${stderr}`);
      return;
    }

    console.log('✅ Emulator opened successfully.');
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
};

// check if emulator is already running
// if not, run it
const checkIfSimulatorIsRunning = async () => {
  const command = 'pgrep -x Simulator';

  try {
    const { stdout, stderr } = await runCommand(command);
    if (stderr) {
      console.log(chalk.red(`Error in command output: ${stderr}`));
      return;
    }

    if (stdout.trim() === '') {
      console.log('Simulator is not running');
      return false;
    }

    console.log('Simulator is running');

    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.log(chalk.red(`Error running command: ${error.message}`));
    } else {
      console.log(chalk.red(`Error running command: ${error}`));
    }
  }
};

// Function to check if any iOS emulator is running
const isIOSEmulatorRunning = (device: string) => {
  return new Promise((resolve, reject) => {
    exec('xcrun simctl list', (error, stdout, stderr) => {
      if (error) {
        console.log(`exec error: ${error}`);
        reject(error);
      }

      const lines = stdout.split('\n');
      // console.log(JSON.stringify(lines, null, 2));
      const isRunning = lines.some(line => line.includes('(Booted)'));
      // TODO: check if specific device is running
      const specificDevice = lines.some(line => line.includes(`(${device}) (Booted)`));
      if (device) {
        resolve(specificDevice);
      } else {
        resolve(isRunning);
      }
    });
  });
};

const openDevice = async (device: string) => {
  const command = `xcrun simctl boot ${device}`;

  try {
    // validate if device is already running
    const result = await isIOSEmulatorRunning(device);
    if (result) {
      console.log('An iOS emulator is already running.');
      return;
    }

    const { stderr } = await runCommand(command);

    if (stderr) {
      console.error(`Error en la salida estándar: ${stderr}`);
      return;
    }

    console.log(`Emulador iniciado con éxito para el dispositivo ${device}`);

    const isRunning = await checkIfSimulatorIsRunning();
    if (isRunning) return;

    await openSimulator();
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
};

export { openDevice };
