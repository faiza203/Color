<template>
	<div style="min-height: 100vh; background: url(../assets/img/cover/cover-scrum-board.png) no-repeat fixed; background-size: 360px; background-position: right bottom;">
		<div class="d-flex align-items-center mb-md-3 mb-2">
			<!-- begin page-header -->
			<h1 class="page-header mb-0">
				Scrum Board 
			</h1>
			<!-- end page-header -->
			
			<div class="ml-auto">
				<button v-b-modal.modalAddTask class="btn btn-success btn-sm btn-rounded pl-2 pr-3"><i class="fa fa-plus mr-1"></i> Add Task</button>
			</div>
		</div>
		
		<div class="mb-md-4 mb-3 d-md-flex">
			<b-dropdown text="Dropdown" toggle-class="p-0 text-inverse" no-caret variant="link">
				<template v-slot:button-content>
					<i class="far fa-folder fa-fw fa-lg text-muted mr-1"></i> project/color-admin <b class="caret text-muted"></b>
				</template>
				<b-dropdown-item href="#"><i class="far fa-folder fa-fw fa-lg text-muted mr-1"></i> project/mobile-app-dev</b-dropdown-item>
				<b-dropdown-item href="#"><i class="far fa-folder fa-fw fa-lg text-muted mr-1"></i> project/bootstrap-5</b-dropdown-item>
				<b-dropdown-item href="#"><i class="far fa-folder fa-fw fa-lg text-muted mr-1"></i> project/mvc-version</b-dropdown-item>
				<b-dropdown-item href="#"><i class="far fa-folder fa-fw fa-lg text-muted mr-1"></i> project/ruby-version</b-dropdown-item>
			</b-dropdown>
			<div class="ml-md-4 mt-md-0 mt-2"><i class="fa fa-code-branch fa-fw fa-lg mr-1 text-muted"></i> 1,392 pull request</div>
			<div class="ml-md-4 mt-md-0 mt-2"><i class="fa fa-users-cog fa-fw fa-lg mr-1 text-muted"></i> 52 participant</div>
			<div class="ml-md-4 mt-md-0 mt-2"><i class="far fa-clock fa-fw fa-lg mr-1 text-muted"></i> 14 day(s)</div>
		</div>
		
		<div class="row">
			<div class="col-xl-4 col-lg-6">
				<panel title="To do (5)" noBody="true">
					<div class="list-group panel-body p-0">
						<div class="list-group-item  d-flex border-top-0">
							<div class="mr-3 f-s-16">
								<i class="far fa-question-circle text-muted fa-fw"></i> 
							</div>
							<div class="flex-fill">
								<div class="f-s-13 f-w-600 text-inverse">Enable open search</div>
								<div class="mb-1 f-s-12">
									<div class="text-inverse-lighter flex-1">#29949 opened yesterday by Terry</div>
								</div>
								<div class="mb-1">
									<span class="label label-primary mr-1">docs</span>
									<span class="label label-success">feature</span>
								</div>
								<hr class="m-b-10" />
								<div class="d-flex align-items-center m-b-5">
									<div class="f-s-12 mr-2 text-inverse f-w-600">
										Task (2/3)
									</div>
									<div class="progress progress-xs width-100 mb-0 mr-2">
										<div class="progress-bar progress-bar-striped" style="width: 66%;"></div>
									</div>
									<div class="f-s-10">66%</div>
									<div class="ml-auto">
										<a href="#" class="text-muted f-s-12 f-w-500" data-toggle="collapse" data-target="#todoBoard">
											collapse
										</a>
									</div>
								</div>
								<div class="form-group mb-1">
									<div class="collapse show" id="todoBoard">
										<div class="custom-control custom-checkbox">
											<input type="checkbox" class="custom-control-input" id="customCheck1" checked />
											<label class="custom-control-label" for="customCheck1">create ui for autocomplete</label>
										</div>
										<div class="custom-control custom-checkbox">
											<input type="checkbox" class="custom-control-input" id="customCheck2" checked />
											<label class="custom-control-label" for="customCheck2">integrate jquery autocomplete with ui</label>
										</div>
										<div class="custom-control custom-checkbox">
											<input type="checkbox" class="custom-control-input" id="customCheck3" />
											<label class="custom-control-label" for="customCheck3">backend search return as json data</label>
										</div>
									</div>
								</div>
							</div>
						</div>
						<a href="#" class="list-group-item list-group-item-action d-flex">
							<div class="mr-3 f-s-16">
								<i class="far fa-question-circle text-muted fa-fw"></i> 
							</div>
							<div class="flex-fill">
								<div class="f-s-13 f-w-600 text-inverse">Investigate adding markdownlint</div>
								<div class="mb-1 f-s-12">
									<div class="text-inverse-lighter flex-1">#29919 opened 9 days ago by xMediaKron</div>
								</div>
								<div class="mb-1">
									<span class="label label-default mr-1">build</span>
									<span class="label label-indigo">v5</span>
								</div>
							</div>
						</a>
						<a href="#" class="list-group-item list-group-item-action d-flex">
							<div class="mr-3 f-s-16">
								<i class="far fa-question-circle text-muted fa-fw"></i> 
							</div>
							<div class="flex-fill">
								<div class="f-s-13 f-w-600 text-inverse">Add a "Submit a Resource" form</div>
								<div class="mb-1 f-s-12">
									<div class="text-inverse-lighter flex-1">#29916 opened 9 days ago by Wasbbok</div>
								</div>
								<div class="mb-1 d-flex align-items-center">
									<div class="mr-2"><span class="label label-success">enhancement</span></div>
									<div class="d-flex">
										<div class="widget-img widget-img-xs rounded-circle bg-inverse mr-n2" style="background-image: url(../assets/img/user/user-1.jpg)">
										</div>
										<div class="widget-img widget-img-xs rounded-circle bg-inverse mr-n2" style="background-image: url(../assets/img/user/user-2.jpg)">
										</div>
										<div class="widget-img widget-img-xs rounded-circle bg-inverse mr-n2" style="background-image: url(../assets/img/user/user-3.jpg)">
										</div>
										<div class="widget-icon widget-icon-xs rounded-circle bg-muted text-white f-s-10">
											+2
										</div>
									</div>
								</div>
							</div>
						</a>
						<a href="#" class="list-group-item list-group-item-action d-flex">
							<div class="mr-3 f-s-16">
								<i class="far fa-question-circle text-muted fa-fw"></i> 
							</div>
							<div class="flex-fill">
								<div class="f-s-13 f-w-600 text-inverse">Custom control border color missing on focus</div>
								<div class="mb-1 f-s-12">
									<div class="text-inverse-lighter flex-1">#29796 opened 29 days ago by mdo</div>
								</div>
								<div class="mb-1">
									<span class="label label-pink">docs</span>
								</div>
							</div>
						</a>
						<a href="#" class="list-group-item list-group-item-action d-flex">
							<div class="mr-3 f-s-16">
								<i class="far fa-question-circle text-muted fa-fw"></i> 
							</div>
							<div class="flex-fill">
								<div class="f-s-13 f-w-600 text-inverse">New design for corporate page</div>
								<div class="mb-1 f-s-12">
									<div class="text-inverse-lighter flex-1">#29919 opened 19 days ago by sean</div>
								</div>
								<div class="mb-1">
									<span class="label label-default mr-1">design</span>
									<span class="label label-primary">v5</span>
								</div>
							</div>
						</a>
					</div>
				</panel>
			</div>
			<div class="col-xl-4 col-lg-6">
				<panel title="In Progress (2)" noBody="true">
					<div class="list-group panel-body p-0">
						<div class="list-group-item  d-flex border-top-0">
							<div class="mr-3 f-s-16">
								<i class="fa fa-tools text-muted fa-fw"></i> 
							</div>
							<div class="flex-fill">
								<div class="f-s-13 f-w-600 text-inverse">HTML5 flexbox old browser compatibility</div>
								<div class="mb-1 f-s-12">
									<div class="text-inverse-lighter flex-1">#29982 handled by Sean</div>
								</div>
								<div class="mb-1">
									<span class="label label-indigo">enhancement</span>
								</div>
								<hr class="m-b-10" />
								<div class="d-flex align-items-center m-b-5">
									<div class="f-s-12 d-flex align-items-center text-inverse f-w-600">
										Task (1/2)
									</div>
									<div class="progress progress-xs width-100 mb-0 ml-2 mr-2">
										<div class="progress-bar progress-bar-striped bg-warning" style="width: 50%;"></div>
									</div>
									<div class="f-s-10">50%</div>
									<div class="ml-auto">
										<a href="#" class="text-muted f-s-12 f-w-500" data-toggle="collapse" data-target="#inProgressBoard">
											collapse
										</a>
									</div>
								</div>
								<div class="form-group mb-1">
									<div class="collapse show" id="inProgressBoard">
										<div class="custom-control custom-checkbox">
											<input type="checkbox" class="custom-control-input" id="customCheck4" checked />
											<label class="custom-control-label" for="customCheck4">check all browser compatibility for HTML5 flexbox</label>
										</div>
										<div class="custom-control custom-checkbox">
											<input type="checkbox" class="custom-control-input" id="customCheck5" />
											<label class="custom-control-label" for="customCheck5">fallback integration by using other display property</label>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="list-group-item list-group-item-action d-flex">
							<div class="mr-3 f-s-16">
								<i class="fa fa-bug text-danger fa-fw"></i> 
							</div>
							<div class="flex-fill">
								<div class="f-s-13 f-w-600 text-inverse">Mobile app autoclose on iOS</div>
								<div class="mb-1 f-s-12">
									<div class="text-inverse-lighter flex-1">#29953 handled by Ken</div>
								</div>
								<div class="mb-1">
									<span class="label label-default mr-1">issue</span>
									<span class="label label-danger">bug</span>
								</div>
								<hr class="m-b-10" />
								<div class="d-flex align-items-center m-b-5">
									<div class="f-s-12 d-flex align-items-center text-inverse f-w-600">
										Task (0/1)
									</div>
									<div class="progress progress-xs width-100 mb-0 ml-2 mr-2">
										<div class="progress-bar progress-bar-striped bg-danger" style="width: 5%;"></div>
									</div>
									<div class="f-s-10">0%</div>
									<div class="ml-auto">
										<a href="#" class="text-muted f-s-12 f-w-500" data-toggle="collapse" data-target="#inProgress2Board">
											collapse
										</a>
									</div>
								</div>
								<div class="form-group mb-1">
									<div class="collapse show" id="inProgress2Board">
										<div class="custom-control custom-checkbox">
											<input type="checkbox" class="custom-control-input" id="customCheck6" />
											<label class="custom-control-label" for="customCheck6">debug and fix mobile auto close while using GPS issue</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</panel>
			</div>
			<div class="col-xl-4 col-lg-6">
				<panel title="Done (1)" noBody="true">
					<div class="list-group panel-body p-0">
						<div href="#" class="list-group-item  d-flex border-top-0">
							<div class="mr-3 f-s-16">
								<i class="far fa-check-circle text-success fa-fw"></i> 
							</div>
							<div class="flex-fill">
								<div class="f-s-13 f-w-600 text-inverse">React version missing daterangepicker</div>
								<div class="mb-1 f-s-12">
									<div class="text-inverse-lighter flex-1">#29930 closed yesterday by Sean</div>
								</div>
								<div class="mb-1">
									<span class="label label-default mr-1">build</span>
									<span class="label label-success">feature</span>
								</div>
								<hr class="m-b-10" />
								<div class="d-flex align-items-center m-b-5">
									<div class="f-s-12 text-inverse f-w-600">
										Task (3/3)
									</div>
									<div class="progress progress-xs width-100 mb-0 ml-2 mr-2">
										<div class="progress-bar progress-bar-striped bg-success" style="width: 100%;"></div>
									</div>
									<div class="f-s-10">100%</div>
									<div class="ml-auto">
										<a href="#" class="text-muted f-s-12 f-w-500" data-toggle="collapse" data-target="#completedBoard">
											collapse
										</a>
									</div>
								</div>
								<div class="form-group mb-1">
									<div class="collapse show" id="completedBoard">
										<div class="custom-control custom-checkbox">
											<input type="checkbox" class="custom-control-input" id="customCheck7" checked />
											<label class="custom-control-label" for="customCheck7">install react-daterangepicker</label>
										</div>
										<div class="custom-control custom-checkbox">
											<input type="checkbox" class="custom-control-input" id="customCheck8" checked />
											<label class="custom-control-label" for="customCheck8">customize ui with scss</label>
										</div>
										<div class="custom-control custom-checkbox">
											<input type="checkbox" class="custom-control-input" id="customCheck9" checked />
											<label class="custom-control-label" for="customCheck9">backend integration for data filter with daterange input</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</panel>
			</div>
		</div>
		
		<b-modal id="modalAddTask" cancel-variant="default" title="Add Task">
			<div class="form-group">
				<label>Title</label>
				<input type="text" class="form-control" />
			</div>
			<div class="form-group">
				<label>Status</label>
				<select class="form-control">
					<option value="">To Do</option>
					<option value="">In Progress</option>
					<option value="">Done</option>
				</select>
			</div>
			<div class="form-group">
				<label>Description</label>
				<textarea class="form-control" rows="10"></textarea>
			</div>
		</b-modal>
	</div>
</template>