// Welcome.

// In this kata you are required to, given a string, replace every letter with its
// position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// // ################################################################
//#######################mySolution################################
// ################################################################

const alphabetPosition = function (arr) {
  const decArr = [];
  for (let i = 0; i < arr.length; i++) {
    // prettier-ignore
    switch (arr[i]) {
      case 'A':decArr.push(1); break;
      case 'B':decArr.push(2); break;
      case 'C':decArr.push(3); break;
      case 'D': decArr.push(4); break;
      case 'E':decArr.push(5); break;
      case 'F':decArr.push(6); break;
      case 'G':decArr.push(7); break;
      case 'H': decArr.push(8); break;
      case 'I':decArr.push(9); break;
      case 'J':decArr.push(10); break;
      case 'K':decArr.push(11); break;
      case 'L': decArr.push(12); break;
      case 'M':decArr.push(13); break;
      case 'N':decArr.push(14); break;
      case 'O':decArr.push(15); break;
      case 'P': decArr.push(16); break;
      case 'Q':decArr.push(17); break;
      case 'R':decArr.push(18); break;
      case 'S': decArr.push(19); break;
      case 'T':decArr.push(20); break;
      case 'U':decArr.push(21); break;
      case 'V':decArr.push(22); break;
      case 'W': decArr.push(23); break;
      case 'X': decArr.push(24); break;
      case 'Y': decArr.push(25); break;
      case 'Z': decArr.push(26); break;
      case 'a':decArr.push(1); break;
      case 'b':decArr.push(2); break;
      case 'c':decArr.push(3); break;
      case 'd': decArr.push(4); break;
      case 'e':decArr.push(5); break;
      case 'f':decArr.push(6); break;
      case 'g':decArr.push(7); break;
      case 'h': decArr.push(8); break;
      case 'i':decArr.push(9); break;
      case 'j':decArr.push(10); break;
      case 'k':decArr.push(11); break;
      case 'l': decArr.push(12); break;
      case 'm':decArr.push(13); break;
      case 'n':decArr.push(14); break;
      case 'o':decArr.push(15); break;
      case 'p': decArr.push(16); break;
      case 'q':decArr.push(17); break;
      case 'r':decArr.push(18); break;
      case 's': decArr.push(19); break;
      case 't':decArr.push(20); break;
      case 'u':decArr.push(21); break;
      case 'v':decArr.push(22); break;
      case 'w': decArr.push(23); break;
      case 'x': decArr.push(24); break;
      case 'y': decArr.push(25); break;
      case 'z':decArr.push(26); break;
    }
  }
  return decArr.join(" ");
};
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
