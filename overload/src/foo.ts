
function min(a: string, b: string): string;
function min(a: number, b: number): number;
function min(a: string | number, b: string | number): string | number {
    if (typeof a !== typeof b) throw new Error("Expected identical types!");
    return a <= b ? a : b;
}

let x = min(123, 456);
let y = min("123", "456");
// let z = min(123, "456");
