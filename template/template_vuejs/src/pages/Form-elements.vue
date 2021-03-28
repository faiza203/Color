<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Form Stuff</a></li>
			<li class="breadcrumb-item active">Form Elements</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Form Elements <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Form Controls">
					<div class="alert alert-secondary">
						Textual form controls—like <code>&lt;input&gt;</code>s, <code>&lt;select&gt;</code>s, and <code>&lt;textarea&gt;</code>s—are styled with the .form-control class. Included are styles for general appearance, focus state, sizing, and more.
					</div>
					<form>
						<div class="form-group row m-b-15">
							<label class="col-form-label col-md-3">Email address</label>
							<div class="col-md-9">
								<input type="email" class="form-control m-b-5" placeholder="Enter email" />
								<small class="f-s-12 text-grey-darker">We'll never share your email with anyone else.</small>
							</div>
						</div>
						<div class="form-group row m-b-15">
							<label class="col-form-label col-md-3">Example select</label>
							<div class="col-md-9">
								<select class="form-control">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
							</div>
						</div>
						<div class="form-group row m-b-15">
							<label class="col-form-label col-md-3">Example multiple select</label>
							<div class="col-md-9">
								<select multiple class="form-control">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
							</div>
						</div>
						<div class="form-group row m-b-15">
							<label class="col-form-label col-md-3">Example textarea</label>
							<div class="col-md-9">
								<textarea class="form-control" rows="3"></textarea>
							</div>
						</div>
					</form>
						
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;!-- email --&gt;
&lt;input type="email" class="form-control" placeholder="Enter email" /&gt;

&lt;!-- select --&gt;
&lt;select class="form-control"&gt;...&lt;/select&gt;

&lt;!-- multiple select --&gt;
&lt;select multiple class="form-control"&gt;...&lt;/select&gt;

&lt;!-- textarea --&gt;
&lt;textarea class="form-control" rows="3"&gt;&lt;/textarea&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
									
				<!-- begin panel -->
				<panel title="Readonly">
					<form>
						<div class="form-group row m-b-15">
							<label class="col-sm-3 col-form-label">Readonly</label>
							<div class="col-sm-9">
								<input class="form-control" type="text" placeholder="Readonly input here…" readonly />
							</div>
						</div>
						<div class="form-group row m-b-15">
							<label class="col-sm-3 col-form-label">Readonly Plaintext</label>
							<div class="col-sm-9">
								<input type="text" readonly class="form-control-plaintext" value="email@example.com" />
							</div>
						</div>
						<div class="form-group row m-b-15">
							<label class="col-sm-3 col-form-label">Password</label>
							<div class="col-sm-9">
								<input type="password" class="form-control" placeholder="Password" />
							</div>
						</div>
					</form>
						
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;!-- form-control-lg --&gt;
&lt;input class="form-control" type="text" placeholder="Readonly input here…" readonly /&gt;

&lt;!-- readonly plaintext --&gt;
&lt;input type="text" readonly class="form-control-plaintext" value="email@example.com" /&gt;

&lt;!-- password --&gt;
&lt;input type="password" readonly class="form-control" placeholder="Password" /&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Sizing">
					<div class="p-t-10">
						<div class="row row-space-10">
							<div class="col-md-6">
								<div class="form-group m-b-10 p-t-5">
									<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
								</div>
								<div class="form-group m-b-10">
									<input class="form-control" type="text" placeholder="default input" />
								</div>
								<div class="form-group m-b-10">
									<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group m-b-10 p-t-5">
									<select class="form-control form-control-lg">
										<option>.form-control-lg</option>
									</select>
								</div>
								<div class="form-group m-b-10">
									<select class="form-control">
										<option>default select</option>
									</select>
								</div>
								<div class="form-group m-b-10">
									<select class="form-control form-control-sm">
										<option>.form-control-sm</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;!-- form-control-lg --&gt;
&lt;input class="form-control form-control-lg" type="text" /&gt;
&lt;select class="form-control form-control-lg"&gt;...&lt;/select&gt;

&lt;!-- default --&gt;
&lt;input class="form-control" type="text" /&gt;
&lt;select class="form-control"&gt;...&lt;/select&gt;

