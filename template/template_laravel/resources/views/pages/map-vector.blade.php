@extends('layouts.default', ['contentFullWidth' => true, 'contentInverseMode' => true])

@section('title', 'Vector Map')

@push('css')
	<link href="/assets/plugins/jvectormap-next/jquery-jvectormap.css" rel="stylesheet" />
@endpush

@section('content')
	<!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Map</a></li>
		<li class="breadcrumb-item active">Vector Map</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Vector Map <small>header small text goes here...</small></h1>
	<!-- end page-header -->
	<!-- begin map -->
	<div class="map bg-dark">
		<div id="world-map"></div>
		<!-- begin map-float-table -->
		<div class="map-float-table d-none d-xl-block p-15">
			<h4 class="m-t-0"><i class="fa fa-map-marker-alt text-danger m-r-5"></i> Vector Map</h4>
			<!-- begin scrollbar -->
			<div data-scrollbar="true" class="height-md">
				<table class="table table-transparent">
					<thead>
						<tr>
							<th>Country</th>
							<th>Total Visitors</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Vatican City</td>
							<td><span class="text-success">9,820 <i class="fa fa-arrow-up"></i></span></td>
						</tr>
						<tr>
							<td>Monaco</td>
							<td>1,920</td>
						</tr>
						<tr>
							<td>Nauru</td>
							<td><span class="text-danger">1,346 <i class="fa fa-arrow-down"></i></span></td>
						</tr>
						<tr>
							<td>Tuvalu</td>
							<td><span class="text-success">6,543 <i class="fa fa-arrow-up"></i></span></td>
						</tr>
						<tr>
							<td>San Marino</td>
							<td><span class="text-success">7,321 <i class="fa fa-arrow-up"></i></span></td>
						</tr>
						<tr>
							<td>Liechtenstein</td>
							<td>3,434</td>
						</tr>
						<tr>
							<td>Marshall Islands</td>
							<td>1,922</td>
						</tr>
						<tr>
							<td>Saint Kitts and Nevis</td>
							<td><span class="text-danger">9,812 <i class="fa fa-arrow-down"></i></span></td>
						</tr>
						<tr>
							<td>Maldives</td>
							<td><span class="text-danger">4,182 <i class="fa fa-arrow-down"></i></span></td>
						</tr>
						<tr>
							<td>Malta</td>
							<td>9,188</td>
						</tr>
						<tr>
							<td>Grenada</td>
							<td>11,198</td>
						</tr>
						<tr>
							<td>Saint Vincent</td>
							<td><span class="text-success">9,101 <i class="fa fa-arrow-up"></i></span></td>
						</tr>
						<tr>
							<td>Barbados</td>
							<td><span class="text-success">9,192 <i class="fa fa-arrow-up"></i></span></td>
						</tr>
						<tr>
							<td>Antigua and Barbuda</td>
							<td><span class="text-success">5,282 <i class="fa fa-arrow-up"></i></span></td>
						</tr>
						<tr>
							<td>Seychelles</td>
							<td><span class="text-success">8,283 <i class="fa fa-arrow-up"></i></span></td>
						</tr>
						<tr>
							<td>Palau</td>
							<td><span class="text-danger">1,222 <i class="fa fa-arrow-down"></i></span></td>
						</tr>
						<tr>
							<td>Andorra</td>
							<td>146</td>
						</tr>
						<tr>
							<td>Saint Lucia</td>
							<td>3,923</td>
						</tr>
						<tr>
							<td>Federated States</td>
							<td>9,827</td>
						</tr>
						<tr>
							<td>Singapore</td>
							<td>7,293</td>
						</tr>
						<tr>
							<td>Kiribati</td>
							<td>9,238</td>
						</tr>
						<tr>
							<td>Tonga</td>
							<td>6,422</td>
						</tr>
						<tr>
							<td>Dominica</td>
							<td><span class="text-success">3,341 <i class="fa fa-arrow-up"></i></span></td>
						</tr>
						<tr>
							<td>Mauritius</td>
							<td><span class="text-success">532 <i class="fa fa-arrow-up"></i></span></td>
						</tr>
						<tr>
							<td>Bahrain</td>
							<td><span class="text-success">8,754 <i class="fa fa-arrow-up"></i></span></td>
						</tr>
						<tr>
							<td>São Tomé and Príncipe</td>
							<td>5,742</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- end scrollbar -->
		</div>
		<!-- end map-float-table -->
	</div>
	<!-- end map -->
@endsection

@push('scripts')
	<script src="/assets/plugins/jvectormap-next/jquery-jvectormap.min.js"></script>
	<script src="/assets/plugins/jvectormap-next/jquery-jvectormap-world-mill.js"></script>
	<script src="/assets/js/demo/map-vector.demo.js"></script>
@endpush
