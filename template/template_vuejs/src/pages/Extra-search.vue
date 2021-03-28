<template>
	<div>
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
					<b-input-group size="lg" class="mb-3">
						<input type="text" class="form-control input-white" placeholder="Enter keywords here..." />
						<b-dropdown slot="append" split text="Search" variant="primary" size="lg" menuClass="dropdown-menu-right">
							<b-dropdown-item href="#">Action</b-dropdown-item>
							<b-dropdown-item href="#">Another action</b-dropdown-item>
							<b-dropdown-item href="#">Something else here...</b-dropdown-item>
							<b-dropdown-divider></b-dropdown-divider>
							<b-dropdown-item href="#">Separated link</b-dropdown-item>
						</b-dropdown>
					</b-input-group>
					<!-- end input-group -->
					<div class="d-block d-md-flex align-items-center mb-3">
						<!-- begin filter -->
						<div class="d-flex">
							<!-- begin dropdown -->
							<b-dropdown text="Filters by" variant="white btn-white-without-border" class="mr-2" buttonClass="btn-white-without-border">
								<b-dropdown-item href="#">Posted Date</b-dropdown-item>
								<b-dropdown-item href="#">View Count</b-dropdown-item>
								<b-dropdown-item href="#">Total View</b-dropdown-item>
								<b-dropdown-divider></b-dropdown-divider>
								<b-dropdown-item href="#">Location</b-dropdown-item>
							</b-dropdown>
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
							<a href="#" class="result-image" style="background-image: url(../assets/img/gallery/gallery-51.jpg)"></a>
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
							<a href="#" class="result-image" style="background-image: url(../assets/img/gallery/gallery-52.jpg)"></a>
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
							<a href="#" class="result-image" style="background-image: url(../assets/img/gallery/gallery-53.jpg)"></a>
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
							<a href="#" class="result-image" style="background-image: url(../assets/img/gallery/gallery-54.jpg)"></a>
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
							<a href="#" class="result-image" style="background-image: url(../assets/img/gallery/gallery-55.jpg)"></a>
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
							<a href="#" class="result-image" style="background-image: url(../assets/img/gallery/gallery-56.jpg)"></a>
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
	</div>
</template>