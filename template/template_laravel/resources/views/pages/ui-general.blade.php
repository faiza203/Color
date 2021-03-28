@extends('layouts.default')

@section('title', 'General UI Elements')

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
		<li class="breadcrumb-item active">General</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">General UI Elements <small>header small text goes here...</small></h1>
	<!-- end page-header -->
	
	<!-- begin row -->
	<div class="row">
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-general-1">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Alerts</h4>
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
					<div class="alert alert-success fade show m-b-0">
						<span class="close" data-dismiss="alert">&times;</span>
						<strong>Success!</strong>
						This is a success alert with <a href="#" class="alert-link">an example link</a>.
					</div>
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper"><pre><code>&lt;div class="alert alert-success fade show"&gt;
  &lt;span class="close" data-dismiss="alert"&gt;&times;&lt;/span&gt;
  &lt;strong&gt;Success!&lt;/strong&gt;
  This is a success alert with 
  &lt;a href="#" class="alert-link"&gt;an example link&lt;/a&gt;. 
&lt;/div&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
								
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-general-2">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Alerts Color <span class="label label-success">NEW</span></h4>
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
					<div class="row row-space-10">
						<div class="col-md-4">
							<div class="alert alert-primary fade show m-b-10">
								<span class="close" data-dismiss="alert">&times;</span>
								Primary alert with <a href="#" class="alert-link">an example link</a>.
							</div>
						</div>
						<div class="col-md-4">
							<div class="alert alert-info fade show m-b-10">
								<span class="close" data-dismiss="alert">&times;</span>
								Info alert with <a href="#" class="alert-link">an example link</a>.
							</div>
						</div>
						<div class="col-md-4">
							<div class="alert alert-purple fade show m-b-10">
								<span class="close" data-dismiss="alert">&times;</span>
								Purple alert with <a href="#" class="alert-link">an example link</a>.
							</div>
						</div>
						<div class="col-md-4">
							<div class="alert alert-indigo fade show m-b-10">
								<span class="close" data-dismiss="alert">&times;</span>
								Indigo alert with <a href="#" class="alert-link">an example link</a>.
							</div>
						</div>
						<div class="col-md-4">
							<div class="alert alert-success fade show m-b-10">
								<span class="close" data-dismiss="alert">&times;</span>
								Success alert with <a href="#" class="alert-link">an example link</a>.
							</div>
						</div>
						<div class="col-md-4">
							<div class="alert alert-green fade show m-b-10">
								<span class="close" data-dismiss="alert">&times;</span>
								Green alert with <a href="#" class="alert-link">an example link</a>.
							</div>
						</div>
						<div class="col-md-4">
							<div class="alert alert-lime fade show m-b-10">
								<span class="close" data-dismiss="alert">&times;</span>
								Lime alert with <a href="#" class="alert-link">an example link</a>.
							</div>
						</div>
						<div class="col-md-4">
							<div class="alert alert-warning fade show m-b-10">
								<span class="close" data-dismiss="alert">&times;</span>
								Warning alert with <a href="#" class="alert-link">an example link</a>.
							</div>
						</div>
						<div class="col-md-4">
							<div class="alert alert-yellow fade show m-b-10">
								<span class="close" data-dismiss="alert">&times;</span>
								Yellow alert with <a href="#" class="alert-link">an example link</a>.
							</div>
						</div>
						<div class="col-md-4">
							<div class="alert alert-danger fade show m-b-10">
								<span class="close" data-dismiss="alert">&times;</span>
								Danger alert with <a href="#" class="alert-link">an example link</a>.
							</div>
						</div>
						<div class="col-md-4">
							<div class="alert alert-pink fade show m-b-10">
								<span class="close" data-dismiss="alert">&times;</span>
								Pink alert with <a href="#" class="alert-link">an example link</a>.
							</div>
						</div>
						<div class="col-md-4">
							<div class="alert alert-dark fade show m-b-10">
								<span class="close" data-dismiss="alert">&times;</span>
								Dark alert with <a href="#" class="alert-link">an example link</a>.
							</div>
						</div>
						<div class="col-md-4">
							<div class="alert alert-secondary fade show m-b-10">
								<span class="close" data-dismiss="alert">&times;</span>
								Secondary alert with <a href="#" class="alert-link">an example link</a>.
							</div>
						</div>
						<div class="col-md-4">
							<div class="alert alert-light fade show m-b-10">
								<span class="close" data-dismiss="alert">&times;</span>
								Light alert with <a href="#" class="alert-link">an example link</a>.
							</div>
						</div>
					</div>
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper"><pre><code>&lt;div class="alert alert-primary fade show"&gt;...&lt;/div&gt;
&lt;div class="alert alert-secondary fade show"&gt;...&lt;/div&gt;
&lt;div class="alert alert-success fade show"&gt;...&lt;/div&gt;
&lt;div class="alert alert-danger fade show"&gt;...&lt;/div&gt;
&lt;div class="alert alert-warning fade show"&gt;...&lt;/div&gt;
&lt;div class="alert alert-yellow fade show"&gt;...&lt;/div&gt;
&lt;div class="alert alert-info fade show"&gt;...&lt;/div&gt;
&lt;div class="alert alert-lime fade show"&gt;...&lt;/div&gt;
&lt;div class="alert alert-purple fade show"&gt;...&lt;/div&gt;
&lt;div class="alert alert-light fade show"&gt;...&lt;/div&gt;
&lt;div class="alert alert-dark fade show"&gt;...&lt;/div&gt;
&lt;div class="alert alert-indigo fade show"&gt;...&lt;/div&gt;
&lt;div class="alert alert-pink fade show"&gt;...&lt;/div&gt;
&lt;div class="alert alert-green fade show"&gt;...&lt;/div&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
			
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-general-3">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Notes</h4>
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
					<div class="note note-primary m-b-15">
						<div class="note-icon"><i class="fab fa-facebook-f"></i></div>
						<div class="note-content">
							<h4><b>Note with icon!</b></h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Maecenas id gravida libero. Etiam semper id sem a ultricies.
							</p>
						</div>
					</div>
					<div class="note note-warning note-with-right-icon m-b-15">
						<div class="note-content text-right">
							<h4><b>Note with right icon!</b></h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Maecenas id gravida libero. Etiam semper id sem a ultricies.
							</p>
						</div>
						<div class="note-icon"><i class="fa fa-lightbulb"></i></div>
					</div>
					<div class="note note-secondary m-b-15">
						<div class="note-content">
							<h4><b>Note without icon!</b></h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Maecenas id gravida libero. Etiam semper id sem a ultricies.
							</p>
						</div>
					</div>
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper"><pre><code>&lt;!-- default --&gt;
&lt;div class="note note-primary"&gt;
  &lt;div class="note-icon"&gt;&lt;i class="fab fa-facebook-f"&gt;&lt;/i&gt;&lt;/div&gt;
  &lt;div class="note-content"&gt;
    &lt;h4&gt;&lt;b&gt;Note with icon!&lt;/b&gt;&lt;/h4&gt;
    &lt;p&gt; ... &lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- with right icon --&gt;
