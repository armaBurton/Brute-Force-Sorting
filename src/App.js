import React from 'react';
import './App.css';
import { generateRandoNumboArr, bubbleSort, selectionSort, sortTest } from './utils/utils';
import displayArr from './views/displayArr/displayArr';

function App() {
  const randoNumboArr1 = [];
  const randoNumboArr2 = [];
  generateRandoNumboArr(randoNumboArr1);
  const bubbleSorted = [...randoNumboArr1];
  generateRandoNumboArr(randoNumboArr2);
  const selectionSorted = [...randoNumboArr2]

  bubbleSort(bubbleSorted);
  selectionSort(selectionSorted);
  console.log("test");

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
      {sortTest()} 
    </div>
  );
}

export default App;
