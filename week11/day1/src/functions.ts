const hello = () => {
    console.log("hello");
}

//explicitly tell yourself to return something
const convertToUpper = (): string => {
    return "hello"
}


//parameters   "noUnusedParameters": true, add ?
const convert = (wordToUpperCase:string): string => {
    return wordToUpperCase.toUpperCase();
}

const upperCase = convert("ello")
console.log(upperCase)

const randoNumber = (number: Number): Number | string  => {
if (number) return number;
const stringNum = randoNumber.toString()
return stringNum;
}

console.log(randoNumber(98));

//interfaces are used for complex objects
interface Farmanimal {
    name: string;
}

const pig:Farmanimal = {
    name: "Oinker",
}

//types are only used for very simple data structures
type Name = {
    name: string;
}

type Age = {
    age: string;
}

type Person = Name & Age;

const Joe: Person = {
    name: "Joe",
    age: "100",
}

interface Businesslocation {
    address: string;
    zip: string | number;
}

const groupOfStudents: Person[] = [];

groupOfStudents.push({name: "Adam", age: "22"});

interface UserData {
    id: string | number;
    index: number;
    balance: string;
    picture: string;
    lat: number;
    businesslocation: Businesslocation[];
}

const userdata: Response = await fetch ("www.url.com");
const json: UserData = await userdata.json();