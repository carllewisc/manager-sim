"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeEmulator = void 0;
const utils_1 = require("./utils");
const checkIfEmulatorIsRunning = (UUID) => __awaiter(void 0, void 0, void 0, function* () {
    const command = `xcrun simctl list | grep -w "${UUID}" | grep -w "Booted"`;
    try {
        const { stdout, stderr } = yield (0, utils_1.runCommand)(command);
        if (stderr) {
            console.error(`Error en la salida estándar: ${stderr}`);
            return;
        }
        if (stdout.trim() === '') {
            console.log('Simulator is not running');
            console.log(`El dispositivo con UDID ${UUID} no está en ejecución`);
            return false;
        }
        console.log(`El dispositivo con UDID ${UUID} está en ejecución`);
        return true;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error running command: ${error.message}`);
        }
        else {
            console.error(`Error running command: ${error}`);
        }
    }
});
const closeAppSimulator = () => __awaiter(void 0, void 0, void 0, function* () {
    const closeSimulatorCommand = 'osascript -e \'tell application "Simulator" to quit\'';
    try {
        const { stdout, stderr } = yield (0, utils_1.runCommand)(closeSimulatorCommand);
        if (stderr) {
            console.error(`Error en la salida estándar: ${stderr}`);
            return;
        }
        console.log('Aplicación Simulator cerrada con éxito.');
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error running command: ${error.message}`);
        }
        else {
            console.error(`Error running command: ${error}`);
        }
    }
});
const closeEmulator = (UUID) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield checkIfEmulatorIsRunning(UUID))) {
        console.log(`El dispositivo con UDID ${UUID} no está en ejecución`);
        return;
    }
    const shutdownCommand = `xcrun simctl shutdown ${UUID}`;
    try {
        const { stdout, stderr } = yield (0, utils_1.runCommand)(shutdownCommand);
        if (stderr) {
            console.error(`Error en la salida estándar: ${stderr}`);
            return;
        }
        closeAppSimulator();
        console.log(`Emulador cerrado con éxito para el dispositivo ${UUID}`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error running command: ${error.message}`);
        }
        else {
            console.error(`Error running command: ${error}`);
        }
    }
});
exports.closeEmulator = closeEmulator;
