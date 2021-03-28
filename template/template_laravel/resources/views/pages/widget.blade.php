@extends('layouts.default')

@section('title', 'Widgets')

@push('css')
	<link href="/assets/plugins/nvd3/build/nv.d3.css" rel="stylesheet" />
@endpush

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item active">Widgets</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">
		Widgets <small>header small text goes here...</small>
	</h1>
	<!-- end page-header -->
	
	<span class="btn-group pull-right m-l-20 p-1 bg-black-transparent-2 rounded">
		<a href="#" class="btn btn-sm btn-white btn-white-without-border" data-change="widget-theme" data-theme="light"><i class="fa fa-sun text-blue"></i> Light</a>
		<a href="#" class="btn btn-sm btn-white btn-white-without-border" data-change="widget-theme" data-theme="dark"><i class="fa fa-moon"></i> Dark</a>
	</span>
	<p class="m-b-20">
		All the widgets is reusable and responsive. You may use the predefined css to configure the padding, margin or background. Besides that, all the widgets have light and dark version. 
		Kindly add the <code>.inverse-mode</code> to the widget will change it to the dark version.
	</p>
	
	<!-- begin row -->
	<div class="row row-space-30">
		<!-- begin col-4 -->
		<div class="col-lg-12 col-xl-4">
			<!-- begin row -->
			<div class="row">
				<!-- begin col-12 -->
				<div class="col-xl-12 col-lg-6">
					<!-- begin widget-list -->
					<div class="m-b-10 f-s-10 m-t-10">
						<a href="#modal-widget-list" class="pull-right f-s-10 text-grey-darker m-r-3 f-w-700" data-toggle="modal">source code</a>
						<b class="text-inverse">WIDGET LIST</b>
					</div>
					<div class="widget-list widget-list-rounded m-b-30" data-id="widget">
						<!-- begin widget-list-item -->
						<div class="widget-list-item">
							<div class="widget-list-media">
								<img src="/assets/img/user/user-12.jpg" alt="" class="rounded" />
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Christopher Struth</h4>
								<p class="widget-list-desc">Bank Transfer</p>
							</div>
							<div class="widget-list-action">
								<a href="#" data-toggle="dropdown" class="text-muted pull-right"><i class="fa fa-ellipsis-h f-s-14"></i></a>
								<div class="dropdown-menu dropdown-menu-right">
									<a href="#" class="dropdown-item">Option 1</a>
									<a href="#" class="dropdown-item">Option 2</a>
									<a href="#" class="dropdown-item">Option 3</a>
									<div class="dropdown-divider"></div>
									<a href="#" class="dropdown-item">Option 4</a>
								</div>
							</div>
						</div>
						<!-- end widget-list-item -->
						<!-- begin widget-list-item -->
						<div class="widget-list-item">
							<div class="widget-list-media">
								<img src="/assets/img/user/user-13.jpg" alt="" class="rounded" />
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Janie Flowers</h4>
								<p class="widget-list-desc">Bank Transfer</p>
							</div>
							<div class="widget-list-action">
								<a href="#" data-toggle="dropdown" class="text-muted pull-right"><i class="fa fa-ellipsis-h f-s-14"></i></a>
								<div class="dropdown-menu dropdown-menu-right">
									<a href="#" class="dropdown-item">Option 1</a>
									<a href="#" class="dropdown-item">Option 2</a>
									<a href="#" class="dropdown-item">Option 3</a>
									<div class="dropdown-divider"></div>
									<a href="#" class="dropdown-item">Option 4</a>
								</div>
							</div>
						</div>
						<!-- end widget-list-item -->
						<!-- begin widget-list-item -->
						<div class="widget-list-item">
							<div class="widget-list-media">
								<img src="/assets/img/user/user-14.jpg" alt="" class="rounded" />
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Janie Flowers</h4>
								<p class="widget-list-desc">Bank Transfer</p>
							</div>
							<div class="widget-list-action">
								<a href="#" data-toggle="dropdown" class="text-muted pull-right"><i class="fa fa-ellipsis-h f-s-14"></i></a>
								<div class="dropdown-menu dropdown-menu-right">
									<a href="#" class="dropdown-item">Option 1</a>
									<a href="#" class="dropdown-item">Option 2</a>
									<a href="#" class="dropdown-item">Option 3</a>
									<div class="dropdown-divider"></div>
									<a href="#" class="dropdown-item">Option 4</a>
								</div>
							</div>
						</div>
						<!-- end widget-list-item -->
					</div>
					<!-- end widget-list -->
				</div>
				<!-- end col-12 -->
				<!-- begin col-12 -->
				<div class="col-xl-12 col-lg-6">
					<!-- begin widget-list -->
					<div class="m-b-10 f-s-10 m-t-10">
						<a href="#modal-widget-list-with-icon" class="pull-right f-s-10 text-grey-darker m-r-3 f-w-700" data-toggle="modal">source code</a>
						<b class="text-inverse">WIDGET LIST WITH ICON</b>
					</div>
					<div class="widget-list widget-list-rounded m-b-30" data-id="widget">
						<a href="#" class="widget-list-item">
							<div class="widget-list-media icon">
								<i class="fa fa-plane bg-inverse text-white"></i>
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Airplane Mode</h4>
							</div>
							<div class="widget-list-action text-right">
								<i class="fa fa-angle-right fa-lg text-muted"></i>
							</div>
						</a>
						<a href="#" class="widget-list-item">
							<div class="widget-list-media icon">
								<i class="fa fa-wifi bg-inverse text-white"></i>
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Wi-Fi</h4>
							</div>
							<div class="widget-list-action text-nowrap text-grey-darker">
								Connected
								<i class="fa fa-angle-right fa-lg m-l-5 text-muted t-plus-1"></i>
							</div>
						</a>
						<a href="#" class="widget-list-item">
							<div class="widget-list-media icon">
								<i class="fab fa-bluetooth bg-indigo text-white"></i>
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Bluetooth</h4>
							</div>
							<div class="widget-list-action text-nowrap text-grey-darker">
								On
								<i class="fa fa-angle-right text-muted t-plus-1 fa-lg m-l-5"></i>
							</div>
						</a>
						<a href="#" class="widget-list-item">
							<div class="widget-list-media icon">
								<i class="fa fa-signal bg-pink text-white"></i>
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Cellular</h4>
							</div>
							<div class="widget-list-action text-grey-darker text-right">
								<i class="fa fa-angle-right text-muted t-plus-1 fa-lg"></i>
							</div>
						</a>
						<a href="#" class="widget-list-item">
							<div class="widget-list-media icon">
								<i class="fa fa-link bg-yellow text-inverse"></i>
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Personal Hotspot</h4>
							</div>
							<div class="widget-list-action text-nowrap text-grey-darker text-right">
								Off
								<i class="fa fa-angle-right text-muted t-plus-1 fa-lg m-l-5"></i>
							</div>
						</a>
					</div>
					<!-- end widget-list -->
				</div>
				<!-- end col-12 -->
				<!-- begin col-12 -->
				<div class="col-xl-12 col-lg-6">
					<!-- begin widget-chat -->
					<div class="m-b-10 f-s-10 m-t-10">
						<a href="#modal-widget-chat-input" class="pull-right f-s-10 text-grey-darker m-r-3 f-w-700" data-toggle="modal">source code</a>
						<b class="text-inverse">WIDGET CHAT</b>
					</div>
					<div class="widget-chat widget-chat-rounded m-b-30" data-id="widget">
						<!-- begin widget-chat-header -->
						<div class="widget-chat-header">
							<div class="widget-chat-header-icon">
								<i class="fab fa-earlybirds width-30 height-30 f-s-20 bg-yellow text-inverse text-center rounded-corner" style="line-height: 30px"></i>
							</div>
							<div class="widget-chat-header-content">
								<h4 class="widget-chat-header-title">Company Discussion Group</h4>
								<p class="widget-chat-header-desc">55 members, 4 online</p>
							</div>
						</div>
						<!-- end widget-chat-header -->
						<!-- begin widget-chat-body -->
						<div class="widget-chat-body" data-scrollbar="true" data-height="235px">
							<!-- begin widget-chat-item -->
							<div class="widget-chat-item with-media left">
								<div class="widget-chat-media">
									<img alt="" src="/assets/img/user/user-1.jpg" />
								</div>
								<div class="widget-chat-info">
									<div class="widget-chat-info-container">
										<div class="widget-chat-name text-indigo">Hudson Mendes</div>
										<div class="widget-chat-message">Should we plan for a company trip this year?</div>
										<div class="widget-chat-time">6:00PM</div>
									</div>
								</div>
							</div>
							<!-- end widget-chat-item -->
							<!-- begin widget-chat-item -->
							<div class="widget-chat-item with-media left">
								<div class="widget-chat-media">
									<img alt="" src="/assets/img/user/user-2.jpg" />
								</div>
								<div class="widget-chat-info">
									<div class="widget-chat-info-container">
										<div class="widget-chat-name text-primary">Sam Sugerman</div>
										<div class="widget-chat-message">ok let's do it</div>
										<div class="widget-chat-time">6:01PM</div>
									</div>
								</div>
							</div>
							<!-- end widget-chat-item -->
							<!-- begin widget-chat-item -->
							<div class="widget-chat-item right">
								<div class="widget-chat-info">
									<div class="widget-chat-info-container">
										<div class="widget-chat-message">i'm ok with it</div>
										<div class="widget-chat-time">6:05PM</div>
									</div>
								</div>
							</div>
							<!-- end widget-chat-item -->
							<div class="text-center text-muted m-10 f-w-600">Today</div>
							<!-- begin widget-chat-item -->
							<div class="widget-chat-item with-media left">
								<div class="widget-chat-media">
									<img alt="" src="/assets/img/user/user-3.jpg" />
								</div>
								<div class="widget-chat-info">
									<div class="widget-chat-info-container">
										<div class="widget-chat-name text-orange">Jaxon Allwood</div>
										<div class="widget-chat-message">
											Here is some images for New Zealand
											<div class="row row-space-2 m-t-5">
												<div class="col-md-4">
													<a href="#" class="widget-card widget-card-sm square m-b-2">
														<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-51-thumb.jpg)"></div>
													</a>
													<a href="#" class="widget-card widget-card-sm square m-b-2">
														<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-52-thumb.jpg)"></div>
													</a>
												</div>
												<div class="col-md-4">
													<a href="#" class="widget-card widget-card-sm square m-b-2">
														<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-53-thumb.jpg)"></div>
													</a>
													<a href="#" class="widget-card widget-card-sm square m-b-2">
														<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-54-thumb.jpg)"></div>
													</a>
												</div>
												<div class="col-md-4">
													<a href="#" class="widget-card widget-card-sm square m-b-2">
														<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-59-thumb.jpg)"></div>
													</a>
													<a href="#" class="widget-card widget-card-sm square m-b-2">
														<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-60-thumb.jpg)"></div>
													</a>
												</div>
											</div>
										</div>
										<div class="widget-chat-time">6:20PM</div>
									</div>
								</div>
							</div>
							<!-- end widget-chat-item -->
						</div>
						<!-- end widget-chat-body -->
						<!-- begin widget-input -->
						<div class="widget-input widget-input-rounded">
							<form action="" method="POST" name="">
								<div class="widget-input-container">
									<div class="widget-input-icon"><a href="#" class="text-grey"><i class="fa fa-camera"></i></a></div>
									<div class="widget-input-box">
										<input type="text" class="form-control" placeholder="Write a message..." />
									</div>
									<div class="widget-input-icon"><a href="#" class="text-grey"><i class="fa fa-smile"></i></a></div>
									<div class="widget-input-divider"></div>
									<div class="widget-input-icon"><a href="#" class="text-grey"><i class="fa fa-microphone"></i></a></div>
								</div>
							</form>
						</div>
						<!-- end widget-input -->
					</div>
					<!-- end widget-chat -->
				</div>
				<!-- end col-12 -->
				<!-- begin col-12 -->
				<div class="col-xl-12 col-lg-6">
					<!-- begin widget-todolist -->
					<div class="m-b-10 f-s-10 m-t-10">
						<a href="#modal-widget-todolist" class="pull-right f-s-10 text-grey-darker m-r-3 f-w-700" data-toggle="modal">source code</a>
						<b class="text-inverse">WIDGET TODOLIST</b>
					</div>
					<div class="widget-todolist widget-todolist-rounded m-b-30" data-id="widget">
						<!-- begin widget-todolist-header -->
						<div class="widget-todolist-header">
							<div class="widget-todolist-header-left">
								<h4 class="widget-todolist-header-title">Todolist</h4>
							</div>
							<div class="widget-todolist-header-right">
								<div class="widget-todolist-header-total"><span>0</span><small>Done</small></div>
							</div>
						</div>
						<!-- end widget-todolist-header -->
						<!-- begin widget-todolist-body -->
						<div class="widget-todolist-body">
							<!-- begin widget-todolist-item -->
							<div class="widget-todolist-item">
								<div class="widget-todolist-input">
									<div class="checkbox checkbox-css pt-0">
										<input type="checkbox" id="widget_todolist_1" />
										<label for="widget_todolist_1" class="p-l-15">&nbsp;</label>
									</div>
								</div>
								<div class="widget-todolist-content">
									<h4 class="widget-todolist-title">Borrow Tony's travel guide</h4>
									<p class="widget-todolist-desc">Vacation in Rome</p>
								</div>
								<div class="widget-todolist-icon">
									<a href="#"><i class="fa fa-question-circle"></i></a>
								</div>
							</div>
							<!-- end widget-todolist-item -->
							<!-- begin widget-todolist-item -->
							<div class="widget-todolist-item">
								<div class="widget-todolist-input">
									<div class="checkbox checkbox-css pt-0">
										<input type="checkbox" id="widget_todolist_2" />
										<label for="widget_todolist_2" class="p-l-15">&nbsp;</label>
									</div>
								</div>
								<div class="widget-todolist-content">
									<h4 class="widget-todolist-title">Finish expense report</h4>
									<p class="widget-todolist-desc">Today, 4:00PM, Daily</p>
								</div>
								<div class="widget-todolist-icon">
									<a href="#"><i class="fa fa-question-circle"></i></a>
								</div>
							</div>
							<!-- end widget-todolist-item -->
							<!-- begin widget-todolist-item -->
							<div class="widget-todolist-item">
								<div class="widget-todolist-input">
									<div class="checkbox checkbox-css pt-0">
										<input type="checkbox" id="widget_todolist_3" />
										<label for="widget_todolist_3" class="p-l-15">&nbsp;</label>
									</div>
								</div>
								<div class="widget-todolist-content">
									<h4 class="widget-todolist-title">Confirm conference call for Wednesday</h4>
									<p class="widget-todolist-desc">Work</p>
								</div>
								<div class="widget-todolist-icon">
									<a href="#"><i class="fa fa-question-circle"></i></a>
								</div>
							</div>
							<!-- end widget-todolist-item -->
							<!-- begin widget-todolist-item -->
							<div class="widget-todolist-item">
								<div class="widget-todolist-input">
									<div class="checkbox checkbox-css pt-0">
										<input type="checkbox" id="widget_todolist_4" />
										<label for="widget_todolist_4" class="p-l-15">&nbsp;</label>
									</div>
								</div>
								<div class="widget-todolist-content">
									<h4 class="widget-todolist-title"><b class="text-warning">!!</b> Mobile App WIP Presentation</h4>
									<p class="widget-todolist-desc">Today, 12:00PM</p>
								</div>
								<div class="widget-todolist-icon">
									<a href="#"><i class="fa fa-question-circle"></i></a>
								</div>
							</div>
							<!-- end widget-todolist-item -->
							<!-- begin widget-todolist-item -->
							<div class="widget-todolist-item">
								<div class="widget-todolist-input">
									<i class="fa fa-plus text-muted"></i>
								</div>
								<div class="widget-todolist-content">
									<input type="text" class="form-control" placeholder="Write your task here..." />
								</div>
							</div>
							<!-- end widget-todolist-item -->
						</div>
						<!-- end widget-todolist-body -->
					</div>
					<!-- end widget-todolist -->
				</div>
				<!-- end col-12 -->
				<!-- begin col-12 -->
				<div class="col-xl-12 col-lg-6">
					<!-- begin widget-map -->
					<div class="m-b-10 f-s-10 m-t-10">
						<a href="#modal-widget-map" class="pull-right f-s-10 text-grey-darker m-r-3 f-w-700" data-toggle="modal">source code</a>
						<b class="text-inverse">WIDGET MAP</b>
					</div>
					<div class="widget-map widget-map-rounded m-b-30" data-id="widget">
						<!-- begin widget-input-container -->
						<div class="widget-input-container">
							<div class="widget-input-icon"><a href="#" class="text-grey" data-id="widget-elm" data-light-class="text-grey" data-dark-class="text-white"><i class="fa fa-ellipsis-v"></i></a></div>
							<div class="widget-input-box">
								<input type="text" class="form-control" placeholder="Search here">
							</div>
							<div class="widget-input-icon"><a href="#" class="text-grey" data-id="widget-elm" data-light-class="text-grey" data-dark-class="text-white"><i class="fa fa-microphone"></i></a></div>
							<div class="widget-input-divider"></div>
							<div class="widget-input-icon"><a href="#" class="text-grey" data-id="widget-elm" data-light-class="text-grey" data-dark-class="text-white"><i class="fa fa-location-arrow"></i></a></div>
						</div>
						<!-- end widget-input-container -->
						<!-- begin widget-map-body -->
						<div class="widget-map-body">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5650178360584!2d-122.41879278478642!3d37.77679637975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2smy!4v1524046379645" width="100%" height="230" frameborder="0" style="border:0" allowfullscreen></iframe>
						</div>
						<!-- end widget-map-body -->
						<!-- begin widget-map-list -->
						<div class="widget-map-list">
							<div class="widget-list widget-list-rounded m-b-30">
								<!-- begin widget-list-item -->
								<div class="widget-list-item">
									<div class="widget-list-media text-center">
										<a href="#"><i class="fab fa-twitter fa-3x"></i></a>
									</div>
									<div class="widget-list-content">
										<h4 class="widget-list-title">Twitter Headquater</h4>
										<p class="widget-list-desc">Corporate Office</p>
									</div>
									<div class="widget-list-action">
										<a href="#" data-toggle="dropdown" class="text-muted pull-right"><i class="fa fa-angle-right fa-2x"></i></a>
									</div>
								</div>
								<!-- end widget-list-item -->
							</div>
						</div>
						<!-- end widget-map-list -->
					</div>
					<!-- end widget-map -->
				</div>
				<!-- end col-12 -->
			</div>
			<!-- end row -->
		</div>
		<!-- end col-4 -->
		<!-- begin col-8 -->
		<div class="col-lg-12 col-xl-8">
			<div class="m-b-10 f-s-10 m-t-10">
				<a href="#modal-widget-img-icon" class="pull-right f-s-10 text-grey-darker m-r-3 f-w-700" data-toggle="modal">source code</a>
				<b class="text-inverse">WIDGET IMAGE / ICON</b>
			</div>
			<!-- begin row -->
			<div class="row m-b-30">
				<!-- begin col-6 -->
				<div class="col-sm-6">
					<div class="clearfix">
						<div class="widget-icon rounded bg-indigo pull-left m-r-5 m-b-5 text-white">
							<i class="fab fa-digital-ocean"></i>
						</div>
						<div class="widget-icon rounded bg-blue pull-left m-r-5 m-b-5 text-white">
							<i class="fab fa-twitter"></i>
						</div>
						<div class="widget-icon rounded bg-success pull-left m-r-5 m-b-5 text-white">
							<i class="fab fa-android"></i>
						</div>
						<div class="widget-icon rounded bg-warning pull-left m-r-5 m-b-5 text-white">
							<i class="fab fa-firefox"></i>
						</div>
						<div class="widget-icon rounded bg-danger pull-left m-r-5 m-b-5 text-white">
							<i class="fab fa-google-plus-g"></i>
						</div>
						<div class="widget-icon rounded bg-pink pull-left m-r-5 m-b-5 text-white">
							<i class="fab fa-pinterest"></i>
						</div>
					</div>
					<div class="clearfix">
						<div class="widget-icon widget-icon-xl user rounded bg-grey pull-left m-r-5 m-b-5 text-white" data-id="widget-elm"
							data-light-class="widget-icon widget-icon-xl user rounded bg-grey pull-left m-r-5 m-b-5 text-white"
							data-dark-class="widget-icon widget-icon-xl user rounded bg-inverse pull-left m-r-5 m-b-5 text-white-transparent-5">
							<i class="fa fa-user"></i>
						</div>
						<div class="widget-icon widget-icon-lg user rounded bg-grey pull-left m-r-5 m-b-5 text-white" data-id="widget-elm"
							data-light-class="widget-icon widget-icon-lg user rounded bg-grey pull-left m-r-5 m-b-5 text-white"
							data-dark-class="widget-icon widget-icon-lg user rounded bg-inverse pull-left m-r-5 m-b-5 text-white-transparent-5">
							<i class="fa fa-user"></i>
						</div>
						<div class="widget-icon user rounded bg-grey pull-left m-r-5 m-b-5 text-white" data-id="widget-elm"
							data-light-class="widget-icon user rounded bg-grey pull-left m-r-5 m-b-5 text-white"
							data-dark-class="widget-icon user rounded bg-inverse pull-left m-r-5 m-b-5 text-white-transparent-5">
							<i class="fa fa-user"></i>
						</div>
						<div class="widget-icon widget-icon-sm user rounded bg-grey pull-left m-r-5 m-b-5 text-white" data-id="widget-elm"
							data-light-class="widget-icon widget-icon-sm user rounded bg-grey pull-left m-r-5 m-b-5 text-white"
							data-dark-class="widget-icon widget-icon-sm user rounded bg-inverse pull-left m-r-5 m-b-5 text-white-transparent-5">
							<i class="fa fa-user"></i>
						</div>
						<div class="widget-icon widget-icon-xs user rounded bg-grey pull-left m-r-5 m-b-5 text-white" data-id="widget-elm"
							data-light-class="widget-icon widget-icon-xs user rounded bg-grey pull-left m-r-5 m-b-5 text-white"
							data-dark-class="widget-icon widget-icon-xs user rounded bg-inverse pull-left m-r-5 m-b-5 text-white-transparent-5">
							<i class="fa fa-user"></i>
						</div>
					</div>
				</div>
				<!-- end col-6 -->
				<!-- begin col-6 -->
				<div class="col-sm-6">
					<div class="pull-left">
						<div class="widget-img rounded bg-inverse pull-left m-r-5 m-b-5"
							style="background-image: url(/assets/img/gallery/gallery-11-thumb.jpg)"
						></div>
						<div class="widget-img rounded bg-inverse pull-left m-r-5 m-b-5"
							style="background-image: url(/assets/img/gallery/gallery-12-thumb.jpg)"
						></div>
						<div class="widget-img rounded bg-inverse pull-left m-r-5 m-b-5"
							style="background-image: url(/assets/img/gallery/gallery-13-thumb.jpg)"
						></div>
						<div class="widget-img rounded bg-inverse pull-left m-r-5 m-b-5"
							style="background-image: url(/assets/img/gallery/gallery-14-thumb.jpg)"
						></div>
						<div class="widget-img rounded bg-inverse pull-left m-r-5 m-b-5"
							style="background-image: url(/assets/img/gallery/gallery-15-thumb.jpg)"
						></div>
						<div class="widget-img rounded bg-inverse pull-left m-r-5 m-b-5"
							style="background-image: url(/assets/img/gallery/gallery-16-thumb.jpg)"
						></div>
						<br />
						<div class="widget-img widget-img-xl rounded bg-inverse pull-left m-r-5 m-b-5"
							style="background-image: url(/assets/img/gallery/gallery-21-thumb.jpg)"
						></div>
						<div class="widget-img widget-img-lg rounded bg-inverse pull-left m-r-5 m-b-5"
							style="background-image: url(/assets/img/gallery/gallery-22-thumb.jpg)"
						></div>
						<div class="widget-img widget-img rounded bg-inverse pull-left m-r-5 m-b-5"
							style="background-image: url(/assets/img/gallery/gallery-23-thumb.jpg)"
						></div>
						<div class="widget-img widget-img-sm rounded bg-inverse pull-left m-r-5 m-b-5"
							style="background-image: url(/assets/img/gallery/gallery-24-thumb.jpg)"
						></div>
						<div class="widget-img widget-img-xs rounded bg-inverse pull-left m-r-5 m-b-5"
							style="background-image: url(/assets/img/gallery/gallery-25-thumb.jpg)"
						></div>
					</div>
				</div>
				<!-- end col-6 -->
			</div>
			<!-- end row -->
			
			<div class="m-b-10 f-s-10 m-t-10">
				<a href="#modal-widget-card" class="pull-right f-s-10 text-grey-darker m-r-3 f-w-700" data-toggle="modal">source code</a>
				<b class="text-inverse">WIDGET CARD</b>
			</div>
			<!-- begin row -->
			<div class="row row-space-10">
				<!-- begin col-6 -->
				<div class="col-sm-6">
					<!-- begin widget-card -->
					<a href="#" class="widget-card widget-card-rounded m-b-20" data-id="widget">
						<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-portrait-11-thumb.jpg)"></div>
						<div class="widget-card-content">
							<b class="text-white">Download and get free trial.</b>
						</div>
						<div class="widget-card-content bottom">
							<i class="fab fa-pushed fa-5x text-indigo"></i>
							<h4 class="text-white m-t-10"><b>Apple Draw<br /> Photo Booth</b></h4>
							<h5 class="f-s-12 text-white-transparent-7 m-b-2"><b>EASILY DRAW ON PHOTOS</b></h5>
						</div>
					</a>
					<!-- end widget-card -->
				</div>
				<!-- end col-6 -->
				<!-- begin col-6 -->
				<div class="col-sm-6">
					<!-- begin widget-card -->
					<a href="#" class="widget-card widget-card-rounded m-b-20" data-id="widget">
						<div class="widget-card-cover"></div>
						<div class="widget-card-content">
							<h5 class="f-s-12 text-black-transparent-7" data-id="widget-elm"
								data-light-class="f-s-12 text-black-transparent-7"
								data-dark-class="f-s-12 text-white-transparent-7"><b>MAKING A DIFFERENCE</b></h5>
							<h4 class="m-b-10"><b>Apple Heart<br /> Study App</b></h4>
							<i class="fa fa-heartbeat fa-5x text-pink"></i>
						</div>
						<div class="widget-card-content bottom">
							<b class="text-black-transparent-7" data-id="widget-elm"
								data-light-class="f-s-12 text-black-transparent-7"
								data-dark-class="f-s-12 text-white-transparent-7">Opt in and help heart research.</b>
						</div>
					</a>
					<!-- end widget-card -->
				</div>
				<!-- end col-6 -->
			</div>
			<!-- end row -->
			
			<div class="m-b-10 f-s-10 m-t-10">
				<a href="#modal-widget-card-square" class="pull-right f-s-10 text-grey-darker m-r-3 f-w-700" data-toggle="modal">source code</a>
				<b class="text-inverse">WIDGET CARD SQUARE</b>
			</div>
			<!-- begin row -->
			<div class="row row-space-10">
				<!-- begin col-3 -->
				<div class="col-xs-6 col-sm-3">
					<!-- begin row -->
					<div class="row row-space-2 m-b-5">
						<!-- begin col-6 -->
						<div class="col-6">
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/login-bg/login-bg-1-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/login-bg/login-bg-2-thumb.jpg)"></div>
							</a>
						</div>
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<div class="col-6">
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/login-bg/login-bg-3-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/login-bg/login-bg-4-thumb.jpg)"></div>
							</a>
						</div>
						<!-- end col-6 -->
					</div>
					<!-- end row -->
					<div class="f-s-12 f-w-700 text-black">Camera Roll</div>
					<div class="f-s-10 f-w-600 text-black-lighter m-b-15">2,711</div>
				</div>
				<!-- end col-3 -->
				<!-- begin col-3 -->
				<div class="col-xs-6 col-sm-3">
					<a href="#" class="widget-card widget-card-rounded square m-b-5">
						<div class="widget-card-cover" style="background-image: url(/assets/img/login-bg/login-bg-7-thumb.jpg)">
							<span class="widget-card-cover-icon"><i class="fa fa-play fa-lg"></i></span>
						</div>
					</a>
					<div class="f-s-12 f-w-700 text-black p-t-2">Videos</div>
					<div class="f-s-10 f-w-600 text-black-lighter m-b-15">31</div>
				</div>
				<!-- end col-3 -->
				<!-- begin col-3 -->
				<div class="col-xs-6 col-sm-3">
					<a href="#" class="widget-card widget-card-rounded square m-b-5">
						<div class="widget-card-cover" style="background-image: url(/assets/img/login-bg/login-bg-10-thumb.jpg)">
							<div class="d-flex h-100 align-items-center justify-content-center">
								<div class="text-center">
									<div class="text-white f-s-14"><b>PORTRAITS OF</b></div>
									<div class="text-white-transparent-8 f-w-600">2017</div>
								</div>
							</div>
						</div>
					</a>
					<div class="f-s-12 f-w-700 text-black p-t-2">Memory 2017</div>
					<div class="f-s-10 f-w-600 text-black-lighter m-b-15">1,239</div>
				</div>
				<!-- end col-3 -->
				<!-- begin col-3 -->
				<div class="col-xs-6 col-sm-3">
					<!-- begin row -->
					<div class="row row-space-2 m-b-5">
						<!-- begin col-3 -->
						<div class="col-3">
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-1-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-2-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-3-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-4-thumb.jpg)"></div>
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-3">
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-5-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-6-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-7-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-8-thumb.jpg)"></div>
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-3">
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-9-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-10-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-11-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-12-thumb.jpg)"></div>
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-3">
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-13-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-14-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-15-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card widget-card-rounded square m-b-2">
								<div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-16-thumb.jpg)"></div>
							</a>
						</div>
						<!-- end col-3 -->
					</div>
					<!-- end row -->
					<div class="f-s-12 f-w-700 text-black">Albums</div>
					<div class="f-s-10 f-w-600 text-black-lighter m-b-15">8</div>
				</div>
				<!-- end col-3 -->
			</div>
			<!-- end row -->
			
			<div class="m-b-10 f-s-10 m-t-10">
				<a href="#modal-widget-stat" class="pull-right f-s-10 text-grey-darker m-r-3 f-w-700" data-toggle="modal">source code</a>
				<b class="text-inverse">WIDGET STAT</b>
			</div>
			<!-- begin row -->
			<div class="row row-space-10 m-b-20">
				<!-- begin col-4 -->
				<div class="col-lg-4 col-sm-6">
					<div class="widget widget-stats bg-gradient-teal m-b-10">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-globe fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">TODAY'S VISITS</div>
							<div class="stats-number">7,842,900</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 70.1%;"></div>
							</div>
							<div class="stats-desc">Better than last week (70.1%)</div>
						</div>
					</div>
				</div>
				<!-- end col-4 -->
				<!-- begin col-4 -->
				<div class="col-lg-4 col-sm-6">
					<div class="widget widget-stats bg-gradient-blue m-b-10">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-dollar-sign fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">TODAY'S PROFIT</div>
							<div class="stats-number">180,200</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 40.5%;"></div>
							</div>
							<div class="stats-desc">Better than last week (40.5%)</div>
						</div>
					</div>
				</div>
				<!-- end col-4 -->
				<!-- begin col-4 -->
				<div class="col-lg-4 col-sm-6">
					<div class="widget widget-stats bg-gradient-purple m-b-10">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-archive fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">NEW ORDERS</div>
							<div class="stats-number">38,900</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 76.3%;"></div>
							</div>
							<div class="stats-desc">Better than last week (76.3%)</div>
						</div>
					</div>
				</div>
				<!-- end col-4 -->
				<!-- begin col-4 -->
				<div class="col-lg-4 col-sm-6">
					<div class="widget widget-stats bg-gradient-black m-b-10">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-comment-alt fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">NEW COMMENTS</div>
							<div class="stats-number">3,988</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 54.9%;"></div>
							</div>
							<div class="stats-desc">Better than last week (54.9%)</div>
						</div>
					</div>
				</div>
				<!-- end col-4 -->
				<!-- begin col-4 -->
				<div class="col-lg-4 col-sm-6">
					<div class="widget widget-stats bg-gradient-orange m-b-10">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-file-alt fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">PENDING INVOICE</div>
							<div class="stats-number">20</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 23.5%;"></div>
							</div>
							<div class="stats-desc">More than last week (23.5%)</div>
						</div>
					</div>
				</div>
				<!-- end col-4 -->
				<!-- begin col-4 -->
				<div class="col-lg-4 col-sm-6">
					<div class="widget widget-stats bg-pink m-b-10">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-exclamation-triangle fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">ERROR LOG</div>
							<div class="stats-number">5</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 10.5%;"></div>
							</div>
							<div class="stats-desc">More than last week (10.5%)</div>
						</div>
					</div>
				</div>
				<!-- end col-4 -->
			</div>
			<!-- end row -->
			
			<div class="m-b-10 f-s-10 m-t-10">
				<a href="#modal-widget-chart" class="pull-right f-s-10 text-grey-darker m-r-3 f-w-700" data-toggle="modal">source code</a>
				<b class="text-inverse">WIDGET CHART</b>
			</div>
			<!-- begin widget-chart -->
			<div class="widget widget-rounded m-b-30" data-id="widget">
				<!-- begin widget-header -->
				<div class="widget-header">
					<h4 class="widget-header-title">Audience Overview</h4>
					<div class="widget-header-icon"><a href="#" class="text-muted"><i class="fa fa-fw fa-upload"></i></a></div>
					<div class="widget-header-icon"><a href="#" class="text-muted"><i class="fa fa-fw fa-cog"></i></a></div>
				</div>
				<!-- end widget-header -->
				<!-- begin vertical-box -->
				<div class="vertical-box with-grid with-border-top">
					<!-- begin vertical-box-column -->
					<div class="vertical-box-column widget-chart-content">
						<div id="nv-stacked-area-chart" style="height: 108%"></div>
					</div>
					<!-- end vertical-box-column -->
					<!-- begin vertical-box-column -->
					<div class="vertical-box-column p-15" style="width: 30%;">
						<div class="widget-chart-info">
							<h4 class="widget-chart-info-title">Total sales</h4>
							<p class="widget-chart-info-desc">Lorem ipsum dolor sit consectetur adipiscing elit.</p>
							<div class="widget-chart-info-progress">
								<b>Monthly Plan</b>
								<span class="pull-right">70%</span>
							</div>
							<div class="progress progress-sm">
								<div class="progress-bar progress-bar-striped progress-bar-animated rounded-corner" style="width:70%;"></div>
							</div>
						</div>
						<hr />
						<div class="widget-chart-info">
							<h4 class="widget-chart-info-title">Task progress</h4>
							<p class="widget-chart-info-desc">Vestibulum sollicitudin in lectus a cursus.</p>
							<div class="widget-chart-info-progress">
								<b>Marketing Research</b>
								<span class="pull-right">74%</span>
							</div>
							<div class="progress progress-sm m-b-15">
								<div class="progress-bar progress-bar-striped progress-bar-animated rounded-corner bg-indigo" style="width: 74%"></div>
							</div>
							<div class="widget-chart-info-progress">
								<b>Mobile App Development</b>
								<span class="pull-right">25%</span>
							</div>
							<div class="progress progress-sm m-b-15">
								<div class="progress-bar progress-bar-striped progress-bar-animated rounded-corner bg-green" style="width: 25%"></div>
							</div>
							<div class="widget-chart-info-progress">
								<b>Website Redesign</b>
								<span class="pull-right">95%</span>
							</div>
							<div class="progress progress-sm">
								<div class="progress-bar progress-bar-striped progress-bar-animated rounded-corner bg-orange" style="width: 95%"></div>
							</div>
						</div>
					</div>
					<!-- end vertical-box-column -->
				</div>
				<!-- end vertical-box -->
			</div>
			<!-- end widget-chart -->
			
			<div class="m-b-10 f-s-10 m-t-10">
				<a href="#modal-widget-table" class="pull-right f-s-10 text-grey-darker m-r-3 f-w-700" data-toggle="modal">source code</a>
				<b class="text-inverse">WIDGET TABLE</b>
			</div>
			<!-- begin widget-table -->
			<div class="table-responsive">
				<!-- begin widget-table -->
				<table class="table table-bordered widget-table widget-table-rounded" data-id="widget">
					<thead>
						<tr>
							<th width="1%">Image</th>
							<th>Product Info</th>
							<th>Price</th>
							<th>Qty</th>
							<th>Total</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div class="widget-table-img" style="background-image: url(/assets/img/product/product-6.png);"></div>
							</td>
							<td>
								<h4 class="widget-table-title">Mavic Pro Combo</h4>
								<p class="widget-table-desc m-b-15">Portable yet powerful, the Mavic Pro is your personal drone, ready to go with you everywhere.</p>
								<div class="progress progress-sm rounded-corner m-b-5">
									<div class="progress-bar progress-bar-striped progress-bar-animated bg-orange f-s-10 f-w-600" style="width: 30%;">30%</div>
								</div>
								<div class="clearfix f-s-10">
									status: 
									<b class="text-inverse" data-id="widget-elm" 
										data-light-class="text-inverse" 
										data-dark-class="text-white">Shipped</b>
								</div>
							</td>
							<td class="text-nowrap">
								<b class="text-inverse" data-id="widget-elm" 
									data-light-class="text-inverse" 
									data-dark-class="text-white">$999</b><br />
								<small class="text-inverse text-line-through" data-id="widget-elm" 
									data-light-class="text-inverse text-line-through" 
									data-dark-class="text-white text-line-through">$1,202</small>
							</td>
							<td>1</td>
							<td>999.00</td>
							<td>
								<a href="#" class="btn btn-inverse btn-sm width-80 rounded-corner" data-id="widget-elm"
									data-light-class="btn btn-inverse btn-sm width-80 rounded-corner"
									data-dark-class="btn btn-default btn-sm width-80 rounded-corner">Edit</a>
							</td>
						</tr>
						<tr>
							<td>
								<div class="widget-table-img" style="background-image: url(/assets/img/product/product-7.png);"></div>
							</td>
							<td>
								<h4 class="widget-table-title">Inspire 2</h4>
								<p class="widget-table-desc m-b-15">Cinematic aerial performance for filmmakers.</p>
								<div class="progress progress-sm rounded-corner m-b-5">
									<div class="progress-bar progress-bar-striped progress-bar-animated bg-success f-s-10 f-w-600" style="width: 100%;">100%</div>
								</div>
								<div class="clearfix f-s-10">
									status: 
									<b class="text-inverse" data-id="widget-elm" 
										data-light-class="text-inverse" 
										data-dark-class="text-white">received</b>
								</div>
							</td>
							<td class="text-nowrap">
								<b class="text-inverse" data-id="widget-elm" 
									data-light-class="text-inverse" 
									data-dark-class="text-white">$999</b><br />
								<small class="text-inverse text-line-through" data-id="widget-elm" 
									data-light-class="text-inverse text-line-through" 
									data-dark-class="text-white text-line-through">$1,202</small>
							</td>
							<td>1</td>
							<td>999.00</td>
							<td>
								<a href="#" class="btn btn-inverse btn-sm width-80 rounded-corner" data-id="widget-elm"
									data-light-class="btn btn-inverse btn-sm width-80 rounded-corner"
									data-dark-class="btn btn-default btn-sm width-80 rounded-corner">Edit</a>
							</td>
						</tr>
					</tbody>
				</table>
				<!-- end widget-table -->
			</div>
			<!-- end table-responsive -->
		</div>
		<!-- end col-8 -->
	</div>
	<!-- end row -->

	
	<!-- begin #modal-widget-todolist -->
	<div class="modal fade" id="modal-widget-map">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget Map</h4>
					<a href="#" data-dismiss="modal" class="close">&times;</a>
				</div>
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper m-b-0">
					<button type="button" class="btn btn-grey btn-sm btn-clipboard width-60" data-clipboard-target="#source-widget-map">Copy</button>
					<pre class="m-b-0"><code class="html" id="source-widget-map">&lt;!-- begin widget-map --&gt;
