@extends('layouts.default', ['contentFullWidth' => true, 'contentInverseMode' => true])

@section('title', 'Google Map')

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Map</a></li>
		<li class="breadcrumb-item active">Google Map</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header text-white">Google Map <small class="text-white-transparent-5">header small text goes here...</small></h1>
	<!-- end page-header -->
	<div class="map-content">
		<div class="btn-group map-btn pull-right">
			<button type="button" class="btn btn-inverse" id="map-theme-text">Default Theme</button>
			<button type="button" class="btn btn-inverse dropdown-toggle" data-toggle="dropdown"><b class="caret"></b></button>
			<div class="dropdown-menu dropdown-menu-right" id="map-theme-selection">
				<a href="javascript:;" data-map-theme="default" class="dropdown-item">Default</a>
				<a href="javascript:;" data-map-theme="flat" class="dropdown-item">Flat</a>
				<a href="javascript:;" data-map-theme="turquoise-water" class="dropdown-item">Turquoise Water</a>
				<a href="javascript:;" data-map-theme="icy-blue" class="dropdown-item">Icy Blue</a>
				<a href="javascript:;" data-map-theme="cobalt" class="dropdown-item">Cobalt</a>
				<a href="javascript:;" data-map-theme="old-dry-mud" class="dropdown-item">Old Dry Mud</a>
				<a href="javascript:;" data-map-theme="dark-red" class="dropdown-item">Dark Red</a>
			</div>
		</div>
	</div>
	<div class="map">
		<div id="google-map-default" class="height-full width-full"></div>
	</div>
@endsection

@push('scripts')
	<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false"></script>
	<script src="/assets/js/demo/map-google.demo.js"></script>
@endpush