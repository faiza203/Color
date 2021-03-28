@extends('layouts.default')

@section('title', 'Form Validation')

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Form Stuff</a></li>
		<li class="breadcrumb-item active">Form Validation</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Form Validation <small>header small text goes here...</small></h1>
	<!-- end page-header -->
	<!-- begin row -->
	<div class="row">
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-validation-1">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Basic Form Validation</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body">
					<form class="form-horizontal" data-parsley-validate="true" name="demo-form">
						<div class="form-group row m-b-15">
							<label class="col-md-4 col-sm-4 col-form-label" for="fullname">Full Name * :</label>
							<div class="col-md-8 col-sm-8">
								<input class="form-control" type="text" id="fullname" name="fullname" placeholder="Required" data-parsley-required="true" />
							</div>
						</div>
						<div class="form-group row m-b-15">
							<label class="col-md-4 col-sm-4 col-form-label" for="email">Email * :</label>
							<div class="col-md-8 col-sm-8">
								<input class="form-control" type="text" id="email" name="email" data-parsley-type="email" placeholder="Email" data-parsley-required="true" />
							</div>
						</div>
						<div class="form-group row m-b-15">
							<label class="col-md-4 col-sm-4 col-form-label" for="website">Website :</label>
							<div class="col-md-8 col-sm-8">
								<input class="form-control" type="url" id="website" name="website" data-parsley-type="url" placeholder="url" />
							</div>
						</div>
						<div class="form-group row m-b-15">
							<label class="col-md-4 col-sm-4 col-form-label" for="message">Message (20 chars min, 200 max) :</label>
							<div class="col-md-8 col-sm-8">
								<textarea class="form-control" id="message" name="message" rows="4" data-parsley-range="[20,200]" placeholder="Range from 20 - 200"></textarea>
							</div>
						</div>
						<div class="form-group row m-b-15">
							<label class="col-md-4 col-sm-4 col-form-label" for="message">Digits :</label>
							<div class="col-md-8 col-sm-8">
								<input class="form-control" type="text" id="digits" name="digits" data-parsley-type="digits" placeholder="Digits" />
							</div>
						</div>
						<div class="form-group row m-b-15">
							<label class="col-md-4 col-sm-4 col-form-label" for="message">Number :</label>
							<div class="col-md-8 col-sm-8">
								<input class="form-control" type="text" id="number" name="number" data-parsley-type="number" placeholder="Number" />
							</div>
						</div>
						<div class="form-group row m-b-0">
							<label class="col-md-4 col-sm-4 col-form-label">&nbsp;</label>
							<div class="col-md-8 col-sm-8">
								<button type="submit" class="btn btn-primary">Submit</button>
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;form data-parsley-validate="true"&gt;
  &lt;!-- required --&gt;
  &lt;input type="text" data-parsley-required="true" /&gt;

  &lt;!-- email --&gt;
  &lt;input type="email" data-parsley-type="email" /&gt;

  &lt;!-- url --&gt;
  &lt;input type="url" data-parsley-type="url" /&gt;

  &lt;!-- digits --&gt;
  &lt;input type="text" data-parsley-type="digits" /&gt;

  &lt;!-- number --&gt;
  &lt;input type="text" data-parsley-type="number" /&gt;

  &lt;!-- textarea range --&gt;
  &lt;textarea rows="4" data-parsley-range="[20,200]"&gt;&lt;/textarea&gt;
&lt;/form&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="form-validation-2">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Extra Validation Field</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body">
					<form data-parsley-validate="true">
						<div class="form-group row m-b-15">
							<label class="col-md-4 col-sm-4 col-form-label">AlphaNum* :</label>
							<div class="col-md-8 col-sm-8">
								<input class="form-control" type="text" id="alphanum" name="alphanum"  data-parsley-type="alphanum" placeholder="Alphanumeric String."  data-parsley-required="true" />
							</div>
						</div>
						<div class="form-group row m-b-15">
							<label class="col-md-4 col-sm-4 col-form-label">Required Select Box :</label>
							<div class="col-md-8 col-sm-8">
								<select class="form-control" id="select-required" name="selectBox" data-parsley-required="true">
									<option value="">Please choose</option>
									<option value="foo">Foo</option>
									<option value="bar">Bar</option>
								</select>
							</div>
						</div>
						<div class="form-group row m-b-15">
							<label class="col-md-4 col-sm-4 col-form-label">Required Radio Button :</label>
							<div class="col-md-8 col-sm-8">
								<div class="form-check">
									<input type="radio" class="form-check-input" name="radiorequired" value="foo" id="radio-required" data-parsley-required="true" />
									<label class="form-check-label">Radio Button 1</label>
								</div>
								<div class="form-check">
									<input type="radio" class="form-check-input" name="radiorequired" id="radio-required2" value="bar" />
									<label class="form-check-label">Radio Button 2</label>
								</div>
								<div class="form-check">
									<input type="radio" class="form-check-input" name="radiorequired" id="radio-required3" value="key" /> 
									<label class="form-check-label">Radio Button 2</label>
								</div>
							</div>
						</div>
						<div class="form-group row m-b-15">
							<label class="col-md-4 col-sm-4 col-form-label">Check at least 2 checkboxes :</label>
							<div class="col-md-8 col-sm-8">
								<div class="form-check">
									<input type="checkbox" class="form-check-input" id="mincheck" name="mincheck[]" data-parsley-mincheck="2" value="foo" required /> 
									<label class="form-check-label">Checkbox 1</label>
								</div>
								<div class="form-check">
									<input type="checkbox" class="form-check-input" name="mincheck[]" value="bar" /> 
									<label class="form-check-label">Checkbox 2</label>
								</div>
								<div class="form-check">
									<input type="checkbox" class="form-check-input" name="mincheck[]" value="baz" />
									<label class="form-check-label">Checkbox 3</label>
								</div>
							</div>
						</div>
						<div class="form-group row m-b-15">
							<label class="col-md-4 col-sm-4 col-form-label">Regular Expression :</label>
							<div class="col-md-8 col-sm-8">
								<input class="form-control parsley-validated" type="text" id="data-regexp" data-parsley-pattern="#[A-Fa-f0-9]{6}" placeholder="hexa color code" data-required="true" />
							</div>
						</div>
						<div class="form-group row m-b-0">
							<label class="col-md-4 col-sm-4 col-form-label">&nbsp;</label>
							<div class="col-md-8 col-sm-8">
								<button type="submit" class="btn btn-danger">Validate</button>
							</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;form data-parsley-validate="true"&gt;
  &lt;!-- alphanumeric string --&gt;
  &lt;input type="text" data-parsley-type="alphanum" /&gt;

  &lt;!-- dropdown --&gt;
  &lt;select data-parsley-required="true"&gt;...&lt;/select&gt;

  &lt;!-- radio --&gt;
  &lt;input type="radio" data-parsley-required="true" /&gt;

  &lt;!-- checkbox --&gt;
  &lt;input type="checkbox" data-parsley-mincheck="2" /&gt;

  &lt;!-- reg expression --&gt;
  &lt;input type="text" data-parsley-pattern="#[A-Fa-f0-9]{6}" /&gt;
&lt;/form&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
	</div>
	<!-- end row -->
@endsection

@push('scripts')
	<script src="/assets/plugins/parsleyjs/dist/parsley.min.js"></script>
	<script src="/assets/plugins/highlight.js/highlight.min.js"></script>
	<script src="/assets/js/demo/render.highlight.js"></script>
@endpush