&lt;div class="note note-warning note-with-right-icon"&gt;
  &lt;div class="note-icon"&gt;&lt;i class="fa fa-lightbulb"&gt;&lt;/i&gt;&lt;/div&gt;
  &lt;div class="note-content text-right"&gt;
    &lt;h4&gt;&lt;b&gt;Note with right icon!&lt;/b&gt;&lt;/h4&gt;
    &lt;p&gt; ... &lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-general-4">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Labels & Badges <span class="label label-success">NEW</span></h4>
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
					<div class="row f-s-15">
						<div class="col-md-8">
							<div class="m-b-3">
								<span class="label label-danger">Danger</span>
								<span class="label label-warning">Warning</span>
								<span class="label label-yellow">Yellow</span>
								<span class="label label-lime">Lime</span>
								<span class="label label-green">Green</span>
								<span class="label label-success">Success</span>
							</div>
							<div class="m-b-3">
								<span class="label label-primary">Primary</span>
								<span class="label label-info">Info</span>
								<span class="label label-purple">Purple</span>
								<span class="label label-indigo">Indigo</span>
								<span class="label label-dark">Dark</span>
							</div>
							<div class="m-b-3">
								<span class="label label-pink">Pink</span>
								<span class="label label-secondary">Secondary</span>
								<span class="label label-default">Default</span>
								<span class="label label-light">Light</span>
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-b-3">
								<span class="label label-inverse">label</span>
							</div>
							<div class="m-b-3">
								<span class="badge badge-secondary">badge</span>
							</div>
							<div class="m-b-3">
								<span class="badge badge-default badge-square">badge-square</span>
							</div>
						</div>
					</div>
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper"><pre><code>&lt;!-- label --&gt;
&lt;span class="label label-inverse"&gt;label&lt;/span&gt;

&lt;!-- badge --&gt;
&lt;span class="badge badge-secondary"&gt;badge&lt;/span&gt;

