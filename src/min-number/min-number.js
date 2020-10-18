// Problem: Find smallest number inside given array
// Time complexity: O(n)

const getMinNum = (numArr) => {
    let minNum = numArr[0];
    numArr.forEach((el) => {
        el < minNum && (minNum = el);
    });
    return minNum;
};

export default getMinNum;
