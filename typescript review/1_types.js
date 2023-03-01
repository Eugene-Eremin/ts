// Types
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = "Hello Typescript";
var words = ["Hello", "Typescript"];
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var numAndStrArray = [1, "test", 2];
var cont = [4];
var obj = { test1: "hello", test2: 5 };
// Tuple
var contact = ["Vladilen", 1234567];
// Any
var variable = 42;
// ...
variable = "New String";
variable = [];
// ===
function sayMyName(name) {
    console.log(name);
}
sayMyName("Хайзенберг");
// Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
        console.log("never func");
    }
}
infinite();
var login = "admin";
var id1 = 1234;
var id2 = "1234";
var role = "user";
