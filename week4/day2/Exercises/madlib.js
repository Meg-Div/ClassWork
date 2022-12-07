//node madlib.js

//Write a madlib function, which is given a name and a subject.
//It will return(not print) a new string: (name)'s favorite subject in school is (subject).

//madlib('Anushka', 'art');
//'Anushka's favorite subject in school is art.'

const madlib = (one, two) => `${one}'s favorite subject in school is ${two}.`;

console.log(madlib("Anushka", "art"));
