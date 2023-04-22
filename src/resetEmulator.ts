import { runCommand } from "./utils";

const resetEmulator = async (uuid: string) => {
  const shutdownCommand = `xcrun simctl shutdown ${uuid}`;
  const eraseCommand = `xcrun simctl erase ${uuid}`;

  try {
    const { stdout, stderr } = await runCommand(shutdownCommand);
    if (stderr) {
      console.error(`Error al apagar el emulador: ${stderr}`);
      return;
    }
    console.log(`Emulador apagado: ${stdout}`);

    // const { stdout: , stderr } = await runCommand(eraseCommand);
    const { stdout: stdout2, stderr: stderr2 } = await runCommand(eraseCommand);

    if (stderr2) {
      console.error(`Error al borrar el emulador: ${stderr2}`);
      return;
    }

  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
};

export {
  resetEmulator
}