&lt;div class="widget-map widget-map-rounded<span class="hljs-string" data-id="widget-doc" data-dark-doc=" inverse-mode" data-light-doc=""></span>"&gt;
  &lt;!-- begin widget-input-container --&gt;
  &lt;div class="widget-input-container"&gt;
    &lt;div class="widget-input-icon"&gt;&lt;a href="#" class="<span class="hljs-string" data-id="widget-doc" data-dark-doc="text-white" data-light-doc="text-inverse">text-inverse</span>"&gt;&lt;i class="fa fa-ellipsis-v"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div class="widget-input-box"&gt;
      &lt;input type="text" class="form-control" placeholder="Search here"&gt;
    &lt;/div&gt;
    &lt;div class="widget-input-icon"&gt;&lt;a href="#" class="<span class="hljs-string" data-id="widget-doc" data-dark-doc="text-white" data-light-doc="text-inverse"></span>"&gt;&lt;i class="fa fa-microphone"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div class="widget-input-divider"&gt;&lt;/div&gt;
    &lt;div class="widget-input-icon"&gt;&lt;a href="#"&gt;&lt;i class="fa fa-location-arrow"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- end widget-input-container --&gt;
  &lt;!-- begin widget-map-body --&gt;
  &lt;div class="widget-map-body"&gt;
    &lt;iframe src="-- googlemap embed url here --" width="100%" height="230" frameborder="0" style="border:0" allowfullscreen&gt;&lt;/iframe&gt;
  &lt;/div&gt;
  &lt;!-- end widget-map-body --&gt;
  &lt;!-- begin widget-map-list --&gt;
  &lt;div class="widget-map-list"&gt;
    &lt;div class="widget-list widget-list-rounded m-b-30"&gt;
      &lt;!-- begin widget-list-item --&gt;
      &lt;div class="widget-list-item"&gt;
        &lt;div class="widget-list-media text-center"&gt;
          &lt;a href="#"&gt;&lt;i class="fab fa-twitter fa-3x"&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;/div&gt;
        &lt;div class="widget-list-content"&gt;
          &lt;h4 class="widget-list-title"&gt;Twitter Headquater&lt;/h4&gt;
          &lt;p class="widget-list-desc"&gt;Corporate Office&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class="widget-list-action"&gt;
          &lt;a href="#" data-toggle="dropdown" class="text-muted pull-right"&gt;&lt;i class="fa fa-angle-right fa-2x"&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;!-- end widget-list-item --&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- end widget-map-list --&gt;