&lt;!-- form-control-sm --&gt;
&lt;input class="form-control form-control-sm" type="text" /&gt;
&lt;select class="form-control form-control-sm"&gt;...&lt;/select&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
									
				<!-- begin panel -->
				<panel title="Validation">
					<form>
						<div class="row form-group m-b-10">
							<label class="col-md-3 col-form-label">Valid Input</label>
							<div class="col-md-9">
								<div class="input-group">
									<div class="input-group-prepend"><span class="input-group-text">@</span></div>
									<input type="text" class="form-control is-valid" />
									<div class="valid-feedback">Looks good!</div>
								</div>
							</div>
						</div>
						<div class="row form-group m-b-10">
							<label class="col-md-3 col-form-label">Invalid Input</label>
							<div class="col-md-9">
								<div class="input-group">
									<div class="input-group-prepend"><span class="input-group-text">@</span></div>
									<input type="text" class="form-control is-invalid" />
									<div class="invalid-feedback">Please choose a unique and valid username.</div>
								</div>
							</div>
						</div>
						<div class="row form-group m-b-30">
							<label class="col-md-3 col-form-label">Tooltip Message</label>
							<div class="col-md-9">
								<div class="row row-space-10">
									<div class="col-md-6">
										<div class="input-group">
											<div class="input-group-prepend"><span class="input-group-text">@</span></div>
											<input type="text" class="form-control is-invalid" />
											<div class="invalid-tooltip">Please choose a unique and valid username.</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="input-group">
											<div class="input-group-prepend"><span class="input-group-text">@</span></div>
											<input type="text" class="form-control is-valid" />
											<div class="valid-tooltip">Looks good!</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
						
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;!-- valid --&gt;
&lt;div class="row form-group m-b-10"&gt;
  &lt;label class="col-md-3 col-form-label"&gt;Valid Input&lt;/label&gt;
  &lt;div class="col-md-9"&gt;
    &lt;input type="text" class="form-control is-valid" /&gt;
    &lt;div class="valid-feedback"&gt;Looks good!&lt;/div&gt;
    &lt;div class="valid-tooltip"&gt;Looks good!&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- invalid --&gt;
