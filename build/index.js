#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listDevices_1 = require("./listDevices");
const bootIosEmulator_1 = require("./bootIosEmulator");
const shutdownIosEmulator_1 = require("./shutdownIosEmulator");
const resetEmulator_1 = require("./resetEmulator");
const utils_1 = require("./utils");
const argument = process.argv.slice(2);
const UUID = argument[1];
switch (argument[0]) {
    case 'list-devices':
        (0, listDevices_1.showDevices)();
        break;
    case 'list-runtimes':
        console.log('list-runtimes');
        break;
    case 'start-device':
        if (!UUID) {
            console.log('🚫 Error: No se ha especificado el UUID del dispositivo.');
            break;
        }
        if (!(0, utils_1.isValidUUID)(UUID)) {
            console.log('🚫 Error: No se ha un un.');
            break;
        }
        (0, bootIosEmulator_1.openDevice)(UUID);
        break;
    case 'shutdown-device':
        if (!(0, utils_1.isValidUUID)(UUID)) {
            console.log('🚫 Error: No se ha especificado el UUID del dispositivo.');
        }
        (0, shutdownIosEmulator_1.closeEmulator)(UUID);
        break;
    case 'reset-device':
        if (!(0, utils_1.isValidUUID)(UUID)) {
            console.log('🚫 Error: No se ha especificado el UUID del dispositivo.');
            break;
        }
        (0, resetEmulator_1.resetEmulator)(UUID);
        break;
    default:
        console.log('default');
        break;
}
