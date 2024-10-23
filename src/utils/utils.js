const clearArr = (arr) =>{
    while(arr.length > 0){
        arr.pop();
    }
}

export const generateRandoNumboArr = (arr) => {
    //always generates a fresh array
    if (arr.length > 0) clearArr(arr);
    for (let i = 0; i < 20; i++) {
        arr.push(Math.ceil(Math.random() * 100));
    }
}

export const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

export const selectionSort = (arr) => {
    for(let i = 0; i < arr.length;i++){
        //Assume that the first index holds
        //the minimum element
        let min = i;

        for (let j = i + 1;j < arr.length; j++){
            if (arr[j] < arr[min]) min = j;
        }
        //swap
        if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

export const sortTest = () => {
    for (let i = 0; i < 10; i++){
        console.log("sort test");
        const randomArr = [];
        generateRandoNumboArr(randomArr);

        const bubbleSorted = bubbleSort([...randomArr]);
        const selectionSorted = selectionSort([...randomArr]);
        const javaScriptSort = [...randomArr].sort((a, b) => a - b);

        console.log(`Original Array: ${JSON.stringify(randomArr)}`);
        console.log("Bubble Sorted: ", JSON.stringify(bubbleSorted));
        console.log("Selection Sorted: ", JSON.stringify(selectionSorted));
        console.log("JavaScript Sort: ", JSON.stringify(javaScriptSort));

        const bubbleTest = JSON.stringify(bubbleSorted) === JSON.stringify(javaScriptSort);
        const selectionTest = JSON.stringify(selectionSorted) === JSON.stringify(javaScriptSort);

        console.log(`Test ${i + 1}: Bubble Sort Test: ${bubbleTest}, Selection Sort Test: ${selectionTest}`);


        
        // console.log("bubbleSorted ", JSON.stringify(bubbleSorted));
    }
}