&lt;/div&gt;
&lt;!-- begin widget-map --&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- end #modal-widget-map -->
	
	<!-- begin #modal-widget-todolist -->
	<div class="modal fade" id="modal-widget-todolist">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget Todolist</h4>
					<a href="#" data-dismiss="modal" class="close">&times;</a>
				</div>
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper m-b-0">
					<button type="button" class="btn btn-grey btn-sm btn-clipboard width-60" data-clipboard-target="#source-widget-todolist">Copy</button>
					<pre class="m-b-0"><code class="html" id="source-widget-todolist">&lt;!-- begin widget-todolist --&gt;
&lt;div class="widget-todolist widget-todolist-rounded<span class="hljs-string" data-id="widget-doc" data-dark-doc=" inverse-mode" data-light-doc=""></span>"&gt;
  &lt;!-- begin widget-todolist-header --&gt;
  &lt;div class="widget-todolist-header"&gt;
    &lt;div class="widget-todolist-header-left"&gt;
      &lt;h4 class="widget-todolist-header-title"&gt;Todolist&lt;/h4&gt;
    &lt;/div&gt;
    &lt;div class="widget-todolist-header-right"&gt;
      &lt;div class="widget-todolist-header-total"&gt;
        &lt;span class="text-inverse"&gt;0&lt;/span&gt;
        &lt;small&gt;Done&lt;/small&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- end widget-todolist-header --&gt;
  
  &lt;!-- begin widget-todolist-body --&gt;
  &lt;div class="widget-todolist-body"&gt;
    &lt;!-- begin widget-todolist-item --&gt;
    &lt;div class="widget-todolist-item"&gt;
      &lt;div class="widget-todolist-input"&gt;
        &lt;div class="checkbox checkbox-css pt-0"&gt;
          &lt;input type="checkbox" id="widget_todolist_1" /&gt;
          &lt;label for="widget_todolist_1" class="p-l-15"&gt;&nbsp;&lt;/label&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="widget-todolist-content"&gt;
        &lt;h4 class="widget-todolist-title"&gt;Borrow Tony's travel guide&lt;/h4&gt;
        &lt;p class="widget-todolist-desc"&gt;Vacation in Rome&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="widget-todolist-icon"&gt;
        &lt;a href="#"&gt;&lt;i class="fa fa-question-circle"&gt;&lt;/i&gt;&lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- end widget-todolist-item --&gt;
    ...
    &lt;!-- begin widget-todolist-item --&gt;
    &lt;div class="widget-todolist-item"&gt;
      &lt;div class="widget-todolist-input"&gt;
        &lt;i class="fa fa-plus text-muted"&gt;&lt;/i&gt;
      &lt;/div&gt;
      &lt;div class="widget-todolist-content"&gt;
        &lt;input type="text" class="form-control" placeholder="Write your task here..." /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- end widget-todolist-item --&gt;
  &lt;/div&gt;
  &lt;!-- end widget-todolist-body --&gt;
