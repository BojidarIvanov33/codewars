// Step 1: Create a function called encode() to replace all the lowercase vowels in
// a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry
// about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into
// vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the
// function will correspond to vowels.

// ################################################################
//#######################mySolution################################
// ################################################################

function encode(arr) {
  arr = String(arr);
  for (let i = 0; i < arr.length; i++) {
    arr = arr.replace("a", "1");
    arr = arr.replace("e", "2");
    arr = arr.replace("i", "3");
    arr = arr.replace("o", "4");
    arr = arr.replace("u", "5");
  }
  return arr;
}
function decode(arr) {
  arr = String(arr);
  for (let i = 0; i < arr.length; i++) {
    arr = arr.replace("1", "a");
    arr = arr.replace("2", "e");
    arr = arr.replace("3", "i");
    arr = arr.replace("4", "o");
    arr = arr.replace("5", "u");
  }
  return arr;
}
console.log(encode("Hello"));
console.log(decode("h3 th2r2"));
