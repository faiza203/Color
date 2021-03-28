<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
			<li class="breadcrumb-item active">Typography</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Typography <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Headings">
					<h1>h1. Heading 1</h1>
					<h2>h2. Heading 2</h2>
					<h3>h3. Heading 3</h3>
					<h4>h4. Heading 4</h4>
					<h5>h5. Heading 5</h5>
					<h6>h6. Heading 6</h6>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;h1&gt;h1. Heading 1&lt;/h1&gt;
&lt;h2&gt;h2. Heading 2&lt;/h2&gt;
&lt;h3&gt;h3. Heading 3&lt;/h3&gt;
&lt;h4&gt;h4. Heading 4&lt;/h4&gt;
&lt;h5&gt;h5. Heading 5&lt;/h5&gt;
&lt;h6&gt;h6. Heading 6&lt;/h6&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="small, semiBold, Bold, Italic">
					<div class="text-inverse">
						<div class="row f-s-14">
							<div class="col-md-6">
								<div class="f-s-12"><small>This line of text is meant to be treated as fine print.</small></div>
								<div><em>rendered as italicized text</em></div>
							</div>
							<div class="col-md-6">
								<div><span class="semi-bold">rendered as semi bold text</span></div>
								<div><strong>rendered as bold text</strong></div>
							</div>
						</div>
					</div>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;small&gt;This line of text is meant to be treated as fine print.&lt;/small&gt;
&lt;em&gt;rendered as italicized text&lt;/em&gt;
&lt;span class="semi-bold"&gt;rendered as semi bold text&lt;/span&gt;
&lt;strong&gt;rendered as bold text&lt;/strong&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Alignment Classes">
					<div class="text-inverse">
						<p class="text-left">Left aligned text.</p>
						<p class="text-center">Center aligned text.</p>
						<p class="text-right">Right aligned text.</p>
					</div>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;p class="text-left"&gt;Left aligned text.&lt;/p&gt;
&lt;p class="text-center"&gt;Center aligned text.&lt;/p&gt;
&lt;p class="text-right"&gt;Right aligned text.&lt;/p&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Emphasis classes">
					<p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
					<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
					<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
					<p class="text-info">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.</p>
					<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;p class="text-muted"&gt;...&lt;/p&gt;
&lt;p class="text-warning"&gt;...&lt;/p&gt;
&lt;p class="text-danger"&gt;...&lt;/p&gt;
&lt;p class="text-info"&gt;...&lt;/p&gt;
&lt;p class="text-success"&gt;...&lt;/p&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Unordered List">
					<div class="text-inverse">
						<ul>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Consectetur adipiscing elit</li>
							<li>Nulla volutpat aliquam velit
								<ul>
								<li>Phasellus iaculis neque</li>
								<li>Purus sodales ultricies</li>
								</ul>
							</li>
							<li>Faucibus porta lacus fringilla vel</li>
						</ul>
					</div>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;ul&gt;
  &lt;li&gt;Lorem ipsum dolor sit amet&lt;/li&gt;
  &lt;li&gt;
    Nulla volutpat aliquam velit
    &lt;ul&gt;
      &lt;li&gt;Phasellus iaculis neque&lt;/li&gt;
      ...
    &lt;/ul&gt;
  &lt;/li&gt;
  ...
&lt;/ul&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Ordered List">
					<div class="text-inverse">
						<ol>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Consectetur adipiscing elit</li>
							<li>Integer molestie lorem at massa</li>
							<li>Facilisis in pretium nisl aliquet</li>
							<li>Nulla volutpat aliquam velit</li>
							<li>Faucibus porta lacus fringilla vel</li>
							<li>Aenean sit amet erat nunc</li>
							<li>Eget porttitor lorem</li>
						</ol>
					</div>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;ol&gt;
  &lt;li&gt;Lorem ipsum dolor sit amet&lt;/li&gt;
  &lt;li&gt;Consectetur adipiscing elit&lt;/li&gt;
  ...
&lt;/ol&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Unstyled & Inline List Classes">
					<div class="text-inverse">
						<ul class="list-unstyled">
							<li>Lorem ipsum dolor sit amet</li>
							<li>Consectetur adipiscing elit</li>
							<li>Integer molestie lorem at massa</li>
							<li>Facilisis in pretium nisl aliquet</li>
							<li>Nulla volutpat aliquam velit</li>
						</ul>
						<hr class="m-t-15 m-b-15" />
						<ul class="list-inline">
							<li>Lorem ipsum dolor sit amet</li>
							<li>Consectetur adipiscing elit</li>
							<li>Integer molestie lorem at massa</li>
						</ul>
					</div>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;!-- list unstyled --&gt;
&lt;ul class="list-unstyled"&gt;
  &lt;li&gt;Lorem ipsum dolor sit amet&lt;/li&gt;
  &lt;li&gt;Consectetur adipiscing elit&lt;/li&gt;
  ...
