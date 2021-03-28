@extends('layouts.default')

@section('title', 'Widget Boxes')

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
		<li class="breadcrumb-item active">Widget Boxes</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Widget Boxes <small>header small text goes here...</small></h1>
	<!-- end page-header -->
	
	<!-- begin row -->
	<div class="row">
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-1">
				<div class="panel-heading">
					<h4 class="panel-title">Panel (Default)</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-inverse" data-sortable-id="ui-widget-1"&gt;
  &lt;div class="panel-heading"&gt;
    &lt;h4 class="panel-title"&gt;Panel Title&lt;/h4&gt;
    &lt;div class="panel-heading-btn"&gt;
      &lt;a href="#" class="btn btn-xs btn-icon btn-circle btn-default" 
        data-click="panel-expand"&gt;
        &lt;i class="fa fa-expand"&gt;&lt;/i&gt;
      &lt;/a&gt;
      ...
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="panel-body"&gt;
    &lt;p&gt;Panel Content Here&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-2">
				<div class="panel-heading">
					<h4 class="panel-title">Panel Header with Dropdown</h4>
					<div class="btn-group">
						<button type="button" class="btn btn-success btn-xs">Action</button>
						<button type="button" class="btn btn-success btn-xs dropdown-toggle" data-toggle="dropdown"><b class="caret"></b></button>
						<div class="dropdown-menu dropdown-menu-right" role="menu">
							<a href="javascript:;" class="dropdown-item">Action</a>
							<a href="javascript:;" class="dropdown-item">Another action</a>
							<a href="javascript:;" class="dropdown-item">Something else here</a>
							<div class="dropdown-divider"></div>
							<a href="javascript:;" class="dropdown-item">Separated link</a>
						</div>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel-heading"&gt;
  &lt;h4 class="panel-title"&gt;Panel Header with Dropdown&lt;/h4&gt;
  &lt;div class="btn-group"&gt;
    &lt;button type="button" class="btn btn-success btn-xs"&gt;Action&lt;/button&gt;
    &lt;button type="button" class="btn btn-success btn-xs dropdown-toggle"
      data-toggle="dropdown"&gt;
      &lt;span class="caret"&gt;&lt;/span&gt;
    &lt;/button&gt;
    &lt;div class="dropdown-menu" role="menu"&gt;
      &lt;a href="javascript:;" class="dropdown-item"&gt;Action&lt;/a&gt;
      ...
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-3">
				<div class="panel-heading">
					<h4 class="panel-title">Panel Header with Radio Button</h4>
					<div class="btn-group btn-group-toggle" data-toggle="buttons">
						<label class="btn btn-success btn-xs active">
							<input type="radio" name="options" id="option1" checked /> Option 1
						</label>
						<label class="btn btn-success btn-xs">
							<input type="radio" name="options" id="option2" /> Option 2
						</label>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel-heading"&gt;
  &lt;h4 class="panel-title"&gt;Panel Header with Radio Button&lt;/h4&gt;
  &lt;div class="btn-group btn-group-toggle" data-toggle="buttons"&gt;
    &lt;label class="btn btn-success btn-xs active"&gt;
      &lt;input type="radio" name="options" id="option1" checked /&gt; Option 1
    &lt;/label&gt;
    &lt;label class="btn btn-success btn-xs"&gt;
      &lt;input type="radio" name="options" id="option2" /&gt; Option 2
    &lt;/label&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-4">
				<div class="panel-heading">
					<h4 class="panel-title">Panel Header with Progress Bar</h4>
					<div class="progress progress-sm m-t-5">
						<div class="progress-bar progress-bar-striped bg-success progress-bar-animated" style="width: 40%">40%</div>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel-heading"&gt;
  &lt;h4 class="panel-title"&gt;Panel Header with Progress Bar&lt;/h4&gt;
  &lt;div class="progress progress-sm m-t-5"&gt;
    &lt;div class="progress-bar progress-bar-success progress-bar-striped progress-bar-animated" style="width: 40%"&gt;
      40%
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-5">
				<div class="panel-heading">
					<span class="label label-success m-r-10">NEW</span> 
					<h4 class="panel-title">Panel Header with Label</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel-heading"&gt;
  &lt;h4 class="panel-title"&gt;
    &lt;span class="label label-success m-r-10 pull-left"&gt;NEW&lt;/span&gt; 
    Panel Header with Label
  &lt;/h4&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-6">
				<div class="panel-heading">
					<h4 class="panel-title">
						Panel with Alert Box
					</h4>
				</div>
				<div class="alert alert-success fade show">
					<span class="close" data-dismiss="alert">×</span>
					<i class="fa fa-check fa-2x pull-left m-r-10"></i>
					<p class="m-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac posuere lacus, quis suscipit sem. Nulla sagittis aliquam erat non convallis.</p>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-inverse"&gt;
  &lt;div class="panel-heading"&gt;...&lt;/div&gt;
  &lt;div class="alert alert-success fade in"&gt;
    &lt;span class="close" data-dismiss="alert"&gt;×&lt;/span&gt;
    &lt;i class="fa fa-check fa-2x pull-left m-r-10"&gt;&lt;/i&gt;
    &lt;p&gt;...&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class="panel-body"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse panel-hover-icon" data-sortable-id="ui-widget-7">
				<div class="panel-heading">
					<h4 class="panel-title">Hover View Icon</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-inverse panel-hover-icon"&gt;
  ...
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-8">
				<div class="panel-heading">
					<h4 class="panel-title">Panel with Slimscroll</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<div data-scrollbar="true" data-height="280px">
						<p>
							<span class="fa-stack fa-4x pull-left m-r-10 text-inverse">
								<i class="fab fa-twitter fa-stack-1x"></i>
							</span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed enim arcu. 
							Ut posuere in ligula quis ultricies. In in justo turpis. Donec ut dui at massa gravida 
							interdum nec vitae justo. Quisque ullamcorper vehicula dictum. Nullam hendrerit interdum eleifend. 
							Aenean luctus sed arcu laoreet scelerisque. Vivamus non ullamcorper mauris, id sagittis lorem. 
							Proin tincidunt mauris et dolor mattis imperdiet. Sed facilisis mattis diam elementum adipiscing. 
						</p>
						<p>
							<span class="fa-stack fa-4x pull-right m-l-10 text-inverse">
								<i class="fab fa-google-plus fa-stack-1x"></i>
							</span>
							Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
							Ut ante velit, pretium non nisi a, egestas placerat diam. Nullam aliquet iaculis ultricies. 
							Aliquam volutpat, sapien quis volutpat elementum, ligula purus auctor diam, at vestibulum nulla augue 
							vel purus. Praesent ac nisl a magna tincidunt interdum sed in turpis. Maecenas nec condimentum risus. 
							In congue pretium est, eget euismod tortor ornare quis.
						</p>
						<p>
							<span class="fa-stack fa-4x pull-left m-r-10 text-inverse">
								<i class="fab fa-facebook fa-stack-1x"></i>
							</span>
							Praesent eu ultrices justo. Vestibulum ante 
							ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
							Cras mattis ipsum quis sapien consectetur fringilla. 
							Etiam sagittis sem tempus purus elementum, vitae pretium sapien porta. Curabitur iaculis ante ut aliquam luctus. 
							Vivamus ullamcorper blandit imperdiet. Ut egestas, orci id rhoncus cursus, orci risus scelerisque enim, eget mattis eros lacus quis ligula. 
							Vivamus ullamcorper urna eget hendrerit laoreet.
						</p>
						<p>
							<span class="fa-stack fa-4x pull-right m-l-10 text-inverse">
								<i class="fab fa-apple fa-stack-1x"></i>
							</span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
							Morbi accumsan velit dolor. Donec convallis eleifend magna, at euismod tellus convallis a. 
							Curabitur in nisi dolor. Cras viverra scelerisque orci, sed interdum ligula volutpat non. 
							Nunc eu enim ac neque tempor feugiat. Duis posuere lacus non magna eleifend, 
							non dictum sem feugiat. Duis eleifend condimentum pulvinar.
						</p>
					</div>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-inverse"&gt;
  &lt;div class="panel-heading"&gt;...&lt;/div&gt;
  &lt;div class="panel-body"&gt;
    &lt;div data-scrollbar="true" data-height="280px"&gt;
      ...
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-9">
				<div class="panel-heading">
					<h4 class="panel-title">Panel with Toolbar & Footer</h4>
				</div>
				<div class="panel-toolbar">
					<div class="btn-group m-r-5">
						<a class="btn btn-white" href="javascript:;"><i class="fa fa-bold"></i></a>
						<a class="btn btn-white active" href="javascript:;"><i class="fa fa-italic"></i></a>
						<a class="btn btn-white" href="javascript:;"><i class="fa fa-underline"></i></a>
					</div>
					<div class="btn-group">
						<a class="btn btn-white" href="javascript:;"><i class="fa fa-align-left"></i></a>
						<a class="btn btn-white active" href="javascript:;"><i class="fa fa-align-center"></i></a>
						<a class="btn btn-white" href="javascript:;"><i class="fa fa-align-right"></i></a>
						<a class="btn btn-white" href="javascript:;"><i class="fa fa-align-justify"></i></a>
					</div>
				</div>
				<textarea class="form-control no-rounded-corner" rows="5">This is a form textarea.</textarea>
				<div class="panel-footer text-right">
					<a href="javascript:;" class="btn btn-white btn-sm">Cancel</a>
					<a href="javascript:;" class="btn btn-primary btn-sm m-l-5">Action</a>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-inverse"&gt;
  &lt;div class="panel-heading"&gt;...&lt;/div&gt;
  &lt;div class="panel-toolbar"&gt;
    &lt;div class="btn-group m-r-5"&gt;
      ...
    &lt;/div&gt;
    &lt;div class="btn-group"&gt;
      ...
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;textarea class="form-control no-rounded-corner" rows="5"&gt;...&lt;/textarea&gt;
  &lt;div class="panel-footer text-right"&gt;
    &lt;a href="#" class="btn btn-white btn-sm"&gt;Cancel&lt;/a&gt;
    &lt;a href="#" class="btn btn-primary btn-sm m-l-5"&gt;Action&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-default panel-with-tabs" data-sortable-id="ui-widget-10">
				<div class="panel-heading">
					<h4 class="panel-title">Panel with Tabs</h4>
					<ul class="nav nav-tabs">
						<li class="nav-item"><a href="#home" data-toggle="tab" class="nav-link active"><i class="fa fa-home"></i> <span class="d-none d-md-inline">Home</span></a></li>
						<li class="nav-item"><a href="#profile" data-toggle="tab" class="nav-link"><i class="fa fa-user"></i> <span class="d-none d-md-inline">Profile</span></a></li>
					</ul>
				</div>
				<div class="panel-body">
					<div class="tab-content">
						<div class="tab-pane fade show active" id="home">
							<p class="m-b-0">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
						</div>
						<div class="tab-pane fade" id="profile">
							<p class="m-b-0">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
						</div>
					</div>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-default panel-with-tabs"&gt;
  &lt;div class="panel-heading"&gt;
    &lt;ul class="nav nav-tabs pull-right"&gt;
      &lt;li class="nav-item"&gt;
        &lt;a href="#home" data-toggle="tab" class="nav-link active"&gt;
          &lt;i class="fa fa-home"&gt;&lt;/i&gt; 
          &lt;span class="hidden-xs"&gt;Home&lt;/span&gt;
        &lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="#profile" data-toggle="tab"&gt;
          &lt;i class="fa fa-user"&gt;&lt;/i&gt; 
          &lt;span class="hidden-xs"&gt;Profile&lt;/span&gt;
        &lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;h4 class="panel-title"&gt;Panel with Tabs&lt;/h4&gt;
  &lt;/div&gt;
  &lt;div id="myTabContent" class="tab-content"&gt;
    &lt;div class="tab-pane fade in active" id="home"&gt;...&lt;/div&gt;
    &lt;div class="tab-pane fade in" id="profile"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
	</div>
	<!-- end row -->

	<h3 class="m-b-20">Panel Theme</h3>
	
	<!-- begin row -->
	<div class="row">
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-default" data-sortable-id="ui-widget-10">
				<div class="panel-heading">
					<h4 class="panel-title">Panel (Default)</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-default"&gt;...&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-success" data-sortable-id="ui-widget-11">
				<div class="panel-heading">
					<h4 class="panel-title">Panel Success</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-success"&gt;...&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-warning" data-sortable-id="ui-widget-12">
				<div class="panel-heading">
					<h4 class="panel-title">Panel Warning</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-warning"&gt;...&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-danger" data-sortable-id="ui-widget-13">
				<div class="panel-heading">
					<h4 class="panel-title">Panel Danger</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-danger"&gt;...&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-14">
				<div class="panel-heading">
					<h4 class="panel-title">Panel Inverse</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-inverse"&gt;...&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-primary" data-sortable-id="ui-widget-15">
				<div class="panel-heading">
					<h4 class="panel-title">Panel Primary</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-primary"&gt;...&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-info" data-sortable-id="ui-widget-16">
				<div class="panel-heading">
					<h4 class="panel-title">Panel Info</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-info"&gt;...&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
	</div>
	<!-- end row -->
	
	<h3>Full Color Panel Theme</h3>
	<p class="m-b-20">
		You can customize the panel body / header <code>background</code> & <code>text color</code> by adding predefined CSS class. E.g <code>.bg-black</code>. Full list of available predefined background class can be found <a href="helper_css.html">here</a>.
	</p>
	
	<!-- begin row -->
	<div class="row">
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-16">
				<div class="panel-heading">
					<h4 class="panel-title">Full Color Panel</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body bg-dark text-white">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-inverse"&gt;
  &lt;div class="panel-heading"&gt;...&lt;/div&gt;
  &lt;div class="panel-body bg-dark text-white"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-primary" data-sortable-id="ui-widget-17">
				<div class="panel-heading">
					<h4 class="panel-title">Full Color Panel</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body bg-blue text-white">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-primary"&gt;
  &lt;div class="panel-heading"&gt;...&lt;/div&gt;
  &lt;div class="panel-body bg-blue text-white"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-success" data-sortable-id="ui-widget-18">
				<div class="panel-heading">
					<h4 class="panel-title">Full Color Panel</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body bg-teal text-white">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-success"&gt;
  &lt;div class="panel-heading"&gt;...&lt;/div&gt;
  &lt;div class="panel-body bg-green text-white"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-warning" data-sortable-id="ui-widget-19">
				<div class="panel-heading">
					<h4 class="panel-title">Full Color Panel</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body bg-orange text-white">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-warning"&gt;
  &lt;div class="panel-heading"&gt;...&lt;/div&gt;
  &lt;div class="panel-body bg-orange text-white"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-danger" data-sortable-id="ui-widget-20">
				<div class="panel-heading">
					<h4 class="panel-title">Full Color Panel</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body bg-red text-white">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-danger"&gt;
  &lt;div class="panel-heading"&gt;...&lt;/div&gt;
  &lt;div class="panel-body bg-red text-white"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-info" data-sortable-id="ui-widget-21">
				<div class="panel-heading">
					<h4 class="panel-title">Full Color Panel</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body bg-aqua text-white">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="panel panel-info"&gt;
  &lt;div class="panel-heading"&gt;...&lt;/div&gt;
  &lt;div class="panel-body bg-aqua text-white"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
				</div>
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