// import { Chart } from "/chart.js"
import { get_call_data } from "./firebase.js"

const raw = await get_call_data('call_1');
 

const donuts = {
    "donut_1": {"color": "#5b2574", "emotion": "Sad"},
    "donut_2": {"color": "#a73c78", "emotion": "Engaged"},
    "donut_3": {"color": "#e96091", "emotion": "Happy"},
    "donut_4": {"color": "#f77cb0", "emotion": "Drowsy"}
}

let donut_id = 'donut_1';

let donut_1 = document.getElementById('donut_1').getContext('2d');
let donut1 = new Chart(donut_1, {
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
    }
});

let donut_2 = document.getElementById('donut_2').getContext('2d');
donut_id = 'donut_2';
let donut2 = new Chart(donut_2, {
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
    }
});

let donut_3 = document.getElementById('donut_3').getContext('2d');
donut_id = 'donut_3';
let donut3 = new Chart(donut_3, {
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
    }
});

let donut_4 = document.getElementById('donut_4').getContext('2d');
donut_id = 'donut_4';
let donut4 = new Chart(donut_4, {
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
    }
});

import { getFirestore, collection, getDocs, doc, getDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js'
const db = getFirestore();

const unsub = onSnapshot(doc(db, "user_1", "call_1"), doc => {
    const d = doc.data();
    donut1.data.datasets[0].data = [d["Sad"][0], 100-d["Sad"][0]]
    donut1.update()

    donut2.data.datasets[0].data = [d["Engaged"][0], 100-d["Engaged"][0]]
    donut2.update()

    donut3.data.datasets[0].data = [d["Happy"][0], 100-d["Happy"][0]]
    donut3.update()

    donut4.data.datasets[0].data = [d["Drowsy"][0], 100-d["Drowsy"][0]]
    donut4.update()

  })