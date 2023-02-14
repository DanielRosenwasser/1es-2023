
export class Element {
    // ...
}

export abstract class Component {
    abstract render(): Element;
}

export interface FileSystem {
    readFile?(path: string): Uint8Array;
    writeFile?(path: string, contents: Uint8Array): void;
    deleteFile?(path: string): void;
    fileExists?(path: string): boolean;
}

export function createVirtualFileSystem(fs: FileSystem) {}
