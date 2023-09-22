// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

// ################################################################
//#######################mySolution################################
// ################################################################

function multiply(a, b) {
  let isASingleDigit = 0,
    isBSingleDigit = 0;
  if (a < 9) {
    a *= 10;
    isASingleDigit = 1;
  }
  if (b < 9) {
    b *= 10;
    isBSingleDigit = 1;
  }
  let lengthOfA = a.length,
    lengthOfB = b.length,
    aInArry = [],
    bInArry = [];

  //     console.log(a, b);
  while (a.length > 7) {
    aInArry.push(a.substring(a.length - 7, a.length));
    a = a.substring(0, a.length - 7);
  }
  aInArry.push(a);

  while (b.length > 7) {
    bInArry.push(b.substring(b.length - 7, b.length));
    b = b.substring(0, b.length - 7);
  }
  bInArry.push(b);
  aInArry = aInArry.reverse();
  bInArry = bInArry.reverse();
  console.log(aInArry, bInArry);
  let answerLines = [];
  for (var i = aInArry.length - 1, j = 0; i >= 0; i--, j++) {
    answerLines[j] = bInArry.map((n) => (n * aInArry[i] === NaN ? "0000000" : n * aInArry[i]));

    var k = 0;
    while (k < j) {
      answerLines[j].push(0);
      k += 1;
    }
  }
  var answerInArray = answerLines[answerLines.length - 1];

  for (var j = 1; j < answerInArray.length; j++) {
    for (var i = 0; i < answerLines.length - 1; i++) {
      if (answerLines[i].length >= j) {
        answerInArray[answerInArray.length - j] += answerLines[i][answerLines[i].length - j];
      }
    }
  }
  let answerIn7DigitBlocksArray = [];

  for (var i = 0; i < answerInArray.length; i++) {
    answerIn7DigitBlocksArray.push("");
  }
  for (var i = 1; i <= answerInArray.length; i++)
    if (i !== answerInArray.length) {
      answerIn7DigitBlocksArray[answerIn7DigitBlocksArray.length - i] = answerInArray[answerInArray.length - i].toString().substring(answerInArray[answerInArray.length - i].toString().length - 7, answerInArray[answerInArray.length - i].toString().length);
      answerInArray[answerInArray.length - i - 1] += parseInt(answerInArray[answerInArray.length - i].toString().substring(0, answerInArray[answerInArray.length - i].toString().length - 7));
    } else answerIn7DigitBlocksArray[0] = answerInArray[0];
  console.log(a, b);
  if (isASingleDigit) {
    answerIn7DigitBlocksArray[answerIn7DigitBlocksArray.length - 1] /= 10;
  }
  if (isBSingleDigit) {
    answerIn7DigitBlocksArray[answerIn7DigitBlocksArray.length - 1] /= 10;
  }
  return answerIn7DigitBlocksArray.join("");
}
