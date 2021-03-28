<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Extra</a></li>
			<li class="breadcrumb-item active">Cookie Acceptance Banner</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Cookie Acceptance Banner <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		<!-- begin panel -->
		<panel title="Panel Title here">
			Panel Content Here
		</panel>
		<!-- end panel -->
		
		<div v-show="showBanner">
			<div class="alert bg-inverse-transparent-9 text-white position-fixed rounded-0 position-fixed mb-0 d-md-flex align-items-center pl-xl-5 pr-xl-5 pt-xl-4 pt-4 pb-xl-4" style="left: 0; right: 0; bottom: 0; z-index: 1020;">
				<div class="flex-fill">
					<h4>This website uses cookies</h4>
					<p class="mb-0">
						We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.
					</p>
				</div>
				<div class="pl-xl-4 pt-xl-0 pt-3">
					<button class="btn btn-outline-white btn-lg width-150" v-on:click="hideBanner()">Accept</button>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
export default {
	data() {
		return {
			showBanner: true
		}
	},
	methods: {
		hideBanner: function() {
			this.showBanner = false;
		}
	}
}
</script>