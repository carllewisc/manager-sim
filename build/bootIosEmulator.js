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
exports.openDevice = exports.openSimulator = void 0;
const utils_1 = require("./utils");
const openSimulator = () => __awaiter(void 0, void 0, void 0, function* () {
    const openSimulatorCommand = 'open -a Simulator';
    try {
        const { stdout, stderr } = yield (0, utils_1.runCommand)(openSimulatorCommand);
        if (stderr) {
            console.error(`Error en la salida estándar al abrir el emulador: ${stderr}`);
            return;
        }
        console.log('Emulador abierto con éxito.');
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
exports.openSimulator = openSimulator;
const checkEmulator = () => __awaiter(void 0, void 0, void 0, function* () {
    const command = 'pgrep -x Simulator';
    try {
        const { stdout, stderr } = yield (0, utils_1.runCommand)(command);
        if (stderr) {
            console.error(`Error in command output: ${stderr}`);
            return;
        }
        if (stdout.trim() === '') {
            console.log('Simulator is not running');
            return false;
        }
        console.log('Simulator is running');
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
const openDevice = (device) => __awaiter(void 0, void 0, void 0, function* () {
    const command = `xcrun simctl boot ${device}`;
    try {
        const { stdout, stderr } = yield (0, utils_1.runCommand)(command);
        if (stderr) {
            console.error(`Error en la salida estándar: ${stderr}`);
            return;
        }
        console.log(`Emulador iniciado con éxito para el dispositivo ${device}`);
        openSimulator();
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
exports.openDevice = openDevice;
