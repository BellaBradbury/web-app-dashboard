// OVERVIEW TRAFFIC CHARTS NAV
const chartBar = document.getElementsByClassName('tro-nav')[0];
const charts = document.querySelectorAll('#sect-tro canvas');

chartBar.addEventListener('click', (e) => {
    let target = e.target;

    if (target.tagName === 'BUTTON') {
        let opt = target.innerHTML.toLowerCase();

        charts.forEach(chart => {
            let data = chart.getAttribute('chart').toLowerCase();

            if (opt == data) {
                console.log(chart);

                chart.style.display = 'block';
            } else {
                chart.style.display = 'none';
            }
        });
    }
});