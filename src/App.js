import React from 'react';
import './App.css';
import { generateRandoNumboArr, sortFunction } from './utils/utils';
import displayArr from './views/displayArr/displayArr';
import { recordSortingTimes } from './utils/utils';

// const recordSortingTimes = () => {
//   const lengths = [10, 100, 1000, 10000, 100000];
  const bubbleTimes = [];
  const selectionTimes = [];
  // const bubbleSorted = [];
  
//   lengths.forEach((length) => {
//     const timerArray = [];

//     generateRandoNumboArr(length, timerArray);
//     bubbleSort(timerArray, bubbleTimes);
//     generateRandoNumboArr(length, timerArray);
//     selectionSort(timerArray, selectionTimes);

//   })

// }



function App() {
  const randoNumboArr1 = [];
  const randoNumboArr2 = [];
  generateRandoNumboArr(20, randoNumboArr1);
  const bubbleSorted = [...randoNumboArr1];
  generateRandoNumboArr(20, randoNumboArr2);
  const selectionSorted = [...randoNumboArr2];


  
    // console.log("test");
    // recordSortingTimes(bubbleTimes, selectionTimes);
// console.log('*** -39 -App.js *** bubbleTimes ==> ', bubbleTimes)
// console.log('*** -39 -App.js *** selectionTimes ==> ', selectionTimes)

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <section>
        <div>
          <h1>Randomly Generated Array:</h1>
          <div className='showArr'>
            {displayArr(randoNumboArr1)}
          </div>
        </div>
        <div>
          <h1>Bubble Sorted Array:</h1>
          <div className='showArr'>
            {displayArr(bubbleSorted)}
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>Randomly Generated Array:</h1>
          <div className='showArr'>
            {displayArr(randoNumboArr2)}
          </div>
        </div>
        <div>
          <h1>Selection Sorted Array:</h1>
          <div className='showArr'>
            {displayArr(selectionSorted)}
          </div>
        </div>
      </section>
      <section className='sectionOverride'>
        <div>
          <div className='showArr2'>
            {sortFunction()}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
