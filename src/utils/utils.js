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
}

export const selectionSort = (arr) => {

}