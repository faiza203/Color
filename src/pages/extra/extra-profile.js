import React from 'react';
import { Link } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';
import GoogleMapReact from 'google-map-react';

class ExtraProfile extends React.Component {
	static contextType = PageSettings;

	constructor(props) {
		super(props);

		this.showTab = this.showTab.bind(this);
		this.state = {
			tabPost: true,
			tabAbout: false,
			tabPhoto: false,
			tabVideo: false,
			tabFriend: false
		}
	}
	componentDidMount() {
		this.context.handleSetPageContentFullHeight(true);
		this.context.handleSetPageContentFullWidth(true);
	}

	componentWillUnmount() {
		this.context.handleSetPageContentFullHeight(false);
		this.context.handleSetPageContentFullWidth(false);
	}

	showTab(e, tab) {
		e.preventDefault();
		this.setState(state => ({
			tabPost: (tab === 'post') ? true : false,
			tabAbout: (tab === 'about') ? true : false,
			tabPhoto: (tab === 'photo') ? true : false,
			tabVideo: (tab === 'video') ? true : false,
			tabFriend: (tab === 'friend') ? true : false
		}));
	}
	
	render() {
		return (
			<div>
				<div className="profile">
					<div className="profile-header">
						<div className="profile-header-cover"></div>
						<div className="profile-header-content">
							<div className="profile-header-img">
								<img src="/assets/img/user/user-13.jpg" alt="" />
							</div>
							<div className="profile-header-info">
								<h4 className="m-t-10 m-b-5">Sean Ngu</h4>
								<p className="m-b-10">UXUI + Frontend Developer</p>
								<Link to="/extra/profile" className="btn btn-xs btn-yellow">Edit Profile</Link>
							</div>
						</div>
						<ul className="profile-header-tab nav nav-tabs">
							<li className="nav-item"><Link to="/extra/profile" onClick={(e) => this.showTab(e, 'post')} className={'nav-link ' + (this.state.tabPost ? 'active ': '')}>POSTS</Link></li>
							<li className="nav-item"><Link to="/extra/profile" onClick={(e) => this.showTab(e, 'about')} className={'nav-link ' + (this.state.tabAbout ? 'active ': '')}>ABOUT</Link></li>
							<li className="nav-item"><Link to="/extra/profile" onClick={(e) => this.showTab(e, 'photo')} className={'nav-link ' + (this.state.tabPhoto ? 'active ': '')}>PHOTOS</Link></li>
							<li className="nav-item"><Link to="/extra/profile" onClick={(e) => this.showTab(e, 'video')} className={'nav-link ' + (this.state.tabVideo ? 'active ': '')}>VIDEOS</Link></li>
							<li className="nav-item"><Link to="/extra/profile" onClick={(e) => this.showTab(e, 'friend')} className={'nav-link ' + (this.state.tabFriend ? 'active ': '')}>FRIENDS</Link></li>
						</ul>
					</div>
				</div>
				<div className="profile-content">
					<div className="tab-content p-0">
						<div className={'tab-pane fade ' + (this.state.tabPost ? 'show active ': '')}>
							<ul className="timeline">
								<li>
									<div className="timeline-time">
										<span className="date">today</span>
										<span className="time">04:20</span>
									</div>
									<div className="timeline-icon">
										<Link to="/extra/profile">&nbsp;</Link>
									</div>
									<div className="timeline-body">
										<div className="timeline-header">
											<span className="userimage"><img src="/assets/img/user/user-12.jpg" alt="" /></span>
											<span className="username"><Link to="/extra/profile">Sean Ngu</Link> <small></small></span>
											<span className="pull-right text-muted">18 Views</span>
										</div>
										<div className="timeline-content">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus.
												Nam sagittis dui in nunc consequat, in imperdiet nunc sagittis.
											</p>
										</div>
										<div className="timeline-likes">
											<div className="stats">
												<span className="fa-stack fa-fw stats-icon">
												<i className="fa fa-circle fa-stack-2x text-danger"></i>
												<i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
												</span>
												<span className="fa-stack fa-fw stats-icon">
												<i className="fa fa-circle fa-stack-2x text-primary"></i>
												<i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
												</span>
												<span className="stats-total">4.3k</span>
											</div>
											<div className="stats-right">
												<span className="stats-text">259 Shares</span>
												<span className="stats-text">21 Comments</span>
											</div>
										</div>
										<div className="timeline-footer">
											<Link to="/extra/profile" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</Link>
											<Link to="/extra/profile" className="m-r-15 text-inverse-lighter"><i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</Link> 
											<Link to="/extra/profile" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share</Link>
										</div>
										<div className="timeline-comment-box">
											<div className="user"><img src="/assets/img/user/user-12.jpg" alt="" /></div>
											<div className="input">
												<form action="">
													<div className="input-group">
														<input type="text" className="form-control rounded-corner" placeholder="Write a comment..." />
														<span className="input-group-btn p-l-10">
														<button className="btn btn-primary f-s-12 rounded-corner" type="button">Comment</button>
														</span>
													</div>
												</form>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-time">
										<span className="date">yesterday</span>
										<span className="time">20:17</span>
									</div>
									<div className="timeline-icon">
										<Link to="/extra/profile">&nbsp;</Link>
									</div>
									<div className="timeline-body">
										<div className="timeline-header">
											<span className="userimage"><img src="/assets/img/user/user-12.jpg" alt="" /></span>
											<span className="username">Sean Ngu</span>
											<span className="pull-right text-muted">82 Views</span>
										</div>
										<div className="timeline-content">
											<p>Location: United States</p>
											<div className="height-sm">
												<GoogleMapReact defaultCenter={{lat: 25.304304, lng: -90.06591800000001}} defaultZoom={5}></GoogleMapReact>
											</div>
										</div>
										<div className="timeline-footer">
											<Link to="/extra/profile" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</Link>
											<Link to="/extra/profile" className="m-r-15 text-inverse-lighter"><i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</Link> 
											<Link to="/extra/profile" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share</Link>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-time">
										<span className="date">24 February 2014</span>
										<span className="time">08:17</span>
									</div>
									<div className="timeline-icon">
										<Link to="/extra/profile">&nbsp;</Link>
									</div>
									<div className="timeline-body">
										<div className="timeline-header">
											<span className="userimage"><img src="/assets/img/user/user-12.jpg" alt="" /></span>
											<span className="username">Sean Ngu</span>
											<span className="pull-right text-muted">1,282 Views</span>
										</div>
										<div className="timeline-content">
											<p className="lead">
												<i className="fa fa-quote-left fa-fw pull-left"></i>
												Quisque sed varius nisl. Nulla facilisi. Phasellus consequat sapien sit amet nibh molestie placerat. Donec nulla quam, ullamcorper ut velit vitae, lobortis condimentum magna. Suspendisse mollis in sem vel mollis.
												<i className="fa fa-quote-right fa-fw pull-right"></i>
											</p>
										</div>
										<div className="timeline-footer">
											<Link to="/extra/profile" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</Link>
											<Link to="/extra/profile" className="m-r-15 text-inverse-lighter"><i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</Link> 
											<Link to="/extra/profile" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share</Link>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-time">
										<span className="date">10 January 2014</span>
										<span className="time">20:43</span>
									</div>
									<div className="timeline-icon">
										<Link to="/extra/profile">&nbsp;</Link>
									</div>
									<div className="timeline-body">
										<div className="timeline-header">
											<span className="userimage"><img src="/assets/img/user/user-12.jpg" alt="" /></span>
											<span className="username">Sean Ngu</span>
											<span className="pull-right text-muted">1,021,282 Views</span>
										</div>
										<div className="timeline-content">
											<h4 className="template-title">
												<i className="fa fa-map-marker-alt text-danger fa-fw"></i>
												795 Folsom Ave, Suite 600 San Francisco, CA 94107
											</h4>
											<p>In hac habitasse platea dictumst. Pellentesque bibendum id sem nec faucibus. Maecenas molestie, augue vel accumsan rutrum, massa mi rutrum odio, id luctus mauris nibh ut leo.</p>
											<p className="m-t-20">
												<img src="/assets/img/gallery/gallery-5.jpg" alt="" />
											</p>
										</div>
										<div className="timeline-footer">
											<Link to="/extra/profile" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</Link>
											<Link to="/extra/profile" className="m-r-15 text-inverse-lighter"><i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</Link> 
											<Link to="/extra/profile" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share</Link>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-icon">
										<Link to="/extra/profile">&nbsp;</Link>
									</div>
									<div className="timeline-body">
										Loading...
									</div>
								</li>
							</ul>
						</div>
						<div className={'tab-pane fade ' + (this.state.tabAbout ? 'show active ': '')}>
							<div className="table-responsive form-inline">
								<table className="table table-profile">
									<thead>
										<tr>
											<th></th>
											<th>
												<h4>Micheal	Meyer <small>Lorraine Stokes</small></h4>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className="highlight">
											<td className="field">Mood</td>
											<td><Link to="/extra/profile">Add Mood Message</Link></td>
										</tr>
										<tr className="divider">
											<td colSpan="2"></td>
										</tr>
										<tr>
											<td className="field">Mobile</td>
											<td><i className="fa fa-mobile fa-lg m-r-5"></i> +1-(847)- 367-8924 <Link to="/extra/profile" className="m-l-5">Edit</Link></td>
										</tr>
										<tr>
											<td className="field">Home</td>
											<td><Link to="/extra/profile">Add Number</Link></td>
										</tr>
										<tr>
											<td className="field">Office</td>
											<td><Link to="/extra/profile">Add Number</Link></td>
										</tr>
										<tr className="divider">
											<td colSpan="2"></td>
										</tr>
										<tr className="highlight">
											<td className="field">About Me</td>
											<td><Link to="/extra/profile">Add Description</Link></td>
										</tr>
										<tr className="divider">
											<td colSpan="2"></td>
										</tr>
										<tr>
											<td className="field valign-middle">Country/Region</td>
											<td>
												<select className="form-control form-control-sm" name="region" defaultValue="US">
													<option value="US">United State</option>
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
											<td className="field">City</td>
											<td>Los Angeles</td>
										</tr>
										<tr>
											<td className="field">State</td>
											<td><Link to="/extra/profile">Add State</Link></td>
										</tr>
										<tr>
											<td className="field">Website</td>
											<td><Link to="/extra/profile">Add Webpage</Link></td>
										</tr>
										<tr>
											<td className="field valign-middle">Gender</td>
											<td>
												<select className="form-control form-control-sm" name="gender">
													<option value="male">Male</option>
													<option value="female">Female</option>
												</select>
											</td>
										</tr>
										<tr>
											<td className="field valign-middle">Birthdate</td>
											<td>
												<select className="form-control form-control-sm mr-2" name="day">
													<option value="04">04</option>
												</select>
												-
												<select className="form-control form-control-sm mr-2 ml-2" name="month">
													<option value="11">11</option>
												</select>
												-
												<select className="form-control form-control-sm ml-2" name="year">
													<option value="1989">1989</option>
												</select>
											</td>
										</tr>
										<tr>
											<td className="field">Language</td>
											<td>
												<select className="form-control form-control-sm" name="language">
													<option value="">English</option>
												</select>
											</td>
										</tr>
										<tr className="divider">
											<td colSpan="2"></td>
										</tr>
										<tr className="highlight">
											<td className="field">&nbsp;</td>
											<td className="p-t-10 p-b-10">
												<button type="submit" className="btn btn-primary width-150">Update</button>
												<button type="submit" className="btn btn-white btn-white-without-border width-150 m-l-5">Cancel</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className={'tab-pane fade ' + (this.state.tabPhoto ? 'show active ': '')}>
							<h4 className="m-t-0 m-b-20">Photos (70)</h4>
					
							<div className="row row-space-2">
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-1-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-2-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-3-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-4-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-5-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-6-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-7-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-8-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-9-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-10-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-11-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-12-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-13-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-14-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-15-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-16-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-17-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-18-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-19-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-20-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-21-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-22-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-23-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-24-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-25-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-26-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-27-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-28-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-29-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-30-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-31-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-32-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-33-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-34-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-35-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-36-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-37-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-38-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-39-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-40-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-41-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-42-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-43-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-44-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-45-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-46-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-47-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-48-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-49-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-50-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-51-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-52-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-53-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-54-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-55-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-56-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-57-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-58-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-59-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-60-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-61-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-62-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-63-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-64-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-65-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-66-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-67-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-68-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-69-thumb.jpg)'}}></div></Link></div>
								<div className="col-lg-1 col-sm-2 col-3"><Link to="/extra/profile" className="widget-card widget-card-rounded square m-b-2"><div className="widget-card-cover" style={{backgroundImage: 'url(/assets/img/gallery/gallery-70-thumb.jpg)'}}></div></Link></div>
							</div>
						</div>
						<div className={'tab-pane fade ' + (this.state.tabVideo ? 'show active ': '')}>
							<h4 className="m-t-0 m-b-20">Videos (16)</h4>
							<div className="row row-space-2">
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=RQ5ljyGg-ig" target="_blank" rel="noopener noreferrer">
										<img src="https://img.youtube.com/vi/RQ5ljyGg-ig/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=5lWkZ-JaEOc" target="_blank" rel="noopener noreferrer">
										<img src="https://img.youtube.com/vi/5lWkZ-JaEOc/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=9ZfN87gSjvI" target="_blank" rel="noopener noreferrer">
										<img src="https://img.youtube.com/vi/9ZfN87gSjvI/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=w2H07DRv2_M" target="_blank" rel="noopener noreferrer">
										<img src="https://img.youtube.com/vi/w2H07DRv2_M/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=PntG8KEVjR8" target="_blank" rel="noopener noreferrer">
									<img src="https://img.youtube.com/vi/PntG8KEVjR8/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=q8kxKvSQ7MI" target="_blank" rel="noopener noreferrer">
										<img src="https://img.youtube.com/vi/q8kxKvSQ7MI/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=cutu3Bw4ep4" target="_blank" rel="noopener noreferrer">
										<img src="https://img.youtube.com/vi/cutu3Bw4ep4/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=gCspUXGrraM" target="_blank" rel="noopener noreferrer">
										<img src="https://img.youtube.com/vi/gCspUXGrraM/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=COtpTM1MpAA" target="_blank" rel="noopener noreferrer">
										<img src="https://img.youtube.com/vi/COtpTM1MpAA/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=8NVkGHVOazc" target="_blank" rel="noopener noreferrer">
										<img src="https://img.youtube.com/vi/8NVkGHVOazc/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=QgQ7MWLsw1w" target="_blank" rel="noopener noreferrer">
										<img src="https://img.youtube.com/vi/QgQ7MWLsw1w/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=Dmw0ucCv8aQ" target="_blank" rel="noopener noreferrer">
										<img src="https://img.youtube.com/vi/Dmw0ucCv8aQ/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=r1d7ST2TG2U" target="_blank" rel="noopener noreferrer">
										<img src="https://img.youtube.com/vi/r1d7ST2TG2U/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=WUR-XWBcHvs" target="_blank" rel="noopener noreferrer">
										<img src="https://img.youtube.com/vi/WUR-XWBcHvs/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=A7sQ8RWj0Cw" target="_blank" rel="noopener noreferrer">
										<img src="https://img.youtube.com/vi/A7sQ8RWj0Cw/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
								<div className="col-md-3 col-sm-4 m-b-2">
									<a href="https://www.youtube.com/watch?v=IMN2VfiXls4" target="_blank" rel="noopener noreferrer">
										<img src="https://img.youtube.com/vi/IMN2VfiXls4/mqdefault.jpg" className="width-full" alt="" />
									</a>
								</div>
							</div>
						</div>
						<div className={'tab-pane fade ' + (this.state.tabFriend ? 'show active ': '')}>
							<h4 className="m-t-0 m-b-20">Friend List (14)</h4>
							<div className="row row-space-2">
								<div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
									<div className="p-10 bg-white">
										<div className="media media-xs overflow-visible align-items-center">
											<Link to="/extra/profile" className="media-left">
												<img src="/assets/img/user/user-1.jpg" alt="" className="media-object img-circle" />
											</Link>
											<div className="media-body valign-middle">
												<b className="text-inverse">James Pittman</b>
											</div>
											<div className="media-body valign-middle text-right overflow-visible">
												<div className="btn-group dropdown">
													<Link to="/extra/profile" className="btn btn-default">Friends</Link>
													<Link to="/extra/profile" data-toggle="dropdown" className="btn btn-default dropdown-toggle"></Link>
													<ul className="dropdown-menu dropdown-menu-right">
														<li><Link to="/extra/profile">Action 1</Link></li>
														<li><Link to="/extra/profile">Action 2</Link></li>
														<li><Link to="/extra/profile">Action 3</Link></li>
														<li className="divider"></li>
														<li><Link to="/extra/profile">Action 4</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
									<div className="p-10 bg-white">
										<div className="media media-xs overflow-visible align-items-center">
											<Link to="/extra/profile" className="media-left">
												<img src="/assets/img/user/user-2.jpg" alt="" className="media-object img-circle" />
											</Link>
											<div className="media-body valign-middle">
												<b className="text-inverse">Mitchell Ashcroft</b>
											</div>
											<div className="media-body valign-middle text-right overflow-visible">
												<div className="btn-group dropdown">
													<Link to="/extra/profile" className="btn btn-default">Friends</Link>
													<Link to="/extra/profile" data-toggle="dropdown" className="btn btn-default dropdown-toggle"></Link>
													<ul className="dropdown-menu dropdown-menu-right">
														<li><Link to="/extra/profile">Action 1</Link></li>
														<li><Link to="/extra/profile">Action 2</Link></li>
														<li><Link to="/extra/profile">Action 3</Link></li>
														<li className="divider"></li>
														<li><Link to="/extra/profile">Action 4</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
									<div className="p-10 bg-white">
										<div className="media media-xs overflow-visible align-items-center">
											<Link to="/extra/profile" className="media-left">
												<img src="/assets/img/user/user-3.jpg" alt="" className="media-object img-circle" />
											</Link>
											<div className="media-body valign-middle">
												<b className="text-inverse">Ella Cabena</b>
											</div>
											<div className="media-body valign-middle text-right overflow-visible">
												<div className="btn-group dropdown">
													<Link to="/extra/profile" className="btn btn-default">Friends</Link>
													<Link to="/extra/profile" data-toggle="dropdown" className="btn btn-default dropdown-toggle"></Link>
													<ul className="dropdown-menu dropdown-menu-right">
														<li><Link to="/extra/profile">Action 1</Link></li>
														<li><Link to="/extra/profile">Action 2</Link></li>
														<li><Link to="/extra/profile">Action 3</Link></li>
														<li className="divider"></li>
														<li><Link to="/extra/profile">Action 4</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
									<div className="p-10 bg-white">
										<div className="media media-xs overflow-visible align-items-center">
											<Link to="/extra/profile" className="media-left">
												<img src="/assets/img/user/user-4.jpg" alt="" className="media-object img-circle" />
											</Link>
											<div className="media-body valign-middle">
												<b className="text-inverse">Declan Dyson</b>
											</div>
											<div className="media-body valign-middle text-right overflow-visible">
												<div className="btn-group dropdown">
													<Link to="/extra/profile" className="btn btn-default">Friends</Link>
													<Link to="/extra/profile" data-toggle="dropdown" className="btn btn-default dropdown-toggle"></Link>
													<ul className="dropdown-menu dropdown-menu-right">
														<li><Link to="/extra/profile">Action 1</Link></li>
														<li><Link to="/extra/profile">Action 2</Link></li>
														<li><Link to="/extra/profile">Action 3</Link></li>
														<li className="divider"></li>
														<li><Link to="/extra/profile">Action 4</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
									<div className="p-10 bg-white">
										<div className="media media-xs overflow-visible align-items-center">
											<Link to="/extra/profile" className="media-left">
												<img src="/assets/img/user/user-5.jpg" alt="" className="media-object img-circle" />
											</Link>
											<div className="media-body valign-middle">
												<b className="text-inverse">George Seyler</b>
											</div>
											<div className="media-body valign-middle text-right overflow-visible">
												<div className="btn-group dropdown">
													<Link to="/extra/profile" className="btn btn-default">Friends</Link>
													<Link to="/extra/profile" data-toggle="dropdown" className="btn btn-default dropdown-toggle"></Link>
													<ul className="dropdown-menu dropdown-menu-right">
														<li><Link to="/extra/profile">Action 1</Link></li>
														<li><Link to="/extra/profile">Action 2</Link></li>
														<li><Link to="/extra/profile">Action 3</Link></li>
														<li className="divider"></li>
														<li><Link to="/extra/profile">Action 4</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
									<div className="p-10 bg-white">
										<div className="media media-xs overflow-visible align-items-center">
											<Link to="/extra/profile" className="media-left">
												<img src="/assets/img/user/user-6.jpg" alt="" className="media-object img-circle" />
											</Link>
											<div className="media-body valign-middle">
												<b className="text-inverse">Patrick Musgrove</b>
											</div>
											<div className="media-body valign-middle text-right overflow-visible">
												<div className="btn-group dropdown">
													<Link to="/extra/profile" className="btn btn-default">Friends</Link>
													<Link to="/extra/profile" data-toggle="dropdown" className="btn btn-default dropdown-toggle"></Link>
													<ul className="dropdown-menu dropdown-menu-right">
														<li><Link to="/extra/profile">Action 1</Link></li>
														<li><Link to="/extra/profile">Action 2</Link></li>
														<li><Link to="/extra/profile">Action 3</Link></li>
														<li className="divider"></li>
														<li><Link to="/extra/profile">Action 4</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
									<div className="p-10 bg-white">
										<div className="media media-xs overflow-visible align-items-center">
											<Link to="/extra/profile" className="media-left">
												<img src="/assets/img/user/user-7.jpg" alt="" className="media-object img-circle" />
											</Link>
											<div className="media-body valign-middle">
												<b className="text-inverse">Taj Connal</b>
											</div>
											<div className="media-body valign-middle text-right overflow-visible">
												<div className="btn-group dropdown">
													<Link to="/extra/profile" className="btn btn-default">Friends</Link>
													<Link to="/extra/profile" data-toggle="dropdown" className="btn btn-default dropdown-toggle"></Link>
													<ul className="dropdown-menu dropdown-menu-right">
														<li><Link to="/extra/profile">Action 1</Link></li>
														<li><Link to="/extra/profile">Action 2</Link></li>
														<li><Link to="/extra/profile">Action 3</Link></li>
														<li className="divider"></li>
														<li><Link to="/extra/profile">Action 4</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
									<div className="p-10 bg-white">
										<div className="media media-xs overflow-visible align-items-center">
											<Link to="/extra/profile" className="media-left">
												<img src="/assets/img/user/user-8.jpg" alt="" className="media-object img-circle" />
											</Link>
											<div className="media-body valign-middle">
												<b className="text-inverse">Laura Pollock</b>
											</div>
											<div className="media-body valign-middle text-right overflow-visible">
												<div className="btn-group dropdown">
													<Link to="/extra/profile" className="btn btn-default">Friends</Link>
													<Link to="/extra/profile" data-toggle="dropdown" className="btn btn-default dropdown-toggle"></Link>
													<ul className="dropdown-menu dropdown-menu-right">
														<li><Link to="/extra/profile">Action 1</Link></li>
														<li><Link to="/extra/profile">Action 2</Link></li>
														<li><Link to="/extra/profile">Action 3</Link></li>
														<li className="divider"></li>
														<li><Link to="/extra/profile">Action 4</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
									<div className="p-10 bg-white">
										<div className="media media-xs overflow-visible align-items-center">
											<Link to="/extra/profile" className="media-left">
												<img src="/assets/img/user/user-9.jpg" alt="" className="media-object img-circle" />
											</Link>
											<div className="media-body valign-middle">
												<b className="text-inverse">Dakota Mannix</b>
											</div>
											<div className="media-body valign-middle text-right overflow-visible">
												<div className="btn-group dropdown">
													<Link to="/extra/profile" className="btn btn-default">Friends</Link>
													<Link to="/extra/profile" data-toggle="dropdown" className="btn btn-default dropdown-toggle"></Link>
													<ul className="dropdown-menu dropdown-menu-right">
														<li><Link to="/extra/profile">Action 1</Link></li>
														<li><Link to="/extra/profile">Action 2</Link></li>
														<li><Link to="/extra/profile">Action 3</Link></li>
														<li className="divider"></li>
														<li><Link to="/extra/profile">Action 4</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
									<div className="p-10 bg-white">
										<div className="media media-xs overflow-visible align-items-center">
											<Link to="/extra/profile" className="media-left">
												<img src="/assets/img/user/user-10.jpg" alt="" className="media-object img-circle" />
											</Link>
											<div className="media-body valign-middle">
												<b className="text-inverse">Timothy Woolley</b>
											</div>
											<div className="media-body valign-middle text-right overflow-visible">
												<div className="btn-group dropdown">
													<Link to="/extra/profile" className="btn btn-default">Friends</Link>
													<Link to="/extra/profile" data-toggle="dropdown" className="btn btn-default dropdown-toggle"></Link>
													<ul className="dropdown-menu dropdown-menu-right">
														<li><Link to="/extra/profile">Action 1</Link></li>
														<li><Link to="/extra/profile">Action 2</Link></li>
														<li><Link to="/extra/profile">Action 3</Link></li>
														<li className="divider"></li>
														<li><Link to="/extra/profile">Action 4</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
									<div className="p-10 bg-white">
										<div className="media media-xs overflow-visible align-items-center">
											<Link to="/extra/profile" className="media-left">
												<img src="/assets/img/user/user-11.jpg" alt="" className="media-object img-circle" />
											</Link>
											<div className="media-body valign-middle">
												<b className="text-inverse">Benjamin Congreve</b>
											</div>
											<div className="media-body valign-middle text-right overflow-visible">
												<div className="btn-group dropdown">
													<Link to="/extra/profile" className="btn btn-default">Friends</Link>
													<Link to="/extra/profile" data-toggle="dropdown" className="btn btn-default dropdown-toggle"></Link>
													<ul className="dropdown-menu dropdown-menu-right">
														<li><Link to="/extra/profile">Action 1</Link></li>
														<li><Link to="/extra/profile">Action 2</Link></li>
														<li><Link to="/extra/profile">Action 3</Link></li>
														<li className="divider"></li>
														<li><Link to="/extra/profile">Action 4</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
									<div className="p-10 bg-white">
										<div className="media media-xs overflow-visible align-items-center">
											<Link to="/extra/profile" className="media-left">
												<img src="/assets/img/user/user-12.jpg" alt="" className="media-object img-circle" />
											</Link>
											<div className="media-body valign-middle">
												<b className="text-inverse">Mariam Maddock</b>
											</div>
											<div className="media-body valign-middle text-right overflow-visible">
												<div className="btn-group dropdown">
													<Link to="/extra/profile" className="btn btn-default">Friends</Link>
													<Link to="/extra/profile" data-toggle="dropdown" className="btn btn-default dropdown-toggle"></Link>
													<ul className="dropdown-menu dropdown-menu-right">
														<li><Link to="/extra/profile">Action 1</Link></li>
														<li><Link to="/extra/profile">Action 2</Link></li>
														<li><Link to="/extra/profile">Action 3</Link></li>
														<li className="divider"></li>
														<li><Link to="/extra/profile">Action 4</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
									<div className="p-10 bg-white">
										<div className="media media-xs overflow-visible align-items-center">
											<Link to="/extra/profile" className="media-left">
												<img src="/assets/img/user/user-13.jpg" alt="" className="media-object img-circle" />
											</Link>
											<div className="media-body valign-middle">
												<b className="text-inverse">Blake Gerrald</b>
											</div>
											<div className="media-body valign-middle text-right overflow-visible">
												<div className="btn-group dropdown">
													<Link to="/extra/profile" className="btn btn-default">Friends</Link>
													<Link to="/extra/profile" data-toggle="dropdown" className="btn btn-default dropdown-toggle"></Link>
													<ul className="dropdown-menu dropdown-menu-right">
														<li><Link to="/extra/profile">Action 1</Link></li>
														<li><Link to="/extra/profile">Action 2</Link></li>
														<li><Link to="/extra/profile">Action 3</Link></li>
														<li className="divider"></li>
														<li><Link to="/extra/profile">Action 4</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
									<div className="p-10 bg-white">
										<div className="media media-xs overflow-visible align-items-center">
											<Link to="/extra/profile" className="media-left">
												<img src="/assets/img/user/user-14.jpg" alt="" className="media-object img-circle" />
											</Link>
											<div className="media-body valign-middle">
												<b className="text-inverse">Gabrielle Bunton</b>
											</div>
											<div className="media-body valign-middle text-right overflow-visible">
												<div className="btn-group dropdown">
													<Link to="/extra/profile" className="btn btn-default">Friends</Link>
													<Link to="/extra/profile" data-toggle="dropdown" className="btn btn-default dropdown-toggle"></Link>
													<ul className="dropdown-menu dropdown-menu-right">
														<li><Link to="/extra/profile">Action 1</Link></li>
														<li><Link to="/extra/profile">Action 2</Link></li>
														<li><Link to="/extra/profile">Action 3</Link></li>
														<li className="divider"></li>
														<li><Link to="/extra/profile">Action 4</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ExtraProfile;