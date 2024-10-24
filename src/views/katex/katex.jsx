import React from 'react';
import Latex from 'react-latex';
import "../../App.css"

const KaTeX = () => {
    return (<>
        <div className='katex'>
            <h1>Asymptotic Runtimes</h1>

            <ol>
                <li><b>Bubble Sort:</b> Because there are two loops, 
                    one nested inside the other the time complexity in the average and worst case scenario the 
                    Asympototic Runtime is O(n^2) and the best case it would be O(n) if the array is already sorted.</li>
                <li><b>Selected Sort:</b> Like the bubble sort, the selected sort also has nested for loops
                    so it alsoo has a time complexity of 0(n^2). The difference is that the Selected Sort will
                    perform it's full operation, even if the list is sorted. </li>
                         
      
            </ol>
        </div>
    </>
    );
};

export default KaTeX;
















            {/* <BlockMath>{`E = mc^2`}</BlockMath> */}
            <p>
                {/* This is an inline equation: <InlineMath>{`\\frac{a}{b}`}</InlineMath> */}
            </p>