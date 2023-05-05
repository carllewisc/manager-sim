import { exec } from 'child_process';

const shutdownDevice = (emulatorName: string): void => {
  console.log(`Shutting down Android emulator "${emulatorName}"...`);
  const getEmulatorPidCommand = `pgrep -f "${emulatorName}"`;

  exec(getEmulatorPidCommand, (error, stdout) => {
    if (error) {
      console.log(`Error getting emulator PID: ${error}`);
    } else {
      const emulatorPid = stdout.trim();
      const killEmulatorCommand = `kill ${emulatorPid}`;
      exec(killEmulatorCommand, error => {
        if (error) {
          console.log(`Error shutting down emulator: ${error}`);
        } else {
          console.log(`📴 Shut down ${emulatorName}.`);
        }
      });
    }
  });
};

export { shutdownDevice };
