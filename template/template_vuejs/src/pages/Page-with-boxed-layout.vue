<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Page Options</a></li>
			<li class="breadcrumb-item active">Page with Boxed Layout</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Page with Boxed Layout <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		
		<!-- begin panel -->
		<panel title="Panel Title here">
			Panel Content Here
		</panel>
		<!-- end panel -->
	</div>
</template>

<script>
export default {
	created() {
		document.body.className = document.body.className + ' boxed-layout';
	},
	beforeRouteLeave (to, from, next) {
		document.body.className = document.body.className.replace('boxed-layout');
		next();
	}
}
</script>