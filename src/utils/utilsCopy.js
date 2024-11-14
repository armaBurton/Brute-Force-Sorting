// import sortComponent from "../views/sortComponent/sortComponent";

const clearArr = (arr) => {
  while (arr.length > 0) {
    arr.pop();
  }
};

 const generateRandoNumboArr = (len, arr = []) => {
  //always generates a fresh array
  if (arr.length > 0) clearArr(arr);

  for (let i = 0; i < len; i++) {
    arr.push(Math.ceil(Math.random() * 100));
  }
  console.log(arr);
};

 const bubbleSort = (arr = [], bubbleTimes = []) => {
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
  bubbleTimes.push(bubbleEnd - bubbleStart);

  return arr;
};

 const selectionSort = (arr = [], selectionTimes = []) => {
  const selectionStart = performance.now();
  for (let i = 0; i < arr.length; i++) {
    //Assume that the first index holds
    //the minimum element
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    //swap
    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  const selectionEnd = performance.now();
  selectionTimes.push(selectionEnd - selectionStart);

  return arr;
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
    generateRandoNumboArr(length, selectArr);
    // console.log(timerArray);

    bubbleSort(bubbleArr, bubbleTimes);
    selectionSort(selectArr, selectionTimes);
  });
};

module.exports = { generateRandoNumboArr };

if (require.main === module) {
  const [,, functionName, arg] = process.argv;
  
  // Call the specified function
  if (typeof module.exports[functionName] === 'function') {
    module.exports[functionName](arg);
  } else {
    console.log(`Function ${functionName} does not exist.`);
  }
}