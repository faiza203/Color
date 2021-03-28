import { Component, OnInit } from '@angular/core';
import * as global from '../../../config/globals';

@Component({
  selector: 'dashboard-v1',
  templateUrl: './dashboard-v1.html',
})

export class DashboardV1Page implements OnInit {
	global = global;

  checkTodoList(listChecked) {
    if (listChecked) {
      listChecked = false;
    } else {
      listChecked = true;
    }
  };

  todolist = [
    { 'title': 'Donec vehicula pretium nisl, id lacinia nisl tincidunt id.', 'checked': true },
    { 'title': 'Duis a ullamcorper massa.' },
    { 'title': 'Phasellus bibendum, odio nec vestibulum ullamcorper.' },
    { 'title': 'Duis pharetra mi sit amet dictum congue.' },
    { 'title': 'Duis pharetra mi sit amet dictum congue.' },
    { 'title': 'Phasellus bibendum, odio nec vestibulum ullamcorper.' },
    { 'title': 'Donec vehicula pretium nisl, id lacinia nisl tincidunt id.' }
  ];

  lineChartData = [{
    "name":"Congo",
    "series":[{"value":2377,"name":"Thu 15"},{"value":4567,"name":"Sat 17"},{"value":2865,"name":"Mon 19"},{"value":2060,"name":"Wed 21"},{"value":3287,"name":"Fri 23"}]},{"name":"Micronesia","series":[{"value":5234,"name":"Thu 15"},{"value":2876,"name":"Sat 17"},{"value":4297,"name":"Mon 19"},{"value":2558,"name":"Wed 21"},{"value":2371,"name":"Fri 23"}]},{"name":"Malaysia","series":[{"value":2369,"name":"Thu 15"},{"value":5229,"name":"Sat 17"},{"value":3457,"name":"Mon 19"},{"value":4401,"name":"Wed 21"},{"value":2835,"name":"Fri 23"}]},{"name":"Yemen","series":[{"value":2099,"name":"Thu 15"},{"value":4383,"name":"Sat 17"},{"value":6724,"name":"Mon 19"},{"value":2870,"name":"Wed 21"},{"value":5753,"name":"Fri 23"}]},{"name":"Åland Islands","series":[{"value":4907,"name":"Thu 15"},{"value":2428,"name":"Sat 17"},{"value":5384,"name":"Mon 19"},{"value":5966,"name":"Wed 21"},{"value":2605,"name":"Fri 23"}]
  }];
  lineChartColor = { domain: [global.COLOR_BLUE, global.COLOR_GREEN, global.COLOR_PURPLE, global.COLOR_BLACK] };

  pieChartData = [{"name":"Germany","value":8940000},{"name":"USA","value":5000000},{"name":"France","value":7200000}];
  pieChartColor = { domain: [global.COLOR_RED, global.COLOR_ORANGE, global.COLOR_BLACK] };

  // maps
  lat: number = 25.304304;
  lng: number = -90.06591800000001;
  mapStyles = [{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#2d353c"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#d8d8d8"}]},{featureType:"administrative.neighborhood",elementType:"geometry.fill",stylers:[{color:"#ff0000"}]},{featureType:"administrative.land_parcel",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"landscape",elementType:"labels.text.fill",stylers:[{color:"#00acac"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#575d63"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#348fe2"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.highway.controlled_access",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#1a1f23"}]}];

  ngOnInit() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }
}
