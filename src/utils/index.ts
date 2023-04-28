import { exec as execCallback } from 'child_process';
import { promisify } from 'util';
import os from "os";

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

export function showCurrentOS(): void {
  const currentOS = os.type();

  const OSS: Record<OS, string> = {
    Windows_NT: '🖥 Current OS: Windows',
    Linux: '🐧 Current OS: Linux',
    Darwin: '🍎 Current OS: MacOS'
  };

  console.log(OSS[currentOS as OS]);
}
