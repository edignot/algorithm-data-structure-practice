// Problem: SnailSort is an algorithm that takes an array of equal-length sub-arrays, and then merges them into a single array in a clockwise spiral, starting from the upper-left hand corner.
// Time complexity: 
const arrayMatrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
];

// const arrayMatrix = [
//   [1, 2, 3],
//   [6, 7, 8],
//   [11, 12, 13],
// ];
const snail = (arrayMatrix) => {
    const finalArray = [];
    while (arrayMatrix.length > 0) {
        arrayMatrix[0].forEach((el) => finalArray.push(el));
        arrayMatrix.splice(0, 1);
        arrayMatrix.forEach((arr) => {
            if (arrayMatrix.indexOf(arr) !== arrayMatrix.length - 1) {
                finalArray.push(arr[arr.length - 1]);
                arr.pop();
            }
        });
        if (arrayMatrix[arrayMatrix.length - 1]) {
            arrayMatrix[arrayMatrix.length - 1]
                .reverse()
                .forEach((el) => finalArray.push(el));
            arrayMatrix.pop();
        }
        arrayMatrix.reverse();
        arrayMatrix.forEach((arr) => {
            if (arrayMatrix.indexOf(arr) !== arrayMatrix.length - 1) {
                finalArray.push(arr[0]);
                arr.shift();
            }
        });
        arrayMatrix.reverse();
    }
    return finalArray;
};

export default snail