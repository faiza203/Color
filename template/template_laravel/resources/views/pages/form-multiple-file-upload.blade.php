@extends('layouts.default')

@section('title', 'Multiple File Upload')

@push('css')
	<link href="/assets/plugins/blueimp-gallery/css/blueimp-gallery.min.css" rel="stylesheet" />
	<link href="/assets/plugins/blueimp-file-upload/css/jquery.fileupload.css" rel="stylesheet" />
	<link href="/assets/plugins/blueimp-file-upload/css/jquery.fileupload-ui.css" rel="stylesheet" />
@endpush

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Form Stuff</a></li>
		<li class="breadcrumb-item active">Multiple File Upload</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Multiple File Upload <small>header small text goes here...</small></h1>
	<!-- end page-header -->
	
	<!-- begin form-file-upload -->
	<form id="fileupload" action="/assets/global/plugins/jquery-file-upload/server/php/" method="POST" enctype="multipart/form-data">
		<!-- begin panel -->
		<div class="panel panel-inverse">
			<!-- begin panel-heading -->
			<div class="panel-heading">
				<h4 class="panel-title">jQuery File Upload</h4>
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
				<div class="note note-yellow m-b-15">
					<div class="note-icon f-s-20">
						<i class="fa fa-lightbulb fa-2x"></i>
					</div>
					<div class="note-content">
						<h4 class="m-t-5 m-b-5 p-b-2">Demo Notes</h4>
						<ul class="m-b-5 p-l-25">
							<li>The maximum file size for uploads in this demo is <strong>5 MB</strong> (default file size is unlimited).</li>
							<li>Only image files (<strong>JPG, GIF, PNG</strong>) are allowed in this demo (by default there is no file type restriction).</li>
							<li>Uploaded files will be deleted automatically after <strong>5 minutes</strong> (demo setting).</li>
						</ul>
					</div>
				</div>
				<div class="row fileupload-buttonbar">
					<div class="col-xl-7">
						<span class="btn btn-primary fileinput-button m-r-3">
							<i class="fa fa-fw fa-plus"></i>
							<span>Add files...</span>
							<input type="file" name="files[]" multiple>
						</span>
						<button type="submit" class="btn btn-primary start m-r-3">
							<i class="fa fa-fw fa-upload"></i>
							<span>Start upload</span>
						</button>
						<button type="reset" class="btn btn-default cancel m-r-3">
							<i class="fa fa-fw fa-ban"></i>
							<span>Cancel upload</span>
						</button>
						<button type="button" class="btn btn-default delete m-r-3">
							<i class="fa fa-fw fa-trash"></i>
							<span>Delete</span>
						</button>
						<!-- The global file processing state -->
						<span class="fileupload-process"></span>
					</div>
					<!-- The global progress state -->
					<div class="col-xl-5 fileupload-progress fade d-none d-xl-block">
						<!-- The global progress bar -->
						<div class="progress progress-striped active m-b-0">
							<div class="progress-bar progress-bar-success" style="width:0%;"></div>
						</div>
						<!-- The extended global progress state -->
						<div class="progress-extended">&nbsp;</div>
					</div>
				</div>
			</div>
			<!-- end panel-body -->
			<!-- begin table -->
			<div class="table-responsive">
				<table class="table table-striped table-condensed text-nowrap mb-0">
					<thead>
						<tr>
							<th width="10%">PREVIEW</th>
							<th>FILE INFO</th>
							<th>UPLOAD PROGRESS</th>
							<th width="1%"></th>
						</tr>
					</thead>
					<tbody class="files">
						<tr data-id="empty">
							<td colspan="4" class="text-center text-muted p-t-30 p-b-30">
								<div class="m-b-10"><i class="fa fa-file fa-3x"></i></div>
								<div>No file selected</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- end table -->
		</div>
		<!-- end panel -->
	</form>
	<!-- end form-file-upload -->
	
	<!-- The blueimp Gallery widget -->
	<div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls" data-filter=":even">
		<div class="slides"></div>
		<h3 class="title"></h3>
		<a class="prev">‹</a>
		<a class="next">›</a>
		<a class="close">×</a>
		<a class="play-pause"></a>
		<ol class="indicator"></ol>
	</div>
	
	<!-- The template to display files available for upload -->
	<script id="template-upload" type="text/x-tmpl">
		{% for (var i=0, file; file=o.files[i]; i++) { %}
		<tr class="template-upload fade show">
			<td>
				<span class="preview"></span>
			</td>
			<td>
				<div class="bg-light rounded p-10 mb-2">
					<dl class="m-b-0">
						<dt class="text-inverse">File Name:</dt>
						<dd class="name">{%=file.name%}</dd>
						<dt class="text-inverse m-t-10">File Size:</dt>
						<dd class="size">Processing...</dd>
					</dl>
				</div>
				<strong class="error text-danger h-auto d-block text-left"></strong>
			</td>
			<td>
				<dl>
					<dt class="text-inverse m-t-3">Progress:</dt>
					<dd class="m-t-5">
						<div class="progress progress-sm progress-striped active rounded-corner"><div class="progress-bar progress-bar-primary" style="width:0%; min-width: 40px;">0%</div></div>
					</dd>
				</dl>
			</td>
			<td nowrap>
				{% if (!i && !o.options.autoUpload) { %}
					<button class="btn btn-primary start width-100 p-r-20 m-r-3" disabled>
						<i class="fa fa-upload fa-fw text-inverse"></i>
						<span>Start</span>
					</button>
				{% } %}
				{% if (!i) { %}
					<button class="btn btn-default cancel width-100 p-r-20">
						<i class="fa fa-trash fa-fw text-muted"></i>
						<span>Cancel</span>
					</button>
				{% } %}
			</td>
		</tr>
		{% } %}
	</script>
	
	<!-- The template to display files available for download -->
	<script id="template-download" type="text/x-tmpl">
		{% for (var i=0, file; file=o.files[i]; i++) { %}
			<tr class="template-download fade show">
				<td width="1%">
					<span class="preview">
						{% if (file.thumbnailUrl) { %}
							<a href="{%=file.url%}" title="{%=file.name%}" download="{%=file.name%}" data-gallery><img src="{%=file.thumbnailUrl%}" class="rounded"></a>
						{% } else { %}
							<div class="bg-light text-center f-s-20" style="width: 80px; height: 80px; line-height: 80px; border-radius: 6px;">
								<i class="fa fa-file-image fa-lg text-muted"></i>
							</div>
						{% } %}
					</span>
				</td>
				<td>
					<div class="bg-light p-10 mb-2">
						<dl class="m-b-0">
							<dt class="text-inverse">File Name:</dt>
							<dd class="name">
								{% if (file.url) { %}
									<a href="{%=file.url%}" title="{%=file.name%}" download="{%=file.name%}" {%=file.thumbnailUrl?'data-gallery':''%}>{%=file.name%}</a>
								{% } else { %}
									<span>{%=file.name%}</span>
								{% } %}
							</dd>
							<dt class="text-inverse m-t-10">File Size:</dt>
							<dd class="size">{%=o.formatFileSize(file.size)%}</dd>
						</dl>
						{% if (file.error) { %}
							<div><span class="label label-danger">ERROR</span> {%=file.error%}</div>
						{% } %}
					</div>
				</td>
				<td></td>
				<td>
					{% if (file.deleteUrl) { %}
						<button class="btn btn-danger delete width-100 m-r-3 p-r-20" data-type="{%=file.deleteType%}" data-url="{%=file.deleteUrl%}"{% if (file.deleteWithCredentials) { %} data-xhr-fields='{"withCredentials":true}'{% } %}>
							<i class="fa fa-trash pull-left fa-fw text-inverse m-t-2"></i>
							<span>Delete</span>
						</button>
						<input type="checkbox" name="delete" value="1" class="toggle">
					{% } else { %}
						<button class="btn btn-default cancel width-100 m-r-3 p-r-20">
							<i class="fa fa-trash pull-left fa-fw text-muted m-t-2"></i>
							<span>Cancel</span>
						</button>
					{% } %}
				</td>
			</tr>
		{% } %}
	</script>
