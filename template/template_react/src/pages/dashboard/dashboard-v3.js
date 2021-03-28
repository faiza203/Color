import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import NVD3Chart from 'react-nvd3';
import d3 from 'd3';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Chart from 'react-apexcharts';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import Moment from 'moment';

class DashboardV2 extends React.Component {
	constructor(props) {
		super(props);
		
		var convertNumberWithCommas = function(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		};
		
		this.formatDate = (d) => {
			console.log(d);
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
		
    this.totalSalesChart = {
			options: {
				chart: {
					type: 'line',
					width: 200,
					height: 36,
					sparkline: {
						enabled: true
					},
					stacked: true
				},
				stroke: {
					curve: 'smooth',
					width: 3
				},
				fill: {
					type: 'gradient',
					gradient: {
						opacityFrom: 1,
						opacityTo: 1,
						colorStops: [{
							offset: 0,
							color: '#348fe2',
							opacity: 1
						},
						{
							offset: 100,
							color: '#8753de',
							opacity: 1
						}]
					},
				},
				tooltip: {
					theme: 'dark',
					fixed: {
						enabled: false
					},
					x: {
						show: false
					},
					y: {
						title: {
							formatter: function (seriesName) {
								return ''
							}
						},
						formatter: (value) => { return '$'+ convertNumberWithCommas(value) },
					},
					marker: {
						show: false
					}
				},
				responsive: [{
					breakpoint: 1500,
					options: {
						chart: {
							width: 130
						}
					}
				},{
					breakpoint: 1300,
					options: {
						chart: {
							width: 100
						}
					}
				},{
					breakpoint: 1200,
					options: {
						chart: {
							width: 200
						}
					}
				},{
					breakpoint: 576,
					options: {
						chart: {
							width: 180
						}
					}
				},{
					breakpoint: 400,
					options: {
						chart: {
							width: 120
						}
					}
				}]
			},
			series: [{
				data: [9452.37, 11018.87, 7296.37, 6274.29, 7924.05, 6581.34, 12918.14]
			}]
		};
		this.conversionRateChart = {
			options: {
				chart: {
					type: 'line',
					width: 160,
					height: 28,
					sparkline: {
						enabled: true
					}
				},
				stroke: {
					curve: 'smooth',
					width: 3
				},
				fill: {
					type: 'gradient',
					gradient: {
						opacityFrom: 1,
						opacityTo: 1,
						colorStops: [{
							offset: 0,
							color: '#ff5b57',
							opacity: 1
						},
						{
							offset: 50,
							color: '#f59c1a',
							opacity: 1
						},
						{
							offset: 100,
							color: '#90ca4b',
							opacity: 1
						}]
					},
				},
				labels: ['Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29'],
				xaxis: {
					crosshairs: {
						width: 1
					},
				},
				tooltip: {
					theme: 'dark',
					fixed: {
						enabled: false
					},
					x: {
						show: false
					},
					y: {
						title: {
							formatter: function (seriesName) {
								return ''
							}
						},
						formatter: (value) => { return value + '%' },
					},
					marker: {
						show: false
					}
				},
				responsive: [{
					breakpoint: 1500,
					options: {
						chart: {
							width: 120
						}
					}
				},{
					breakpoint: 1300,
					options: {
						chart: {
							width: 100
						}
					}
				},{
					breakpoint: 1200,
					options: {
						chart: {
							width: 160
						}
					}
				},{
					breakpoint: 900,
					options: {
						chart: {
							width: 120
						}
					}
				},{
					breakpoint: 576,
					options: {
						chart: {
							width: 180
						}
					}
				},{
					breakpoint: 400,
					options: {
						chart: {
							width: 120
						}
					}
				}]
			},
			series: [{
				data: [2.68, 2.93, 2.04, 1.61, 1.88, 1.62, 2.80]
			}]
		};
		this.storeSessionChart = {
			options: {
				chart: {
					type: 'line',
					width: 160,
					height: 28,
					sparkline: {
						enabled: true
					},
					stacked: false
				},
				stroke: {
					curve: 'smooth',
					width: 3
				},
				fill: {
					type: 'gradient',
					gradient: {
						opacityFrom: 1,
						opacityTo: 1,
						colorStops: [{
							offset: 0,
							color: '#00acac',
							opacity: 1
						},
						{
							offset: 50,
							color: '#348fe2',
							opacity: 1
						},
						{
							offset: 100,
							color: '#5AC8FA',
							opacity: 1
						}]
					},
				},
				labels: ['Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29'],
				xaxis: {
					crosshairs: {
						width: 1
					},
				},
				tooltip: {
					theme: 'dark',
					fixed: {
						enabled: false
					},
					x: {
						show: false
					},
					y: {
						title: {
							formatter: function (seriesName) {
								return ''
							}
						},
						formatter: (value) => { return convertNumberWithCommas(value) },
					},
					marker: {
						show: false
					}
				},
				responsive: [{
					breakpoint: 1500,
					options: {
						chart: {
							width: 120
						}
					}
				},{
					breakpoint: 1300,
					options: {
						chart: {
							width: 100
						}
					}
				},{
					breakpoint: 1200,
					options: {
						chart: {
							width: 160
						}
					}
				},{
					breakpoint: 900,
					options: {
						chart: {
							width: 120
						}
					}
				},{
					breakpoint: 576,
					options: {
						chart: {
							width: 180
						}
					}
				},{
					breakpoint: 400,
					options: {
						chart: {
							width: 120
						}
					}
				}]
			},
			series: [{
				data: [10812, 11393, 7311, 6834, 9612, 11200, 13557]
			}]
		};
		
		this.startDate = Moment().subtract(7, 'days');
		this.endDate = Moment();
		
		this.dateRange = {
			currentWeek: Moment().subtract('days', 7).format('D MMMM YYYY') + ' - ' + Moment().format('D MMMM YYYY'),
			prevWeek: Moment().subtract('days', 15).format('D MMMM') + ' - ' + Moment().subtract('days', 8).format('D MMMM YYYY')
		}
		
		
		this.handleDateApplyEvent = (event, picker) => {
			var startDate = picker.startDate;
			var endDate = picker.endDate;
			var gap = endDate.diff(startDate, 'days');
			
			var currentWeek = startDate.format('D MMMM YYYY') + ' - ' + endDate.format('D MMMM YYYY');
			var prevWeek = Moment(startDate).subtract('days', gap).format('D MMMM') + ' - ' + Moment(startDate).subtract('days', 1).format('D MMMM YYYY');
			
			this.dateRange.currentWeek = currentWeek;
			this.dateRange.prevWeek = prevWeek;
			
			this.setState(dateRange => ({
				currentWeek: currentWeek,
				prevWeek: prevWeek
			}));
		}
	}
	
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/dashboard/v3">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/dashboard/v3">Dashboard</Link></li>
					<li className="breadcrumb-item active">Dashboard v3</li>
				</ol>
				<h1 className="page-header mb-3">Dashboard v3</h1>
				<div className="d-sm-flex align-items-center mb-3">
					<DateRangePicker startDate={this.startDate} endDate={this.endDate} onApply={this.handleDateApplyEvent}>
						<button className="btn btn-inverse mr-2 text-truncate">
							<i className="fa fa-calendar fa-fw text-white-transparent-5 ml-n1"></i> 
							<span>{this.dateRange.currentWeek}</span>
							<b className="caret"></b>
						</button>
					</DateRangePicker>
					<div className="text-muted f-w-600 mt-2 mt-sm-0">compared to <span>{this.dateRange.prevWeek}</span></div>
				</div>
				<div className="row">
					<div className="col-xl-6">
						<div className="card border-0 bg-dark text-white mb-3 overflow-hidden">
							<div className="card-body">
								<div className="row">
									<div className="col-xl-7 col-lg-8">
										<div className="mb-3 text-grey">
											<b>TOTAL SALES</b>
											<span className="ml-2">
												<i className="fa fa-info-circle" id="popover1"></i>
												<UncontrolledPopover trigger="hover" placement="top" target="popover1">
													<PopoverHeader>Popover Title</PopoverHeader>
													<PopoverBody>Net sales (gross sales minus discounts and returns) plus taxes and shipping. Includes orders from all sales channels.</PopoverBody>
												</UncontrolledPopover>
											</span>
										</div>
										<div className="d-flex mb-1">
											<h2 className="mb-0">$64,559.25</h2>
											<div className="ml-auto mt-n1 mb-n1">
												<Chart type="line" height={'36px'} options={this.totalSalesChart.options} series={this.totalSalesChart.series} />
											</div>
										</div>
										<div className="mb-3 text-grey">
											<i className="fa fa-caret-up"></i> 33.21% compare to last week
										</div>
										<hr className="bg-white-transparent-2" />
										<div className="row text-truncate">
											<div className="col-6">
												<div className="f-s-12 text-grey">Total sales order</div>
												<div className="f-s-18 m-b-5 f-w-600 p-b-1">1,568</div>
												<div className="progress progress-xs rounded-lg bg-dark-darker m-b-5">
													<div className="progress-bar progress-bar-striped rounded-right bg-teal" style={{width: '55%'}}></div>
												</div>
											</div>
											<div className="col-6">
												<div className="f-s-12 text-grey">Avg. sales per order</div>
												<div className="f-s-18 m-b-5 f-w-600 p-b-1">$41.20</div>
												<div className="progress progress-xs rounded-lg bg-dark-darker m-b-5">
													<div className="progress-bar progress-bar-striped rounded-right" style={{width: '55%'}}></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-5 col-lg-4 align-items-center d-flex justify-content-center">
										<img src="/assets/img/svg/img-1.svg" alt="" height="150px" className="d-none d-lg-block" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6">
						<div className="row">
							<div className="col-sm-6">
								<div className="card border-0 bg-dark text-white text-truncate mb-3">
									<div className="card-body">
										<div className="mb-3 text-grey">
											<b className="mb-3">CONVERSION RATE</b> 
											<span className="ml-2">
												<i className="fa fa-info-circle" id="popover2"></i>
												<UncontrolledPopover trigger="hover" placement="top" target="popover2">
													<PopoverHeader>Conversion Rate</PopoverHeader>
													<PopoverBody>Percentage of sessions that resulted in orders from total number of sessions.</PopoverBody>
												</UncontrolledPopover>
											</span>
										</div>
										<div className="d-flex align-items-center mb-1">
											<h2 className="text-white mb-0">2.19%</h2>
											<div className="ml-auto">
												<Chart type="line" height={'28px'} options={this.conversionRateChart.options} series={this.conversionRateChart.series} />
											</div>
										</div>
										<div className="mb-4 text-grey">
											<i className="fa fa-caret-down"></i> 0.50% compare to last week
										</div>
										<div className="d-flex mb-2">
											<div className="d-flex align-items-center">
												<i className="fa fa-circle text-red f-s-8 mr-2"></i>
												Added to cart
											</div>
											<div className="d-flex align-items-center ml-auto">
												<div className="text-grey f-s-11"><i className="fa fa-caret-up"></i> 262%</div>
												<div className="width-50 text-right pl-2 f-w-600">3.79%</div>
											</div>
										</div>
										<div className="d-flex mb-2">
											<div className="d-flex align-items-center">
												<i className="fa fa-circle text-warning f-s-8 mr-2"></i>
												Reached checkout
											</div>
											<div className="d-flex align-items-center ml-auto">
												<div className="text-grey f-s-11"><i className="fa fa-caret-up"></i> 11%</div>
												<div className="width-50 text-right pl-2 f-w-600">3.85%</div>
											</div>
										</div>
										<div className="d-flex">
											<div className="d-flex align-items-center">
												<i className="fa fa-circle text-lime f-s-8 mr-2"></i>
												Sessions converted
											</div>
											<div className="d-flex align-items-center ml-auto">
												<div className="text-grey f-s-11"><i className="fa fa-caret-up"></i> 57%</div>
												<div className="width-50 text-right pl-2 f-w-600">2.19%</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="card border-0 bg-dark text-white text-truncate mb-3">
									<div className="card-body">
										<div className="mb-3 text-grey">
											<b className="mb-3">STORE SESSIONS</b> 
											<span className="ml-2">
												<i className="fa fa-info-circle" id="popover3"></i>
												<UncontrolledPopover trigger="hover" placement="top" target="popover3">
													<PopoverHeader>Store Sessions</PopoverHeader>
													<PopoverBody>Number of sessions on your online store. A session is a period of continuous activity from a visitor.</PopoverBody>
												</UncontrolledPopover>
											</span>
										</div>
										<div className="d-flex align-items-center mb-1">
											<h2 className="text-white mb-0">70,719</h2>
											<div className="ml-auto">
												<Chart type="line" height={'28px'} options={this.storeSessionChart.options} series={this.storeSessionChart.series} />
											</div>
										</div>
										<div className="mb-4 text-grey">
											<i className="fa fa-caret-up"></i> 9.5% compare to last week
										</div>
										<div className="d-flex mb-2">
											<div className="d-flex align-items-center">
												<i className="fa fa-circle text-teal f-s-8 mr-2"></i>
												Mobile
											</div>
											<div className="d-flex align-items-center ml-auto">
												<div className="text-grey f-s-11"><i className="fa fa-caret-up"></i> 25.7%</div>
												<div className="width-50 text-right pl-2 f-w-600">53,210</div>
											</div>
										</div>
										<div className="d-flex mb-2">
											<div className="d-flex align-items-center">
												<i className="fa fa-circle text-blue f-s-8 mr-2"></i>
												Desktop
											</div>
											<div className="d-flex align-items-center ml-auto">
												<div className="text-grey f-s-11"><i className="fa fa-caret-up"></i> 16.0%</div>
												<div className="width-50 text-right pl-2 f-w-600">11,959</div>
											</div>
										</div>
										<div className="d-flex">
											<div className="d-flex align-items-center">
												<i className="fa fa-circle text-aqua f-s-8 mr-2"></i>
												Tablet
											</div>
											<div className="d-flex align-items-center ml-auto">
												<div className="text-grey f-s-11"><i className="fa fa-caret-up"></i> 7.9%</div>
												<div className="width-50 text-right pl-2 f-w-600">5,545</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-8 col-lg-6">
						<div className="card bg-dark border-0 text-white mb-3">
							<div className="card-body">
								<div className="mb-3 text-grey">
									<b>VISITORS ANALYTICS</b>
									<span className="ml-2">
										<i className="fa fa-info-circle" id="popover4"></i>
										<UncontrolledPopover trigger="hover" placement="top" target="popover4">
											<PopoverHeader>Top products with units sold</PopoverHeader>
											<PopoverBody>Products with the most individual units sold. Includes orders from all sales channels.</PopoverBody>
										</UncontrolledPopover>
									</span>
								</div>
								<div className="row">
									<div className="col-xl-3 col-4">
										<h3 className="mb-1">127.1K</h3>
										<div>New Visitors</div>
										<div className="text-grey f-s-11 text-truncate"><i className="fa fa-caret-up"></i> 25.5% from previous 7 days</div>
									</div>
									<div className="col-xl-3 col-4">
										<h3 className="mb-1">179.9K</h3>
										<div>Returning Visitors</div>
										<div className="text-grey f-s-11 text-truncate"><i className="fa fa-caret-up"></i> 5.33% from previous 7 days</div>
									</div>
									<div className="col-xl-3 col-4">
										<h3 className="mb-1">766.8K</h3>
										<div>Total Page Views</div>
										<div className="text-grey f-s-11 text-truncate"><i className="fa fa-caret-up"></i> 0.323% from previous 7 days</div>
									</div>
								</div>
							</div>
							<div className="card-body p-0">
								<div style={{height: '269px'}}>
									<div className="widget-chart-full-width nvd3-inverse-mode" style={{height: '254px'}}>
										<NVD3Chart type="stackedAreaChart" datum={this.areaChartData} height={260} options={this.areaChartOptions} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-lg-6">
						<div className="card bg-dark border-0 text-white mb-3">
							<div className="card-body">
								<div className="mb-2 text-grey">
									<b>SESSION BY LOCATION</b>
									<span className="ml-2">
										<i className="fa fa-info-circle" id="popover5"></i>
										<UncontrolledPopover trigger="hover" placement="top" target="popover5">
											<PopoverHeader>Total sales</PopoverHeader>
											<PopoverBody>Net sales (gross sales minus discounts and returns) plus taxes and shipping. Includes orders from all sales channels.</PopoverBody>
										</UncontrolledPopover>
									</span>
								</div>
								<div className="bg-black mb-3" style={{height: '192px'}}>
									<GoogleMapReact defaultCenter={this.map.center} defaultZoom={this.map.zoom}></GoogleMapReact>
								</div>
								<div>
									<div className="d-flex align-items-center text-white mb-2">
										<div className="widget-img widget-img-xs rounded bg-inverse mr-2 width-40" style={{backgroundImage: 'url(/assets/img/flag/us.jpg)'}}></div>
										<div className="d-flex w-100">
											<div>United States</div>
											<div className="ml-auto text-grey">39.85%</div>
										</div>
									</div>
									<div className="d-flex align-items-center text-white mb-2">
										<div className="widget-img widget-img-xs rounded bg-inverse mr-2 width-40" style={{backgroundImage: 'url(/assets/img/flag/cn.jpg)'}}></div>
										<div className="d-flex w-100">
											<div>China</div>
											<div className="ml-auto text-grey">14.23%</div>
										</div>
									</div>
									<div className="d-flex align-items-center text-white mb-2">
										<div className="widget-img widget-img-xs rounded bg-inverse mr-2 width-40" style={{backgroundImage: 'url(/assets/img/flag/de.jpg)'}}></div>
										<div className="d-flex w-100">
											<div>Germany</div>
											<div className="ml-auto text-grey">12.83%</div>
										</div>
									</div>
									<div className="d-flex align-items-center text-white mb-2">
										<div className="widget-img widget-img-xs rounded bg-inverse mr-2 width-40" style={{backgroundImage: 'url(/assets/img/flag/fr.jpg)'}}></div>
										<div className="d-flex w-100">
											<div>France</div>
											<div className="ml-auto text-grey">11.14%</div>
										</div>
									</div>
									<div className="d-flex align-items-center text-white mb-0">
										<div className="widget-img widget-img-xs rounded bg-inverse mr-2 width-40" style={{backgroundImage: 'url(/assets/img/flag/jp.jpg)'}}></div>
										<div className="d-flex w-100">
											<div>Japan</div>
											<div className="ml-auto text-grey">10.75%</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-4 col-lg-6">
						<div className="card border-0 bg-dark-darker text-white mb-3">
							<div className="card-body" style={{ background: 'no-repeat bottom right', backgroundImage: 'url(/assets/img/svg/img-4.svg)', backgroundSize: 'auto 60%'}}>
								<div className="mb-3 text-grey">
									<b>SALES BY SOCIAL SOURCE</b>
									<span className="text-grey ml-2">
										<i className="fa fa-info-circle" id="popover6"></i>
										<UncontrolledPopover trigger="hover" placement="top" target="popover6">
											<PopoverHeader>Sales by social source</PopoverHeader>
											<PopoverBody>Total online store sales that came from a social referrer source.</PopoverBody>
										</UncontrolledPopover>
									</span>
								</div>
								<h3 className="m-b-10">$55,547.89</h3>
								<div className="text-grey m-b-1"><i className="fa fa-caret-up"></i> 45.76% increased</div>
							</div>
							<div className="widget-list widget-list-rounded inverse-mode">
								<Link to="/dashboard/v3" className="widget-list-item rounded-0 p-t-3">
									<div className="widget-list-media icon">
										<i className="fab fa-apple bg-indigo text-white"></i>
									</div>
									<div className="widget-list-content">
										<div className="widget-list-title">Apple Store</div>
									</div>
									<div className="widget-list-action text-nowrap text-grey">
										$34,840.17
									</div>
								</Link>
								<Link to="/dashboard/v3" className="widget-list-item">
									<div className="widget-list-media icon">
										<i className="fab fa-facebook-f bg-blue text-white"></i>
									</div>
									<div className="widget-list-content">
										<div className="widget-list-title">Facebook</div>
									</div>
									<div className="widget-list-action text-nowrap text-grey">
										$12,502.67
									</div>
								</Link>
								<Link to="/dashboard/v3" className="widget-list-item">
									<div className="widget-list-media icon">
										<i className="fab fa-twitter bg-aqua text-white"></i>
									</div>
									<div className="widget-list-content">
										<div className="widget-list-title">Twitter</div>
									</div>
									<div className="widget-list-action text-nowrap text-grey">
										$4,799.20
									</div>
								</Link>
								<Link to="/dashboard/v3" className="widget-list-item">
									<div className="widget-list-media icon">
										<i className="fab fa-google bg-red text-white"></i>
									</div>
									<div className="widget-list-content">
										<div className="widget-list-title">Google Adwords</div>
									</div>
									<div className="widget-list-action text-nowrap text-grey">
										$3,405.85
									</div>
								</Link>
								<Link to="/dashboard/v3" className="widget-list-item p-b-3">
									<div className="widget-list-media icon">
										<i className="fab fa-instagram bg-pink text-white"></i>
									</div>
									<div className="widget-list-content">
										<div className="widget-list-title">Instagram</div>
									</div>
									<div className="widget-list-action text-nowrap text-grey">
										$0.00
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-lg-6">
						<div className="card border-0 bg-dark text-white mb-3">
							<div className="card-body">
								<div className="mb-3 text-grey">
									<b>TOP PRODUCTS BY UNITS SOLD</b>
									<span className="ml-2">
										<i className="fa fa-info-circle" id="popover7"></i>
										<UncontrolledPopover trigger="hover" placement="top" target="popover7">
											<PopoverHeader>Top products with units sold</PopoverHeader>
											<PopoverBody>Products with the most individual units sold. Includes orders from all sales channels.</PopoverBody>
										</UncontrolledPopover>
									</span>
								</div>
								<div className="d-flex align-items-center m-b-15">
									<div className="widget-img rounded-lg width-30 m-r-10 bg-white p-3">
										<div className="h-100 w-100" style={{ background: 'url(/assets/img/product/product-8.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
									</div>
									<div className="text-truncate">
										<div>Apple iPhone XR (2019)</div>
										<div className="text-grey">$799.00</div>
									</div>
									<div className="ml-auto text-center">
										<div className="f-s-13">195</div>
										<div className="text-grey f-s-10">sold</div>
									</div>
								</div>
								<div className="d-flex align-items-center m-b-15">
									<div className="widget-img rounded-lg width-30 m-r-10 bg-white p-3">
										<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-9.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
									</div>
									<div className="text-truncate">
										<div>Apple iPhone XS (2019)</div>
										<div className="text-grey">$1,199.00</div>
									</div>
									<div className="ml-auto text-center">
										<div className="f-s-13">185</div>
										<div className="text-grey f-s-10">sold</div>
									</div>
								</div>
								<div className="d-flex align-items-center m-b-15">
									<div className="widget-img rounded-lg width-30 m-r-10 bg-white p-3">
										<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-10.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
									</div>
									<div className="text-truncate">
										<div>Apple iPhone XS Max (2019)</div>
										<div className="text-grey">$3,399</div>
									</div>
									<div className="ml-auto text-center">
										<div className="f-s-13">129</div>
										<div className="text-grey f-s-10">sold</div>
									</div>
								</div>
								<div className="d-flex align-items-center m-b-15">
									<div className="widget-img rounded-lg width-30 m-r-10 bg-white p-3">
										<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-11.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
									</div>
									<div className="text-truncate">
										<div>Huawei Y5 (2019)</div>
										<div className="text-grey">$99.00</div>
									</div>
									<div className="ml-auto text-center">
										<div className="f-s-13">96</div>
										<div className="text-grey f-s-10">sold</div>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<div className="widget-img rounded-lg width-30 m-r-10 bg-white p-3">
										<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-12.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
									</div>
									<div className="text-truncate">
										<div>Huawei Nova 4 (2019)</div>
										<div className="text-grey">$499.00</div>
									</div>
									<div className="ml-auto text-center">
										<div className="f-s-13">55</div>
										<div className="text-grey f-s-10">sold</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-lg-6">
						<div className="card border-0 bg-dark text-white mb-3">
							<div className="card-body">
								<div className="mb-3 text-grey">
									<b>MARKETING CAMPAIGN</b>
									<span className="ml-2">
										<i className="fa fa-info-circle" id="popover8"></i>
										<UncontrolledPopover trigger="hover" placement="top" target="popover8">
											<PopoverHeader>Marketing Campaign</PopoverHeader>
											<PopoverBody>Campaign that run for getting more returning customers.</PopoverBody>
										</UncontrolledPopover>
									</span>
								</div>
								<div className="row align-items-center p-b-1">
									<div className="col-4">
										<div className="height-100 d-flex align-items-center justify-content-center">
											<img src="/assets/img/svg/img-2.svg" alt="" className="mw-100 mh-100" />
										</div>
									</div>
									<div className="col-8">
										<div className="m-b-2 text-truncate">Email Marketing Campaign</div>
										<div className="text-grey m-b-2 f-s-11">Mon 12/6 - Sun 18/6</div>
										<div className="d-flex align-items-center m-b-2">
											<div className="flex-grow-1">
												<div className="progress progress-xs rounded-corner bg-white-transparent-1">
													<div className="progress-bar progress-bar-striped bg-indigo" style={{width: '80%'}}></div>
												</div>
											</div>
											<div className="ml-2 f-s-11 width-30 text-center">80%</div>
										</div>
										<div className="text-grey f-s-11 m-b-15 text-truncate">
											57.5% people click the email
										</div>
										<Link to="/dashboard/v3" className="btn btn-xs btn-indigo f-s-10 pl-2 pr-2">View campaign</Link>
									</div>
								</div>
								<hr className="bg-white-transparent-2 m-t-20 m-b-20" />
								<div className="row align-items-center">
									<div className="col-4">
										<div className="height-100 d-flex align-items-center justify-content-center">
											<img src="/assets/img/svg/img-3.svg" alt="" className="mw-100 mh-100" />
										</div>
									</div>
									<div className="col-8">
										<div className="m-b-2 text-truncate">Facebook Marketing Campaign</div>
										<div className="text-grey m-b-2 f-s-11">Sat 10/6 - Sun 18/6</div>
										<div className="d-flex align-items-center m-b-2">
											<div className="flex-grow-1">
												<div className="progress progress-xs rounded-corner bg-white-transparent-1">
													<div className="progress-bar progress-bar-striped bg-warning" style={{width: '60%'}}></div>
												</div>
											</div>
											<div className="ml-2 f-s-11 width-30 text-center">60%</div>
										</div>
										<div className="text-grey f-s-11 m-b-15 text-truncate">
											+124k visitors from facebook
										</div>
										<Link to="/dashboard/v3" className="btn btn-xs btn-warning f-s-10 pl-2 pr-2">View campaign</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default DashboardV2;