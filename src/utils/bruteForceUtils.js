// import sortComponent from "../views/sortComponent/sortComponent";

const clearArr = (arr) => {
  while (arr.length > 0) {
    arr.pop();
  }
};

const generateRandoNumboArr = (len, arr) => {
  if (arr.length > 0) clearArr(arr);

  for (let i = 0; i < len; i++) {
    arr.push(Math.ceil(Math.random() * 100));
  }

  console.log(arr);
};


const bubbleSort = (arr, times) => {
  const bubbleStart = performance.now();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  const bubbleEnd = performance.now();
  times.push(bubbleEnd - bubbleStart);
};

const selectionSort = (arr, times) => {
  const selectionStart = performance.now();
  for (let i = 0; i < arr.length; i++) {
    //Assume that the first index holds
    //the minimum element
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
      // }
      //swap
      if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  const selectionEnd = performance.now();
  times.push(selectionEnd - selectionStart);
};

//  const sortFunction = () => {
//   return (
//     <>
//       {Array.from({ length: 10 }, (_, i) => (
//         <div key={i}>{sortComponent(i)}</div>
//       ))}
//     </>
//   );
// };

const recordSortingTimes = (bubbleTimes = [], selectionTimes = []) => {
  const lengths = [10, 100, 1000, 10000, 100000];

  lengths.forEach((length) => {
    const bubbleArr = [];
    const selectArr = [];

    generateRandoNumboArr(length, bubbleArr);
    bubbleSort(bubbleArr, bubbleTimes);
    generateRandoNumboArr(length, selectArr);
    selectionSort(selectArr, selectionTimes);

    console.log("Unsorted Bubble Array: ", bubbleArr)
    console.log(`Bubble Timer for Size ${length}: `, bubbleTimes)
    console.log("Unsorted Select Array: ", selectArr)
    console.log(`Selection Timer for Size ${length}: `, selectionTimes)


    console.log("")
    console.log("")


  });
};

module.exports = { generateRandoNumboArr, bubbleSort, clearArr, selectionSort, recordSortingTimes };

// Allow calling the function from the command line
if (require.main === module) {
  const [, , functionName, len, ...rest] = process.argv;

  if (typeof module.exports[functionName] === 'function') {
    const arr = [];
    module.exports[functionName](parseInt(len), arr); // Pass arguments to the function
  } else {
    console.log(`Function ${functionName} does not exist.`);
  }
}




// $ node
//   > global.myVar = 100;
// > global.myVar
// 100
//   > myVar = 200;  // Automatically becomes global in REPL
// > global.myVar
// 200
// $ node
//   > global.multiply = function(a, b) { return a * b; }
// undefined
//   > multiply(3, 4);`
// 12
// $ node
//   > global.arr =[];
// > const { generateRandoNumboArr } = require('./bruteForceUtils');
// > generateRandoNumboArr(10, global.arr);
// [42, 78, 23, 66, 99, 57, 88, 20, 45, 9]  // Example output
