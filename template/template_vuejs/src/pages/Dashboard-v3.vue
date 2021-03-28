<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Dashboard</a></li>
			<li class="breadcrumb-item active">Dashboard v3</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header mb-3">Dashboard v3</h1>
		<!-- end page-header -->
		
		<!-- begin daterange-filter -->
		<div class="d-sm-flex align-items-center mb-3">
			<date-range-picker ref="picker" class="btn btn-inverse mr-2" 
				:opens="dateRange.opens"
				:locale-data="{ firstDay: 1, format: 'DD-MM-YYYY' }"
				:singleDatePicker="dateRange.singleDatePicker"
				:timePicker="dateRange.timePicker"
				:timePicker24Hour="dateRange.timePicker24Hour"
				:showWeekNumbers="dateRange.showWeekNumbers"
				:showDropdowns="dateRange.showDropdowns"
				:autoApply="dateRange.autoApply"
				v-model="dateRange.range"
				@update="updateValues"
				:linkedCalendars="dateRange.linkedCalendars">
					<template v-slot:input="picker">
						<i class="fa fa-calendar fa-fw text-white-transparent-5 ml-n1"></i>
						{{ picker.startDate | date }} - {{ picker.endDate | date }}
						<b class="caret"></b>
					</template>
			</date-range-picker>
			<div class="text-muted f-w-600 mt-2 mt-sm-0">compared to <span>{{dateRange.range.prevStartDate}} -  {{dateRange.range.prevEndDate}}</span></div>
		</div>
		<!-- end daterange-filter -->
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin card -->
				<div class="card border-0 bg-dark text-white mb-3 overflow-hidden">
					<!-- begin card-body -->
					<div class="card-body">
						<!-- begin row -->
						<div class="row">
							<!-- begin col-7 -->
							<div class="col-xl-7 col-lg-8">
								<!-- begin title -->
								<div class="mb-3 text-grey">
									<b>TOTAL SALES</b>
									<span class="ml-2">
										<i class="fa fa-info-circle" title="Total sales" v-b-popover.hover="'Net sales (gross sales minus discounts and returns) plus taxes and shipping. Includes orders from all sales channels.'"></i>
									</span>
								</div>
								<!-- end title -->
								<!-- begin total-sales -->
								<div class="d-flex mb-1">
									<h2 class="mb-0">$64,559.25</h2>
									<div class="ml-auto mt-n1 mb-n1">
										<apexchart height="36px" :options="totalSalesChart.options" :series="totalSalesChart.series"></apexchart>
									</div>
								</div>
								<!-- end total-sales -->
								<!-- begin percentage -->
								<div class="mb-3 text-grey">
									<i class="fa fa-caret-up"></i> 33.21% compare to last week
								</div>
								<!-- end percentage -->
								<hr class="bg-white-transparent-2" />
								<!-- begin row -->
								<div class="row text-truncate">
									<!-- begin col-6 -->
									<div class="col-6">
										<div class="f-s-12 text-grey">Total sales order</div>
										<div class="f-s-18 m-b-5 f-w-600 p-b-1">1,568</div>
										<div class="progress progress-xs rounded-lg bg-dark-darker m-b-5">
											<div class="progress-bar progress-bar-striped rounded-right bg-teal" style="width: 55%"></div>
										</div>
									</div>
									<!-- end col-6 -->
									<!-- begin col-6 -->
									<div class="col-6">
										<div class="f-s-12 text-grey">Avg. sales per order</div>
										<div class="f-s-18 m-b-5 f-w-600 p-b-1">$41.20</div>
										<div class="progress progress-xs rounded-lg bg-dark-darker m-b-5">
											<div class="progress-bar progress-bar-striped rounded-right" style="width: 55%"></div>
										</div>
									</div>
									<!-- end col-6 -->
								</div>
								<!-- end row -->
							</div>
							<!-- end col-7 -->
							<!-- begin col-5 -->
							<div class="col-xl-5 col-lg-4 align-items-center d-flex justify-content-center">
								<img src="/assets/img/svg/img-1.svg" height="150px" class="d-none d-lg-block" />
							</div>
							<!-- end col-5 -->
						</div>
						<!-- end row -->
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin row -->
				<div class="row">
					<!-- begin col-6 -->
					<div class="col-sm-6">
						<!-- begin card -->
						<div class="card border-0 bg-dark text-white text-truncate mb-3">
							<!-- begin card-body -->
							<div class="card-body">
								<!-- begin title -->
								<div class="mb-3 text-grey">
									<b class="mb-3">CONVERSION RATE</b> 
									<span class="ml-2"><i class="fa fa-info-circle" title="Conversion Rate" v-b-popover.hover="'Percentage of sessions that resulted in orders from total number of sessions.'"></i></span>
								</div>
								<!-- end title -->
								<!-- begin conversion-rate -->
								<div class="d-flex align-items-center mb-1">
									<h2 class="text-white mb-0">2.19%</h2>
									<div class="ml-auto">
										<apexchart height="28px" :options="conversionRateChart.options" :series="conversionRateChart.series"></apexchart>
									</div>
								</div>
								<!-- end conversion-rate -->
								<!-- begin percentage -->
								<div class="mb-4 text-grey">
									<i class="fa fa-caret-down"></i> 0.50% compare to last week
								</div>
								<!-- end percentage -->
								<!-- begin info-row -->
								<div class="d-flex mb-2">
									<div class="d-flex align-items-center">
										<i class="fa fa-circle text-red f-s-8 mr-2"></i>
										Added to cart
									</div>
									<div class="d-flex align-items-center ml-auto">
										<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> 262%</div>
										<div class="width-50 text-right pl-2 f-w-600">3.79%</div>
									</div>
								</div>
								<!-- end info-row -->
								<!-- begin info-row -->
								<div class="d-flex mb-2">
									<div class="d-flex align-items-center">
										<i class="fa fa-circle text-warning f-s-8 mr-2"></i>
										Reached checkout
									</div>
									<div class="d-flex align-items-center ml-auto">
										<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> 11%</div>
										<div class="width-50 text-right pl-2 f-w-600">3.85%</div>
									</div>
								</div>
								<!-- end info-row -->
								<!-- begin info-row -->
								<div class="d-flex">
									<div class="d-flex align-items-center">
										<i class="fa fa-circle text-lime f-s-8 mr-2"></i>
										Sessions converted
									</div>
									<div class="d-flex align-items-center ml-auto">
										<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> 57%</div>
										<div class="width-50 text-right pl-2 f-w-600">2.19%</div>
									</div>
								</div>
								<!-- end info-row -->
							</div>
							<!-- end card-body -->
						</div>
						<!-- end card -->
					</div>
					<!-- end col-6 -->
					<!-- begin col-6 -->
					<div class="col-sm-6">
						<!-- begin card -->
						<div class="card border-0 bg-dark text-white text-truncate mb-3">
							<!-- begin card-body -->
							<div class="card-body">
								<!-- begin title -->
								<div class="mb-3 text-grey">
									<b class="mb-3">STORE SESSIONS</b> 
									<span class="ml-2"><i class="fa fa-info-circle" title="Store Sessions" v-b-popover.hover="'Number of sessions on your online store. A session is a period of continuous activity from a visitor.'"></i></span>
								</div>
								<!-- end title -->
								<!-- begin store-session -->
								<div class="d-flex align-items-center mb-1">
									<h2 class="text-white mb-0">70,719</h2>
									<div class="ml-auto">
										<apexchart height="28px" :options="storeSessionChart.options" :series="storeSessionChart.series"></apexchart>
									</div>
								</div>
								<!-- end store-session -->
								<!-- begin percentage -->
								<div class="mb-4 text-grey">
									<i class="fa fa-caret-up"></i> 9.5% compare to last week
								</div>
								<!-- end percentage -->
								<!-- begin info-row -->
								<div class="d-flex mb-2">
									<div class="d-flex align-items-center">
										<i class="fa fa-circle text-teal f-s-8 mr-2"></i>
										Mobile
									</div>
									<div class="d-flex align-items-center ml-auto">
										<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> 25.7%</div>
										<div class="width-50 text-right pl-2 f-w-600">53,210</div>
									</div>
								</div>
								<!-- end info-row -->
								<!-- begin info-row -->
								<div class="d-flex mb-2">
									<div class="d-flex align-items-center">
										<i class="fa fa-circle text-blue f-s-8 mr-2"></i>
										Desktop
									</div>
									<div class="d-flex align-items-center ml-auto">
										<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> 16.0%</div>
										<div class="width-50 text-right pl-2 f-w-600">11,959</div>
									</div>
								</div>
								<!-- end info-row -->
								<!-- begin info-row -->
								<div class="d-flex">
									<div class="d-flex align-items-center">
										<i class="fa fa-circle text-aqua f-s-8 mr-2"></i>
										Tablet
									</div>
									<div class="d-flex align-items-center ml-auto">
										<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> 7.9%</div>
										<div class="width-50 text-right pl-2 f-w-600">5,545</div>
									</div>
								</div>
								<!-- end info-row -->
							</div>
							<!-- end card-body -->
						</div>
						<!-- end card -->
					</div>
					<!-- end col-6 -->
				</div>
				<!-- end row -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->
		<!-- begin row -->
		<div class="row">
			<!-- begin col-8 -->
			<div class="col-xl-8 col-lg-6">
				<!-- begin card -->
				<div class="card bg-dark border-0 text-white mb-3">
					<div class="card-body">
						<div class="mb-3 text-grey"><b>VISITORS ANALYTICS</b> <span class="ml-2"><i class="fa fa-info-circle" title="Top products with units sold" v-b-popover.hover="'Products with the most individual units sold. Includes orders from all sales channels.'"></i></span></div>
						<div class="row">
							<div class="col-xl-3 col-4">
								<h3 class="mb-1">127.1K</h3>
								<div>New Visitors</div>
								<div class="text-grey f-s-11 text-truncate"><i class="fa fa-caret-up"></i> 25.5% from previous 7 days</div>
							</div>
							<div class="col-xl-3 col-4">
								<h3 class="mb-1">179.9K</h3>
								<div>Returning Visitors</div>
								<div class="text-grey f-s-11 text-truncate"><i class="fa fa-caret-up"></i> 5.33% from previous 7 days</div>
							</div>
							<div class="col-xl-3 col-4">
								<h3 class="mb-1">766.8K</h3>
								<div>Total Page Views</div>
								<div class="text-grey f-s-11 text-truncate"><i class="fa fa-caret-up"></i> 0.323% from previous 7 days</div>
							</div>
						</div>
					</div>
					<div class="card-body p-0">
						<div style="height: 269px">
							<div class="widget-chart-full-width nvd3-inverse-mode" style="height: 254px">
								<vn-stacked-area
									:model="areaChart.data" 
									yFormat=",.0f" 
									:xFormat="formatDate" 
									:clipEdge="areaChart.clipEdge"
									:rightAlignYAxis="areaChart.rightAlignYAxis" 
									:showControls="areaChart.showControls"></vn-stacked-area>
							</div>
						</div>
					</div>
				</div>
				<!-- end card -->
			</div>
			<!-- end col-8 -->
			<!-- begin col-4 -->
			<div class="col-xl-4 col-lg-6">
				<!-- begin card -->
				<div class="card bg-dark border-0 text-white mb-3">
					<div class="card-body">
						<div class="mb-2 text-grey">
							<b>SESSION BY LOCATION</b>
							<span class="ml-2"><i class="fa fa-info-circle" title="Total sales" v-b-popover.hover="'Net sales (gross sales minus discounts and returns) plus taxes and shipping. Includes orders from all sales channels.'"></i></span>
						</div>
						<GmapMap class="bg-black mb-3" style="height: 192px;" v-bind:options="map" :zoom="3" :center="{lat: 25.304304, lng: -90.06591800000001}"></GmapMap>
						<div>
							<div class="d-flex align-items-center text-white mb-2">
								<div class="widget-img widget-img-xs rounded bg-inverse mr-2 width-40" style="background-image: url(/assets/img/flag/us.jpg)"></div>
								<div class="d-flex w-100">
									<div>United States</div>
									<div class="ml-auto text-grey">39.85%</div>
								</div>
							</div>
							<div class="d-flex align-items-center text-white mb-2">
								<div class="widget-img widget-img-xs rounded bg-inverse mr-2 width-40" style="background-image: url(/assets/img/flag/cn.jpg)"></div>
								<div class="d-flex w-100">
									<div>China</div>
									<div class="ml-auto text-grey">14.23%</div>
								</div>
							</div>
							<div class="d-flex align-items-center text-white mb-2">
								<div class="widget-img widget-img-xs rounded bg-inverse mr-2 width-40" style="background-image: url(/assets/img/flag/de.jpg)"></div>
								<div class="d-flex w-100">
									<div>Germany</div>
									<div class="ml-auto text-grey">12.83%</div>
								</div>
							</div>
							<div class="d-flex align-items-center text-white mb-2">
								<div class="widget-img widget-img-xs rounded bg-inverse mr-2 width-40" style="background-image: url(/assets/img/flag/fr.jpg)"></div>
								<div class="d-flex w-100">
									<div>France</div>
									<div class="ml-auto text-grey">11.14%</div>
								</div>
							</div>
							<div class="d-flex align-items-center text-white mb-0">
								<div class="widget-img widget-img-xs rounded bg-inverse mr-2 width-40" style="background-image: url(/assets/img/flag/jp.jpg)"></div>
								<div class="d-flex w-100">
									<div>Japan</div>
									<div class="ml-auto text-grey">10.75%</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- end card -->
			</div>
			<!-- end col-4 -->
		</div>
		<!-- end row -->
		<!-- begin row -->
		<div class="row">
			<!-- begin col-4 -->
			<div class="col-xl-4 col-lg-6">
				<!-- begin card -->
				<div class="card border-0 bg-dark-darker text-white mb-3">
					<!-- begin card-body -->
					<div class="card-body" style="background: no-repeat bottom right; background-image: url(/assets/img/svg/img-4.svg); background-size: auto 60%;">
						<!-- begin title -->
						<div class="mb-3 text-grey">
							<b>SALES BY SOCIAL SOURCE</b>
							<span class="text-grey ml-2"><i class="fa fa-info-circle" title="Sales by social source" v-b-popover.hover="'Total online store sales that came from a social referrer source.'"></i></span>
						</div>
						<!-- end title -->
						<!-- begin sales -->
						<h3 class="m-b-10">$55,547.89</h3>
						<!-- end sales -->
						<!-- begin percentage -->
						<div class="text-grey m-b-1"><i class="fa fa-caret-up"></i> 45.76% increased</div>
						<!-- end percentage -->
					</div>
					<!-- end card-body -->
					<!-- begin widget-list -->
					<div class="widget-list widget-list-rounded inverse-mode">
						<!-- begin widget-list-item -->
						<a href="#" class="widget-list-item rounded-0 p-t-3">
							<div class="widget-list-media icon">
								<i class="fab fa-apple bg-indigo text-white"></i>
							</div>
							<div class="widget-list-content">
								<div class="widget-list-title">Apple Store</div>
							</div>
							<div class="widget-list-action text-nowrap text-grey">
								$34,840.17
							</div>
						</a>
						<!-- end widget-list-item -->
						<!-- begin widget-list-item -->
						<a href="#" class="widget-list-item">
							<div class="widget-list-media icon">
								<i class="fab fa-facebook-f bg-blue text-white"></i>
							</div>
							<div class="widget-list-content">
								<div class="widget-list-title">Facebook</div>
							</div>
							<div class="widget-list-action text-nowrap text-grey">
								$12,502.67
							</div>
						</a>
						<!-- end widget-list-item -->
						<!-- begin widget-list-item -->
						<a href="#" class="widget-list-item">
							<div class="widget-list-media icon">
								<i class="fab fa-twitter bg-aqua text-white"></i>
							</div>
							<div class="widget-list-content">
								<div class="widget-list-title">Twitter</div>
							</div>
							<div class="widget-list-action text-nowrap text-grey">
								$4,799.20
							</div>
						</a>
						<!-- end widget-list-item -->
						<!-- begin widget-list-item -->
						<a href="#" class="widget-list-item">
							<div class="widget-list-media icon">
								<i class="fab fa-google bg-red text-white"></i>
							</div>
							<div class="widget-list-content">
								<div class="widget-list-title">Google Adwords</div>
							</div>
							<div class="widget-list-action text-nowrap text-grey">
								$3,405.85
							</div>
						</a>
						<!-- end widget-list-item -->
						<!-- begin widget-list-item -->
						<a href="#" class="widget-list-item p-b-3">
							<div class="widget-list-media icon">
								<i class="fab fa-instagram bg-pink text-white"></i>
							</div>
							<div class="widget-list-content">
								<div class="widget-list-title">Instagram</div>
							</div>
							<div class="widget-list-action text-nowrap text-grey">
								$0.00
							</div>
						</a>
						<!-- end widget-list-item -->
					</div>
					<!-- end widget-list -->
				</div>
				<!-- end card -->
			</div>
			<!-- end col-4 -->
			<!-- end col-4 -->
			<!-- begin col-4 -->
			<div class="col-xl-4 col-lg-6">
				<!-- begin card -->
				<div class="card border-0 bg-dark text-white mb-3">
					<!-- begin card-body -->
					<div class="card-body">
						<!-- begin title -->
						<div class="mb-3 text-grey">
							<b>TOP PRODUCTS BY UNITS SOLD</b>
							<span class="ml-2"><i class="fa fa-info-circle" title="Top products with units sold" v-b-popover.hover="'Products with the most individual units sold. Includes orders from all sales channels.'"></i></span>
						</div>
						<!-- end title -->
						<!-- begin product -->
						<div class="d-flex align-items-center m-b-15">
							<div class="widget-img rounded-lg width-30 m-r-10 bg-white p-3">
								<div class="h-100 w-100" style="background: url(/assets/img/product/product-8.jpg) center no-repeat; background-size: auto 100%;"></div>
							</div>
							<div class="text-truncate">
								<div>Apple iPhone XR (2019)</div>
								<div class="text-grey">$799.00</div>
							</div>
							<div class="ml-auto text-center">
								<div class="f-s-13">195</div>
								<div class="text-grey f-s-10">sold</div>
							</div>
						</div>
						<!-- end product -->
						<!-- begin product -->
						<div class="d-flex align-items-center m-b-15">
							<div class="widget-img rounded-lg width-30 m-r-10 bg-white p-3">
								<div class="h-100 w-100" style="background: url(/assets/img/product/product-9.jpg) center no-repeat; background-size: auto 100%;"></div>
							</div>
							<div class="text-truncate">
								<div>Apple iPhone XS (2019)</div>
								<div class="text-grey">$1,199.00</div>
							</div>
							<div class="ml-auto text-center">
								<div class="f-s-13">185</div>
								<div class="text-grey f-s-10">sold</div>
							</div>
						</div>
						<!-- end product -->
						<!-- begin product -->
						<div class="d-flex align-items-center m-b-15">
							<div class="widget-img rounded-lg width-30 m-r-10 bg-white p-3">
								<div class="h-100 w-100" style="background: url(/assets/img/product/product-10.jpg) center no-repeat; background-size: auto 100%;"></div>
							</div>
							<div class="text-truncate">
								<div>Apple iPhone XS Max (2019)</div>
								<div class="text-grey">$3,399</div>
							</div>
							<div class="ml-auto text-center">
								<div class="f-s-13">129</div>
								<div class="text-grey f-s-10">sold</div>
							</div>
						</div>
						<!-- end product -->
						<!-- begin product -->
						<div class="d-flex align-items-center m-b-15">
							<div class="widget-img rounded-lg width-30 m-r-10 bg-white p-3">
								<div class="h-100 w-100" style="background: url(/assets/img/product/product-11.jpg) center no-repeat; background-size: auto 100%;"></div>
							</div>
							<div class="text-truncate">
								<div>Huawei Y5 (2019)</div>
								<div class="text-grey">$99.00</div>
							</div>
							<div class="ml-auto text-center">
								<div class="f-s-13">96</div>
								<div class="text-grey f-s-10">sold</div>
							</div>
						</div>
						<!-- end product -->
						<!-- begin product -->
						<div class="d-flex align-items-center">
							<div class="widget-img rounded-lg width-30 m-r-10 bg-white p-3">
								<div class="h-100 w-100" style="background: url(/assets/img/product/product-12.jpg) center no-repeat; background-size: auto 100%;"></div>
							</div>
							<div class="text-truncate">
								<div>Huawei Nova 4 (2019)</div>
								<div class="text-grey">$499.00</div>
							</div>
							<div class="ml-auto text-center">
								<div class="f-s-13">55</div>
								<div class="text-grey f-s-10">sold</div>
							</div>
						</div>
						<!-- end product -->
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card -->
			</div>
			<!-- end col-4 -->
			<!-- begin col-4 -->
			<div class="col-xl-4 col-lg-6">
				<!-- begin card -->
				<div class="card border-0 bg-dark text-white mb-3">
					<!-- begin card-body -->
					<div class="card-body">
						<!-- begin title -->
						<div class="mb-3 text-grey">
							<b>MARKETING CAMPAIGN</b>
							<span class="ml-2"><i class="fa fa-info-circle" title="Marketing Campaign" v-b-popover.hover="'Campaign that run for getting more returning customers.'"></i></span>
						</div>
						<!-- end title -->
						<!-- begin row -->
						<div class="row align-items-center p-b-1">
							<!-- begin col-4 -->
							<div class="col-4">
								<div class="height-100 d-flex align-items-center justify-content-center">
									<img src="/assets/img/svg/img-2.svg" class="mw-100 mh-100" />
								</div>
							</div>
							<!-- end col-4 -->
							<!-- begin col-8 -->
							<div class="col-8">
								<div class="m-b-2 text-truncate">Email Marketing Campaign</div>
								<div class="text-grey m-b-2 f-s-11">Mon 12/6 - Sun 18/6</div>
								<div class="d-flex align-items-center m-b-2">
									<div class="flex-grow-1">
										<div class="progress progress-xs rounded-corner bg-white-transparent-1">
											<div class="progress-bar progress-bar-striped bg-indigo" style="width: 80%"></div>
										</div>
									</div>
									<div class="ml-2 f-s-11 width-30 text-center">80%</div>
								</div>
								<div class="text-grey f-s-11 m-b-15 text-truncate">
									57.5% people click the email
								</div>
								<a href="#" class="btn btn-xs btn-indigo f-s-10 pl-2 pr-2">View campaign</a>
							</div>
							<!-- end col-8 -->
						</div>
						<!-- end row -->
						<hr class="bg-white-transparent-2 m-t-20 m-b-20" />
						<!-- begin row -->
						<div class="row align-items-center">
							<!-- begin col-4 -->
							<div class="col-4">
								<div class="height-100 d-flex align-items-center justify-content-center">
									<img src="/assets/img/svg/img-3.svg" class="mw-100 mh-100" />
								</div>
							</div>
							<!-- end col-4 -->
							<!-- begin col-8 -->
							<div class="col-8">
								<div class="m-b-2 text-truncate">Facebook Marketing Campaign</div>
								<div class="text-grey m-b-2 f-s-11">Sat 10/6 - Sun 18/6</div>
								<div class="d-flex align-items-center m-b-2">
									<div class="flex-grow-1">
										<div class="progress progress-xs rounded-corner bg-white-transparent-1">
											<div class="progress-bar progress-bar-striped bg-warning" style="width: 60%"></div>
										</div>
									</div>
									<div class="ml-2 f-s-11 width-30 text-center">60%</div>
								</div>
								<div class="text-grey f-s-11 m-b-15 text-truncate">
									+124k visitors from facebook
								</div>
								<a href="#" class="btn btn-xs btn-warning f-s-10 pl-2 pr-2">View campaign</a>
							</div>
							<!-- end col-8 -->
						</div>
						<!-- end row -->
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card -->
			</div>
			<!-- end col-4 -->
		</div>
		<!-- end row -->
	</div>
