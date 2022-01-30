// import { Chart } from "/chart.js"
import { get_call_data } from "/firebase.js"

const raw = await get_call_data('call_1');

const donuts = {
    "donut_1": {"color": "#5b2574", "emotion": "sad"},
    "donut_2": {"color": "#a73c78", "emotion": "bored"},
    "donut_3": {"color": "#e96091", "emotion": "happy"},
    "donut_4": {"color": "#f77cb0", "emotion": "drowsy"}
}

let donut_id = 'donut_1';

let donut_1 = document.getElementById('donut_1').getContext('2d');
let donut = new Chart(donut_1, {
    type: 'doughnut',
    data: {
        labels: [donuts[donut_id].emotion],
        datasets: [
            {
                label: donuts[donut_id].emotion,
                data: [Object.values(raw[donuts[donut_id].emotion])[Object.values(raw[donuts[donut_id].emotion]).length - 1], (100 - Object.values(raw[donuts[donut_id].emotion])[Object.values(raw[donuts[donut_id].emotion]).length - 1])],
                backgroundColor: [donuts[donut_id].color, 'white']
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: 'we are donuts bum bum bum bum bum bum bum bum bum'
            }
        },
        events: ['mouseout']
    }
});

let donut_2 = document.getElementById('donut_2').getContext('2d');
donut_id = 'donut_2';
donut = new Chart(donut_2, {
    type: 'doughnut',
    data: {
        labels: [donuts[donut_id].emotion],
        datasets: [
            {
                label: donuts[donut_id].emotion,
                data: [Object.values(raw[donuts[donut_id].emotion])[Object.values(raw[donuts[donut_id].emotion]).length - 1], (100 - Object.values(raw[donuts[donut_id].emotion])[Object.values(raw[donuts[donut_id].emotion]).length - 1])],
                backgroundColor: [donuts[donut_id].color, 'white']
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
                text: 'we are donuts bum bum bum bum bum bum bum bum bum'
            }
        },
        events: ['mouseout']
    }
});

let donut_3 = document.getElementById('donut_3').getContext('2d');
donut_id = 'donut_3';
donut = new Chart(donut_3, {
    type: 'doughnut',
    data: {
        labels: [donuts[donut_id].emotion],
        datasets: [
            {
                label: donuts[donut_id].emotion,
                data: [Object.values(raw[donuts[donut_id].emotion])[Object.values(raw[donuts[donut_id].emotion]).length - 1], (100 - Object.values(raw[donuts[donut_id].emotion])[Object.values(raw[donuts[donut_id].emotion]).length - 1])],
                backgroundColor: [donuts[donut_id].color, 'white']
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
                text: 'we are donuts bum bum bum bum bum bum bum bum bum'
            }
        },
        events: ['mouseout']
    }
});

let donut_4 = document.getElementById('donut_4').getContext('2d');
donut_id = 'donut_4';
donut = new Chart(donut_4, {
    type: 'doughnut',
    data: {
        labels: [donuts[donut_id].emotion],
        datasets: [
            {
                label: donuts[donut_id].emotion,
                data: [Object.values(raw[donuts[donut_id].emotion])[Object.values(raw[donuts[donut_id].emotion]).length - 1], (100 - Object.values(raw[donuts[donut_id].emotion])[Object.values(raw[donuts[donut_id].emotion]).length - 1])],
                backgroundColor: [donuts[donut_id].color, 'white']
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
                text: 'we are donuts bum bum bum bum bum bum bum bum bum'
            }
        },
        events: ['mouseout']
    }
});