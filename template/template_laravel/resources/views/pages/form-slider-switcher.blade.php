@extends('layouts.default')

@section('title', 'Form Slider + Switcher')

@push('css')
	<link href="/assets/plugins/switchery/switchery.min.css" rel="stylesheet" />
	<link href="/assets/plugins/abpetkov-powerange/dist/powerange.min.css" rel="stylesheet" />
@endpush

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Form Stuff</a></li>
		<li class="breadcrumb-item active">Form Slider + Switcher</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Form Slider + Switcher <small>header small text goes here...</small></h1>
	<!-- end page-header -->
	<!-- begin row -->
	<div class="row">
		<!-- begin col-4 -->
		<div class="col-xl-4">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-slider-switcher-1">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Default Switchery</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body">
					<div class="m-b-2 text-inverse f-w-600 f-s-16">Default Switchery</div>
					<p class="m-b-15">
						Use the attribute <code>data-render="switchery"</code> to render the switchery switcher,
						and use the attribute <code>data-theme="default"</code> to set the theme color
					</p>
					<p class="m-b-25"><input type="checkbox" data-render="switchery" data-theme="default" checked /></p>
					<div class="m-b-5 text-inverse f-w-600">All Available Options</div>
					<ul class="m-b-10 p-l-30">
						<li>theme: <code>data-theme="default"</code></li>
						<li>secondary color: <code>data-secondary-color="#dfdfdf"</code></li>
						<li>classname: <code>data-classname="switchery"</code></li>
						<li>disabled: <code>data-disabled="true"</code></li>
						<li>disabledOpacity: <code>data-disabled-opacity="0.5"</code></li>
						<li>speed: <code>data-speed="0.5s"</code></li>
					</ul>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-4 -->
		<!-- begin col-4 -->
		<div class="col-xl-4">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-slider-switcher-2">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Switchery Theme</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin table -->
				<table class="table table-bordered table-condensed table-td-valign-middle">
					<thead>
						<tr>
							<th width="1%">Swither</th>
							<th>Data attribute</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><input type="checkbox" data-render="switchery" data-theme="default" checked /></td>
							<td><code>data-theme="default"</code></td>
						</tr>
						<tr>
							<td><input type="checkbox" data-render="switchery" data-theme="red" checked /></td>
							<td><code>data-theme="red"</code></td>
						</tr>
						<tr>
							<td><input type="checkbox" data-render="switchery" data-theme="blue" checked /></td>
							<td><code>data-theme="blue"</code></td>
						</tr>
						<tr>
							<td><input type="checkbox" data-render="switchery" data-theme="purple" checked /></td>
							<td><code>data-theme="purple"</code></td>
						</tr>
						<tr>
							<td><input type="checkbox" data-render="switchery" data-theme="orange" checked /></td>
							<td><code>data-theme="orange"</code></td>
						</tr>
						<tr>
							<td><input type="checkbox" data-render="switchery" data-theme="black" checked /></td>
							<td><code>data-theme="black"</code></td>
						</tr>
					</tbody>
				</table>
				<!-- end table -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-4 -->
		<!-- begin col-4 -->
		<div class="col-xl-4">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-slider-switcher-3">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Switchery Theme</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body">
					<div class="m-b-5 text-inverse f-w-600">Checked & Unchecked Switchery</div>
					<p>
						<input type="checkbox" data-render="switchery" data-theme="default" checked />
						<span class="text-muted m-l-5 m-r-20">checked</span>
						<input type="checkbox" data-render="switchery" data-theme="default" />
						<span class="text-muted m-l-5">unchecked</span>
					</p>
					<div class="m-b-5 text-inverse f-w-600">Disabled</div>
					<p>
						<input type="checkbox" data-render="switchery" data-theme="default" data-disabled="true" checked />
						<span class="text-muted m-l-5">checked</span>
					</p>
					<p>
						<input type="checkbox" data-render="switchery" data-theme="orange" data-disabled="true" checked />
						<span class="text-muted m-l-5">unchecked</span>
					</p>
					<div class="m-b-5 text-inverse f-w-600">State</div>
					<p class="m-b-10">
						<input type="checkbox" data-render="switchery" data-theme="black" data-id="switchery-state" checked /> 
						<a href="javascript:;" class="btn btn-xs btn-success m-l-5" data-click="check-switchery-state">check state</a>
					</p>
					<p class="m-b-0">
						<input type="checkbox" data-render="switchery" data-theme="blue" data-change="check-switchery-state-text" checked />
						<a href="javascript:;" class="btn btn-xs btn-primary disabled m-l-5" data-id="switchery-state-text">true</a>
					</p>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-4 -->
	</div>
	<!-- end row -->
	<!-- begin panel -->
	<div class="panel panel-inverse">
		<!-- begin panel-heading -->
		<div class="panel-heading">
			<h4 class="panel-title">Powerange Slider</h4>
			<div class="panel-heading-btn">
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
			</div>
		</div>
		<!-- end panel-heading -->
		<!-- begin panel-body -->
		<div class="panel-body">
			<div class="row row-space-30">
				<!-- begin col-4 -->
				<div class="col-xl-4">
					<div class="m-b-2 text-inverse f-w-600 f-s-16">Default Powerange</div>
					<p class="m-b-10">
						Use the attribute <code>data-render="poweranger-slider"</code> to render the switchery powerange slider.
					</p>
					<!-- begin row -->
					<div class="row m-b-20">
						<!-- begin col-10 -->
						<div class="col-md-10">
							<div class="slider-wrapper">
								<input type="text" data-render="powerange-slider" data-start="70" />
							</div>
						</div>
						<!-- end col-10 -->
					</div>
					<!-- end row -->
					<div class="m-b-5 text-inverse f-w-600">All Available Options</div>
					<ul class="p-l-30 m-b-20">
						<li>decimal: <code>data-decimal="false"</code></li>
						<li>disable: <code>data-disable="false"</code></li>
						<li>disableOpacity: <code>data-disable-opacity="0.5"</code></li>
						<li>hideRange: <code>data-hide-range="false"</code></li>
						<li>klass: <code>data-class=""</code></li>
						<li>min: <code>data-min="0"</code></li>
						<li>max: <code>data-max="100"</code></li>
						<li>start: <code>data-min="null"</code></li>
						<li>step: <code>data-min="null"</code></li>
						<li>vertical: <code>data-vertical="false"</code></li>
					</ul>
				</div>
				<!-- end col-4 -->
				<!-- begin col-4 -->
				<div class="col-xl-4">
					<div class="m-b-2 text-inverse f-w-600 f-s-16">Slider Colors</div>
					<p class="m-b-10">
						Available Classes for powerange slider is <code>red</code>, <code>teal</code>,
						<code>purple</code>, <code>orange</code> and <code>black</code>.
					</p>
					<!-- begin row -->
					<div class="row">
						<!-- begin col-10 -->
						<div class="col-lg-10">
							<div class="slider-wrapper slider-without-range m-b-5">
								<input type="text" data-render="powerange-slider" data-hide-range="true" data-start="90" />
							</div>
							<div class="slider-wrapper slider-without-range m-b-5 red">
								<input type="text" data-render="powerange-slider" data-hide-range="true" data-start="75" />
							</div>
							<div class="slider-wrapper slider-without-range m-b-5 teal">
								<input type="text" data-render="powerange-slider" data-hide-range="true" data-start="60" />
							</div>
							<div class="slider-wrapper slider-without-range m-b-5 purple">
								<input type="text" data-render="powerange-slider" data-hide-range="true" data-start="45" />
							</div>
							<div class="slider-wrapper slider-without-range m-b-5 orange">
								<input type="text" data-render="powerange-slider" data-hide-range="true" data-start="30" />
							</div>
							<div class="slider-wrapper slider-without-range m-b-20 black">
								<input type="text" data-render="powerange-slider" data-hide-range="true" data-start="15" />
							</div>
						</div>
						<!-- end col-10 -->
					</div>
					<!-- end row -->
				</div>
				<!-- end col-4 -->
				<!-- begin col-4 -->
				<div class="col-xl-4">
					<div class="m-b-2 text-inverse f-w-600 f-s-16">Horizontal Sliders</div>
					<p>
						Set the attribute <code>data-vertical="true"</code> in order to render the slider as horizontal view.
					</p>
					<!-- begin row -->
					<div class="row">
						<!-- begin col-12 -->
						<div class="col-md-12">
							<div class="slider-wrapper slider-without-range slider-vertical m-b-0 pull-left m-r-10">
								<input type="text" data-render="powerange-slider" data-hide-range="true" data-vertical="true" data-start="90" data-height="200px" />
							</div>
							<div class="slider-wrapper slider-without-range slider-vertical m-b-0 pull-left m-r-10 teal">
								<input type="text" data-render="powerange-slider" data-hide-range="true" data-vertical="true" data-start="75" data-height="200px" />
							</div>
							<div class="slider-wrapper slider-without-range slider-vertical m-b-0 pull-left m-r-10 purple">
								<input type="text" data-render="powerange-slider" data-hide-range="true" data-vertical="true" data-start="60" data-height="200px" />
							</div>
							<div class="slider-wrapper slider-without-range slider-vertical m-b-0 pull-left m-r-10 red">
								<input type="text" data-render="powerange-slider" data-hide-range="true" data-vertical="true" data-start="45" data-height="200px" />
							</div>
							<div class="slider-wrapper slider-without-range slider-vertical m-b-0 pull-left m-r-10 orange">
								<input type="text" data-render="powerange-slider" data-hide-range="true" data-vertical="true" data-start="30" data-height="200px" />
							</div>
							<div class="slider-wrapper slider-without-range slider-vertical m-b-0 pull-left m-r-10 black">
								<input type="text" data-render="powerange-slider" data-hide-range="true" data-vertical="true" data-start="15" data-height="200px" />
							</div>
						</div>
						<!-- end col-12 -->
					</div>
					<!-- end row -->
				</div>
				<!-- end col-4 -->
			</div>
			<!-- end row -->
		</div>
		<!-- end panel-body -->
	</div>
	<!-- end panel -->
@endsection

@push('scripts')
	<script src="/assets/plugins/switchery/switchery.min.js"></script>
	<script src="/assets/plugins/abpetkov-powerange/dist/powerange.min.js"></script>
	<script src="/assets/js/demo/form-slider-switcher.demo.js"></script>
@endpush