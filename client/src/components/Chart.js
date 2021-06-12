import React from 'react';
import { Doughnut } from 'react-chartjs-2';
function Chart(props) {

  
  const data={
    labels:["Facebook","Instagram","YouTube","Total"],
    datasets: [
      {
        label: 'Clicks',
        data: props.dataArray,
        fill:true,
        backgroundColor: [
          'rgba(66, 103, 178, 0.2)',
          'rgba(198, 48, 131, 0.2)',
          'rgba(255, 0,  0, 0.2)',
          'rgba(19,129,183, 0.2)',
        ],
        borderColor: [
          'rgba(66, 103, 178, 1)',
          'rgba(198, 48, 131, 1)',
          'rgba(255, 0,  0, 1)',
          'rgba(19,129,183, 1)',
        ],
        borderWidth: 1,
      },
    ]
  }
 const options = {
    scales: {
      x: {
        title: {
          font: {
            size: 12,
            weight: 'bold',
          },
        },

        ticks: {
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },

      y: {
        title: {
          font: {
            size: 12,
            weight: 'bold',
          },
        },

        ticks: {
          beginAtZero: true,
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: props.title,
        padding: {
          top: 10,
          bottom: 22,
        },
        font: {
          size: 18,
          weight: 'bold',
        },
        color: 'black',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default Chart;