&lt;/div&gt;
&lt;!-- end widget-todolist --&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- end #modal-widget-todolist -->
	
	<!-- begin #modal-widget-chat-input -->
	<div class="modal fade" id="modal-widget-chat-input">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget Chat & Input</h4>
					<a href="#" data-dismiss="modal" class="close">&times;</a>
				</div>
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper m-b-0">
					<button type="button" class="btn btn-grey btn-sm btn-clipboard width-60" data-clipboard-target="#source-widget-chat-input">Copy</button>
					<pre class="m-b-0"><code class="html" id="source-widget-chat-input">&lt;!-- begin widget-chat --&gt;
&lt;div class="widget-chat widget-chat-rounded<span class="hljs-string" data-id="widget-doc" data-dark-doc=" inverse-mode" data-light-doc=""></span>"&gt;
  &lt;!-- begin widget-chat-header --&gt;
  &lt;div class="widget-chat-header"&gt;
    &lt;div class="widget-chat-header-icon"&gt;
      &lt;i class="fab fa-earlybirds width-30 height-30 f-s-20 bg-yellow text-inverse text-center rounded-corner" style="line-height: 30px"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="widget-chat-header-content"&gt;
      &lt;h4 class="widget-chat-header-title"&gt;Company Discussion Group&lt;/h4&gt;
      &lt;p class="widget-chat-header-desc"&gt;55 members, 4 online&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- end widget-chat-header --&gt;
  
  &lt;!-- begin widget-chat-body --&gt;
  &lt;div class="widget-chat-body" data-scrollbar="true" data-height="235px"&gt;
    &lt;div class="text-center text-muted m-10 f-w-600"&gt;Today&lt;/div&gt;
    &lt;div class="widget-chat-item with-media left"&gt;
      &lt;div class="widget-chat-media"&gt;
        &lt;img alt="" src="/assets/img/user/user-1.jpg" /&gt;
      &lt;/div&gt;
      &lt;div class="widget-chat-info"&gt;
        &lt;div class="widget-chat-info-container"&gt;
          &lt;div class="widget-chat-name text-indigo"&gt;Hudson Mendes&lt;/div&gt;
          &lt;div class="widget-chat-message"&gt;Should we plan for a company trip this year?&lt;/div&gt;
          &lt;div class="widget-chat-time"&gt;6:00PM&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="widget-chat-item right"&gt;
      ...
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- end widget-chat-body --&gt;
  
  &lt;!-- begin widget-input --&gt;
  &lt;div class="widget-input widget-input-rounded"&gt;
    &lt;form action="" method="POST" name=""&gt;
      &lt;div class="widget-input-container"&gt;
        &lt;div class="widget-input-icon"&gt;&lt;a href="#" class="text-grey"&gt;&lt;i class="fa fa-camera"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/div&gt;
        &lt;div class="widget-input-box"&gt;
          &lt;input type="text" class="form-control" placeholder="Write a message..." /&gt;
        &lt;/div&gt;
        &lt;div class="widget-input-icon"&gt;&lt;a href="#" class="text-grey"&gt;&lt;i class="fa fa-smile"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/div&gt;
        &lt;div class="widget-input-divider"&gt;&lt;/div&gt;
        &lt;div class="widget-input-icon"&gt;&lt;a href="#" class="text-grey"&gt;&lt;i class="fa fa-microphone"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/form&gt;
  &lt;/div&gt;
  &lt;!-- end widget-input --&gt;
