<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Form Stuff</a></li>
			<li class="breadcrumb-item active">Form Plugins</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Form Plugins <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Bootstrap Date Time Picker" bodyClass="panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Default Date Time</label>
							<div class="col-md-8">
								<div class="input-group">
									<date-picker id="dateTimeInput" v-model="date" :config="options"></date-picker>
									<div class="input-group-append">
										<label for="dateTimeInput" class="input-group-text">
											<i class="fa fa-calendar"></i>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Select Time</label>
							<div class="col-md-8">
								<div class="input-group date" id="datetimepicker2">
									<date-picker id="timeInput" :config="configs.timePicker" v-model="form.time" placeholder="Time"></date-picker>
									<div class="input-group-append">
										<label for="timeInput" class="input-group-text">
											<i class="fa fa-clock"></i>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Range Pickers</label>
							<div class="col-md-8">
								<div class="row row-space-10">
									<div class="col-xs-6">
										<date-picker v-model="form.startDate" :config="configs.start" ref="startDate" v-on:dp-change="onStartChange" placeholder="Start Date"></date-picker>
									</div>
									<div class="col-xs-6">
										<date-picker v-model="form.endDate" :config="configs.end" ref="endDate" v-on:dp-change="onEndChange" placeholder="End Date"></date-picker>
									</div>
								</div>
							</div>
						</div>
					</form>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Vue Select" bodyClass="panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Vue Select Dropdown</label>
							<div class="col-md-8">
								<v-select :options="['foo','bar']"></v-select>
							</div>
						</div>
					</form>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Datepicker" bodyClass="panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Default Datepicker</label>
							<div class="col-md-8">
								<datepicker placeholder="Select Date" input-class="form-control bg-white"></datepicker>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Inline Datepicker</label>
							<div class="col-md-8">
								<datepicker :inline="true" class="inline"></datepicker>
							</div>
						</div>
					</form>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Vue Masked Input" bodyClass="panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Date</label>
							<div class="col-md-8">
								<masked-input pattern="1111/11/11" class="form-control" placeholder="yyyy/mm/dd"></masked-input>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Phone</label>
							<div class="col-md-8">
								<masked-input pattern="(111) 111-1111" class="form-control" placeholder="(999) 999-9999"></masked-input>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Tax ID</label>
							<div class="col-md-8">
								<masked-input pattern="11-1111111" class="form-control" placeholder="99-9999999"></masked-input>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Product Key</label>
							<div class="col-md-8">
								<masked-input pattern="a\*-111-a111" class="form-control" placeholder="a*-999-a999"></masked-input>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">SSN</label>
							<div class="col-md-8">
								<masked-input pattern="111/11/1111" class="form-control" placeholder="999/99/9999"></masked-input>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">SSN</label>
							<div class="col-md-8">
								<masked-input pattern="AAA-1111-A" class="form-control" placeholder="AAA-9999-A"></masked-input>
							</div>
						</div>
					</form>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Vue Colorpicker" bodyClass="panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Default Colorpicker</label>
							<div class="col-md-8">
								<div class="input-group">
									<input type="text" v-model="colorpicker.color1" class="form-control bg-white" />
									<span class="input-group-append">
										<span class="input-group-text pt-1 pb-1">
											<vue-colorpicker v-model="colorpicker.color1"></vue-colorpicker>
										</span>
									</span>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Sketch Type Colorpicker</label>
							<div class="col-md-8">
								<div class="input-group">
									<input type="text" v-model="colorpicker.color2" class="form-control bg-white" />
									<span class="input-group-append">
										<span class="input-group-text pt-1 pb-1">
											<vue-colorpicker type="sketch" v-model="colorpicker.color2"></vue-colorpicker>
										</span>
									</span>
								</div>
							</div>
						</div>
					</form>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Vue Slider Component" bodyClass="panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Default Slider</label>
							<div class="col-md-8">
								<vue-slider v-bind="sliderDefault" v-model="sliderDefault.value"></vue-slider>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">With Interval</label>
							<div class="col-md-8">
								<vue-slider v-bind="sliderInterval"></vue-slider>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">With Label</label>
							<div class="col-md-8">
								<vue-slider v-bind="sliderLabel" v-model="sliderLabel.value"></vue-slider>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Formatter</label>
							<div class="col-md-8">
								<vue-slider v-bind="sliderFormatter" v-model="sliderFormatter.value"></vue-slider>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Fixed Range</label>
							<div class="col-md-8">
								<vue-slider v-bind="sliderFixedRange" v-model="sliderFixedRange.value"></vue-slider>
							</div>
						</div>
					</form>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Vue Input Tag" bodyClass="panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Default Input Tag</label>
							<div class="col-md-8">
								<input-tag :tags="tagsArray" class="form-control default"></input-tag>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Inverse Theme</label>
							<div class="col-md-8">
								<input-tag :tags="tagsArray" class="form-control inverse"></input-tag>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">White Theme</label>
							<div class="col-md-8">
								<input-tag :tags="tagsArray" class="form-control white"></input-tag>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Primary Theme</label>
							<div class="col-md-8">
								<input-tag :tags="tagsArray" class="form-control"></input-tag>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Info Theme</label>
							<div class="col-md-8">
								<input-tag :tags="tagsArray" class="form-control info"></input-tag>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Success Theme</label>
							<div class="col-md-8">
								<input-tag :tags="tagsArray" class="form-control success"></input-tag>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Warning Theme</label>
							<div class="col-md-8">
								<input-tag :tags="tagsArray" class="form-control warning"></input-tag>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-md-4 col-form-label">Danger Theme</label>
							<div class="col-md-8">
								<input-tag :tags="tagsArray" class="form-control danger"></input-tag>
							</div>
						</div>
					</form>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->
	</div>
