
const exampleArray = [2, 4, 5, 7, 9, 4, 1, 16];
function getMin(arr) {
    return Math.min(...arr);
}

console.log(getMin(exampleArray));