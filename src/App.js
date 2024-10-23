import React from 'react';
import './App.css';
import { generateRandoNumboArr, bubbleSort } from './utils/utils';
import displayArr from './views/displayArr/displayArr';

function App() {
  const randoNumboArr = [];
  generateRandoNumboArr(randoNumboArr);
  const bubbleSorted = [...randoNumboArr];

  console.log(randoNumboArr);

  bubbleSort(bubbleSorted);
  console.log(bubbleSorted);


  return (
    <div className="App">
      <header className="App-header">

      </header>

      <section>
        <div>
          <h1>Randomly Generated Array:</h1>
          <div className='showArr'>
            {displayArr(randoNumboArr)}
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
            <div className='hideMe'>
              {generateRandoNumboArr(randoNumboArr)}
            </div>
            {displayArr(randoNumboArr)}
          </div>
        </div>
        <div>
          <h1>Selection Sorted Array:</h1>
          <div className='showArr'>
            {displayArr(bubbleSorted)}
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