&lt;/div&gt;
&lt;!-- end widget-chat --&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- end #modal-widget-chat-input -->
	
	<!-- begin #modal-widget-list -->
	<div class="modal fade" id="modal-widget-list">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget List</h4>
					<a href="#" data-dismiss="modal" class="close">&times;</a>
				</div>
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper m-b-0">
					<button type="button" class="btn btn-grey btn-sm btn-clipboard width-60" data-clipboard-target="#source-widget-list">Copy</button>
					<pre class="m-b-0"><code class="html" id="source-widget-list">&lt;!-- begin widget-list --&gt;
&lt;div class="widget-list widget-list-rounded m-b-30<span class="hljs-string" data-id="widget-doc" data-dark-doc=" inverse-mode" data-light-doc=""></span>"&gt;
  &lt;!-- begin widget-list-item --&gt;
  &lt;div class="widget-list-item"&gt;
    &lt;div class="widget-list-media"&gt;
      &lt;img src="/assets/img/user/user-1.jpg" class="rounded" /&gt;
    &lt;/div&gt;
    &lt;div class="widget-list-content"&gt;
      &lt;h4 class="widget-list-title"&gt;Christopher Struth&lt;/h4&gt;
      &lt;p class="widget-list-desc"&gt;Bank Transfer&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="widget-list-action"&gt;
      &lt;a href="#" data-toggle="dropdown" class="text-muted pull-right"&gt;
        &lt;i class="fa fa-ellipsis-h f-s-14"&gt;&lt;/i&gt;
      &lt;/a&gt;
      &lt;ul class="dropdown-menu dropdown-menu-right"&gt;
        ...
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- end widget-list-item --&gt;
&lt;/div&gt;
&lt;!-- end widget-list --&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- end #modal-widget-list -->
	
	<!-- begin #modal-widget-list-with-icon -->
	<div class="modal fade" id="modal-widget-list-with-icon">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget List with Icon</h4>
					<a href="#" data-dismiss="modal" class="close">&times;</a>
				</div>
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper m-b-0">
					<button type="button" class="btn btn-grey btn-sm btn-clipboard width-60" data-clipboard-target="#source-widget-list-with-icon">Copy</button>
					<pre class="m-b-0"><code class="html" id="source-widget-list-with-icon">&lt;!-- begin widget-list --&gt;
