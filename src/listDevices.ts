import CliTable3 from "cli-table3";

import { runCommand } from "./utils";

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
    head: ['UUID', 'Name', 'State'],
    colWidths: [40, 50, 15],
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
    devices.forEach((device) => {
      const name = `📱 ${device.name}`;
      const showState = device.state === 'Booted' ? '✅' : '❌';
      tableDevices.push([device.udid, name, `${showState} ${device.state}`]);
    });

    console.log(tableDevices.slice(0, 5).toString());
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  } 
}

export {
  showDevices
}
