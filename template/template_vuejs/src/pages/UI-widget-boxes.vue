<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
			<li class="breadcrumb-item active">Widget Boxes</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Widget Boxes <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Panel (Default)">
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Panel (Default)"&gt;
  &lt;p&gt;Panel Content Here&lt;/p&gt;
&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel noButton="true">
					<template slot="header">
						<h4 class="panel-title">Panel Header with Dropdown</h4>
						<b-dropdown text="Action" variant="success" toggle-class="btn-xs">
							<b-dropdown-item href="#">Action</b-dropdown-item>
							<b-dropdown-item href="#">Another action</b-dropdown-item>
							<b-dropdown-item href="#">Something else here</b-dropdown-item>
							<b-dropdown-divider></b-dropdown-divider>
							<b-dropdown-item href="#">Separated link</b-dropdown-item>
						</b-dropdown>
					</template>
					
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel noButton="true"&gt;
  &lt;template slot="header"&gt;
    &lt;h4 class="panel-title"&gt;Panel Header with Dropdown&lt;/h4&gt;
    &lt;b-dropdown text="Action" variant="success" toggle-class="btn-xs"&gt;
      &lt;b-dropdown-item href="#"&gt;Action&lt;/b-dropdown-item&gt;
      &lt;b-dropdown-item href="#"&gt;Another action&lt;/b-dropdown-item&gt;
      &lt;b-dropdown-item href="#"&gt;Something else here&lt;/b-dropdown-item&gt;
      &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
      &lt;b-dropdown-item href="#"&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;
  &lt;/template&gt;
  &lt;p&gt;Panel Content Here&lt;/p&gt;
&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel noButton="true">
					<template slot="header">
						<h4 class="panel-title">Panel Header with Radio Button</h4>
						<b-form-group class="m-0">
							<b-form-radio-group id="btnradios1" buttons button-variant="success" size="xs" :options="[
									{ text: 'Option 1', value: 'radio1' },
									{ text: 'Option 2', value: 'radio2' }
								]" name="radiosBtnDefault" />
						</b-form-group>
					</template>
					
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel noButton="true"&gt;
  &lt;template slot="header"&gt;
    &lt;h4 class="panel-title"&gt;Panel Header with Radio Button&lt;/h4&gt;
    &lt;b-form-group class="m-0"&gt;
      &lt;b-form-radio-group id="btnradios1" buttons button-variant="success" size="xs" :options="[
        { text: 'Option 1', value: 'radio1' },
        { text: 'Option 2', value: 'radio2' }
      ]" name="radiosBtnDefault" /&gt;
    &lt;/b-form-group&gt;
  &lt;/template&gt;

  &lt;p&gt;Panel Content Here&lt;/p&gt;
&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel noButton="true">
					<template slot="header">
						<h4 class="panel-title">Panel Header with Progress Bar</h4>
						<div class="progress progress-sm">
							<div class="progress-bar progress-bar-striped bg-success progress-bar-animated" style="width: 40%">40%</div>
						</div>
					</template>
					
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" noButton="true" v-highlight>
						<pre><code class="html">&lt;panel noButton="true"&gt;
  &lt;template slot="header"&gt;
    &lt;h4 class="panel-title"&gt;Panel Header with Progress Bar&lt;/h4&gt;
    &lt;div class="progress progress-sm"&gt;
      &lt;div class="progress-bar progress-bar-striped bg-success progress-bar-animated" style="width: 40%"&gt;40%&lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;p&gt;Panel Content Here&lt;/p&gt;
&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel noButton="true">
					<template slot="header">
						<h4 class="panel-title">Panel Header with Label <span class="label label-success">NEW</span></h4>
					</template>
					
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel noButton="true"&gt;
  &lt;template slot="header"&gt;
    &lt;h4 class="panel-title"&gt;Panel Header with Label &lt;span class="label label-success"&gt;NEW&lt;/span&gt;&lt;/h4&gt;
  &lt;/template&gt;

  &lt;p&gt;Panel Content Here&lt;/p&gt;
&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Panel with Alert Box" noButton="true">
					<template slot="beforeBody">
						<b-alert variant="success" show dismissible>
							<i class="fa fa-check fa-2x pull-left m-r-10"></i>
							<p class="m-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac posuere lacus, quis suscipit sem. Nulla sagittis aliquam erat non convallis.</p>
						</b-alert>
					</template>
					<p>Panel Content Here</p>
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Panel with Alert Box" noButton="true"&gt;
  &lt;template slot="beforeBody"&gt;
    &lt;b-alert variant="success" show dismissible&gt;
      &lt;i class="fa fa-check fa-2x pull-left m-r-10"&gt;&lt;/i&gt;
      &lt;p class="m-b-0"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac posuere lacus, quis suscipit sem. Nulla sagittis aliquam erat non convallis.&lt;/p&gt;
    &lt;/b-alert&gt;
  &lt;/template&gt;
  &lt;p&gt;Panel Content Here&lt;/p&gt;
&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Hover View Icon" panelClass="panel-hover-icon">
					<p>Panel Content Here</p>
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Hover View Icon" panelClass="panel-hover-icon"&gt;
  ...
