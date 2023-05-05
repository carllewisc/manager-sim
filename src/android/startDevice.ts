import { spawn } from 'child_process';

const startDevice = (emulatorName: string): void => {
  console.log(`🚀 Starting Android emulator "${emulatorName}"...`);

  // TODO: Make this path configurable
  // TODO: this is a hacky way to get the emulator path on macOS, but it works for now. We should find a better way to do this in the future.
  //  It should be possible to get the emulator path from the Android SDK.
  // TODO: Linux and Windows support for this path will need to be added.
  const emulatorPath = '~/Library/Android/sdk/emulator/emulator';
  const startEmulatorArgs = ['-avd', emulatorName, '-no-boot-anim'];

  const emulatorProcess = spawn(emulatorPath, startEmulatorArgs, {
    detached: true,
    stdio: 'ignore',
    shell: true
  });

  emulatorProcess.unref();
}

export { startDevice };
