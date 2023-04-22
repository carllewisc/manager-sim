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
exports.resetEmulator = void 0;
const utils_1 = require("./utils");
const resetEmulator = (uuid) => __awaiter(void 0, void 0, void 0, function* () {
    const shutdownCommand = `xcrun simctl shutdown ${uuid}`;
    const eraseCommand = `xcrun simctl erase ${uuid}`;
    try {
        const { stdout, stderr } = yield (0, utils_1.runCommand)(shutdownCommand);
        if (stderr) {
            console.error(`Error al apagar el emulador: ${stderr}`);
            return;
        }
        console.log(`Emulador apagado: ${stdout}`);
        const { stdout: stdout2, stderr: stderr2 } = yield (0, utils_1.runCommand)(eraseCommand);
        if (stderr2) {
            console.error(`Error al borrar el emulador: ${stderr2}`);
            return;
        }
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
exports.resetEmulator = resetEmulator;
