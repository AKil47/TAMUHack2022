let myChart = document.getElementById('myChart').getContext('2d');
let myData = [1, 10, 3, 6, 2, 1, 7, 8]

let massPopChart = new Chart(myChart, {
    type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [{
            label: 'Population',
            data: myData,
            //backgroundColor: 'Red'
            backgroundColor: [
                'Red',
                'Orange',
                'Yellow',
                'Green',
                'Blue',
                'Violet',
            ],
            borderWidth: 1,
            borderColor: 'Black',
            hoverBorderWidth: '2',
            hoverBorderColor: 'Grey'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Largest Cities in Massachusetts',
            fontSize: 25
        },
        plugins: {
            legend: {
                position: 'right',
                title: {
                    display: true,
                    text: 'Legend Title',
                }
            }
        },
        padding: {
            left: 100,
            right: 0,
            bottom: 0,
            top: 0
        }
    }
});