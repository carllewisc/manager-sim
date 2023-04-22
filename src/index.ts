#!/usr/bin/env node
import { showDevices } from './listDevices';

import { openDevice } from './bootIosEmulator';
import { closeEmulator } from './shutdownIosEmulator';
import { resetEmulator } from './resetEmulator';
import { isValidUUID } from './utils';

const argument = process.argv.slice(2);
const UUID = argument[1];

switch (argument[0]) {
  case 'list-devices':
    showDevices();
    break;
  case 'list-runtimes':
    console.log('list-runtimes');
    break;
  case 'start-device':
    if (!UUID){
      console.log('🚫 Error: No se ha especificado el UUID del dispositivo.');
      break;
    }

    if (!isValidUUID(UUID)) {
      console.log('🚫 Error: No se ha un un.');
      break;
    }
    openDevice(UUID);

    break;
  case 'shutdown-device':
    if (!isValidUUID(UUID)) {
      console.log('🚫 Error: No se ha especificado el UUID del dispositivo.');
    }
    closeEmulator(UUID);
    break;
  case 'reset-device':
    if (!isValidUUID(UUID)) {
      console.log('🚫 Error: No se ha especificado el UUID del dispositivo.');
      break;
    }
    resetEmulator(UUID);
    break;
  default:
    console.log('default');
    break;
}
