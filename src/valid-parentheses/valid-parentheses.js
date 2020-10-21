// Problem: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// - Open brackets must be closed by the same type of brackets.
// - Open brackets must be closed in the correct order.
// https://leetcode.com/problems/valid-parentheses/
// Time complexity:

const isValidParentheses = function (s) {
    if (s === "") return true;
    let index = -1;
    s.includes("()") && (index = s.indexOf("()"));
    s.includes("[]") && (index = s.indexOf("[]"));
    s.includes("{}") && (index = s.indexOf("{}"));
    if (index !== -1) {
        let arr = s.split("");
        arr.splice(index, 2);
        return isValidParentheses(arr.join(""));
    }
    return false;
};

export default isValidParentheses;