&lt;div class="widget-list widget-list-rounded<span class="hljs-string" data-id="widget-doc" data-dark-doc=" inverse-mode" data-light-doc=""></span>"&gt;
  &lt;!-- begin widget-list-item --&gt;
  &lt;a href="#" class="widget-list-item"&gt;
    &lt;div class="widget-list-media icon"&gt;
      &lt;i class="fa fa-link bg-yellow text-inverse"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="widget-list-content"&gt;
      &lt;h4 class="widget-list-title"&gt;Personal Hotspot&lt;/h4&gt;
    &lt;/div&gt;
    &lt;div class="widget-list-action text-nowrap text-grey-darker text-right"&gt;
      Off
      &lt;i class="fa fa-angle-right text-muted t-plus-1 fa-lg m-l-5"&gt;&lt;/i&gt;
    &lt;/div&gt;
  &lt;/a&gt;
  &lt;!-- end widget-list-item --&gt;
  ...
&lt;/div&gt;
&lt;!-- end widget-list --&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- end #modal-widget-list -->
	
	<!-- begin #modal-widget-img-icon -->
	<div class="modal fade" id="modal-widget-img-icon">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget Image / Icon</h4>
					<a href="#" data-dismiss="modal" class="close">&times;</a>
				</div>
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper m-b-0">
					<button type="button" class="btn btn-grey btn-sm btn-clipboard width-60" data-clipboard-target="#source-widget-img-icon">Copy</button>
					<pre class="m-b-0"><code class="html" id="source-widget-img-icon">&lt;!-- begin widget-icon --&gt;
