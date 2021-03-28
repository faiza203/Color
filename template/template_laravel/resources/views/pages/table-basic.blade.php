@extends('layouts.default')

@section('title', 'Basic Tables')

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Tables</a></li>
		<li class="breadcrumb-item active">Basic Tables</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Basic Tables <small>header small text goes here...</small></h1>
	<!-- end page-header -->
	<!-- begin row -->
	<div class="row">
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="table-basic-1">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Default Table</h4>
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
					<!-- begin table-responsive -->
					<div class="table-responsive">
						<table class="table m-b-0">
							<thead>
								<tr>
									<th>#</th>
									<th>Username</th>
									<th>Email Address</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Nicky Almera</td>
									<td>nicky@hotmail.com</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Edmund Wong</td>
									<td>edmund@yahoo.com</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Harvinder Singh</td>
									<td>harvinder@gmail.com</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- end table-responsive -->
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;table class="table"&gt;
  ...
&lt;/table&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="table-basic-2">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Hover Table</h4>
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
					<!-- begin table-responsive -->
					<div class="table-responsive">
						<table class="table table-hover m-b-0 text-inverse">
							<thead>
								<tr>
									<th>#</th>
									<th>Username</th>
									<th>Email Address</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Nicky Almera</td>
									<td>nicky@hotmail.com</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Edmund Wong</td>
									<td>edmund@yahoo.com</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Harvinder Singh</td>
									<td>harvinder@gmail.com</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- end table-responsive -->
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;table class="table table-hover"&gt;
  ...
&lt;/table&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="table-basic-3">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Table Small</h4>
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
					<!-- begin table-responsive -->
					<div class="table-responsive">
						<table class="table table-sm m-b-0 text-inverse">
							<thead>
								<tr>
									<th>#</th>
									<th>Username</th>
									<th>Email Address</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Nicky Almera</td>
									<td>nicky@hotmail.com</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Edmund Wong</td>
									<td>edmund@yahoo.com</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Harvinder Singh</td>
									<td>harvinder@gmail.com</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- end table-responsive -->
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;table class="table table-sm"&gt;
  ...
&lt;/table&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="table-basic-4">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Responsive Table</h4>
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
					<!-- begin table-responsive -->
					<div class="table-responsive">
						<table class="table">
							<thead>
								<tr>
									<th>#</th>
									<th nowrap>Table heading</th>
									<th nowrap>Table heading</th>
									<th nowrap>Table heading</th>
									<th nowrap>Table heading</th>
									<th nowrap>Table heading</th>
									<th nowrap>Table heading</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- end table-responsive -->
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;div class="table-responsive"&gt;
  &lt;table class="table"&gt;
    ...
  &lt;/table&gt;
&lt;/div&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="table-basic-5">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Table Striped</h4>
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
					<!-- begin table-responsive -->
					<div class="table-responsive">
						<table class="table table-striped m-b-0">
							<thead>
								<tr>
									<th>#</th>
									<th>Username</th>
									<th>Email Address</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Nicky Almera</td>
									<td>nicky@hotmail.com</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Edmund Wong</td>
									<td>edmund@yahoo.com</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Harvinder Singh</td>
									<td>harvinder@gmail.com</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- end table-responsive -->
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;table class="table table-striped"&gt;
  ...
&lt;/table&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="table-basic-6">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Bordered Table</h4>
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
					<!-- begin table-responsive -->
					<div class="table-responsive">
						<table class="table table-bordered m-b-0">
							<thead>
								<tr>
									<th>#</th>
									<th>Username</th>
									<th>Email Address</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Nicky Almera</td>
									<td>nicky@hotmail.com</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Edmund Wong</td>
									<td>edmund@yahoo.com</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Harvinder Singh</td>
									<td>harvinder@gmail.com</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- end table-responsive -->
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;table class="table table-bordered"&gt;
  ...
