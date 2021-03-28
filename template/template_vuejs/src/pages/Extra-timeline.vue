<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Extra</a></li>
			<li class="breadcrumb-item active">Timeline</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Timeline <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		<!-- begin timeline -->
		<ul class="timeline">
			<li>
				<!-- begin timeline-time -->
				<div class="timeline-time">
					<span class="date">today</span>
					<span class="time">04:20</span>
				</div>
				<!-- end timeline-time -->
				<!-- begin timeline-icon -->
				<div class="timeline-icon">
					<a href="javascript:;">&nbsp;</a>
				</div>
				<!-- end timeline-icon -->
				<!-- begin timeline-body -->
				<div class="timeline-body">
					<div class="timeline-header">
						<span class="userimage"><img src="/assets/img/user/user-1.jpg" alt="" /></span>
						<span class="username"><a href="javascript:;">John Smith</a> <small></small></span>
						<span class="views">18 Views</span>
					</div>
					<div class="timeline-content">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus.
							Nam sagittis dui in nunc consequat, in imperdiet nunc sagittis.
						</p>
					</div>
					<div class="timeline-likes">
						<div class="stats">
							<span class="fa-stack fa-fw stats-icon">
							<i class="fa fa-circle fa-stack-2x text-danger"></i>
							<i class="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
							</span>
							<span class="fa-stack fa-fw stats-icon">
							<i class="fa fa-circle fa-stack-2x text-primary"></i>
							<i class="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
							</span>
							<span class="stats-total">4.3k</span>
						</div>
						<div class="stats-right">
							<span class="stats-text">259 Shares</span>
							<span class="stats-text">21 Comments</span>
						</div>
					</div>
					<div class="timeline-footer">
						<a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
						<a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
						<a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
					</div>
					<div class="timeline-comment-box">
						<div class="user"><img src="/assets/img/user/user-13.jpg" /></div>
						<div class="input">
							<form action="">
								<div class="input-group">
									<input type="text" class="form-control rounded-corner" placeholder="Write a comment..." />
									<span class="input-group-btn p-l-10">
									<button class="btn btn-primary f-s-12 rounded-corner" type="button">Comment</button>
									</span>
								</div>
							</form>
						</div>
					</div>
				</div>
				<!-- end timeline-body -->
			</li>
			<li>
				<!-- begin timeline-time -->
				<div class="timeline-time">
					<span class="date">yesterday</span>
					<span class="time">20:17</span>
				</div>
				<!-- end timeline-time -->
				<!-- begin timeline-icon -->
				<div class="timeline-icon">
					<a href="javascript:;">&nbsp;</a>
				</div>
				<!-- end timeline-icon -->
				<!-- begin timeline-body -->
				<div class="timeline-body">
					<div class="timeline-header">
						<span class="userimage"><img src="/assets/img/user/user-2.jpg" alt="" /></span>
						<span class="username">Darren Parrase</span>
						<span class="views">82 Views</span>
					</div>
					<div class="timeline-content">
						<p>Location: United States</p>
						<GmapMap class="height-sm m-b-10" :zoom="5" :center="{lat: 25.304304, lng: -90.06591800000001}"></GmapMap>
					</div>
					<div class="timeline-footer">
						<a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
						<a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
						<a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
					</div>
				</div>
				<!-- end timeline-body -->
			</li>
			<li>
				<!-- begin timeline-time -->
				<div class="timeline-time">
					<span class="date">24 February 2014</span>
					<span class="time">08:17</span>
				</div>
				<!-- end timeline-time -->
				<!-- begin timeline-icon -->
				<div class="timeline-icon">
					<a href="javascript:;">&nbsp;</a>
				</div>
				<!-- end timeline-icon -->
				<!-- begin timeline-body -->
				<div class="timeline-body">
					<div class="timeline-header">
						<span class="userimage"><img src="/assets/img/user/user-6.jpg" alt="" /></span>
						<span class="username">Richard Leong</span>
						<span class="views">1,282 Views</span>
					</div>
					<div class="timeline-content">
						<p class="lead">
							<i class="fa fa-quote-left fa-fw pull-left"></i>
							Quisque sed varius nisl. Nulla facilisi. Phasellus consequat sapien sit amet nibh molestie placerat. Donec nulla quam, ullamcorper ut velit vitae, lobortis condimentum magna. Suspendisse mollis in sem vel mollis.
							<i class="fa fa-quote-right fa-fw pull-right"></i>
						</p>
					</div>
					<div class="timeline-footer">
						<a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
						<a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
						<a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
					</div>
				</div>
				<!-- end timeline-body -->
			</li>
			<li>
				<!-- begin timeline-time -->
				<div class="timeline-time">
					<span class="date">10 January 2014</span>
					<span class="time">20:43</span>
				</div>
				<!-- end timeline-time -->
				<!-- begin timeline-icon -->
				<div class="timeline-icon">
					<a href="javascript:;">&nbsp;</a>
				</div>
				<!-- end timeline-icon -->
				<!-- begin timeline-body -->
				<div class="timeline-body">
					<div class="timeline-header">
						<span class="userimage"><img src="/assets/img/user/user-7.jpg" alt="" /></span>
						<span class="username">Lelouch Wong</span>
						<span class="views">1,021,282 Views</span>
					</div>
					<div class="timeline-content">
						<h4 class="template-title">
							<i class="fa fa-map-marker-alt text-danger fa-fw"></i>
							795 Folsom Ave, Suite 600 San Francisco, CA 94107
						</h4>
						<p>In hac habitasse platea dictumst. Pellentesque bibendum id sem nec faucibus. Maecenas molestie, augue vel accumsan rutrum, massa mi rutrum odio, id luctus mauris nibh ut leo.</p>
						<p class="m-t-20">
							<img src="/assets/img/gallery/gallery-4.jpg" alt="" />
						</p>
					</div>
					<div class="timeline-footer">
						<a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
						<a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
						<a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
					</div>
				</div>
				<!-- end timeline-body -->
			</li>
			<li>
				<!-- begin timeline-icon -->
				<div class="timeline-icon">
					<a href="javascript:;">&nbsp;</a>
				</div>
				<!-- end timeline-icon -->
				<!-- begin timeline-body -->
				<div class="timeline-body">
					Loading...
				</div>
				<!-- begin timeline-body -->
			</li>
		</ul>
		<!-- end timeline -->
	</div>
</template>