&lt;div class="row form-group m-b-10"&gt;
  &lt;label class="col-md-3 col-form-label"&gt;...&lt;/label&gt;
  &lt;div class="col-md-9"&gt;
    &lt;input type="text" class="form-control is-invalid" /&gt;
    &lt;div class="invalid-feedback"&gt;...&lt;/div&gt;
    &lt;div class="invalid-tooltip"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->
					
		<h3 class="m-b-20">Checkboxes and Radios</h3>
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel>
					<!-- begin panel-heading -->
					<template slot="header">
						<h4 class="panel-title">CSS Checkbox <span class="label label-success">NEW</span></h4>
					</template>
					<!-- end panel-heading -->
				
					<div class="alert alert-secondary fade show">
						CSS Checkboxes & Radios is <b>not</b> supported in older browser.
					</div>
					<form>
						<div class="form-group row m-b-10">
							<label class="col-md-3 col-form-label">Default Checkbox</label>
							<div class="col-md-9">
								<div class="checkbox checkbox-css">
									<input type="checkbox" id="cssCheckbox1" value="" checked />
									<label for="cssCheckbox1">CSS Checkbox Label 1</label>
								</div>
								<div class="checkbox checkbox-css disabled">
									<input type="checkbox" id="cssCheckbox2" value="" disabled />
									<label for="cssCheckbox2">Disabled State</label>
								</div>
								<div class="checkbox checkbox-css is-valid">
									<input type="checkbox" id="cssCheckbox3" value="" />
									<label for="cssCheckbox3">Success State</label>
								</div>
								<div class="checkbox checkbox-css is-invalid">
									<input type="checkbox" id="cssCheckbox5" value="" />
									<label for="cssCheckbox5">Error State</label>
								</div>
							</div>
						</div>
						<div class="form-group row m-b-10">
							<label class="col-md-3 col-form-label">Inline Checkbox</label>
							<div class="col-md-9">
								<div class="checkbox checkbox-css checkbox-inline">
									<input type="checkbox" value="" id="inlineCssCheckbox1" checked />
									<label for="inlineCssCheckbox1">Checkbox Label 1</label>
								</div>
								<div class="checkbox checkbox-css checkbox-inline">
									<input type="checkbox" value="" id="inlineCssCheckbox2" />
									<label for="inlineCssCheckbox2">Checkbox Label 2</label>
								</div>
							</div>
						</div>
						<div class="form-group row m-b-10">
							<label class="col-md-3 col-form-label">Default Radio</label>
							<div class="col-md-9">
								<div class="radio radio-css">
									<input type="radio" name="radio_css" id="cssRadio1" checked />
									<label for="cssRadio1">Radio option 1</label>
								</div>
								<div class="radio radio-css disabled">
									<input type="radio" name="radio_css" id="cssRadio2" disabled />
									<label for="cssRadio2">Disabled State</label>
								</div>
								<div class="radio radio-css is-valid">
									<input type="radio" name="radio_css" id="cssRadio3" value="" />
									<label for="cssRadio3">Success State</label>
								</div>
								<div class="radio radio-css is-invalid">
									<input type="radio" name="radio_css" id="cssRadio5" value="" />
									<label for="cssRadio5">Error State</label>
								</div>
							</div>
						</div>
						<div class="form-group row m-b-10">
							<label class="col-md-3 col-form-label">Inline Radio</label>
							<div class="col-md-9">
								<div class="radio radio-css radio-inline">
									<input type="radio" name="radio_css_inline" id="inlineCssRadio1" value="option1" checked />
									<label for="inlineCssRadio1">Radio option 1</label>
								</div>
								<div class="radio radio-css radio-inline">
									<input type="radio" name="radio_css_inline" id="inlineCssRadio2" value="option2" />
									<label for="inlineCssRadio2">Radio option 2</label>
								</div>
							</div>
						</div>
						<div class="form-group row m-b-10">
							<label class="col-md-3 col-form-label">Checkbox Switcher</label>
							<div class="col-md-9 p-t-3">
								<div class="switcher">
									<input type="checkbox" name="switcher_checkbox_1" id="switcher_checkbox_1" checked="" value="1">
									<label for="switcher_checkbox_1"></label>
								</div>
								<div class="switcher switcher-success">
									<input type="checkbox" name="switcher_checkbox_2" id="switcher_checkbox_2" checked="" value="1">
									<label for="switcher_checkbox_2"></label>
								</div>
								<div class="switcher switcher-purple">
									<input type="checkbox" name="switcher_checkbox_3" id="switcher_checkbox_3" checked="" value="1">
									<label for="switcher_checkbox_3"></label>
								</div>
								<div class="switcher switcher-danger">
									<input type="checkbox" name="switcher_checkbox_4" id="switcher_checkbox_4" checked="" value="1">
									<label for="switcher_checkbox_4"></label>
								</div>
								<div class="switcher switcher-warning">
									<input type="checkbox" name="switcher_checkbox_5" id="switcher_checkbox_5" checked="" value="1">
									<label for="switcher_checkbox_5"></label>
								</div>
							</div>
						</div>
					</form>
						
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code>&lt;!-- default --&gt;
&lt;div class="checkbox checkbox-css"&gt;
  &lt;input type="checkbox" id="cssCheckbox1" checked /&gt;
  &lt;label for="cssCheckbox1"&gt;Checkbox&lt;/label&gt;
&lt;/div&gt;
&lt;div class="radio radio-css"&gt;
  &lt;input type="radio" id="cssRadio1" checked /&gt;
  &lt;label for="cssRadio1"&gt;Radio&lt;/label&gt;
&lt;/div&gt;

&lt;!-- inline --&gt;
&lt;div class="checkbox checkbox-css checkbox-inline"&gt;
  &lt;input type="checkbox" id="inlineCssCheckbox1" checked /&gt;
  &lt;label for="inlineCssCheckbox1"&gt;Inline Checkbox&lt;/label&gt;
