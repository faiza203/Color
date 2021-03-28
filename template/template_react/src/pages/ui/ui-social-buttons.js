import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader } from './../../components/panel/panel.jsx';

class UISocialButtons extends React.Component {
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/ui">UI Elements</Link></li>
					<li className="breadcrumb-item active">Social Buttons</li>
				</ol>
				<h1 className="page-header">Social Buttons <small>header small text goes here...</small></h1>
				
				<div className="row">
					<div className="col-xl-8">
						<Panel>
							<PanelHeader>Social Buttons</PanelHeader>
							<div className="table-responsive">
								<table className="table table-striped table-condensed table-td-valign-middle mb-0">
									<thead>
										<tr>
											<th>Buttons</th>
											<th>className=""</th>
											<th>Color Code</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-adn">
													<span className="fab fa-adn"></span> Sign in with App.net
												</button>
											</td>
											<td><code>btn btn-social btn-adn</code></td>
											<td>#D87A68</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-bitbucket">
													<span className="fab fa-bitbucket"></span> Sign in with Bitbucket
												</button>
											</td>
											<td><code>btn btn-social btn-bitbucket</code></td>
											<td>#205081</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-dropbox">
													<span className="fab fa-dropbox"></span> Sign in with Dropbox
												</button>
											</td>
											<td><code>btn btn-social btn-dropbox</code></td>
											<td>#1087DD</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-facebook">
													<span className="fab fa-facebook"></span> Sign in with Facebook
												</button>
											</td>
											<td><code>btn btn-social btn-facebook</code></td>
											<td>#3B5998</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-flickr">
													<span className="fab fa-flickr"></span> Sign in with Flickr
												</button>
											</td>
											<td><code>btn btn-social btn-flickr</code></td>
											<td>#2BA9E1</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-foursquare">
													<span className="fab fa-foursquare"></span> Sign in with Foursquare
												</button>
											</td>
											<td><code>btn btn-social btn-foursquare</code></td>
											<td>#f94877</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-github">
													<span className="fab fa-github"></span> Sign in with GitHub
												</button>
											</td>
											<td><code>btn btn-social btn-github</code></td>
											<td>#444444</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-google">
													<span className="fab fa-google"></span> Sign in with Google
												</button>
											</td>
											<td><code>btn btn-social btn-google</code></td>
											<td>#DD4B39</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-instagram">
													<span className="fab fa-instagram"></span> Sign in with Instagram
												</button>
											</td>
											<td><code>btn btn-social btn-instagram</code></td>
											<td>#3F729B</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-linkedin">
													<span className="fab fa-linkedin"></span> Sign in with LinkedIn
												</button>
											</td>
											<td><code>btn btn-social btn-linkedin</code></td>
											<td>#007BB6</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-microsoft">
													<span className="fab fa-windows"></span> Sign in with Microsoft
												</button>
											</td>
											<td><code>btn btn-social btn-microsoft</code></td>
											<td>#2672EC</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-odnoklassniki">
													<span className="fab fa-odnoklassniki"></span> Sign in with Odnoklassniki
												</button>
											</td>
											<td><code>btn btn-social btn-odnoklassniki</code></td>
											<td>#F4731C</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-openid">
													<span className="fab fa-openid"></span> Sign in with OpenID
												</button>
											</td>
											<td><code>btn btn-social btn-openid</code></td>
											<td>#F7931E</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-pinterest">
													<span className="fab fa-pinterest"></span> Sign in with Pinterest
												</button>
											</td>
											<td><code>btn btn-social btn-pinterest</code></td>
											<td>#CB2027</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-reddit">
													<span className="fab fa-reddit"></span> Sign in with Reddit
												</button>
											</td>
											<td><code>btn btn-social btn-reddit</code></td>
											<td>#EFF7FF</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-soundcloud">
													<span className="fab fa-soundcloud"></span> Sign in with SoundCloud
												</button>
											</td>
											<td><code>btn btn-social btn-soundcloud</code></td>
											<td>#FF5500</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-tumblr">
													<span className="fab fa-tumblr"></span> Sign in with Tumblr
												</button>
											</td>
											<td><code>btn btn-social btn-tumblr</code></td>
											<td>#CB2027</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-twitter">
													<span className="fab fa-twitter"></span> Sign in with Twitter
												</button>
											</td>
											<td><code>btn btn-social btn-twitter</code></td>
											<td>#55ACEE</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-vimeo">
													<span className="fab fa-vimeo-square"></span> Sign in with Vimeo
												</button>
											</td>
											<td><code>btn btn-social btn-vimeo</code></td>
											<td>#1AB7EA</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-vk">
													<span className="fab fa-vk"></span> Sign in with VK
												</button>
											</td>
											<td><code>btn btn-social btn-vk</code></td>
											<td>#587EA3</td>
										</tr>
										<tr>
											<td>
												<button className="btn width-250 btn-social btn-yahoo">
													<span className="fab fa-yahoo"></span> Sign in with Yahoo!
												</button>
											</td>
											<td><code>btn btn-social btn-yahoo</code></td>
											<td>#720E9E</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Panel>
					</div>
					<div className="col-xl-4">
						<div className="lead m-b-20">
							<p className="m-b-5">Social Sign-In Buttons made in pure CSS based on Bootstrap and Font Awesome!</p>
							<a href="https://lipis.github.io/bootstrap-social/" rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-inverse">View Official Website <i className="fa fa-arrow-right m-l-5"></i></a>
						</div>
						<div className="m-b-10"><b>Social Icons</b></div>
						<div className="clearfix m-b-20">
							<button className="btn btn-social-icon btn-adn pull-left m-r-5 m-b-5"><span className="fab fa-adn"></span></button>
							<button className="btn btn-social-icon btn-bitbucket pull-left m-r-5 m-b-5"><span className="fab fa-bitbucket"></span></button>
							<button className="btn btn-social-icon btn-dropbox pull-left m-r-5 m-b-5"><span className="fab fa-dropbox"></span></button>
							<button className="btn btn-social-icon btn-facebook pull-left m-r-5 m-b-5"><span className="fab fa-facebook"></span></button>
							<button className="btn btn-social-icon btn-flickr pull-left m-r-5 m-b-5"><span className="fab fa-flickr"></span></button>
							<button className="btn btn-social-icon btn-foursquare pull-left m-r-5 m-b-5"><span className="fab fa-foursquare"></span></button>
							<button className="btn btn-social-icon btn-github pull-left m-r-5 m-b-5"><span className="fab fa-github"></span></button>
							<button className="btn btn-social-icon btn-google pull-left m-r-5 m-b-5"><span className="fab fa-google"></span></button>
							<button className="btn btn-social-icon btn-instagram pull-left m-r-5 m-b-5"><span className="fab fa-instagram"></span></button>
							<button className="btn btn-social-icon btn-linkedin pull-left m-r-5 m-b-5"><span className="fab fa-linkedin"></span></button>
							<button className="btn btn-social-icon btn-microsoft pull-left m-r-5 m-b-5"><span className="fab fa-windows"></span></button>
							<button className="btn btn-social-icon btn-odnoklassniki pull-left m-r-5 m-b-5"><span className="fab fa-odnoklassniki"></span></button>
							<button className="btn btn-social-icon btn-openid pull-left m-r-5 m-b-5"><span className="fab fa-openid"></span></button>
							<button className="btn btn-social-icon btn-pinterest pull-left m-r-5 m-b-5"><span className="fab fa-pinterest"></span></button>
							<button className="btn btn-social-icon btn-reddit pull-left m-r-5 m-b-5"><span className="fab fa-reddit"></span></button>
							<button className="btn btn-social-icon btn-soundcloud pull-left m-r-5 m-b-5"><span className="fab fa-soundcloud"></span></button>
							<button className="btn btn-social-icon btn-tumblr pull-left m-r-5 m-b-5"><span className="fab fa-tumblr"></span></button>
							<button className="btn btn-social-icon btn-twitter pull-left m-r-5 m-b-5"><span className="fab fa-twitter"></span></button>
							<button className="btn btn-social-icon btn-vimeo pull-left m-r-5 m-b-5"><span className="fab fa-vimeo-square"></span></button>
							<button className="btn btn-social-icon btn-vk pull-left m-r-5 m-b-5"><span className="fab fa-vk"></span></button>
							<button className="btn btn-social-icon btn-yahoo pull-left m-r-5 m-b-5"><span className="fab fa-yahoo"></span></button>
						</div>
						<div className="m-b-10"><b>Different Sizes</b></div>
						<div className="m-b-10">
							<p>
								<button className="btn btn-social btn-lg btn-facebook m-r-5"><i className="fab fa-facebook"></i>Sign in with Facebook</button>
								<button className="btn btn-social-icon btn-lg btn-facebook"><i className="fab fa-facebook"></i></button>
							</p>
							<p>
								<button className="btn btn-social btn-facebook m-r-5"><i className="fab fa-facebook"></i>Sign in with Facebook</button>
								<button className="btn btn-social-icon btn-facebook"><i className="fab fa-facebook"></i></button>
							</p>
							<p>
								<button className="btn btn-social btn-sm btn-facebook m-r-5"><i className="fab fa-facebook"></i>Sign in with Facebook</button>
								<button className="btn btn-social-icon btn-sm btn-facebook"><i className="fab fa-facebook"></i></button>
							</p>
							<p>
								<button className="btn btn-social btn-xs btn-facebook m-r-5"><i className="fab fa-facebook"></i>Sign in with Facebook</button>
								<button className="btn btn-social-icon btn-xs btn-facebook"><i className="fab fa-facebook"></i></button>
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default UISocialButtons