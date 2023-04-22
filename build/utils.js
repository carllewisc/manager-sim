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
exports.isValidUUID = exports.runCommand = void 0;
const child_process_1 = require("child_process");
const util_1 = require("util");
function runCommand(command) {
    return __awaiter(this, void 0, void 0, function* () {
        const exec = (0, util_1.promisify)(child_process_1.exec);
        try {
            const { stdout, stderr } = yield exec(command);
            return { stdout, stderr };
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error executing command "${command}": ${error.message}`);
            }
            else {
                throw new Error(`Error executing command "${command}": ${error}`);
            }
        }
    });
}
exports.runCommand = runCommand;
function isValidUUID(uuid) {
    const uuidPattern = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    return uuidPattern.test(uuid);
}
exports.isValidUUID = isValidUUID;
