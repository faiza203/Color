<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb hidden-print float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item active">Invoice</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header hidden-print">Invoice <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		<!-- begin invoice -->
		<div class="invoice">
			<!-- begin invoice-company -->
			<div class="invoice-company">
				<span class="pull-right hidden-print">
					<a href="javascript:;" class="btn btn-sm btn-white m-b-10 mr-2"><i class="fa fa-file-pdf text-danger fa-fw fa-lg"></i> Export as PDF</a>
					<a href="javascript:;" onclick="window.print()" class="btn btn-sm btn-white m-b-10"><i class="fa fa-print fa-fw fa-lg"></i> Print</a>
				</span>
				Company Name, Inc
			</div>
			<!-- end invoice-company -->
			<!-- begin invoice-header -->
			<div class="invoice-header">
				<div class="invoice-from">
					<small>from</small>
					<address class="m-t-5 m-b-5">
						<strong class="text-inverse">Twitter, Inc.</strong><br />
						Street Address<br />
						City, Zip Code<br />
						Phone: (123) 456-7890<br />
						Fax: (123) 456-7890
					</address>
				</div>
				<div class="invoice-to">
					<small>to</small>
					<address class="m-t-5 m-b-5">
						<strong class="text-inverse">Company Name</strong><br />
						Street Address<br />
						City, Zip Code<br />
						Phone: (123) 456-7890<br />
						Fax: (123) 456-7890
					</address>
				</div>
				<div class="invoice-date">
					<small>Invoice / July period</small>
					<div class="date text-inverse m-t-5">August 3,2012</div>
					<div class="invoice-detail">
						#0000123DSS<br />
						Services Product
					</div>
				</div>
			</div>
			<!-- end invoice-header -->
			<!-- begin invoice-content -->
			<div class="invoice-content">
				<!-- begin table-responsive -->
				<div class="table-responsive">
					<table class="table table-invoice">
						<thead>
							<tr>
								<th>TASK DESCRIPTION</th>
								<th class="text-center" width="10%">RATE</th>
								<th class="text-center" width="10%">HOURS</th>
								<th class="text-right" width="20%">LINE TOTAL</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<span class="text-inverse">Website design &amp; development</span><br />
									<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis arcu.</small>
								</td>
								<td class="text-center">$50.00</td>
								<td class="text-center">50</td>
								<td class="text-right">$2,500.00</td>
							</tr>
							<tr>
								<td>
									<span class="text-inverse">Branding</span><br />
									<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis arcu.</small>
								</td>
								<td class="text-center">$50.00</td>
								<td class="text-center">40</td>
								<td class="text-right">$2,000.00</td>
							</tr>
							<tr>
								<td>
									<span class="text-inverse">Redesign Service</span><br />
									<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis arcu.</small>
								</td>
								<td class="text-center">$50.00</td>
								<td class="text-center">50</td>
								<td class="text-right">$2,500.00</td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- end table-responsive -->
				<!-- begin invoice-price -->
				<div class="invoice-price">
					<div class="invoice-price-left">
						<div class="invoice-price-row">
							<div class="sub-price">
								<small>SUBTOTAL</small>
								<span class="text-inverse">$4,500.00</span>
							</div>
							<div class="sub-price">
								<i class="fa fa-plus text-muted"></i>
							</div>
							<div class="sub-price">
								<small>PAYPAL FEE (5.4%)</small>
								<span class="text-inverse">$108.00</span>
							</div>
						</div>
					</div>
					<div class="invoice-price-right">
						<small>TOTAL</small> <span class="f-w-600">$4508.00</span>
					</div>
				</div>
				<!-- end invoice-price -->
			</div>
			<!-- end invoice-content -->
			<!-- begin invoice-note -->
			<div class="invoice-note">
				* Make all cheques payable to [Your Company Name]<br />
				* Payment is due within 30 days<br />
				* If you have any questions concerning this invoice, contact  [Name, Phone Number, Email]
			</div>
			<!-- end invoice-note -->
			<!-- begin invoice-footer -->
			<div class="invoice-footer">
				<p class="text-center m-b-5 f-w-600">
					THANK YOU FOR YOUR BUSINESS
				</p>
				<p class="text-center">
					<span class="m-r-10"><i class="fa fa-fw fa-lg fa-globe"></i> matiasgallipoli.com</span>
					<span class="m-r-10"><i class="fa fa-fw fa-lg fa-phone-volume"></i> T:016-18192302</span>
					<span class="m-r-10"><i class="fa fa-fw fa-lg fa-envelope"></i> rtiemps@gmail.com</span>
				</p>
			</div>
			<!-- end invoice-footer -->
		</div>
		<!-- end invoice -->
	</div>
</template>