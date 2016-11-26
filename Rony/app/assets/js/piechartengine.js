$(function () {

    $(document).ready(function () {


        Highcharts.chart('pie', {
            chart: {
                backgroundColor: '#C0C0C0',
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Browser market shares January, 2015 to May, 2015'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Microsoft Internet Explorer',
                    y: 56.33,
                    color: '#800000'
                }, {
                    name: 'Chrome',
                    y: 24.03,
                    sliced: true,
                    selected: true,
                    color: '#0000A0'
                }, {
                    name: 'Firefox',
                    y: 10.38,
                    color: '#008000'
                }, {
                    name: 'Safari',
                    y: 4.77,
                    color: '#000000'
                }, {
                    name: 'Opera',
                    y: 0.91,
                    color: '#FFFF00'
                }, {
                    name: 'Proprietary or Undetectable',
                    y: 0.2
                }]
            }]
        });
    });
});