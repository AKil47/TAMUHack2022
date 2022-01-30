// import { Chart } from "/chart.js"
import { get_call_data } from "/firebase.js"

let myChart = document.getElementById('myChart').getContext('2d');

const raw = await get_call_data('call_1');

const emotions = [];

for (let e of Object.keys(raw)) {
    if (e != "timestamps") {
        emotions.push(e);
    }
}

const data = {
    labels: emotions,
    datasets: [
        {
            label: 'Emotions',
            data: getEmotions(raw, emotions),
            backgroundColor: ['Red', 'Pink', 'Violet']
        },
    ]
}

const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'we are donuts bum bum bum bum bum bum bum bum bum'
        }
      },
    },
  };

let bigboyDonut = new Chart(myChart, config);

function getEmotions(data, emotions) {
    const vals = [];
    for (let emotion of emotions) {
        vals.push(Object.values(data[emotion])[Object.values(data[emotion]).length - 1]);
    }

    return vals;
}