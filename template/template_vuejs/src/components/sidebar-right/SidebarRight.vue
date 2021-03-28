<template>
	<div>
		<!-- begin #sidebar-right -->
		<div id="sidebar-right" class="sidebar sidebar-right">
			<!-- begin sidebar scrollbar -->
			<vue-custom-scrollbar class="height-full">
				<!-- begin sidebar user -->
				<ul class="nav">
					<li class="nav-widget p-0">
						<p class="text-white p-15 m-0">Accordion</p>
						<!-- begin #accordion -->
						<div id="accordion" class="accordion">
							<!-- begin b-card -->
							<b-card class="bg-dark text-white" no-body>
								<b-card-header header-tag="header" class="card-header bg-dark-darker b-0 text-white pointer-cursor d-flex align-items-center" v-b-toggle.accordion1>
									Accordion #1
									<i class="fa fa-plus-circle text-blue ml-auto mr-0"></i>
								</b-card-header>
								<b-collapse id="accordion1" visible accordion="my-accordion">
									<b-card-body>
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
									</b-card-body>
								</b-collapse>
							</b-card>
							<!-- end b-card -->
							<!-- begin b-card -->
							<b-card class="bg-dark text-white" no-body>
								<b-card-header header-tag="header" class="card-header bg-dark-darker b-0 text-white pointer-cursor d-flex align-items-center" v-b-toggle.accordion2>
									Accordion #2
									<i class="fa fa-plus-circle text-purple ml-auto mr-0"></i>
								</b-card-header>
								<b-collapse id="accordion2" accordion="my-accordion">
									<b-card-body>
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
									</b-card-body>
								</b-collapse>
							</b-card>
							<!-- end b-card -->
							<!-- begin b-card -->
							<b-card class="bg-dark text-white" no-body>
								<b-card-header header-tag="header" class="card-header bg-dark-darker b-0 text-white pointer-cursor d-flex align-items-center" v-b-toggle.accordion3>
									Accordion #3
									<i class="fa fa-plus-circle text-teal ml-auto mr-0"></i>
								</b-card-header>
								<b-collapse id="accordion3" accordion="my-accordion">
									<b-card-body>
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
									</b-card-body>
								</b-collapse>
							</b-card>
							<!-- end b-card -->
							<!-- begin b-card -->
							<b-card class="bg-dark text-white" no-body>
								<b-card-header header-tag="header" class="card-header bg-dark-darker b-0 text-white pointer-cursor d-flex align-items-center" v-b-toggle.accordion4>
									Accordion #4
									<i class="fa fa-plus-circle text-info ml-auto mr-0"></i>
								</b-card-header>
								<b-collapse id="accordion4" accordion="my-accordion">
									<b-card-body>
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
									</b-card-body>
								</b-collapse>
							</b-card>
							<!-- end b-card -->
							<!-- begin b-card -->
							<b-card class="bg-dark text-white" no-body>
								<b-card-header header-tag="header" class="card-header bg-dark-darker b-0 text-white pointer-cursor d-flex align-items-center" v-b-toggle.accordion5>
									Accordion #5
									<i class="fa fa-plus-circle text-warning ml-auto mr-0"></i>
								</b-card-header>
								<b-collapse id="accordion5" accordion="my-accordion">
									<b-card-body>
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
									</b-card-body>
								</b-collapse>
							</b-card>
							<!-- end b-card -->
							<!-- begin b-card -->
							<b-card class="bg-dark text-white" no-body>
								<b-card-header header-tag="header" class="card-header bg-dark-darker b-0 text-white pointer-cursor d-flex align-items-center" v-b-toggle.accordion6>
									Accordion #6
									<i class="fa fa-plus-circle text-danger ml-auto mr-0"></i>
								</b-card-header>
								<b-collapse id="accordion6" accordion="my-accordion">
									<b-card-body>
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
									</b-card-body>
								</b-collapse>
							</b-card>
							<!-- end b-card -->
							<!-- begin b-card -->
							<b-card class="bg-dark text-white" no-body>
								<b-card-header header-tag="header" class="card-header bg-dark-darker b-0 text-white pointer-cursor d-flex align-items-center" v-b-toggle.accordion7>
									Accordion #7
									<i class="fa fa-plus-circle text-muted ml-auto mr-0"></i>
								</b-card-header>
								<b-collapse id="accordion7" accordion="my-accordion">
									<b-card-body>
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
									</b-card-body>
								</b-collapse>
							</b-card>
							<!-- end b-card -->
						</div>
						<!-- end #accordion -->
					</li>
				</ul>
				<!-- end sidebar user -->
			</vue-custom-scrollbar>
			<!-- end sidebar scrollbar -->
		</div>
		<div class="sidebar-bg sidebar-right"></div>
		<!-- end #sidebar-right -->
	</div>
</template>

<script>
import PageOptions from '../../config/PageOptions.vue'

export default {
  name: 'SidebarRight',
  data() {
		return {
			pageOptions: PageOptions
		}
  }
}
</script>
