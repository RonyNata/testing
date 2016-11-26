$(function () {
    Highcharts.chart('line', {
        chart: {
            backgroundColor: '#000000',
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '<p style="color:#ffffff">Monthly Average Temperature</p>',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['<p style="color:#ffffff">Jan</p>', '<p style="color:#ffffff">Feb</p>', '<p style="color:#ffffff">Mar</p>', '<p style="color:#ffffff">Apr</p>', '<p style="color:#ffffff">May</p>', '<p style="color:#ffffff">Jun</p>',
                '<p style="color:#ffffff">Jul</p>', '<p style="color:#ffffff">Aug</p>', '<p style="color:#ffffff">Sep</p>', '<p style="color:#ffffff">Oct</p>', '<p style="color:#ffffff">Nov</p>', '<p style="color:#ffffff">Dec</p>']
        },
        yAxis: {
            title: {
                text: '<p style="color:#ffffff">Temperature (°C)</p>'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '<p style="color:#ffffff">Tokyo,/p>',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: '<p style="color:#ffffff">New York</p>',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: '<p style="color:#ffffff">Berlin</p>',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: '<p style="color:#ffffff">London</p>',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
});