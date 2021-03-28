import { Component, OnInit } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import * as global from '../../../config/globals';

declare let d3: any;

@Component({
  selector: 'dashboard-v2',
  templateUrl: './dashboard-v2.html'
})

export class DashboardV2Page implements OnInit {
  stackedChartOptions;
  stackedChartData;
  donutChartOptions;
  donutChartData;
  lat: number = 25.304304;
  lng: number = -90.06591800000001;
  mapStyles = [{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#2d353c"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#d8d8d8"}]},{featureType:"administrative.neighborhood",elementType:"geometry.fill",stylers:[{color:"#ff0000"}]},{featureType:"administrative.land_parcel",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"landscape",elementType:"labels.text.fill",stylers:[{color:"#00acac"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#575d63"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#348fe2"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.highway.controlled_access",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#1a1f23"}]}];
  viewDate: Date = new Date();
  events = [{
    start: subDays(startOfDay(new Date()), 1),
    end: addDays(new Date(), 1),
    title: 'A 3 day event',
    color: '#00acac'
  }, {
    start: startOfDay(new Date()),
    title: 'An event with no end date',
    color: '#ff5b57'
  }, {
    start: subDays(endOfMonth(new Date()), 3),
    end: addDays(endOfMonth(new Date()), 3),
    title: 'A long event that spans 2 months',
    color: '#348fe2'
  }, {
    start: addHours(startOfDay(new Date()), 2),
    end: new Date(),
    title: 'A draggable and resizable event',
    color: '#727cb6'
  }];

  ngOnInit() {
    this.stackedChartOptions = {
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

    this.stackedChartData = [{
      key: "Unique Visitors",
      color: global.COLOR_AQUA,
      values:[
        [1511605558229,13],[1511691958229,13],[1511778358229,6],[1511951158229,6],[1512037558229,6],[1512123958229,5],[1512210358229,5],[1512296758229,5],[1512383158229,6],[1512469558229,7],[1512555958229,6],[1512642358229,9],[1512728758229,9],[1512815158229,8],[1512901558229,10],[1512987958229,10],[1513074358229,10],[1513160758229,10],[1513247158229,9],[1513333558229,9],[1513419958229,10],[1513506358229,9],[1513592758229,9],[1513679158229,8],[1513765558229,8],[1513851958229,8],[1513938358229,8],[1514024758229,8],[1514111158229,7],[1514197558229,7],[1514283958229,6],[1514370358229,6],[1514456758229,6],[1514543158229,6],[1514629558229,5],[1514715958229,5],[1514802358229,4],[1514888758229,4],[1514975158229,5],[1515061558229,5],[1515147958229,5],[1515234358229,7],[1515320758229,7],[1515407158229,7],[1515493558229,10],[1515579958229,9],[1515666358229,9],[1515752758229,10],[1515839158229,11],[1515925558229,11],
        [1516011958229,8],[1516098358229,8],[1516184758229,7],[1516271158229,8],[1516357558229,9],[1516443958229,8],[1516530358229,9],[1516616758229,10],[1516703158229,9],[1516789558229,10],[1516875958229,16],[1516962358229,17],[1517048758229,16],[1517135158229,17],[1517221558229,16],[1517307958229,15],[1517394358229,14],[1517480758229,24],[1517567158229,18],[1517653558229,15],[1517739958229,14],[1517826358229,16],[1517912758229,16],[1517999158229,17],[1518085558229,7],[1518171958229,7],[1518258358229,7]
      ]
    },{
      key: "Page Views",
      color: global.COLOR_BLUE,
      values:[
        [1511605558229,14],[1511691958229,13],[1511778358229,15],[1511951158229,14],[1512037558229,13],[1512123958229,15],[1512210358229,16],[1512296758229,16],[1512383158229,14],[1512469558229,14],[1512555958229,13],[1512642358229,12],[1512728758229,13],[1512815158229,13],[1512901558229,15],[1512987958229,16],[1513074358229,16],[1513160758229,17],[1513247158229,17],[1513333558229,18],[1513419958229,15],[1513506358229,15],[1513592758229,15],[1513679158229,19],[1513765558229,19],[1513851958229,18],[1513938358229,18],[1514024758229,17],[1514111158229,16],[1514197558229,18],[1514283958229,18],[1514370358229,18],[1514456758229,16],[1514543158229,14],[1514629558229,14],[1514715958229,13],[1514802358229,14],[1514888758229,13],[1514975158229,10],[1515061558229,9],
        [1515147958229,10],[1515234358229,11],[1515320758229,11],[1515407158229,11],[1515493558229,10],[1515579958229,9],[1515666358229,10],[1515752758229,13],[1515839158229,14],[1515925558229,14],[1516011958229,13],[1516098358229,12],[1516184758229,11],[1516271158229,13],[1516357558229,13],[1516443958229,13],[1516530358229,13],[1516616758229,14],[1516703158229,13],[1516789558229,13],[1516875958229,19],[1516962358229,21],[1517048758229,22],[1517135158229,25],[1517221558229,24],[1517307958229,24],[1517394358229,22],[1517480758229,16],[1517567158229,15],[1517653558229,12],[1517739958229,12],[1517826358229,15],[1517912758229,15],[1517999158229,15],[1518085558229,18],[1518085558229,18],[1518258358229,17]
      ]
    }];

    this.donutChartData = [
		  { 'label': 'Return Visitors', 'value' : 784466, 'color': global.COLOR_BLUE },
		  { 'label': 'New Visitors', 'value' : 416747, 'color': global.COLOR_GREEN }
	  ];

    this.donutChartOptions = {
      chart: {
        type: 'pieChart',
        height: 170,
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
    }
  }
}
