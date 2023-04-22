import CliTable3 from 'cli-table3';

import { runCommand } from './utils';

interface SimulatorDevice {
  lastBootedAt: string;
  dataPath: string;
  dataPathSize: number;
  logPath: string;
  udid: string;
  isAvailable: boolean;
  logPathSize: number;
  deviceTypeIdentifier: string;
  state: string;
  name: string;
}

const showDevices = async () => {
  const tableDevices = new CliTable3({
    head: ['UUID', 'Name', 'State', 'Version OS'],
    colWidths: [40, 50, 15]
  });

  // list devices
  const command = 'xcrun simctl list devices --json';

  try {
    const { stdout, stderr } = await runCommand(command);

    if (stderr) {
      console.error(`Error en la salida estándar: ${stderr}`);
      return;
    }

    const data = JSON.parse(stdout);
    const devices: SimulatorDevice[] = data['devices']['com.apple.CoreSimulator.SimRuntime.iOS-16-2'];

    const items = Object.keys(data['devices'])
      .map(runtime => {
        const version = runtime.split('SimRuntime')[1].split('-');

        return data['devices'][runtime].map((device: SimulatorDevice) => ({
          ...device,
          versionOS: `${version[1]}.${version[2]}`
        }));
      })
      .flat()
      .filter((item: SimulatorDevice) => item.isAvailable);

    items.forEach(device => {
      const name = `📱 ${device.name}`;
      const showState = device.state === 'Booted' ? '✅' : '❌';
      tableDevices.push([device.udid, name, `${showState} ${device.state}`, device.versionOS]);
    });

    console.log(tableDevices.toString());
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
};

export { showDevices };
