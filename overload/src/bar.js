/**
 * @overload
 * @param a {string}
 * @param b {string}
 * @returns {string}
 */

/**
 * @overload
 * @param a {number}
 * @param b {number}
 * @returns {number}
 */

/**
 * @param a {string | number}
 * @param b {string | number}
 * @returns {string | number}
 */
function min(a, b) {
    if (typeof a !== typeof b) throw new Error("Expected identical types!");
    return a <= b ? a : b;
}

let x = min("abc", "def");
let y = min(123, 456);
// let z = min("abc", 123);
