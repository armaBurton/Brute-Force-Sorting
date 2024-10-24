import React from 'react';
import Plot from 'react-plotly.js';

const PlotlyChart = ({ data, labels }) => {
    return (
        data && data.bubbleTimes && data.selectionTimes ? (
            <Plot
                data={[
                    {
                        x: labels,
                        y: data.bubbleTimes,
                        type: 'scatter',
                        mode: 'lines+markers',
                        name: 'Bubble Sort',
                        marker: { color: 'red' },
                    },
                    {
                        x: labels,
                        y: data.selectionTimes,
                        type: 'scatter',
                        mode: 'lines+markers',
                        name: 'Selection Sort',
                        marker: { color: 'blue' },
                    },
                ]}
                layout={{
                    title: 'Sorting Algorithm Runtimes',
                    xaxis: { title: 'Array Length' },
                    yaxis: { title: 'Wall-Clock Runtime (ms)', type: 'log' }
                }}
                style={{ width: "100%", height: "500px" }}
            />
        ) : (
            <div>
                <p>Loading Data. Please be patient.</p>
            </div>
        )
    );
};

export default PlotlyChart;
