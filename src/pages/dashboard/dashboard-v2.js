import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import NVD3Chart from 'react-nvd3';
import d3 from 'd3';
import Calendar from 'react-calendar';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Panel, PanelHeader, PanelFooter } from './../../components/panel/panel.jsx';

class DashboardV2 extends React.Component {
	constructor(props) {
		super(props);
		
		this.formatDate = (d) => {
			var monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			d = new Date(d);
			d = monthsName[d.getMonth()] + ' ' + d.getDate();
			return d;
		}
		this.getDate = (minusDate) => {
			var d = new Date();
			d = d.setDate(d.getDate() - minusDate);
			return d;
		}
		
		this.donutChartOptions = {
			donut: true,
			showLegend: false,
			growOnHover: false,
			arcsRadius: [
				{ inner: 0.65, outer: 0.93 },
				{ inner: 0.6, outer: 1 }
			],
			margin: { 'left': 10,'right':  10,'top': 10,'bottom': 10 },
			donutRatio: 0.5,
			labelFormat: d3.format(',.0f')
		};
		this.donutChartData = [
			{ 'label': 'Return Visitors', 'value': 784466, 'color': '#348fe2' }, 
			{ 'label': 'New Visitors', 'value': 416747, 'color': '#00ACAC' }
		];
		
		this.areaChartOptions = {
			pointSize: 0.5,
			useInteractiveGuideline: true,
			durection: 300,
			showControls: false,
			controlLabels: {
				stacked: 'Stacked'
			},
			yAxis: {
				tickFormat: d3.format(',.0f')
			},
			xAxis: {
				tickFormat: function(d) {
					var monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
					d = new Date(d);
					d = monthsName[d.getMonth()] + ' ' + d.getDate();
					return d;
				}
			}
		};
		this.areaChartData = [{
			'key' : 'Unique Visitors',
			'color' : '#5AC8FA',
			'values' : [ 
				{ x: this.getDate(77), y: 13 }, { x: this.getDate(76), y: 13 },  { x: this.getDate(75), y: 6  }, 
				{ x: this.getDate(73), y: 6  },  { x: this.getDate(72), y: 6  },  { x: this.getDate(71), y: 5  },  { x: this.getDate(70), y: 5  }, 
				{ x: this.getDate(69), y: 5  },  { x: this.getDate(68), y: 6  },  { x: this.getDate(67), y: 7  },  { x: this.getDate(66), y: 6  }, 
				{ x: this.getDate(65), y: 9  },  { x: this.getDate(64), y: 9  },  { x: this.getDate(63), y: 8  },  { x: this.getDate(62), y: 10 }, 
				{ x: this.getDate(61), y: 10 },  { x: this.getDate(60), y: 10 },  { x: this.getDate(59), y: 10 },  { x: this.getDate(58), y: 9  }, 
				{ x: this.getDate(57), y: 9  },  { x: this.getDate(56), y: 10 },  { x: this.getDate(55), y: 9  },  { x: this.getDate(54), y: 9  }, 
				{ x: this.getDate(53), y: 8  },  { x: this.getDate(52), y: 8  },  { x: this.getDate(51), y: 8  },  { x: this.getDate(50), y: 8  }, 
				{ x: this.getDate(49), y: 8  },  { x: this.getDate(48), y: 7  },  { x: this.getDate(47), y: 7  },  { x: this.getDate(46), y: 6  }, 
				{ x: this.getDate(45), y: 6  },  { x: this.getDate(44), y: 6  },  { x: this.getDate(43), y: 6  },  { x: this.getDate(42), y: 5  }, 
				{ x: this.getDate(41), y: 5  },  { x: this.getDate(40), y: 4  },  { x: this.getDate(39), y: 4  },  { x: this.getDate(38), y: 5  }, 
				{ x: this.getDate(37), y: 5  },  { x: this.getDate(36), y: 5  },  { x: this.getDate(35), y: 7  },  { x: this.getDate(34), y: 7  }, 
				{ x: this.getDate(33), y: 7  },  { x: this.getDate(32), y: 10 },  { x: this.getDate(31), y: 9  },  { x: this.getDate(30), y: 9  }, 
				{ x: this.getDate(29), y: 10 },  { x: this.getDate(28), y: 11 },  { x: this.getDate(27), y: 11 },  { x: this.getDate(26), y: 8  }, 
				{ x: this.getDate(25), y: 8  },  { x: this.getDate(24), y: 7  },  { x: this.getDate(23), y: 8  },  { x: this.getDate(22), y: 9  }, 
				{ x: this.getDate(21), y: 8  },  { x: this.getDate(20), y: 9  },  { x: this.getDate(19), y: 10 },  { x: this.getDate(18), y: 9  }, 
				{ x: this.getDate(17), y: 10 },  { x: this.getDate(16), y: 16 },  { x: this.getDate(15), y: 17 },  { x: this.getDate(14), y: 16 }, 
				{ x: this.getDate(13), y: 17 },  { x: this.getDate(12), y: 16 },  { x: this.getDate(11), y: 15 },  { x: this.getDate(10), y: 14 }, 
				{ x: this.getDate(9) , y: 24 },  { x: this.getDate(8) , y: 18 },  { x: this.getDate(7) , y: 15 },  { x: this.getDate(6) , y: 14 }, 
				{ x: this.getDate(5) , y: 16 },  { x: this.getDate(4) , y: 16 },  { x: this.getDate(3) , y: 17 },  { x: this.getDate(2) , y: 7  }, 
				{ x: this.getDate(1) , y: 7  },  { x: this.getDate(0) , y: 7  }
			]
		}, {
			'key' : 'Page Views',
			'color' : '#348fe2',
			'values' : [ 
				{ x: this.getDate(77), y: 14 },  { x: this.getDate(76), y: 13 },  { x: this.getDate(75), y: 15 }, 
				{ x: this.getDate(73), y: 14 },  { x: this.getDate(72), y: 13 },  { x: this.getDate(71), y: 15 },  { x: this.getDate(70), y: 16 }, 
				{ x: this.getDate(69), y: 16 },  { x: this.getDate(68), y: 14 },  { x: this.getDate(67), y: 14 },  { x: this.getDate(66), y: 13 }, 
				{ x: this.getDate(65), y: 12 },  { x: this.getDate(64), y: 13 },  { x: this.getDate(63), y: 13 },  { x: this.getDate(62), y: 15 }, 
				{ x: this.getDate(61), y: 16 },  { x: this.getDate(60), y: 16 },  { x: this.getDate(59), y: 17 },  { x: this.getDate(58), y: 17 }, 
				{ x: this.getDate(57), y: 18 },  { x: this.getDate(56), y: 15 },  { x: this.getDate(55), y: 15 },  { x: this.getDate(54), y: 15 }, 
				{ x: this.getDate(53), y: 19 },  { x: this.getDate(52), y: 19 },  { x: this.getDate(51), y: 18 },  { x: this.getDate(50), y: 18 }, 
				{ x: this.getDate(49), y: 17 },  { x: this.getDate(48), y: 16 },  { x: this.getDate(47), y: 18 },  { x: this.getDate(46), y: 18 }, 
				{ x: this.getDate(45), y: 18 },  { x: this.getDate(44), y: 16 },  { x: this.getDate(43), y: 14 },  { x: this.getDate(42), y: 14 }, 
				{ x: this.getDate(41), y: 13 },  { x: this.getDate(40), y: 14 },  { x: this.getDate(39), y: 13 },  { x: this.getDate(38), y: 10 }, 
				{ x: this.getDate(37), y: 9  },  { x: this.getDate(36), y: 10 },  { x: this.getDate(35), y: 11 },  { x: this.getDate(34), y: 11 }, 
				{ x: this.getDate(33), y: 11 },  { x: this.getDate(32), y: 10 },  { x: this.getDate(31), y: 9  },  { x: this.getDate(30), y: 10 }, 
				{ x: this.getDate(29), y: 13 },  { x: this.getDate(28), y: 14 },  { x: this.getDate(27), y: 14 },  { x: this.getDate(26), y: 13 }, 
				{ x: this.getDate(25), y: 12 },  { x: this.getDate(24), y: 11 },  { x: this.getDate(23), y: 13 },  { x: this.getDate(22), y: 13 }, 
				{ x: this.getDate(21), y: 13 },  { x: this.getDate(20), y: 13 },  { x: this.getDate(19), y: 14 },  { x: this.getDate(18), y: 13 }, 
				{ x: this.getDate(17), y: 13 },  { x: this.getDate(16), y: 19 },  { x: this.getDate(15), y: 21 },  { x: this.getDate(14), y: 22 },
				{ x: this.getDate(13), y: 25 },  { x: this.getDate(12), y: 24 },  { x: this.getDate(11), y: 24 },  { x: this.getDate(10), y: 22 }, 
				{ x: this.getDate(9) , y: 16 },  { x: this.getDate(8) , y: 15 },  { x: this.getDate(7) , y: 12 },  { x: this.getDate(6) , y: 12 }, 
				{ x: this.getDate(5) , y: 15 },  { x: this.getDate(4) , y: 15 },  { x: this.getDate(3) , y: 15 },  { x: this.getDate(2) , y: 18 }, 
				{ x: this.getDate(2) , y: 18 },  { x: this.getDate(0) , y: 17 }
			]
		}];
		
		this.map = {
			center: {
				lat: 59.95,
				lng: 30.33
			},
			zoom: 9
		}
		this.date = new Date();
	}
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/dashboard/v2">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/dashboard/v2">Dashboard</Link></li>
					<li className="breadcrumb-item active">Dashboard v2</li>
				</ol>
				<h1 className="page-header">Dashboard v2 <small>header small text goes here...</small></h1>
				<div className="row">
					<div className="col-xl-3 col-md-6">
						<div className="widget widget-stats bg-teal">
							<div className="stats-icon stats-icon-lg"><i className="fa fa-globe fa-fw"></i></div>
							<div className="stats-content">
								<div className="stats-title">TODAY'S VISITS</div>
								<div className="stats-number">7,842,900</div>
								<div className="stats-progress progress">
									<div className="progress-bar" style={{width: '70.1%'}}></div>
								</div>
								<div className="stats-desc">Better than last week (70.1%)</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="widget widget-stats bg-blue">
							<div className="stats-icon stats-icon-lg"><i className="fa fa-dollar-sign fa-fw"></i></div>
							<div className="stats-content">
								<div className="stats-title">TODAY'S PROFIT</div>
								<div className="stats-number">180,200</div>
								<div className="stats-progress progress">
									<div className="progress-bar" style={{width: '40.5%'}}></div>
								</div>
								<div className="stats-desc">Better than last week (40.5%)</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="widget widget-stats bg-indigo">
							<div className="stats-icon stats-icon-lg"><i className="fa fa-archive fa-fw"></i></div>
							<div className="stats-content">
								<div className="stats-title">NEW ORDERS</div>
								<div className="stats-number">38,900</div>
								<div className="stats-progress progress">
									<div className="progress-bar" style={{width: '76.3%'}}></div>
								</div>
								<div className="stats-desc">Better than last week (76.3%)</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="widget widget-stats bg-dark">
							<div className="stats-icon stats-icon-lg"><i className="fa fa-comment-alt fa-fw"></i></div>
							<div className="stats-content">
								<div className="stats-title">NEW COMMENTS</div>
								<div className="stats-number">3,988</div>
								<div className="stats-progress progress">
									<div className="progress-bar" style={{width: '54.9%'}}></div>
								</div>
								<div className="stats-desc">Better than last week (54.9%)</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-8">
						<div className="widget-chart with-sidebar inverse-mode">
							<div className="widget-chart-content bg-dark">
								<h4 className="chart-title">
									Visitors Analytics
									<small>Where do our visitors come from</small>
								</h4>
								<div className="widget-chart-full-width nvd3-inverse-mode">
									<NVD3Chart type="stackedAreaChart" datum={this.areaChartData} height={260} options={this.areaChartOptions} />
								</div>
							</div>
							<div className="widget-chart-sidebar bg-dark-darker">
								<div className="chart-number">
									1,225,729
									<small>Total visitors</small>
								</div>
								<div className="flex-grow-1 d-flex align-items-center nvd3-inverse-mode">
									<NVD3Chart type="pieChart" datum={this.donutChartData} height={180} options={this.donutChartOptions} x="label" y="value" />
								</div>
								<ul className="chart-legend f-s-11">
									<li><i className="fa fa-circle fa-fw text-blue f-s-9 m-r-5 t-minus-1"></i> 34.0% <span>New Visitors</span></li>
									<li><i className="fa fa-circle fa-fw text-teal f-s-9 m-r-5 t-minus-1"></i> 56.0% <span>Return Visitors</span></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-4">
						<Panel>
							<PanelHeader noButton={true}>
								Visitors Origin
							</PanelHeader>
							<div style={{height: '180px'}}>
								<GoogleMapReact defaultCenter={this.map.center} defaultZoom={this.map.zoom}></GoogleMapReact>
							</div>
							<div className="list-group">
								<Link to="/dashboard/v2" className="list-group-item list-group-item-inverse list-group-item-action d-flex justify-content-between align-items-center text-ellipsis">
									1. United State 
									<span className="badge f-w-500 bg-teal f-s-10">20.95%</span>
								</Link> 
								<Link to="/dashboard/v2" className="list-group-item list-group-item-inverse list-group-item-action d-flex justify-content-between align-items-center text-ellipsis">
									2. India
									<span className="badge f-w-500 bg-blue f-s-10">16.12%</span>
								</Link>
								<Link to="/dashboard/v2" className="list-group-item list-group-item-inverse list-group-item-action d-flex justify-content-between align-items-center text-ellipsis">
									3. Mongolia
									<span className="badge f-w-500 bg-grey f-s-10">14.99%</span>
								</Link>
							</div>
						</Panel>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-4 col-lg-6">
						<Panel className="bg-light">
							<PanelHeader noButton={true}>
								Chat History <span className="label bg-teal pull-right pt-0 pb-0">4 message</span>
							</PanelHeader>
							<PerfectScrollbar className="chats" style={{height: '260px'}} options={{suppressScrollX: true}}>
								<div className="left">
									<span className="date-time">yesterday 11:23pm</span>
									<Link to="/dashboard/v2" className="name">Sowse Bawdy</Link>
									<Link to="/dashboard/v2" className="image"><img alt="" src="/assets/img/user/user-12.jpg" /></Link>
									<div className="message">
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit volutpat. Praesent mattis interdum arcu eu feugiat.
									</div>
								</div>
								<div className="right">
									<span className="date-time">08:12am</span>
									<Link to="/dashboard/v2" className="name"><span className="label label-primary">ADMIN</span> Me</Link>
									<Link to="/dashboard/v2" className="image"><img alt="" src="/assets/img/user/user-13.jpg" /></Link>
									<div className="message">
										Nullam posuere, nisl a varius rhoncus, risus tellus hendrerit neque.
									</div>
								</div>
								<div className="left">
									<span className="date-time">09:20am</span>
									<Link to="/dashboard/v2" className="name">Neck Jolly</Link>
									<Link to="/dashboard/v2" className="image"><img alt="" src="/assets/img/user/user-10.jpg" /></Link>
									<div className="message">
										Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
									</div>
								</div>
								<div className="left">
									<span className="date-time">11:15am</span>
									<Link to="/dashboard/v2" className="name">Shag Strap</Link>
									<Link to="/dashboard/v2" className="image"><img alt="" src="/assets/img/user/user-14.jpg" /></Link>
									<div className="message">
										Nullam iaculis pharetra pharetra. Proin sodales tristique sapien mattis placerat.
									</div>
								</div>
							</PerfectScrollbar>
							<PanelFooter>
								<form name="send_message_form" data-id="message-form">
									<div className="input-group">
										<input type="text" className="form-control" name="message" placeholder="Enter your message here." />
										<span className="input-group-append">
											<button className="btn btn-primary" type="button"><i className="fa fa-camera"></i></button>
											<button className="btn btn-primary" type="button"><i className="fa fa-link"></i></button>
										</span>
									</div>
								</form>
							</PanelFooter>
						</Panel>
					</div>
					<div className="col-xl-4 col-lg-6">
						<Panel>
							<PanelHeader noButton={true}>
								Today's Schedule
							</PanelHeader>
							<div>
								<Calendar value={this.date} />
							</div>
							<div className="list-group">
								<Link to="/dashboard/v2" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-ellipsis">
									Sales Reporting
									<span className="badge f-w-500 bg-teal f-s-10">9:00 am</span>
								</Link> 
								<Link to="/dashboard/v2" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-ellipsis">
									Have a meeting with sales team
									<span className="badge f-w-500 bg-blue f-s-10">2:45 pm</span>
								</Link>
							</div>
						</Panel>
					</div>
					<div className="col-xl-4 col-lg-6">
						<Panel>
							<PanelHeader noButton={true}>
								New Registered Users <span className="pull-right label bg-teal pt-0 pb-0">24 new users</span>
							</PanelHeader>
							<ul className="registered-users-list clearfix">
								<li>
									<Link to="/dashboard/v2"><img src="/assets/img/user/user-5.jpg" alt="" /></Link>
									<h4 className="username text-ellipsis">
										Savory Posh
										<small>Algerian</small>
									</h4>
								</li>
								<li>
									<Link to="/dashboard/v2"><img src="/assets/img/user/user-3.jpg" alt="" /></Link>
									<h4 className="username text-ellipsis">
										Ancient Caviar
										<small>Korean</small>
									</h4>
								</li>
								<li>
									<Link to="/dashboard/v2"><img src="/assets/img/user/user-1.jpg" alt="" /></Link>
									<h4 className="username text-ellipsis">
										Marble Lungs
										<small>Indian</small>
									</h4>
								</li>
								<li>
									<Link to="/dashboard/v2"><img src="/assets/img/user/user-8.jpg" alt="" /></Link>
									<h4 className="username text-ellipsis">
										Blank Bloke
										<small>Japanese</small>
									</h4>
								</li>
								<li>
									<Link to="/dashboard/v2"><img src="/assets/img/user/user-2.jpg" alt="" /></Link>
									<h4 className="username text-ellipsis">
										Hip Sculling
										<small>Cuban</small>
									</h4>
								</li>
								<li>
									<Link to="/dashboard/v2"><img src="/assets/img/user/user-6.jpg" alt="" /></Link>
									<h4 className="username text-ellipsis">
										Flat Moon
										<small>Nepalese</small>
									</h4>
								</li>
								<li>
									<Link to="/dashboard/v2"><img src="/assets/img/user/user-4.jpg" alt="" /></Link>
									<h4 className="username text-ellipsis">
										Packed Puffs
										<small>Malaysian></small>
									</h4>
								</li>
								<li>
									<Link to="/dashboard/v2"><img src="/assets/img/user/user-9.jpg" alt="" /></Link>
									<h4 className="username text-ellipsis">
										Clay Hike
										<small>Swedish</small>
									</h4>
								</li>
							</ul>
							<PanelFooter className="text-center">
								<Link to="/dashboard/v2" className="text-inverse">View All</Link>
							</PanelFooter>
						</Panel>
					</div>
				</div>
			</div>
		)
	}
};

export default DashboardV2;