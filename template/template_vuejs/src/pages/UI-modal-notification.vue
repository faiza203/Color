<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
			<li class="breadcrumb-item active">Modal & Notification</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Modal & Notification <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel>
					<template slot="header">
						<h4 class="panel-title">Vue Notification <span class="label label-success">NEW</span></h4>
					</template>
					
					<table class="table">
						<thead>
							<tr>
								<th>Description</th>
								<th>Demo</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><b class="text-inverse">Bottom Left</b> Success Animation</td>
								<td><a href="javascript:;" v-on:click="show('bottom-left', 'success')" class="btn btn-sm btn-inverse">Demo</a></td>
							</tr>
							<tr>
								<td><b class="text-inverse">Bottom Left</b> Warning Animation</td>
								<td><a href="javascript:;" v-on:click="show('bottom-left', 'warn')" class="btn btn-sm btn-primary">Demo</a></td>
							</tr>
							<tr>
								<td><b class="text-inverse">Bottom Left</b> Error Animation</td>
								<td><a href="javascript:;" v-on:click="show('bottom-left', 'error')" class="btn btn-sm btn-info">Demo</a></td>
							</tr>
							<tr>
								<td><b class="text-inverse">Bottom Right</b> Success Animation</td>
								<td><a href="javascript:;" v-on:click="show('bottom-right', 'success')" class="btn btn-sm btn-success">Demo</a></td>
							</tr>
							<tr>
								<td><b class="text-inverse">Bottom Right</b> Warning Animation</td>
								<td><a href="javascript:;" v-on:click="show('bottom-right', 'warn')" class="btn btn-sm btn-warning">Demo</a></td>
							</tr>
							<tr>
								<td><b class="text-inverse">Bottom Right</b> Error Animation</td>
								<td><a href="javascript:;" v-on:click="show('bottom-right', 'error')" class="btn btn-sm btn-danger">Demo</a></td>
							</tr>
							<tr>
								<td><b class="text-inverse">Top Center</b> Custom style</td>
								<td><a href="javascript:;" v-on:click="show('custom-style')" class="btn btn-sm btn-default">Demo</a></td>
							</tr>
							<tr>
								<td><b class="text-inverse">Top Left</b> Custom template</td>
								<td><a href="javascript:;" v-on:click="show('custom-template')" class="btn btn-sm btn-white">Demo</a></td>
							</tr>
						</tbody>
					</table>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Modal">
					<table class="table">
						<thead>
							<tr>
								<th>Description</th>
								<th>Demo</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Default Modal Dialog Box.</td>
								<td><button v-b-modal.modalDialog class="btn btn-sm btn-success">Demo</button></td>
							</tr>
							<tr>
								<td>Modal Dialog Box with fade out animation.</td>
								<td><button v-b-modal.modalWithoutAnimation class="btn btn-sm btn-default">Demo</button></td>
							</tr>
							<tr>
								<td>Modal Dialog Box with full width white background.</td>
								<td><button v-b-modal.modalMessage class="btn btn-sm btn-primary">Demo</button></td>
							</tr>
							<tr>
								<td>Modal Dialog Box with alert message.</td>
								<td><button v-b-modal.modalAlert class="btn btn-sm btn-danger">Demo</button></td>
							</tr>
						</tbody>
					</table>
					<!-- #modal-dialog -->
					<b-modal id="modalDialog" cancel-variant="default" title="Modal Dialog">
						<p>
							Modal body content here...
						</p>
					</b-modal>
					
					<!-- #modal-without-animation -->
					<b-modal id="modalWithoutAnimation" no-fade cancel-variant="default" title="Modal Without Animation">
						<p>
							Modal body content here...
						</p>
					</b-modal>
					
					<!-- #modal-message -->
					<b-modal id="modalMessage" title="Modal Message Header" cancel-variant="default" class="modal-message">
						<p>Text in a modal</p>
						<p>Do you want to turn on location services so GPS can use your location ?</p>
					</b-modal>
					
					<!-- #modal-alert -->
					<b-modal id="modalAlert" title="Alert Header" cancel-variant="white" ok-variant="danger">
						<div class="alert alert-danger m-b-0">
							<h5><i class="fa fa-info-circle"></i> Alert Header</h5>
							<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
						</div>
					</b-modal>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Modal">
					<template slot="header">
						<h4 class="panel-title">Bootstrap SweetAlert <span class="label label-success">NEW</span></h4>
					</template>
					
					<p class="lead m-b-10 text-inverse">
						SweetAlert for Bootstrap. A beautiful replacement for JavaScript's "alert"
					</p>
					<hr />
					<p class="">
						Try any of those!
					</p>
					<a href="javascript:;" v-on:click="swalNotification('question')" class="btn btn-primary m-r-5">Primary</a>
					<a href="javascript:;" v-on:click="swalNotification('info')" class="btn btn-info m-r-5">Info</a>
					<a href="javascript:;" v-on:click="swalNotification('success')" class="btn btn-success m-r-5">Success</a>
					<a href="javascript:;" v-on:click="swalNotification('warning')" class="btn btn-warning m-r-5">Warning</a>
					<a href="javascript:;" v-on:click="swalNotification('error')" class="btn btn-danger m-r-5">Danger</a>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->
		
		<!-- bottom left vue-notification -->
		<notifications group="bottom-left" position="bottom left" :speed="500" />

		<!-- bottom right animation example -->
		<notifications group="bottom-right" position="bottom right" :speed="500" />

		<!-- Custom style example -->
		<notifications group="custom-style" position="top center" classes="n-light" :max="3" :width="400"/>

		<!-- Custom template example -->
		<notifications group="custom-template" :duration="5000" :width="500" animation-name="v-fade-left" position="top left">
			<template slot="body" slot-scope="props">
				<div class="notification custom">
					<div class="custom-icon">
						<i class="icon fa fa-clipboard-check"></i>
					</div>
					<div class="custom-content">
						<div class="custom-title">
							{{props.item.title}}
							<p>
								Random number: {{props.item.data.randomNumber}}
							</p>
						</div>
						<div class="custom-text" v-html="props.item.text"></div>
					</div>
					<div class="custom-close" @click="props.close">
						<i class="icon fa fa-times"></i>
					</div>
				</div>
			</template>
		</notifications>
	</div>
</template>

<script>
	export default {
		methods: {
			show (group, type = '') {
				const text = `
					This is notification text!
					<br>
					Date: ${new Date()}
				`
				this.$notify({
					group,
					title: `Test ${type} notification #${this.id++}`,
					text,
					type,
					data: {
						randomNumber: Math.random()
					}
				})
			},
			clean (group) {
				this.$notify({ group, clean: true })
			},
			swalNotification(swalType) {
				var btnClass = (swalType == 'error') ? 'danger' : swalType;
					btnClass = (swalType == 'question') ? 'primary' : btnClass;
				this.$swal({
					title: 'Are you sure?',
					text: 'You will not be able to recover this imaginary file!',
					type: swalType,
					showCancelButton: true,
					buttonsStyling: false,
					confirmButtonText: swalType.charAt(0).toUpperCase() + swalType.substr(1).toLowerCase(),
					cancelButtonText: 'Cancel',
					confirmButtonClass: 'btn m-r-5 btn-'+ btnClass +'',
					cancelButtonClass: 'btn btn-default',
				})
			}
		}
	}
</script>