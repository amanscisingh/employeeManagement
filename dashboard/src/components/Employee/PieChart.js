import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({dataPoint, date}) => {
    const options = {
        series: dataPoint,
        labels: ['Meeting', 'Work', 'Break'],
        chart: {
            width: 380,
            type: 'pie',
        },
        responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
      }

      return (
    <div className="pieChartBox">
        <p style={{fontSize:'25px'}}> {date} </p>
        {
            (dataPoint[0] == 0 && dataPoint[1] == 0 && dataPoint[2] == 0) ? 
            <div> 
                <Chart options={options} series={options.series} type="pie" width={500} height={320} />
                <p style={{fontSize:'25px'}}> No Tasks </p> 
            </div> : 
            <Chart options={options} series={options.series} type="pie" width={500} height={320} />
        }
    </div>
    )
}

export default PieChart