&lt;/div&gt;
&lt;div class="radio radio-css radio-inline"&gt;
  &lt;input type="radio" id="inlineCssRadio1" /&gt;
  &lt;label for="inlineCssRadio1"&gt;Inline Radio&lt;/label&gt;
&lt;/div&gt;

&lt;!-- success state --&gt;
&lt;div class="checkbox checkbox-css is-valid"&gt;...&lt;/div&gt;
&lt;div class="checkbox checkbox-radio is-valid"&gt;...&lt;/div&gt;

&lt;!-- error state --&gt;
&lt;div class="checkbox checkbox-radio is-invalid"&gt;...&lt;/div&gt;
&lt;div class="checkbox checkbox-css is-invalid"&gt;...&lt;/div&gt;

&lt;!-- switcher --&gt;
&lt;div class="switcher"&gt;
  &lt;input type="checkbox" name="switcher_checkbox_1" id="switcher_checkbox_1" checked="" value="1"&gt;
  &lt;label for="switcher_checkbox_1"&gt;&lt;/label&gt;
&lt;/div&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Checkboxes and Radios">
					<form>
						<div class="form-group row m-b-10">
							<label class="col-md-3 col-form-label">Checkbox</label>
							<div class="col-md-9">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="defaultCheckbox" />
									<label class="form-check-label" for="defaultCheckbox">Checkbox Label 1</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="disabledCheckbox" disabled />
									<label class="form-check-label" for="disabledCheckbox">Disabled Checkbox</label>
								</div>
								<div class="form-check">
									<input class="form-check-input is-valid" type="checkbox" value="" id="validCheckbox" />
									<label class="form-check-label" for="validCheckbox">Valid Checkbox</label>
								</div>
								<div class="form-check">
									<input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheckbox" />
									<label class="form-check-label" for="invalidCheckbox">Invalid Checkbox</label>
								</div>
							</div>
						</div>
						<div class="form-group row m-b-10">
							<label class="col-md-3 col-form-label">Inline Checkbox</label>
							<div class="col-md-9">
								<div class="form-check form-check-inline">
									<input type="checkbox" value="" id="checkbox-inline-1" class="form-check-input" />
									<label class="form-check-label" for="checkbox-inline-1">Checkbox Label 1</label>
								</div>
								<div class="form-check form-check-inline">
									<input type="checkbox" value="" id="checkbox-inline-2" class="form-check-input" />
									<label class="form-check-label" for="checkbox-inline-2">Checkbox Label 2</label>
								</div>
							</div>
						</div>
						<div class="form-group row m-b-10">
							<label class="col-md-3 col-form-label">Radio Button</label>
							<div class="col-md-9">
								<div class="form-check">
									<input class="form-check-input" type="radio" name="default_radio" id="defaultRadio" value="" checked />
									<label class="form-check-label" for="defaultRadio">Radio option 1</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="default_radio" id="disabledDefaultRadio" value="" disabled />
									<label class="form-check-label" for="disabledDefaultRadio">Disabled Radio</label>
								</div>
								<div class="form-check">
									<input class="form-check-input is-valid" type="radio" name="default_radio" id="validDefaultRadio" value="" />
									<label class="form-check-label" for="validDefaultRadio">Success State</label>
								</div>
								<div class="form-check">
									<input class="form-check-input is-invalid" type="radio" name="default_radio" id="invalidDefaultRadio" value="" />
									<label class="form-check-label" for="invalidDefaultRadio">Error State</label>
								</div>
							</div>
						</div>
						<div class="form-group row m-b-10">
							<label class="col-md-3 col-form-label">Inline Radio Button</label>
							<div class="col-md-9">
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="radio_default_inline" id="defaultInlineRadio1" value="" checked />
									<label class="form-check-label" for="defaultInlineRadio1">Radio option 1</label>
								</div>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="radio_default_inline" id="defaultInlineRadio2" value="" />
									<label class="form-check-label" for="defaultInlineRadio2">Radio option 2</label>
								</div>
							</div>
						</div>
					</form>
						
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;!-- default --&gt;
&lt;div class="form-check"&gt;
  &lt;input type="checkbox" class="form-check-input" id="defaultCheckbox" /&gt;
  &lt;label class="form-check-label" for="defaultCheckbox"&gt;...&lt;label&gt;
