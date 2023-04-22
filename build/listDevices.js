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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showDevices = void 0;
const cli_table3_1 = __importDefault(require("cli-table3"));
const utils_1 = require("./utils");
const showDevices = () => __awaiter(void 0, void 0, void 0, function* () {
    const tableDevices = new cli_table3_1.default({
        head: ['UUID', 'Name', 'State', 'Version OS'],
        colWidths: [40, 50, 15]
    });
    const command = 'xcrun simctl list devices --json';
    try {
        const { stdout, stderr } = yield (0, utils_1.runCommand)(command);
        if (stderr) {
            console.error(`Error en la salida estándar: ${stderr}`);
            return;
        }
        const data = JSON.parse(stdout);
        const devices = data['devices']['com.apple.CoreSimulator.SimRuntime.iOS-16-2'];
        const items = Object.keys(data['devices'])
            .map(runtime => {
            const version = runtime.split('SimRuntime')[1].split('-');
            return data['devices'][runtime].map((device) => (Object.assign(Object.assign({}, device), { versionOS: `${version[1]}.${version[2]}` })));
        })
            .flat()
            .filter((item) => item.isAvailable);
        items.forEach(device => {
            const name = `📱 ${device.name}`;
            const showState = device.state === 'Booted' ? '✅' : '❌';
            tableDevices.push([device.udid, name, `${showState} ${device.state}`, device.versionOS]);
        });
        console.log(tableDevices.toString());
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
exports.showDevices = showDevices;
