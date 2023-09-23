// Write an algorithm that takes an array and moves all of the zeros to the end,
//     preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// ################################################################
//#######################mySolution################################
// ################################################################

const moveZeros = function (arr) {
  let arrO = [];
  let arr1 = [];
  let c;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      //   c = arr.indexOf(0);
      arrO.push(arr[i]);
    } else if (arr[i] === 0) {
      // c = arr.indexOf(0);
      arr1.push(arr[i]);
    }
  }
  arr = arrO.concat(arr1);

  //   console.log(arr);
  return arr;
};
moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
