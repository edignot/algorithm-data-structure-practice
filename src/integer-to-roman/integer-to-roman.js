// Problem: Given an integer, convert it to a roman numeral
// https://leetcode.com/problems/integer-to-roman/
// Time complexity: O(n)

const integerToRoman = (num) => {
    const romans = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    const romanNum = [];
    for (const roman in romans) {
        if (num >= romans[roman]) {
            const amount = Math.floor(num / romans[roman]);
            for (let i = 0; i < amount; i++) {
                romanNum.push(roman);
            }
            num -= amount * romans[roman];
        }
    }
    return romanNum.join("");
};

export default integerToRoman;
