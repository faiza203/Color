@extends('layouts.default')

@section('title', 'Bootstrap Tour')

@push('css')
    <link href="/assets/plugins/intro.js/minified/introjs.min.css" rel="stylesheet" />
@endpush

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
		<li class="breadcrumb-item active">Intro JS</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Intro JS <small>header small text goes here...</small></h1>
	<!-- end page-header -->
				
	<!-- begin jumbotron -->
	<div class="jumbotron text-center bg-white">
		<h1 class="display-4" data-step="1" 
			data-intro="Hello world! I'm Intro.js" 
			data-hint="Hello world! I'm Intro.js" 
			data-hintPosition="top-middle" 
			data-position="bottom-right-aligned">Intro.js</h1>
		<p class="lead mb-4" data-step="2" 
			data-intro="This is a simple step-by-step guide made using Intro.js"
			data-hint="This is a simple step-by-step guide made using Intro.js" 
			data-hintPosition="top-middle" 
			data-position="bottom-right-aligned">Step-by-step guide and feature introduction</p>
		<div class="mb-3">
			<a class="btn btn-lg btn-primary pl-5 pr-5" href="javascript:void(0);" onclick="javascript:introJs().start();">Demo</a>
		</div>
		<a href="http://introjs.com/" target="_blank" class="text-gray" data-step="5" 
			data-intro="Intro.js is free and open-source. View it."
			data-hint="Intro.js is free and open-source. View it." 
			data-hintPosition="top-middle" 
			data-position="bottom-right-aligned">View Official Website</a>
	</div>
	<!-- end jumbotron -->
	<!-- begin row -->
	<div class="row text-center" data-step="3" 
		data-intro="Another step. Intro.js main features!" 
		data-hint="Another step. Intro.js main features!" 
		data-hintPosition="top-middle" 
		data-position="bottom-right-aligned">
		<!-- begin col-4 -->
		<div class="col-lg-4">
			<div class="m-b-10"><i class="fa fa-compress fa-5x text-indigo"></i></div>
			<h5 class="m-b-5">No dependencies, fast and small</h5> 
			<p>10KB JavaScript and 2.5KB CSS, that's all (minified, gzipped).</p>
		</div>
		<!-- end col-4 -->
		<!-- begin col-4 -->
		<div class="col-lg-4">
			<div class="m-b-10"><i class="fa fa-child fa-5x text-blue"></i></div>
			<h5 class="m-b-5">User-friendly</h5> 
			<p>Navigate using keyboard or mouse. Easily change the themes for your website.</p>
		</div>
		<!-- end col-4 -->
		<!-- begin col-4 -->
		<div class="col-lg-4">
			<div class="m-b-10"><i class="fa fa-globe fa-5x text-success"></i></div>
			<h5 class="m-b-5">Browser compatibility</h5> 
			<p>Works on Google Chrome, Mozilla Firefox, Opera, Safari and even Internet Explorer.</p>
		</div>
		<!-- end col-4 -->
	</div>
	<!-- end row -->
				
	<h4>Examples</h4>

	<!-- begin row -->
	<div class="row">
		<!-- end col-4 -->
		<div class="col-lg-4">
			<!-- begin panel -->
			<div class="panel">
				<div class="panel-body">
					<h4><i class="fa fa-bars fa-fw"></i> Progress bar</h4>
					<p>
						Add progress-bar to your step-by-step introduction. It's as easy as adding <code>.setOption('showProgress', true)</code> option to your Intro.js instance.
					</p>
					<a href="javascript:;" class="btn btn-primary btn-sm" onclick="javascript:introJs().setOption('showProgress', true).start();">Demo</a>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- begin col-4 -->
		<!-- end col-4 -->
		<div class="col-lg-4">
			<!-- begin panel -->
			<div class="panel" data-intro="Intro.js has many examples. Browse this section to find out more." data-step="4">
				<div class="panel-body">
					<h4><i class="fa fa-comment-alt fa-fw"></i> Hint</h4>
					<p>
						Hints enables you to add additional descriptions to any part of a web page. You can define hints by adding <code>data-hint</code> attribute to the HTML elements.
					</p>
					<a href="javascript:;" class="btn btn-primary btn-sm" onclick="javascript:introJs().addHints();">Demo</a>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- begin col-4 -->
		<!-- end col-4 -->
		<div class="col-lg-4">
			<!-- begin panel -->
			<div class="panel">
				<div class="panel-body">
					<h4><i class="fa fa-filter fa-fw"></i> Enable/disable options</h4>
					<p>
						You can enable or disable options like buttons, progress-bar and bullets by calling the <code>setOption('showBullets', false)</code> function and pass option name.
					</p>
					<a href="javascript:;" class="btn btn-primary btn-sm" onclick="javascript:introJs().setOption('showBullets', false).start();">Demo</a>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-4 -->
	</div>
	<!-- end row -->
@endsection

@push('scripts')
    <script src="/assets/plugins/intro.js/minified/intro.min.js"></script>
@endpush