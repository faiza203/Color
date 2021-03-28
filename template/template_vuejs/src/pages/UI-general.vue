<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
			<li class="breadcrumb-item active">General</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">General UI Elements <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Alerts">
					<b-alert variant="success" show dismissible>
						<strong>Success!</strong>
						This is a success alert with <a href="#" class="alert-link">an example link</a>.
					</b-alert>
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight><pre><code>&lt;b-alert variant="success" show dismissible&gt;
  &lt;strong&gt;Success!&lt;/strong&gt;
  This is a success alert with &lt;a href="#" class="alert-link"&gt;an example link&lt;/a&gt;.
&lt;/b-alert&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
									
				<!-- begin panel -->
				<panel>
					<template slot="header">
						<h4 class="panel-title">Alerts Color <span class="label label-success">NEW</span></h4>
					</template>
					
					<div class="row row-space-10">
						<div class="col-md-4">
							<b-alert variant="primary" class="m-b-10" show dismissible>
								Primary alert with <a href="#" class="alert-link">an example link</a>.
							</b-alert>
						</div>
						<div class="col-md-4">
							<b-alert variant="info" class="m-b-10" show dismissible>
								Info alert with <a href="#" class="alert-link">an example link</a>.
							</b-alert>
						</div>
						<div class="col-md-4">
							<b-alert variant="purple" class="m-b-10" show dismissible>
								Purple alert with <a href="#" class="alert-link">an example link</a>.
							</b-alert>
						</div>
						<div class="col-md-4">
							<b-alert variant="indigo" class="m-b-10" show dismissible>
								Indigo alert with <a href="#" class="alert-link">an example link</a>.
							</b-alert>
						</div>
						<div class="col-md-4">
							<b-alert variant="success" class="m-b-10" show dismissible>
								Success alert with <a href="#" class="alert-link">an example link</a>.
							</b-alert>
						</div>
						<div class="col-md-4">
							<b-alert variant="green" class="m-b-10" show dismissible>
								Green alert with <a href="#" class="alert-link">an example link</a>.
							</b-alert>
						</div>
						<div class="col-md-4">
							<b-alert variant="lime" class="m-b-10" show dismissible>
								Lime alert with <a href="#" class="alert-link">an example link</a>.
							</b-alert>
						</div>
						<div class="col-md-4">
							<b-alert variant="warning" class="m-b-10" show dismissible>
								Warning alert with <a href="#" class="alert-link">an example link</a>.
							</b-alert>
						</div>
						<div class="col-md-4">
							<b-alert variant="yellow" class="m-b-10" show dismissible>
								Yellow alert with <a href="#" class="alert-link">an example link</a>.
							</b-alert>
						</div>
						<div class="col-md-4">
							<b-alert variant="danger" class="m-b-10" show dismissible>
								Danger alert with <a href="#" class="alert-link">an example link</a>.
							</b-alert>
						</div>
						<div class="col-md-4">
							<b-alert variant="pink" class="m-b-10" show dismissible>
								Pink alert with <a href="#" class="alert-link">an example link</a>.
							</b-alert>
						</div>
						<div class="col-md-4">
							<b-alert variant="dark" class="m-b-10" show dismissible>
								Dark alert with <a href="#" class="alert-link">an example link</a>.
							</b-alert>
						</div>
						<div class="col-md-4">
							<b-alert variant="secondary" class="m-b-10" show dismissible>
								Secondary alert with <a href="#" class="alert-link">an example link</a>.
							</b-alert>
						</div>
						<div class="col-md-4">
							<b-alert variant="light" class="m-b-10" show dismissible>
								Light alert with <a href="#" class="alert-link">an example link</a>.
							</b-alert>
						</div>
					</div>
					
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight><pre><code class="html">&lt;b-alert variant="primary" show dismissible&gt;...&lt;/b-alert&gt;
&lt;b-alert variant="secondary" show dismissible&gt;...&lt;/b-alert&gt;
&lt;b-alert variant="success" show dismissible&gt;...&lt;/b-alert&gt;
&lt;b-alert variant="danger" show dismissible&gt;...&lt;/b-alert&gt;
&lt;b-alert variant="warning" show dismissible&gt;...&lt;/b-alert&gt;
&lt;b-alert variant="yellow" show dismissible&gt;...&lt;/b-alert&gt;
&lt;b-alert variant="info" show dismissible&gt;...&lt;/b-alert&gt;
&lt;b-alert variant="lime" show dismissible&gt;...&lt;/b-alert&gt;
&lt;b-alert variant="purple" show dismissible&gt;...&lt;/b-alert&gt;
&lt;b-alert variant="light" show dismissible&gt;...&lt;/b-alert&gt;
&lt;b-alert variant="dark" show dismissible&gt;...&lt;/b-alert&gt;
&lt;b-alert variant="indigo" show dismissible&gt;...&lt;/b-alert&gt;
&lt;b-alert variant="pink" show dismissible&gt;...&lt;/b-alert&gt;
&lt;b-alert variant="green" show dismissible&gt;...&lt;/b-alert&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
									
				<!-- begin panel -->
				<panel title="Notes">
					<div class="note note-primary m-b-15">
						<div class="note-icon"><i class="fab fa-facebook-f"></i></div>
						<div class="note-content">
							<h4><b>Note with icon!</b></h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Maecenas id gravida libero. Etiam semper id sem a ultricies.
							</p>
						</div>
					</div>
					<div class="note note-warning note-with-right-icon m-b-15">
						<div class="note-content text-right">
							<h4><b>Note with right icon!</b></h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Maecenas id gravida libero. Etiam semper id sem a ultricies.
							</p>
						</div>
						<div class="note-icon"><i class="fa fa-lightbulb"></i></div>
					</div>
					<div class="note note-secondary m-b-15">
						<div class="note-content">
							<h4><b>Note without icon!</b></h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Maecenas id gravida libero. Etiam semper id sem a ultricies.
							</p>
						</div>
					</div>
					
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight><pre><code>&lt;!-- default --&gt;
&lt;div class="note note-primary"&gt;
  &lt;div class="note-icon"&gt;&lt;i class="fab fa-facebook-f"&gt;&lt;/i&gt;&lt;/div&gt;
  &lt;div class="note-content"&gt;
    &lt;h4&gt;&lt;b&gt;Note with icon!&lt;/b&gt;&lt;/h4&gt;
    &lt;p&gt; ... &lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- with right icon --&gt;
