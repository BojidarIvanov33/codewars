// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// ################################################################
//#######################mySolution################################
// ################################################################

function toCamelCase(str) {
  if (str === "") {
    return "";
  } else {
    return str
      .split(/[-,_]+/)
      .map((i, j) => (j > 0 ? i[0].toUpperCase() + i.slice(1) : i[j] + i.slice(1)))
      .join("");
  }
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The-pippi_Is-Pippi"));
