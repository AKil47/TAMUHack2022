import { Chart } from "/chart.js"
import { get_call_data } from "/firebase.js"

let myChart = document.getElementById('myChart').getContext('2d');
let lineChart = new Chart(myChart, config);

const raw = await get_call_data('call_1');

const data = {
  labels: getTimestamps(raw),
  datasets: [{
    label: 'bored',
    backgroundColor: 'Red',
    borderColor: 'Red',
    fill: false,
    data: getBored(raw),
  }, {
    label: 'happy',
    backgroundColor: 'Blue',
    borderColor: 'Blue',
    fill: false,
    data: getSad(raw),
  }, {
    label: 'sad',
    backgroundColor: 'Green',
    borderColor: 'Green',
    fill: false,
    data: getHappy(raw),
  }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            title: {
                text: 'Chart.js Time Scale',
                display: true
            }
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    // Luxon format string
                    tooltipFormat: 'DD T'
                },
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'value'
                }
            },
        }
    }
};

function addPoint() {
    myData[myData.length] = Math.random();
    lineChart.update()
    console.log('here');
}

function getTimestamps(data) {
    const timestamps = data["timestamps"];
    return Object.values(timestamps).map(stamp => stamp.seconds);
}

function getBored(data) {
    const bored = data["bored"];
    return Object.values(bored);
}

function getHappy(data) {
    const sad = data["sad"];
    return Object.values(sad);
}

function getSad(data) {
    const happy = data["happy"];
    return Object.values(happy);
}