&lt;/div&gt;
&lt;div class="form-check"&gt;
  &lt;input class="form-check-input" type="radio" id="defaultRadio" checked /&gt;
  &lt;label class="form-check-label" for="defaultRadio"&gt;...&lt;/label&gt;
&lt;/div&gt;

&lt;!-- inline --&gt;
&lt;div class="form-check form-check-inline"&gt;
  ...
&lt;/div&gt;

&lt;!-- valid state --&gt;
&lt;div class="form-check"&gt;
  &lt;input class="form-check-input is-valid" /&gt;
  &lt;label class="form-check-label"&gt;...&lt;/label&gt;
&lt;/div&gt;

&lt;!-- invalid state --&gt;
&lt;div class="form-check"&gt;
  &lt;input class="form-check-input is-invalid" /&gt;
  &lt;label class="form-check-label"&gt;...&lt;/label&gt;
&lt;/div&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->

		<h3 class="m-b-20">Input Group</h3>
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Input Group">
					<div class="input-group m-b-10">
						<div class="input-group-prepend"><span class="input-group-text">@</span></div>
						<input type="text" class="form-control" placeholder="Username" />
					</div>
					<div class="input-group m-b-10">
						<input type="text" class="form-control" />
						<div class="input-group-append"><span class="input-group-text"><i class="fa fa-calendar"></i></span></div>
					</div>
					<div class="input-group m-b-10">
						<div class="input-group-prepend"><span class="input-group-text">$</span></div>
						<input type="text" class="form-control" />
						<div class="input-group-append"><span class="input-group-text">.00</span></div>
					</div>
					<div class="input-group m-b-10">
						<div class="input-group-prepend">
							<span class="input-group-text"><input type="checkbox" /></span>
						</div>
						<input type="text" class="form-control" placeholder="Checkbox add on" />
					</div>
					<div class="input-group m-b-10">
						<div class="input-group-prepend">
							<span class="input-group-text"><input type="radio" /></span>
						</div>
						<input type="text" class="form-control" placeholder="Radio button add on" />
					</div>
					<div class="input-group m-b-10">
						<div class="input-group-prepend">
							<button type="button" class="btn btn-primary">Action</button>
							<button type="button" class="btn btn-primary" data-toggle="dropdown">
								<span class="caret"></span>
							</button>
							<ul class="dropdown-menu">
								<li><a href="#">Action</a></li>
								<li><a href="#">Another action</a></li>
								<li><a href="#">Something else here</a></li>
								<li class="divider"></li>
								<li><a href="#">Separated link</a></li>
							</ul>
						</div>
						<input type="text" class="form-control" />
						<div class="input-group-append">
							<button type="button" class="btn btn-yellow" data-toggle="dropdown">
							<span class="caret"></span>
							</button>
							<button type="button" class="btn btn-yellow dropdown-toggle no-caret">Action</button>
							<ul class="dropdown-menu dropdown-menu-right">
								<li><a href="#">Action</a></li>
								<li><a href="#">Another action</a></li>
								<li><a href="#">Something else here</a></li>
								<li class="divider"></li>
								<li><a href="#">Separated link</a></li>
							</ul>
						</div>
					</div>
						
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
					<pre><code class="html">&lt;div class="input-group"&gt;
  &lt;span class="input-group-prepend"&gt;$&lt;/span&gt;
  &lt;input type="text" class="form-control" /&gt;
  &lt;span class="input-group-append"&gt;.00&lt;/span&gt;
&lt;/div&gt;

