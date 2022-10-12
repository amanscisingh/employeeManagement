import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({dataPoint, date}) => {
    const options = {
        chart: {
            id: 'apexchart-example'
        },
        xaxis: {
            categories: ["Not Working", "Working", "Meeting"]
        }
    }

    const series =  [{
        name: 'Weekly Aggregate (in minutes)',
        data: dataPoint
    }]

    return (
    <div className="pieChartBox">
        <p style={{fontSize:'25px'}}> {date} </p>
        <Chart options={options} series={series} type="bar" width={500} height={320} />
    </div>
    )
}

export default BarChart