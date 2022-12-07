//node Caesar.js

/* 
Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

cipher('Genius without education is like silver in the mine')
'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'

offset: 14
Plain	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z
Cipher  N	O	P	Q	R   S   T	U	V	W   X	Y	Z	A	B	C	D	E	F   G	H	I	J	K	L	M

offset: 23
Plain	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z
Cipher	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W

offset: 23
Plain	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z
Cipher	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W

"alea iacta est", 3), 
"dohd megxe jxy");

*/

const cipher = (str, offset) => {
  //creates an array of the alphabet starting at A
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  //creates an array of the alphabet starting on the offset letter
  caeser = alphabet.slice(offset - 1).concat(alphabet.slice(0, offset - 1));

  newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      //index of the letter in alphabet
      idx = alphabet.indexOf(str[i].toLowerCase());

      if (str[i] === str[i].toLowerCase()) {
        //appends the letter in the caesar array at the same index as above
        newStr += caeser[idx].toLowerCase();
      } else {
        newStr += caeser[idx].toUpperCase();
      }
    } else {
      newStr += " ";
    }
  }
  return newStr;
};

console.log(cipher("Genius without education is like silver in the mine", 14));
console.log(cipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", 14));
