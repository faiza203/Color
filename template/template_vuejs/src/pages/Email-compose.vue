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
					<span class="btn-group m-r-5">
						<a href="javascript:;" class="btn btn-white btn-sm"><i class="fa fa-envelope m-r-3 m-r-xs-0"></i> <span class="hidden-xs">Send</span></a>
						<a href="javascript:;" class="btn btn-white btn-sm"><i class="fa fa-paperclip m-r-3 m-r-xs-0"></i> <span class="hidden-xs">Attach</span></a>
					</span>
					<span class="dropdown">
						<a href="#" class="btn btn-white btn-sm" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></a>
						<ul class="dropdown-menu dropdown-menu-left">
							<li><a href="javascript:;">Save draft</a></li>
							<li><a href="javascript:;">Show From</a></li>
							<li><a href="javascript:;">Check names</a></li>
							<li><a href="javascript:;">Switch to plain text</a></li>
							<li><a href="javascript:;">Check for accessibility issues</a></li>
						</ul>
					</span>
					<span class="pull-right">
						<router-link to="/email/inbox" class="btn btn-white btn-sm"><i class="fa fa-times m-r-3 m-r-xs-0"></i> <span class="d-none d-xl-inline">Discard</span></router-link>
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
							<vue-custom-scrollbar class="height-full p-15">
								<!-- begin email form -->
								<form action="/" method="POST" name="email_to_form">
									<!-- begin email to -->
									<div class="email-to">
										<span class="float-right-link">
											<a href="#" v-on:click.prevent="handleCc('cc')" v-show="!email.cc" class="m-r-5">Cc</a>
											<a href="#" v-on:click.prevent="handleCc('bcc')" v-show="!email.bcc" data-name="Bcc">Bcc</a>
										</span>
										<label class="control-label">To:</label>
										<div class="email-to-input">
											<input-tag :tags.sync="tagsArray"></input-tag>
										</div>
									</div>
									<!-- end email to -->
									
									<!-- begin email to -->
									<div class="email-to" v-show="email.cc">
										<label class="control-label">Cc:</label>
										<div class="email-to-input">
											<input-tag></input-tag>
										</div>
									</div>
									<!-- end email to -->
									
									<!-- begin email to -->
									<div class="email-to" v-show="email.bcc">
										<label class="control-label">Bcc:</label>
										<div class="email-to-input">
											<input-tag></input-tag>
										</div>
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
										<Vueditor v-bind:style="{ height: editor.height + 'px' }"></Vueditor>
									</div>
									<!-- end email content -->
								</form>
								<!-- end email form -->
							</vue-custom-scrollbar>
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
</template>

<script>
import PageOptions from '../config/PageOptions.vue'

export default {
	data() {
		PageOptions.pageContentFullWidth = true;
		PageOptions.pageContentFullHeight = true;

		return { 
			editor: {
				height: (window.innerHeight > 600) ? window.innerHeight - 315 : 300
			},
			tagsArray: [
				'bootstrap@gmail.com', 'google@gmail.com'
			],
			email: {
				cc: false,
				bcc: false
			}
		}
	},
	beforeRouteLeave (to, from, next) {
		PageOptions.pageContentFullWidth = false;
		PageOptions.pageContentFullHeight = false;
		next();
	},
	methods: {
		handleCc: function(type) {
			if (type == 'cc') {
				this.email.cc = true;
			} else if (type == 'bcc') {
				this.email.bcc = true;
			}
		}
	}
}
</script>