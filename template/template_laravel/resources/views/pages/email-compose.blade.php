@extends('layouts.default', ['contentFullHeight' => true])

@section('title', 'Email - Compose')

@push('css')
	<link href="/assets/plugins/tag-it/css/jquery.tagit.css" rel="stylesheet" />
	<link href="/assets/plugins/bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.min.css" rel="stylesheet" />
@endpush

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
				<div class="wrapper">
					<span class="btn-group mr-2">
						<a href="javascript:;" class="btn btn-white btn-sm"><i class="fa fa-fw fa-envelope"></i> <span class="hidden-xs">Send</span></a>
						<a href="javascript:;" class="btn btn-white btn-sm"><i class="fa fa-fw fa-paperclip"></i> <span class="hidden-xs">Attach</span></a>
					</span>
					<span class="dropdown">
						<a href="#" class="btn btn-white btn-sm" data-toggle="dropdown"><i class="fa fa-fw fa-ellipsis-h"></i></a>
						<div class="dropdown-menu dropdown-menu-left">
							<a href="javascript:;" class="dropdown-item">Save draft</a>
							<a href="javascript:;" class="dropdown-item">Show From</a>
							<a href="javascript:;" class="dropdown-item">Check names</a>
							<a href="javascript:;" class="dropdown-item">Switch to plain text</a>
							<a href="javascript:;" class="dropdown-item">Check for accessibility issues</a>
						</div>
					</span>
					<span class="pull-right">
						<a href="email_inbox.html" class="btn btn-white btn-sm"><i class="fa fa-fw fa-times"></i> <span class="hidden-xs">Discard</span></a>
					</span>
				</div>
				<!-- end wrapper -->
				<!-- begin vertical-box-row -->
				<div class="vertical-box-row bg-white">
					<!-- begin vertical-box-cell -->
					<div class="vertical-box-cell">
						<!-- begin vertical-box-inner-cell -->
						<div class="vertical-box-inner-cell">
							<!-- begin scrollbar -->
							<div data-scrollbar="true" data-height="100%" class="p-15">
								<!-- begin email form -->
								<form action="/" method="POST" name="email_to_form">
									<!-- begin email to -->
									<div class="email-to">
										<span class="float-right-link">
											<a href="#" data-click="add-cc" data-name="Cc" class="m-r-5">Cc</a>
											<a href="#" data-click="add-cc" data-name="Bcc">Bcc</a>
										</span>
										<label class="control-label">To:</label>
										<ul id="email-to" class="primary line-mode">
											<li>bootstrap@gmail.com</li>
											<li>google@gmail.com</li>
										</ul>
									</div>
									<!-- end email to -->

									<div data-id="extra-cc"></div>

									<!-- begin email subject -->
									<div class="email-subject">
										<input type="text" class="form-control form-control-lg" placeholder="Subject" />
									</div>
									<!-- end email subject -->
									<!-- begin email content -->
									<div class="email-content p-t-15">
										<textarea class="textarea form-control" id="wysihtml5" placeholder="Enter text ..." rows="20"></textarea>
									</div>
									<!-- end email content -->
								</form>
								<!-- end email form -->
							</div>
							<!-- end scrollbar -->
						</div>
						<!-- end vertical-box-inner-cell -->
					</div>
					<!-- end vertical-box-cell -->
				</div>
				<!-- end vertical-box-row -->
				<!-- begin wrapper -->
				<div class="wrapper text-right">
					<button type="submit" class="btn btn-white p-l-40 p-r-40 m-r-5">Discard</button>
					<button type="submit" class="btn btn-primary p-l-40 p-r-40">Send</button>
				</div>
				<!-- end wrapper -->
			</div>
			<!-- end vertical-box -->
		</div>
		<!-- end vertical-box-column -->
	</div>
	<!-- end vertical-box -->
@endsection


@push('scripts')
	<script src="/assets/plugins/jquery-migrate/dist/jquery-migrate.min.js"></script>
	<script src="/assets/plugins/tag-it/js/tag-it.min.js"></script>
	<script src="/assets/plugins/bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.all.min.js"></script>
	<script src="/assets/js/demo/email-compose.demo.js"></script>
@endpush
