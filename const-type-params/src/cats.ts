
interface Cat<Name extends string> {
    name: Name;
    meow(): void;
}

type Kittify<T extends readonly string[]> = {
    [K in keyof T]: Cat<T[K]>
}

declare function getCats<T extends readonly string[]>(obj: T): Kittify<T>;

let cats = getCats([
    "Pablo", "Fern", "Edward", "Hermione", "Momo", "Miso", "Nori", "Nacho", "C.C.",
]);

// const ed = cats[2];
// ed.meow()
