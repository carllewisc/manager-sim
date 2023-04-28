import { runCommand } from '../utils';

const checkIfEmulatorIsRunning = async (UUID: string) => {
  const command = `xcrun simctl list | grep -w "${UUID}" | grep -w "Booted"`;

  try {
    const { stdout, stderr } = await runCommand(command);

    if (stderr) {
      console.log(`Error in standard output: ${stderr}`);
      return;
    }

    if (stdout.trim() === '') {
      console.log('Simulator is not running');
      return false;
    }

    console.log(`The device with UUID ${UUID} is running`);

    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
};

const closeAppSimulator = async () => {
  const closeSimulatorCommand = 'osascript -e \'tell application "Simulator" to quit\'';

  try {
    const { stderr } = await runCommand(closeSimulatorCommand);

    if (stderr) {
      console.log(`Error in standard output: ${stderr}`);
      return;
    }

    console.log('✅ Simulator application closed successfully.');
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
};

const closeEmulator = async (UUID: string) => {
  const isEmulatorRunning = await checkIfEmulatorIsRunning(UUID);

  if (!isEmulatorRunning) {
    console.log(`The device with UUID ${UUID} is not running`);
    return;
  }

  const shutdownCommand = `xcrun simctl shutdown ${UUID}`;

  try {
    const { stderr } = await runCommand(shutdownCommand);
    if (stderr) {
      console.error(`Error en la salida estándar: ${stderr}`);
      return;
    }

    await closeAppSimulator();

    console.log(`✅ Emulator closed successfully for device ${UUID}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
};

export { closeEmulator };
