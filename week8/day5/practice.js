//write a function that takes in an array of strings and group anagrams together.
//Anagrams are strings made up of exactly the same letters, where order doesn't matter.
//for example "cinema" and "iceman" are anagrams similarly. "foo" and "ofo" are anagrams.
//Your function should return a list of anagram groups in no particuar order.

//input
words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
//output [["yo", "oy"], ["flop", "olfp"], ["act", "tac","cat"], ["foo"]]

function anagrams(words) {
  sorted = [];
  output = [];
  for (let word of words) {
    w = word.split("");
    newWord = w.sort();
    word = newWord.join("");
    sorted.push(word);
  }
  while (sorted.length) {
    arr = [];
    let first = sorted[0];
    while (sorted.includes(first)) {
      let idx = sorted.indexOf(first);
      arr.push(words[idx]);
      sorted.splice(idx, 1);
      words.splice(idx, 1);
    }
    output.push(arr);
  }
  console.log(output);
  return output;
}

anagrams(words);
