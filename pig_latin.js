// Move the first letter of each word to the end of it, then add "ay" to the end
//  of the word.Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// ################################################################
//#######################mySolution################################
// ################################################################

function pigIt(str) {
  const arr = str.split(" ");
  const output = [];
  for (const word of arr) {
    const firstLetter = word[0];
    const word1 = word.replace(word[0], "");
    if (!word.includes("!") && !word.includes("?") && !word.includes(".") && !word.includes(",")) {
      output.push(`${word1}${firstLetter}ay`);
    } else output.push(`${word}`);
  }
  return output.join(" ");
}
console.log(pigIt("Pig latin is cool"));
console.log(pigIt("Hello world !"));
console.log(pigIt("KriSo4e"));
