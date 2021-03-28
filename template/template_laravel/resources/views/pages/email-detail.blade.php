@extends('layouts.default', ['contentFullHeight' => true])

@section('title', 'Email - Detail')

@section('content')
	<!-- begin vertical-box -->
	<div class="vertical-box with-grid bg-light inbox">
		<!-- begin vertical-box-column -->
		<div class="vertical-box-column width-200">
			<!-- begin vertical-box -->
			<div class="vertical-box">
				<!-- begin wrapper -->
				<div class="wrapper">
					<div class="d-flex align-items-center justify-content-center">
						<a href="#emailNav" data-toggle="collapse" class="btn btn-inverse btn-sm mr-auto d-block d-lg-none">
							<i class="fa fa-cog"></i>
						</a>
						<a href="email_compose.html" class="btn btn-inverse p-l-40 p-r-40 btn-sm">
							Compose
						</a>
					</div>
				</div>
				<!-- end wrapper -->
				<!-- begin vertical-box-row -->
				<div class="vertical-box-row collapse d-lg-table-row" id="emailNav">
					<!-- begin vertical-box-cell -->
					<div class="vertical-box-cell">
						<!-- begin vertical-box-inner-cell -->
						<div class="vertical-box-inner-cell">
							<!-- begin scrollbar -->
							<div data-scrollbar="true" data-height="100%">
								<!-- begin wrapper -->
								<div class="wrapper p-0">
									<div class="nav-title"><b>FOLDERS</b></div>
									<ul class="nav nav-inbox">
										<li class="active"><a href="email_inbox.html"><i class="fa fa-inbox fa-fw m-r-5"></i> Inbox <span class="badge pull-right">52</span></a></li>
										<li><a href="email_inbox.html"><i class="fa fa-flag fa-fw m-r-5"></i> Important</a></li>
										<li><a href="email_inbox.html"><i class="fa fa-envelope fa-fw m-r-5"></i> Sent</a></li>
										<li><a href="email_inbox.html"><i class="fa fa-pencil-alt fa-fw m-r-5"></i> Drafts</a></li>
										<li><a href="email_inbox.html"><i class="fa fa-trash fa-fw m-r-5"></i> Trash</a></li>
									</ul>
									<div class="nav-title"><b>LABEL</b></div>
									<ul class="nav nav-inbox">
										<li><a href="javascript:;"><i class="fa fa-fw f-s-10 m-r-5 fa-circle text-inverse"></i> Admin</a></li>
										<li><a href="javascript:;"><i class="fa fa-fw f-s-10 m-r-5 fa-circle text-blue"></i> Designer & Employer</a></li>
										<li><a href="javascript:;"><i class="fa fa-fw f-s-10 m-r-5 fa-circle text-success"></i> Staff</a></li>
										<li><a href="javascript:;"><i class="fa fa-fw f-s-10 m-r-5 fa-circle text-warning"></i> Sponsorer</a></li>
										<li><a href="javascript:;"><i class="fa fa-fw f-s-10 m-r-5 fa-circle text-danger"></i> Client</a></li>
									</ul>
								</div>
								<!-- end wrapper -->
							</div>
							<!-- end scrollbar -->
						</div>
						<!-- end vertical-box-inner-cell -->
					</div>
					<!-- end vertical-box-cell -->
				</div>
				<!-- end vertical-box-row -->
			</div>
			<!-- end vertical-box -->
		</div>
		<!-- end vertical-box-column -->
		<!-- begin vertical-box-column -->
		<div class="vertical-box-column">
			<!-- begin vertical-box -->
			<div class="vertical-box">
				<!-- begin wrapper -->
				<div class="wrapper clearfix">
					<div class="pull-left">
						<div class="btn-group mr-2">
							<a href="javascript:;" class="btn btn-white btn-sm"><i class="fa fa-fw fa-reply"></i> <span class="d-none d-lg-inline">Reply</span></a>
						</div>
						<div class="btn-group mr-2">
							<a href="javascript:;" class="btn btn-white btn-sm"><i class="fa fa-fw fa-trash"></i> <span class="d-none d-lg-inline">Delete</span></a>
							<a href="javascript:;" class="btn btn-white btn-sm"><i class="fa fa-fw fa-archive"></i> <span class="d-none d-lg-inline">Archive</span></a>
						</div>
					</div>
					<div class="pull-right">
						<div class="btn-group mr-2">
							<a href="email_inbox.html" class="btn btn-white btn-sm disabled"><i class="fa fa-fw fa-arrow-up"></i></a>
							<a href="email_inbox.html" class="btn btn-white btn-sm"><i class="fa fa-fw fa-arrow-down"></i></a>
						</div>
						<div class="btn-group">
							<a href="email_inbox.html" class="btn btn-white btn-sm"><i class="fa fa-fw fa-times"></i></a>
						</div>
					</div>
				</div>
				<!-- end wrapper -->
				<!-- begin vertical-box-row -->
				<div class="vertical-box-row bg-white">
					<!-- begin vertical-box-cell -->
					<div class="vertical-box-cell">
						<!-- begin vertical-box-inner-cell -->
						<div class="vertical-box-inner-cell">
							<!-- begin scrollbar -->
							<div data-scrollbar="true" data-height="100%">
								<!-- begin wrapper -->
								<div class="wrapper">
									<h3 class="m-t-0 m-b-15 f-w-500">Bootstrap v4.0 is coming soon</h3>
									<ul class="media-list underline m-b-15 p-b-15">
										<li class="media media-sm clearfix">
											<a href="javascript:;" class="pull-left">
												<img class="media-object rounded-corner" alt="" src="/assets/img/user/user-12.jpg" />
											</a>
											<div class="media-body">
												<div class="email-from text-inverse f-s-14 f-w-600 m-b-3">
													from support@wrapbootstrap.com
												</div>
												<div class="m-b-3"><i class="fa fa-clock fa-fw"></i> Today, 8:30 AM</div>
												<div class="email-to">
													To: nguoksiong@live.co.uk
												</div>
											</div>
										</li>
									</ul>
									<ul class="attached-document clearfix">
										<li class="fa-file">
											<div class="document-file">
												<a href="javascript:;">
													<i class="fa fa-file-pdf"></i>
												</a>
											</div>
											<div class="document-name"><a href="javascript:;">flight_ticket.pdf</a></div>
										</li>
										<li class="fa-camera">
											<div class="document-file">
												<a href="javascript:;">
													<img src="/assets/img/gallery/gallery-11.jpg" alt="" />
												</a>
											</div>
											<div class="document-name"><a href="javascript:;">front_end_mockup.jpg</a></div>
										</li>
									</ul>

									<p class="f-s-12 text-inverse p-t-10"> 
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel auctor nisi, vel auctor orci. <br />
										Aenean in pretium odio, ut lacinia tellus. Nam sed sem ac enim porttitor vestibulum vitae at erat.
									</p>
									<p class="f-s-12 text-inverse">
										Curabitur auctor non orci a molestie. Nunc non justo quis orci viverra pretium id ut est. <br />
										Nullam vitae dolor id enim consequat fermentum. Ut vel nibh tellus. <br />
										Duis finibus ante et augue fringilla, vitae scelerisque tortor pretium. <br />
										Phasellus quis eros erat. Nam sed justo libero.
									</p>
									<p class="f-s-12 text-inverse">
										Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.<br /> 
										Sed tempus dapibus libero ac commodo.
									</p>
									<br />
									<br />
									<p class="f-s-12 text-inverse">
										Best Regards,<br />
										Sean.<br /><br />
										Information Technology Department,<br />
										Senior Front End Designer<br />
									</p>
								</div>
								<!-- end wrapper -->
							</div>
							<!-- end scrollbar -->
						</div>
						<!-- end vertical-box-inner-cell -->
					</div>
					<!-- end vertical-box-cell -->
				</div>
				<!-- end vertical-box-row -->
				<!-- begin wrapper -->
				<div class="wrapper text-right clearfix">
					<div class="btn-group mr-2">
						<a href="email_inbox.html" class="btn btn-white btn-sm disabled"><i class="fa fa-fw fa-arrow-up"></i></a>
						<a href="email_inbox.html" class="btn btn-white btn-sm"><i class="fa fa-fw fa-arrow-down"></i></a>
					</div>
					<div class="btn-group">
						<a href="email_inbox.html" class="btn btn-white btn-sm"><i class="fa fa-fw fa-times"></i></a>
					</div>
				</div>
				<!-- end wrapper -->
			</div>
			<!-- end vertical-box -->
		</div>
		<!-- end vertical-box-column -->
	</div>
	<!-- end vertical-box -->
@endsection