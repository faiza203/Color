@extends('layouts.default')

@section('title', 'Form Plugins')

@push('css')
	<link href="/assets/plugins/bootstrap-datepicker/dist/css/bootstrap-datepicker.css" rel="stylesheet" />
	<link href="/assets/plugins/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css" rel="stylesheet" />
	<link href="/assets/plugins/ion-rangeslider/css/ion.rangeSlider.min.css" rel="stylesheet" />
	<link href="/assets/plugins/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css" rel="stylesheet" />
	<link href="/assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet" />
	<link href="/assets/plugins/@danielfarrell/bootstrap-combobox/css/bootstrap-combobox.css" rel="stylesheet" />
	<link href="/assets/plugins/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet" />
	<link href="/assets/plugins/tag-it/css/jquery.tagit.css" rel="stylesheet" />
	<link href="/assets/plugins/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet" />
	<link href="/assets/plugins/select2/dist/css/select2.min.css" rel="stylesheet" />
	<link href="/assets/plugins/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css" rel="stylesheet" />
	<link href="/assets/plugins/bootstrap-colorpalette/css/bootstrap-colorpalette.css" rel="stylesheet" />
	<link href="/assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.css" rel="stylesheet" />
	<link href="/assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-fontawesome.css" rel="stylesheet" />
	<link href="/assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-glyphicons.css" rel="stylesheet" />
@endpush

