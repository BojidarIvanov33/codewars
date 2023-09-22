// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

// ################################################################
//#######################mySolution################################
// ################################################################

function toUnderscore(string) {
  return (string = String(string)
    .split(/(?=[A-Z]+)/g)
    .join("_")
    .toLowerCase());
}
console.log(toUnderscore("TestController"));
