const isFetching: boolean = true;
const isLodaing: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 4e10;

const message: string = "Hello typescript";

const numberArray: number[] = [1, 2, 3, 4, 5, 6, 13];
const numberArray2: Array<number> = [1, 2, 3, 4, 5, 6, 13]; //generic type

const wordsArray: string[] = ['Hello', 'type', 'script'];

//Tuple
const contact: [string, number] = ['tata', 1234567];

//Any
let variable: any = 42;

//... 
variable = 'New string';

// ====
function sayMyName(name: string): void {
    console.log(name);
}

sayMyName('Haizenberg');

// Never

function trowError(error: string): never {
    throw new Error(error);
}

// function infinite(): never {
// while (true) {

// }
// }

// Type

type Login = string;

const login: Login = 'admin';

type ID = string | number;

const id1: ID = 1234;
const id2: ID = '1234';

type SomeType = null | string | undefined; 