// import { Chart } from "/chart.js"
import { get_call_data } from "/firebase.js"

let myChart = document.getElementById('myChart').getContext('2d');

const raw = await get_call_data('call_1');

const data = {
    labels: ['Bored', 'Sad', 'Happy'],
    datasets: [
        {
            label: 'Emotions',
            data: [getPercentage(getBored(raw)), getPercentage(getSad(raw)), getPercentage(getHappy(raw))],
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
          text: 'Chart.js Doughnut Chart'
        }
      },
    },
  };

let bigboyDonut = new Chart(myChart, config);

function getBored(data) {
    const bored = data["bored"];
    return bored[bored.length - 1];
}

function getHappy(data) {
    const sad = data["sad"];
    return sad[sad.length - 1];
}

function getSad(data) {
    const happy = data["happy"];
    return happy[happy.length - 1];
}

function getPercentage(num) {
    const sum = getBored(raw) + getSad(raw) + getHappy(raw);
    return (num / sum) * 100;
}