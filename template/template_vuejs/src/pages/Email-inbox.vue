<template>
	<!-- begin vertical-box -->
	<div class="vertical-box with-grid inbox bg-light">
		<!-- begin vertical-box-column -->
		<div class="vertical-box-column width-200 hidden-xs">
			<!-- begin vertical-box -->
			<div class="vertical-box">
				<!-- begin wrapper -->
				<div class="wrapper">
					<div class="d-flex align-items-center justify-content-center">
						<b-button v-b-toggle.emailNav variant="inverse" class="btn-sm mr-auto d-block d-lg-none">
							<i class="fa fa-cog"></i>
						</b-button>
						<router-link to="/email/compose" class="btn btn-inverse p-l-40 p-r-40 btn-sm">
							Compose
						</router-link>
					</div>
				</div>
				<!-- end wrapper -->
				<!-- begin vertical-box-row -->
				<b-collapse class="vertical-box-row collapse d-lg-table-row" id="emailNav">
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
										<li class="active"><router-link to="/email/inbox"><i class="fa fa-inbox fa-fw m-r-5"></i> Inbox <span class="badge pull-right">52</span></router-link></li>
										<li><router-link to="/email/inbox"><i class="fa fa-flag fa-fw m-r-5"></i> Important</router-link></li>
										<li><router-link to="/email/inbox"><i class="fa fa-envelope fa-fw m-r-5"></i> Sent</router-link></li>
										<li><router-link to="/email/inbox"><i class="fa fa-pencil-alt fa-fw m-r-5"></i> Drafts</router-link></li>
										<li><router-link to="/email/inbox"><i class="fa fa-trash fa-fw m-r-5"></i> Trash</router-link></li>
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
				</b-collapse>
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
					<!-- begin btn-toolbar -->
					<div class="btn-toolbar">
						<div class="btn-group m-r-5">
							<a href="javascript:;" class="p-t-5 pull-left m-r-3 m-t-2" data-click="email-select-all">
								<i class="far fa-square fa-fw text-muted f-s-16 l-minus-2"></i>
							</a>
						</div>
						<!-- begin btn-group -->
						<b-dropdown id="dd-view" variant="white" class="m-r-5" toggle-class="btn-sm">
							<template slot="button-content">
								View All
							</template>
							<b-dropdown-item href="#"><i class="fa fa-circle f-s-10 fa-fw m-r-5"></i> All</b-dropdown-item>
							<b-dropdown-item href="#"><i class="fa fa-circle f-s-10 fa-fw m-r-5"></i> Unread</b-dropdown-item>
							<b-dropdown-item href="#"><i class="fa fa-circle f-s-10 fa-fw m-r-5"></i> Contacts</b-dropdown-item>
							<b-dropdown-item href="#"><i class="fa fa-circle f-s-10 fa-fw m-r-5"></i> Groups</b-dropdown-item>
							<b-dropdown-item href="#"><i class="fa fa-circle f-s-10 fa-fw m-r-5"></i> Newsletters</b-dropdown-item>
							<b-dropdown-item href="#"><i class="fa fa-circle f-s-10 fa-fw m-r-5"></i> Social updates</b-dropdown-item>
							<b-dropdown-item href="#"><i class="fa fa-circle f-s-10 fa-fw m-r-5"></i> Everything else</b-dropdown-item>
						</b-dropdown>
						<!-- end btn-group -->
						<!-- begin btn-group -->
						<div class="btn-group m-r-5">
							<button class="btn btn-sm btn-white"><i class="fa fa-redo"></i></button>
						</div>
						<!-- end btn-group -->
						<!-- begin btn-group -->
						<div class="btn-group">
							<button class="btn btn-sm btn-white hide" data-email-action="delete"><i class="fa fa-times m-r-3"></i> <span class="hidden-xs">Delete</span></button>
							<button class="btn btn-sm btn-white hide" data-email-action="archive"><i class="fa fa-folder m-r-3"></i> <span class="hidden-xs">Archive</span></button>
							<button class="btn btn-sm btn-white hide" data-email-action="archive"><i class="fa fa-trash m-r-3"></i> <span class="hidden-xs">Junk</span></button>
						</div>
						<!-- end btn-group -->
						<!-- begin btn-group -->
						<div class="btn-group ml-auto">
							<button class="btn btn-white btn-sm">
								<i class="fa fa-chevron-left"></i>
							</button>
							<button class="btn btn-white btn-sm">
								<i class="fa fa-chevron-right"></i>
							</button>
						</div>
						<!-- end btn-group -->
					</div>
					<!-- end btn-toolbar -->
				</div>
				<!-- end wrapper -->
				<!-- begin vertical-box-row -->
				<div class="vertical-box-row bg-white">
					<!-- begin vertical-box-cell -->
					<div class="vertical-box-cell">
						<!-- begin vertical-box-inner-cell -->
						<div class="vertical-box-inner-cell">
							<!-- begin scrollbar -->
							<vue-custom-scrollbar class="height-full">
								<!-- begin list-email -->
								<ul class="list-group list-group-lg no-radius list-email">
									<li class="list-group-item unread">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox1">
												<label class="custom-control-label" for="emailCheckbox1"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user bg-blue">
											<span class="text-white">F</span>
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Facebook Blueprint</span>
												<span class="email-title">Newly released courses, holiday marketing tips, how-to video, and more!</span>
												<span class="email-desc">Sed scelerisque dui lacus, quis pellentesque lorem tincidunt rhoncus. Nulla accumsan elit pharetra, lacinia turpis nec, varius erat.</span>
												<span class="email-time">Today</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item unread">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox2">
												<label class="custom-control-label" for="emailCheckbox2"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user bg-indigo">
											<span class="text-white">C</span>
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Color Admin</span>
												<span class="email-title">Color Admin dashboard v2 is ready for live</span>
												<span class="email-desc">Proin interdum aliquam urna, quis lobortis magna tincidunt ac. Integer sed pulvinar neque...</span>
												<span class="email-time">Today</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item unread">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox3">
												<label class="custom-control-label" for="emailCheckbox3"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user bg-grey">
											<span class="text-white">W</span>
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">support@wrapbootstrap.com</span>
												<span class="email-title">Bootstrap v4.0 is coming soon</span>
												<span class="email-desc">Praesent id pulvinar orci. Donec ac metus non ligula faucibus venenatis. Suspendisse tortor est, placerat eu dui sed...</span>
												<span class="email-time">Today</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox4">
												<label class="custom-control-label" for="emailCheckbox4"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user bg-grey">
											<i class="fab fa-github-alt text-white"></i>
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Github</span>
												<span class="email-title">Sidebar animation bugfix</span>
												<span class="email-desc">Nam sit amet lacinia massa, sit amet blandit urna. Duis pharetra ex id ipsum posuere...</span>
												<span class="email-time">2 days ago</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox5">
												<label class="custom-control-label" for="emailCheckbox5"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user bg-grey">
											<span class="text-white">W</span>
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Wrapbootstrap</span>
												<span class="email-title">Bootstrap Framework is awesome</span>
												<span class="email-desc">Etiam enim ipsum, malesuada in consectetur interdum, malesuada et lacus. Aenean faucibus turpis lorem...</span>
												<span class="email-time">1 week ago</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox6">
												<label class="custom-control-label" for="emailCheckbox6"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user">
											<img src="/assets/img/user/user-12.jpg" alt="" />
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Gerald Huff</span>
												<span class="email-title">Handlebars help you to build semantic template </span>
												<span class="email-desc">Proin consectetur accumsan rhoncus. Nulla porta orci ultricies lectus consequat fringilla. Vestibulum ante ipsum primis in faucibus...</span>
												<span class="email-time">2 months ago</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox7">
												<label class="custom-control-label" for="emailCheckbox7"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user">
											<img src="/assets/img/user/user-1.jpg" alt="" />
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Rick	Hopkins</span>
												<span class="email-title">jQuery 2++ no longer compatibility with the old browser</span>
												<span class="email-desc">Suspendisse ut urna orci. Vivamus ac diam sollicitudin, consequat mauris id, facilisis ipsum. Nam feugiat nisl a justo...</span>
												<span class="email-time">2 months ago</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox8">
												<label class="custom-control-label" for="emailCheckbox8"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user">
											<img src="/assets/img/user/user-13.jpg" alt="" />
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Jan Scott</span>
												<span class="email-title">LESS & SASS, which one is good?</span>
												<span class="email-desc">Nam vulputate cursus imperdiet. Sed sodales urna vitae ipsum iaculis, at fermentum...</span>
												<span class="email-time">2 months ago</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox9">
												<label class="custom-control-label" for="emailCheckbox9"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user">
											<img src="/assets/img/user/user-14.jpg" alt="" />
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Nadine Barnes</span>
												<span class="email-title">Simple Line Icons is available on Color Admin v1.4</span>
												<span class="email-desc">Maecenas auctor dui sit amet tristique congue. Pellentesque lobortis nulla quam. Etiam in vulputate magna...</span>
												<span class="email-time">3 months ago</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox10">
												<label class="custom-control-label" for="emailCheckbox10"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user bg-grey">
											<span class="text-white">E</span>
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Ellen Underwood</span>
												<span class="email-title">Font Awesome 5 is available now</span>
												<span class="email-desc">Proin consectetur accumsan rhoncus. Nulla porta orci ultricies lectus consequat fringilla. Vestibulum ante ipsum primis in faucibus...</span>
												<span class="email-time">3 months ago</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox11">
												<label class="custom-control-label" for="emailCheckbox11"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user bg-grey">
											<span class="text-white">W</span>
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">newsletter@wrapbootstrap.com</span>
												<span class="email-title">Cyber week sale! Save up to 45%</span>
												<span class="email-desc">Praesent id pulvinar orci. Donec ac metus non ligula faucibus venenatis. Suspendisse tortor est, placerat eu dui sed...</span>
												<span class="email-time">3 months ago</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox12">
												<label class="custom-control-label" for="emailCheckbox12"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user bg-grey">
											<span class="text-white">S</span>
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Starbucks</span>
												<span class="email-title">Get your favorite Grande handcrafted beverage at $13</span>
												<span class="email-desc">Nam vulputate cursus imperdiet. Sed sodales urna vitae ipsum iaculis, at fermentum...</span>
												<span class="email-time">3 months ago</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox13">
												<label class="custom-control-label" for="emailCheckbox13"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user bg-grey">
											<i class="fab fa-github-alt text-white"></i>
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Github</span>
												<span class="email-title">Sidebar animation bugfix</span>
												<span class="email-desc">Nam sit amet lacinia massa, sit amet blandit urna. Duis pharetra ex id ipsum posuere...</span>
												<span class="email-time">3 months ago</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox14">
												<label class="custom-control-label" for="emailCheckbox14"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user bg-grey">
											<span class="text-white">W</span>
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Wrapbootstrap</span>
												<span class="email-title">Bootstrap Framework is awesome</span>
												<span class="email-desc">Etiam enim ipsum, malesuada in consectetur interdum, malesuada et lacus. Aenean faucibus turpis lorem...</span>
												<span class="email-time">3 months ago</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox15">
												<label class="custom-control-label" for="emailCheckbox15"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user">
											<img src="/assets/img/user/user-2.jpg" alt="" />
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Gerald Huff</span>
												<span class="email-title">Handlebars help you to build semantic template </span>
												<span class="email-desc">Proin consectetur accumsan rhoncus. Nulla porta orci ultricies lectus consequat fringilla. Vestibulum ante ipsum primis in faucibus...</span>
												<span class="email-time">3 months ago</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox16">
												<label class="custom-control-label" for="emailCheckbox16"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user">
											<img src="/assets/img/user/user-3.jpg" alt="" />
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Rick	Hopkins</span>
												<span class="email-title">jQuery 2++ no longer compatibility with the old browser</span>
												<span class="email-desc">Suspendisse ut urna orci. Vivamus ac diam sollicitudin, consequat mauris id, facilisis ipsum. Nam feugiat nisl a justo...</span>
												<span class="email-time">3 months ago</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox17">
												<label class="custom-control-label" for="emailCheckbox17"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user">
											<img src="/assets/img/user/user-4.jpg" alt="" />
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Jan Scott</span>
												<span class="email-title">LESS & SASS, which one is good?</span>
												<span class="email-desc">Nam vulputate cursus imperdiet. Sed sodales urna vitae ipsum iaculis, at fermentum...</span>
												<span class="email-time">3 months ago</span>
											</router-link>
										</div>
									</li>
									<li class="list-group-item">
										<div class="email-checkbox">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" data-checked="email-checkbox" id="emailCheckbox18">
												<label class="custom-control-label" for="emailCheckbox18"></label>
											</div>
										</div>
										<router-link to="/email/detail" class="email-user">
											<img src="/assets/img/user/user-5.jpg" alt="" />
										</router-link>
										<div class="email-info">
											<router-link to="/email/detail">
												<span class="email-sender">Nadine Barnes</span>
												<span class="email-title">Simple Line Icons is available on Color Admin v1.4</span>
												<span class="email-desc">Maecenas auctor dui sit amet tristique congue. Pellentesque lobortis nulla quam. Etiam in vulputate magna...</span>
												<span class="email-time">3 months ago</span>
											</router-link>
										</div>
									</li>
								</ul>
								<!-- end list-email -->
							</vue-custom-scrollbar>
							<!-- end scrollbar -->
						</div>
						<!-- end vertical-box-inner-cell -->
					</div>
					<!-- end vertical-box-cell -->
				</div>
				<!-- end vertical-box-row -->
				<!-- begin wrapper -->
				<div class="wrapper clearfix">
					<div class="btn-group pull-right">
						<button class="btn btn-white btn-sm">
							<i class="fa fa-chevron-left"></i>
						</button>
						<button class="btn btn-white btn-sm">
							<i class="fa fa-chevron-right"></i>
						</button>
					</div>
					<div class="m-t-5 text-inverse f-w-600">1,232 messages</div>
				</div>
				<!-- end wrapper -->
			</div>
			<!-- end vertical-box -->
		</div>
		<!-- end vertical-box-column -->
	</div>
	<!-- end vertical-box -->
</template>

<script>
import PageOptions from '../config/PageOptions.vue'

export default {
	data() {
		PageOptions.pageContentFullWidth = true;
		PageOptions.pageContentFullHeight = true;

		return { }
	},
	beforeRouteLeave (to, from, next) {
		PageOptions.pageContentFullWidth = false;
		PageOptions.pageContentFullHeight = false;
		next();
	}
}
</script>