@endsection

@push('scripts')
	<script src="/assets/plugins/blueimp-file-upload/js/vendor/jquery.ui.widget.js"></script>
	<script src="/assets/plugins/blueimp-tmpl/js/tmpl.js"></script>
	<script src="/assets/plugins/blueimp-load-image/js/load-image.all.min.js"></script>
	<script src="/assets/plugins/blueimp-canvas-to-blob/js/canvas-to-blob.js"></script>
	<script src="/assets/plugins/blueimp-gallery/js/jquery.blueimp-gallery.min.js"></script>
	<script src="/assets/plugins/blueimp-file-upload/js/jquery.iframe-transport.js"></script>
	<script src="/assets/plugins/blueimp-file-upload/js/jquery.fileupload.js"></script>
	<script src="/assets/plugins/blueimp-file-upload/js/jquery.fileupload-process.js"></script>
	<script src="/assets/plugins/blueimp-file-upload/js/jquery.fileupload-image.js"></script>
	<script src="/assets/plugins/blueimp-file-upload/js/jquery.fileupload-audio.js"></script>
	<script src="/assets/plugins/blueimp-file-upload/js/jquery.fileupload-video.js"></script>
	<script src="/assets/plugins/blueimp-file-upload/js/jquery.fileupload-validate.js"></script>
	<script src="/assets/plugins/blueimp-file-upload/js/jquery.fileupload-ui.js"></script>
	<!--[if (gte IE 8)&(lt IE 10)]>
		<script src="/assets/plugins/jquery-file-upload/js/cors/jquery.xdr-transport.js"></script>
	<![endif]-->
	<script src="/assets/js/demo/form-multiple-upload.demo.js"></script>
@endpush