&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Panel with Scrollbar">
					<vue-custom-scrollbar style="height: 280px">
						<p>
							<span class="fa-stack fa-4x pull-left m-r-10 text-inverse">
								<i class="fab fa-twitter fa-stack-1x"></i>
							</span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed enim arcu. 
							Ut posuere in ligula quis ultricies. In in justo turpis. Donec ut dui at massa gravida 
							interdum nec vitae justo. Quisque ullamcorper vehicula dictum. Nullam hendrerit interdum eleifend. 
							Aenean luctus sed arcu laoreet scelerisque. Vivamus non ullamcorper mauris, id sagittis lorem. 
							Proin tincidunt mauris et dolor mattis imperdiet. Sed facilisis mattis diam elementum adipiscing. 
						</p>
						<p>
							<span class="fa-stack fa-4x pull-right m-l-10 text-inverse">
								<i class="fab fa-google-plus fa-stack-1x"></i>
							</span>
							Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
							Ut ante velit, pretium non nisi a, egestas placerat diam. Nullam aliquet iaculis ultricies. 
							Aliquam volutpat, sapien quis volutpat elementum, ligula purus auctor diam, at vestibulum nulla augue 
							vel purus. Praesent ac nisl a magna tincidunt interdum sed in turpis. Maecenas nec condimentum risus. 
							In congue pretium est, eget euismod tortor ornare quis.
						</p>
						<p>
							<span class="fa-stack fa-4x pull-left m-r-10 text-inverse">
								<i class="fab fa-facebook fa-stack-1x"></i>
							</span>
							Praesent eu ultrices justo. Vestibulum ante 
							ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
							Cras mattis ipsum quis sapien consectetur fringilla. 
							Etiam sagittis sem tempus purus elementum, vitae pretium sapien porta. Curabitur iaculis ante ut aliquam luctus. 
							Vivamus ullamcorper blandit imperdiet. Ut egestas, orci id rhoncus cursus, orci risus scelerisque enim, eget mattis eros lacus quis ligula. 
							Vivamus ullamcorper urna eget hendrerit laoreet.
						</p>
						<p>
							<span class="fa-stack fa-4x pull-right m-l-10 text-inverse">
								<i class="fab fa-apple fa-stack-1x"></i>
							</span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
							Morbi accumsan velit dolor. Donec convallis eleifend magna, at euismod tellus convallis a. 
							Curabitur in nisi dolor. Cras viverra scelerisque orci, sed interdum ligula volutpat non. 
							Nunc eu enim ac neque tempor feugiat. Duis posuere lacus non magna eleifend, 
							non dictum sem feugiat. Duis eleifend condimentum pulvinar.
						</p>
					</vue-custom-scrollbar>
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Panel with Scrollbar"&gt;
  &lt;vue-custom-scrollbar style="height: 280px"&gt;
    ...
  &lt;/vue-custom-scrollbar&gt;
&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Panel with Toolbar & Footer" footerClass="text-right" noBody="true">
					<template slot="beforeBody">
						<div class="panel-toolbar">
							<div class="btn-group m-r-5">
								<a class="btn btn-white" href="javascript:;"><i class="fa fa-bold"></i></a>
								<a class="btn btn-white active" href="javascript:;"><i class="fa fa-italic"></i></a>
								<a class="btn btn-white" href="javascript:;"><i class="fa fa-underline"></i></a>
							</div>
							<div class="btn-group">
								<a class="btn btn-white" href="javascript:;"><i class="fa fa-align-left"></i></a>
								<a class="btn btn-white active" href="javascript:;"><i class="fa fa-align-center"></i></a>
								<a class="btn btn-white" href="javascript:;"><i class="fa fa-align-right"></i></a>
								<a class="btn btn-white" href="javascript:;"><i class="fa fa-align-justify"></i></a>
							</div>
						</div>
						<textarea class="form-control no-rounded-corner" rows="5">This is a form textarea.</textarea>
					</template>
					<div slot="footer">
						<a href="javascript:;" class="btn btn-white btn-sm">Cancel</a>
						<a href="javascript:;" class="btn btn-primary btn-sm m-l-5">Action</a>
					</div>
					<div class="hljs-wrapper" slot="afterFooter" v-highlight>
						<pre><code class="html">&lt;panel title="Panel with Toolbar & Footer" footerClass="text-right" noBody="true"&gt;
  &lt;template slot="beforeBody"&gt;
    &lt;div class="panel-toolbar"&gt;
      &lt;div class="btn-group m-r-5"&gt;
        ...
      &lt;/div&gt;
      &lt;div class="btn-group"&gt;
        ...
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;textarea class="form-control no-rounded-corner" rows="5"&gt;This is a form textarea.&lt;/textarea&gt;
  &lt;/template&gt;
  &lt;div slot="footer"&gt;
    ...
  &lt;/div&gt;
