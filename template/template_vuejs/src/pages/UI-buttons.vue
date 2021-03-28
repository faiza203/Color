<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
			<li class="breadcrumb-item active">Buttons</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Buttons <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel>
					<template slot="header">
						<h4 class="panel-title">Buttons <span class="label label-success">NEW</span></h4>
					</template>
					
					<button type="button" class="btn btn-white m-r-5 m-b-5">White</button>
					<button type="button" class="btn btn-default m-r-5 m-b-5">Default</button>
					<button type="button" class="btn btn-grey m-r-5 m-b-5">Grey</button>
					<button type="button" class="btn btn-purple m-r-5 m-b-5">Purple</button>
					<button type="button" class="btn btn-indigo m-r-5 m-b-5">Indigo</button>
					<button type="button" class="btn btn-primary m-r-5 m-b-5">Primary</button>
					<button type="button" class="btn btn-info m-r-5 m-b-5">Info</button>
					<button type="button" class="btn btn-yellow m-r-5 m-b-5">Yellow</button>
					<button type="button" class="btn btn-warning m-r-5 m-b-5">Warning</button>
					<button type="button" class="btn btn-pink m-r-5 m-b-5">Pink</button>
					<button type="button" class="btn btn-danger m-r-5 m-b-5">Danger</button>
					<button type="button" class="btn btn-success m-r-5 m-b-5">Success</button>
					<button type="button" class="btn btn-green m-r-5 m-b-5">Green</button>
					<button type="button" class="btn btn-lime m-r-5 m-b-5">Lime</button>
					<button type="button" class="btn btn-inverse m-r-5 m-b-5">Inverse</button>
					<button type="button" class="btn btn-link m-b-5">Link</button>
					
					<!-- bgine hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;button type="button" class="btn btn-default"&gt;Default&lt;/button&gt;
&lt;button type="button" class="btn btn-grey"&gt;Grey&lt;/button&gt;
&lt;button type="button" class="btn btn-purple"&gt;Purple&lt;/button&gt;
&lt;button type="button" class="btn btn-indigo"&gt;Indigo&lt;/button&gt;
&lt;button type="button" class="btn btn-primary"&gt;Primary&lt;/button&gt;
&lt;button type="button" class="btn btn-info"&gt;Info&lt;/button&gt;
&lt;button type="button" class="btn btn-yellow"&gt;Yellow&lt;/button&gt;
&lt;button type="button" class="btn btn-warning"&gt;Warning&lt;/button&gt;
&lt;button type="button" class="btn btn-pink"&gt;Pink&lt;/button&gt;
&lt;button type="button" class="btn btn-danger"&gt;Danger&lt;/button&gt;
&lt;button type="button" class="btn btn-success"&gt;Success&lt;/button&gt;
&lt;button type="button" class="btn btn-green"&gt;Green&lt;/button&gt;
&lt;button type="button" class="btn btn-lime"&gt;Lime&lt;/button&gt;
&lt;button type="button" class="btn btn-inverse"&gt;Inverse&lt;/button&gt;
&lt;button type="button" class="btn btn-link"&gt;Link&lt;/button&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Button Dropdowns">
					<b-dropdown split text="Dropdown" class="m-r-5 m-b-5" variant="default">
						<b-dropdown-item href="#">Action 1</b-dropdown-item>
						<b-dropdown-item href="#">Action 2</b-dropdown-item>
						<b-dropdown-item href="#">Action 3</b-dropdown-item>
						<b-dropdown-divider></b-dropdown-divider>
						<b-dropdown-item href="#">Action 4</b-dropdown-item>
					</b-dropdown>
					<b-dropdown split text="Dropup" class="m-r-5 m-b-5" variant="primary" dropup>
						<b-dropdown-item href="#">Action 1</b-dropdown-item>
						<b-dropdown-item href="#">Action 2</b-dropdown-item>
						<b-dropdown-item href="#">Action 3</b-dropdown-item>
						<b-dropdown-divider></b-dropdown-divider>
						<b-dropdown-item href="#">Action 4</b-dropdown-item>
					</b-dropdown>
					
					<!-- bgine hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;!-- dropdown --&gt;
