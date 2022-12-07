// node Vowels.js

/*
Long-long Vowels
Write a function, which is given a string, 
return the result of extending any long vowels to the length of 5.

longLongVowels('Good')
'Goooood'
longLongVowels('Cheese')
'Cheeeeese'

*/

const longLongVowels = (str) => {
  let vowels = ["a", "e", "o", "i", "u"];

  for (let i = 0; i < 4; i++) {
    twoLetterVowel = vowels[i] + vowels[i];
    threeLetterVowel = vowels[i] + vowels[i] + vowels[i];
    fourLetterVowel = vowels[i] + vowels[i] + vowels[i] + vowels[i];
    longLong = vowels[i] + vowels[i] + vowels[i] + vowels[i] + vowels[i];

    if (!str.includes(longLong, 0)) {
      if (str.includes(fourLetterVowel, 0)) {
        str = str.replaceAll(fourLetterVowel, longLong);
      } else if (str.includes(threeLetterVowel, 0)) {
        str = str.replaceAll(threeLetterVowel, longLong);
      } else if (str.includes(twoLetterVowel, 0)) {
        str = str.replaceAll(twoLetterVowel, longLong);
      }
    }
  }
  return str;
};

console.log(longLongVowels("Good"));
console.log(longLongVowels("Cheese"));
console.log(longLongVowels("Paaad"));
console.log(longLongVowels("Kiiiid"));
