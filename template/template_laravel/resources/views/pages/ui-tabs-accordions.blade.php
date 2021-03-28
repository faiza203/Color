@extends('layouts.default')

@section('title', 'Tabs & Accordions')

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
		<li class="breadcrumb-item active">Tabs & Accordions</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Tabs & Accordions <small>header small text goes here...</small></h1>
	<!-- end page-header -->
	
	<!-- begin row -->
	<div class="row">
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin nav-tabs -->
			<ul class="nav nav-tabs">
				<li class="nav-item">
					<a href="#default-tab-1" data-toggle="tab" class="nav-link active">
						<span class="d-sm-none">Tab 1</span>
						<span class="d-sm-block d-none">Default Tab 1</span>
					</a>
				</li>
				<li class="nav-item">
					<a href="#default-tab-2" data-toggle="tab" class="nav-link">
						<span class="d-sm-none">Tab 2</span>
						<span class="d-sm-block d-none">Default Tab 2</span>
					</a>
				</li>
				<li class="nav-item">
					<a href="#default-tab-3" data-toggle="tab" class="nav-link">
						<span class="d-sm-none">Tab 3</span>
						<span class="d-sm-block d-none">Default Tab 3</span>
					</a>
				</li>
			</ul>
			<!-- end nav-tabs -->
			<!-- begin tab-content -->
			<div class="tab-content">
				<!-- begin tab-pane -->
				<div class="tab-pane fade active show" id="default-tab-1">
					<h3 class="m-t-10"><i class="fa fa-cog"></i> Lorem ipsum dolor sit amet</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Integer ac dui eu felis hendrerit lobortis. Phasellus elementum, nibh eget adipiscing porttitor, 
						est diam sagittis orci, a ornare nisi quam elementum tortor. Proin interdum ante porta est convallis 
						dapibus dictum in nibh. Aenean quis massa congue metus mollis fermentum eget et tellus. 
						Aenean tincidunt, mauris ut dignissim lacinia, nisi urna consectetur sapien, nec eleifend orci eros id lectus.
					</p>
					<p class="text-right m-b-0">
						<a href="javascript:;" class="btn btn-white m-r-5">Default</a>
						<a href="javascript:;" class="btn btn-primary">Primary</a>
					</p>
				</div>
				<!-- end tab-pane -->
				<!-- begin tab-pane -->
				<div class="tab-pane fade" id="default-tab-2">
					<blockquote>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<small>Someone famous in <cite title="Source Title">Source Title</cite></small>
					</blockquote>
					<h4>Lorem ipsum dolor sit amet</h4>
					<p>
						Nullam ac sapien justo. Nam augue mauris, malesuada non magna sed, feugiat blandit ligula. 
						In tristique tincidunt purus id iaculis. Pellentesque volutpat tortor a mauris convallis, 
						sit amet scelerisque lectus adipiscing.
					</p>
				</div>
				<!-- end tab-pane -->
				<!-- begin tab-pane -->
				<div class="tab-pane fade" id="default-tab-3">
					<p>
						<span class="fa-stack fa-4x pull-left m-r-10">
							<i class="fa fa-square-o fa-stack-2x"></i>
							<i class="fab fa-twitter fa-stack-1x"></i>
						</span>
						Praesent tincidunt nulla ut elit vestibulum viverra. Sed placerat magna eget eros accumsan elementum. 
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lobortis neque. 
						Maecenas justo odio, bibendum fringilla quam nec, commodo rutrum quam. 
						Donec cursus erat in lacus congue sodales. Nunc bibendum id augue sit amet placerat. 
						Quisque et quam id felis tempus volutpat at at diam. Vivamus ac diam turpis.Sed at lacinia augue. 
						Nulla facilisi. Fusce at erat suscipit, dapibus elit quis, luctus nulla. 
						Quisque adipiscing dui nec orci fermentum blandit.
						Sed at lacinia augue. Nulla facilisi. Fusce at erat suscipit, dapibus elit quis, luctus nulla. 
						Quisque adipiscing dui nec orci fermentum blandit.
					</p>
				</div>
				<!-- end tab-pane -->
			</div>
			<!-- end tab-content -->
			<!-- begin nav-pills -->
			<ul class="nav nav-pills mb-2">
				<li class="nav-item">
					<a href="#nav-pills-tab-1" data-toggle="tab" class="nav-link active">
						<span class="d-sm-none">Pills 1</span>
						<span class="d-sm-block d-none">Pills Tab 1</span>
					</a>
				</li>
				<li class="nav-item">
					<a href="#nav-pills-tab-2" data-toggle="tab" class="nav-link">
						<span class="d-sm-none">Pills 2</span>
						<span class="d-sm-block d-none">Pills Tab 2</span>
					</a>
				</li>
				<li class="nav-item">
					<a href="#nav-pills-tab-3" data-toggle="tab" class="nav-link">
						<span class="d-sm-none">Pills 3</span>
						<span class="d-sm-block d-none">Pills Tab 3</span>
					</a>
				</li>
				<li class="nav-item">
					<a href="#nav-pills-tab-4" data-toggle="tab" class="nav-link">
						<span class="d-sm-none">Pills 4</span>
						<span class="d-sm-block d-none">Pills Tab 4</span>
					</a>
				</li>
			</ul>
			<!-- end nav-pills -->
			<!-- begin tab-content -->
			<div class="tab-content p-15 rounded bg-white mb-4">
				<!-- begin tab-pane -->
				<div class="tab-pane fade active show" id="nav-pills-tab-1">
					<h3 class="m-t-10">Nav Pills Tab 1</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Integer ac dui eu felis hendrerit lobortis. Phasellus elementum, nibh eget adipiscing porttitor, 
						est diam sagittis orci, a ornare nisi quam elementum tortor. 
						Proin interdum ante porta est convallis dapibus dictum in nibh. 
						Aenean quis massa congue metus mollis fermentum eget et tellus. 
						Aenean tincidunt, mauris ut dignissim lacinia, nisi urna consectetur sapien, 
						nec eleifend orci eros id lectus.
					</p>
				</div>
				<!-- end tab-pane -->
				<!-- begin tab-pane -->
				<div class="tab-pane fade" id="nav-pills-tab-2">
					<h3 class="m-t-10">Nav Pills Tab 2</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Integer ac dui eu felis hendrerit lobortis. Phasellus elementum, nibh eget adipiscing porttitor, 
						est diam sagittis orci, a ornare nisi quam elementum tortor. 
						Proin interdum ante porta est convallis dapibus dictum in nibh. 
						Aenean quis massa congue metus mollis fermentum eget et tellus. 
						Aenean tincidunt, mauris ut dignissim lacinia, nisi urna consectetur sapien, 
						nec eleifend orci eros id lectus.
					</p>
				</div>
				<!-- end tab-pane -->
				<!-- begin tab-pane -->
				<div class="tab-pane fade" id="nav-pills-tab-3">
					<h3 class="m-t-10">Nav Pills Tab 3</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Integer ac dui eu felis hendrerit lobortis. Phasellus elementum, nibh eget adipiscing porttitor, 
						est diam sagittis orci, a ornare nisi quam elementum tortor. 
						Proin interdum ante porta est convallis dapibus dictum in nibh. 
						Aenean quis massa congue metus mollis fermentum eget et tellus. 
						Aenean tincidunt, mauris ut dignissim lacinia, nisi urna consectetur sapien, 
						nec eleifend orci eros id lectus.
					</p>
				</div>
				<!-- end tab-pane -->
				<!-- begin tab-pane -->
				<div class="tab-pane fade" id="nav-pills-tab-4">
					<h3 class="m-t-10">Nav Pills Tab 4</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Integer ac dui eu felis hendrerit lobortis. Phasellus elementum, nibh eget adipiscing porttitor, 
						est diam sagittis orci, a ornare nisi quam elementum tortor. 
						Proin interdum ante porta est convallis dapibus dictum in nibh. 
						Aenean quis massa congue metus mollis fermentum eget et tellus. 
						Aenean tincidunt, mauris ut dignissim lacinia, nisi urna consectetur sapien, 
						nec eleifend orci eros id lectus.
					</p>
				</div>
				<!-- end tab-pane -->
			</div>
			<!-- end tab-content -->
		</div>
		<!-- end col-6 -->
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin #accordion -->
			<div id="accordion" class="accordion">
				<!-- begin card -->
				<div class="card bg-dark text-white">
					<div class="card-header bg-dark-darker pointer-cursor d-flex align-items-center" data-toggle="collapse" data-target="#collapseOne">
						<i class="fa fa-circle fa-fw text-blue mr-2 f-s-8"></i> Collapsible Group Item #1
					</div>
					<div id="collapseOne" class="collapse show" data-parent="#accordion">
						<div class="card-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						</div>
					</div>
				</div>
				<!-- end card -->
				<!-- begin card -->
				<div class="card bg-dark text-white">
					<div class="card-header bg-dark-darker pointer-cursor d-flex align-items-center collapsed" data-toggle="collapse" data-target="#collapseTwo">
						<i class="fa fa-circle fa-fw text-indigo mr-2 f-s-8"></i> Collapsible Group Item #2
					</div>
					<div id="collapseTwo" class="collapse" data-parent="#accordion">
						<div class="card-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						</div>
					</div>
				</div>
				<!-- end card -->
				<!-- begin card -->
				<div class="card bg-dark text-white">
					<div class="card-header bg-dark-darker pointer-cursor d-flex align-items-center collapsed" data-toggle="collapse" data-target="#collapseThree">
						<i class="fa fa-circle fa-fw text-teal mr-2 f-s-8"></i> Collapsible Group Item #3
					</div>
					<div id="collapseThree" class="collapse" data-parent="#accordion">
						<div class="card-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						</div>
					</div>
				</div>
				<!-- end card -->
				<!-- begin card -->
				<div class="card bg-dark text-white">
					<div class="card-header bg-dark-darker pointer-cursor d-flex align-items-center collapsed" data-toggle="collapse" data-target="#collapseFour">
						<i class="fa fa-circle fa-fw text-info mr-2 f-s-8"></i> Collapsible Group Item #4
					</div>
					<div id="collapseFour" class="collapse" data-parent="#accordion">
						<div class="card-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						</div>
					</div>
				</div>
				<!-- end card -->
				<!-- begin card -->
				<div class="card bg-dark text-white">
					<div class="card-header bg-dark-darker pointer-cursor d-flex align-items-center collapsed" data-toggle="collapse" data-target="#collapseFive">
						<i class="fa fa-circle fa-fw text-warning mr-2 f-s-8"></i> Collapsible Group Item #5
					</div>
					<div id="collapseFive" class="collapse" data-parent="#accordion">
						<div class="card-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						</div>
					</div>
				</div>
				<!-- end card -->
				<!-- begin card -->
				<div class="card bg-dark text-white">
					<div class="card-header bg-dark-darker pointer-cursor d-flex align-items-center collapsed" data-toggle="collapse" data-target="#collapseSix">
						<i class="fa fa-circle fa-fw text-danger mr-2 f-s-8"></i> Collapsible Group Item #6
					</div>
					<div id="collapseSix" class="collapse" data-parent="#accordion">
						<div class="card-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						</div>
					</div>
				</div>
				<!-- end card -->
				<!-- begin card -->
				<div class="card bg-dark text-white">
					<div class="card-header bg-dark-darker pointer-cursor d-flex align-items-center collapsed" data-toggle="collapse" data-target="#collapseSeven">
						<i class="fa fa-circle fa-fw text-muted mr-2 f-s-8"></i> Collapsible Group Item #7
					</div>
					<div id="collapseSeven" class="collapse" data-parent="#accordion">
						<div class="card-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						</div>
					</div>
				</div>
				<!-- end card -->
			</div>
			<!-- end #accordion -->
		</div>
		<!-- end col-6 -->
	</div>
	<!-- end row -->
@endsection