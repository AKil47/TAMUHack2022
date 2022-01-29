// import { Chart } from "/chart.js"
import { get_call_data } from "/firebase.js"

let myChart = document.getElementById('myChart').getContext('2d');

const raw = await get_call_data('user_1');

const data = [getBored(raw), getHappy(raw), getSad(raw)];

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
      }
    },
  };

let donut = new Chart(myChart, config);

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