&lt;b-dropdown split text="Dropdown" class="m-r-5 m-b-5" variant="default"&gt;
  &lt;b-dropdown-item href="#"&gt;Action 1&lt;/b-dropdown-item&gt;
  ...
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-item href="#"&gt;Action 4&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;

&lt;!-- dropup --&gt;
&lt;b-dropdown split text="Dropup" class="m-r-5 m-b-5" variant="primary" dropup&gt;
  &lt;b-dropdown-item href="#"&gt;Action 1&lt;/b-dropdown-item&gt;
  ..
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-item href="#"&gt;Action 4&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;</code></pre>
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
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Button Sizes">
					<a href="javascript:;" class="btn btn-primary btn-lg m-r-5 m-b-5">Large Button</a>
					<a href="javascript:;" class="btn btn-primary m-r-5 m-b-5">Default Button</a>
					<a href="javascript:;" class="btn btn-default btn-sm m-r-5 m-b-5">Small Button</a>
					<a href="javascript:;" class="btn btn-default btn-xs m-r-5 m-b-5">Extra Small</a>
					
					<!-- bgine hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;a href="#" class="btn btn-primary btn-lg"&gt;Large Button&lt;/a&gt;
&lt;a href="#" class="btn btn-primary"&gt;Default Button&lt;/a&gt;
&lt;a href="#" class="btn btn-primary btn-sm"&gt;Small Button&lt;/a&gt;
&lt;a href="#" class="btn btn-primary btn-xs"&gt;Extra Small&lt;/a&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Button State">
					<div class="row">
						<div class="col-md-6">
							<a href="javascript:;" class="btn btn-default disabled m-r-5 m-b-5">Disabled Button</a>
							<a href="javascript:;" class="btn btn-default active m-r-5 m-b-5">Active Button</a>
						</div>
						<div class="col-md-6">
							<a href="javascript:;" class="btn btn-primary btn-block m-b-5">Block Button</a>
						</div>
					</div>
					
					<!-- bgine hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;a href="#" class="btn btn-default disabled"&gt;Disabled Button&lt;/a&gt;
&lt;a href="#" class="btn btn-default active"&gt;Active Button&lt;/a&gt;
&lt;a href="#" class="btn btn-primary btn-block"&gt;Block Button&lt;/a&gt;</code></pre>
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
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Button with Icon">
					<div class="row text-center">
						<div class="col-md-6">
							<p>
								<a href="javascript:;" class="btn btn-lg btn-primary">
									<i class="fab fa-twitter fa-2x pull-left m-r-10 text-black"></i>
									<b>Twitter Bootstrap</b><br />
									<small>Version 3.0</small>
								</a>
							</p>
						</div>
						<div class="col-md-6">
							<p>
								<a href="javascript:;" class="btn btn-default m-r-5"><i class="fa fa-comment"></i> Comment</a>
								<a href="javascript:;" class="btn btn-default m-r-5"><i class="fa fa-cogs"></i> Setting</a>
								<a href="javascript:;" class="btn btn-default"><i class="fa fa-cog"></i></a>
							</p>
							<p>
								<a href="javascript:;" class="btn btn-default btn-block"><i class="fa fa-list pull-right"></i> Button block with icon</a>
							</p>
						</div>
					</div>
					
					<!-- bgine hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;a href="#" class="btn btn-lg btn-primary"&gt;
  &lt;i class="fab fa-twitter fa-2x pull-left m-r-10 text-black"&gt;&lt;/i&gt;
  &lt;b&gt;Twitter Bootstrap&lt;/b&gt;&lt;br /&gt;
  &lt;small&gt;Version 3.0&lt;/small&gt;
