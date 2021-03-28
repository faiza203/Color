@extends('layouts.default')

@section('title', 'Flot Chart')

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Chart</a></li>
		<li class="breadcrumb-item active">Flot Chart</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Flot Chart <small>header small text goes here...</small></h1>
	<!-- end page-header -->
	<!-- begin row -->
	<div class="row">
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="flot-chart-1">
				<div class="panel-heading">
					<h4 class="panel-title">Flot Basic Line Chart</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>
						Create a placeholder, make sure it has dimensions (so Flot knows at what size to draw the plot), then call the plot function with your data.
						The <code>axes</code> are automatically scaled.
					</p>
					<div id="basic-chart" class="height-sm"></div>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="flot-chart-2">
				<div class="panel-heading">
					<h4 class="panel-title">Flot Interactive Chart</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>
						One of the goals of Flot is to support user interactions. Try pointing and clicking on the points and you will see a jQuery created <code>tooltip</code>.
					</p>
					<div id="interactive-chart" class="height-sm"></div>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
	</div>
	<!-- end row -->
	<!-- begin row -->
	<div class="row">
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="flot-chart-3">
				<div class="panel-heading">
					<h4 class="panel-title">Flot Bar Chart</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>
						Flot supports lines, points, filled areas, bars and any combinations of these, in the same plot and even on the same data series.
					</p>
					<div id="bar-chart" class="height-sm"></div>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="flot-chart-4">
				<div class="panel-heading">
					<h4 class="panel-title">Flot Live Updated Chart</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>
						You can <code>update</code> a chart periodically to get a real-time effect by using a timer to insert the new data in the plot and redraw it.
					</p>
					<div id="live-updated-chart" class="height-sm"></div>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
	</div>
	<!-- end row -->
	<!-- begin row -->
	<div class="row">
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="flot-chart-5">
				<div class="panel-heading">
					<h4 class="panel-title">Flot Interactive Pie Chart</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>The pie can be made interactive with <code>hover</code> and <code>click</code> events. It will alert the value for each categories</p>
					<div id="interactive-pie-chart" class="height-sm"></div>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="flot-chart-6">
				<div class="panel-heading">
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
					<h4 class="panel-title">Flot Stacked Chart</h4>
				</div>
				<div class="panel-body">
					<p>
						This is useful if you wish to display both a <code>total</code> and the <code>constituents</code> it is made of. The only requirement is that you provide the input sorted on x.
					</p>
					<div id="stacked-chart" class="height-sm"></div>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
	</div>
	<!-- end row -->
	<!-- begin row -->
	<div class="row">
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="flot-chart-7">
				<div class="panel-heading">
					<h4 class="panel-title">Flot Tacking Chart</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>You can add <code>crosshairs</code> that'll track the mouse position, either on both axes or as here on only one.</p>
					<div id="tracking-chart" class="height-sm"></div>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="flot-chart-8">
				<div class="panel-heading">
					<h4 class="panel-title">Flot Donut Chart</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Multiple slices less than a given percentage (5% in this case) of the pie can be combined into a single, larger slice.</p>
					<div id="donut-chart" class="height-sm"></div>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
	</div>
	<!-- end row -->
@endsection


@push('scripts')
	<script src="/assets/plugins/flot/source/jquery.canvaswrapper.js"></script>
	<script src="/assets/plugins/flot/source/jquery.colorhelpers.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.saturated.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.browser.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.drawSeries.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.uiConstants.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.time.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.resize.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.pie.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.crosshair.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.categories.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.navigate.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.touchNavigate.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.hover.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.touch.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.selection.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.symbol.js"></script>
	<script src="/assets/plugins/flot/source/jquery.flot.legend.js"></script>
	<script src="/assets/js/demo/chart-flot.demo.js"></script>
@endpush
