<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Dashboard</a></li>
			<li class="breadcrumb-item active">Dashboard v2</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Dashboard v2 <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		<!-- begin row -->
		<div class="row">
			<!-- begin col-3 -->
			<div class="col-xl-3 col-md-6">
				<div class="widget widget-stats bg-teal">
					<div class="stats-icon stats-icon-lg"><i class="fa fa-globe fa-fw"></i></div>
					<div class="stats-content">
						<div class="stats-title">TODAY'S VISITS</div>
						<div class="stats-number">7,842,900</div>
						<div class="stats-progress progress">
							<div class="progress-bar" style="width: 70.1%;"></div>
						</div>
						<div class="stats-desc">Better than last week (70.1%)</div>
					</div>
				</div>
			</div>
			<!-- end col-3 -->
			<!-- begin col-3 -->
			<div class="col-xl-3 col-md-6">
				<div class="widget widget-stats bg-blue">
					<div class="stats-icon stats-icon-lg"><i class="fa fa-dollar-sign fa-fw"></i></div>
					<div class="stats-content">
						<div class="stats-title">TODAY'S PROFIT</div>
						<div class="stats-number">180,200</div>
						<div class="stats-progress progress">
							<div class="progress-bar" style="width: 40.5%;"></div>
						</div>
						<div class="stats-desc">Better than last week (40.5%)</div>
					</div>
				</div>
			</div>
			<!-- end col-3 -->
			<!-- begin col-3 -->
			<div class="col-xl-3 col-md-6">
				<div class="widget widget-stats bg-indigo">
					<div class="stats-icon stats-icon-lg"><i class="fa fa-archive fa-fw"></i></div>
					<div class="stats-content">
						<div class="stats-title">NEW ORDERS</div>
						<div class="stats-number">38,900</div>
						<div class="stats-progress progress">
							<div class="progress-bar" style="width: 76.3%;"></div>
						</div>
						<div class="stats-desc">Better than last week (76.3%)</div>
					</div>
				</div>
			</div>
			<!-- end col-3 -->
			<!-- begin col-3 -->
			<div class="col-xl-3 col-md-6">
				<div class="widget widget-stats bg-dark">
					<div class="stats-icon stats-icon-lg"><i class="fa fa-comment-alt fa-fw"></i></div>
					<div class="stats-content">
						<div class="stats-title">NEW COMMENTS</div>
						<div class="stats-number">3,988</div>
						<div class="stats-progress progress">
							<div class="progress-bar" style="width: 54.9%;"></div>
						</div>
						<div class="stats-desc">Better than last week (54.9%)</div>
					</div>
				</div>
			</div>
			<!-- end col-3 -->
		</div>
		<!-- end row -->
		<!-- begin row -->
		<div class="row">
			<!-- begin col-8 -->
			<div class="col-xl-8">
				<div class="widget-chart with-sidebar inverse-mode">
					<div class="widget-chart-content bg-dark">
						<h4 class="chart-title">
							Visitors Analytics
							<small>Where do our visitors come from</small>
						</h4>
						<div  class="widget-chart-full-width nvd3-inverse-mode" style="height: 260px">
							<vn-stacked-area
								:model="areaChart.data" 
								yFormat=",.0f" 
								:xFormat="formatDate" 
								:clipEdge="areaChart.clipEdge"
								:rightAlignYAxis="areaChart.rightAlignYAxis" 
								:showControls="areaChart.showControls"></vn-stacked-area>
						</div>
					</div>
					<div class="widget-chart-sidebar bg-dark-darker">
						<div class="chart-number">
							1,225,729
							<small>Total visitors</small>
						</div>
						<div class="flex-grow-1 d-flex align-items-center">
							<div class="nvd3-inverse-mode" style="height: 180px">
								<vn-pie :model="donutChart.data"
									:donut="donutChart.donut"
									text-field="label"
									value-field="value"
									:show-tooltip-percent="true"
									:show-legend="false"></vn-pie>
							</div>
						</div>
						<ul class="chart-legend f-s-11">
							<li><i class="fa fa-circle fa-fw text-primary f-s-9 m-r-5 t-minus-1"></i> 34.0% <span>New Visitors</span></li>
							<li><i class="fa fa-circle fa-fw text-success f-s-9 m-r-5 t-minus-1"></i> 56.0% <span>Return Visitors</span></li>
						</ul>
					</div>
				</div>
			</div>
			<!-- end col-8 -->
			<!-- begin col-4 -->
			<div class="col-xl-4">
				<panel title="Visitors Origin" noBody="true" noButton="true">
					<template slot="outsideBody">
						<GmapMap class="bg-black" style="height: 179px;" v-bind:options="map" :zoom="3" :center="{lat: 25.304304, lng: -90.06591800000001}"></GmapMap>
						<div class="list-group">
							<a href="javascript:;" class="list-group-item list-group-item-action list-group-item-inverse d-flex justify-content-between align-items-center text-ellipsis">
								1. United State 
								<span class="badge bg-teal f-s-10">20.95%</span>
							</a> 
							<a href="javascript:;" class="list-group-item list-group-item-action list-group-item-inverse d-flex justify-content-between align-items-center text-ellipsis">
								2. India
								<span class="badge bg-blue f-s-10">16.12%</span>
							</a>
							<a href="javascript:;" class="list-group-item list-group-item-action list-group-item-inverse d-flex justify-content-between align-items-center text-ellipsis">
								3. Mongolia
								<span class="badge bg-silver-darker f-s-10">14.99%</span>
							</a>
						</div>
					</template>
				</panel>
			</div>
			<!-- end col-4 -->
		</div>
		<!-- end row -->
		<!-- begin row -->
		<div class="row">
			<!-- begin col-4 -->
			<div class="col-lg-4">
				<!-- begin panel -->
				<panel noButton="true" bodyClass="bg-light">
					<template slot="header">
						<h4 class="panel-title">Chat History </h4>
						<span class="label bg-teal">4 message</span>
					</template>
					<vue-custom-scrollbar class="chats overflow-scroll" style="height: 225px;">
						<div class="left">
							<span class="date-time">yesterday 11:23pm</span>
							<a href="javascript:;" class="name">Sowse Bawdy</a>
							<a href="javascript:;" class="image"><img alt="" src="/assets/img/user/user-12.jpg" /></a>
							<div class="message">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit volutpat. Praesent mattis interdum arcu eu feugiat.
							</div>
						</div>
						<div class="right">
							<span class="date-time">08:12am</span>
							<a href="javascript:;" class="name"><span class="label label-primary">ADMIN</span> Me</a>
							<a href="javascript:;" class="image"><img alt="" src="/assets/img/user/user-13.jpg" /></a>
							<div class="message">
								Nullam posuere, nisl a varius rhoncus, risus tellus hendrerit neque.
							</div>
						</div>
						<div class="left">
							<span class="date-time">09:20am</span>
							<a href="javascript:;" class="name">Neck Jolly</a>
							<a href="javascript:;" class="image"><img alt="" src="/assets/img/user/user-10.jpg" /></a>
							<div class="message">
								Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
							</div>
						</div>
						<div class="left">
							<span class="date-time">11:15am</span>
							<a href="javascript:;" class="name">Shag Strap</a>
							<a href="javascript:;" class="image"><img alt="" src="/assets/img/user/user-14.jpg" /></a>
							<div class="message">
								Nullam iaculis pharetra pharetra. Proin sodales tristique sapien mattis placerat.
							</div>
						</div>
					</vue-custom-scrollbar>
					
					<template slot="footer">
						<form name="send_message_form" data-id="message-form">
							<div class="input-group">
								<input type="text" class="form-control" name="message" placeholder="Enter your message here.">
								<span class="input-group-append">
									<button class="btn btn-primary" type="button"><i class="fa fa-camera"></i></button>
									<button class="btn btn-primary" type="button"><i class="fa fa-link"></i></button>
								</span>
							</div>
						</form>
					</template>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-4 -->
			<!-- begin col-4 -->
			<div class="col-lg-4">
				<!-- begin panel -->
				<panel title="Today's Schedule" noButton="true" noBody="true">
					<template slot="outsideBody">
						<vue-event-calendar :events="events.data" @day-changed="handleDayChanged" @month-changed="handleMonthChanged"></vue-event-calendar>
						<div class="list-group">
							<!-- eslint-disable-next-line -->
							<a href="javascript:;" v-for="event in events.displayData" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-ellipsis">
								{{ event.title }}
								<span class="badge f-w-500 f-s-10" v-bind:class="event.badge">{{ event.time }}</span>
							</a>
						</div>
					</template>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-4 -->
			<!-- begin col-4 -->
			<div class="col-lg-4">
				<!-- begin panel -->
				<panel noButton="true" noBody="true">
					<template slot="header">
						<h4 class="panel-title">New Registered Users</h4>
						<span class="label bg-teal">24 new users</span>
					</template>
					<ul slot="outsideBody" class="registered-users-list clearfix">
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-5.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Savory Posh
								<small>Algerian</small>
							</h4>
						</li>
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-3.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Ancient Caviar
								<small>Korean</small>
							</h4>
						</li>
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-1.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Marble Lungs
								<small>Indian</small>
							</h4>
						</li>
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-8.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Blank Bloke
								<small>Japanese</small>
							</h4>
						</li>
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-2.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Hip Sculling
								<small>Cuban</small>
							</h4>
						</li>
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-6.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Flat Moon
								<small>Nepalese</small>
							</h4>
						</li>
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-4.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Packed Puffs
								<small>Malaysian></small>
							</h4>
						</li>
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-9.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Clay Hike
								<small>Swedish</small>
							</h4>
						</li>
					</ul>
					<div slot="footer" class="text-center">
						<a href="javascript:;" class="text-inverse">View All</a>
					</div>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-4 -->
		</div>
		<!-- end row -->
	</div>