&lt;/a&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Button Group Vertical & Justified">
					<div class="row">
						<div class="col-md-6">
							<div class="btn-group">
								<button class="btn btn-white">Left</button>
								<button class="btn btn-white active">Middle</button>
								<button class="btn btn-white">Right</button>
							</div>
							<p></p>
							<div class="btn-group">
								<a class="btn btn-white" href="javascript:;"><i class="fa fa-align-left"></i></a>
								<a class="btn btn-white active" href="javascript:;"><i class="fa fa-align-center"></i></a>
								<a class="btn btn-white" href="javascript:;"><i class="fa fa-align-right"></i></a>
								<a class="btn btn-white" href="javascript:;"><i class="fa fa-align-justify"></i></a>
							</div>
							<p></p>
						</div>
						<div class="col-md-6">
							<div class="btn-group">
								<button type="button" class="btn btn-white">1</button>
								<button type="button" class="btn btn-white active">2</button>
								<button type="button" class="btn btn-white">3</button>
							</div>
							<div class="btn-group">
								<button type="button" class="btn btn-white">4</button>
								<button type="button" class="btn btn-white">5</button>
								<button type="button" class="btn btn-white">6</button>
							</div>
							<div class="btn-group">
								<button type="button" class="btn btn-white">7</button>
							</div>
							<p></p>
							<div class="btn-group">
								<a class="btn btn-inverse" href="javascript:;"><i class="fa fa-backward"></i></a>
								<a class="btn btn-inverse" href="javascript:;"><i class="fa fa-fast-backward"></i></a>
								<a class="btn btn-inverse" href="javascript:;"><i class="fa fa-pause"></i></a>
								<a class="btn btn-inverse active" href="javascript:;"><i class="fa fa-play"></i></a>
								<a class="btn btn-inverse" href="javascript:;"><i class="fa fa-forward"></i></a>
								<a class="btn btn-inverse" href="javascript:;"><i class="fa fa-fast-forward"></i></a>
							</div>
						</div>
					</div>
					
					<!-- bgine hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;div class="btn-group"&gt;
  &lt;button class="btn btn-white"&gt;Left&lt;/button&gt;
  &lt;button class="btn btn-white active"&gt;Middle&lt;/button&gt;
  &lt;button class="btn btn-white"&gt;Right&lt;/button&gt;
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
				<panel title="Button Toolbars">
					<div class="row">
						<div class="col-md-4">
							<div class="btn-group-vertical m-r-5">
								<button type="button" class="btn btn-purple"><i class="fa fa-cog"></i> Button</button>
								<button type="button" class="btn btn-purple active"><i class="fa fa-cog"></i> Button</button>
								<button type="button" class="btn btn-purple"><i class="fa fa-cog"></i> Button</button>
							</div>
						</div>
						<div class="col-md-8">
							<div class="btn-group btn-group-justified">
								<a class="btn btn-default">Left</a>
								<a class="btn btn-default active">Middle</a>
								<a class="btn btn-default">Right</a>
							</div>
						</div>
					</div>
					
					<!-- bgine hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;div class="btn-group"&gt;
  &lt;button class="btn btn-purple"&gt;Button&lt;/button&gt;
  &lt;button class="btn btn-purple active"&gt;Button&lt;/button&gt;
  &lt;button class="btn btn-purple"&gt;Button&lt;/button&gt;
&lt;/div&gt;

