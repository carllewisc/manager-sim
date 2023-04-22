import { runCommand } from './utils';

const checkIfEmulatorIsRunning = async (UUID: string) => {
  const command = `xcrun simctl list | grep -w "${UUID}" | grep -w "Booted"`;
  try {
    const { stdout, stderr } = await runCommand(command);
    if (stderr) {
      console.error(`Error en la salida estándar: ${stderr}`);
      return;
    }

    if (stdout.trim() === '') {
      console.log('Simulator is not running');
      console.log(`El dispositivo con UDID ${UUID} no está en ejecución`);
      return false;
    }

    console.log(`El dispositivo con UDID ${UUID} está en ejecución`);

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
    const { stdout, stderr } = await runCommand(closeSimulatorCommand);
    if (stderr) {
      console.error(`Error en la salida estándar: ${stderr}`);
      return;
    }

    console.log('Aplicación Simulator cerrada con éxito.');
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
};

const closeEmulator = async (UUID: string) => {
  if (!(await checkIfEmulatorIsRunning(UUID))) {
    console.log(`El dispositivo con UDID ${UUID} no está en ejecución`);
    return;
  }

  // Cierra el emulador de iOS usando el ID del dispositivo seleccionado
  const shutdownCommand = `xcrun simctl shutdown ${UUID}`;
  try {
    const { stdout, stderr } = await runCommand(shutdownCommand);
    if (stderr) {
      console.error(`Error en la salida estándar: ${stderr}`);
      return;
    }

    closeAppSimulator();
    console.log(`Emulador cerrado con éxito para el dispositivo ${UUID}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
};

export { closeEmulator };
