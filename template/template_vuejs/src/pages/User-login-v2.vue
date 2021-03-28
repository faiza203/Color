<template>
	<div>
		<!-- begin login-cover -->
		<div class="login-cover">
			<div class="login-cover-image" v-bind:style="{ backgroundImage: 'url('+ bg.activeImg +')' }"></div>
			<div class="login-cover-bg"></div>
		</div>
		<!-- end login-cover -->
		
		<!-- begin login -->
		<div class="login login-v2" data-pageload-addclass="animated fadeIn">
			<!-- begin brand -->
			<div class="login-header">
				<div class="brand">
					<span class="logo"></span> <b>Color</b> Admin
					<small>responsive bootstrap 4 admin template</small>
				</div>
				<div class="icon">
					<i class="fa fa-lock"></i>
				</div>
			</div>
			<!-- end brand -->
			<!-- begin login-content -->
			<div class="login-content">
				<form v-on:submit="checkForm" method="POST" class="margin-bottom-0">
					<div class="form-group m-b-20">
						<input type="text" class="form-control form-control-lg" placeholder="Email Address" required />
					</div>
					<div class="form-group m-b-20">
						<input type="password" class="form-control form-control-lg" placeholder="Password" required />
					</div>
					<div class="checkbox checkbox-css m-b-20">
						<input type="checkbox" id="remember_checkbox" /> 
						<label for="remember_checkbox">
							Remember Me
						</label>
					</div>
					<div class="login-buttons">
						<button type="submit" class="btn btn-success btn-block btn-lg">Sign me in</button>
					</div>
					<div class="m-t-20">
						Not a member yet? Click <a href="javascript:;">here</a> to register.
					</div>
				</form>
			</div>
			<!-- end login-content -->
		</div>
		<!-- end login -->
		
		<!-- begin login-bg -->
		<ul class="login-bg-list clearfix">
			<li v-bind:class="{ 'active': bg.bg1.active }"><a href="javascript:;" v-on:click="select('bg1')" style="background-image: url(/assets/img/login-bg/login-bg-17.jpg)"></a></li>
			<li v-bind:class="{ 'active': bg.bg2.active }"><a href="javascript:;" v-on:click="select('bg2')" style="background-image: url(/assets/img/login-bg/login-bg-16.jpg)"></a></li>
			<li v-bind:class="{ 'active': bg.bg3.active }"><a href="javascript:;" v-on:click="select('bg3')" style="background-image: url(/assets/img/login-bg/login-bg-15.jpg)"></a></li>
			<li v-bind:class="{ 'active': bg.bg4.active }"><a href="javascript:;" v-on:click="select('bg4')" style="background-image: url(/assets/img/login-bg/login-bg-14.jpg)"></a></li>
			<li v-bind:class="{ 'active': bg.bg5.active }"><a href="javascript:;" v-on:click="select('bg5')" style="background-image: url(/assets/img/login-bg/login-bg-13.jpg)"></a></li>
			<li v-bind:class="{ 'active': bg.bg6.active }"><a href="javascript:;" v-on:click="select('bg6')" style="background-image: url(/assets/img/login-bg/login-bg-12.jpg)"></a></li>
		</ul>
		<!-- end login-bg -->
	</div>
</template>

<script>
import PageOptions from '../config/PageOptions.vue'

export default {
	created() {
		PageOptions.pageEmpty = true;
	},
	beforeRouteLeave (to, from, next) {
		PageOptions.pageEmpty = false;
		next();
	},
	data() {
		return {
			bg: {
				activeImg: '/assets/img/login-bg/login-bg-17.jpg',
				bg1: {
					active: true,
					img: '/assets/img/login-bg/login-bg-17.jpg'
				},
				bg2: {
					active: false,
					img: '/assets/img/login-bg/login-bg-16.jpg'
				},
				bg3: {
					active: false,
					img: '/assets/img/login-bg/login-bg-15.jpg'
				},
				bg4: {
					active: false,
					img: '/assets/img/login-bg/login-bg-14.jpg'
				},
				bg5: {
					active: false,
					img: '/assets/img/login-bg/login-bg-13.jpg'
				},
				bg6: {
					active: false,
					img: '/assets/img/login-bg/login-bg-12.jpg'
				}
			}
		}
	},
	methods: {
		checkForm: function(e) {
			e.preventDefault();
			this.$router.push({ path: '/dashboard/v2'})
		},
		select: function(x) {
			this.bg.bg1.active = false;
			this.bg.bg2.active = false;
			this.bg.bg3.active = false;
			this.bg.bg4.active = false;
			this.bg.bg5.active = false;
			this.bg.bg6.active = false;
			
			switch (x) {
				case 'bg1': 
					this.bg.bg1.active = true;
					this.bg.activeImg = this.bg.bg1.img;
					break;
				case 'bg2': 
					this.bg.bg2.active = true;
					this.bg.activeImg = this.bg.bg2.img;
					break;
				case 'bg3': 
					this.bg.bg3.active = true;
					this.bg.activeImg = this.bg.bg3.img;
					break;
				case 'bg4': 
					this.bg.bg4.active = true;
					this.bg.activeImg = this.bg.bg4.img;
					break;
				case 'bg5': 
					this.bg.bg5.active = true;
					this.bg.activeImg = this.bg.bg5.img;
					break;
				case 'bg6': 
					this.bg.bg6.active = true;
					this.bg.activeImg = this.bg.bg6.img;
					break;
			}
		}
	}
}
</script>