&lt;div class="btn-group btn-group-justified"&gt;
  &lt;a class="btn btn-default"&gt;Left&lt;/a&gt;
  &lt;a class="btn btn-default active"&gt;Middle&lt;/a&gt;
  &lt;a class="btn btn-default"&gt;Right&lt;/a&gt;
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
				<panel title="Button Icon & Sizes">
					<div class="row">
						<div class="col-md-6">
							<p>
								<a href="javascript:;" class="btn btn-default btn-icon btn-circle btn-lg m-r-2"><i class="fa fa-expand"></i></a>
								<a href="javascript:;" class="btn btn-success btn-icon btn-circle btn-lg m-r-2"><i class="fa fa-redo"></i></a>
								<a href="javascript:;" class="btn btn-warning btn-icon btn-circle btn-lg m-r-2"><i class="fa fa-minus"></i></a>
								<a href="javascript:;" class="btn btn-danger btn-icon btn-circle btn-lg m-r-2"><i class="fa fa-times"></i></a>
								<a href="javascript:;" class="btn btn-primary btn-icon btn-circle btn-lg m-r-2"><i class="fab fa-facebook-f"></i></a>
								<a href="javascript:;" class="btn btn-info btn-icon btn-circle btn-lg m-r-2"><i class="fab fa-twitter"></i></a>
								<a href="javascript:;" class="btn btn-inverse btn-icon btn-circle btn-lg"><i class="fab fa-stack-overflow"></i></a>
							</p>
							<p>
								<a href="javascript:;" class="btn btn-default btn-icon btn-circle btn-sm m-r-2"><i class="fa fa-expand"></i></a>
								<a href="javascript:;" class="btn btn-success btn-icon btn-circle btn-sm m-r-2"><i class="fa fa-redo"></i></a>
								<a href="javascript:;" class="btn btn-warning btn-icon btn-circle btn-sm m-r-2"><i class="fa fa-minus"></i></a>
								<a href="javascript:;" class="btn btn-danger btn-icon btn-circle btn-sm m-r-2"><i class="fa fa-times"></i></a>
								<a href="javascript:;" class="btn btn-primary btn-icon btn-circle btn-sm m-r-2"><i class="fab fa-facebook-f"></i></a>
								<a href="javascript:;" class="btn btn-info btn-icon btn-circle btn-sm m-r-2"><i class="fab fa-twitter"></i></a>
								<a href="javascript:;" class="btn btn-inverse btn-icon btn-circle btn-sm m-r-2"><i class="fab fa-stack-overflow"></i></a>
							</p>
						</div>
						<div class="col-md-6">
							<p>
								<a href="javascript:;" class="btn btn-default btn-icon btn-circle m-r-2"><i class="fa fa-expand"></i></a>
								<a href="javascript:;" class="btn btn-success btn-icon btn-circle m-r-2"><i class="fa fa-redo"></i></a>
								<a href="javascript:;" class="btn btn-warning btn-icon btn-circle m-r-2"><i class="fa fa-minus"></i></a>
								<a href="javascript:;" class="btn btn-danger btn-icon btn-circle m-r-2"><i class="fa fa-times"></i></a>
								<a href="javascript:;" class="btn btn-primary btn-icon btn-circle m-r-2"><i class="fab fa-facebook-f"></i></a>
								<a href="javascript:;" class="btn btn-info btn-icon btn-circle m-r-2"><i class="fab fa-twitter"></i></a>
								<a href="javascript:;" class="btn btn-inverse btn-icon btn-circle m-r-2"><i class="fab fa-stack-overflow"></i></a>
							</p>
							<p>
								<a href="javascript:;" class="btn btn-default btn-icon btn-circle btn-xs m-r-2"><i class="fa fa-expand"></i></a>
								<a href="javascript:;" class="btn btn-success btn-icon btn-circle btn-xs m-r-2"><i class="fa fa-redo"></i></a>
								<a href="javascript:;" class="btn btn-warning btn-icon btn-circle btn-xs m-r-2"><i class="fa fa-minus"></i></a>
								<a href="javascript:;" class="btn btn-danger btn-icon btn-circle btn-xs m-r-2"><i class="fa fa-times"></i></a>
								<a href="javascript:;" class="btn btn-primary btn-icon btn-circle btn-xs m-r-2"><i class="fab fa-facebook-f"></i></a>
								<a href="javascript:;" class="btn btn-info btn-icon btn-circle btn-xs m-r-2"><i class="fab fa-twitter"></i></a>
								<a href="javascript:;" class="btn btn-inverse btn-icon btn-circle btn-xs m-r-2"><i class="fab fa-stack-overflow"></i></a>
							</p>
						</div>
					</div>
					
					<!-- bgine hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;a href="#" class="btn btn-default btn-icon btn-circle btn-lg"&gt;
  &lt;i class="fa fa-expand"&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;a href="#" class="btn btn-default btn-icon btn-circle"&gt;
  &lt;i class="fa fa-expand"&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;a href="#" class="btn btn-default btn-icon btn-circle btn-sm"&gt;
  &lt;i class="fa fa-expand"&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;a href="#" class="btn btn-default btn-icon btn-circle btn-xs"&gt;
  &lt;i class="fa fa-expand"&gt;&lt;/i&gt;
&lt;/a&gt;</code></pre>
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