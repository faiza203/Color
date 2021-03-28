@extends('layouts.default')

@section('title', 'Dropzone')

@push('css')
	<link href="/assets/plugins/dropzone/dist/min/dropzone.min.css" rel="stylesheet" />
@endpush

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Form Stuff</a></li>
		<li class="breadcrumb-item active">Dropzone</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Dropzone <small>header small text goes here...</small></h1>
	<!-- end page-header -->
	
	<!-- begin row -->
	<div class="row">
		<!-- begin col-2 -->
		<div class="col-xl-2 m-b-15">
			<p class="m-b-15 text-inverse"><b>DropzoneJS</b> is an open source library that provides drag’n’drop file uploads with image previews.</p>
			<div><b class="text-inverse">Browser Support</b></div>
			<p>
				- Chrome 7+<br />
				- Firefox 4+<br />
				- IE 10+<br />
				- Opera 12+<br />
				- Safari 6+
			</p>
			<a href="http://www.dropzonejs.com/" target="_blank" class="btn btn-inverse btn-sm">View Official Website</a>
		</div>
		<!-- end col-2 -->
		<!-- begin col-10 -->
		<div class="col-xl-10">
		<!-- begin panel -->
		<div class="panel panel-inverse" data-sortable-id="form-dropzone-1">
			<div class="panel-heading">
				<h4 class="panel-title">Dropzone</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
			</div>
			<div class="panel-body text-inverse">
				<div id="dropzone">
					<form action="/upload" class="dropzone needsclick" id="demo-upload">
						<div class="dz-message needsclick">
							Drop files <b>here</b> or <b>click</b> to upload.<br />
							<span class="dz-note needsclick">
								(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
							</span>
						</div>
					</form>
				</div>
			</div>
			<div class="hljs-wrapper">
				<pre><code class="html">&lt;div id="dropzone"&gt;
  &lt;form action="/upload" class="dropzone needsclick" id="demo-upload"&gt;
    &lt;div class="dz-message needsclick"&gt;
      Drop files &lt;b&gt;here&lt;/b&gt; or &lt;b&gt;click&lt;/b&gt; to upload.&lt;br /&gt;
      &lt;span class="dz-note needsclick"&gt;
        (This is just a demo dropzone. Selected files are &lt;strong&gt;not&lt;/strong&gt; actually uploaded.)
      &lt;/span&gt;
    &lt;/div&gt;
  &lt;/form&gt;
&lt;/div&gt;</code></pre>
			</div>
		</div>
		<!-- end panel -->
		</div>
		<!-- end col-10 -->
	</div>
	<!-- end row -->
@endsection

@push('scripts')
  <script src="/assets/plugins/dropzone/dist/min/dropzone.min.js"></script>
	<script src="/assets/plugins/highlight.js/highlight.min.js"></script>
	<script src="/assets/js/demo/render.highlight.js"></script>
@endpush