</template>

<script>
import moment from 'moment';

export default {
	name: 'dashboard-v3',
	data() {
		function handleGetDate(minusDate) {
			var d = new Date();
			d = d.setDate(d.getDate() - minusDate);
			return d;
		}
		
		var convertNumberWithCommas = function(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		};
		
		return {
			dateRange: {
				opens: 'right',
				singleDatePicker: false,
				timePicker: false,
				timePicker24Hour: false,
				showWeekNumbers: true,
				showDropdowns: false,
				autoApply: false,
				linkedCalendars: false,
				range: {
					startDate: moment().subtract(7, 'days'),
					endDate: moment(),
					prevStartDate: moment().subtract('days', 15).format('D MMMM'),
					prevEndDate: moment().subtract('days', 8).format('D MMMM YYYY')
				}
			},
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
			map: {
				styles: [{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#2d353c"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#d8d8d8"}]},{featureType:"administrative.neighborhood",elementType:"geometry.fill",stylers:[{color:"#ff0000"}]},{featureType:"administrative.land_parcel",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"landscape",elementType:"labels.text.fill",stylers:[{color:"#00acac"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#575d63"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#348fe2"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.highway.controlled_access",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#1a1f23"}]}]
			},
			totalSalesChart: {
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
								formatter: function () {
									return '';
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
			},
			conversionRateChart: {
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
								formatter: function () {
									return '';
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
			},
			storeSessionChart: {
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
								formatter: function () {
									return '';
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
			}
		}
	},
	methods: {
		updateValues(d) {
			var startDate = moment(d.startDate);
			var endDate = moment(d.endDate);
			var gap = endDate.diff(startDate, 'days');
			
			this.dateRange.range.prevStartDate = moment(startDate).subtract('days', gap).format('D MMMM');
			this.dateRange.range.prevEndDate = moment(startDate).subtract('days', 1).format('D MMMM YYYY');
			console.log(d.startDate);
		},
		formatDate(d) {
			var monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			d = new Date(d);
			d = monthsName[d.getMonth()] + ' ' + d.getDate();
			return d;
		}
	},
	filters: {
		date: function(value) {
			if (value) {
				return moment(String(value)).format('D MMMM YYYY')
			}
		}
	}
}
</script>