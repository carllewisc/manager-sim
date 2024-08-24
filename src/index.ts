#!/usr/bin/env node

import * as iOSCommands from './ios';
import * as androidCommands from './android';

import { isValidUUID, showCurrentOS, validateIfCanUseIOS } from './utils';

const argument = process.argv.slice(2);
const UUID = argument[1];

type Platform = 'ios' | 'android';
const lastArgument = argument[argument.length - 1] as Platform
let optionSelected = 'android';

if (lastArgument === 'ios') {
  console.log('📱 Platform iOS');
} else if (lastArgument === 'android') {
  console.log('🤖 Platform Android');
}

if (!validateIfCanUseIOS() && lastArgument === 'ios') {
  process.exit(1);
}

const listCommands = ['list-devices', 'start-device', 'shutdown-device', 'reset-device'];
const platformCommands = ['ios', 'android'];

if (validateIfCanUseIOS() && (!platformCommands.includes(lastArgument) || lastArgument === 'ios')) {
  optionSelected = 'ios';
  console.log('📱 Platform iOS');
} else if (lastArgument === 'android') {
  optionSelected = 'android';
  console.log('🤖 Platform Android');
}

showCurrentOS();

if (optionSelected === 'android') {
  switch (argument[0]) {
    case 'list-devices':
      (async () => {
        await androidCommands.listDownloadedEmulators();
      })();
      break;
    case 'start-device':
      (async () => {
        await androidCommands.startDevice(UUID);
      })();
      break;
    case 'shutdown-device':
      (async () => {
        await androidCommands.shutdownDevice(UUID);
      })();
      break;
    case 'reset-data':
      if (!UUID) {
        console.log('🚫 Error: No se ha especificado el UUID del dispositivo.');
        break;
      }
      (async () => {
        await androidCommands.resetDeviceData(UUID, argument[2]);
      })();
      break;
    default:
      console.log('🚫 No valid command specified.');
      break;
  }
}

if (optionSelected === 'ios') {
  switch (argument[0]) {
    case 'list-devices':
      (async () => {
        await iOSCommands.showDevices();
      })();
      break;
    case 'start-device':
      if (!UUID) {
        console.log('🚫 Error: No device UUID specified.');
        break;
      }
      if (!isValidUUID(UUID)) {
        console.log('🚫 Error: UUID is not valid.');
        break;
      }

      (async () => {
        await iOSCommands.openDevice(UUID);
      })();
      break;
    case 'shutdown-device':
      if (!isValidUUID(UUID)) {
        console.log('🚫 Error: UUID is not valid.');
        break;
      }

      (async () => {
        await iOSCommands.closeEmulator(UUID);
      })();
      break;
    case 'reset-device':
      if (!isValidUUID(UUID)) {
        console.log('🚫 Error: UUID is not valid.');
        break;
      }

      (async () => {
        await iOSCommands.resetEmulator(UUID);
      })();
      break;
    default:
      console.log('🚫 No valid command specified.');
      break;
  }
}
