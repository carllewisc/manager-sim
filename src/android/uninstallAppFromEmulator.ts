import { exec } from 'child_process';

// Reemplaza esto con el nombre de tu emulador Android
const emulatorName = 'YOUR_EMULATOR_NAME';
// Reemplaza esto con el nombre del paquete de la aplicación que deseas desinstalar
const packageName = 'YOUR_APP_PACKAGE_NAME';

export function getDeviceId(emulatorName: string, callback: (deviceId: string | null) => void): void {
  const getDevicesCommand = 'adb devices';
  exec(getDevicesCommand, (error, stdout) => {
    if (error) {
      console.error(`Error al obtener dispositivos: ${error}`);
      callback(null);
      return;
    }

    const deviceLines = stdout.split('\n').filter((line) => line.includes(emulatorName));
    console.log({
      deviceLines
    })
    if (deviceLines.length === 0) {
      console.error(`Emulador "${emulatorName}" no encontrado.`);
      callback(null);
      return;
    }

    const deviceId = deviceLines[0].split('\t')[0];
    callback(deviceId);
  });
}

export function uninstallAppFromEmulator(deviceId: string, packageName: string): void {
  console.log(`Desinstalando la aplicación "${packageName}" del dispositivo "${deviceId}"...`);
  const uninstallAppCommand = `adb -s ${deviceId} uninstall ${packageName}`;
  exec(uninstallAppCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al desinstalar la aplicación: ${error}`);
      return;
    }
    if (stdout.includes('Success')) {
      console.log(`Aplicación "${packageName}" desinstalada correctamente del dispositivo "${deviceId}".`);
    } else {
      console.error(`Error al desinstalar la aplicación: ${stderr}`);
    }
  });
}

// Ejemplo de uso
// getDeviceId(emulatorName, (deviceId) => {
//   if (deviceId) {
//     uninstallAppFromEmulator(deviceId, packageName);
//   }
// });
