$(function () {
    var options = {
        chart: {
            renderTo: 'container',
            marginTop: 50
        },
        xAxis: {
            min: 0,
            max: 10
        },
        title: {
            useHTML: true,
            x: -10,
            y: 8,
            text: '<span class="chart-title"> Drag and drop on a chart to add annotation  <span class="chart-href"> <a href="http://www.blacklabel.pl/highcharts" target="_blank"> Black Label </a> </span> <span class="chart-subtitle">plugin by </span></span>'
        },
        annotations: [{
            title: {
                text: '<span style="">drag me anywhere <br> dblclick to remove</span>',
                style: {
                    color: 'red'
                }
            },
            anchorX: "left",
            anchorY: "top",
            allowDragX: true,
            allowDragY: true,
            x: 515,
            y: 155
        }, {
            title: 'drag me <br> horizontaly',
            anchorX: "left",
            anchorY: "top",
            allowDragY: false,
            allowDragX: true,
            xValue: 4,
            yValue: 10,
            shape: {
                type: 'path',
                params: {
                    d: ['M', 0, 0, 'L', 110, 0],
                    stroke: '#c55'
                }
            }
        }, {
            title: 'on point <br> drag&drop <br> disabled',
            linkedTo: 'high',
            allowDragY: false,
            allowDragX: false,
            anchorX: "center",
            anchorY: "center",
            shape: {
                type: 'circle',
                params: {
                    r: 40,
                    stroke: '#c55'
                }
            }
        }, {
            x: 100,
            y: 200,
            title: 'drag me <br> verticaly',
            anchorX: "left",
            anchorY: "top",
            allowDragY: true,
            allowDragX: false,
            shape: {
                type: 'rect',
                params: {
                    x: 0,
                    y: 0,
                    width: 55,
                    height: 40
                }
            }
        }],
        series: [{
            data: [13, 4, 5, {
                y: 1,
                id: 'high'
            },
            2, 1, 3, 2, 11, 6, 5, 13, 6, 9, 11, 2, 3, 7, 9, 11]
        }]
    };

    var chart = new Highcharts.StockChart(options);
});