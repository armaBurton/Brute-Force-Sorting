import { generateRandoNumboArr, bubbleSort, selectionSort } from "../../utils/utils";
import displayArrShort from "../displayArr/displayArrShort";
import '../../App.css';


const sortComponent = (i) => {
    const randomArr = [];
    generateRandoNumboArr(20, randomArr);

    const bubbleSorted = bubbleSort([...randomArr]);
    const selectionSorted = selectionSort([...randomArr]);
    const javaScriptSort = [...randomArr].sort((a, b) => a - b);

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
                        Bubble Sort:
                        <div className='showArr2'>
                            <div className="lineItem">
                                {displayArrShort(bubbleSorted)}
                            </div>
                        </div>
                    </li>
                    <li className="firstList">
                        Selection Sort:
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
