import { runCommand } from "./utils";

const openSimulator = async () => {
  const openSimulatorCommand = 'open -a Simulator';

  try {
    const { stdout, stderr } = await runCommand(openSimulatorCommand);

    if (stderr) {
      console.error(`Error en la salida estándar al abrir el emulador: ${stderr}`);
      return
    }

    console.log('Emulador abierto con éxito.');
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
const checkEmulator = async () => {
  const command = 'pgrep -x Simulator';

  try {
    const { stdout, stderr } = await runCommand(command);
    if (stderr) {
      console.error(`Error in command output: ${stderr}`);
      return;
    }

    if (stdout.trim() === '') {
      console.log('Simulator is not running');
      return false
    }

    console.log('Simulator is running');

    return true
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
}


const openDevice = async (device: string) => {
  // Levanta el emulador de iOS usando el ID del dispositivo seleccionado
  // let command = `xcrun simctl boot ${device.udid}`;

  // TODO: Verificar si el dispositivo ya está iniciado
  const command = `xcrun simctl boot ${device}`;

  try {
    const { stdout, stderr } = await runCommand(command);

    if (stderr) {
      console.error(`Error en la salida estándar: ${stderr}`);
      return
    }

    console.log(`Emulador iniciado con éxito para el dispositivo ${device}`);

    // const isRunning = await checkEmulator();
    // console.log({
    //   isRunning
    // });

    // if (!isRunning) {
    //   openSimulator();
    // }  
    openSimulator();
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
}

export {
  openSimulator,
  openDevice
}