</template>

<script>

export default {
	data () {
		return {
			colorpicker: {
				color1: 'rgb(135,83,222,0.8)',
				color2: 'rgb(52,143,226)'
			},
			sliderDefault: {
				value: 9,
				max: 25
			},
			sliderLabel: {
				value: '2018-10-08',
				width: '80%',
				tooltip: 'always',
				disabled: false,
				piecewise: true,
				piecewiseLabel: true,
				style: {
					'marginLeft': '10%'
				},
				data: [
					'2016-10-05',
					'2016-10-06',
					'2016-10-07'
				]
			},
			sliderInterval: {
				lazy: true,
				interval: 5,
				max: 25,
				piecewise: true
			},
			sliderFormatter: {
				value: [ 0, 96 ],
				min: 0,
				max: 500,
				disabled: false,
				show: true,
				useKeyboard: true,
				tooltip: 'always',
				formatter: '¥{value}',
				mergeFormatter: '¥{value1} ~ ¥{value2}'
			},
			sliderFixedRange: {
				value: [ 45, 65 ],
				min: 0,
				max: 100,
				interval: 1,
				fixed: true,
				processDragable: true
			},
			tagsArray: ['tags1', 'tags2'],
			date: new Date(),
			options: {
				format: 'DD/MM/YYYY',
				useCurrent: false,
			},
			form: {
				time: null,
				startDate: null,
				endDate: null
			},
			configs: {
				timePicker: {
					format: 'LT',
					useCurrent: false
				},
				start: {
					format: 'DD/MM/YYYY',
					useCurrent: false,
					showClear: true,
					showClose: true,
					minDate: new Date(),
					maxDate: false
				},
				end: {
					format: 'DD/MM/YYYY',
					useCurrent: false,
					showClear: true,
					showClose: true,
					minDate: new Date()
				}
			}   
		}
	},
	methods: {
		onStartChange(e) {
			this.$set(this.configs.end, 'minDate', e.date || null);
		},
		onEndChange(e) {
			this.$set(this.configs.start, 'maxDate', e.date || null);
		}
	}
}
</script>