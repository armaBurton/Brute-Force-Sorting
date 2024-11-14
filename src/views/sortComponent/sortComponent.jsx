import { generateRandoNumboArr, bubbleSort, selectionSort } from "../../utils/utils";
import displayArrShort from "../displayArr/displayArrShort";
import '../../App.css';


const sortComponent = (i) => {
    const randomArr = [];

    generateRandoNumboArr(20, randomArr);

    const bubbleSorted = bubbleSort([...randomArr],);
    const selectionSorted = selectionSort([...randomArr]);
    // const jsSortStart = performance.now();
    // const jsSorted = jsSort([...randomArr]);
    const javaScriptSort = [...randomArr].sort((a, b) => a - b);
    // const jsSortEnd = performance.now();
    // const jsSortTime = (jsSortEnd - jsSortStart);
    // console.log(selectionSorted);
    // console.log(bubbleSorted);
    // console.log(jsSortTime);
    // console.log("test");


    return (
        <>
            <div className="listSection">
                <h1 className="test">Test #{i + 1}</h1>
                <ul>
                    <li className="firstList">Original Array:
                        <div className='showArr2'>
                            <div className="lineItem">
                                {displayArrShort(randomArr)}
                            </div>
                        </div>
                    </li>
                    <li className="firstList">
                        <div className="trueOrFalse">
                            <div>Bubble Sort:</div>
                            <div className="same">
                                Identical to JavaScript sort: {(JSON.stringify(selectionSorted) === JSON.stringify(javaScriptSort)) ? <p>&nbsp; <b>true</b></p> : <p>&nbsp; <b>false</b></p>}
                            </div>
                        </div>
                        <div className='showArr2'>
                            <div className="lineItem">
                                {displayArrShort(bubbleSorted)}
                            </div>
                        </div>
                    </li>
                    <li className="firstList">
                        <div className="trueOrFalse">
                            <div>
                                Selection Sort:
                            </div>
                            <div className="same">
                                Identical to JavaScript sort: {(JSON.stringify(selectionSorted) === JSON.stringify(javaScriptSort)) ? <p>&nbsp; <b>true</b></p> : <p>&nbsp; <b>false</b></p>}
                            </div>
                        </div>
                        <div className='showArr2'>
                            <div className="lineItem">
                                {displayArrShort(selectionSorted)}
                            </div>
                        </div>
                    </li>
                    <li className="firstList">
                        JavaScript Sort:
                        <div className='showArr2'>
                            <div className="lineItem">
                                {displayArrShort(javaScriptSort)}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default sortComponent;
