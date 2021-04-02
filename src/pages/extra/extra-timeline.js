import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

class ExtraTimeline extends React.Component {
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/extra/timeline">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/extra/timeline">Extra</Link></li>
					<li className="breadcrumb-item active">Timeline</li>
				</ol>
				<h1 className="page-header">Timeline <small>header small text goes here...</small></h1>
				<ul className="timeline">
					<li>
						<div className="timeline-time">
							<span className="date">today</span>
							<span className="time">04:20</span>
						</div>
						<div className="timeline-icon">
							<Link to="/extra/timeline">&nbsp;</Link>
						</div>
						<div className="timeline-body">
							<div className="timeline-header">
								<span className="userimage"><img src="/assets/img/user/user-1.jpg" alt="" /></span>
								<span className="username"><Link to="/extra/timeline">John Smith</Link> <small></small></span>
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
								<Link to="/extra/timeline" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</Link>
								<Link to="/extra/timeline" className="m-r-15 text-inverse-lighter"><i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</Link> 
								<Link to="/extra/timeline" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share</Link>
							</div>
							<div className="timeline-comment-box">
								<div className="user"><img src="/assets/img/user/user-13.jpg" alt="" /></div>
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
							<Link to="/extra/timeline">&nbsp;</Link>
						</div>
						<div className="timeline-body">
							<div className="timeline-header">
								<span className="userimage"><img src="/assets/img/user/user-2.jpg" alt="" /></span>
								<span className="username">Darren Parrase</span>
								<span className="pull-right text-muted">82 Views</span>
							</div>
							<div className="timeline-content">
								<p>Location: United States</p>
								<div className="height-sm m-b-10">
									<GoogleMapReact defaultCenter={{lat: 25.304304, lng: -90.06591800000001}} defaultZoom={5}></GoogleMapReact>
								</div>
							</div>
							<div className="timeline-footer">
								<Link to="/extra/timeline" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</Link>
								<Link to="/extra/timeline" className="m-r-15 text-inverse-lighter"><i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</Link> 
								<Link to="/extra/timeline" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share</Link>
							</div>
						</div>
					</li>
					<li>
						<div className="timeline-time">
							<span className="date">24 February 2014</span>
							<span className="time">08:17</span>
						</div>
						<div className="timeline-icon">
							<Link to="/extra/timeline">&nbsp;</Link>
						</div>
						<div className="timeline-body">
							<div className="timeline-header">
								<span className="userimage"><img src="/assets/img/user/user-6.jpg" alt="" /></span>
								<span className="username">Richard Leong</span>
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
								<Link to="/extra/timeline" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</Link>
								<Link to="/extra/timeline" className="m-r-15 text-inverse-lighter"><i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</Link> 
								<Link to="/extra/timeline" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share</Link>
							</div>
						</div>
					</li>
					<li>
						<div className="timeline-time">
							<span className="date">10 January 2014</span>
							<span className="time">20:43</span>
						</div>
						<div className="timeline-icon">
							<Link to="/extra/timeline">&nbsp;</Link>
						</div>
						<div className="timeline-body">
							<div className="timeline-header">
								<span className="userimage"><img src="/assets/img/user/user-7.jpg" alt="" /></span>
								<span className="username">Lelouch Wong</span>
								<span className="pull-right text-muted">1,021,282 Views</span>
							</div>
							<div className="timeline-content">
								<h4 className="template-title">
									<i className="fa fa-map-marker-alt text-danger fa-fw"></i>
									795 Folsom Ave, Suite 600 San Francisco, CA 94107
								</h4>
								<p>In hac habitasse platea dictumst. Pellentesque bibendum id sem nec faucibus. Maecenas molestie, augue vel accumsan rutrum, massa mi rutrum odio, id luctus mauris nibh ut leo.</p>
								<p className="m-t-20">
									<img src="/assets/img/gallery/gallery-4.jpg" alt="" />
								</p>
							</div>
							<div className="timeline-footer">
								<Link to="/extra/timeline" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</Link>
								<Link to="/extra/timeline" className="m-r-15 text-inverse-lighter"><i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</Link> 
								<Link to="/extra/timeline" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share</Link>
							</div>
						</div>
					</li>
					<li>
						<div className="timeline-icon">
							<Link to="/extra/timeline">&nbsp;</Link>
						</div>
						<div className="timeline-body">
							Loading...
						</div>
					</li>
				</ul>
			</div>
		)
	}
}

export default ExtraTimeline;