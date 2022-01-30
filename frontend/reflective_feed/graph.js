// import { Chart } from "/chart.js"
import { get_call_data } from "./firebase.js"

let myChart = document.getElementById('myChart').getContext('2d');

const raw = await get_call_data('call_1');

const lines = {
    "drowsy": {"values": Object.values(raw["drowsy"]),"color": "#f77cb0"},
    "sad": {"values": Object.values(raw["sad"]), "color": "#5b2574"},
    "engaged": {"values": Object.values(raw["engaged"]), "color": "#a73c78"},
    "happy": {"values": Object.values(raw["happy"]), "color": "#e96091"}
}

const data = {
  labels: getTimestamps(raw),
  datasets: [{
    label: 'Drowsy',
    backgroundColor: lines['drowsy'].color,
    borderColor: lines['drowsy'].color,
    fill: false,
    data: lines['drowsy'].values,
  }, {
    label: 'Happy',
    backgroundColor: lines['happy'].color,
    borderColor: lines['happy'].color,
    fill: false,
    data: lines['happy'].values,
  }, {
    label: 'Sad',
    backgroundColor: lines['sad'].color,
    borderColor: lines['sad'].color,
    fill: false,
    data: lines['sad'].values,
  }, {
    label: 'Engaged',
    backgroundColor: lines['engaged'].color,
    borderColor: lines['engaged'].color,
    fill: false,
    data: lines['engaged'].values,
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

function getTimestamps(data) {
    const timestamps = data["timestamps"];
    return Object.values(timestamps).map(stamp => stamp.seconds*1000);
}