&lt;div class="note note-warning note-with-right-icon"&gt;
  &lt;div class="note-icon"&gt;&lt;i class="fa fa-lightbulb"&gt;&lt;/i&gt;&lt;/div&gt;
  &lt;div class="note-content text-right"&gt;
    &lt;h4&gt;&lt;b&gt;Note with right icon!&lt;/b&gt;&lt;/h4&gt;
    &lt;p&gt; ... &lt;/p&gt;
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
				<panel>
					<template slot="header">
						<h4 class="panel-title">Labels & Badges <span class="label label-success">NEW</span></h4>
					</template>
					
					<div class="row f-s-15">
						<div class="col-md-8">
							<div class="m-b-3">
								<span class="label label-danger m-r-3">Danger</span>
								<span class="label label-warning m-r-3">Warning</span>
								<span class="label label-yellow m-r-3">Yellow</span>
								<span class="label label-lime m-r-3">Lime</span>
								<span class="label label-green m-r-3">Green</span>
								<span class="label label-success">Success</span>
							</div>
							<div class="m-b-3">
								<span class="label label-primary m-r-3">Primary</span>
								<span class="label label-info m-r-3">Info</span>
								<span class="label label-purple m-r-3">Purple</span>
								<span class="label label-indigo m-r-3">Indigo</span>
								<span class="label label-dark">Dark</span>
							</div>
							<div class="m-b-3">
								<span class="label label-pink m-r-3">Pink</span>
								<span class="label label-secondary m-r-3">Secondary</span>
								<span class="label label-default m-r-3">Default</span>
								<span class="label label-light">Light</span>
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-b-3">
								<span class="label label-inverse">label</span>
							</div>
							<div class="m-b-3">
								<span class="badge badge-secondary">badge</span>
							</div>
							<div class="m-b-3">
								<span class="badge badge-default badge-square">badge-square</span>
							</div>
						</div>
					</div>
					
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight><pre><code>&lt;!-- label --&gt;
&lt;span class="label label-inverse"&gt;label&lt;/span&gt;

&lt;!-- badge --&gt;
&lt;span class="badge badge-secondary"&gt;badge&lt;/span&gt;

