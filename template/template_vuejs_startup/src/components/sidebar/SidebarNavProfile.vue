<template>
	<ul class="nav">
		<li class="nav-profile">
			<a href="javascript:;" v-on:click="expand()">
				<div class="cover with-shadow"></div>
				<div class="image">
					<img src="/assets/img/user/user-13.jpg" alt="">
				</div>
				<div class="info">
					<b class="caret pull-right"></b>
					Sean Ngu
					<small>Front end developer</small>
				</div>
			</a>
		</li>
		<li>
			<ul class="nav nav-profile" v-bind:class="{ 'd-block': this.stat == 'expand' && !this.pageOptions.pageSidebarMinified, 'd-none': this.stat == 'collapse' }">
				<li><a href="javascript:;"><i class="fa fa-cog"></i> Settings</a></li>
				<li><a href="javascript:;"><i class="fa fa-pencil-alt"></i> Send Feedback</a></li>
				<li><a href="javascript:;"><i class="fa fa-question-circle"></i> Helps</a></li>
			</ul>
		</li>
	</ul>
</template>

<script>
import PageOptions from '../../config/PageOptions.vue'

export default {
	name: 'SidebarNavProfile',
	data() {
		return {
			stat: '',
			pageOptions: PageOptions
		}
	},
	methods: {
		expand: function() {
			this.stat = (this.stat == 'expand') ? 'collapse' : 'expand'
		}
  }
}
</script>
