@extends('layouts.default')

@section('title', 'Wizards')

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Form Stuff</a></li>
		<li class="breadcrumb-item active">Wizards</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Wizards <small>header small text goes here...</small></h1>
	<!-- end page-header -->
	
	<hr class="mb-4" />
	
	<!-- BEGIN row -->
	<div class="row">
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<div class="panel panel-inverse">
				<div class="panel-heading ui-sortable-handle">
					<h4 class="panel-title">Wizard layout 1</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
			
					<div class="nav-wizards-container">
						<nav class="nav nav-wizards-1 mb-2">
							<div class="nav-item col">
								<a class="nav-link completed" href="#">
									<div class="nav-no">1</div>
									<div class="nav-text">Completed step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link completed" href="#">
									<div class="nav-no">2</div>
									<div class="nav-text">Second step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link active" href="#">
									<div class="nav-no">3</div>
									<div class="nav-text">Active step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link disabled" href="#">
									<div class="nav-no">4</div>
									<div class="nav-text">Disabled step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link disabled" href="#">
									<div class="nav-no">5</div>
									<div class="nav-text">Last step</div>
								</a>
							</div>
						</nav>
					</div>
					<div class="card">
						<div class="card-body">
							wizard content here
						</div>
					</div>
				</div>
				<div class="hljs-wrapper">
					<pre class="html"><code>&lt;div class="nav-wizards-container"&gt;
  &lt;nav class="nav nav-wizards-1 mb-2"&gt;
    &lt;!-- completed --&gt;
    &lt;div class="nav-item col"&gt;
      &lt;a class="nav-link completed" href="#"&gt;
        &lt;div class="nav-no"&gt;1&lt;/div&gt;
        &lt;div class="nav-text"&gt;Completed step&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;

    &lt;!-- active --&gt;
    &lt;div class="nav-item col"&gt;
      &lt;a class="nav-link active" href="#"&gt;
        &lt;div class="nav-no"&gt;3&lt;/div&gt;
        &lt;div class="nav-text"&gt;Active step&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;

    &lt;!-- disabled --&gt;
    &lt;div class="nav-item col"&gt;
      &lt;a class="nav-link disabled" href="#"&gt;
        &lt;div class="nav-no"&gt;5&lt;/div&gt;
        &lt;div class="nav-text"&gt;Last step&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;
  &lt;/nav&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
  &lt;div class="card-body"&gt;
    wizard content here
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
		
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<div class="panel panel-inverse">
				<div class="panel-heading ui-sortable-handle">
					<h4 class="panel-title">Wizard layout 2</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
					
					<div class="nav-wizards-container">
						<nav class="nav nav-wizards-2 mb-3">
							<div class="nav-item col">
								<a class="nav-link completed" href="#">
									<div class="nav-text">1. Completed step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link active" href="#">
									<div class="nav-text">2. Active step text</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link disabled" href="#">
									<div class="nav-text">3. Disabled step text</div>
								</a>
							</div>
						</nav>
					</div>
					<div class="card">
						<div class="card-body">
							wizard content here
						</div>
					</div>
				</div>
				<div class="hljs-wrapper">
					<pre class="html"><code>&lt;div class="nav-wizards-container"&gt;
  &lt;nav class="nav nav-wizards-2 mb-3"&gt;
    &lt;!-- completed --&gt;
    &lt;div class="nav-item col"&gt;
      &lt;a class="nav-link completed" href="#"&gt;
        &lt;div class="nav-text"&gt;1. Completed step text&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;

    &lt;!-- active --&gt;
    &lt;div class="nav-item col"&gt;
      &lt;a class="nav-link active" href="#"&gt;
        &lt;div class="nav-text"&gt;2. Active step text&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;

    &lt;!-- disabled --&gt;
    &lt;div class="nav-item col"&gt;
      &lt;a class="nav-link disabled" href="#"&gt;
        &lt;div class="nav-text"&gt;3. Disabled step text&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;
  &lt;/nav&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
  &lt;div class="card-body"&gt;
    wizard content here
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
		
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<div class="panel panel-inverse">
				<div class="panel-heading ui-sortable-handle">
					<h4 class="panel-title">Wizard layout 3</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
				
					<div class="nav-wizards-container">
						<nav class="nav nav-wizards-3 mb-2">
							<div class="nav-item col">
								<a class="nav-link completed" href="#">
									<div class="nav-dot"></div>
									<div class="nav-title">Step 1</div>
									<div class="nav-text">Completed step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link completed" href="#">
									<div class="nav-dot"></div>
									<div class="nav-title">Step 2</div>
									<div class="nav-text">Second step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link active" href="#">
									<div class="nav-dot"></div>
									<div class="nav-title">Step 3</div>
									<div class="nav-text">Active step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link disabled" href="#">
									<div class="nav-dot"></div>
									<div class="nav-title">Step 4</div>
									<div class="nav-text">Disabled step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link disabled" href="#">
									<div class="nav-dot"></div>
									<div class="nav-title">Step 5</div>
									<div class="nav-text">Last step</div>
								</a>
							</div>
						</nav>
					</div>
					<div class="card">
						<div class="card-body">
							wizard content here
						</div>
					</div>
				</div>
				<div class="hljs-wrapper">
					<pre class="html"><code>&lt;div class="nav-wizards-container"&gt;
  &lt;nav class="nav nav-wizards-3 mb-2"&gt;
    &lt;!-- completed --&gt;
    &lt;div class="nav-item col"&gt;
      &lt;a class="nav-link completed" href="#"&gt;
        &lt;div class="nav-dot"&gt;&lt;/div&gt;
        &lt;div class="nav-no"&gt;Step 1&lt;/div&gt;
        &lt;div class="nav-text"&gt;Completed step&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;

    &lt;!-- active --&gt;
    &lt;div class="nav-item col"&gt;
      &lt;a class="nav-link active" href="#"&gt;
        &lt;div class="nav-dot"&gt;&lt;/div&gt;
        &lt;div class="nav-no"&gt;Step 3&lt;/div&gt;
        &lt;div class="nav-text"&gt;Active step&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;

    &lt;!-- disabled --&gt;
    &lt;div class="nav-item col"&gt;
      &lt;a class="nav-link disabled" href="#"&gt;
        &lt;div class="nav-dot"&gt;&lt;/div&gt;
        &lt;div class="nav-no"&gt;Step 5&lt;/div&gt;
        &lt;div class="nav-text"&gt;Last step&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;
  &lt;/nav&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
  &lt;div class="card-body"&gt;
    wizard content here
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
	</div>
	<!-- END row -->
@endsection

@push('scripts')
	<script src="/assets/plugins/highlight.js/highlight.min.js"></script>
	<script src="/assets/js/demo/render.highlight.js"></script>
@endpush
