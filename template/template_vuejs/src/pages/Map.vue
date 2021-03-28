<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Map</a></li>
			<li class="breadcrumb-item active">Google Map</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Google Map <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		
		<div class="map-content">
			<div class="btn-group map-btn pull-right">
				<b-dropdown id="ddown-split" split :text="map.text" variant="inverse">
					<b-dropdown-item v-on:click="handleChangeTheme('default')">Default</b-dropdown-item>
					<b-dropdown-item v-on:click="handleChangeTheme('flat')">Flat</b-dropdown-item>
					<b-dropdown-item v-on:click="handleChangeTheme('turquoise-water')">Turquoise Water</b-dropdown-item>
					<b-dropdown-item v-on:click="handleChangeTheme('icy-blue')">Icy Blue</b-dropdown-item>
					<b-dropdown-item v-on:click="handleChangeTheme('cobalt')">Cobalt</b-dropdown-item>
					<b-dropdown-item v-on:click="handleChangeTheme('old-dry-mud')">Old Dry Mud</b-dropdown-item>
					<b-dropdown-item v-on:click="handleChangeTheme('dark-red')">Dark Red</b-dropdown-item>
				</b-dropdown>
			</div>
		</div>
		<div class="map">
			<GmapMap class="height-full width-full" v-bind:options="map" :zoom="5" :center="{lat: 25.304304, lng: -90.06591800000001}"></GmapMap>
		</div>
	</div>
</template>

<script>
import PageOptions from '../config/PageOptions.vue'

var defaultMapStyles = [];
var flatMapStyles = [{"stylers":[{"visibility":"off"}]},{"featureType":"road","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road.arterial","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"road.highway","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"landscape","stylers":[{"visibility":"on"},{"color":"#f3f4f4"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#7fc8ed"}]},{},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#83cead"}]},{"elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"weight":0.9},{"visibility":"off"}]}]; 
var turquoiseWaterStyles = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill"},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#7dcdcd"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]}];
var icyBlueStyles = [{"stylers":[{"hue":"#2c3e50"},{"saturation":250}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":50},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]}];
var oldDryMudStyles = [{"featureType":"landscape","stylers":[{"hue":"#FFAD00"},{"saturation":50.2},{"lightness":-34.8},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFAD00"},{"saturation":-19.8},{"lightness":-1.8},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FFAD00"},{"saturation":72.4},{"lightness":-32.6},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FFAD00"},{"saturation":74.4},{"lightness":-18},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#00FFA6"},{"saturation":-63.2},{"lightness":38},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#FFC300"},{"saturation":54.2},{"lightness":-14.4},{"gamma":1}]}];
var cobaltStyles  = [{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":10},{"lightness":10},{"gamma":0.8},{"hue":"#293036"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#293036"}]}];
var darkRedStyles   = [{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":10},{"lightness":10},{"gamma":0.8},{"hue":"#000000"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#293036"}]}];

export default {
	created() {
		PageOptions.pageContentFullWidth = true;
	},
	data() {
		return {
			map: {
				text: 'Default Theme',
				styles: defaultMapStyles,
				disableDefaultUI: true
			}
		}
	},
	beforeRouteLeave (to, from, next) {
		PageOptions.pageContentFullWidth = false;
		PageOptions.pageContentInverseMode = false;
		next();
	},
	methods: {
		handleChangeTheme: function(theme) {
			PageOptions.pageContentInverseMode = false;
			switch(theme) {
				case 'flat':
					this.map.styles = flatMapStyles;
					this.map.text = 'Flat';
					break;
				case 'turquoise-water':
					this.map.styles = turquoiseWaterStyles;
					this.map.text = 'Turquoise Water';
					break;
				case 'icy-blue':
					this.map.styles = icyBlueStyles;
					this.map.text = 'Icy Blue';
					break;
				case 'cobalt':
					this.map.styles = cobaltStyles;
					this.map.text = 'Cobalt';
					PageOptions.pageContentInverseMode = true;
					break;
				case 'old-dry-mud':
					this.map.styles = oldDryMudStyles;
					this.map.text = 'Old Dry Mud';
					break;
				case 'dark-red':
					this.map.styles = darkRedStyles;
					this.map.text = 'Dark Red';
					PageOptions.pageContentInverseMode = true;
					break;
				default:
					this.map.styles = defaultMapStyles;
					this.map.text = 'Default Theme';
					break;
			}
		}
	}
}
</script>