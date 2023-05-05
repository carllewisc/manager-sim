import { exec } from 'child_process';

const listDownloadedEmulators = (): void => {
  exec('emulator -list-avds', (error, stdout, stderr) => {
    if (error) {
      console.log(`Error listing downloaded emulators: ${error.message}`);
      return;
    }

    const emulators = stdout.trim().split('\n');

    if (emulators.length === 0 || (emulators.length === 1 && emulators[0] === '')) {
      console.log('No downloaded emulators found.');
    } else {
      console.log('Downloaded emulators:');
      emulators.forEach(emulator => {
        console.log(emulator);
      });
    }
  });
};

export { listDownloadedEmulators };
