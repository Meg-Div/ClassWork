"use strict";
const hello = () => {
    console.log("hello");
};
//explicitly tell yourself to return something
const convertToUpper = () => {
    return "hello";
};
//parameters   "noUnusedParameters": true, add ?
const convert = (wordToUpperCase) => {
    return wordToUpperCase.toUpperCase();
};
const upperCase = convert("ello");
console.log(upperCase);
const randoNumber = (number) => {
    if (number)
        return number;
    const stringNum = randoNumber.toString();
    return stringNum;
};
console.log(randoNumber(98));