&lt;/ul&gt;

&lt;!-- list inline --&gt;
&lt;ul class="list-inline"&gt;
  &lt;li&gt;Lorem ipsum dolor sit amet&lt;/li&gt;
  &lt;li&gt;Consectetur adipiscing elit&lt;/li&gt;
  ...
&lt;/ul&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Body Copy">
					<p>
						Quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, 
						nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
					</p>
					<p>
						Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus
						auctor fringilla. 
					</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;p&gt;
  Quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
&lt;/p&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Lead body copy">
					<p class="lead">
						Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
					</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;p class="lead"&gt;
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
&lt;/p&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Abbreviation">
					<p>An abbreviation of the word attribute is  <abbr title="attribute">attr</abbr></p>
					<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr> is the best thing since sliced bread.</p>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>An abbreviation of the word attribute is  
&lt;abbr title="attribute"&gt;attr&lt;/abbr&gt;
                        
&lt;abbr title="HyperText Markup Language" class="initialism"&gt;HTML&lt;/abbr&gt; 
is the best thing since sliced bread.</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Addresses">
					<address>
						<strong>Twitter, Inc.</strong><br />
						795 Folsom Ave, Suite 600<br />
						San Francisco, CA 94107<br />
						<abbr title="Phone">P:</abbr> (123) 456-7890
					</address>
					<address>
						<strong>Full Name</strong><br />
						<a href="mailto:#">first.last@example.com</a>
					</address>
						
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;address&gt;
  &lt;strong&gt;Twitter, Inc.&lt;/strong&gt;&lt;br /&gt;
  795 Folsom Ave, Suite 600&lt;br /&gt;
  San Francisco, CA 94107&lt;br /&gt;
  &lt;abbr title="Phone"&gt;P:&lt;/abbr&gt; (123) 456-7890
&lt;/address&gt;
&lt;address&gt;
&lt;strong&gt;Full Name&lt;/strong&gt;&lt;br /&gt;
  &lt;a href="mailto:#"&gt;first.last@example.com&lt;/a&gt;
&lt;/address&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Blockquote">
					<blockquote>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
						<small>Someone famous <cite title="Source Title">Source Title</cite></small>
					</blockquote>
					<blockquote class="pull-right">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
						<small>Someone famous <cite title="Source Title">Source Title</cite></small>
					</blockquote>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;blockquote&gt;
  &lt;p&gt;...&lt;/p&gt;
  &lt;small&gt;
    Someone famous &lt;cite title="Source Title"&gt;Source Title&lt;/cite&gt;
  &lt;/small&gt;
&lt;/blockquote&gt;
&lt;blockquote class="pull-right"&gt;
  ...
&lt;/blockquote&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Description List">
					<dl>
						<dt class="text-inverse">Description lists</dt>
						<dd>A description list is perfect for defining terms.</dd>
						<dt class="text-inverse m-t-10">Euismod</dt>
						<dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
						<dd>Donec id elit non mi porta gravida at eget metus.</dd>
						<dt class="text-inverse m-t-10">Malesuada porta</dt>
						<dd>Etiam porta sem malesuada magna mollis euismod.</dd>
					</dl>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;dl&gt;
  &lt;dt class="text-inverse"&gt;Description Title&lt;/dt&gt;
  &lt;dd&gt;A description list...&lt;/dd&gt;
  &lt;dt class="text-inverse m-t-10"&gt;Description Title&lt;/dt&gt;
  &lt;dd&gt;A description list....&lt;/dd&gt;
  &lt;dd&gt;A description list...&lt;/dd&gt;
  &lt;dt class="text-inverse m-t-10"&gt;Description Title&lt;/dt&gt;
  &lt;dd&gt;A description list...&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
				<!-- begin panel -->
				<panel title="Horizontal Description List">
					<dl class="dl-horizontal">
						<dt class="text-inverse">Description lists</dt>
						<dd>A description list is perfect for defining terms.</dd>
						<dt class="text-inverse">Euismod</dt>
						<dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
						<dd>Donec id elit non mi porta gravida at eget metus.</dd>
						<dt class="text-inverse">Malesuada porta</dt>
						<dd>Etiam porta sem malesuada magna mollis euismod.</dd>
					</dl>
					
					<div class="hljs-wrapper" slot="outsideBody" v-highlight>
						<pre class="html"><code>&lt;dl class="dl-horizontal"&gt;
  &lt;dt class="text-inverse"&gt;Description Title&lt;/dt&gt;
  &lt;dd&gt;A description list...&lt;/dd&gt;
  &lt;dt class="text-inverse"&gt;Description Title&lt;/dt&gt;
  &lt;dd&gt;A description list...&lt;/dd&gt;
  &lt;dd&gt;A description list...&lt;/dd&gt;
  &lt;dt class="text-inverse"&gt;Description Title&lt;/dt&gt;
  &lt;dd&gt;A description list...&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
					</div>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->
	</div>
</template>