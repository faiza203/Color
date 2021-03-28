@extends('layouts.default')

@section('title', 'Summernote')

@push('css')
	<link href="/assets/plugins/summernote/dist/summernote.css" rel="stylesheet" />
@endpush

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Form Stuff</a></li>
		<li class="breadcrumb-item active">Summernote</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Summernote <small>header small text goes here...</small></h1>
	<!-- end page-header -->
	<!-- begin row -->
	<div class="row">
		<!-- begin col-2 -->
		<div class="col-xl-2">
			<div><b class="text-inverse">Features</b></div>
			<p>
				- Support bootstrap 4.x.x<br />
				- Lightweight (js+css: 80Kb)<br />
				- Smart User Interaction<br />
				- Safari, Chrome, Firefox, Opera<br />
				- Internet Explorer 9+
			</p>
			<p>
				<a href="http://summernote.org/" target="_blank" class="btn btn-sm btn-inverse">View Official Website</a>
			</p>
		</div>
		<!-- end col-2 -->
		<!-- begin col-10 -->
		<div class="col-xl-10">
			<!-- begin panel -->
			<div class="panel panel-inverse m-b-0">
				<div class="panel-heading">
					<h4 class="panel-title">Summernote</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body p-0">
					<form action="" method="POST" name="summernote_form">
						<textarea class="summernote" name="content"></textarea>
					</form>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-10 -->
	</div>
	<!-- end row -->
@endsection

@push('scripts')
	<script src="/assets/plugins/summernote/dist/summernote.min.js"></script>
	<script src="/assets/js/demo/form-summernote.demo.js"></script>
@endpush
