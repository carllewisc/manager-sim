import { exec as execCallback } from 'child_process';
import { promisify } from 'util';
import os from 'os';

export async function runCommand(command: string): Promise<{ stdout: string; stderr: string }> {
  const exec = promisify(execCallback);

  try {
    const { stdout, stderr } = await exec(command);
    return { stdout, stderr };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error executing command "${command}": ${error.message}`);
    } else {
      throw new Error(`Error executing command "${command}": ${error}`);
    }
  }
}

export function isValidUUID(uuid: string): boolean {
  const uuidPattern = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  return uuidPattern.test(uuid);
}

type OS = 'Windows_NT' | 'Linux' | 'Darwin';


export function showCurrentOS(): void {
  const currentOS = os.type();

  const OSS: Record<OS, string> = {
    Windows_NT: '🖥 Current OS: Windows',
    Linux: '🐧 Current OS: Linux.change',
    Darwin: '🍎 Current OS: MacOS.change11112'
  };

  console.log(OSS[currentOS as OS]);
}

export function validateIfCanUseIOS(): boolean {
  const currentOS = os.type();

  if (currentOS === 'Windows_NT') {
    console.log('🚫 Error: You cannot use iOS commands on Windows.');
    return false;
  }

  if (currentOS === 'Linux') {
    console.log('🚫 Error: You cannot use iOS commands on Linux.');
    return false;
  }

  return true;
}

export function selectDefaultPlatform(param: string): string {
  const currentOS = os.type();

  const options: Record<string, string> = {
    android: 'android',
    ios: 'ios'
  };

  if (options[param]) {
    return options[param];
  }

  return currentOS === 'Darwin' ? 'ios' : 'android';
}
