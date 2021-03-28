import React from 'react';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { Panel, PanelHeader, PanelBody, PanelFooter } from './../../components/panel/panel.jsx';
import { Line } from 'react-chartjs-2';
import GoogleMapReact from 'google-map-react';
import classnames from 'classnames';
import Calendar from 'react-calendar';
import Sparkline from '@rowno/sparkline';
import PerfectScrollbar from 'react-perfect-scrollbar';


class DashboardV1 extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);

		this.state = {
			activeTab: '1'
		};
		
		this.lineChartData = {
			labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
			datasets: [{
				label: 'Page Views',
				fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(0, 172, 172, 0.25)',
				borderColor: '#00acac',
				borderWidth: 2,
				pointBorderColor: '#00acac',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 2,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: '#00acac',
				pointHoverBorderWidth: 3,
				pointRadius: 3,
				pointHitRadius: 10,
				data: [65, 59, 80, 81, 56, 55, 40, 59, 76, 94, 77, 82]
			},{
				label: 'Visitors',
				fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(52, 143, 226, 0.25)',
				borderColor: '#348fe2',
				borderWidth: 2,
				pointBorderColor: '#348fe2',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 2,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: '#348fe2',
				pointHoverBorderWidth: 3,
				pointRadius: 3,
				pointHitRadius: 10,
				data: [25, 29, 40, 45, 16, 15, 20, 39, 26, 44, 57, 32]
			}]
		}
		
		this.lineChartOptions = { 
			maintainAspectRatio: false, 
			scales: { 
				yAxes: [{ 
					ticks: { 
						beginAtZero:true,
						fontColor: 'black'
					}
				}],
				xAxes: [{ 
					ticks: { 
						fontColor: 'black'
					}
				}]
			},
			legend: {
				labels: {
					fontColor: 'black'
				}
			}
		}
		
		this.map = {
			center: {
				lat: 59.95,
				lng: 30.33
			},
			zoom: 9
		}
		
		this.date = new Date();
		
		this.sparklineData = [{
			values: [789, 880, 676, 200, 890, 677, 900],
			colors: { area: 'transparent', line: '#ff5b57' }
		}];
		
		this.sparklineData2 = [{
			values: [789, 880, 676, 200, 890, 677, 900],
			colors: { area: 'transparent', line: '#f59c1a' }
		}];
		
		this.sparklineData3 = [{
			values: [789, 880, 676, 200, 890, 677, 900],
			colors: { area: 'transparent', line: '#00acac' }
		}];
		
		this.sparklineData4 = [{
			values: [789, 880, 676, 200, 890, 677, 900],
			colors: { area: 'transparent', line: '#348fe2' }
		}];
		
		this.sparklineData5 = [{
			values: [789, 880, 676, 200, 890, 677, 900],
			colors: { area: 'transparent', line: '#ccc' }
		}];
		
		this.sparklineData6 = [{
			values: [789, 880, 676, 200, 890, 677, 900],
			colors: { area: 'transparent', line: '#2d353c' }
		}];
	}
	
	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}
  
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/dashboard/v1">Home</Link></li>
					<li className="breadcrumb-item active">Dashboard</li>
				</ol>
				<h1 className="page-header">Dashboard <small>header small text goes here...</small></h1>
				
				<div className="row">
					<div className="col-xl-3 col-md-6">
						<div className="widget widget-stats bg-red">
							<div className="stats-icon"><i className="fa fa-desktop"></i></div>
							<div className="stats-info">
								<h4>TOTAL VISITORS</h4>
								<p>3,291,922</p>	
							</div>
							<div className="stats-link">
								<Link to="/dashboard/v1">View Detail <i className="fa fa-arrow-alt-circle-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="widget widget-stats bg-orange">
							<div className="stats-icon"><i className="fa fa-link"></i></div>
							<div className="stats-info">
								<h4>BOUNCE RATE</h4>
								<p>20.44%</p>	
							</div>
							<div className="stats-link">
								<Link to="/dashboard/v1">View Detail <i className="fa fa-arrow-alt-circle-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="widget widget-stats bg-grey-darker">
							<div className="stats-icon"><i className="fa fa-users"></i></div>
							<div className="stats-info">
								<h4>UNIQUE VISITORS</h4>
								<p>1,291,922</p>	
							</div>
							<div className="stats-link">
								<Link to="/dashboard/v1">View Detail <i className="fa fa-arrow-alt-circle-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="widget widget-stats bg-black-lighter">
							<div className="stats-icon"><i className="fa fa-clock"></i></div>
							<div className="stats-info">
								<h4>AVG TIME ON SITE</h4>
								<p>00:12:23</p>	
							</div>
							<div className="stats-link">
								<Link to="/dashboard/v1">View Detail <i className="fa fa-arrow-alt-circle-right"></i></Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-8">
						<Panel>
							<PanelHeader>Website Analytics (Last 7 Days)</PanelHeader>
							<PanelBody>
								<Line data={ this.lineChartData } height={ 300 } options={ this.lineChartOptions } />
							</PanelBody>
						</Panel>
				
						<Nav tabs className="nav-tabs-inverse nav-justified nav-justified-mobile">
							<NavItem>
								<NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
									<i className="fa fa-camera fa-lg m-r-5"></i> <span className="d-none d-md-inline">Latest Post</span>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
									<i className="fa fa-archive fa-lg m-r-5"></i> <span className="d-none d-md-inline">Purchase</span>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
									<i className="fa fa-envelope fa-lg m-r-5"></i> <span className="d-none d-md-inline">Email</span>
								</NavLink>
							</NavItem>
						</Nav>
						<TabContent activeTab={this.state.activeTab}>
							<TabPane tabId="1">
								<PerfectScrollbar className="height-sm" options={{suppressScrollX: true}}>
									<ul className="media-list media-list-with-divider">
										<li className="media media-lg">
											<Link to="/dashboard/v1" className="pull-left">
												<img className="media-object" src="/assets/img/gallery/gallery-1.jpg" alt="" />
											</Link>
											<div className="media-body">
												<h4 className="media-heading">Aenean viverra arcu nec pellentesque ultrices. In erat purus, adipiscing nec lacinia at, ornare ac eros.</h4>
												Nullam at risus metus. Quisque nisl purus, pulvinar ut mauris vel, elementum suscipit eros. Praesent ornare ante massa, egestas pellentesque orci convallis ut. Curabitur consequat convallis est, id luctus mauris lacinia vel. Nullam tristique lobortis mauris, ultricies fermentum lacus bibendum id. Proin non ante tortor. Suspendisse pulvinar ornare tellus nec pulvinar. Nam pellentesque accumsan mi, non pellentesque sem convallis sed. Quisque rutrum erat id auctor gravida.
											</div>
										</li>
										<li className="media media-lg">
											<Link to="/dashboard/v1" className="pull-left">
												<img className="media-object" src="/assets/img/gallery/gallery-10.jpg" alt="" />
											</Link>
											<div className="media-body">
												<h4 className="media-heading">Vestibulum vitae diam nec odio dapibus placerat. Ut ut lorem justo.</h4>
												Fusce bibendum augue nec fermentum tempus. Sed laoreet dictum tempus. Aenean ac sem quis nulla malesuada volutpat. Nunc vitae urna pulvinar velit commodo cursus. Nullam eu felis quis diam adipiscing hendrerit vel ac turpis. Nam mattis fringilla euismod. Donec eu ipsum sit amet mauris iaculis aliquet. Quisque sit amet feugiat odio. Cras convallis lorem at libero lobortis, placerat lobortis sapien lacinia. Duis sit amet elit bibendum sapien dignissim bibendum.
											</div>
										</li>
										<li className="media media-lg">
											<Link to="/dashboard/v1" className="pull-left">
												<img className="media-object" src="/assets/img/gallery/gallery-7.jpg" alt="" />
											</Link>
											<div className="media-body">
												<h4 className="media-heading">Maecenas eget turpis luctus, scelerisque arcu id, iaculis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.</h4>
												Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam accumsan. Maecenas volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh ultrices tristique. Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at scelerisque. Nam augue nulla, accumsan quis nisi a, facilisis eleifend nulla. Praesent aliquet odio non imperdiet fringilla. Morbi a porta nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
											</div>
										</li>
										<li className="media media-lg">
											<Link to="/dashboard/v1" className="pull-left">
												<img className="media-object" src="/assets/img/gallery/gallery-8.jpg" alt="" />
											</Link>
											<div className="media-body">
												<h4 className="media-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor accumsan rutrum.</h4>
												Fusce augue diam, vestibulum a mattis sit amet, vehicula eu ipsum. Vestibulum eu mi nec purus tempor consequat. Vestibulum porta non mi quis cursus. Fusce vulputate cursus magna, tincidunt sodales ipsum lobortis tincidunt. Mauris quis lorem ligula. Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam accumsan. Maecenas volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh ultrices tristique. Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at scelerisque.
											</div>
										</li>
									</ul>
								</PerfectScrollbar>
							</TabPane>
							<TabPane tabId="2">
								<PerfectScrollbar className="height-sm" options={{suppressScrollX: true}}>
									<table className="table">
										<thead>
											<tr>
												<th>Date</th>
												<th className="hidden-sm">Product</th>
												<th></th>
												<th>Amount</th>
												<th>User</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>13/02/2013</td>
												<td className="hidden-sm">
													<Link to="/dashboard/v1">
														<img src="/assets/img/product/product-1.png" alt=""  />
													</Link>
												</td>
												<td className="text-nowrap">
													<h6><Link to="/dashboard/v1">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</Link></h6>
												</td>
												<td>$349.00</td>
												<td className="text-nowrap"><Link to="/dashboard/v1">Derick Wong</Link></td>
											</tr>
											<tr>
												<td>13/02/2013</td>
												<td className="hidden-sm">
													<Link to="/dashboard/v1">
														<img src="/assets/img/product/product-2.png" alt="" />
													</Link>
												</td>
												<td className="text-nowrap">
													<h6><Link to="/dashboard/v1">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</Link></h6>
												</td>
												<td>$399.00</td>
												<td className="text-nowrap"><Link to="/dashboard/v1">Derick Wong</Link></td>
											</tr>
											<tr>
												<td>13/02/2013</td>
												<td className="hidden-sm">
													<Link to="/dashboard/v1">
														<img src="/assets/img/product/product-3.png" alt="" />
													</Link>
												</td>
												<td className="text-nowrap">
													<h6><Link to="/dashboard/v1">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</Link></h6>
												</td>
												<td>$499.00</td>
												<td className="text-nowrap"><Link to="/dashboard/v1">Derick Wong</Link></td>
											</tr>
											<tr>
												<td>13/02/2013</td>
												<td className="hidden-sm">
													<Link to="/dashboard/v1">
														<img src="/assets/img/product/product-4.png" alt="" />
													</Link>
												</td>
												<td className="text-nowrap">
													<h6><Link to="/dashboard/v1">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</Link></h6>
												</td>
												<td>$230.00</td>
												<td className="text-nowrap"><Link to="/dashboard/v1">Derick Wong</Link></td>
											</tr>
											<tr>
												<td>13/02/2013</td>
												<td className="hidden-tablet hidden-phone">
													<Link to="/dashboard/v1">
														<img src="/assets/img/product/product-5.png" alt="" />
													</Link>
												</td>
												<td className="text-nowrap">
													<h6><Link to="/dashboard/v1">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</Link></h6>
												</td>
												<td>$500.00</td>
												<td className="text-nowrap"><Link to="/dashboard/v1">Derick Wong</Link></td>
											</tr>
										</tbody>
									</table>
								</PerfectScrollbar>
							</TabPane>
							<TabPane tabId="3">
								<PerfectScrollbar className="height-sm" options={{suppressScrollX: true}}>
									<ul className="media-list media-list-with-divider">
										<li className="media media-sm">
											<Link to="/dashboard/v1" className="pull-left">
												<img src="/assets/img/user/user-1.jpg" alt="" className="media-object rounded-corner" />
											</Link>
											<div className="media-body">
												<Link to="/dashboard/v1"><h4 className="media-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4></Link>
												<p className="m-b-5">
													Aenean mollis arcu sed turpis accumsan dignissim. Etiam vel tortor at risus tristique convallis. Donec adipiscing euismod arcu id euismod. Suspendisse potenti. Aliquam lacinia sapien ac urna placerat, eu interdum mauris viverra.
												</p>
												<i className="text-muted">Received on 04/16/2013, 12.39pm</i>
											</div>
										</li>
										<li className="media media-sm">
											<Link to="/dashboard/v1" className="pull-left">
												<img src="/assets/img/user/user-2.jpg" alt="" className="media-object rounded-corner" />
											</Link>
											<div className="media-body">
												<Link to="/dashboard/v1"><h4 className="media-heading">Praesent et sem porta leo tempus tincidunt eleifend et arcu.</h4></Link>
												<p className="m-b-5">
													Proin adipiscing dui nulla. Duis pharetra vel sem ac adipiscing. Vestibulum ut porta leo. Pellentesque orci neque, tempor ornare purus nec, fringilla venenatis elit. Duis at est non nisl dapibus lacinia.
												</p>
												<i className="text-muted">Received on 04/16/2013, 12.39pm</i>
											</div>
										</li>
										<li className="media media-sm">
											<Link to="/dashboard/v1" className="pull-left">
												<img src="/assets/img/user/user-3.jpg" alt="" className="media-object rounded-corner" />
											</Link>
											<div className="media-body">
												<Link to="/dashboard/v1"><h4 className="media-heading">Ut mi eros, varius nec mi vel, consectetur convallis diam.</h4></Link>
												<p className="m-b-5">
													Ut mi eros, varius nec mi vel, consectetur convallis diam. Nullam eget hendrerit eros. Duis lacinia condimentum justo at ultrices. Phasellus sapien arcu, fringilla eu pulvinar id, mattis quis mauris.
												</p>
												<i className="text-muted">Received on 04/16/2013, 12.39pm</i>
											</div>
										</li>
										<li className="media media-sm">
											<Link to="/dashboard/v1" className="pull-left">
												<img src="/assets/img/user/user-4.jpg" alt="" className="media-object rounded-corner" />
											</Link>
											<div className="media-body">
												<Link to="/dashboard/v1"><h4 className="media-heading">Aliquam nec dolor vel nisl dictum ullamcorper.</h4></Link>
												<p className="m-b-5">
													Aliquam nec dolor vel nisl dictum ullamcorper. Duis vel magna enim. Aenean volutpat a dui vitae pulvinar. Nullam ligula mauris, dictum eu ullamcorper quis, lacinia nec mauris.
												</p>
												<i className="text-muted">Received on 04/16/2013, 12.39pm</i>
											</div>
										</li>
									</ul>
								</PerfectScrollbar>
							</TabPane>
						</TabContent>
				
						<Panel>
							<PanelHeader>
								Quick Post
							</PanelHeader>
							<div className="panel-toolbar">
								<div className="btn-group m-r-5">
									<button className="btn btn-white"><i className="fa fa-bold"></i></button>
									<button className="btn btn-white active"><i className="fa fa-italic"></i></button>
									<button className="btn btn-white"><i className="fa fa-underline"></i></button>
								</div>
								<div className="btn-group">
									<button className="btn btn-white"><i className="fa fa-align-left"></i></button>
									<button className="btn btn-white active"><i className="fa fa-align-center"></i></button>
									<button className="btn btn-white"><i className="fa fa-align-right"></i></button>
									<button className="btn btn-white"><i className="fa fa-align-justify"></i></button>
								</div>
							</div>
							<textarea className="form-control no-rounded-corner bg-light" rows="14" defaultValue="Enter some comment."></textarea>
							<PanelFooter className={"text-right"}>
								<button className="btn btn-white btn-sm">Cancel</button>
								<button className="btn btn-primary btn-sm m-l-5">Action</button>
							</PanelFooter>
						</Panel>
						
						<Panel>
							<PanelHeader>Message</PanelHeader>
							<PanelBody>
								<PerfectScrollbar className="height-sm" options={{suppressScrollX: true}}>
									<ul className="media-list media-list-with-divider media-messaging">
										<li className="media media-sm">
											<Link to="/dashboard/v1" className="pull-left">
												<img src="/assets/img/user/user-5.jpg" alt="" className="media-object rounded-corner" />
											</Link>
											<div className="media-body">
												<h5 className="media-heading">John Doe</h5>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id nunc non eros fermentum vestibulum ut id felis. Nunc molestie libero eget urna aliquet, vitae laoreet felis ultricies. Fusce sit amet massa malesuada, tincidunt augue vitae, gravida felis.</p>
											</div>
										</li>
										<li className="media media-sm">
											<Link to="/dashboard/v1" className="pull-left">
												<img src="/assets/img/user/user-6.jpg" alt="" className="media-object rounded-corner" />
											</Link>
											<div className="media-body">
												<h5 className="media-heading">Terry Ng</h5>
												<p>Sed in ante vel ipsum tristique euismod posuere eget nulla. Quisque ante sem, scelerisque iaculis interdum quis, eleifend id mi. Fusce congue leo nec mauris malesuada, id scelerisque sapien ultricies.</p>
											</div>
										</li>
										<li className="media media-sm">
											<Link to="/dashboard/v1" className="pull-left">
												<img src="/assets/img/user/user-8.jpg" alt="" className="media-object rounded-corner" />
											</Link>
											<div className="media-body">
												<h5 className="media-heading">Fiona Log</h5>
												<p>Pellentesque dictum in tortor ac blandit. Nulla rutrum eu leo vulputate ornare. Nulla a semper mi, ac lacinia sapien. Sed volutpat ornare eros, vel semper sem sagittis in. Quisque risus ipsum, iaculis quis cursus eu, tristique sed nulla.</p>
											</div>
										</li>
										<li className="media media-sm">
											<Link to="/dashboard/v1" className="pull-left">
												<img src="/assets/img/user/user-7.jpg" alt="" className="media-object rounded-corner" />
											</Link>
											<div className="media-body">
												<h5 className="media-heading">John Doe</h5>
												<p>Morbi molestie lorem quis accumsan elementum. Morbi condimentum nisl iaculis, laoreet risus sed, porta neque. Proin mi leo, dapibus at ligula a, aliquam consectetur metus.</p>
											</div>
										</li>
									</ul>
								</PerfectScrollbar>
							</PanelBody>
							<PanelFooter>
								<form>
									<div className="input-group">
										<input type="text" className="form-control bg-light" placeholder="Enter message" />
										<span className="input-group-append">
											<button className="btn btn-primary" type="button"><i className="fa fa-pencil-alt"></i></button>
										</span>
									</div>
								</form>
							</PanelFooter>
						</Panel>
					</div>
					<div className="col-xl-4">
						<Panel>
							<PanelHeader>Analytics Details</PanelHeader>
							<PanelBody className="p-0">
								<div className="table-responsive">
									<table className="table table-valign-middle mb-0">
										<thead>
											<tr>	
												<th className="p-l-15">Source</th>
												<th>Total</th>
												<th className="p-r-15">Trend</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="p-l-15"><label className="label label-danger">Unique Visitor</label></td>
												<td>13,203 <span className="text-success"><i className="fa fa-arrow-up"></i></span></td>
												<td className="p-r-15">
													<Sparkline width={100} height={20} lines={this.sparklineData} />
												</td>
											</tr>
											<tr>
												<td className="p-l-15"><label className="label label-warning">Bounce Rate</label></td>
												<td>28.2%</td>
												<td className="p-r-15">
													<Sparkline width={100} height={20} lines={this.sparklineData2} />
												</td>
											</tr>
											<tr>
												<td className="p-l-15"><label className="label label-success">Total Page Views</label></td>
												<td>1,230,030</td>
												<td className="p-r-15">
													<Sparkline width={100} height={20} lines={this.sparklineData3} />
												</td>
											</tr>
											<tr>
												<td className="p-l-15"><label className="label label-primary">Avg Time On Site</label></td>
												<td>00:03:45</td>
												<td className="p-r-15">
													<Sparkline width={100} height={20} lines={this.sparklineData4} />
												</td>
											</tr>
											<tr>
												<td className="p-l-15"><label className="label label-default">% New Visits</label></td>
												<td>40.5%</td>
												<td className="p-r-15">
													<Sparkline width={100} height={20} lines={this.sparklineData5} />
												</td>
											</tr>
											<tr>
												<td className="p-l-15"><label className="label label-inverse">Return Visitors</label></td>
												<td>73.4%</td>
												<td className="p-r-15">
													<Sparkline width={100} height={20} lines={this.sparklineData6} />
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</PanelBody>
						</Panel>		
						<Panel>
							<PanelHeader>Todo List</PanelHeader>
							<PanelBody className="p-0">
								<ul className="todolist">
									<li className="active">
										<Link to="/dashboard/v1" className="todolist-container active">
											<div className="todolist-input"><i className="fa fa-square"></i></div>
											<div className="todolist-title">Donec vehicula pretium nisl, id lacinia nisl tincidunt id.</div>
										</Link>
									</li>
									<li>
										<Link to="/dashboard/v1" className="todolist-container">
											<div className="todolist-input"><i className="fa fa-square"></i></div>
											<div className="todolist-title">Duis a ullamcorper massa.</div>
										</Link>
									</li>
									<li>
										<Link to="/dashboard/v1" className="todolist-container">
											<div className="todolist-input"><i className="fa fa-square"></i></div>
											<div className="todolist-title">Phasellus bibendum, odio nec vestibulum ullamcorper.</div>
										</Link>
									</li>
									<li>
										<Link to="/dashboard/v1" className="todolist-container">
											<div className="todolist-input"><i className="fa fa-square"></i></div>
											<div className="todolist-title">Duis pharetra mi sit amet dictum congue.</div>
										</Link>
									</li>
									<li>
										<Link to="/dashboard/v1" className="todolist-container">
											<div className="todolist-input"><i className="fa fa-square"></i></div>
											<div className="todolist-title">Duis pharetra mi sit amet dictum congue.</div>
										</Link>
									</li>
									<li>
										<Link to="/dashboard/v1" className="todolist-container">
											<div className="todolist-input"><i className="fa fa-square"></i></div>
											<div className="todolist-title">Phasellus bibendum, odio nec vestibulum ullamcorper.</div>
										</Link>
									</li>
									<li>
										<Link to="/dashboard/v1" className="todolist-container">
											<div className="todolist-input"><i className="fa fa-square"></i></div>
											<div className="todolist-title">Donec vehicula pretium nisl, id lacinia nisl tincidunt id.</div>
										</Link>
									</li>
								</ul>
							</PanelBody>
						</Panel>
						<Panel>
							<PanelHeader>
								Word Visitors
							</PanelHeader>
							<div style={{height: '300px'}}>
								<GoogleMapReact defaultCenter={this.map.center} defaultZoom={this.map.zoom}></GoogleMapReact>
							</div>
						</Panel>
						<Panel>
							<PanelHeader>
								Calendar
							</PanelHeader>
							<Calendar value={this.date} />
						</Panel>
					</div>
				</div>
			</div>
		)
	}
};

export default DashboardV1;