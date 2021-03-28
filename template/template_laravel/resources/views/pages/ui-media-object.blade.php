@extends('layouts.default')

@section('title', 'Media Object')

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
		<li class="breadcrumb-item active">Media Object</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Media Object <small>header small text goes here...</small></h1>
	<!-- end page-header -->
	
	<!-- begin row -->
	<div class="row">
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-media-object-1">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Default Media Object</h4>
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
					<div class="media media-sm">
						<a class="media-left" href="javascript:;">
							<img src="/assets/img/user/user-1.jpg" alt="" class="media-object rounded" />
						</a>
						<div class="media-body">
							<h5 class="media-heading">Media heading</h5>
							<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
						</div>
					</div>
					<div class="media media-sm">
						<a class="media-left" href="javascript:;">
							<img src="/assets/img/user/user-2.jpg" alt="" class="media-object rounded" />
						</a>
						<div class="media-body">
							<h5 class="media-heading">Media heading</h5>
							<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
							<div class="media">
								<a class="pull-left" href="javascript:;">
									<img src="/assets/img/user/user-3.jpg" alt="" class="media-object rounded" />
								</a>
								<div class="media-body">
									<h5 class="media-heading">Nested media heading</h5>
									<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="media media-sm">
						<a class="media-left" href="javascript:;">
							<img src="/assets/img/user/user-4.jpg" alt="" class="media-object rounded" />
						</a>
						<div class="media-body">
							<h5 class="media-heading">Media heading</h5>
							<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
						</div>
					</div>
					<div class="media media-sm">
						<a class="media-left" href="javascript:;">
							<img src="/assets/img/user/user-10.jpg" alt="" class="media-object rounded" />
						</a>
						<div class="media-body">
							<h5 class="media-heading">Media heading</h5>
							<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
						</div>
					</div>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-media-object-2">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Media List</h4>
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
					<ul class="media-list">
						<li class="media media-sm">
							<a class="media-left" href="javascript:;">
								<img src="/assets/img/user/user-5.jpg" alt="" class="media-object rounded-corner" />
							</a>
							<div class="media-body">
								<h5 class="media-heading">Media heading</h5>
								<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
								<div class="media media-sm">
									<a class="media-left" href="javascript:;">
										<img src="/assets/img/user/user-6.jpg" alt="" class="media-object rounded-corner" />
									</a>
									<div class="media-body">
										<h5 class="media-heading">Nested media heading</h5>
										<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
										<div class="media">
											<a class="media-left" href="javascript:;">
												<img src="/assets/img/user/user-7.jpg" alt="" class="media-object rounded-corner" />
											</a>
											<div class="media-body">
												<h5 class="media-heading">Nested media heading</h5>
												<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
											</div>
										</div>
									</div>
								</div>
								<div class="media">
									<a class="media-left" href="javascript:;">
										<img src="/assets/img/user/user-8.jpg" alt="" class="media-object rounded-corner" />
									</a>
									<div class="media-body">
										<h5 class="media-heading">Nested media heading</h5>
										<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
									</div>
								</div>
							</div>
						</li>
						<li class="media media-sm">
							<div class="media-body">
								<h5 class="media-heading">Media heading</h5>
								<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
							</div>
							<a class="media-right" href="javascript:;">
								<img src="/assets/img/user/user-9.jpg" alt="" class="media-object rounded-corner" />
							</a>
						</li>
					</ul>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
	</div>
	<!-- end row -->
	<!-- begin row -->
	<div class="row">
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-media-object-3">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Media Object Sizes</h4>
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
					<div class="media media-lg">
						<a class="media-left" href="javascript:;">
							<img src="/assets/img/gallery/gallery-1.jpg" alt="" class="media-object rounded" />
						</a>
						<div class="media-body">
							<h5 class="media-heading">Media heading</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</div>
					</div>
					<div class="media">
						<a class="media-left" href="javascript:;">
							<img src="/assets/img/gallery/gallery-2.jpg" alt="" class="media-object rounded" />
						</a>
						<div class="media-body">
							<h5 class="media-heading">Media heading</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</div>
					</div>
					<div class="media media-sm">
						<a class="media-left" href="javascript:;">
							<img src="/assets/img/gallery/gallery-3.jpg" alt="" class="media-object rounded" />
						</a>
						<div class="media-body">
							<h5 class="media-heading">Media heading</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
						</div>
					</div>
					<div class="media media-xs">
						<a class="media-left" href="javascript:;">
							<img src="/assets/img/gallery/gallery-4.jpg" alt="" class="media-object rounded" />
						</a>
						<div class="media-body">
							<h5 class="media-heading">Media heading</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</div>
					</div>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-media-object-4">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Media List with Button</h4>
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
					<ul class="media-list media-list-with-divider">
						<li class="media media-sm">
							<a class="media-left" href="javascript:;">
								<img src="/assets/img/user/user-5.jpg" alt="" class="media-object rounded-corner" />
							</a>
							<div class="media-body">
								<h5 class="media-heading">Media heading</h5>
								<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, tempus viverra turpis.</p>
								<p class="mb-0">
									<a href="javascript:;" class="btn btn-sm btn-danger m-r-5">Reject</a>
									<a href="javascript:;" class="btn btn-sm btn-default">Cancel</a>
								</p>
							</div>
						</li>
						<li class="media media-sm">
							<div class="media-body text-right">
								<h5 class="media-heading">Nested media heading</h5>
								<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,  tempus viverra turpis.</p>
								<p class="mb-0">
									<a href="javascript:;" class="btn btn-sm btn-success m-r-5">Published</a>
									<a href="javascript:;" class="btn btn-sm btn-default">Cancel</a>
								</p>
							</div>
							<a class="media-right" href="javascript:;">
								<img src="/assets/img/user/user-6.jpg" alt="" class="media-object rounded-corner" />
							</a>
						</li>
						<li class="media media-sm">
							<a class="media-left" href="javascript:;">
								<img src="/assets/img/user/user-8.jpg" alt="" class="media-object rounded-corner" />
							</a>
							<div class="media-body">
								<h5 class="media-heading">Nested media heading</h5>
								<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, tempus viverra turpis.</p>
								<p class="mb-0">
									<a href="javascript:;" class="btn btn-sm btn-primary m-r-5">Confirm</a>
									<a href="javascript:;" class="btn btn-sm btn-default">Cancel</a>
								</p>
							</div>
						</li>
						<li class="media media-sm">
							<div class="media-body text-right">
								<h5 class="media-heading">Nested media heading</h5>
								<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,  tempus viverra turpis.</p>
								<p class="mb-0">
									<a href="javascript:;" class="btn btn-sm btn-warning m-r-5">Edit</a>
									<a href="javascript:;" class="btn btn-sm btn-default">Cancel</a>
								</p>
							</div>
							<a class="media-right" href="javascript:;">
								<img src="/assets/img/user/user-7.jpg" alt="" class="media-object rounded-corner" />
							</a>
						</li>
					</ul>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
	</div>
	<!-- end row -->
@endsection