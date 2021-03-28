<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
			<li class="breadcrumb-item active">Tabs & Accordions</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Tabs & Accordions <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin nav-tabs -->
				<b-tabs nav-class="nav-tabs-inverse" nav-wrapper-class="nav nav-tabs nav-tabs-inverse">
					<!-- begin tab -->
					<b-tab active>
						<template slot="title">
							<span class="d-sm-none">Tab 1</span>
							<span class="d-sm-block d-none">Default Tab 1</span>
						</template>
						
						<h3 class="m-t-10"><i class="fa fa-cog"></i> Lorem ipsum dolor sit amet</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Integer ac dui eu felis hendrerit lobortis. Phasellus elementum, nibh eget adipiscing porttitor, 
							est diam sagittis orci, a ornare nisi quam elementum tortor. Proin interdum ante porta est convallis 
							dapibus dictum in nibh. Aenean quis massa congue metus mollis fermentum eget et tellus. 
							Aenean tincidunt, mauris ut dignissim lacinia, nisi urna consectetur sapien, nec eleifend orci eros id lectus.
						</p>
						<p class="text-right m-b-0">
							<a href="javascript:;" class="btn btn-white m-r-5">Default</a>
							<a href="javascript:;" class="btn btn-primary">Primary</a>
						</p>
					</b-tab>
					<!-- end tab -->
					<!-- begin tab -->
					<b-tab>
						<template slot="title">
							<span class="d-sm-none">Tab 2</span>
							<span class="d-sm-block d-none">Default Tab 2</span>
						</template>
						
						<blockquote>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<small>Someone famous in <cite title="Source Title">Source Title</cite></small>
						</blockquote>
						<h4>Lorem ipsum dolor sit amet</h4>
						<p>
							Nullam ac sapien justo. Nam augue mauris, malesuada non magna sed, feugiat blandit ligula. 
							In tristique tincidunt purus id iaculis. Pellentesque volutpat tortor a mauris convallis, 
							sit amet scelerisque lectus adipiscing.
						</p>
					</b-tab>
					<!-- end tab -->
					<!-- begin tab -->
					<b-tab>
						<template slot="title">
							<span class="d-sm-none">Tab 3</span>
							<span class="d-sm-block d-none">Default Tab 3</span>
						</template>
						
						<p>
							<span class="fa-stack fa-4x pull-left m-r-10">
								<i class="fa fa-square-o fa-stack-2x"></i>
								<i class="fab fa-twitter fa-stack-1x"></i>
							</span>
							Praesent tincidunt nulla ut elit vestibulum viverra. Sed placerat magna eget eros accumsan elementum. 
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lobortis neque. 
							Maecenas justo odio, bibendum fringilla quam nec, commodo rutrum quam. 
							Donec cursus erat in lacus congue sodales. Nunc bibendum id augue sit amet placerat. 
							Quisque et quam id felis tempus volutpat at at diam. Vivamus ac diam turpis.Sed at lacinia augue. 
							Nulla facilisi. Fusce at erat suscipit, dapibus elit quis, luctus nulla. 
							Quisque adipiscing dui nec orci fermentum blandit.
							Sed at lacinia augue. Nulla facilisi. Fusce at erat suscipit, dapibus elit quis, luctus nulla. 
							Quisque adipiscing dui nec orci fermentum blandit.
						</p>
					</b-tab>
					<!-- end tab -->
				</b-tabs>
				<!-- end nav-tabs -->
				
				<!-- begin nav-tabs-pills -->
				<b-tabs pills nav-class="mb-3" content-class="p-15 rounded bg-white mb-4">
					<b-tab active>
						<template slot="title">
							<span class="d-sm-none">Pills 1</span>
							<span class="d-sm-block d-none">Pills Tab 1</span>
						</template>
						
						<h3 class="m-t-10">Nav Pills Tab 1</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Integer ac dui eu felis hendrerit lobortis. Phasellus elementum, nibh eget adipiscing porttitor, 
							est diam sagittis orci, a ornare nisi quam elementum tortor. 
							Proin interdum ante porta est convallis dapibus dictum in nibh. 
							Aenean quis massa congue metus mollis fermentum eget et tellus. 
							Aenean tincidunt, mauris ut dignissim lacinia, nisi urna consectetur sapien, 
							nec eleifend orci eros id lectus.
						</p>
					</b-tab>
					<b-tab>
						<template slot="title">
							<span class="d-sm-none">Pills 2</span>
							<span class="d-sm-block d-none">Pills Tab 2</span>
						</template>
						
						<h3 class="m-t-10">Nav Pills Tab 2</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Integer ac dui eu felis hendrerit lobortis. Phasellus elementum, nibh eget adipiscing porttitor, 
							est diam sagittis orci, a ornare nisi quam elementum tortor. 
							Proin interdum ante porta est convallis dapibus dictum in nibh. 
							Aenean quis massa congue metus mollis fermentum eget et tellus. 
							Aenean tincidunt, mauris ut dignissim lacinia, nisi urna consectetur sapien, 
							nec eleifend orci eros id lectus.
						</p>
					</b-tab>
					<b-tab>
						<template slot="title">
							<span class="d-sm-none">Pills 3</span>
							<span class="d-sm-block d-none">Pills Tab 3</span>
						</template>
						
						<h3 class="m-t-10">Nav Pills Tab 3</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Integer ac dui eu felis hendrerit lobortis. Phasellus elementum, nibh eget adipiscing porttitor, 
							est diam sagittis orci, a ornare nisi quam elementum tortor. 
							Proin interdum ante porta est convallis dapibus dictum in nibh. 
							Aenean quis massa congue metus mollis fermentum eget et tellus. 
							Aenean tincidunt, mauris ut dignissim lacinia, nisi urna consectetur sapien, 
							nec eleifend orci eros id lectus.
						</p>
					</b-tab>
				</b-tabs>
				<!-- end nav-tabs-pills -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin #accordion -->
				<div id="accordion" class="accordion">
					<!-- begin b-card -->
					<b-card class="bg-dark text-white" no-body>
						<b-card-header header-tag="header" class="card-header bg-dark-darker text-white pointer-cursor" v-b-toggle.accordion1>
							<i class="fa fa-circle fa-fw text-blue mr-2 f-s-8"></i> Collapsible Group Item #1
						</b-card-header>
						<b-collapse id="accordion1" visible accordion="my-accordion">
							<b-card-body>
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
							</b-card-body>
						</b-collapse>
					</b-card>
					<!-- end b-card -->
					<!-- begin b-card -->
					<b-card class="bg-dark text-white" no-body>
						<b-card-header header-tag="header" class="card-header bg-dark-darker text-white pointer-cursor" v-b-toggle.accordion2>
							<i class="fa fa-circle fa-fw text-indigo mr-2 f-s-8"></i> Collapsible Group Item #2
						</b-card-header>
						<b-collapse id="accordion2" accordion="my-accordion">
							<b-card-body>
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
							</b-card-body>
						</b-collapse>
					</b-card>
					<!-- end b-card -->
					<!-- begin b-card -->
					<b-card class="bg-dark text-white" no-body>
						<b-card-header header-tag="header" class="card-header bg-dark-darker text-white pointer-cursor" v-b-toggle.accordion3>
							<i class="fa fa-circle fa-fw text-teal mr-2 f-s-8"></i> Collapsible Group Item #3
						</b-card-header>
						<b-collapse id="accordion3" accordion="my-accordion">
							<b-card-body>
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
							</b-card-body>
						</b-collapse>
					</b-card>
					<!-- end b-card -->
					<!-- begin b-card -->
					<b-card class="bg-dark text-white" no-body>
						<b-card-header header-tag="header" class="card-header bg-dark-darker text-white pointer-cursor" v-b-toggle.accordion4>
							<i class="fa fa-circle fa-fw text-info mr-2 f-s-8"></i> Collapsible Group Item #4
						</b-card-header>
						<b-collapse id="accordion4" accordion="my-accordion">
							<b-card-body>
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
							</b-card-body>
						</b-collapse>
					</b-card>
					<!-- end b-card -->
					<!-- begin b-card -->
					<b-card class="bg-dark text-white" no-body>
						<b-card-header header-tag="header" class="card-header bg-dark-darker text-white pointer-cursor" v-b-toggle.accordion5>
							<i class="fa fa-circle fa-fw text-warning mr-2 f-s-8"></i> Collapsible Group Item #5
						</b-card-header>
						<b-collapse id="accordion5" accordion="my-accordion">
							<b-card-body>
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
							</b-card-body>
						</b-collapse>
					</b-card>
					<!-- end b-card -->
					<!-- begin b-card -->
					<b-card class="bg-dark text-white" no-body>
						<b-card-header header-tag="header" class="card-header bg-dark-darker text-white pointer-cursor" v-b-toggle.accordion6>
							<i class="fa fa-circle fa-fw text-danger mr-2 f-s-8"></i> Collapsible Group Item #6
						</b-card-header>
						<b-collapse id="accordion6" accordion="my-accordion">
							<b-card-body>
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
							</b-card-body>
						</b-collapse>
					</b-card>
					<!-- end b-card -->
					<!-- begin b-card -->
					<b-card class="bg-dark text-white" no-body>
						<b-card-header header-tag="header" class="card-header bg-dark-darker text-white pointer-cursor" v-b-toggle.accordion7>
							<i class="fa fa-circle fa-fw text-muted mr-2 f-s-8"></i> Collapsible Group Item #7
						</b-card-header>
						<b-collapse id="accordion7" accordion="my-accordion">
							<b-card-body>
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
							</b-card-body>
						</b-collapse>
					</b-card>
					<!-- end b-card -->
				</div>
				<!-- end #accordion -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->
	</div>
</template>