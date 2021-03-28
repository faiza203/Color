import { Component, OnInit } from '@angular/core';
import * as global from '../../../config/globals';

declare let d3: any;

@Component({
  selector: 'chart-d3',
  templateUrl: './chart-d3.html'
})

export class ChartD3Page implements OnInit {
  stackedAreaChartData;
  stackedAreaChartOptions;
  stackedBarChartData;
  stackedBarChartOptions;
  lineChartData;
  lineChartOptions;
  barChartData;
  barChartOptions;
  donutChartData;
  donutChartOptions;
  pieChartData;
  pieChartOptions;
  ngOnInit() {
    this.stackedAreaChartData = [{
      key: "Unique Visitors",
      color: "#5AC8FA",
      values:[
        [1511605558229,13],[1511691958229,13],[1511778358229,6],[1511951158229,6],[1512037558229,6],[1512123958229,5],[1512210358229,5],[1512296758229,5],[1512383158229,6],[1512469558229,7],[1512555958229,6],[1512642358229,9],[1512728758229,9],[1512815158229,8],[1512901558229,10],[1512987958229,10],[1513074358229,10],[1513160758229,10],[1513247158229,9],[1513333558229,9],[1513419958229,10],[1513506358229,9],[1513592758229,9],[1513679158229,8],[1513765558229,8],[1513851958229,8],[1513938358229,8],[1514024758229,8],[1514111158229,7],[1514197558229,7],[1514283958229,6],[1514370358229,6],[1514456758229,6],[1514543158229,6],[1514629558229,5],[1514715958229,5],[1514802358229,4],[1514888758229,4],[1514975158229,5],[1515061558229,5],[1515147958229,5],[1515234358229,7],[1515320758229,7],[1515407158229,7],[1515493558229,10],[1515579958229,9],[1515666358229,9],[1515752758229,10],[1515839158229,11],[1515925558229,11],
        [1516011958229,8],[1516098358229,8],[1516184758229,7],[1516271158229,8],[1516357558229,9],[1516443958229,8],[1516530358229,9],[1516616758229,10],[1516703158229,9],[1516789558229,10],[1516875958229,16],[1516962358229,17],[1517048758229,16],[1517135158229,17],[1517221558229,16],[1517307958229,15],[1517394358229,14],[1517480758229,24],[1517567158229,18],[1517653558229,15],[1517739958229,14],[1517826358229,16],[1517912758229,16],[1517999158229,17],[1518085558229,7],[1518171958229,7],[1518258358229,7]
      ]
    },{
      key: "Page Views",
      color: "#348fe2",
      values:[
        [1511605558229,14],[1511691958229,13],[1511778358229,15],[1511951158229,14],[1512037558229,13],[1512123958229,15],[1512210358229,16],[1512296758229,16],[1512383158229,14],[1512469558229,14],[1512555958229,13],[1512642358229,12],[1512728758229,13],[1512815158229,13],[1512901558229,15],[1512987958229,16],[1513074358229,16],[1513160758229,17],[1513247158229,17],[1513333558229,18],[1513419958229,15],[1513506358229,15],[1513592758229,15],[1513679158229,19],[1513765558229,19],[1513851958229,18],[1513938358229,18],[1514024758229,17],[1514111158229,16],[1514197558229,18],[1514283958229,18],[1514370358229,18],[1514456758229,16],[1514543158229,14],[1514629558229,14],[1514715958229,13],[1514802358229,14],[1514888758229,13],[1514975158229,10],[1515061558229,9],
        [1515147958229,10],[1515234358229,11],[1515320758229,11],[1515407158229,11],[1515493558229,10],[1515579958229,9],[1515666358229,10],[1515752758229,13],[1515839158229,14],[1515925558229,14],[1516011958229,13],[1516098358229,12],[1516184758229,11],[1516271158229,13],[1516357558229,13],[1516443958229,13],[1516530358229,13],[1516616758229,14],[1516703158229,13],[1516789558229,13],[1516875958229,19],[1516962358229,21],[1517048758229,22],[1517135158229,25],[1517221558229,24],[1517307958229,24],[1517394358229,22],[1517480758229,16],[1517567158229,15],[1517653558229,12],[1517739958229,12],[1517826358229,15],[1517912758229,15],[1517999158229,15],[1518085558229,18],[1518085558229,18],[1518258358229,17]
      ]
    }];

    this.stackedAreaChartOptions = {
      chart: {
        type: 'stackedAreaChart',
        height: 260,
        useInteractiveGuideline: true,
        x: function(d){return d[0];},
        y: function(d){return d[1];},
        pointSize: 0.5,
        margin : { top: 20, right: 25, bottom: 20, left: 35 },
        controlLabels: { stacked: 'Stacked' },
        showControls: false,
        duration: 300,
        xAxis: {
          tickFormat: function(d) {
            var monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            d = new Date(d);
            d = monthsName[d.getMonth()] + ' ' + d.getDate();
            return d;
          }
        }
      }
    }

    this.stackedBarChartData = [{
        key: 'Stream 1',
        'color' : global.COLOR_RED,
        values: [
            { x:1, y: 10}, { x:2, y: 15}, { x:3, y: 16}, { x:4, y: 20}, { x:5, y: 57}, { x:6, y: 42}, { x:7, y: 12}, { x:8, y: 65}, { x:9, y: 34}, { x:10, y: 52},
            { x:11, y: 23}, { x:12, y: 12}, { x:13, y: 22}, { x:14, y: 22}, { x:15, y: 48}, { x:16, y: 54}, { x:17, y: 32}, { x:18, y: 13}, { x:19, y: 21}, { x:20, y: 12}
        ]
    },{
        key: 'Stream 2',
        'color' : global.COLOR_ORANGE,
        values: [
            { x:1, y: 10}, { x:2, y: 15}, { x:3, y: 16}, { x:4, y: 45}, { x:5, y: 67}, { x:6, y: 34}, { x:7, y: 43}, { x:8, y: 65}, { x:9, y: 32}, { x:10, y: 12},
            { x:11, y: 43}, { x:12, y: 45}, { x:13, y: 32}, { x:14, y: 32}, { x:15, y: 38}, { x:16, y: 64}, { x:17, y: 42}, { x:18, y: 23}, { x:19, y: 31}, { x:20, y: 22}
        ]
    },{
        key: 'Stream 2',
        'color' : global.COLOR_BLACK,
        values: [
            { x:1, y: 20}, { x:2, y: 25}, { x:3, y: 26}, { x:4, y: 30}, { x:5, y: 57}, { x:6, y: 52}, { x:7, y: 22}, { x:8, y: 75}, { x:9, y: 44}, { x:10, y: 62},
            { x:11, y: 35}, { x:12, y: 15}, { x:13, y: 25}, { x:14, y: 25}, { x:15, y: 45}, { x:16, y: 55}, { x:17, y: 35}, { x:18, y: 15}, { x:19, y: 25}, { x:20, y: 15}
        ]
    }];

    this.stackedBarChartOptions = {
      chart: {
        type: 'multiBarChart',
        height: 250,
        stacked: true,
        showControls: false
      }
    };

    this.pieChartData = [
      { 'label': 'One', 'value' : 29, 'color': global.COLOR_RED },
      { 'label': 'Two', 'value' : 12, 'color': global.COLOR_ORANGE },
      { 'label': 'Three', 'value' : 32, 'color': global.COLOR_GREEN },
      { 'label': 'Four', 'value' : 196, 'color': global.COLOR_AQUA },
      { 'label': 'Five', 'value' : 17, 'color': global.COLOR_BLUE },
      { 'label': 'Six', 'value' : 98, 'color': global.COLOR_PURPLE },
      { 'label': 'Seven', 'value' : 13, 'color': global.COLOR_GREY },
      { 'label': 'Eight', 'value' : 5, 'color': global.COLOR_BLACK }
    ];

    this.pieChartOptions = {
      chart: {
        type: 'pieChart',
        height: 250,
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showLegend: false,
        showLabels: true,
        labelThreshold: .05,
        duration: 3000
      }
    }

    this.donutChartData = [
		  { 'label': 'Return Visitors', 'value' : 784466, 'color': global.COLOR_BLUE },
		  { 'label': 'New Visitors', 'value' : 416747, 'color': global.COLOR_GREEN }
	  ];

    this.donutChartOptions = {
      chart: {
        type: 'pieChart',
        height: 250,
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        margin : { top: 10, right: 10, bottom: 10, left: 10 },
        showLegend: false,
        donut: true,
        growOnHover: false,
        arcsRadius: [
          { inner: 0.65, outer: 0.93 },
          { inner: 0.6, outer: 1 }
        ],
        duration: 3000,
        donutRatio: 0.5
      }
    };


    var sin = [], cos = [];
    for (var i = 0; i < 100; i++) {
        sin.push({x: i, y:  Math.sin(i/10) });
        cos.push({x: i, y: .5 * Math.cos(i/10)});
    }
    this.lineChartData = [
        { values: sin, key: 'Sine Wave', color: global.COLOR_GREEN },
        { values: cos, key: 'Cosine Wave', color: global.COLOR_BLUE }
    ];
    this.lineChartOptions = {
      chart: {
        type: 'lineChart',
        height: 250,
        useInteractiveGuideline: true,
        xAxis: {
          axisLabel: 'Time (s)',
          tickFormat: function(d) {
            d3.format(',.1f');
          }
        },
        yAxis: {
          axisLabel: 'Voltage (v)',
          tickFormat: function(d) {
              if (d == null) {
                  return 'N/A';
              }
              return d3.format(',.2f')(d);
          }
        }
      }
    }


    this.barChartData = [{
        key: 'Cumulative Return',
        values: [
            { 'label' : 'A', 'value' : 29, 'color' : global.COLOR_RED },
            { 'label' : 'B', 'value' : 15, 'color' : global.COLOR_ORANGE },
            { 'label' : 'C', 'value' : 32, 'color' : global.COLOR_GREEN },
            { 'label' : 'D', 'value' : 196, 'color' : global.COLOR_AQUA },
            { 'label' : 'E', 'value' : 44, 'color' : global.COLOR_BLUE },
            { 'label' : 'F', 'value' : 98, 'color' : global.COLOR_PURPLE },
            { 'label' : 'G', 'value' : 13, 'color' : global.COLOR_GREY },
            { 'label' : 'H', 'value' : 5, 'color' : global.COLOR_BLACK }
        ]
    }];
    this.barChartOptions = {
      chart: {
        type: 'discreteBarChart',
        height: 250,
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        duration: 250,
        yAxis: {
          axisLabel: 'Total Sales'
        },
        xAxis: {
          axisLabel: 'Product'
        }
      }
    }

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }
}
