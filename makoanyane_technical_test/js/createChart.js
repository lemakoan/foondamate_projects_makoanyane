

function plotChart(data) {
    var dates = [];
    var numberOfUsers = [];

    for (var key in data) {
        dates.push(key);
        numberOfUsers.push(data[key]);
    }
    lineChart(numberOfUsers, dates);

}

function lineChart(numberOfUsers, dates) {
    var ctx = document.getElementById('lineGraph').getContext('2d');
    var chart = new Chart(ctx, {

    type: 'line',

    data: {
        labels: dates,
        datasets: [{
            borderColor: 'rgb(255, 99, 132)',
            data: numberOfUsers
        }]
    },

    options: {
        title: {
            display: true,
            text: 'Users Created - Weekly'
        },
        legend: {
            display: false
        }
}
});
}


