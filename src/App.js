import React from "react";
import "./App.css";
import { generateRandoNumboArr, sortFunction } from "./utils/utils";
import displayArr from "./views/displayArr/displayArr";
import { recordSortingTimes } from "./utils/utils";
import { clearArr } from "./utils/utils";
import PlotlyChart from "./views/plotly/plotly";
import KaTeX from "./views/katex/katex";
import Part2a from "./views/part2/part2a";

function App() {
  const bubbleTimes = [];
  const selectionTimes = [];
  const randoNumboArr1 = [];
  const randoNumboArr2 = [];
  generateRandoNumboArr(20, randoNumboArr1);
  const bubbleSorted = [...randoNumboArr1];
  generateRandoNumboArr(20, randoNumboArr2);
  const selectionSorted = [...randoNumboArr2];
  const sizes = [10, 100, 1000, 10000, 100000];

  clearArr(bubbleTimes);
  clearArr(selectionTimes);
  //     // console.log("test");
  recordSortingTimes(bubbleTimes, selectionTimes);
  console.log("*** -39 -App.js *** bubbleTimes ==> ", bubbleTimes);
  console.log("*** -39 -App.js *** selectionTimes ==> ", selectionTimes);

  const data = { bubbleTimes, selectionTimes };

  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="titleBlock">
        <h1 className="part">Part 1</h1>
      </section>
      <section>
        <div>
          <h1>Randomly Generated Array:</h1>
          <div className="showArr">{displayArr(randoNumboArr1)}</div>
        </div>
        <div>
          <h1>Bubble Sorted Array:</h1>
          <div className="showArr">{displayArr(bubbleSorted)}</div>
        </div>
      </section>
      <section>
        <div>
          <h1>Randomly Generated Array:</h1>
          <div className="showArr">{displayArr(randoNumboArr2)}</div>
        </div>
        <div>
          <h1>Selection Sorted Array:</h1>
          <div className="showArr">{displayArr(selectionSorted)}</div>
        </div>
      </section>
      <section className="sectionOverride">
        <div>
          <div className="showArr2">{sortFunction()}</div>
        </div>
      </section>
      <section className="chartSection">
        <PlotlyChart data={data} labels={sizes} />
      </section>
      <section>
        <KaTeX />
      </section>
      <section className="titleBlock">
        <h1 className="part">Part 2</h1>
      </section>
      <section>
        <div className="showArr">
          <Part2a />
        </div>
      </section>
    </div>
  );
}

export default App;