&lt;!-- badge-square --&gt;
&lt;span class="badge badge-default badge-square"&gt;badge-square&lt;/span&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
								
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-general-5">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Pagination & Pager</h4>
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
					<div>
						<ul class="pagination pagination-lg m-t-0 m-b-5">
							<li class="page-item disabled"><a href="javascript:;" class="page-link">«</a></li>
							<li class="page-item active"><a href="javascript:;" class="page-link">1</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">2</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">3</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">4</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">5</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">»</a></li>
						</ul>
					</div>
					<div>
						<ul class="pagination m-t-0 m-b-5">
							<li class="page-item disabled"><a href="javascript:;" class="page-link">«</a></li>
							<li class="page-item active"><a href="javascript:;" class="page-link">1</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">2</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">3</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">4</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">5</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">»</a></li>
						</ul>
					</div>
					<div>
						<ul class="pagination pagination-sm m-t-0 m-b-5">
							<li class="page-item disabled"><a href="javascript:;" class="page-link">«</a></li>
							<li class="page-item active"><a href="javascript:;" class="page-link">1</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">2</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">3</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">4</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">5</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">»</a></li>
						</ul>
					</div>
					<ul class="pager m-b-10">
						<li><a href="javascript:;">Previous</a></li>
						<li><a href="javascript:;">Next</a></li>
					</ul>
					<ul class="pager m-t-0 m-b-0">
						<li class="previous disabled"><a href="javascript:;">&larr; Older</a></li>
						<li class="next"><a href="javascript:;">Newer &rarr;</a></li>
					</ul>
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper"><pre><code>&lt;!-- pagination --&gt;
&lt;ul class="pagination"&gt;
  &lt;li class="page-item disabled"&gt;&lt;a href="#" class="page-link"&gt;«&lt;/a&gt;&lt;/li&gt;
  &lt;li class="page-item active"&gt;&lt;a href="#" class="page-link"&gt;1&lt;/a&gt;&lt;/li&gt;
  &lt;li class="page-item"&gt;&lt;a href="#" class="page-link"&gt;2&lt;/a&gt;&lt;/li&gt;
  &lt;li class="page-item"&gt;&lt;a href="#" class="page-link"&gt;3&lt;/a&gt;&lt;/li&gt;
  &lt;li class="page-item"&gt;&lt;a href="#" class="page-link"&gt;4&lt;/a&gt;&lt;/li&gt;
  &lt;li class="page-item"&gt;&lt;a href="#" class="page-link"&gt;5&lt;/a&gt;&lt;/li&gt;
  &lt;li class="page-item"&gt;&lt;a href="#" class="page-link"&gt;»&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- pager --&gt;
&lt;ul class="pager"&gt;
  &lt;li&gt;&lt;a href="#"&gt;Previous&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Next&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
								
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-general-6">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Progress bar</h4>
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
					<div class="row">
						<div class="col-md-6">
							<div class="progress rounded-corner m-b-15">
								<div class="progress-bar" style="width: 80%">Basic</div>
							</div>
							<div class="progress rounded-corner m-b-15">
								<div class="progress-bar bg-warning progress-bar-striped" style="width: 80%">Striped</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="progress rounded-corner m-b-15">
								<div class="progress-bar bg-purple progress-bar-striped progress-bar-animated" style="width: 80%">Animated</div>
							</div>
							<div class="progress rounded-corner m-b-15">
								<div class="progress-bar bg-dark" style="width: 25%">Stacked</div>
								<div class="progress-bar bg-grey" style="width: 25%">Stacked</div>
								<div class="progress-bar bg-lime" style="width: 25%">Stacked</div>
							</div>
						</div>
					</div>
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper"><pre><code>&lt;!-- default --&gt;
&lt;div class="progress rounded-corner"&gt;
  &lt;div class="progress-bar" style="width: 80%"&gt;Basic&lt;/div&gt;
&lt;/div&gt;

&lt;!-- striped --&gt;
&lt;div class="progress rounded-corner progress-striped"&gt;
  &lt;div class="progress-bar bg-warning" style="width: 80%"&gt;
    Striped
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- animated --&gt;
&lt;div class="progress rounded-corner progress-striped active"&gt;
  &lt;div class="progress-bar bg-purple" style="width: 80%"&gt;
    Animated
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- stacked --&gt;
&lt;div class="progress rounded-corner"&gt;
  &lt;div class="progress-bar bg-dark" style="width: 25%"&gt;
    Stacked
  &lt;/div&gt;
  &lt;div class="progress-bar bg-grey" style="width: 25%"
    &gt;Stacked
  &lt;/div&gt;
  &lt;div class="progress-bar bg-lime" style="width: 25%"&gt;
    Stacked
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
	</div>
	<!-- end row -->
@endsection

@push('scripts')
	<script src="/assets/plugins/highlight.js/highlight.min.js"></script>
	<script src="/assets/js/demo/render.highlight.js"></script>
@endpush