@section('content')
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
			<div class="panel panel-inverse" data-sortable-id="form-plugins-1">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Bootstrap Date Time Picker</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Default Date Time</label>
							<div class="col-lg-8">
								<div class="input-group date" id="datetimepicker1">
									<input type="text" class="form-control" />
									<div class="input-group-addon">
										<i class="fa fa-calendar"></i>
									</div>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Custom Format</label>
							<div class="col-lg-8">
								<div class="input-group date" id="datetimepicker2">
									<input type="text" class="form-control" />
									<span class="input-group-addon">
									<i class="fa fa-clock"></i>
									</span>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Linked Pickers</label>
							<div class="col-lg-8">
								<div class="row row-space-10">
									<div class="col-xs-6 mb-2 mb-sm-0">
										<input type="text" class="form-control"  id="datetimepicker3" placeholder="Min Date" />
									</div>
									<div class="col-xs-6">
										<input type="text" class="form-control" id="datetimepicker4" placeholder="Max Date" />
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-plugins-2">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Bootstrap Date Range Picker</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Default Date Ranges</label>
							<div class="col-lg-8">
								<div class="input-group" id="default-daterange">
									<input type="text" name="default-daterange" class="form-control" value="" placeholder="click to select the date range" />
									<span class="input-group-append">
									<span class="input-group-text"><i class="fa fa-calendar"></i></span>
									</span>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Advance Date Ranges</label>
							<div class="col-lg-8">
								<div id="advance-daterange" class="btn btn-default btn-block text-left f-s-12">
									<i class="fa fa-caret-down pull-right m-t-2"></i>
									<span></span>
								</div>
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-plugins-3">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Select2</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Basic Select2</label>
							<div class="col-lg-8">
								<select class="default-select2 form-control">
									<optgroup label="Alaskan/Hawaiian Time Zone">
										<option value="AK">Alaska</option>
										<option value="HI">Hawaii</option>
									</optgroup>
									<optgroup label="Pacific Time Zone">
										<option value="CA">California</option>
										<option value="NV">Nevada</option>
										<option value="OR">Oregon</option>
										<option value="WA">Washington</option>
									</optgroup>
									<optgroup label="Mountain Time Zone">
										<option value="AZ">Arizona</option>
										<option value="CO">Colorado</option>
										<option value="ID">Idaho</option>
										<option value="MT">Montana</option>
										<option value="NE">Nebraska</option>
										<option value="NM">New Mexico</option>
										<option value="ND">North Dakota</option>
										<option value="UT">Utah</option>
										<option value="WY">Wyoming</option>
									</optgroup>
									<optgroup label="Central Time Zone">
										<option value="AL">Alabama</option>
										<option value="AR">Arkansas</option>
										<option value="IL">Illinois</option>
										<option value="IA">Iowa</option>
										<option value="KS">Kansas</option>
										<option value="KY">Kentucky</option>
										<option value="LA">Louisiana</option>
										<option value="MN">Minnesota</option>
										<option value="MS">Mississippi</option>
										<option value="MO">Missouri</option>
										<option value="OK">Oklahoma</option>
										<option value="SD">South Dakota</option>
										<option value="TX">Texas</option>
										<option value="TN">Tennessee</option>
										<option value="WI">Wisconsin</option>
									</optgroup>
									<optgroup label="Eastern Time Zone">
										<option value="CT">Connecticut</option>
										<option value="DE">Delaware</option>
										<option value="FL">Florida</option>
										<option value="GA">Georgia</option>
										<option value="IN">Indiana</option>
										<option value="ME">Maine</option>
										<option value="MD">Maryland</option>
										<option value="MA">Massachusetts</option>
										<option value="MI">Michigan</option>
										<option value="NH">New Hampshire</option>
										<option value="NJ">New Jersey</option>
										<option value="NY">New York</option>
										<option value="NC">North Carolina</option>
										<option value="OH">Ohio</option>
										<option value="PA">Pennsylvania</option>
										<option value="RI">Rhode Island</option>
										<option value="SC">South Carolina</option>
										<option value="VT">Vermont</option>
										<option value="VA">Virginia</option>
										<option value="WV">West Virginia</option>
									</optgroup>
								</select>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Multiple Selection</label>
							<div class="col-lg-8">
								<select class="multiple-select2 form-control" multiple="multiple">
									<optgroup label="Alaskan/Hawaiian Time Zone">
										<option value="AK">Alaska</option>
										<option value="HI">Hawaii</option>
									</optgroup>
									<optgroup label="Pacific Time Zone">
										<option value="CA">California</option>
										<option value="NV">Nevada</option>
										<option value="OR">Oregon</option>
										<option value="WA">Washington</option>
									</optgroup>
									<optgroup label="Mountain Time Zone">
										<option value="AZ">Arizona</option>
										<option value="CO">Colorado</option>
										<option value="ID">Idaho</option>
										<option value="MT">Montana</option>
										<option value="NE">Nebraska</option>
										<option value="NM">New Mexico</option>
										<option value="ND">North Dakota</option>
										<option value="UT">Utah</option>
										<option value="WY">Wyoming</option>
									</optgroup>
									<optgroup label="Central Time Zone">
										<option value="AL">Alabama</option>
										<option value="AR">Arkansas</option>
										<option value="IL">Illinois</option>
										<option value="IA">Iowa</option>
										<option value="KS">Kansas</option>
										<option value="KY">Kentucky</option>
										<option value="LA">Louisiana</option>
										<option value="MN">Minnesota</option>
										<option value="MS">Mississippi</option>
										<option value="MO">Missouri</option>
										<option value="OK">Oklahoma</option>
										<option value="SD">South Dakota</option>
										<option value="TX">Texas</option>
										<option value="TN">Tennessee</option>
										<option value="WI">Wisconsin</option>
									</optgroup>
									<optgroup label="Eastern Time Zone">
										<option value="CT">Connecticut</option>
										<option value="DE">Delaware</option>
										<option value="FL">Florida</option>
										<option value="GA">Georgia</option>
										<option value="IN">Indiana</option>
										<option value="ME">Maine</option>
										<option value="MD">Maryland</option>
										<option value="MA">Massachusetts</option>
										<option value="MI">Michigan</option>
										<option value="NH">New Hampshire</option>
										<option value="NJ">New Jersey</option>
										<option value="NY">New York</option>
										<option value="NC">North Carolina</option>
										<option value="OH">Ohio</option>
										<option value="PA">Pennsylvania</option>
										<option value="RI">Rhode Island</option>
										<option value="SC">South Carolina</option>
										<option value="VT">Vermont</option>
										<option value="VA">Virginia</option>
										<option value="WV">West Virginia</option>
									</optgroup>
								</select>
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-plugins-4">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Datepicker</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Default Datepicker</label>
							<div class="col-lg-8">
								<input type="text" class="form-control" id="datepicker-default" placeholder="Select Date" value="04/1/2014" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Inline Datepicker</label>
							<div class="col-lg-8">
								<div id="datepicker-inline">
									<div></div>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Auto Close Datepicker</label>
							<div class="col-lg-8">
								<input type="text" class="form-control" id="datepicker-autoClose" placeholder="Auto Close Datepicker" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Disabled Past Date</label>
							<div class="col-lg-8">
								<div class="input-group date" id="datepicker-disabled-past" data-date-format="dd-mm-yyyy" data-date-start-date="Date.default">
									<input type="text" class="form-control" placeholder="Select Date" />
									<span class="input-group-addon"><i class="fa fa-calendar"></i></span>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Range Datepicker</label>
							<div class="col-lg-8">
								<div class="input-group input-daterange">
									<input type="text" class="form-control" name="start" placeholder="Date Start" />
									<span class="input-group-addon">to</span>
									<input type="text" class="form-control" name="end" placeholder="Date End" />
								</div>
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-plugins-5">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">jQuery Autocomplete</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Autocomplete</label>
							<div class="col-lg-8">
								<input type="text" name="" id="jquery-autocomplete" class="form-control" placeholder="Try typing 'a' or 'b'." />
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-plugins-6">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Bootstrap Combobox</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Bootstrap Combobox</label>
							<div class="col-lg-8">
								<select class="combobox">
									<option value="">Select Location</option>
									<option value="PA">Pennsylvania</option>
									<option value="CT">Connecticut</option>
									<option value="NY">New York</option>
									<option value="MD">Maryland</option>
									<option value="VA">Virginia</option>
								</select>
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-plugins-7">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Select with Search</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Default</label>
							<div class="col-lg-8">
								<p class="mb-2">Convert this</p>
								<select class="form-control mb-3">
									<option value="" selected>Select a Country</option>
									<option value="AF">Afghanistan</option>
									<option value="AL">Albania</option>
									<option value="DZ">Algeria</option>
									<option value="AS">American Samoa</option>
									<option value="AD">Andorra</option>
									<option value="AO">Angola</option>
									<option value="AI">Anguilla</option>
									<option value="AQ">Antarctica</option>
									<option value="AG">Antigua and Barbuda</option>
								</select>
								<p class="mb-2">Become this</p>
								<select class="form-control selectpicker" data-size="10" data-live-search="true">
									<option value="" selected>Select a Country</option>
									<option value="AF">Afghanistan</option>
									<option value="AL">Albania</option>
									<option value="DZ">Algeria</option>
									<option value="AS">American Samoa</option>
									<option value="AD">Andorra</option>
									<option value="AO">Angola</option>
									<option value="AI">Anguilla</option>
									<option value="AQ">Antarctica</option>
									<option value="AG">Antigua and Barbuda</option>
								</select>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Theme White</label>
							<div class="col-lg-8">
								<select class="form-control selectpicker" data-size="10" data-live-search="true" data-style="btn-white">
									<option value="" selected>Select a Country</option>
									<option value="AF">Afghanistan</option>
									<option value="AL">Albania</option>
									<option value="DZ">Algeria</option>
									<option value="AS">American Samoa</option>
									<option value="AD">Andorra</option>
									<option value="AO">Angola</option>
									<option value="AI">Anguilla</option>
									<option value="AQ">Antarctica</option>
									<option value="AG">Antigua and Barbuda</option>
								</select>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Theme Inverse</label>
							<div class="col-lg-8">
								<select class="form-control selectpicker" data-size="10" data-live-search="true" data-style="btn-inverse">
									<option value="" selected>Select a Country</option>
									<option value="AF">Afghanistan</option>
									<option value="AL">Albania</option>
									<option value="DZ">Algeria</option>
									<option value="AS">American Samoa</option>
									<option value="AD">Andorra</option>
									<option value="AO">Angola</option>
									<option value="AI">Anguilla</option>
									<option value="AQ">Antarctica</option>
									<option value="AG">Antigua and Barbuda</option>
								</select>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Theme Primary</label>
							<div class="col-lg-8">
								<select class="form-control selectpicker" data-size="10" data-live-search="true" data-style="btn-primary">
									<option value="" selected>Select a Country</option>
									<option value="AF">Afghanistan</option>
									<option value="AL">Albania</option>
									<option value="DZ">Algeria</option>
									<option value="AS">American Samoa</option>
									<option value="AD">Andorra</option>
									<option value="AO">Angola</option>
									<option value="AI">Anguilla</option>
									<option value="AQ">Antarctica</option>
									<option value="AG">Antigua and Barbuda</option>
								</select>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Theme Info</label>
							<div class="col-lg-8">
								<select class="form-control selectpicker" data-size="10" data-live-search="true" data-style="btn-info">
									<option value="" selected>Select a Country</option>
									<option value="AF">Afghanistan</option>
									<option value="AL">Albania</option>
									<option value="DZ">Algeria</option>
									<option value="AS">American Samoa</option>
									<option value="AD">Andorra</option>
									<option value="AO">Angola</option>
									<option value="AI">Anguilla</option>
									<option value="AQ">Antarctica</option>
									<option value="AG">Antigua and Barbuda</option>
								</select>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Theme Success</label>
							<div class="col-lg-8">
								<select class="form-control selectpicker" data-size="10" data-live-search="true" data-style="btn-success">
									<option value="" selected>Select a Country</option>
									<option value="AF">Afghanistan</option>
									<option value="AL">Albania</option>
									<option value="DZ">Algeria</option>
									<option value="AS">American Samoa</option>
									<option value="AD">Andorra</option>
									<option value="AO">Angola</option>
									<option value="AI">Anguilla</option>
									<option value="AQ">Antarctica</option>
									<option value="AG">Antigua and Barbuda</option>
								</select>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Theme Warning</label>
							<div class="col-lg-8">
								<select class="form-control selectpicker" data-size="10" data-live-search="true" data-style="btn-warning">
									<option value="" selected>Select a Country</option>
									<option value="AF">Afghanistan</option>
									<option value="AL">Albania</option>
									<option value="DZ">Algeria</option>
									<option value="AS">American Samoa</option>
									<option value="AD">Andorra</option>
									<option value="AO">Angola</option>
									<option value="AI">Anguilla</option>
									<option value="AQ">Antarctica</option>
									<option value="AG">Antigua and Barbuda</option>
								</select>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Theme Danger</label>
							<div class="col-lg-8">
								<select class="form-control selectpicker" data-size="10" data-live-search="true" data-style="btn-danger">
									<option value="" selected>Select a Country</option>
									<option value="AF">Afghanistan</option>
									<option value="AL">Albania</option>
									<option value="DZ">Algeria</option>
									<option value="AS">American Samoa</option>
									<option value="AD">Andorra</option>
									<option value="AO">Angola</option>
									<option value="AI">Anguilla</option>
									<option value="AQ">Antarctica</option>
									<option value="AG">Antigua and Barbuda</option>
								</select>
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-plugins-8">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<span class="label label-success mr-2">NEW</span> 
					<h4 class="panel-title">Bootstrap Show Password</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Show / Hide Password</label>
							<div class="col-lg-8">
								<input data-toggle="password" data-placement="after" class="form-control" type="password" value="123" placeholder="password" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Show / Hide Password</label>
							<div class="col-lg-8">
								<input data-toggle="password" data-placement="before" class="form-control" type="password" value="123" placeholder="password" />
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-plugins-9">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Password Indicator</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row" id="pwd-default-container">
							<label class="col-lg-4 col-form-label" for="pwstrength-default">Password</label>
							<div class="col-lg-8">
								<input type="password" name="pwstrength-default" id="pwstrength-default" class="form-control mb-2" />
								<div class="row align-items-center">
									<div class="col-md-6">
										<div id="pwstrength-default-text" class="text-muted f-w-600 f-s-11"></div>
									</div>
									<div class="col-md-6">
										<div id="pwstrength-default-progress" class="pwstrength-progress"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="form-group row" id="pwd-popover-container">
							<label class="col-lg-4 col-form-label" for="password-input-group">With Popover</label>
							<div class="col-lg-8">
								<input type="text" name="pwstrength-popover" id="pwstrength-popover" class="form-control mb-2" />
								<div class="row align-items-center">
									<div class="col-md-6">
										<div id="pwstrength-popover-text" class="text-muted f-w-600 f-s-11"></div>
									</div>
									<div class="col-md-6">
										<div id="pwstrength-popover-progress" class="pwstrength-progress"></div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-plugins-10">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<span class="label label-success mr-2">NEW</span> 
					<h4 class="panel-title">Bootstrap Color Palette</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Color Palette Dropdown</label>
							<div class="col-lg-8">
								<div class="input-group">
									<input class="form-control" name="color_palatte_1" data-id="color-palette-1" />
									<div class="input-group-append">
										<ul class="dropdown-menu dropdown-menu-right">
											<li>
												<div id="color-palette-1"></div>
											</li>
										</ul>
										<a href="#" class="btn btn-grey text-black-lighter" data-toggle="dropdown"><i class="fa fa-tint fa-lg"></i></a>
									</div>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Custom Color Palette</label>
							<div class="col-lg-8">
								<div class="row">
									<div class="col-lg-6">
										<input class="form-control" name="color_palatte_custom" data-id="color-palette-custom" />
									</div>
									<div class="col-lg-6">
										<div id="color-palette-custom" class="m-t-5 p-t-3"></div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-plugins-11">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<span class="label label-success mr-2">NEW</span>
					<h4 class="panel-title">jQuery Simple Colorpicker</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Basic Usage</label>
							<div class="col-lg-8">
								<div class="input-group">
									<select name="jquery-simplecolorpicker">
										<option value="#2d353c">Black</option>
										<option value="#f0f3f4">Silver</option>
										<option value="#b6c2c9">Grey</option>
										<option value="#727cb6">Purple</option>
										<option value="#348fe2">Primary</option>
										<option value="#49b6d6">Aqua</option>
										<option value="#00acac">Green</option>
										<option value="#90ca4b">Lime</option>
										<option value="#f59c1a">Orange</option>
										<option value="#ffd900">Yellow</option>
										<option value="#ff5b57">Red</option>
									</select>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">FontAwesome Theme</label>
							<div class="col-lg-8">
								<div class="input-group">
									<select name="jquery-simplecolorpicker-fa">
										<option value="#2d353c">Black</option>
										<option value="#f0f3f4">Silver</option>
										<option value="#b6c2c9">Grey</option>
										<option value="#727cb6">Purple</option>
										<option value="#348fe2">Primary</option>
										<option value="#49b6d6">Aqua</option>
										<option value="#00acac">Green</option>
										<option value="#90ca4b">Lime</option>
										<option value="#f59c1a">Orange</option>
										<option value="#ffd900">Yellow</option>
										<option value="#ff5b57">Red</option>
									</select>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Dropdown Selection</label>
							<div class="col-lg-8">
								<div class="input-group m-t-5 m-b-5">
									<select name="colorpicker-picker-longlist">
										<option value="#2d353c">Black</option>
										<option value="#f0f3f4">Silver</option>
										<option value="#b6c2c9">Grey</option>
										<option value="#727cb6">Purple</option>
										<option value="#348fe2">Primary</option>
										<option value="#49b6d6">Aqua</option>
										<option value="#00acac">Green</option>
										<option value="#90ca4b">Lime</option>
										<option value="#f59c1a">Orange</option>
										<option value="#ffd900">Yellow</option>
										<option value="#ff5b57">Red</option>
									</select>
								</div>
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-plugins-12">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Colopicker & Timepicker</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Default Color Picker</label>
							<div class="col-lg-8">
								<input type="text" value="#3498db" class="form-control" id="colorpicker" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Prepend Color Picker</label>
							<div class="col-lg-8">
								<div class="input-group colorpicker-component" data-color="rgb(0, 0, 0)" data-color-format="rgb"  id="colorpicker-append">
									<input type="text" value="rgb(0, 0, 0)" readonly="" class="form-control" id="colorpicker-append-input" />
									<span class="input-group-append">
										<label class="input-group-text" for="colorpicker-append-input"><i class="fa fa-square fa-lg"></i></label>
									</span>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">RGBA Color format</label>
							<div class="col-lg-8">
								<input type="text" class="form-control" value="rgb(155,89,182,0.8)" id="colorpicker-rgba" data-color-format="rgba" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Default timepicker</label>
							<div class="col-lg-8">
								<div class="input-group bootstrap-timepicker">
									<input id="timepicker" type="text" class="form-control" />
									<span class="input-group-addon"><i class="fa fa-clock"></i></span>
								</div>
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-plugins-13">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Ion Range Slider</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Default</label>
							<div class="col-lg-8">
								<input type="text" id="default_rangeSlider" name="default_rangeSlider" value="" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Custom Range</label>
							<div class="col-lg-8">
								<input type="text" id="customRange_rangeSlider" name="customRange_rangeSlider" value="" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Custom Values</label>
							<div class="col-lg-8">
								<input type="text" id="customValue_rangeSlider" name="customValue_rangeSlider" value="" />
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-plugins-14">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Masked Input</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Date</label>
							<div class="col-lg-8">
								<input type="text" class="form-control" id="masked-input-date" placeholder="dd/mm/yyyy" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Phone</label>
							<div class="col-lg-8">
								<input type="text" class="form-control" id="masked-input-phone" placeholder="(999) 999-9999" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Tax ID</label>
							<div class="col-lg-8">
								<input type="text" class="form-control" id="masked-input-tid" placeholder="99-9999999" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Product Key</label>
							<div class="col-lg-8">
								<input type="text" class="form-control" id="masked-input-pkey" placeholder="a*-999-a999" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">SSN</label>
							<div class="col-lg-8">
								<input type="text" class="form-control" id="masked-input-ssn" placeholder="999/99/9999" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">SSN</label>
							<div class="col-lg-8">
								<input type="text" class="form-control" id="masked-input-pno" placeholder="AAA-9999-A" />
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-plugins-15">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">jQuery Tag It</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Default Tags Input with Autocomplete</label>
							<div class="col-lg-8">
								<ul id="jquery-tagIt-default">
									<li>Tag1</li>
									<li>Tag2</li>
								</ul>
								<p>Try to enter "c++, java, php" </p>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Inverse Theme</label>
							<div class="col-lg-8">
								<ul id="jquery-tagIt-inverse" class="inverse">
									<li>Tag1</li>
									<li>Tag2</li>
								</ul>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">White Theme</label>
							<div class="col-lg-8">
								<ul id="jquery-tagIt-white" class="white">
									<li>Tag1</li>
									<li>Tag2</li>
								</ul>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Primary Theme</label>
							<div class="col-lg-8">
								<ul id="jquery-tagIt-primary" class="primary">
									<li>Tag1</li>
									<li>Tag2</li>
								</ul>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Info Theme</label>
							<div class="col-lg-8">
								<ul id="jquery-tagIt-info" class="info">
									<li>Tag1</li>
									<li>Tag2</li>
								</ul>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Success Theme</label>
							<div class="col-lg-8">
								<ul id="jquery-tagIt-success" class="success">
									<li>Tag1</li>
									<li>Tag2</li>
								</ul>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Warning Theme</label>
							<div class="col-lg-8">
								<ul id="jquery-tagIt-warning" class="warning">
									<li>Tag1</li>
									<li>Tag2</li>
								</ul>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Danger Theme</label>
							<div class="col-lg-8">
								<ul id="jquery-tagIt-danger" class="danger">
									<li>Tag1</li>
									<li>Tag2</li>
								</ul>
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-plugins-16">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<span class="label label-success mr-2">NEW</span>
					<h4 class="panel-title"> Clipboard.js</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form class="form-horizontal form-bordered">
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Default</label>
							<div class="col-lg-8">
								<div class="input-group">
									<input id="clipboard-default" type="text" class="form-control" value="https://github.com/zenorocha/clipboard.js.git" />
									<span class="input-group-append">
										<button class="btn btn-inverse" type="button" data-clipboard-target="#clipboard-default"><i class="fa fa-clipboard"></i></button>
									</span>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">Cut to copy</label>
							<div class="col-lg-8">
								<textarea class="form-control m-b-10" id="clipboard-textarea" rows="7">Mussum ipsum cacilds...</textarea>
								<button class="btn btn-inverse btn-sm" type="button" data-clipboard-target="#clipboard-textarea" data-clipboard-action="cut">Cut to clipboard</button>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-lg-4 col-form-label">without Form</label>
							<div class="col-lg-8">
								<button class="btn btn-inverse btn-sm" type="button" data-clipboard-text="Just because you can doesn't mean you should — clipboard.js">Click to copy</button>
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
	</div>
	<!-- end row -->
