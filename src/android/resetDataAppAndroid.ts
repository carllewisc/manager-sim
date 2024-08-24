// const { spawn } = require('child_process');
//
// // Define the package name of the app you want to clear data for
// const packageName = 'com.example.myapp';
//
// // Spawn a new process to execute the adb command
// const adb = spawn('adb', ['shell', 'pm', 'clear', packageName]);
//
// // Listen for output from the process
// adb.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });
//
// adb.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });
//
// // Listen for when the process exits
// adb.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

import { exec } from 'child_process';

export function resetDeviceData(deviceId: string, packageName: string) {
  // Tambien funciona:
  // adb shell pm clear com.raixer.com

  exec(`adb -s ${deviceId} shell pm clear ${packageName}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`Error resetting data on device ${deviceId}: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`Error resetting data on device ${deviceId}: ${stderr}`);
      return;
    }
    console.log(`Data reset on device ${deviceId}`);
  });
}