&lt;/table&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-6 -->
		<!-- begin col-6 -->
		<div class="col-xl-6">
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="table-basic-7">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">UI Elements in Table <span class="label label-success m-l-5 t-minus-1">NEW</span></h4>
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
					<!-- begin table-responsive -->
					<div class="table-responsive">
						<table class="table table-striped m-b-0">
							<thead>
								<tr>
									<th>#</th>
									<th>Username</th>
									<th>Email Address</th>
									<th width="1%"></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="with-img">
										<img src="/assets/img/user/user-1.jpg" class="img-rounded height-30" />
									</td>
									<td>Nicky Almera</td>
									<td>nicky@hotmail.com</td>
									<td class="with-btn" nowrap>
										<a href="#" class="btn btn-sm btn-primary width-60 m-r-2">Edit</a>
										<a href="#" class="btn btn-sm btn-white width-60">Delete</a>
									</td>
								</tr>
								<tr>
									<td class="with-img">
										<img src="/assets/img/user/user-2.jpg" class="img-rounded height-30" />
									</td>
									<td>Edmund Wong</td>
									<td>edmund@yahoo.com</td>
									<td class="with-btn-group" nowrap>
										<div class="btn-group">
											<a href="#" class="btn btn-white btn-sm width-90">Settings</a>
											<a href="#" class="btn btn-white btn-sm dropdown-toggle width-30 no-caret" data-toggle="dropdown">
											<span class="caret"></span>
											</a>
											<div class="dropdown-menu dropdown-menu-right">
												<a href="#" class="dropdown-item">Action 1</a>
												<a href="#" class="dropdown-item">Action 2</a>
												<a href="#" class="dropdown-item">Action 3</a>
												<div class="dropdown-divider"></div>
												<a href="#" class="dropdown-item">Action 4</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td class="with-img">
										<img src="/assets/img/user/user-3.jpg" class="img-rounded height-30" />
									</td>
									<td>Harvinder Singh</td>
									<td>harvinder@gmail.com</td>
									<td class="with-btn" nowrap>
										<a href="#" class="btn btn-sm btn-primary width-60 m-r-2">Edit</a>
										<a href="#" class="btn btn-sm btn-white width-60">Delete</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- end table-responsive -->
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;table class="table"&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;!-- with image --&gt;
      &lt;td class="with-img"&gt;...&lt;/td&gt;

      &lt;!-- with button --&gt;
      &lt;td class="with-btn"&gt;...&lt;/td&gt;

      &lt;!-- with button group --&gt;
      &lt;td class="with-btn-group"&gt;...&lt;/td&gt;
     &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="table-basic-8">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Form Elements in Table <span class="label label-success m-l-5 t-minus-1">NEW</span></h4>
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
					<!-- begin table-responsive -->
					<div class="table-responsive">
						<table class="table table-striped table-th-valign-middle table-td-valign-middle m-b-0">
							<thead>
								<tr>
									<th class="with-checkbox">
										<div class="checkbox checkbox-css">
											<input type="checkbox" value="" id="table_checkbox_1" />
											<label for="table_checkbox_1">&nbsp;</label>
										</div>
									</th>
									<th>Username</th>
									<th>Email Address</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="with-checkbox">
										<div class="checkbox checkbox-css">
											<input type="checkbox" value="" id="table_checkbox_2" checked />
											<label for="table_checkbox_2">&nbsp;</label>
										</div>
									</td>
									<td>Nicky Almera</td>
									<td>nicky@hotmail.com</td>
								</tr>
								<tr>
									<td class="with-radio">
										<div class="radio radio-css">
											<input type="radio" id="table_radio_1" name="table_radio" checked />
											<label for="table_radio_1">&nbsp;</label>
										</div>
									</td>
									<td>Edmund Wong</td>
									<td>edmund@yahoo.com</td>
								</tr>
								<tr>
									<td class="with-radio">
										<div class="radio radio-css">
											<input type="radio" id="table_radio_2" name="table_radio" />
											<label for="table_radio_2">&nbsp;</label>
										</div>
									</td>
									<td class="with-form-control"><input type="text" class="form-control" value="Harvinder Singh" /></td>
									<td>harvinder@gmail.com</td>
								</tr>
								<tr>
									<td class="with-radio">
										<div class="radio radio-css">
											<input type="radio" id="table_radio_3" name="table_radio" />
											<label for="table_radio_3">&nbsp;</label>
										</div>
									</td>
									<td class="with-input-group">
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text">@</span>
											</div>
											<input type="text" class="form-control" placeholder="Terry" />
										</div>
									</td>
									<td>terry@gmail.com</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- end table-responsive -->
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;table class="table table-td-valign-middle"&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;!-- with checkbox --&gt;
      &lt;td class="with-checkbox"&gt;...&lt;/td&gt;

      &lt;!-- with radio --&gt;
      &lt;td class="with-radio"&gt;...&lt;/td&gt;

      &lt;!-- with form input --&gt;
      &lt;td class="with-form-control"&gt;...&lt;/td&gt;

      &lt;!-- with input group --&gt;
      &lt;td class="with-input-control"&gt;...&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
				</div>
				<!-- end hljs-wrapper -->
			</div>
			<!-- end panel -->
			<!-- begin panel -->
			<div class="panel panel-inverse" data-sortable-id="table-basic-9">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Table Row Classes</h4>
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
					<!-- begin table-responsive -->
					<div class="table-responsive">
						<table class="table m-b-0">
							<thead>
								<tr>
									<th>#</th>
									<th>Username</th>
									<th>Email Address</th>
								</tr>
							</thead>
							<tbody>
								<tr class="table-active">
									<td>1</td>
									<td>Nicky Almera</td>
									<td>nicky@hotmail.com</td>
								</tr>
								<tr class="table-info">
									<td>2</td>
									<td>Terry Khoo</td>
									<td>terry@gmail.com</td>
								</tr>
								<tr class="table-success">
									<td>3</td>
									<td>Edmund Wong</td>
									<td>edmund@yahoo.com</td>
								</tr>
								<tr class="table-warning">
									<td>4</td>
									<td>Harvinder Singh</td>
									<td>harvinder@gmail.com</td>
								</tr>
								<tr class="table-danger">
									<td>5</td>
									<td>Terry Khoo</td>
									<td>terry@gmail.com</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- end table-responsive -->
				</div>
				<!-- end panel-body -->
				<!-- begin hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html">&lt;table class="table"&gt;
  &lt;tbody&gt;
    &lt;tr class="table-active"&gt;...&lt;/tr&gt;
    &lt;tr class="table-info"&gt;...&lt;/tr&gt;
    &lt;tr class="table-success"&gt;...&lt;/tr&gt;
    &lt;tr class="table-warning"&gt;...&lt;/tr&gt;
    &lt;tr class="table-danger"&gt;...&lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
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
	<script src="/assets/plugins/highlight.js/highlight.min.js"></script>
	<script src="/assets/js/demo/render.highlight.js"></script>
@endpush
