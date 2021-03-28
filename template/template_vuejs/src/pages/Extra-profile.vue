<template>
	<div>
		<!-- begin profile -->
		<div class="profile">
			<div class="profile-header">
				<!-- BEGIN profile-header-cover -->
				<div class="profile-header-cover"></div>
				<!-- END profile-header-cover -->
				<!-- BEGIN profile-header-content -->
				<div class="profile-header-content">
					<!-- BEGIN profile-header-img -->
					<div class="profile-header-img">
						<img src="/assets/img/user/user-13.jpg" alt="">
					</div>
					<!-- END profile-header-img -->
					<!-- BEGIN profile-header-info -->
					<div class="profile-header-info">
						<h4 class="m-t-10 m-b-5">Sean Ngu</h4>
						<p class="m-b-10">UXUI + Frontend Developer</p>
						<a href="#" class="btn btn-xs btn-yellow">Edit Profile</a>
					</div>
					<!-- END profile-header-info -->
				</div>
				<!-- END profile-header-content -->
				<!-- BEGIN profile-header-tab -->
				<ul class="profile-header-tab nav nav-tabs">
					<li class="nav-item"><a href="javascript:;" v-on:click="show('post')" v-bind:class="{ 'active': tab.post }" class="nav-link" data-toggle="tab">POSTS</a></li>
					<li class="nav-item"><a href="javascript:;" v-on:click="show('about')" v-bind:class="{ 'active': tab.about }" class="nav-link" data-toggle="tab">ABOUT</a></li>
					<li class="nav-item"><a href="javascript:;" v-on:click="show('photo')" v-bind:class="{ 'active': tab.photo }" class="nav-link" data-toggle="tab">PHOTOS</a></li>
					<li class="nav-item"><a href="javascript:;" v-on:click="show('video')" v-bind:class="{ 'active': tab.video }" class="nav-link" data-toggle="tab">VIDEOS</a></li>
					<li class="nav-item"><a href="javascript:;" v-on:click="show('friend')" v-bind:class="{ 'active': tab.friend }" class="nav-link" data-toggle="tab">FRIENDS</a></li>
				</ul>
				<!-- END profile-header-tab -->
			</div>
		</div>
		<!-- end profile -->
		<!-- begin profile-content -->
		<div class="profile-content">
			<!-- begin tab-content -->
			<div class="tab-content p-0">
				<!-- begin #profile-post tab -->
				<div class="tab-pane fade" v-bind:class="{ 'show active': tab.post }">
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
									<span class="userimage"><img src="/assets/img/user/user-12.jpg" alt="" /></span>
									<span class="username"><a href="javascript:;">Sean Ngu</a> <small></small></span>
									<span class="pull-right text-muted">18 Views</span>
								</div>
								<div class="timeline-content">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus.
										Nam sagittis dui in nunc consequat, in imperdiet nunc sagittis.
									</p>
								</div>
								<div class="timeline-likes">
									<div class="stats-right">
										<span class="stats-text">259 Shares</span>
										<span class="stats-text">21 Comments</span>
									</div>
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
								</div>
								<div class="timeline-footer">
									<a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
									<a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
									<a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
								</div>
								<div class="timeline-comment-box">
									<div class="user"><img src="/assets/img/user/user-12.jpg" /></div>
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
									<span class="userimage"><img src="/assets/img/user/user-12.jpg" alt="" /></span>
									<span class="username">Sean Ngu</span>
									<span class="pull-right text-muted">82 Views</span>
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
									<span class="userimage"><img src="/assets/img/user/user-12.jpg" alt="" /></span>
									<span class="username">Sean Ngu</span>
									<span class="pull-right text-muted">1,282 Views</span>
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
									<span class="userimage"><img src="/assets/img/user/user-12.jpg" alt="" /></span>
									<span class="username">Sean Ngu</span>
									<span class="pull-right text-muted">1,021,282 Views</span>
								</div>
								<div class="timeline-content">
									<h4 class="template-title">
										<i class="fa fa-map-marker-alt text-danger fa-fw"></i>
										795 Folsom Ave, Suite 600 San Francisco, CA 94107
									</h4>
									<p>In hac habitasse platea dictumst. Pellentesque bibendum id sem nec faucibus. Maecenas molestie, augue vel accumsan rutrum, massa mi rutrum odio, id luctus mauris nibh ut leo.</p>
									<p class="m-t-20">
										<img src="/assets/img/gallery/gallery-5.jpg" alt="" />
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
				<!-- end #profile-post tab -->
				<!-- begin #profile-about tab -->
				<div class="tab-pane fade" v-bind:class="{ 'show active': tab.about }">
					<!-- begin table -->
					<div class="table-responsive form-inline">
						<table class="table table-profile">
							<thead>
								<tr>
									<th></th>
									<th>
										<h4>Micheal	Meyer <small>Lorraine Stokes</small></h4>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr class="highlight">
									<td class="field valign-middle">Mood</td>
									<td><a href="javascript:;">Add Mood Message</a></td>
								</tr>
								<tr class="divider">
									<td colspan="2"></td>
								</tr>
								<tr>
									<td class="field valign-middle">Mobile</td>
									<td><i class="fa fa-mobile fa-lg m-r-5"></i> +1-(847)- 367-8924 <a href="javascript:;" class="m-l-5">Edit</a></td>
								</tr>
								<tr>
									<td class="field valign-middle">Home</td>
									<td><a href="javascript:;">Add Number</a></td>
								</tr>
								<tr>
									<td class="field valign-middle">Office</td>
									<td><a href="javascript:;">Add Number</a></td>
								</tr>
								<tr class="divider">
									<td colspan="2"></td>
								</tr>
								<tr class="highlight">
									<td class="field valign-middle">About Me</td>
									<td><a href="javascript:;">Add Description</a></td>
								</tr>
								<tr class="divider">
									<td colspan="2"></td>
								</tr>
								<tr>
									<td class="field valign-middle">Country/Region</td>
									<td>
										<select class="form-control form-control-sm" name="region">
											<option value="US" selected>United State</option>
											<option value="AF">Afghanistan</option>
											<option value="AL">Albania</option>
											<option value="DZ">Algeria</option>
											<option value="AS">American Samoa</option>
											<option value="AD">Andorra</option>
											<option value="AO">Angola</option>
											<option value="AI">Anguilla</option>
											<option value="AQ">Antarctica</option>
											<option value="AG">Antigua and Barbuda</option>
										</select>
									</td>
								</tr>
								<tr>
									<td class="field valign-middle">City</td>
									<td>Los Angeles</td>
								</tr>
								<tr>
									<td class="field valign-middle">State</td>
									<td><a href="javascript:;">Add State</a></td>
								</tr>
								<tr>
									<td class="field valign-middle">Website</td>
									<td><a href="javascript:;">Add Webpage</a></td>
								</tr>
								<tr>
									<td class="field valign-middle">Gender</td>
									<td>
										<select class="form-control form-control-sm" name="gender">
											<option value="male">Male</option>
											<option value="female">Female</option>
										</select>
									</td>
								</tr>
								<tr>
									<td class="field valign-middle">Birthdate</td>
									<td>
										<select class="form-control form-control-sm" name="day">
											<option value="04" selected>04</option>
										</select>
										-
										<select class="form-control form-control-sm" name="month">
											<option value="11" selected>11</option>
										</select>
										-
										<select class="form-control form-control-sm" name="year">
											<option value="1989" selected>1989</option>
										</select>
									</td>
								</tr>
								<tr>
									<td class="field valign-middle">Language</td>
									<td>
										<select class="form-control form-control-sm" name="language">
											<option value="" selected>English</option>
										</select>
									</td>
								</tr>
								<tr class="divider">
									<td colspan="2"></td>
								</tr>
								<tr class="highlight">
									<td class="field valign-middle">&nbsp;</td>
									<td class="p-t-10 p-b-10">
										<button type="submit" class="btn btn-primary width-150">Update</button>
										<button type="submit" class="btn btn-white btn-white-without-border width-150 m-l-5">Cancel</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- end table -->
				</div>
				<!-- end #profile-about tab -->
				<!-- begin #profile-photos tab -->
				<div class="tab-pane fade" v-bind:class="{ 'show active': tab.photo }">
					<h4 class="m-t-0 m-b-20">Photos (70)</h4>
					
					<div class="row row-space-2">
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-1-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-2-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-3-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-4-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-5-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-6-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-7-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-8-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-9-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-10-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-11-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-12-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-13-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-14-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-15-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-16-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-17-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-18-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-19-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-20-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-21-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-22-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-23-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-24-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-25-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-26-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-27-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-28-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-29-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-30-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-31-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-32-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-33-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-34-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-35-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-36-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-37-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-38-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-39-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-40-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-41-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-42-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-43-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-44-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-45-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-46-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-47-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-48-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-49-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-50-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-51-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-52-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-53-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-54-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-55-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-56-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-57-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-58-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-59-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-60-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-61-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-62-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-63-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-64-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-65-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-66-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-67-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-68-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-69-thumb.jpg);"></div></a></div>
						<div class="col-lg-1 col-sm-2 col-3"><a href="javascript:;" class="widget-card widget-card-rounded square m-b-2"><div class="widget-card-cover" style="background-image: url(/assets/img/gallery/gallery-70-thumb.jpg);"></div></a></div>
					</div>
				</div>
				<!-- end #profile-photos tab -->
				<!-- begin #profile-videos tab -->
				<div class="tab-pane fade" v-bind:class="{ 'show active': tab.video }">
					<h4 class="m-t-0 m-b-20">Videos (16)</h4>
					<!-- begin row -->
					<div class="row row-space-2">
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=RQ5ljyGg-ig" target="_blank">
							<img src="https://img.youtube.com/vi/RQ5ljyGg-ig/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=5lWkZ-JaEOc" target="_blank">
							<img src="https://img.youtube.com/vi/5lWkZ-JaEOc/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=9ZfN87gSjvI" target="_blank">
							<img src="https://img.youtube.com/vi/9ZfN87gSjvI/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=w2H07DRv2_M" target="_blank">
							<img src="https://img.youtube.com/vi/w2H07DRv2_M/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=PntG8KEVjR8" target="_blank">
							<img src="https://img.youtube.com/vi/PntG8KEVjR8/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=q8kxKvSQ7MI" data-lity>
							<img src="https://img.youtube.com/vi/q8kxKvSQ7MI/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=cutu3Bw4ep4" target="_blank">
							<img src="https://img.youtube.com/vi/cutu3Bw4ep4/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=gCspUXGrraM" target="_blank">
							<img src="https://img.youtube.com/vi/gCspUXGrraM/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=COtpTM1MpAA" target="_blank">
							<img src="https://img.youtube.com/vi/COtpTM1MpAA/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=8NVkGHVOazc" target="_blank">
							<img src="https://img.youtube.com/vi/8NVkGHVOazc/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=QgQ7MWLsw1w" target="_blank">
							<img src="https://img.youtube.com/vi/QgQ7MWLsw1w/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=Dmw0ucCv8aQ" target="_blank">
							<img src="https://img.youtube.com/vi/Dmw0ucCv8aQ/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=r1d7ST2TG2U" target="_blank">
							<img src="https://img.youtube.com/vi/r1d7ST2TG2U/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=WUR-XWBcHvs" target="_blank">
							<img src="https://img.youtube.com/vi/WUR-XWBcHvs/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=A7sQ8RWj0Cw" target="_blank">
							<img src="https://img.youtube.com/vi/A7sQ8RWj0Cw/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
						<!-- begin col-3 -->
						<div class="col-md-3 col-sm-4 m-b-2">
							<a href="https://www.youtube.com/watch?v=IMN2VfiXls4" target="_blank">
							<img src="https://img.youtube.com/vi/IMN2VfiXls4/mqdefault.jpg" class="width-full" />
							</a>
						</div>
						<!-- end col-3 -->
					</div>
					<!-- end row -->
				</div>
				<!-- end #profile-videos tab -->
				<!-- begin #profile-friends tab -->
				<div class="tab-pane fade" v-bind:class="{ 'show active': tab.friend }">
					<h4 class="m-t-0 m-b-20">Friend List (14)</h4>
					<!-- begin row -->
					<div class="row row-space-2">
						<!-- begin col-6 -->
						<div class="col-md-6 m-b-2">
							<div class="p-10 bg-white">
								<div class="media media-xs overflow-visible align-items-center">
									<a class="media-left" href="javascript:;">
									<img src="/assets/img/user/user-1.jpg" alt="" class="media-object img-circle" />
									</a>
									<div class="media-body valign-middle">
										<b class="text-inverse">James Pittman</b>
									</div>
									<div class="media-body valign-middle text-right overflow-visible">
										
										<b-dropdown split text="Friends" variant="default">
											<b-dropdown-item href="#">Action 1</b-dropdown-item>
											<b-dropdown-item href="#">Action 2</b-dropdown-item>
											<b-dropdown-item href="#">Action 3</b-dropdown-item>
											<b-dropdown-divider></b-dropdown-divider>
											<b-dropdown-item href="#">Action 4</b-dropdown-item>
										</b-dropdown>
									</div>
								</div>
							</div>
						</div>
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<div class="col-md-6 m-b-2">
							<div class="p-10 bg-white">
								<div class="media media-xs overflow-visible align-items-center">
									<a class="media-left" href="javascript:;">
									<img src="/assets/img/user/user-2.jpg" alt="" class="media-object img-circle" />
									</a>
									<div class="media-body valign-middle">
										<b class="text-inverse">Mitchell Ashcroft</b>
									</div>
									<div class="media-body valign-middle text-right overflow-visible">
										
										<b-dropdown split text="Friends" variant="default">
											<b-dropdown-item href="#">Action 1</b-dropdown-item>
											<b-dropdown-item href="#">Action 2</b-dropdown-item>
											<b-dropdown-item href="#">Action 3</b-dropdown-item>
											<b-dropdown-divider></b-dropdown-divider>
											<b-dropdown-item href="#">Action 4</b-dropdown-item>
										</b-dropdown>
									</div>
								</div>
							</div>
						</div>
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<div class="col-md-6 m-b-2">
							<div class="p-10 bg-white">
								<div class="media media-xs overflow-visible align-items-center">
									<a class="media-left" href="javascript:;">
									<img src="/assets/img/user/user-3.jpg" alt="" class="media-object img-circle" />
									</a>
									<div class="media-body valign-middle">
										<b class="text-inverse">Ella Cabena</b>
									</div>
									<div class="media-body valign-middle text-right overflow-visible">
										
										<b-dropdown split text="Friends" variant="default">
											<b-dropdown-item href="#">Action 1</b-dropdown-item>
											<b-dropdown-item href="#">Action 2</b-dropdown-item>
											<b-dropdown-item href="#">Action 3</b-dropdown-item>
											<b-dropdown-divider></b-dropdown-divider>
											<b-dropdown-item href="#">Action 4</b-dropdown-item>
										</b-dropdown>
									</div>
								</div>
							</div>
						</div>
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<div class="col-md-6 m-b-2">
							<div class="p-10 bg-white">
								<div class="media media-xs overflow-visible align-items-center">
									<a class="media-left" href="javascript:;">
									<img src="/assets/img/user/user-4.jpg" alt="" class="media-object img-circle" />
									</a>
									<div class="media-body valign-middle">
										<b class="text-inverse">Declan Dyson</b>
									</div>
									<div class="media-body valign-middle text-right overflow-visible">
										
										<b-dropdown split text="Friends" variant="default">
											<b-dropdown-item href="#">Action 1</b-dropdown-item>
											<b-dropdown-item href="#">Action 2</b-dropdown-item>
											<b-dropdown-item href="#">Action 3</b-dropdown-item>
											<b-dropdown-divider></b-dropdown-divider>
											<b-dropdown-item href="#">Action 4</b-dropdown-item>
										</b-dropdown>
									</div>
								</div>
							</div>
						</div>
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<div class="col-md-6 m-b-2">
							<div class="p-10 bg-white">
								<div class="media media-xs overflow-visible align-items-center">
									<a class="media-left" href="javascript:;">
									<img src="/assets/img/user/user-5.jpg" alt="" class="media-object img-circle" />
									</a>
									<div class="media-body valign-middle">
										<b class="text-inverse">George Seyler</b>
									</div>
									<div class="media-body valign-middle text-right overflow-visible">
										
										<b-dropdown split text="Friends" variant="default">
											<b-dropdown-item href="#">Action 1</b-dropdown-item>
											<b-dropdown-item href="#">Action 2</b-dropdown-item>
											<b-dropdown-item href="#">Action 3</b-dropdown-item>
											<b-dropdown-divider></b-dropdown-divider>
											<b-dropdown-item href="#">Action 4</b-dropdown-item>
										</b-dropdown>
									</div>
								</div>
							</div>
						</div>
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<div class="col-md-6 m-b-2">
							<div class="p-10 bg-white">
								<div class="media media-xs overflow-visible align-items-center">
									<a class="media-left" href="javascript:;">
									<img src="/assets/img/user/user-6.jpg" alt="" class="media-object img-circle" />
									</a>
									<div class="media-body valign-middle">
										<b class="text-inverse">Patrick Musgrove</b>
									</div>
									<div class="media-body valign-middle text-right overflow-visible">
										
										<b-dropdown split text="Friends" variant="default">
											<b-dropdown-item href="#">Action 1</b-dropdown-item>
											<b-dropdown-item href="#">Action 2</b-dropdown-item>
											<b-dropdown-item href="#">Action 3</b-dropdown-item>
											<b-dropdown-divider></b-dropdown-divider>
											<b-dropdown-item href="#">Action 4</b-dropdown-item>
										</b-dropdown>
									</div>
								</div>
							</div>
						</div>
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<div class="col-md-6 m-b-2">
							<div class="p-10 bg-white">
								<div class="media media-xs overflow-visible align-items-center">
									<a class="media-left" href="javascript:;">
									<img src="/assets/img/user/user-7.jpg" alt="" class="media-object img-circle" />
									</a>
									<div class="media-body valign-middle">
										<b class="text-inverse">Taj Connal</b>
									</div>
									<div class="media-body valign-middle text-right overflow-visible">
										
										<b-dropdown split text="Friends" variant="default">
											<b-dropdown-item href="#">Action 1</b-dropdown-item>
											<b-dropdown-item href="#">Action 2</b-dropdown-item>
											<b-dropdown-item href="#">Action 3</b-dropdown-item>
											<b-dropdown-divider></b-dropdown-divider>
											<b-dropdown-item href="#">Action 4</b-dropdown-item>
										</b-dropdown>
									</div>
								</div>
							</div>
						</div>
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<div class="col-md-6 m-b-2">
							<div class="p-10 bg-white">
								<div class="media media-xs overflow-visible align-items-center">
									<a class="media-left" href="javascript:;">
									<img src="/assets/img/user/user-8.jpg" alt="" class="media-object img-circle" />
									</a>
									<div class="media-body valign-middle">
										<b class="text-inverse">Laura Pollock</b>
									</div>
									<div class="media-body valign-middle text-right overflow-visible">
										
										<b-dropdown split text="Friends" variant="default">
											<b-dropdown-item href="#">Action 1</b-dropdown-item>
											<b-dropdown-item href="#">Action 2</b-dropdown-item>
											<b-dropdown-item href="#">Action 3</b-dropdown-item>
											<b-dropdown-divider></b-dropdown-divider>
											<b-dropdown-item href="#">Action 4</b-dropdown-item>
										</b-dropdown>
									</div>
								</div>
							</div>
						</div>
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<div class="col-md-6 m-b-2">
							<div class="p-10 bg-white">
								<div class="media media-xs overflow-visible align-items-center">
									<a class="media-left" href="javascript:;">
									<img src="/assets/img/user/user-9.jpg" alt="" class="media-object img-circle" />
									</a>
									<div class="media-body valign-middle">
										<b class="text-inverse">Dakota Mannix</b>
									</div>
									<div class="media-body valign-middle text-right overflow-visible">
										
										<b-dropdown split text="Friends" variant="default">
											<b-dropdown-item href="#">Action 1</b-dropdown-item>
											<b-dropdown-item href="#">Action 2</b-dropdown-item>
											<b-dropdown-item href="#">Action 3</b-dropdown-item>
											<b-dropdown-divider></b-dropdown-divider>
											<b-dropdown-item href="#">Action 4</b-dropdown-item>
										</b-dropdown>
									</div>
								</div>
							</div>
						</div>
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<div class="col-md-6 m-b-2">
							<div class="p-10 bg-white">
								<div class="media media-xs overflow-visible align-items-center">
									<a class="media-left" href="javascript:;">
									<img src="/assets/img/user/user-10.jpg" alt="" class="media-object img-circle" />
									</a>
									<div class="media-body valign-middle">
										<b class="text-inverse">Timothy Woolley</b>
									</div>
									<div class="media-body valign-middle text-right overflow-visible">
										
										<b-dropdown split text="Friends" variant="default">
											<b-dropdown-item href="#">Action 1</b-dropdown-item>
											<b-dropdown-item href="#">Action 2</b-dropdown-item>
											<b-dropdown-item href="#">Action 3</b-dropdown-item>
											<b-dropdown-divider></b-dropdown-divider>
											<b-dropdown-item href="#">Action 4</b-dropdown-item>
										</b-dropdown>
									</div>
								</div>
							</div>
						</div>
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<div class="col-md-6 m-b-2">
							<div class="p-10 bg-white">
								<div class="media media-xs overflow-visible align-items-center">
									<a class="media-left" href="javascript:;">
									<img src="/assets/img/user/user-11.jpg" alt="" class="media-object img-circle" />
									</a>
									<div class="media-body valign-middle">
										<b class="text-inverse">Benjamin Congreve</b>
									</div>
									<div class="media-body valign-middle text-right overflow-visible">
										
										<b-dropdown split text="Friends" variant="default">
											<b-dropdown-item href="#">Action 1</b-dropdown-item>
											<b-dropdown-item href="#">Action 2</b-dropdown-item>
											<b-dropdown-item href="#">Action 3</b-dropdown-item>
											<b-dropdown-divider></b-dropdown-divider>
											<b-dropdown-item href="#">Action 4</b-dropdown-item>
										</b-dropdown>
									</div>
								</div>
							</div>
						</div>
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<div class="col-md-6 m-b-2">
							<div class="p-10 bg-white">
								<div class="media media-xs overflow-visible align-items-center">
									<a class="media-left" href="javascript:;">
									<img src="/assets/img/user/user-12.jpg" alt="" class="media-object img-circle" />
									</a>
									<div class="media-body valign-middle">
										<b class="text-inverse">Mariam Maddock</b>
									</div>
									<div class="media-body valign-middle text-right overflow-visible">
										
										<b-dropdown split text="Friends" variant="default">
											<b-dropdown-item href="#">Action 1</b-dropdown-item>
											<b-dropdown-item href="#">Action 2</b-dropdown-item>
											<b-dropdown-item href="#">Action 3</b-dropdown-item>
											<b-dropdown-divider></b-dropdown-divider>
											<b-dropdown-item href="#">Action 4</b-dropdown-item>
										</b-dropdown>
									</div>
								</div>
							</div>
						</div>
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<div class="col-md-6 m-b-2">
							<div class="p-10 bg-white">
								<div class="media media-xs overflow-visible align-items-center">
									<a class="media-left" href="javascript:;">
									<img src="/assets/img/user/user-13.jpg" alt="" class="media-object img-circle" />
									</a>
									<div class="media-body valign-middle">
										<b class="text-inverse">Blake Gerrald</b>
									</div>
									<div class="media-body valign-middle text-right overflow-visible">
										
										<b-dropdown split text="Friends" variant="default">
											<b-dropdown-item href="#">Action 1</b-dropdown-item>
											<b-dropdown-item href="#">Action 2</b-dropdown-item>
											<b-dropdown-item href="#">Action 3</b-dropdown-item>
											<b-dropdown-divider></b-dropdown-divider>
											<b-dropdown-item href="#">Action 4</b-dropdown-item>
										</b-dropdown>
									</div>
								</div>
							</div>
						</div>
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<div class="col-md-6 m-b-2">
							<div class="p-10 bg-white">
								<div class="media media-xs overflow-visible align-items-center">
									<a class="media-left" href="javascript:;">
										<img src="/assets/img/user/user-14.jpg" alt="" class="media-object img-circle" />
									</a>
									<div class="media-body valign-middle">
										<b class="text-inverse">Gabrielle Bunton</b>
									</div>
									<div class="media-body valign-middle text-right overflow-visible">
										<b-dropdown split text="Friends" variant="default">
											<b-dropdown-item href="#">Action 1</b-dropdown-item>
											<b-dropdown-item href="#">Action 2</b-dropdown-item>
											<b-dropdown-item href="#">Action 3</b-dropdown-item>
											<b-dropdown-divider></b-dropdown-divider>
											<b-dropdown-item href="#">Action 4</b-dropdown-item>
										</b-dropdown>
									</div>
								</div>
							</div>
						</div>
						<!-- end col-6 -->
					</div>
					<!-- end row -->
				</div>
				<!-- end #profile-friends tab -->
			</div>
			<!-- end tab-content -->
		</div>
		<!-- end profile-content -->
	</div>
</template>

<script>
import PageOptions from '../config/PageOptions.vue'

export default {
	data() {
		return {
			tab: {
				post: true,
				about: false,
				video: false,
				photo: false,
				friend: false
			}
		}
	},
	methods: {
		show: function(x) {
			this.tab.post = false;
			this.tab.about = false;
			this.tab.video = false;
			this.tab.photo = false;
			this.tab.friend = false;
			
			switch (x) {
				case 'about':
					this.tab.about = true;
					break;
				case 'video':
					this.tab.video = true;
					break;
				case 'photo':
					this.tab.photo = true;
					break;
				case 'friend':
					this.tab.friend = true;
					break;
				default:
					this.tab.post = true;
					break;
			}
		}
	},
	created() {
		PageOptions.pageContentFullWidth = true;
	},
	beforeRouteLeave (to, from, next) {
		PageOptions.pageContentFullWidth = false;
		next();
	}
}
</script>