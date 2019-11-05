var isFetching = true;
var isLodaing = false;
var int = 42;
var float = 4.2;
var num = 4e10;
var message = "Hello typescript";
var numberArray = [1, 2, 3, 4, 5, 6, 13];
var numberArray2 = [1, 2, 3, 4, 5, 6, 13]; //generic type
var wordsArray = ['Hello', 'type', 'script'];
//Tuple
var contact = ['tata', 1234567];
//Any
var variable = 42;
//... 
variable = 'New string';
// ====
function sayMyName(name) {
    console.log(name);
}
sayMyName('Haizenberg');
// Never
function trowError(error) {
    throw new Error(error);
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
