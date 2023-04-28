#!/usr/bin/env node

import * as iOSCommands from './ios';

import { isValidUUID, showCurrentOS } from './utils';

const argument = process.argv.slice(2);
const UUID = argument[1];

showCurrentOS();

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
