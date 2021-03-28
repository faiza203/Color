<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item active">Bootstrap 4</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header m-b-10">Bootstrap 4 <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		
		<p class="m-b-20">
			We have included bootstrap 4 - cards element into our template. So now even you are using Bootstrap 3, you are able to use it as well. 
			A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
		</p>
		
		<!-- begin row -->
		<div class="row">
			<!-- begin col-3 -->
			<div class="col-xl-3 col-sm-6">
				<div class="m-b-10 f-s-10 m-t-10"><b class="text-inverse">EXAMPLE</b></div>
				<!-- begin card -->
				<div class="card border-0">
					<img class="card-img-top" src="/assets/img/gallery/gallery-1.jpg" alt="" />
					<div class="card-body">
						<h4 class="card-title m-t-0 m-b-10">Card title</h4>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="javascript:;" class="btn btn-sm btn-default">Go somewhere</a>
					</div>
				</div>
				<!-- end card -->
				
				<div class="m-b-10 f-s-10 m-t-20"><b class="text-inverse">IMAGE OVERLAYS</b></div>
				<!-- begin card -->
				<div class="card bg-dark border-0 text-white">
					<img class="card-img" src="/assets/img/gallery/gallery-15.jpg" alt="" />
					<div class="card-img-overlay bg-black-transparent-5 rounded">
						<h4 class="card-title">Card title</h4>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						<p class="card-text">Last updated 3 mins ago</p>
					</div>
				</div>
				<!-- end card -->
				
				<div class="m-b-10 f-s-10 m-t-20"><b class="text-inverse">INVERTED TEXT</b></div>
				<!-- begin card -->
				<div class="card bg-dark border-0 text-white">
					<div class="card-body">
						<h4 class="card-title">Special title treatment</h4>
						<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
						<a href="javascript:;" class="btn btn-sm btn-warning">Go somewhere</a>
					</div>
				</div>
				<!-- end card -->
			</div>
			<!-- end col-3 -->
			<!-- begin col-3 -->
			<div class="col-xl-3 col-sm-6">
				<div class="m-b-10 f-s-10 m-t-10"><b class="text-inverse">BLOCKS</b></div>
				<!-- begin card -->
				<div class="card border-0">
					<div class="card-body">
						This is some text within a card block.
					</div>
				</div>
				<!-- end card -->
				
				<div class="m-b-10 f-s-10 m-t-20"><b class="text-inverse">TITLE, TEXT & LINKS</b></div>
				<!-- begin card -->
				<div class="card border-0">
					<div class="card-body">
						<h4 class="card-title m-t-0">Card title</h4>
						<h6 class="card-subtitle m-b-10 text-muted">Card subtitle</h6>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="javascript:;" class="card-link">Card link</a>
						<a href="javascript:;" class="card-link">Another link</a>
					</div>
				</div>
				<!-- end card -->
				
				<div class="m-b-10 f-s-10 m-t-20"><b class="text-inverse">WITH IMAGES</b></div>
				
				<!-- begin card -->
				<div class="card border-0">
					<img class="card-img-top" src="/assets/img/gallery/gallery-2.jpg" alt="" />
					<div class="card-body">
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
				</div>
				<!-- end card -->
				
				<div class="m-b-10 f-s-10 m-t-20"><b class="text-inverse">LIST GROUPS</b></div>
				<!-- begin card -->
				<div class="card border-0">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">Cras justo odio</li>
						<li class="list-group-item">Dapibus ac facilisis in</li>
						<li class="list-group-item">Vestibulum at eros</li>
					</ul>
				</div>
				<!-- end card -->
			</div>
			<!-- end col-3 -->
			<!-- begin col-3 -->
			<div class="col-xl-3 col-sm-6">
				<div class="m-b-10 f-s-10 m-t-10"><b class="text-inverse">HEADER & FOOTER</b></div>
				<!-- begin card -->
				<div class="card text-center border-0">
					<div class="card-header f-w-600">
						Featured
					</div>
					<div class="card-body">
						<h4 class="card-title">Special title treatment</h4>
						<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
						<a href="javascript:;" class="btn btn-sm btn-primary">Go somewhere</a>
					</div>
					<div class="card-footer f-w-600">
						2 days ago
					</div>
				</div>
				<!-- end card -->
				
				<div class="m-b-10 f-s-10 m-t-20"><b class="text-inverse">NAVIGATION</b></div>
				
				<!-- begin card -->
				<div class="card text-center border-0">
					<div class="card-header">
						<ul class="nav nav-tabs card-header-tabs">
							<li class="nav-item">
								<a class="nav-link active" data-toggle="tab" href="#card-tab-1">Active</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" data-toggle="tab" href="#card-tab-2">Link</a>
							</li>
							<li class="nav-item">
								<a class="nav-link disabled" href="javascript:;">Disabled</a>
							</li>
						</ul>
					</div>
					<div class="card-body">
						<div class="tab-content p-0 m-0">
							<div class="tab-pane fade active show" id="card-tab-1">
								<h4 class="card-title">Special title treatment</h4>
								<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
								<a href="javascript:;" class="btn btn-sm btn-default">Go somewhere</a>
							</div>
							<div class="tab-pane fade" id="card-tab-2">
								<h4 class="card-title">Special title treatment 2</h4>
								<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
								<a href="javascript:;" class="btn btn-sm btn-yellow">Go somewhere</a>
							</div>
						</div>
					</div>
				</div>
				<!-- end card -->

				<div class="m-b-10 f-s-10 m-t-20"><b class="text-inverse">NAVIGATION PILLS</b></div>
				
				<!-- begin card -->
				<div class="card text-center border-0">
					<div class="card-header">
						<ul class="nav nav-pills card-header-pills">
							<li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#card-pill-1">Active</a></li>
							<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#card-pill-2">Link</a></li>
							<li class="nav-item"><a class="nav-link disabled" data-toggle="tab" href="javascript:;">Disabled</a></li>
						</ul>
					</div>
					<div class="card-body">
						<div class="tab-content p-0 m-0">
							<div class="tab-pane fade active show" id="card-pill-1">
								<h4 class="card-title">Special title treatment</h4>
								<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
								<a href="javascript:;" class="btn btn-sm btn-primary">Go somewhere</a>
							</div>
							<div class="tab-pane fade" id="card-pill-2">
								<h4 class="card-title">Special title treatment 2</h4>
								<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
								<a href="javascript:;" class="btn btn-sm btn-success">Go somewhere</a>
							</div>
						</div>
					</div>
				</div>
				<!-- end card -->
			</div>
			<!-- end col-3 -->
			<!-- begin col-3 -->
			<div class="col-xl-3 col-sm-6">
				<div class="m-b-10 f-s-10 m-t-10"><b class="text-inverse">BACKGROUND VARIANTS</b></div>
				
				<!-- begin card -->
				<div class="card text-white border-0 bg-teal text-center m-b-10">
					<div class="card-body">
						<blockquote class="blockquote mb-0">
							<p class="mb-2">Make it so that <br />everything becomes your<br /> spiritual advisor</p>
							<footer class="blockquote-footer text-white-transparent-8">Someone famous in <cite title="Source Title">Source Title</cite></footer>
						</blockquote>
					</div>
				</div>
				<!-- end card -->
				
				<!-- begin card -->
				<div class="card text-white border-0 bg-blue text-center m-b-10">
					<div class="card-body">
						<blockquote class="blockquote mb-0">
							<p class="mb-2">You don't have <br />to invade a country in order<br /> to be happy</p>
							<footer class="blockquote-footer text-white-transparent-8">Someone famous in <cite title="Source Title">Source Title</cite></footer>
						</blockquote>
					</div>
				</div>
				<!-- end card -->
				
				<!-- begin card -->
				<div class="card text-white border-0 bg-indigo text-center">
					<div class="card-body">
						<blockquote class="blockquote mb-0">
							<p class="mb-2">Imagination is to <br />never pretend to be <br /> handicapped</p>
							<footer class="blockquote-footer text-white-transparent-8">Someone famous in <cite title="Source Title">Source Title</cite></footer>
						</blockquote>
					</div>
				</div>
				<!-- end card -->
				
				<div class="m-b-10 f-s-10 m-t-20"><b class="text-inverse">BORDER CARDS</b></div>
				
				<!-- begin card -->
				<div class="card border-warning text-warning m-b-10">
					<div class="card-body">
						<blockquote class="blockquote mb-0">
							<p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
							<footer class="blockquote-footer text-warning-transparent-8">Someone famous in <cite title="Source Title">Source Title</cite></footer>
						</blockquote>
					</div>
				</div>
				<!-- end card -->
				
				<!-- begin card -->
				<div class="card border-danger text-danger m-b-10">
					<div class="card-body">
						<blockquote class="blockquote mb-0">
							<p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
							<footer class="blockquote-footer text-danger-transparent-8">Someone famous in <cite title="Source Title">Source Title</cite></footer>
						</blockquote>
					</div>
				</div>
				<!-- end card -->
			</div>
			<!-- end col-3 -->
		</div>
		<!-- end row -->
		
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-12">
				<div class="m-b-10 f-s-10 m-t-20"><b class="text-inverse">CARD GROUPS</b></div>
				<!-- begin card-group -->
				<div class="card-group">
					<!-- begin card -->
					<div class="card">
						<img class="card-img-top" src="/assets/img/gallery/gallery-6.jpg" alt="Card image cap" />
						<div class="card-body">
							<h4 class="card-title">Card title</h4>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p class="card-text text-gray">Last updated 3 mins ago</p>
						</div>
					</div>
					<!-- end card -->
					<!-- begin card -->
					<div class="card">
						<img class="card-img-top" src="/assets/img/gallery/gallery-7.jpg" alt="Card image cap" />
						<div class="card-body">
							<h4 class="card-title">Card title</h4>
							<p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
							<p class="card-text text-gray">Last updated 3 mins ago</p>
						</div>
					</div>
					<!-- end card -->
					<!-- begin card -->
					<div class="card">
						<img class="card-img-top" src="/assets/img/gallery/gallery-8.jpg" alt="Card image cap" />
						<div class="card-body">
							<h4 class="card-title">Card title</h4>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p class="card-text text-gray">Last updated 3 mins ago</p>
						</div>
					</div>
					<!-- end card -->
					<!-- begin card -->
					<div class="card">
						<img class="card-img-top" src="/assets/img/gallery/gallery-9.jpg" alt="Card image cap" />
						<div class="card-body">
							<h4 class="card-title">Card title</h4>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
							<p class="card-text text-gray">Last updated 3 mins ago</p>
						</div>
					</div>
					<!-- end card -->
				</div>
				<!-- end card-group -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-12">
				<div class="m-b-10 f-s-10 m-t-20"><b class="text-inverse">CARD COLUMNS</b></div>
				<!-- begin card-columns -->
				<div class="card-columns">
					<!-- begin card -->
					<div class="card border-0">
						<img class="card-img-top img-fluid" src="/assets/img/gallery/gallery-11.jpg" alt="Card image cap" />
						<div class="card-body">
							<h5 class="card-title mb-2">Card title that wraps to a new line</h5>
							<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
					</div>
					<!-- end card -->
					<!-- begin card -->
					<div class="card border-0">
						<div class="card-body">
							<blockquote class="blockquote mb-0">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
								<footer class="blockquote-footer text-gray">
									Someone famous in <cite title="Source Title">Source Title</cite>
								</footer>
							</blockquote>
						</div>
					</div>
					<!-- end card -->
					<!-- begin card -->
					<div class="card border-0 bg-dark text-white">
						<img class="card-img-top img-fluid rounded" src="/assets/img/gallery/gallery-10.jpg" alt="Card image cap" />
						<div class="card-img-overlay">
							<h4 class="card-title">Card title</h4>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p class="card-text">Last updated 3 mins ago</p>
						</div>
					</div>
					<!-- end card -->
					<!-- begin card -->
					<div class="card border-0 bg-indigo text-white text-center">
						<div class="card-body">
							<blockquote class="blockquote mb-0">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
								<footer class="blockquote-footer text-white-transparent-8">
									Someone famous in <cite title="Source Title">Source Title</cite>
								</footer>
							</blockquote>
						</div>
					</div>
					<!-- end card -->
					<!-- begin card -->
					<div class="card border-0 text-white">
						<img class="card-img img-fluid" src="/assets/img/gallery/gallery-17.jpg" alt="Card image" />
						<div class="card-img-overlay">
							<h4 class="card-title">Card title</h4>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p class="card-text">Last updated 3 mins ago</p>
						</div>
					</div>
					<!-- end card -->
					<!-- begin card -->
					<div class="card border-0 text-white bg-dark text-center">
						<div class="card-body">
							<blockquote class="blockquote mb-0">
								<p>Fusce finibus sed augue quis volutpat. Duis non cursus felis. Nunc tristique lacinia orci, vel iaculis ipsum pretium at. Nullam ac mattis eros. Quisque a mauris in ex vulputate accumsan.</p>
								<footer class="blockquote-footer text-white-transparent-8">
									Someone famous in <cite title="Source Title">Source Title</cite>
								</footer>
							</blockquote>
						</div>
					</div>
					<!-- end card -->
					<!-- begin card -->
					<div class="card border-0">
						<div class="card-body">
							<h4 class="card-title">Card title</h4>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
							<p class="card-text text-gray">Last updated 3 mins ago</p>
						</div>
					</div>
					<!-- end card -->
					<!-- begin card -->
					<div class="card border-0 text-white">
						<img class="card-img" src="/assets/img/gallery/gallery-13.jpg" alt="Card image">
						<div class="card-img-overlay">
							<h4 class="card-title">Card title</h4>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p class="card-text">Last updated 3 mins ago</p>
						</div>
					</div>
					<!-- end card -->
					<!-- begin card -->
					<div class="card border-0 text-center">
						<div class="card-body">
							<h4 class="card-title">Card title</h4>
							<p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
							<p class="card-text text-gray">Last updated 3 mins ago</p>
						</div>
					</div>
					<!-- end card -->
					<!-- begin card -->
					<div class="card border-0">
						<img class="card-img-top" src="/assets/img/gallery/gallery-14.jpg" alt="Card image cap" />
						<div class="card-body">
							<h4 class="card-title">Card title</h4>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
					</div>
					<!-- end card -->
				</div>
				<!-- end card-columns -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->
	</div>
</template>