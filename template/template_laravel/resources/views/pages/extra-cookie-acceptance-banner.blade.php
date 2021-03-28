@extends('layouts.default')

@section('title', 'Cookie Acceptance Banner')

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Extra</a></li>
		<li class="breadcrumb-item active">Cookie Acceptance Banner</li>
	</ol>
	<!-- end breadcrumb -->
	
	<!-- begin page-header -->
	<h1 class="page-header">Cookie Acceptance Banner <small>header small text goes here...</small></h1>
	<!-- end page-header -->
	
	<!-- begin panel -->
	<div class="panel panel-inverse">
		<div class="panel-heading">
			<h4 class="panel-title">Panel Title here</h4>
			<div class="panel-heading-btn">
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
			</div>
		</div>
		<div class="panel-body">
			Panel Content Here
		</div>
	</div>
	<!-- end panel -->
	
	<div class="alert bg-inverse-transparent-9 text-white position-fixed rounded-0 position-fixed mb-0 d-md-flex align-items-center pl-xl-5 pr-xl-5 pt-xl-4 pt-4 pb-xl-4" style="left: 0; right: 0; bottom: 0; z-index: 1020;">
		<div class="flex-fill">
			<h4>This website uses cookies</h4>
			<p class="mb-0">
				We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.
			</p>
		</div>
		<div class="pl-xl-4 pt-xl-0 pt-3">
			<a href="#" class="btn btn-outline-white btn-lg width-150" data-dismiss="alert">Accept</a>
		</div>
	</div>
@endsection