</template>

<script>
export default {
	name: 'dashboard-v2',
	data() {
		function handleGetDate(minusDate) {
			var d = new Date();
			d = d.setDate(d.getDate() - minusDate);
			return d;
		}
		let today = new Date()
		
		var eventsData = [{
			date: `${today.getFullYear()}/${today.getMonth() + 1}/15`,
			title: 'Sales Reporting',
			badge: 'bg-teal',
			time: '9:00am'
		},{
			date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
			title: 'Have a meeting with sales team',
			badge: 'bg-blue',
			time: '2:45pm'
		}]
		
		return {
			areaChart: {
				rightAlignYAxis: false,
				showControls: false,
				clipEdge: false,
				data: [{
					'key' : 'Unique Visitors',
					'color' : '#5AC8FA',
					'values' : [ 
						{ x: handleGetDate(77), y: 13 }, { x: handleGetDate(76), y: 13 },  { x: handleGetDate(75), y: 6  }, 
						{ x: handleGetDate(73), y: 6  },  { x: handleGetDate(72), y: 6  },  { x: handleGetDate(71), y: 5  },  { x: handleGetDate(70), y: 5  }, 
						{ x: handleGetDate(69), y: 5  },  { x: handleGetDate(68), y: 6  },  { x: handleGetDate(67), y: 7  },  { x: handleGetDate(66), y: 6  }, 
						{ x: handleGetDate(65), y: 9  },  { x: handleGetDate(64), y: 9  },  { x: handleGetDate(63), y: 8  },  { x: handleGetDate(62), y: 10 }, 
						{ x: handleGetDate(61), y: 10 },  { x: handleGetDate(60), y: 10 },  { x: handleGetDate(59), y: 10 },  { x: handleGetDate(58), y: 9  }, 
						{ x: handleGetDate(57), y: 9  },  { x: handleGetDate(56), y: 10 },  { x: handleGetDate(55), y: 9  },  { x: handleGetDate(54), y: 9  }, 
						{ x: handleGetDate(53), y: 8  },  { x: handleGetDate(52), y: 8  },  { x: handleGetDate(51), y: 8  },  { x: handleGetDate(50), y: 8  }, 
						{ x: handleGetDate(49), y: 8  },  { x: handleGetDate(48), y: 7  },  { x: handleGetDate(47), y: 7  },  { x: handleGetDate(46), y: 6  }, 
						{ x: handleGetDate(45), y: 6  },  { x: handleGetDate(44), y: 6  },  { x: handleGetDate(43), y: 6  },  { x: handleGetDate(42), y: 5  }, 
						{ x: handleGetDate(41), y: 5  },  { x: handleGetDate(40), y: 4  },  { x: handleGetDate(39), y: 4  },  { x: handleGetDate(38), y: 5  }, 
						{ x: handleGetDate(37), y: 5  },  { x: handleGetDate(36), y: 5  },  { x: handleGetDate(35), y: 7  },  { x: handleGetDate(34), y: 7  }, 
						{ x: handleGetDate(33), y: 7  },  { x: handleGetDate(32), y: 10 },  { x: handleGetDate(31), y: 9  },  { x: handleGetDate(30), y: 9  }, 
						{ x: handleGetDate(29), y: 10 },  { x: handleGetDate(28), y: 11 },  { x: handleGetDate(27), y: 11 },  { x: handleGetDate(26), y: 8  }, 
						{ x: handleGetDate(25), y: 8  },  { x: handleGetDate(24), y: 7  },  { x: handleGetDate(23), y: 8  },  { x: handleGetDate(22), y: 9  }, 
						{ x: handleGetDate(21), y: 8  },  { x: handleGetDate(20), y: 9  },  { x: handleGetDate(19), y: 10 },  { x: handleGetDate(18), y: 9  }, 
						{ x: handleGetDate(17), y: 10 },  { x: handleGetDate(16), y: 16 },  { x: handleGetDate(15), y: 17 },  { x: handleGetDate(14), y: 16 }, 
						{ x: handleGetDate(13), y: 17 },  { x: handleGetDate(12), y: 16 },  { x: handleGetDate(11), y: 15 },  { x: handleGetDate(10), y: 14 }, 
						{ x: handleGetDate(9) , y: 24 },  { x: handleGetDate(8) , y: 18 },  { x: handleGetDate(7) , y: 15 },  { x: handleGetDate(6) , y: 14 }, 
						{ x: handleGetDate(5) , y: 16 },  { x: handleGetDate(4) , y: 16 },  { x: handleGetDate(3) , y: 17 },  { x: handleGetDate(2) , y: 7  }, 
						{ x: handleGetDate(1) , y: 7  },  { x: handleGetDate(0) , y: 7  }
					]
				}, {
					'key' : 'Page Views',
					'color' : '#348fe2',
					'values' : [ 
						{ x: handleGetDate(77), y: 14 },  { x: handleGetDate(76), y: 13 },  { x: handleGetDate(75), y: 15 }, 
						{ x: handleGetDate(73), y: 14 },  { x: handleGetDate(72), y: 13 },  { x: handleGetDate(71), y: 15 },  { x: handleGetDate(70), y: 16 }, 
						{ x: handleGetDate(69), y: 16 },  { x: handleGetDate(68), y: 14 },  { x: handleGetDate(67), y: 14 },  { x: handleGetDate(66), y: 13 }, 
						{ x: handleGetDate(65), y: 12 },  { x: handleGetDate(64), y: 13 },  { x: handleGetDate(63), y: 13 },  { x: handleGetDate(62), y: 15 }, 
						{ x: handleGetDate(61), y: 16 },  { x: handleGetDate(60), y: 16 },  { x: handleGetDate(59), y: 17 },  { x: handleGetDate(58), y: 17 }, 
						{ x: handleGetDate(57), y: 18 },  { x: handleGetDate(56), y: 15 },  { x: handleGetDate(55), y: 15 },  { x: handleGetDate(54), y: 15 }, 
						{ x: handleGetDate(53), y: 19 },  { x: handleGetDate(52), y: 19 },  { x: handleGetDate(51), y: 18 },  { x: handleGetDate(50), y: 18 }, 
						{ x: handleGetDate(49), y: 17 },  { x: handleGetDate(48), y: 16 },  { x: handleGetDate(47), y: 18 },  { x: handleGetDate(46), y: 18 }, 
						{ x: handleGetDate(45), y: 18 },  { x: handleGetDate(44), y: 16 },  { x: handleGetDate(43), y: 14 },  { x: handleGetDate(42), y: 14 }, 
						{ x: handleGetDate(41), y: 13 },  { x: handleGetDate(40), y: 14 },  { x: handleGetDate(39), y: 13 },  { x: handleGetDate(38), y: 10 }, 
						{ x: handleGetDate(37), y: 9  },  { x: handleGetDate(36), y: 10 },  { x: handleGetDate(35), y: 11 },  { x: handleGetDate(34), y: 11 }, 
						{ x: handleGetDate(33), y: 11 },  { x: handleGetDate(32), y: 10 },  { x: handleGetDate(31), y: 9  },  { x: handleGetDate(30), y: 10 }, 
						{ x: handleGetDate(29), y: 13 },  { x: handleGetDate(28), y: 14 },  { x: handleGetDate(27), y: 14 },  { x: handleGetDate(26), y: 13 }, 
						{ x: handleGetDate(25), y: 12 },  { x: handleGetDate(24), y: 11 },  { x: handleGetDate(23), y: 13 },  { x: handleGetDate(22), y: 13 }, 
						{ x: handleGetDate(21), y: 13 },  { x: handleGetDate(20), y: 13 },  { x: handleGetDate(19), y: 14 },  { x: handleGetDate(18), y: 13 }, 
						{ x: handleGetDate(17), y: 13 },  { x: handleGetDate(16), y: 19 },  { x: handleGetDate(15), y: 21 },  { x: handleGetDate(14), y: 22 },
						{ x: handleGetDate(13), y: 25 },  { x: handleGetDate(12), y: 24 },  { x: handleGetDate(11), y: 24 },  { x: handleGetDate(10), y: 22 }, 
						{ x: handleGetDate(9) , y: 16 },  { x: handleGetDate(8) , y: 15 },  { x: handleGetDate(7) , y: 12 },  { x: handleGetDate(6) , y: 12 }, 
						{ x: handleGetDate(5) , y: 15 },  { x: handleGetDate(4) , y: 15 },  { x: handleGetDate(3) , y: 15 },  { x: handleGetDate(2) , y: 18 }, 
						{ x: handleGetDate(2) , y: 18 },  { x: handleGetDate(0) , y: 17 }
					]
				}]
			},
			donutChart: {
				donut: true,
				data: [{ 
					'label': 'Return Visitors', 
					'value' : 784466, 
					'color': '#348fe2'
				}, { 
					'label': 'New Visitors', 
					'value' : 416747, 
					'color': '#00ACAC' 
				}]
			},
			map: {
				styles: [{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#2d353c"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#d8d8d8"}]},{featureType:"administrative.neighborhood",elementType:"geometry.fill",stylers:[{color:"#ff0000"}]},{featureType:"administrative.land_parcel",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"landscape",elementType:"labels.text.fill",stylers:[{color:"#00acac"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#575d63"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#348fe2"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.highway.controlled_access",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#1a1f23"}]}]
			},
			events: {
				data: eventsData,
				displayData: eventsData
			}
		}
	},
	methods: {
		formatDate(d) {
			var monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			d = new Date(d);
			d = monthsName[d.getMonth()] + ' ' + d.getDate();
			return d;
		},
		handleDayChanged (data) {
			if (data.events.length > 0) {
				this.events.displayData = data.events;
			} else {
				this.events.displayData = this.events.data;
			}
		},
		handleMonthChanged () {
		}
	}
}
</script>