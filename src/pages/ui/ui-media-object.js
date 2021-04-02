import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';

class UIMediaObject extends React.Component {
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/ui">UI Elements</Link></li>
					<li className="breadcrumb-item active">Media Object</li>
				</ol>
				<h1 className="page-header">Media Object <small>header small text goes here...</small></h1>
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Default Media Object
							</PanelHeader>
							<PanelBody>
								<div className="media media-sm">
									<Link to="/ui/media-object" className="media-left">
										<img src="/assets/img/user/user-1.jpg" alt="" className="media-object" />
									</Link>
									<div className="media-body">
										<h4 className="media-heading">Media heading</h4>
										<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
									</div>
								</div>
								<div className="media media-sm">
									<Link to="/ui/media-object" className="media-left">
										<img src="/assets/img/user/user-2.jpg" alt="" className="media-object" />
									</Link>
									<div className="media-body">
										<h4 className="media-heading">Media heading</h4>
										<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
										<div className="media">
											<Link to="/ui/media-object" className="media-left">
												<img src="/assets/img/user/user-3.jpg" alt="" className="media-object" />
											</Link>
											<div className="media-body">
												<h4 className="media-heading">Nested media heading</h4>
												<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
											</div>
										</div>
									</div>
								</div>
								<div className="media media-sm">
									<Link to="/ui/media-object" className="media-left">
										<img src="/assets/img/user/user-4.jpg" alt="" className="media-object" />
									</Link>
									<div className="media-body">
										<h4 className="media-heading">Media heading</h4>
										<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
									</div>
								</div>
								<div className="media media-sm">
									<Link to="/ui/media-object" className="media-left">
										<img src="/assets/img/user/user-10.jpg" alt="" className="media-object" />
									</Link>
									<div className="media-body">
										<h4 className="media-heading">Media heading</h4>
										<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
									</div>
								</div>
							</PanelBody>
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Media List
							</PanelHeader>
							<PanelBody>
								<ul className="media-list">
									<li className="media media-sm">
										<Link to="/ui/media-object" className="media-left">
											<img src="/assets/img/user/user-5.jpg" alt="" className="media-object rounded-corner" />
										</Link>
										<div className="media-body">
											<h4 className="media-heading">Media heading</h4>
											<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
											<div className="media media-sm">
												<Link to="/ui/media-object" className="media-left">
													<img src="/assets/img/user/user-6.jpg" alt="" className="media-object rounded-corner" />
												</Link>
												<div className="media-body">
													<h4 className="media-heading">Nested media heading</h4>
													<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
													<div className="media">
														<Link to="/ui/media-object" className="media-left">
															<img src="/assets/img/user/user-7.jpg" alt="" className="media-object rounded-corner" />
														</Link>
														<div className="media-body">
															<h4 className="media-heading">Nested media heading</h4>
															<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
														</div>
													</div>
												</div>
											</div>
											<div className="media">
												<Link to="/ui/media-object" className="media-left">
													<img src="/assets/img/user/user-8.jpg" alt="" className="media-object rounded-corner" />
												</Link>
												<div className="media-body">
													<h4 className="media-heading">Nested media heading</h4>
													<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
												</div>
											</div>
										</div>
									</li>
									<li className="media media-sm">
										<Link to="/ui/media-object" className="media-left">
											<img src="/assets/img/user/user-9.jpg" alt="" className="media-object rounded-corner" />
										</Link>
										<div className="media-body">
											<h4 className="media-heading">Media heading</h4>
											<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
										</div>
									</li>
								</ul>
							</PanelBody>
						</Panel>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Media Object Sizes
							</PanelHeader>
							<PanelBody>
								<div className="media media-lg">
									<Link to="/ui/media-object" className="media-left">
										<img src="/assets/img/gallery/gallery-1.jpg" alt="" className="media-object" />
									</Link>
									<div className="media-body">
										<h4 className="media-heading">Media heading</h4>
										Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
									</div>
								</div>
								<div className="media">
									<Link to="/ui/media-object" className="media-left">
										<img src="/assets/img/gallery/gallery-2.jpg" alt="" className="media-object" />
									</Link>
									<div className="media-body">
										<h4 className="media-heading">Media heading</h4>
										Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
									</div>
								</div>
								<div className="media media-sm">
									<Link to="/ui/media-object" className="media-left">
										<img src="/assets/img/gallery/gallery-3.jpg" alt="" className="media-object" />
									</Link>
									<div className="media-body">
										<h4 className="media-heading">Media heading</h4>
										Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
									</div>
								</div>
								<div className="media media-xs">
									<Link to="/ui/media-object" className="media-left">
										<img src="/assets/img/gallery/gallery-4.jpg" alt="" className="media-object" />
									</Link>
									<div className="media-body">
										<h4 className="media-heading">Media heading</h4>
										Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
									</div>
								</div>
							</PanelBody>
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Media List with Button
							</PanelHeader>
							<PanelBody>
								<ul className="media-list media-list-with-divider">
									<li className="media media-sm">
										<Link to="/ui/media-object" className="media-left">
											<img src="/assets/img/user/user-5.jpg" alt="" className="media-object rounded-corner" />
										</Link>
										<div className="media-body">
											<h4 className="media-heading">Media heading</h4>
											<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, tempus viverra turpis.</p>
											<p>
												<button className="btn btn-sm btn-danger m-r-5">Reject</button>
												<button className="btn btn-sm btn-default">Cancel</button>
											</p>
										</div>
									</li>
									<li className="media media-sm">
										<div className="media-body text-right">
											<h4 className="media-heading">Nested media heading</h4>
											<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,  tempus viverra turpis.</p>
											<p>
												<button className="btn btn-sm btn-success m-r-5">Published</button>
												<button className="btn btn-sm btn-default">Cancel</button>
											</p>
										</div>
										<Link to="/ui/media-object" className="media-right">
											<img src="/assets/img/user/user-6.jpg" alt="" className="media-object rounded-corner" />
										</Link>
									</li>
									<li className="media media-sm">
										<Link to="/ui/media-object" className="media-left">
											<img src="/assets/img/user/user-8.jpg" alt="" className="media-object rounded-corner" />
										</Link>
										<div className="media-body">
											<h4 className="media-heading">Nested media heading</h4>
											<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, tempus viverra turpis.</p>
											<p>
												<button className="btn btn-sm btn-primary m-r-5">Confirm</button>
												<button className="btn btn-sm btn-default">Cancel</button>
											</p>
										</div>
									</li>
									<li className="media media-sm">
										<div className="media-body text-right">
											<h4 className="media-heading">Nested media heading</h4>
											<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,  tempus viverra turpis.</p>
											<p>
												<button className="btn btn-sm btn-warning m-r-5">Edit</button>
												<button className="btn btn-sm btn-default">Cancel</button>
											</p>
										</div>
										<Link to="/ui/media-object" className="media-right">
											<img src="/assets/img/user/user-7.jpg" alt="" className="media-object rounded-corner" />
										</Link>
									</li>
								</ul>
							</PanelBody>
						</Panel>
					</div>
				</div>
			</div>
		)
	}
}

export default UIMediaObject;