@endsection

@push('scripts')
	<script src="/assets/plugins/jquery-migrate/dist/jquery-migrate.min.js"></script>
	<script src="/assets/plugins/moment/moment.js"></script>
	<script src="/assets/plugins/bootstrap-datepicker/dist/js/bootstrap-datepicker.js"></script>
	<script src="/assets/plugins/ion-rangeslider/js/ion.rangeSlider.min.js"></script>
	<script src="/assets/plugins/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js"></script>
	<script src="/assets/plugins/jquery.maskedinput/src/jquery.maskedinput.js"></script>
	<script src="/assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js"></script>
	<script src="/assets/plugins/pwstrength-bootstrap/dist/pwstrength-bootstrap.min.js"></script>
	<script src="/assets/plugins/@danielfarrell/bootstrap-combobox/js/bootstrap-combobox.js"></script>
	<script src="/assets/plugins/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
	<script src="/assets/plugins/tag-it/js/tag-it.min.js"></script>
	<script src="/assets/plugins/bootstrap-daterangepicker/daterangepicker.js"></script>
	<script src="/assets/plugins/select2/dist/js/select2.min.js"></script>
	<script src="/assets/plugins/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
	<script src="/assets/plugins/bootstrap-show-password/dist/bootstrap-show-password.js"></script>
	<script src="/assets/plugins/bootstrap-colorpalette/js/bootstrap-colorpalette.js"></script>
	<script src="/assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.js"></script>
	<script src="/assets/plugins/clipboard/dist/clipboard.min.js"></script>
	<script src="/assets/js/demo/form-plugins.demo.js"></script>
@endpush