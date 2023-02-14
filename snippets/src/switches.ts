
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "rectangle";
    sideLength: number;
}

interface Triangle {
    kind: "triangle";
    base: number;
    height: number;
}

function getArea(shape: Circle | Square | Triangle) {

}