&lt;div class="input-group"&gt;
  &lt;input type="text" class="form-control"&gt;
  &lt;div class="input-group-append"&gt;
    &lt;button type="button" class="btn btn-yellow" data-toggle="dropdown"&gt;
      &lt;span class="caret"&gt;&lt;/span&gt;
    &lt;/button&gt;
    &lt;button type="button" class="btn btn-yellow dropdown-toggle no-caret"&gt;
      Action
    &lt;/button&gt;
    &lt;ul class="dropdown-menu dropdown-menu-right"&gt;
      ...
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Input Group Sizing">
					<div class="input-group input-group-lg m-b-10">
						<div class="input-group-prepend"><span class="input-group-text">@</span></div>
						<input type="text" class="form-control" placeholder="Username" />
					</div>
					<div class="input-group m-b-10">
						<div class="input-group-prepend"><span class="input-group-text">@</span></div>
						<input type="text" class="form-control" placeholder="Username" />
					</div>
					<div class="input-group input-group-sm m-b-10">
						<div class="input-group-prepend"><span class="input-group-text">@</span></div>
						<input type="text" class="form-control" placeholder="Username" />
					</div>
					
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;!-- input-group-lg --&gt;
&lt;div class="input-group input-group-lg"&gt;...&lt;/div&gt;

&lt;!-- default --&gt;
&lt;div class="input-group"&gt;...&lt;/div&gt;

&lt;!-- input-group-sm --&gt;
&lt;div class="input-group input-group-sm"&gt;...&lt;/div&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->

		<h3 class="m-b-20">Form Style</h3>
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Default Style">
					<form action="/" method="POST">
						<fieldset>
							<legend class="m-b-15">Legend</legend>
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
							</div>
							<div class="form-group">
								<label for="exampleInputPassword1">Password</label>
								<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
							</div>
							<div class="checkbox checkbox-css m-b-20">
								<input type="checkbox" id="nf_checkbox_css_1" />
								<label for="nf_checkbox_css_1">Check me out</label>
							</div>
							<button type="submit" class="btn btn-sm btn-primary m-r-5">Login</button>
							<button type="submit" class="btn btn-sm btn-default">Cancel</button>
						</fieldset>
					</form>
					
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;div class="form-group"&gt;
  &lt;label&gt;...&lt;/label&gt;
  &lt;input type="text" class="form-control" /&gt;
&lt;/div&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Form Horizontal">
					<form action="/" method="POST">
						<fieldset>
							<legend class="m-b-15">Legend</legend>
							<div class="form-group row m-b-15">
								<label class="col-md-3 col-form-label">Email address</label>
								<div class="col-md-7">
									<input type="email" class="form-control" placeholder="Enter email" />
								</div>
							</div>
							<div class="form-group row m-b-15">
								<label class="col-md-3 col-form-label">Password</label>
								<div class="col-md-7">
									<input type="password" class="form-control" placeholder="Password" />
								</div>
							</div>
							<div class="form-group row m-b-15">
								<div class="col-md-7 offset-md-3">
									<div class="checkbox checkbox-css">
										<input type="checkbox" id="fh_checkbox_css_1" />
										<label for="fh_checkbox_css_1">Check me out</label>
									</div>
								</div>
							</div>
							<div class="form-group row">
								<div class="col-md-7 offset-md-3">
									<button type="submit" class="btn btn-sm btn-primary m-r-5">Login</button>
									<button type="submit" class="btn btn-sm btn-default">Cancel</button>
								</div>
							</div>
						</fieldset>
					</form>
					
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;div class="form-group row m-b-15"&gt;
  &lt;label class="col-md-3 col-form-label"&gt;...&lt;/label&gt;
  &lt;div class="col-md-7"&gt;
    &lt;input type="text" class="form-control" placeholder="" /&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->
		<!-- begin row -->
		<div class="row">
			<!-- begin col-12 -->
			<div class="col-12">
				<!-- begin panel -->
				<panel title="Inline Form">
					<form class="form-inline" action="/" method="POST">
						<div class="form-group m-r-10">
							<input type="email" class="form-control" id="exampleInputEmail2" placeholder="Enter email" />
						</div>
						<div class="form-group m-r-10">
							<input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" />
						</div>
						<div class="form-check m-r-10">
							<input class="form-check-input" id="inline_form_checkbox" type="checkbox" />
							<label class="form-check-label" for="inline_form_checkbox">Remember me</label>
						</div>
						<button type="submit" class="btn btn-sm btn-primary m-r-5">Sign in</button>
						<button type="submit" class="btn btn-sm btn-default">Register</button>
					</form>
					
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;form class="form-inline"&gt;
  ...
&lt;/form&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->
	</div>
</template>