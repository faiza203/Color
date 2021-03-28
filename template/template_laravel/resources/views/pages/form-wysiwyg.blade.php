@extends('layouts.default')

@section('title', 'Form WYSIWYG')

@push('css')
	<link href="/assets/plugins/bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.min.css" rel="stylesheet" />
@endpush

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Form Stuff</a></li>
		<li class="breadcrumb-item active">Form WYSIWYG</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Form WYSIWYG <small>header small text goes here...</small></h1>
	<!-- end page-header -->
	
	<!-- begin panel -->
	<div class="panel panel-inverse">
		<div class="panel-heading">
			<h4 class="panel-title">CKEditor</h4>
			<div class="panel-heading-btn">
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
			</div>
		</div>
		<div class="panel-body panel-form">
			<form class="form-horizontal" action="/" name="wysihtml5" method="POST">
				<textarea class="ckeditor" id="editor1" name="editor1" rows="20">&lt;p&gt;This is some &lt;strong&gt;sample text&lt;/strong&gt;. You are using &lt;a href="http://ckeditor.com/"&gt;CKEditor&lt;/a&gt;.&lt;/p&gt;</textarea>
			</form>
		</div>
	</div>
	<!-- end panel -->
	<!-- begin panel -->
	<div class="panel panel-inverse">
		<div class="panel-heading">
			<h4 class="panel-title">WYSIHTML5</h4>
			<div class="panel-heading-btn">
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
			</div>
		</div>
		<div class="panel-body">
			<form action="/" name="wysihtml5" method="POST">
				<textarea class="textarea form-control" id="wysihtml5" placeholder="Enter text ..." rows="12"></textarea>
			</form>
		</div>
	</div>
	<!-- end panel -->
@endsection

@push('scripts')
	<script src="/assets/plugins/ckeditor/ckeditor.js"></script>
	<script src="/assets/plugins/bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.all.min.js"></script>
	<script src="/assets/js/demo/form-wysiwyg.demo.js"></script>
@endpush