&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel panelClass="panel-with-tabs" variant="default" noButton="true" noBody="true">
					<template slot="header">
						<h4 class="panel-title">Panel with Tabs</h4>
						<ul class="nav nav-tabs">
							<li class="nav-item">
								<a href="javascript:;" v-on:click.prevent="toggleTabs('home')" class="nav-link" v-bind:class="{ 'active': tabs.home }">
									<i class="fa fa-home mr-1"></i> 
									<span class="hidden-xs">Home</span>
								</a>
							</li>
							<li class="nav-item">
								<a href="javascript:;" v-on:click.prevent="toggleTabs('profile')" class="nav-link" v-bind:class="{ 'active': tabs.profile }">
									<i class="fa fa-user mr-1"></i> 
									<span class="hidden-xs">Profile</span>
								</a>
							</li>
						</ul>
					</template>
					<template slot="outsideBody">
						<div class="panel-body">
							<div class="tab-content">
								<div class="tab-pane fade" v-bind:class="{ 'active show': tabs.home }" id="home">
									<p class="m-b-0">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
								</div>
								<div class="tab-pane fade" v-bind:class="{ 'active show': tabs.profile }" id="profile">
									<p class="m-b-0">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
								</div>
							</div>
						</div>
						<div class="hljs-wrapper" v-highlight>
							<pre><code class="html">&lt;panel panelClass="panel-with-tabs" variant="default" noButton="true" noBody="true"&gt;
  &lt;template slot="header"&gt;
    &lt;ul class="nav nav-tabs pull-right"&gt;
      &lt;li class="nav-item"&gt;&lt;a href="#" v-on:click.prevent="toggleTabs('home')" class="nav-link" v-bind:class="{ 'active': tabs.home }"&gt;&lt;i class="fa fa-home"&gt;&lt;/i&gt; &lt;span class="d-none d-md-inline"&gt;Home&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
      &lt;li class="nav-item"&gt;&lt;a href="#" v-on:click.prevent="toggleTabs('profile')" class="nav-link" v-bind:class="{ 'active': tabs.profile }"&gt;&lt;i class="fa fa-user"&gt;&lt;/i&gt; &lt;span class="d-none d-md-inline"&gt;Profile&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;h4 class="panel-title"&gt;Panel with Tabs&lt;/h4&gt;
  &lt;/template&gt;
  &lt;template slot="outsideBody"&gt;
    &lt;div class="tab-content"&gt;
      &lt;div class="tab-pane fade" v-bind:class="{ 'active show': tabs.home }" id="home"&gt;
      &lt;p class="m-b-0"&gt;Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="tab-pane fade" v-bind:class="{ 'active show': tabs.profile }" id="profile"&gt;
      &lt;p class="m-b-0"&gt;Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/panel&gt;</code></pre>
						</div>
					</template>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->
	
		<h3 class="m-b-20">Panel Theme</h3>
		
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Panel (Default)" variant="default">
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Panel (Default)" variant="default"&gt;...&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Panel Success" variant="success">
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Panel Success" variant="success"&gt;...&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Panel Warning" variant="warning">
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Panel Warning" variant="warning"&gt;...&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Panel Danger" variant="danger">
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Panel Danger" variant="danger"&gt;...&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Panel Inverse">
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Panel Inverse"&gt;...&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Panel Primary" variant="primary">
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Panel Primary" variant="primary"&gt;...&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Panel Info" variant="info">
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Panel Info" variant="info"&gt;...&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->
		
		<h3>Full Color Panel Theme</h3>
		<p class="m-b-20">
			You can customize the panel body / header <code>background</code> & <code>text color</code> by adding predefined CSS class. E.g <code>.bg-black</code>. Full list of available predefined background class can be found <a href="helper_css.html">here</a>.
		</p>
		
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Full Color Panel" bodyClass="bg-black text-white">
					<p>Panel Content Here</p>
						
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Full Color Panel" bodyClass="bg-black text-white"&gt;
  ...
&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Full Color Panel" variant="primary" bodyClass="bg-blue text-white">
					<p>Panel Content Here</p>
						
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Full Color Panel" variant="primary" bodyClass="bg-blue text-white"&gt;
  ...
&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Full Color Panel" variant="success" bodyClass="bg-teal text-white">
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Full Color Panel" variant="success" bodyClass="bg-teal text-white"&gt;
  ...
&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Full Color Panel" variant="warning" bodyClass="bg-orange text-white">
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Full Color Panel" variant="warning" bodyClass="bg-orange text-white"&gt;
  ...
&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Full Color Panel" variant="danger" bodyClass="bg-red text-white">
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Full Color Panel" variant="danger" bodyClass="bg-red text-white"&gt;
  ...
&lt;/panel&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Full Color Panel" variant="info" bodyClass="bg-aqua text-white">
					<p>Panel Content Here</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre><code class="html">&lt;panel title="Full Color Panel" variant="info" bodyClass="bg-aqua text-white"&gt;
  ...
&lt;/panel&gt;</code></pre>
					</div>
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
	data() {
		return {
			tabs: {
				home: true,
				profile: false
			}
		}
	},
	methods: {
		toggleTabs(tab) {
			if (tab == 'home') {
				this.tabs.home = true;
				this.tabs.profile = false;
			} else if (tab == 'profile') {
				this.tabs.home = false;
				this.tabs.profile = true;
			}
		}
	}
}
</script>