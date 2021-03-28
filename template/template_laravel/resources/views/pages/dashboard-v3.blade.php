@extends('layouts.default')

@section('title', 'Dashboard V3')

@push('css')
	<link href="/assets/plugins/jvectormap-next/jquery-jvectormap.css" rel="stylesheet" />
	<link href="/assets/plugins/nvd3/build/nv.d3.css" rel="stylesheet" />
	<link href="/assets/plugins/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet" />
@endpush

@section('content')
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
		<a href="#" class="btn btn-inverse mr-2 text-truncate" id="daterange-filter">
			<i class="fa fa-calendar fa-fw text-white-transparent-5 ml-n1"></i> 
			<span>1 Jun 2020 - 7 Jun 2020</span>
			<b class="caret"></b>
		</a>
		<div class="text-muted f-w-600 mt-2 mt-sm-0">compared to <span id="daterange-prev-date">24 Mar-30 Apr 2020</span></div>
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
									<i class="fa fa-info-circle" data-toggle="popover" data-trigger="hover" data-title="Total sales" data-placement="top" data-content="Net sales (gross sales minus discounts and returns) plus taxes and shipping. Includes orders from all sales channels."></i>
								</span>
							</div>
							<!-- end title -->
							<!-- begin total-sales -->
							<div class="d-flex mb-1">
								<h2 class="mb-0">$<span data-animation="number" data-value="64559.25">0.00</span></h2>
								<div class="ml-auto mt-n1 mb-n1"><div id="total-sales-sparkline"></div></div>
							</div>
							<!-- end total-sales -->
							<!-- begin percentage -->
							<div class="mb-3 text-grey">
								<i class="fa fa-caret-up"></i> <span data-animation="number" data-value="33.21">0.00</span>% compare to last week
							</div>
							<!-- end percentage -->
							<hr class="bg-white-transparent-2" />
							<!-- begin row -->
							<div class="row text-truncate">
								<!-- begin col-6 -->
								<div class="col-6">
									<div class="f-s-12 text-grey">Total sales order</div>
									<div class="f-s-18 m-b-5 f-w-600 p-b-1" data-animation="number" data-value="1568">0</div>
									<div class="progress progress-xs rounded-lg bg-dark-darker m-b-5">
										<div class="progress-bar progress-bar-striped rounded-right bg-teal" data-animation="width" data-value="55%" style="width: 0%"></div>
									</div>
								</div>
								<!-- end col-6 -->
								<!-- begin col-6 -->
								<div class="col-6">
									<div class="f-s-12 text-grey">Avg. sales per order</div>
									<div class="f-s-18 m-b-5 f-w-600 p-b-1">$<span data-animation="number" data-value="41.20">0.00</span></div>
									<div class="progress progress-xs rounded-lg bg-dark-darker m-b-5">
										<div class="progress-bar progress-bar-striped rounded-right" data-animation="width" data-value="55%" style="width: 0%"></div>
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
								<span class="ml-2"><i class="fa fa-info-circle" data-toggle="popover" data-trigger="hover" data-title="Conversion Rate" data-placement="top" data-content="Percentage of sessions that resulted in orders from total number of sessions." data-original-title="" title=""></i></span>
							</div>
							<!-- end title -->
							<!-- begin conversion-rate -->
							<div class="d-flex align-items-center mb-1">
								<h2 class="text-white mb-0"><span data-animation="number" data-value="2.19">0.00</span>%</h2>
								<div class="ml-auto">
									<div id="conversion-rate-sparkline"></div>
								</div>
							</div>
							<!-- end conversion-rate -->
							<!-- begin percentage -->
							<div class="mb-4 text-grey">
								<i class="fa fa-caret-down"></i> <span data-animation="number" data-value="0.50">0.00</span>% compare to last week
							</div>
							<!-- end percentage -->
							<!-- begin info-row -->
							<div class="d-flex mb-2">
								<div class="d-flex align-items-center">
									<i class="fa fa-circle text-red f-s-8 mr-2"></i>
									Added to cart
								</div>
								<div class="d-flex align-items-center ml-auto">
									<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="262">0</span>%</div>
									<div class="width-50 text-right pl-2 f-w-600"><span data-animation="number" data-value="3.79">0.00</span>%</div>
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
									<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="11">0</span>%</div>
									<div class="width-50 text-right pl-2 f-w-600"><span data-animation="number" data-value="3.85">0.00</span>%</div>
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
									<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="57">0</span>%</div>
									<div class="width-50 text-right pl-2 f-w-600"><span data-animation="number" data-value="2.19">0.00</span>%</div>
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
								<span class="ml-2"><i class="fa fa-info-circle" data-toggle="popover" data-trigger="hover" data-title="Store Sessions" data-placement="top" data-content="Number of sessions on your online store. A session is a period of continuous activity from a visitor." data-original-title="" title=""></i></span>
							</div>
							<!-- end title -->
							<!-- begin store-session -->
							<div class="d-flex align-items-center mb-1">
								<h2 class="text-white mb-0"><span data-animation="number" data-value="70719">0</span></h2>
								<div class="ml-auto">
									<div id="store-session-sparkline"></div>
								</div>
							</div>
							<!-- end store-session -->
							<!-- begin percentage -->
							<div class="mb-4 text-grey">
								<i class="fa fa-caret-up"></i> <span data-animation="number" data-value="9.5">0.00</span>% compare to last week
							</div>
							<!-- end percentage -->
							<!-- begin info-row -->
							<div class="d-flex mb-2">
								<div class="d-flex align-items-center">
									<i class="fa fa-circle text-teal f-s-8 mr-2"></i>
									Mobile
								</div>
								<div class="d-flex align-items-center ml-auto">
									<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="25.7">0.00</span>%</div>
									<div class="width-50 text-right pl-2 f-w-600"><span data-animation="number" data-value="53210">0</span></div>
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
									<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="16.0">0.00</span>%</div>
									<div class="width-50 text-right pl-2 f-w-600"><span data-animation="number" data-value="11959">0</span></div>
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
									<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="7.9">0.00</span>%</div>
									<div class="width-50 text-right pl-2 f-w-600"><span data-animation="number" data-value="5545">0</span></div>
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
					<div class="mb-3 text-grey"><b>VISITORS ANALYTICS</b> <span class="ml-2"><i class="fa fa-info-circle" data-toggle="popover" data-trigger="hover" data-title="Top products with units sold" data-placement="top" data-content="Products with the most individual units sold. Includes orders from all sales channels." data-original-title="" title=""></i></span></div>
					<div class="row">
						<div class="col-xl-3 col-4">
							<h3 class="mb-1"><span data-animation="number" data-value="127.1">0</span>K</h3>
							<div>New Visitors</div>
							<div class="text-grey f-s-11 text-truncate"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="25.5">0.00</span>% from previous 7 days</div>
						</div>
						<div class="col-xl-3 col-4">
							<h3 class="mb-1"><span data-animation="number" data-value="179.9">0</span>K</h3>
							<div>Returning Visitors</div>
							<div class="text-grey f-s-11 text-truncate"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="5.33">0.00</span>% from previous 7 days</div>
						</div>
						<div class="col-xl-3 col-4">
							<h3 class="mb-1"><span data-animation="number" data-value="766.8">0</span>K</h3>
							<div>Total Page Views</div>
							<div class="text-grey f-s-11 text-truncate"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="0.323">0.00</span>% from previous 7 days</div>
						</div>
					</div>
				</div>
				<div class="card-body p-0">
					<div style="height: 269px">
						<div id="visitors-line-chart" class="widget-chart-full-width nvd3-inverse-mode" style="height: 254px"></div>
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
						<span class="ml-2"><i class="fa fa-info-circle" data-toggle="popover" data-trigger="hover" data-title="Total sales" data-placement="top" data-content="Net sales (gross sales minus discounts and returns) plus taxes and shipping. Includes orders from all sales channels."></i></span>
					</div>
					<div id="visitors-map" class="mb-2" style="height: 200px"></div>
					<div>
						<div class="d-flex align-items-center text-white mb-2">
							<div class="widget-img widget-img-xs rounded bg-inverse mr-2 width-40" style="background-image: url(/assets/img/flag/us.jpg)"></div>
							<div class="d-flex w-100">
								<div>United States</div>
								<div class="ml-auto text-grey"><span data-animation="number" data-value="39.85">0.00</span>%</div>
							</div>
						</div>
						<div class="d-flex align-items-center text-white mb-2">
							<div class="widget-img widget-img-xs rounded bg-inverse mr-2 width-40" style="background-image: url(/assets/img/flag/cn.jpg)"></div>
							<div class="d-flex w-100">
								<div>China</div>
								<div class="ml-auto text-grey"><span data-animation="number" data-value="14.23">0.00</span>%</div>
							</div>
						</div>
						<div class="d-flex align-items-center text-white mb-2">
							<div class="widget-img widget-img-xs rounded bg-inverse mr-2 width-40" style="background-image: url(/assets/img/flag/de.jpg)"></div>
							<div class="d-flex w-100">
								<div>Germany</div>
								<div class="ml-auto text-grey"><span data-animation="number" data-value="12.83">0.00</span>%</div>
							</div>
						</div>
						<div class="d-flex align-items-center text-white mb-2">
							<div class="widget-img widget-img-xs rounded bg-inverse mr-2 width-40" style="background-image: url(/assets/img/flag/fr.jpg)"></div>
							<div class="d-flex w-100">
								<div>France</div>
								<div class="ml-auto text-grey"><span data-animation="number" data-value="11.14">0.00</span>%</div>
							</div>
						</div>
						<div class="d-flex align-items-center text-white mb-0">
							<div class="widget-img widget-img-xs rounded bg-inverse mr-2 width-40" style="background-image: url(/assets/img/flag/jp.jpg)"></div>
							<div class="d-flex w-100">
								<div>Japan</div>
								<div class="ml-auto text-grey"><span data-animation="number" data-value="10.75">0.00</span>%</div>
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
						<span class="text-grey ml-2"><i class="fa fa-info-circle" data-toggle="popover" data-trigger="hover" data-title="Sales by social source" data-placement="top" data-content="Total online store sales that came from a social referrer source."></i></span>
					</div>
					<!-- end title -->
					<!-- begin sales -->
					<h3 class="m-b-10">$<span data-animation="number" data-value="55547.89">0.00</span></h3>
					<!-- end sales -->
					<!-- begin percentage -->
					<div class="text-grey m-b-1"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="45.76">0.00</span>% increased</div>
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
							$<span data-animation="number" data-value="34840.17">0.00</span>
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
							$<span data-animation="number" data-value="12502.67">0.00</span>
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
							$<span data-animation="number" data-value="4799.20">0.00</span>
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
							$<span data-animation="number" data-value="3405.85">0.00</span>
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
							$<span data-animation="number" data-value="0.00">0.00</span>
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
						<span class="ml-2"><i class="fa fa-info-circle" data-toggle="popover" data-trigger="hover" data-title="Top products with units sold" data-placement="top" data-content="Products with the most individual units sold. Includes orders from all sales channels."></i></span>
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
							<div class="f-s-13"><span data-animation="number" data-value="195">0</span></div>
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
							<div class="f-s-13"><span data-animation="number" data-value="185">0</span></div>
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
							<div class="f-s-13"><span data-animation="number" data-value="129">0</span></div>
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
							<div class="f-s-13"><span data-animation="number" data-value="96">0</span></div>
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
							<div class="f-s-13"><span data-animation="number" data-value="55">0</span></div>
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
						<span class="ml-2"><i class="fa fa-info-circle" data-toggle="popover" data-trigger="hover" data-title="Marketing Campaign" data-placement="top" data-content="Campaign that run for getting more returning customers."></i></span>
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
										<div class="progress-bar progress-bar-striped bg-indigo" data-animation="width" data-value="80%" style="width: 0%"></div>
									</div>
								</div>
								<div class="ml-2 f-s-11 width-30 text-center"><span data-animation="number" data-value="80">0</span>%</div>
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
										<div class="progress-bar progress-bar-striped bg-warning" data-animation="width" data-value="60%" style="width: 0%"></div>
									</div>
								</div>
								<div class="ml-2 f-s-11 width-30 text-center"><span data-animation="number" data-value="60">0</span>%</div>
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
@endsection


@push('scripts')
	<script src="/assets/plugins/d3/d3.min.js"></script>
	<script src="/assets/plugins/nvd3/build/nv.d3.js"></script>
	<script src="/assets/plugins/jvectormap-next/jquery-jvectormap.min.js"></script>
	<script src="/assets/plugins/jvectormap-next/jquery-jvectormap-world-mill.js"></script>
	<script src="/assets/plugins/apexcharts/dist/apexcharts.min.js"></script>
	<script src="/assets/plugins/moment/moment.js"></script>
	<script src="/assets/plugins/bootstrap-daterangepicker/daterangepicker.js"></script>
	<script src="/assets/js/demo/dashboard-v3.js"></script>
@endpush