&lt;!-- badge-square --&gt;
&lt;span class="badge badge-default badge-square"&gt;badge-square&lt;/span&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
									
				<!-- begin panel -->
				<panel title="Pagination & Pager">
					<div>
						<ul class="pagination pagination-lg m-t-0 m-b-5">
							<li class="page-item disabled"><a href="javascript:;" class="page-link">«</a></li>
							<li class="page-item active"><a href="javascript:;" class="page-link">1</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">2</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">3</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">4</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">5</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">»</a></li>
						</ul>
					</div>
					<div>
						<ul class="pagination m-t-0 m-b-5">
							<li class="page-item disabled"><a href="javascript:;" class="page-link">«</a></li>
							<li class="page-item active"><a href="javascript:;" class="page-link">1</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">2</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">3</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">4</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">5</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">»</a></li>
						</ul>
					</div>
					<div>
						<ul class="pagination pagination-sm m-t-0 m-b-5">
							<li class="page-item disabled"><a href="javascript:;" class="page-link">«</a></li>
							<li class="page-item active"><a href="javascript:;" class="page-link">1</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">2</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">3</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">4</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">5</a></li>
							<li class="page-item"><a href="javascript:;" class="page-link">»</a></li>
						</ul>
					</div>
					<ul class="pager m-b-10">
						<li><a href="javascript:;">Previous</a></li>
						<li><a href="javascript:;">Next</a></li>
					</ul>
					<ul class="pager m-t-0 m-b-0">
						<li class="previous disabled"><a href="javascript:;">&larr; Older</a></li>
						<li class="next"><a href="javascript:;">Newer &rarr;</a></li>
					</ul>
					
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight><pre><code>&lt;!-- pagination --&gt;
&lt;ul class="pagination"&gt;
  &lt;li class="page-item disabled"&gt;&lt;a href="#" class="page-link"&gt;«&lt;/a&gt;&lt;/li&gt;
  &lt;li class="page-item active"&gt;&lt;a href="#" class="page-link"&gt;1&lt;/a&gt;&lt;/li&gt;
  &lt;li class="page-item"&gt;&lt;a href="#" class="page-link"&gt;2&lt;/a&gt;&lt;/li&gt;
  &lt;li class="page-item"&gt;&lt;a href="#" class="page-link"&gt;3&lt;/a&gt;&lt;/li&gt;
  &lt;li class="page-item"&gt;&lt;a href="#" class="page-link"&gt;4&lt;/a&gt;&lt;/li&gt;
  &lt;li class="page-item"&gt;&lt;a href="#" class="page-link"&gt;5&lt;/a&gt;&lt;/li&gt;
  &lt;li class="page-item"&gt;&lt;a href="#" class="page-link"&gt;»&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- pager --&gt;
&lt;ul class="pager"&gt;
  &lt;li&gt;&lt;a href="#"&gt;Previous&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Next&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>
					</div>
					<!-- end hljs-wrapper -->
				</panel>
				<!-- end panel -->
									
				<!-- begin panel -->
				<panel title="Progress bar">
					<div class="row">
						<div class="col-md-6">
							<div class="progress rounded-corner m-b-15">
								<div class="progress-bar" style="width: 80%">Basic</div>
							</div>
							<div class="progress rounded-corner m-b-15">
								<div class="progress-bar bg-warning progress-bar-striped" style="width: 80%">Striped</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="progress rounded-corner m-b-15">
								<div class="progress-bar bg-purple progress-bar-striped progress-bar-animated" style="width: 80%">Animated</div>
							</div>
							<div class="progress rounded-corner m-b-15">
								<div class="progress-bar bg-dark" style="width: 25%">Stacked</div>
								<div class="progress-bar bg-grey" style="width: 25%">Stacked</div>
								<div class="progress-bar bg-lime" style="width: 25%">Stacked</div>
							</div>
						</div>
					</div>
					
					<!-- begin hljs-wrapper -->
					<div class="hljs-wrapper" slot="outsideBody" v-highlight><pre><code>&lt;!-- default --&gt;
&lt;div class="progress rounded-corner"&gt;
  &lt;div class="progress-bar" style="width: 80%"&gt;Basic&lt;/div&gt;
&lt;/div&gt;

&lt;!-- striped --&gt;
&lt;div class="progress rounded-corner progress-striped"&gt;
  &lt;div class="progress-bar bg-warning" style="width: 80%"&gt;
    Striped
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- animated --&gt;
&lt;div class="progress rounded-corner progress-striped active"&gt;
  &lt;div class="progress-bar bg-purple" style="width: 80%"&gt;
    Animated
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- stacked --&gt;
&lt;div class="progress rounded-corner"&gt;
  &lt;div class="progress-bar bg-dark" style="width: 25%"&gt;
    Stacked
  &lt;/div&gt;
  &lt;div class="progress-bar bg-grey" style="width: 25%"&gt;
    Stacked
  &lt;/div&gt;
  &lt;div class="progress-bar bg-lime" style="width: 25%"&gt;
    Stacked
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
	</div>
</template>