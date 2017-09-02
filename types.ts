let myString: string;
let myNum: number;
let myBoolean: boolean;
let myVar: any;

/* one way to define array...
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
*/

//other way to define array...
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

//tuple...
//strNumTuple will contain both string and number in defined sequence.
let strNumTuple: [string, number];


myString = "Hello from TS!";
myNum = 2.5;
myBoolean = true;
myVar = true;

strArr = ['hello', 'world'];
numArr = [1, 2];
boolArr = [true, false];
strNumTuple = ["hello", 4, 5, "hi", 7];

//void can represent both null and undefined
let myVoid: void = null;
let myNull: null = null;
let myArr: undefined = null;

console.log(myString);
console.log(myNum);
console.log(myBoolean);
console.log(strArr);
console.log(numArr);
console.log(boolArr);
console.log(strNumTuple);




