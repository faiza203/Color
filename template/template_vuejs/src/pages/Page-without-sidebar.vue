<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Page Options</a></li>
			<li class="breadcrumb-item active">Page without Sidebar</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Page without Sidebar <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		
		<panel title="Panel Title Here">
			Panel Content Here
		</panel>
		
		<p>
			<a href="javascript:history.back(-1);" class="btn btn-success">
				<i class="fa fa-arrow-circle-left"></i> Back to previous page
			</a>
		</p>
	</div>
</template>


<script>
import PageOptions from '../config/PageOptions.vue'

export default {
	created() {
		PageOptions.pageWithoutSidebar = true;
	},
	beforeRouteLeave (to, from, next) {
		PageOptions.pageWithoutSidebar = false;
		next();
	}
}
</script>