&lt;div class="widget-icon rounded bg-success text-white"&gt;
  &lt;i class="fab fa-android"&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;!-- end widget-icon --&gt;

&lt;!-- begin user widget-icon --&gt;
&lt;div class="widget-icon rounded <span class="hljs-string" data-id="widget-doc" data-dark-doc="bg-inverse text-white-transparent-5" data-light-doc="bg-grey text-white">bg-grey text-white</span> user"&gt;
  &lt;i class="fa fa-user"&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;!-- end user widget-icon --&gt;

&lt;!-- begin widget-icon-sizes --&gt;
&lt;div class="widget-icon widget-icon-xl"&gt;&lt;/div&gt;
&lt;div class="widget-icon widget-icon-lg"&gt;&lt;/div&gt;
&lt;div class="widget-icon"&gt;&lt;/div&gt;
&lt;div class="widget-icon widget-icon-sm"&gt;&lt;/div&gt;
&lt;div class="widget-icon widget-icon-xs"&gt;&lt;/div&gt;
&lt;!-- end widget-icon-sizes --&gt;

&lt;!-- begin widget-img --&gt;
&lt;div class="widget-img rounded bg-inverse" style="background-image: url(/assets/img/gallery/gallery-11-thumb.jpg)"&gt;
&lt;/div&gt;
&lt;!-- end widget-img --&gt;

&lt;!-- begin widget-img-sizes --&gt;
&lt;div class="widget-img widget-img-xl"&gt;&lt;/div&gt;
&lt;div class="widget-img widget-img-lg"&gt;&lt;/div&gt;
&lt;div class="widget-img"&gt;&lt;/div&gt;
&lt;div class="widget-img widget-img-sm"&gt;&lt;/div&gt;
&lt;div class="widget-img widget-img-xs"&gt;&lt;/div&gt;
&lt;!-- end widget-img-sizes --&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- end #modal-widget-img-icon -->
	
	<!-- begin #modal-widget-card -->
	<div class="modal fade" id="modal-widget-card">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget List Card</h4>
					<a href="#" data-dismiss="modal" class="close">&times;</a>
				</div>
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper m-b-0">
					<button type="button" class="btn btn-grey btn-sm btn-clipboard width-60" data-clipboard-target="#source-widget-card">Copy</button>
					<pre class="m-b-0"><code class="html" id="source-widget-card">&lt;!-- begin widget-card --&gt;
&lt;a href="#" class="widget-card widget-card-rounded<span class="hljs-string" data-id="widget-doc" data-dark-doc=" inverse-mode" data-light-doc=""></span>"&gt;
  &lt;div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-portrait-11-thumb.jpg)"&gt;&lt;/div&gt;
  &lt;div class="widget-card-content"&gt;
    &lt;b class="text-white"&gt;Download and get free trial.&lt;/b&gt;
  &lt;/div&gt;
  &lt;div class="widget-card-content bottom"&gt;
    &lt;i class="fab fa-pushed fa-5x text-indigo"&gt;&lt;/i&gt;
    &lt;h4 class="text-white m-t-10"&gt;&lt;b&gt;Apple Draw&lt;br /&gt; Photo Booth&lt;/b&gt;&lt;/h4&gt;
    &lt;h5 class="f-s-12 text-white-transparent-7 m-b-2"&gt;&lt;b&gt;EASILY DRAW ON PHOTOS&lt;/b&gt;&lt;/h5&gt;
  &lt;/div&gt;
&lt;/a&gt;
&lt;!-- end widget-card --&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- end #modal-widget-card -->
	
	<!-- begin #modal-widget-card-square -->
	<div class="modal fade" id="modal-widget-card-square">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget List Card Square</h4>
					<a href="#" data-dismiss="modal" class="close">&times;</a>
				</div>
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper m-b-0">
					<button type="button" class="btn btn-grey btn-sm btn-clipboard width-60" data-clipboard-target="#source-widget-card-square">Copy</button>
					<pre class="m-b-0"><code class="html" id="source-widget-card-square">&lt;!-- begin widget-card-square --&gt;
&lt;a href="#" class="widget-card widget-card-rounded square m-b-5<span class="hljs-string" data-id="widget-doc" data-dark-doc=" inverse-mode" data-light-doc=""></span>"&gt;
  &lt;div class="widget-card-cover" style="background-image: url(/assets/img/login-bg/login-bg-10.jpg)"&gt;
    &lt;div class="vertical-box vertical-box-widget"&gt;
      &lt;div class="vertical-box-column valign-middle text-center"&gt;
        &lt;div class="text-white f-s-14"&gt;&lt;b&gt;PORTRAITS OF&lt;/b&gt;&lt;/div&gt;
        &lt;div class="text-white-transparent-8 f-w-600"&gt;2017&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/a&gt;
