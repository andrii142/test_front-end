


const exampleArray = [2, 4, 5, 7, 9, 4, 1, 16];
function getEven(arr) {
    return arr.filter(function(value) {
        return value % 2 === 0;
    });
}

console.log(getEven(exampleArray));



