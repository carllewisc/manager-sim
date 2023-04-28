import { runCommand } from '../utils';
import { closeEmulator } from './shutdownEmulator';

const resetEmulator = async (UUID: string) => {
  const eraseCommand = `xcrun simctl erase ${UUID}`;

  try {
    await closeEmulator(UUID);

    const { stderr } = await runCommand(eraseCommand);

    if (stderr) {
      console.log(`Error resetting emulator: ${stderr}`);
      return;
    }

    console.log(`✅ Emulator restarted successfully for device ${UUID}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
};

export { resetEmulator };
