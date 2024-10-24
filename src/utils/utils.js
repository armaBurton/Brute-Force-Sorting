import sortComponent from "../views/sortComponent/sortComponent";

const clearArr = (arr) => {
    while (arr.length > 0) {
        arr.pop();
    }
}

export const generateRandoNumboArr = (len, arr) => {
    //always generates a fresh array
    if (arr.length > 0) clearArr(arr);
    for (let i = 0; i < len; i++) {
        arr.push(Math.ceil(Math.random() * 100));
    }
}

export const bubbleSort = (arr = [], bubbleTimes = []) => {
    const bubbleStart = performance.now();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    const bubbleEnd = performance.now();
    bubbleTimes.push(bubbleEnd - bubbleStart);
    // console.log("Bubble Times: ", bubbleTimes);


    return arr;
}

export const selectionSort = (arr = [], selectionTimes = []) => {
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
    // console.log("Selection Times: ", selectionTimes);

    return arr;
}


export const sortFunction = () => {
    return (
        <>
            {Array.from({ length: 10 }, (_, i) => sortComponent(i))}
        </>
    )
}

export const recordSortingTimes = (bubbleTimes = [], selectionTimes = []) => {
    const lengths = [10, 100, 1000, 10000, 100000];
    
    lengths.forEach((length) => {
        const timerArray = [];
        
        generateRandoNumboArr(length, timerArray);
        bubbleSort(timerArray, bubbleTimes);
        generateRandoNumboArr(length, timerArray);
        selectionSort(timerArray, selectionTimes);
        
    })
    
}

















// export const sortTest = () => {
//     for (let i = 0; i < 10; i++) {
//         console.log("sort test");
//         const randomArr = [];
//         generateRandoNumboArr(randomArr);

//         const bubbleSorted = bubbleSort([...randomArr]);
//         const selectionSorted = selectionSort([...randomArr]);
//         const javaScriptSort = [...randomArr].sort((a, b) => a - b);

//         console.log(`Original Array: ${JSON.stringify(randomArr)}`);
//         console.log("Bubble Sorted: ", JSON.stringify(bubbleSorted));
//         console.log("Selection Sorted: ", JSON.stringify(selectionSorted));
//         console.log("JavaScript Sort: ", JSON.stringify(javaScriptSort));

//         const bubbleTest = JSON.stringify(bubbleSorted) === JSON.stringify(javaScriptSort);
//         const selectionTest = JSON.stringify(selectionSorted) === JSON.stringify(javaScriptSort);

//         console.log(`Test ${i + 1}: Bubble Sort Test: ${bubbleTest}, Selection Sort Test: ${selectionTest}`);
//     }
// }