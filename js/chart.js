// TRAFFIC OVERVIEW CHART - HOURLY
const troCotHour = document.getElementById('chart-tro-h');

let troChartHour = new Chart(troCotHour, {
    type: 'line',
    data: {
        labels: ['00-15', '16-30', '31-45', '46-59'],
        datasets: [{
            data: [150, 689, 520, 230],
            borderWidth: 1
        }]
    },
    options: {
        backgroundColor: 'rgba(120, 110, 180, .25)',
        fill: true,
        tension: 0.5,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// TRAFFIC OVERVIEW CHART - DAILY
const troCotDay = document.getElementById('chart-tro-d');

let troChartDay = new Chart(troCotDay, {
    type: 'line',
    data: {
        labels: ['12-1', '2-3', '4-5', '6-7', '8-9', '10-11', '12-1', '2-3', '4-5', '6-7', '8-9', '10-11'],
        datasets: [{
            data: [600, 1250, 1000, 2000, 1500, 1750, 1250, 1900, 2250, 1500, 2500, 700],
            borderWidth: 1
        }]
    },
    options: {
        backgroundColor: 'rgba(109, 191, 186, .25)',
        fill: true,
        tension: 0.5,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// TRAFFIC OVERVIEW CHART - WEEKLY
const troCotWeek = document.getElementById('chart-tro-w');

let troChartWeek = new Chart(troCotWeek, {
    type: 'line',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [9000, 7000, 6500, 4000, 5210, 8600, 11000],
            borderWidth: 1
        }]
    },
    options: {
        backgroundColor: 'rgba(168, 103, 168, .25)',
        fill: true,
        tension: 0.5,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// TRAFFIC OVERVIEW CHART - MONTHLY
const troCotMonth = document.getElementById('chart-tro-m');

let troChartMonth = new Chart(troCotMonth, {
    type: 'line',
    data: {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        datasets: [{
            data: [1500000, 1205300, 1102030, 930265, 946302, 986399, 1096325, 1365952, 1856320, 1456985, 1123567, 2015368],
            borderWidth: 1
        }]
    },
    options: {
        backgroundColor: 'rgba(119, 186, 126, .25)',
        fill: true,
        tension: 0.5,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// TRAFFIC DAILY CHART
const trdCot = document.getElementById('chart-trd');

let trdChart = new Chart(trdCot, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [9000, 7000, 6500, 4000, 5210, 8600, 11000],
            borderWidth: 1
        }]
    },
    options: {
        backgroundColor: 'rgba(120, 110, 180)',
        fill: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// USER MOBILE CHART
const umoCot = document.getElementById('chart-umo');

let umoChart = new Chart(umoCot, {
    type: 'doughnut',
    data: {
        labels: ['Desktop', 'Tablet', 'Phones'],
        datasets: [{
            data: [6650, 1862, 1532],
            borderWidth: 0
        }]
    },
    options: {
        backgroundColor: [
            'rgba(120, 110, 180)',
            'rgba(119, 186, 126)',
            'rgba(109, 191, 186)'
        ],
        weight: 0,
        fill: true,
        scales: {
            y: {
                display: false
            },
            x: {
                display: false
            }
        },
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
});