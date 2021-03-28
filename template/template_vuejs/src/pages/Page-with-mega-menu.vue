<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Page Options</a></li>
			<li class="breadcrumb-item active">Page with Mega Menu</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Page with Mega Menu <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		
		<!-- begin panel -->
		<panel title="Panel Title here">
			Panel Content Here
		</panel>
		<!-- end panel -->
	</div>
</template>

<script>
import PageOptions from '../config/PageOptions.vue'

export default {
	created() {
		PageOptions.pageWithMegaMenu = true;
	},
	beforeRouteLeave (to, from, next) {
		PageOptions.pageWithMegaMenu = false;
		next();
	}
}
</script>