&lt;div class="f-s-12 f-w-700 text-black p-t-2"&gt;Memory 2017&lt;/div&gt;
&lt;div class="f-s-10 f-w-600 text-black-lighter m-b-15"&gt;1,239&lt;/div&gt;
&lt;!-- end widget-card-square --&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- end #modal-widget-card-square -->
	
	<!-- begin #modal-widget-stat -->
	<div class="modal fade" id="modal-widget-stat">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget Stat</h4>
					<a href="#" data-dismiss="modal" class="close">&times;</a>
				</div>
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper m-b-0">
					<button type="button" class="btn btn-grey btn-sm btn-clipboard width-60" data-clipboard-target="#source-widget-stat">Copy</button>
					<pre class="m-b-0"><code class="html" id="source-widget-stat">&lt;!-- begin widget-stats --&gt;
&lt;div class="widget widget-stats bg-gradient-teal m-b-10"&gt;
  &lt;div class="stats-icon stats-icon-lg"&gt;&lt;i class="fa fa-globe fa-fw"&gt;&lt;/i&gt;&lt;/div&gt;
  &lt;div class="stats-content"&gt;
    &lt;div class="stats-title"&gt;TODAY'S VISITS&lt;/div&gt;
    &lt;div class="stats-number"&gt;7,842,900&lt;/div&gt;
    &lt;div class="stats-progress progress"&gt;
      &lt;div class="progress-bar" style="width: 70.1%;"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="stats-desc"&gt;Better than last week (70.1%)&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;!-- end widget-stats --&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- end #modal-widget-stat -->
	
	<!-- begin #modal-widget-chart -->
	<div class="modal fade" id="modal-widget-chart">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget Chart</h4>
					<a href="#" data-dismiss="modal" class="close">&times;</a>
				</div>
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper m-b-0">
					<button type="button" class="btn btn-grey btn-sm btn-clipboard width-60" data-clipboard-target="#source-widget-chart">Copy</button>
					<pre class="m-b-0"><code class="html" id="source-widget-chart">&lt;!-- begin widget-chart --&gt;
&lt;div class="widget widget-rounded<span class="hljs-string" data-id="widget-doc" data-dark-doc=" inverse-mode" data-light-doc=""></span>"&gt;
  &lt;div class="widget-header"&gt;
    &lt;h4 class="widget-header-title"&gt;Audience Overview&lt;/h4&gt;
    &lt;div class="widget-header-icon"&gt;&lt;a href="#" class="text-muted"&gt;&lt;i class="fa fa-fw fa-upload"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div class="widget-header-icon"&gt;&lt;a href="#" class="text-muted"&gt;&lt;i class="fa fa-fw fa-cog"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="vertical-box with-grid with-border-top"&gt;
    &lt;div class="vertical-box-column widget-chart-content"&gt;
      &lt;div id="nv-stacked-area-chart" style="height: 108%"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="vertical-box-column p-15" style="width: 30%;"&gt;
      &lt;div class="widget-chart-info"&gt;
        &lt;h4 class="widget-chart-info-title"&gt;Total sales&lt;/h4&gt;
        &lt;p class="widget-chart-info-desc"&gt;Lorem ipsum dolor sit consectetur adipiscing elit.&lt;/p&gt;
        &lt;div class="widget-chart-info-progress"&gt;
          &lt;b&gt;Monthly Plan&lt;/b&gt;
          &lt;span class="pull-right"&gt;70%&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="progress progress-sm"&gt;
          &lt;div class="progress-bar progress-bar-striped progress-bar-animated rounded-corner" style="width:70%;"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;hr /&gt;
      &lt;div class="widget-chart-info"&gt;
        &lt;h4 class="widget-chart-info-title"&gt;Task progress&lt;/h4&gt;
        &lt;p class="widget-chart-info-desc"&gt;Vestibulum sollicitudin in lectus a cursus.&lt;/p&gt;
        &lt;div class="widget-chart-info-progress"&gt;
          &lt;b&gt;Marketing Research&lt;/b&gt;
          &lt;span class="pull-right"&gt;74%&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="progress progress-sm m-b-15"&gt;
          &lt;div class="progress-bar progress-bar-striped progress-bar-animated rounded-corner bg-indigo" style="width: 74%"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="widget-chart-info-progress"&gt;
          &lt;b&gt;Mobile App Development&lt;/b&gt;
          &lt;span class="pull-right"&gt;25%&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="progress progress-sm m-b-15"&gt;
          &lt;div class="progress-bar progress-bar-striped progress-bar-animated rounded-corner bg-green" style="width: 25%"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="widget-chart-info-progress"&gt;
          &lt;b&gt;Website Redesign&lt;/b&gt;
          &lt;span class="pull-right"&gt;95%&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="progress progress-sm"&gt;
          &lt;div class="progress-bar progress-bar-striped progress-bar-animated rounded-corner bg-orange" style="width: 95%"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;!-- end widget-chart --&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- end #modal-widget-chart -->
	
	<!-- begin #modal-widget-table -->
	<div class="modal fade" id="modal-widget-table">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget Table</h4>
					<a href="#" data-dismiss="modal" class="close">&times;</a>
				</div>
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper m-b-0">
					<button type="button" class="btn btn-grey btn-sm btn-clipboard width-60" data-clipboard-target="#source-widget-table">Copy</button>
					<pre class="m-b-0"><code class="html" id="source-widget-table">&lt;!-- begin widget-table --&gt;
&lt;table class="table table-bordered widget-table widget-table-rounded<span class="hljs-string" data-id="widget-doc" data-dark-doc=" inverse-mode" data-light-doc=""></span>"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th width="1%"&gt;Image&lt;/th&gt;
      &lt;th&gt;Product Info&lt;/th&gt;
      &lt;th&gt;Price&lt;/th&gt;
      &lt;th&gt;Qty&lt;/th&gt;
      &lt;th&gt;Total&lt;/th&gt;
      &lt;th&gt;&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;
        &lt;div class="widget-table-img" style="background-image: url(/assets/img/product/product-6.png);"&gt;&lt;/div&gt;
      &lt;/td&gt;
      &lt;td&gt;
        &lt;h4 class="widget-table-title"&gt;Mavic Pro Combo&lt;/h4&gt;
        &lt;p class="widget-table-desc m-b-15"&gt;Portable yet powerful, the Mavic Pro is your personal drone, ready to go with you everywhere.&lt;/p&gt;
        &lt;div class="progress progress-sm rounded-corner m-b-5"&gt;
          &lt;div class="progress-bar progress-bar-striped progress-bar-animated bg-orange f-s-10 f-w-600" style="width: 30%;"&gt;30%&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="clearfix f-s-10"&gt;
          status: &lt;b class="<span class="hljs-string" data-id="widget-doc" data-dark-doc="text-white" data-light-doc="text-inverse">text-inverse</span>"&gt;Shipped&lt;/b&gt;
        &lt;/div&gt;
      &lt;/td&gt;
      &lt;td class="text-nowrap"&gt;
        &lt;b class="<span class="hljs-string" data-id="widget-doc" data-dark-doc="text-white" data-light-doc="text-inverse">text-inverse</span>"&gt;$999&lt;/b&gt;&lt;br /&gt;
        &lt;small class="<span class="hljs-string" data-id="widget-doc" data-dark-doc="text-white" data-light-doc="text-inverse">text-inverse</span> text-line-through"&gt;$1,202&lt;/small&gt;
      &lt;/td&gt;
      &lt;td&gt;1&lt;/td&gt;
      &lt;td&gt;999.00&lt;/td&gt;
      &lt;td&gt;&lt;a href="#" class="btn <span class="hljs-string" data-id="widget-doc" data-dark-doc="btn-default" data-light-doc="btn-inverse">btn-inverse</span> btn-sm width-80 rounded-corner"&gt;Edit&lt;/a&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
&lt;!-- end widget-table --&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- end #modal-widget-table -->
@endsection

@push('scripts')
	<script src="/assets/plugins/d3/d3.min.js"></script>
	<script src="/assets/plugins/nvd3/build/nv.d3.js"></script>
	<script src="/assets/plugins/clipboard/dist/clipboard.min.js"></script>
	<script src="/assets/plugins/highlight.js/highlight.min.js"></script>
	<script src="/assets/js/demo/widget.demo.js"></script>
	<script src="/assets/js/demo/render.highlight.js"></script>
@endpush
