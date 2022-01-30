// import { Chart } from "/chart.js"
import { get_call_data } from "./firebase.js"

let myChart = document.getElementById('myChart').getContext('2d');

const raw = await get_call_data('call_2');

const lines = {
    "Drowsy": {"values": raw["Drowsy"],"color": "#f77cb0"},
    "Sad": {"values": raw["Sad"], "color": "#5b2574"},
    "Engaged": {"values": raw["Engaged"], "color": "#a73c78"},
    "Happy": {"values": raw["Happy"], "color": "#e96091"}
}

console.log(raw);

const data = {
  labels: raw["Timestamp"],
  datasets: [{
    label: 'Drowsy',
    backgroundColor: lines['Drowsy'].color,
    borderColor: lines['Drowsy'].color,
    fill: false,
    data: lines['Drowsy'].values,
  }, {
    label: 'Happy',
    backgroundColor: lines['Happy'].color,
    borderColor: lines['Happy'].color,
    fill: false,
    data: lines['Happy'].values,
  }, {
    label: 'Sad',
    backgroundColor: lines['Sad'].color,
    borderColor: lines['Sad'].color,
    fill: false,
    data: lines['Sad'].values,
  }, {
    label: 'Engaged',
    backgroundColor: lines['Engaged'].color,
    borderColor: lines['Engaged'].color,
    fill: false,
    data: lines['Engaged'].values,
  }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            title: {
                text: 'Emotions over Time',
                display: true
            }
        },
        scales: {
            x: {
                type: 'time',
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                title: {
                    display: true,
                    text: '%'
                }
            },
        },
    }
};

let lineChart = new Chart(myChart, config);