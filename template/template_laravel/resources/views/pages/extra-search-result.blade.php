@extends('layouts.default')

@section('title', 'Search Results')

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Extra</a></li>
		<li class="breadcrumb-item active">Search Results</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Search Results <small>3 results found</small></h1>
	<!-- end page-header -->
	<!-- begin row -->
	<div class="row">
		<!-- begin col-12 -->
		<div class="col-md-12">
			<!-- begin result-container -->
			<div class="result-container">
				<!-- begin input-group -->
				<div class="input-group input-group-lg mb-3">
					<input type="text" class="form-control input-white" placeholder="Enter keywords here..." />
					<div class="input-group-append">
						<div class="dropdown-menu dropdown-menu-right">
							<a href="javascript:;" class="dropdown-item">Action</a>
							<a href="javascript:;" class="dropdown-item">Another action</a>
							<a href="javascript:;" class="dropdown-item">Something else here</a>
							<div class="dropdown-divider"></div>
							<a href="javascript:;" class="dropdown-item">Separated link</a>
						</div>
						<button type="button" class="btn btn-primary"><i class="fa fa-search fa-fw"></i> Search</button>
						<button type="button" class="btn btn-primary dropdown-toggle no-caret" data-toggle="dropdown">
							<i class="fa fa-cog fa-fw"></i>
						</button>
					</div>
				</div>
				<!-- end input-group -->
				<div class="d-block d-md-flex align-items-center mb-3">
					<!-- begin filter -->
					<div class="d-flex">
						<!-- begin dropdown -->
						<div class="dropdown mr-2">
							<a href="#" class="btn btn-white btn-white-without-border dropdown-toggle" data-toggle="dropdown">
								Filters by <b class="caret"></b>
							</a>
							<div class="dropdown-menu" role="menu">
								<a href="javascript:;" class="dropdown-item">Posted Date</a>
								<a href="javascript:;" class="dropdown-item">View Count</a>
								<a href="javascript:;" class="dropdown-item">Total View</a>
								<div class="dropdown-divider"></div>
								<a href="javascript:;" class="dropdown-item">Location</a>
							</div>
						</div>
						<!-- end dropdown -->
						<!-- begin btn-group -->
						<div class="btn-group">
							<a href="javascript:;" class="btn btn-white btn-white-without-border"><i class="fa fa-list"></i></a>
							<a href="javascript:;" class="btn btn-white btn-white-without-border"><i class="fa fa-th"></i></a>
							<a href="javascript:;" class="btn btn-white btn-white-without-border"><i class="fa fa-th-large"></i></a>
						</div>
						<!-- end btn-group -->
					</div>
					<!-- end filter -->
					<!-- begin pagination -->
					<div class="ml-auto d-none d-lg-block">
						<ul class="pagination mb-0">
							<li class="page-item disabled"><a href="javascript:;" class="page-link">«</a></li>
							<li class="page-item active"><a href="javascript:;" class="page-link">1</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">2</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">3</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">4</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">5</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">6</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">7</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">»</a></li>
						</ul>
					</div>
					<!-- end pagination -->
				</div>
				<!-- begin result-list -->
				<ul class="result-list">
					<li>
						<a href="#" class="result-image" style="background-image: url(/assets/img/gallery/gallery-51.jpg)"></a>
						<div class="result-info">
							<h4 class="title"><a href="javascript:;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
							<p class="location">United State, BY 10089</p>
							<p class="desc">
								Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
							</p>
							<div class="btn-row">
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Analytics"><i class="fa fa-fw fa-chart-bar"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Tasks"><i class="fa fa-fw fa-tasks"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Configuration"><i class="fa fa-fw fa-cog"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Performance"><i class="fa fa-fw fa-tachometer-alt"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Users"><i class="fa fa-fw fa-user"></i></a>
							</div>
						</div>
						<div class="result-price">
							$92,101 <small>PER MONTH</small>
							<a href="javascript:;" class="btn btn-yellow btn-block">View Details</a>
						</div>
					</li>
					<li>
						<a href="#" class="result-image" style="background-image: url(/assets/img/gallery/gallery-52.jpg)"></a>
						<div class="result-info">
							<h4 class="title"><a href="javascript:;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
							<p class="location">United State, BY 10089</p>
							<p class="desc">
								Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
							</p>
							<div class="btn-row">
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Analytics"><i class="fa fa-fw fa-chart-bar"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Tasks"><i class="fa fa-fw fa-tasks"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Configuration"><i class="fa fa-fw fa-cog"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Performance"><i class="fa fa-fw fa-tachometer-alt"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Users"><i class="fa fa-fw fa-user"></i></a>
							</div>
						</div>
						<div class="result-price">
							$102,232 <small>PER MONTH</small>
							<a href="javascript:;" class="btn btn-yellow btn-block">View Details</a>
						</div>
					</li>
					<li>
						<a href="#" class="result-image" style="background-image: url(/assets/img/gallery/gallery-53.jpg)"></a>
						<div class="result-info">
							<h4 class="title"><a href="javascript:;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
							<p class="location">United State, BY 10089</p>
							<p class="desc">
								Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
							</p>
							<div class="btn-row">
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Analytics"><i class="fa fa-fw fa-chart-bar"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Tasks"><i class="fa fa-fw fa-tasks"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Configuration"><i class="fa fa-fw fa-cog"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Performance"><i class="fa fa-fw fa-tachometer-alt"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Users"><i class="fa fa-fw fa-user"></i></a>
							</div>
						</div>
						<div class="result-price">
							$183,921 <small>PER MONTH</small>
							<a href="javascript:;" class="btn btn-yellow btn-block">View Details</a>
						</div>
					</li>
					<li>
						<a href="#" class="result-image" style="background-image: url(/assets/img/gallery/gallery-54.jpg)"></a>
						<div class="result-info">
							<h4 class="title"><a href="javascript:;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
							<p class="location">United State, BY 10089</p>
							<p class="desc">
								Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
							</p>
							<div class="btn-row">
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Analytics"><i class="fa fa-fw fa-chart-bar"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Tasks"><i class="fa fa-fw fa-tasks"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Configuration"><i class="fa fa-fw fa-cog"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Performance"><i class="fa fa-fw fa-tachometer-alt"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Users"><i class="fa fa-fw fa-user"></i></a>
							</div>
						</div>
						<div class="result-price">
							$82,991 <small>PER MONTH</small>
							<a href="javascript:;" class="btn btn-yellow btn-block">View Details</a>
						</div>
					</li>
					<li>
						<a href="#" class="result-image" style="background-image: url(/assets/img/gallery/gallery-55.jpg)"></a>
						<div class="result-info">
							<h4 class="title"><a href="javascript:;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
							<p class="location">United State, BY 10089</p>
							<p class="desc">
								Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
							</p>
							<div class="btn-row">
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Analytics"><i class="fa fa-fw fa-chart-bar"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Tasks"><i class="fa fa-fw fa-tasks"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Configuration"><i class="fa fa-fw fa-cog"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Performance"><i class="fa fa-fw fa-tachometer-alt"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Users"><i class="fa fa-fw fa-user"></i></a>
							</div>
						</div>
						<div class="result-price">
							$422,999 <small>PER MONTH</small>
							<a href="javascript:;" class="btn btn-yellow btn-block">View Details</a>
						</div>
					</li>
					<li>
						<a href="#" class="result-image" style="background-image: url(/assets/img/gallery/gallery-56.jpg)"></a>
						<div class="result-info">
							<h4 class="title"><a href="javascript:;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
							<p class="location">United State, BY 10089</p>
							<p class="desc">
								Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
							</p>
							<div class="btn-row">
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Analytics"><i class="fa fa-fw fa-chart-bar"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Tasks"><i class="fa fa-fw fa-tasks"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Configuration"><i class="fa fa-fw fa-cog"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Performance"><i class="fa fa-fw fa-tachometer-alt"></i></a>
								<a href="javascript:;" data-toggle="tooltip" data-container="body" data-title="Users"><i class="fa fa-fw fa-user"></i></a>
							</div>
						</div>
						<div class="result-price">
							$891,872 <small>PER MONTH</small>
							<a href="javascript:;" class="btn btn-yellow btn-block">View Details</a>
						</div>
					</li>
				</ul>
				<!-- end result-list -->
				<!-- begin pagination -->
				<div class="d-flex m-t-20">
					<ul class="pagination ml-auto mr-auto mr-lg-0">
						<li class="page-item disabled"><a href="javascript:;" class="page-link">«</a></li>
						<li class="page-item active"><a href="javascript:;" class="page-link">1</a></li>
						<li class="page-item"><a href="javascript:;" class="page-link">2</a></li>
						<li class="page-item"><a href="javascript:;" class="page-link">3</a></li>
						<li class="page-item"><a href="javascript:;" class="page-link">4</a></li>
						<li class="page-item"><a href="javascript:;" class="page-link">5</a></li>
						<li class="page-item"><a href="javascript:;" class="page-link">6</a></li>
						<li class="page-item"><a href="javascript:;" class="page-link">7</a></li>
						<li class="page-item"><a href="javascript:;" class="page-link">»</a></li>
					</ul>
				</div>
				<!-- end pagination -->
			</div>
			<!-- end result-container -->
		</div>
		<!-- end col-12 -->
	</div>
	<!-- end row -->
@endsection