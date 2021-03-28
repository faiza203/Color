<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb pull-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">CSS Helper</a></li>
			<li class="breadcrumb-item active">Predefined CSS Class</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Predefined CSS Class <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		
		<!-- begin tabs -->
		<b-tabs nav-class="nav-tabs-inverse" nav-wrapper-class="nav nav-tabs nav-tabs-inverse">
			<b-tab active>
				<template slot="title">
					<i class="fa fa-fw fa-lg fa-cogs"></i> <span class="d-none d-lg-inline">General</span>
				</template>
			
				<h4 class="m-b-5"><b>General CSS Class</b></h4>
				<p class="m-b-20">
					All the predefined css classes will override the defined css styling in your classes, UNLESS the <code>!important</code> is declared in your defined css styling.
				</p>
				<!-- begin table-responsive -->
				<div class="table-responsive">
					<table class="table table-bordered table-condensed">
						<thead>
							<tr>
								<th width="20%">Row Space</th>
								<th width="20%">Table</th>
								<th width="20%">Float</th>
								<th width="20%">Border Radius</th>
								<th width="20%">Vertical Box</th>
								<th width="20%">Overflow</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-light">
								<td class="p-0">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.row.row-space-0</td>
											</tr>
											<tr>
												<td nowrap>.row.row-space-2</td>
											</tr>
											<tr>
												<td nowrap>.row.row-space-4</td>
											</tr>
											<tr>
												<td nowrap>.row.row-space-6</td>
											</tr>
											<tr>
												<td nowrap>.row.row-space-8</td>
											</tr>
											<tr>
												<td nowrap>.row.row-space-10</td>
											</tr>
											<tr>
												<td nowrap>.row.row-space-12</td>
											</tr>
											<tr>
												<td nowrap>.row.row-space-14</td>
											</tr>
											<tr>
												<td nowrap>.row.row-space-16</td>
											</tr>
											<tr>
												<td nowrap>.row.row-space-18</td>
											</tr>
											<tr>
												<td nowrap>.row.row-space-20</td>
											</tr>
											<tr>
												<td nowrap>.row.row-space-22</td>
											</tr>
											<tr>
												<td nowrap>.row.row-space-24</td>
											</tr>
											<tr>
												<td nowrap>.row.row-space-26</td>
											</tr>
											<tr>
												<td nowrap>.row.row-space-28</td>
											</tr>
											<tr>
												<td nowrap>.row.row-space-30</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.valign-top</td>
											</tr>
											<tr>
												<td nowrap>.valign-middle</td>
											</tr>
											<tr>
												<td nowrap>.valign-bottom</td>
											</tr>
											<tr>
												<td nowrap>.table-valign-top</td>
											</tr>
											<tr>
												<td nowrap>.table-valign-middle</td>
											</tr>
											<tr>
												<td nowrap>.table-valign-bottom</td>
											</tr>
											<tr>
												<td nowrap>.table-th-valign-top</td>
											</tr>
											<tr>
												<td nowrap>.table-td-valign-top</td>
											</tr>
											<tr>
												<td nowrap>.table-th-valign-middle</td>
											</tr>
											<tr>
												<td nowrap>.table-td-valign-middle</td>
											</tr>
											<tr>
												<td nowrap>.table-th-valign-bottom</td>
											</tr>
											<tr>
												<td nowrap>.table-td-valign-bottom</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.pull-left</td>
											</tr>
											<tr>
												<td nowrap>.pull-right</td>
											</tr>
											<tr>
												<td nowrap>.pull-none</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.no-rounded-corner</td>
											</tr>
											<tr>
												<td nowrap>.rounded-corner</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.vertical-box</td>
											</tr>
											<tr>
												<td nowrap>.vertical-box-column</td>
											</tr>
											<tr>
												<td nowrap>.vertical-box-row</td>
											</tr>
											<tr>
												<td nowrap>.vertical-box-cell</td>
											</tr>
											<tr>
												<td nowrap>.vertical-box-inner-cell</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.overflow-auto</td>
											</tr>
											<tr>
												<td nowrap>.overflow-visible</td>
											</tr>
											<tr>
												<td nowrap>.overflow-scroll</td>
											</tr>
											<tr>
												<td nowrap>.overflow-x-hidden</td>
											</tr>
											<tr>
												<td nowrap>.overflow-x-visible</td>
											</tr>
											<tr>
												<td nowrap>.overflow-x-scroll</td>
											</tr>
											<tr>
												<td nowrap>.overflow-y-hidden</td>
											</tr>
											<tr>
												<td nowrap>.overflow-y-visible</td>
											</tr>
											<tr>
												<td nowrap>.overflow-y-scroll</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- end table-responsive -->
			</b-tab>
			<b-tab>
				<template slot="title">
					<i class="fa fa-fw fa-lg fa-arrows-alt-h"></i> <span class="d-none d-lg-inline">Width & Height</span>
				</template>
				
				<h4 class="m-b-5"><b>Width & Height CSS Class</b></h4>
				<p class="m-b-20">
					All the predefined css classes will override the defined css styling in your classes, UNLESS the <code>!important</code> is declared in your defined css styling.
				</p>
				<!-- begin table-responsive -->
				<div class="table-responsive">
					<table class="table table-bordered table-condensed">
						<thead>
							<tr>
								<th colspan="2">Width</th>
								<th colspan="2">Height</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-light">
								<td class="p-0" width="25%">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.width-full (100%)</td>
											</tr>
											<tr>
												<td nowrap>.width-lg (600px)</td>
											</tr>
											<tr>
												<td nowrap>.width-md (450px)</td>
											</tr>
											<tr>
												<td nowrap>.width-sm (300px)</td>
											</tr>
											<tr>
												<td nowrap>.width-xs (150px)</td>
											</tr>
											<tr>
												<td nowrap>.width-600</td>
											</tr>
											<tr>
												<td nowrap>.width-550</td>
											</tr>
											<tr>
												<td nowrap>.width-500</td>
											</tr>
											<tr>
												<td nowrap>.width-450</td>
											</tr>
											<tr>
												<td nowrap>.width-400</td>
											</tr>
											<tr>
												<td nowrap>.width-350</td>
											</tr>
											<tr>
												<td nowrap>.width-300</td>
											</tr>
											<tr>
												<td nowrap>.width-250</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0" width="25%">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.width-200</td>
											</tr>
											<tr>
												<td nowrap>.width-150</td>
											</tr>
											<tr>
												<td nowrap>.width-100</td>
											</tr>
											<tr>
												<td nowrap>.width-90</td>
											</tr>
											<tr>
												<td nowrap>.width-80</td>
											</tr>
											<tr>
												<td nowrap>.width-70</td>
											</tr>
											<tr>
												<td nowrap>.width-60</td>
											</tr>
											<tr>
												<td nowrap>.width-50</td>
											</tr>
											<tr>
												<td nowrap>.width-40</td>
											</tr>
											<tr>
												<td nowrap>.width-30</td>
											</tr>
											<tr>
												<td nowrap>.width-20</td>
											</tr>
											<tr>
												<td nowrap>.width-10</td>
											</tr>
											<tr>
												<td nowrap>.width-0</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0" width="25%">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.height-full (100%)</td>
											</tr>
											<tr>
												<td nowrap>.height-lg (600px)</td>
											</tr>
											<tr>
												<td nowrap>.height-md (450px)</td>
											</tr>
											<tr>
												<td nowrap>.height-sm (300px)</td>
											</tr>
											<tr>
												<td nowrap>.height-xs (150px)</td>
											</tr>
											<tr>
												<td nowrap>.height-600</td>
											</tr>
											<tr>
												<td nowrap>.height-550</td>
											</tr>
											<tr>
												<td nowrap>.height-500</td>
											</tr>
											<tr>
												<td nowrap>.height-450</td>
											</tr>
											<tr>
												<td nowrap>.height-400</td>
											</tr>
											<tr>
												<td nowrap>.height-350</td>
											</tr>
											<tr>
												<td nowrap>.height-300</td>
											</tr>
											<tr>
												<td nowrap>.height-250</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0" width="25%">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.height-200</td>
											</tr>
											<tr>
												<td nowrap>.height-150</td>
											</tr>
											<tr>
												<td nowrap>.height-100</td>
											</tr>
											<tr>
												<td nowrap>.height-90</td>
											</tr>
											<tr>
												<td nowrap>.height-80</td>
											</tr>
											<tr>
												<td nowrap>.height-70</td>
											</tr>
											<tr>
												<td nowrap>.height-60</td>
											</tr>
											<tr>
												<td nowrap>.height-50</td>
											</tr>
											<tr>
												<td nowrap>.height-40</td>
											</tr>
											<tr>
												<td nowrap>.height-30</td>
											</tr>
											<tr>
												<td nowrap>.height-20</td>
											</tr>
											<tr>
												<td nowrap>.height-10</td>
											</tr>
											<tr>
												<td nowrap>.height-0</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- end table-responsive -->
			</b-tab>
			<b-tab>
				<template slot="title">
					<i class="fa fa-fw fa-lg fa-text-width"></i> <span class="d-none d-lg-inline">Text & Font</span>
				</template>
				
				<h4 class="m-b-5"><b>Text & Font CSS Class</b></h4>
				<p class="m-b-20">
					All the predefined css classes will override the defined css styling in your classes, UNLESS the <code>!important</code> is declared in your defined css styling.
				</p>
				<!-- begin table-responsive -->
				<div class="table-responsive">
					<table class="table table-bordered table-condensed">
						<thead>
							<tr>
								<th width="25%">Font Size</th>
								<th width="25%">Font Weight</th>
								<th width="25%">Text Align</th>
								<th width="25%">Text Overflow</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-light">
								<td class="p-0">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.f-s-8</td>
											</tr>
											<tr>
												<td nowrap>.f-s-9</td>
											</tr>
											<tr>
												<td nowrap>.f-s-10</td>
											</tr>
											<tr>
												<td nowrap>.f-s-11</td>
											</tr>
											<tr>
												<td nowrap>.f-s-12</td>
											</tr>
											<tr>
												<td nowrap>.f-s-13</td>
											</tr>
											<tr>
												<td nowrap>.f-s-14</td>
											</tr>
											<tr>
												<td nowrap>.f-s-15</td>
											</tr>
											<tr>
												<td nowrap>.f-s-16</td>
											</tr>
											<tr>
												<td nowrap>.f-s-17</td>
											</tr>
											<tr>
												<td nowrap>.f-s-18</td>
											</tr>
											<tr>
												<td nowrap>.f-s-19</td>
											</tr>
											<tr>
												<td nowrap>.f-s-20</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.f-w-100</td>
											</tr>
											<tr>
												<td nowrap>.f-w-200</td>
											</tr>
											<tr>
												<td nowrap>.f-w-300</td>
											</tr>
											<tr>
												<td nowrap>.f-w-400</td>
											</tr>
											<tr>
												<td nowrap>.f-w-500</td>
											</tr>
											<tr>
												<td nowrap>.f-w-600</td>
											</tr>
											<tr>
												<td nowrap>.f-w-700</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.text-center</td>
											</tr>
											<tr>
												<td nowrap>.text-left</td>
											</tr>
											<tr>
												<td nowrap>.text-right</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.text-nowrap</td>
											</tr>
											<tr>
												<td nowrap>.text-ellipsis</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- end table-responsive -->
			</b-tab>
			<b-tab>
				<template slot="title">
					<i class="fa fa-fw fa-lg fa-arrows-alt"></i> <span class="d-none d-lg-inline">Margin</span>
				</template>
				
				<h4 class="m-b-5"><b>Margin CSS Class</b></h4>
				<p class="m-b-20">
					All the predefined css classes will override the defined css styling in your classes, UNLESS the <code>!important</code> is declared in your defined css styling.
				</p>
				<!-- begin table-responsive -->
				<div class="table-responsive">
					<table class="table table-condensed table-bordered">
						<thead>
							<tr>
								<th width="20%">Margin</th>
								<th width="20%">Margin Top</th>
								<th width="20%">Margin Right</th>
								<th width="20%">Margin Bottom</th>
								<th width="20%">Margin Left</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-light">
								<td class="p-0">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.m-0</td>
											</tr>
											<tr>
												<td nowrap>.m-1</td>
											</tr>
											<tr>
												<td nowrap>.m-2</td>
											</tr>
											<tr>
												<td nowrap>.m-3</td>
											</tr>
											<tr>
												<td nowrap>.m-4</td>
											</tr>
											<tr>
												<td nowrap>.m-5</td>
											</tr>
											<tr>
												<td nowrap>.m-10</td>
											</tr>
											<tr>
												<td nowrap>.m-15</td>
											</tr>
											<tr>
												<td nowrap>.m-20</td>
											</tr>
											<tr>
												<td nowrap>.m-25</td>
											</tr>
											<tr>
												<td nowrap>.m-30</td>
											</tr>
											<tr>
												<td nowrap>.m-35</td>
											</tr>
											<tr>
												<td nowrap>.m-40</td>
											</tr>
											<tr>
												<td nowrap>.m-auto</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.m-t-0</td>
											</tr>
											<tr>
												<td nowrap>.m-t-1</td>
											</tr>
											<tr>
												<td nowrap>.m-t-2</td>
											</tr>
											<tr>
												<td nowrap>.m-t-3</td>
											</tr>
											<tr>
												<td nowrap>.m-t-4</td>
											</tr>
											<tr>
												<td nowrap>.m-t-5</td>
											</tr>
											<tr>
												<td nowrap>.m-t-10</td>
											</tr>
											<tr>
												<td nowrap>.m-t-15</td>
											</tr>
											<tr>
												<td nowrap>.m-t-20</td>
											</tr>
											<tr>
												<td nowrap>.m-t-25</td>
											</tr>
											<tr>
												<td nowrap>.m-t-30</td>
											</tr>
											<tr>
												<td nowrap>.m-t-35</td>
											</tr>
											<tr>
												<td nowrap>.m-t-40</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.m-r-0</td>
											</tr>
											<tr>
												<td nowrap>.m-r-1</td>
											</tr>
											<tr>
												<td nowrap>.m-r-2</td>
											</tr>
											<tr>
												<td nowrap>.m-r-3</td>
											</tr>
											<tr>
												<td nowrap>.m-r-4</td>
											</tr>
											<tr>
												<td nowrap>.m-r-5</td>
											</tr>
											<tr>
												<td nowrap>.m-r-10</td>
											</tr>
											<tr>
												<td nowrap>.m-r-15</td>
											</tr>
											<tr>
												<td nowrap>.m-r-20</td>
											</tr>
											<tr>
												<td nowrap>.m-r-25</td>
											</tr>
											<tr>
												<td nowrap>.m-r-30</td>
											</tr>
											<tr>
												<td nowrap>.m-r-35</td>
											</tr>
											<tr>
												<td nowrap>.m-r-40</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.m-b-0</td>
											</tr>
											<tr>
												<td nowrap>.m-b-1</td>
											</tr>
											<tr>
												<td nowrap>.m-b-2</td>
											</tr>
											<tr>
												<td nowrap>.m-b-3</td>
											</tr>
											<tr>
												<td nowrap>.m-b-4</td>
											</tr>
											<tr>
												<td nowrap>.m-b-5</td>
											</tr>
											<tr>
												<td nowrap>.m-b-10</td>
											</tr>
											<tr>
												<td nowrap>.m-b-15</td>
											</tr>
											<tr>
												<td nowrap>.m-b-20</td>
											</tr>
											<tr>
												<td nowrap>.m-b-25</td>
											</tr>
											<tr>
												<td nowrap>.m-b-30</td>
											</tr>
											<tr>
												<td nowrap>.m-b-35</td>
											</tr>
											<tr>
												<td nowrap>.m-b-40</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed m-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.m-l-0</td>
											</tr>
											<tr>
												<td nowrap>.m-l-1</td>
											</tr>
											<tr>
												<td nowrap>.m-l-2</td>
											</tr>
											<tr>
												<td nowrap>.m-l-3</td>
											</tr>
											<tr>
												<td nowrap>.m-l-4</td>
											</tr>
											<tr>
												<td nowrap>.m-l-5</td>
											</tr>
											<tr>
												<td nowrap>.m-l-10</td>
											</tr>
											<tr>
												<td nowrap>.m-l-15</td>
											</tr>
											<tr>
												<td nowrap>.m-l-20</td>
											</tr>
											<tr>
												<td nowrap>.m-l-25</td>
											</tr>
											<tr>
												<td nowrap>.m-l-30</td>
											</tr>
											<tr>
												<td nowrap>.m-l-35</td>
											</tr>
											<tr>
												<td nowrap>.m-l-40</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- end table-responsive -->
			</b-tab>
			<b-tab>
				<template slot="title">
					<i class="fa fa-fw fa-lg fa-expand"></i> <span class="d-none d-lg-inline">Padding</span>
				</template>
				
				<h4 class="m-b-5"><b>Padding CSS Class</b></h4>
				<p class="m-b-20">
					All the predefined css classes will override the defined css styling in your classes, UNLESS the <code>!important</code> is declared in your defined css styling.
				</p>
				<!-- begin table-responsive -->
				<div class="table-responsive">
					<table class="table table-condensed table-bordered">
						<thead>
							<tr>
								<th width="20%">Padding</th>
								<th width="20%">Padding Top</th>
								<th width="20%">Padding Right</th>
								<th width="20%">Padding Bottom</th>
								<th width="20%">Padding Left</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-light">
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.p-0</td>
											</tr>
											<tr>
												<td nowrap>.p-1</td>
											</tr>
											<tr>
												<td nowrap>.p-2</td>
											</tr>
											<tr>
												<td nowrap>.p-3</td>
											</tr>
											<tr>
												<td nowrap>.p-4</td>
											</tr>
											<tr>
												<td nowrap>.p-5</td>
											</tr>
											<tr>
												<td nowrap>.p-10</td>
											</tr>
											<tr>
												<td nowrap>.p-15 / .wrapper</td>
											</tr>
											<tr>
												<td nowrap>.p-20</td>
											</tr>
											<tr>
												<td nowrap>.p-25</td>
											</tr>
											<tr>
												<td nowrap>.p-30</td>
											</tr>
											<tr>
												<td nowrap>.p-35</td>
											</tr>
											<tr>
												<td nowrap>.p-40</td>
											</tr>
											<tr>
												<td nowrap>.p-auto</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.p-t-0</td>
											</tr>
											<tr>
												<td nowrap>.p-t-1</td>
											</tr>
											<tr>
												<td nowrap>.p-t-2</td>
											</tr>
											<tr>
												<td nowrap>.p-t-3</td>
											</tr>
											<tr>
												<td nowrap>.p-t-4</td>
											</tr>
											<tr>
												<td nowrap>.p-t-5</td>
											</tr>
											<tr>
												<td nowrap>.p-t-10</td>
											</tr>
											<tr>
												<td nowrap>.p-t-15</td>
											</tr>
											<tr>
												<td nowrap>.p-t-20</td>
											</tr>
											<tr>
												<td nowrap>.p-t-25</td>
											</tr>
											<tr>
												<td nowrap>.p-t-30</td>
											</tr>
											<tr>
												<td nowrap>.p-t-35</td>
											</tr>
											<tr>
												<td nowrap>.p-t-40</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.p-r-0</td>
											</tr>
											<tr>
												<td nowrap>.p-r-1</td>
											</tr>
											<tr>
												<td nowrap>.p-r-2</td>
											</tr>
											<tr>
												<td nowrap>.p-r-3</td>
											</tr>
											<tr>
												<td nowrap>.p-r-4</td>
											</tr>
											<tr>
												<td nowrap>.p-r-5</td>
											</tr>
											<tr>
												<td nowrap>.p-r-10</td>
											</tr>
											<tr>
												<td nowrap>.p-r-15</td>
											</tr>
											<tr>
												<td nowrap>.p-r-20</td>
											</tr>
											<tr>
												<td nowrap>.p-r-25</td>
											</tr>
											<tr>
												<td nowrap>.p-r-30</td>
											</tr>
											<tr>
												<td nowrap>.p-r-35</td>
											</tr>
											<tr>
												<td nowrap>.p-r-40</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.p-b-0</td>
											</tr>
											<tr>
												<td nowrap>.p-b-1</td>
											</tr>
											<tr>
												<td nowrap>.p-b-2</td>
											</tr>
											<tr>
												<td nowrap>.p-b-3</td>
											</tr>
											<tr>
												<td nowrap>.p-b-4</td>
											</tr>
											<tr>
												<td nowrap>.p-b-5</td>
											</tr>
											<tr>
												<td nowrap>.p-b-10</td>
											</tr>
											<tr>
												<td nowrap>.p-b-15</td>
											</tr>
											<tr>
												<td nowrap>.p-b-20</td>
											</tr>
											<tr>
												<td nowrap>.p-b-25</td>
											</tr>
											<tr>
												<td nowrap>.p-b-30</td>
											</tr>
											<tr>
												<td nowrap>.p-b-35</td>
											</tr>
											<tr>
												<td nowrap>.p-b-40</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">.p-l-0</td>
											</tr>
											<tr>
												<td nowrap>.p-l-1</td>
											</tr>
											<tr>
												<td nowrap>.p-l-2</td>
											</tr>
											<tr>
												<td nowrap>.p-l-3</td>
											</tr>
											<tr>
												<td nowrap>.p-l-4</td>
											</tr>
											<tr>
												<td nowrap>.p-l-5</td>
											</tr>
											<tr>
												<td nowrap>.p-l-10</td>
											</tr>
											<tr>
												<td nowrap>.p-l-15</td>
											</tr>
											<tr>
												<td nowrap>.p-l-20</td>
											</tr>
											<tr>
												<td nowrap>.p-l-25</td>
											</tr>
											<tr>
												<td nowrap>.p-l-30</td>
											</tr>
											<tr>
												<td nowrap>.p-l-35</td>
											</tr>
											<tr>
												<td nowrap>.p-l-40</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- end table-responsive -->
			</b-tab>
			<b-tab>
				<template slot="title">
					<i class="fa fa-fw fa-lg fa-paint-brush"></i> <span class="d-none d-lg-inline">Background Color</span>
				</template>
				
				<h4 class="m-b-5"><b>Background CSS Class</b></h4>
				<p class="m-b-20">
					All the predefined css classes will override the defined css styling in your classes, UNLESS the <code>!important</code> is declared in your defined css styling.
				</p>
				<!-- begin table-responsive -->
				<div class="table-responsive">
					<table class="table table-condensed table-bordered">
						<thead>
							<tr>
								<th width="20%">Blue</th>
								<th width="20%">Indigo</th>
								<th width="20%">Purple</th>
								<th width="20%">Aqua</th>
								<th width="20%">Teal</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-light">
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-blue-lighter width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-blue-lighter
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-blue width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-blue / .bg-primary
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-blue-darker width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-blue-darker
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-blue-transparent-9 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-blue-transparent-9
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-blue-transparent-8 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-blue-transparent-8
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-blue-transparent-7 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-blue-transparent-7
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-blue-transparent-6 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-blue-transparent-6
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-blue-transparent-5 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-blue-transparent-5
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-blue-transparent-4 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-blue-transparent-4
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-blue-transparent-3 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-blue-transparent-3
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-blue-transparent-2 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-blue-transparent-2
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-blue-transparent-1 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-blue-transparent-1
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-gradient-blue width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-gradient-blue
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-indigo-lighter width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-indigo-lighter
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-indigo width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-indigo
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-indigo-darker width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-indigo-darker
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-indigo-transparent-9 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-indigo-transparent-9
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-indigo-transparent-8 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-indigo-transparent-8
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-indigo-transparent-7 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-indigo-transparent-7
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-indigo-transparent-6 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-indigo-transparent-6
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-indigo-transparent-5 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-indigo-transparent-5
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-indigo-transparent-4 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-indigo-transparent-4
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-indigo-transparent-3 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-indigo-transparent-3
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-indigo-transparent-2 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-indigo-transparent-2
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-indigo-transparent-1 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-indigo-transparent-1
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-gradient-indigo width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-gradient-indigo
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-purple-lighter width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-purple-lighter
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-purple width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-purple
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-purple-darker width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-purple-darker
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-purple-transparent-9 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-purple-transparent-9
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-purple-transparent-8 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-purple-transparent-8
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-purple-transparent-7 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-purple-transparent-7
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-purple-transparent-6 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-purple-transparent-6
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-purple-transparent-5 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-purple-transparent-5
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-purple-transparent-4 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-purple-transparent-4
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-purple-transparent-3 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-purple-transparent-3
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-purple-transparent-2 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-purple-transparent-2
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-purple-transparent-1 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-purple-transparent-1
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-gradient-purple width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-gradient-purple
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-aqua-lighter width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-aqua-lighter
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-aqua width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-aqua / .bg-info
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-aqua-darker width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-aqua-darker
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-aqua-transparent-9 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-aqua-transparent-9
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-aqua-transparent-8 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-aqua-transparent-8
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-aqua-transparent-7 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-aqua-transparent-7
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-aqua-transparent-6 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-aqua-transparent-6
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-aqua-transparent-5 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-aqua-transparent-5
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-aqua-transparent-4 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-aqua-transparent-4
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-aqua-transparent-3 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-aqua-transparent-3
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-aqua-transparent-2 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-aqua-transparent-2
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-aqua-transparent-1 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-aqua-transparent-1
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-gradient-aqua width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-gradient-aqua
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-teal-lighter width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-teal-lighter
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-teal width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-teal / .bg-success
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-teal-darker width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-teal-darker
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-teal-transparent-9 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-teal-transparent-9
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-teal-transparent-8 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-teal-transparent-8
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-teal-transparent-7 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-teal-transparent-7
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-teal-transparent-6 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-teal-transparent-6
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-teal-transparent-5 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-teal-transparent-5
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-teal-transparent-4 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-teal-transparent-4
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-teal-transparent-3 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-teal-transparent-3
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-teal-transparent-2 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-teal-transparent-2
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-teal-transparent-1 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-teal-transparent-1
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-gradient-teal width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-gradient-teal
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
						<thead>
							<tr>
								<th width="20%">Green</th>
								<th width="20%">Lime</th>
								<th width="20%">Orange</th>
								<th width="20%">Yellow</th>
								<th width="20%">Red</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-light">
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-green-lighter width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-green-lighter
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-green width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-green / .bg-success
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-green-darker width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-green-darker
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-green-transparent-9 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-green-transparent-9
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-green-transparent-8 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-green-transparent-8
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-green-transparent-7 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-green-transparent-7
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-green-transparent-6 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-green-transparent-6
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-green-transparent-5 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-green-transparent-5
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-green-transparent-4 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-green-transparent-4
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-green-transparent-3 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-green-transparent-3
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-green-transparent-2 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-green-transparent-2
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-green-transparent-1 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-green-transparent-1
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-gradient-green width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-gradient-green
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-lime-lighter width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-lime-lighter
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-lime width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-lime
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-lime-darker width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-lime-darker
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-lime-transparent-9 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-lime-transparent-9
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-lime-transparent-8 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-lime-transparent-8
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-lime-transparent-7 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-lime-transparent-7
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-lime-transparent-6 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-lime-transparent-6
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-lime-transparent-5 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-lime-transparent-5
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-lime-transparent-4 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-lime-transparent-4
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-lime-transparent-3 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-lime-transparent-3
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-lime-transparent-2 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-lime-transparent-2
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-lime-transparent-1 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-lime-transparent-1
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-gradient-lime width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-gradient-lime
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-orange-lighter width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-orange-lighter
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-orange width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-orange / .bg-warning
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-orange-darker width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-orange-darker
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-orange-transparent-9 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-orange-transparent-9
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-orange-transparent-8 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-orange-transparent-8
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-orange-transparent-7 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-orange-transparent-7
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-orange-transparent-6 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-orange-transparent-6
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-orange-transparent-5 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-orange-transparent-5
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-orange-transparent-4 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-orange-transparent-4
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-orange-transparent-3 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-orange-transparent-3
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-orange-transparent-2 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-orange-transparent-2
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-orange-transparent-1 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-orange-transparent-1
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-gradient-orange width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-gradient-orange
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-yellow-lighter width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-yellow-lighter
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-yellow width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-yellow
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-yellow-darker width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-yellow-darker
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-yellow-transparent-9 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-yellow-transparent-9
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-yellow-transparent-8 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-yellow-transparent-8
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-yellow-transparent-7 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-yellow-transparent-7
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-yellow-transparent-6 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-yellow-transparent-6
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-yellow-transparent-5 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-yellow-transparent-5
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-yellow-transparent-4 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-yellow-transparent-4
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-yellow-transparent-3 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-yellow-transparent-3
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-yellow-transparent-2 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-yellow-transparent-2
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-yellow-transparent-1 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-yellow-transparent-1
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-gradient-yellow width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-gradient-yellow
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-red-lighter width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-red-lighter
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-red width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-red / .bg-danger
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-red-darker width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-red-darker
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-red-transparent-9 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-red-transparent-9
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-red-transparent-8 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-red-transparent-8
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-red-transparent-7 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-red-transparent-7
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-red-transparent-6 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-red-transparent-6
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-red-transparent-5 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-red-transparent-5
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-red-transparent-4 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-red-transparent-4
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-red-transparent-3 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-red-transparent-3
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-red-transparent-2 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-red-transparent-2
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-red-transparent-1 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-red-transparent-1
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-gradient-red width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-gradient-red
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
						<thead>
							<tr>
								<th width="20%">Pink</th>
								<th width="20%">Black</th>
								<th width="20%">Grey</th>
								<th width="20%">Silver</th>
								<th width="20%">White</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-light">
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-pink-lighter width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-pink-lighter
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-pink width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-pink / .bg-danger
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-pink-darker width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-pink-darker
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-pink-transparent-9 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-pink-transparent-9
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-pink-transparent-8 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-pink-transparent-8
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-pink-transparent-7 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-pink-transparent-7
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-pink-transparent-6 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-pink-transparent-6
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-pink-transparent-5 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-pink-transparent-5
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-pink-transparent-4 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-pink-transparent-4
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-pink-transparent-3 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-pink-transparent-3
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-pink-transparent-2 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-pink-transparent-2
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-pink-transparent-1 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-pink-transparent-1
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-gradient-pink width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-gradient-pink
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-black-lighter width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-black-lighter
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-black width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-black / .bg-inverse
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-black-darker width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-black-darker
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-black-transparent-9 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-black-transparent-9
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-black-transparent-8 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-black-transparent-8
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-black-transparent-7 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-black-transparent-7
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-black-transparent-6 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-black-transparent-6
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-black-transparent-5 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-black-transparent-5
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-black-transparent-4 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-black-transparent-4
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-black-transparent-3 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-black-transparent-3
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-black-transparent-2 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-black-transparent-2
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-black-transparent-1 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-black-transparent-1
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-gradient-black width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-gradient-black
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-grey-lighter width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-grey-lighter
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-grey width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-grey
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-grey-darker width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-grey-darker
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-grey-transparent-9 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-grey-transparent-9
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-grey-transparent-8 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-grey-transparent-8
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-grey-transparent-7 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-grey-transparent-7
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-grey-transparent-6 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-grey-transparent-6
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-grey-transparent-5 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-grey-transparent-5
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-grey-transparent-4 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-grey-transparent-4
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-grey-transparent-3 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-grey-transparent-3
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-grey-transparent-2 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-grey-transparent-2
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-grey-transparent-1 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-grey-transparent-1
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-gradient-grey width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-gradient-grey
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0 bg-inverse">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0 text-white">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-light width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-light
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-silver width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-silver
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-silver-darker width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-silver-darker
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-silver-transparent-9 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-silver-transparent-9
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-silver-transparent-8 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-silver-transparent-8
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-silver-transparent-7 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-silver-transparent-7
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-silver-transparent-6 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-silver-transparent-6
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-silver-transparent-5 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-silver-transparent-5
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-silver-transparent-4 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-silver-transparent-4
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-silver-transparent-3 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-silver-transparent-3
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-silver-transparent-2 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-silver-transparent-2
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-silver-transparent-1 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-silver-transparent-1
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-gradient-silver width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-gradient-silver
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0 bg-inverse">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0 text-white">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-white width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-white
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-white-transparent-9 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-white-transparent-9
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-white-transparent-8 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-white-transparent-8
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-white-transparent-7 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-white-transparent-7
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-white-transparent-6 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-white-transparent-6
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-white-transparent-5 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-white-transparent-5
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-white-transparent-4 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-white-transparent-4
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-white-transparent-3 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-white-transparent-3
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-white-transparent-2 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-white-transparent-2
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="bg-white-transparent-1 width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-white-transparent-1
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
						<thead>
							<tr>
								<th width="20%">Extra</th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-light">
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0">
													<div class="bg-none width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.bg-none
												</td>
											</tr>
											<tr>
												<td nowrap>
													<div class="no-bg width-20 height-20 pull-left" style="margin: -2px 7px -2px 0; border-radius: 4px;"></div>
													.no-bg
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- end table-responsive -->
			</b-tab>
			<b-tab>
				<template slot="title">
					<i class="fa fa-fw fa-lg fa-font text-gradient bg-gradient-purple"></i> <span class="d-none d-lg-inline">Text Color</span>
				</template>
				
				<h4 class="m-b-5"><b>Text Color CSS Class</b></h4>
				<p class="m-b-20">
					All the predefined css classes will override the defined css styling in your classes, UNLESS the <code>!important</code> is declared in your defined css styling.
				</p>
				<!-- begin table-responsive -->
				<div class="table-responsive">
					<table class="table table-condensed table-bordered">
						<thead>
							<tr>
								<th width="20%">Blue</th>
								<th width="20%">Indigo</th>
								<th width="20%">Purple</th>
								<th width="20%">Aqua</th>
								<th width="20%">Teal</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-light">
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0"><i class="fa fa-lg fa-font text-blue-lighter m-r-5"></i> .text-blue-lighter</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-blue m-r-5"></i> .text-blue / .text-primary</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-blue-darker m-r-5"></i> .text-blue-darker</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-blue-transparent-9 m-r-5"></i> .text-blue-transparent-9</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-blue-transparent-8 m-r-5"></i> .text-blue-transparent-8</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-blue-transparent-7 m-r-5"></i> .text-blue-transparent-7</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-blue-transparent-6 m-r-5"></i> .text-blue-transparent-6</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-blue-transparent-5 m-r-5"></i> .text-blue-transparent-5</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-blue-transparent-4 m-r-5"></i> .text-blue-transparent-4</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-blue-transparent-3 m-r-5"></i> .text-blue-transparent-3</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-blue-transparent-2 m-r-5"></i> .text-blue-transparent-2</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-blue-transparent-1 m-r-5"></i> .text-blue-transparent-1</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0"><i class="fa fa-lg fa-font text-indigo-lighter m-r-5"></i> .text-indigo-lighter</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-indigo m-r-5"></i> .text-indigo</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-indigo-darker m-r-5"></i> .text-indigo-darker</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-indigo-transparent-9 m-r-5"></i> .text-indigo-transparent-9</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-indigo-transparent-8 m-r-5"></i> .text-indigo-transparent-8</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-indigo-transparent-7 m-r-5"></i> .text-indigo-transparent-7</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-indigo-transparent-6 m-r-5"></i> .text-indigo-transparent-6</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-indigo-transparent-5 m-r-5"></i> .text-indigo-transparent-5</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-indigo-transparent-4 m-r-5"></i> .text-indigo-transparent-4</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-indigo-transparent-3 m-r-5"></i> .text-indigo-transparent-3</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-indigo-transparent-2 m-r-5"></i> .text-indigo-transparent-2</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-indigo-transparent-1 m-r-5"></i> .text-indigo-transparent-1</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0"><i class="fa fa-lg fa-font text-purple-lighter m-r-5"></i> .text-purple-lighter</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-purple m-r-5"></i> .text-purple</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-purple-darker m-r-5"></i> .text-purple-darker</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-purple-transparent-9 m-r-5"></i> .text-purple-transparent-9</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-purple-transparent-8 m-r-5"></i> .text-purple-transparent-8</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-purple-transparent-7 m-r-5"></i> .text-purple-transparent-7</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-purple-transparent-6 m-r-5"></i> .text-purple-transparent-6</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-purple-transparent-5 m-r-5"></i> .text-purple-transparent-5</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-purple-transparent-4 m-r-5"></i> .text-purple-transparent-4</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-purple-transparent-3 m-r-5"></i> .text-purple-transparent-3</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-purple-transparent-2 m-r-5"></i> .text-purple-transparent-2</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-purple-transparent-1 m-r-5"></i> .text-purple-transparent-1</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0"><i class="fa fa-lg fa-font text-aqua-lighter m-r-5"></i> .text-aqua-lighter</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-aqua m-r-5"></i> .text-aqua / .text-info</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-aqua-darker m-r-5"></i> .text-aqua-darker</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-aqua-transparent-9 m-r-5"></i> .text-aqua-transparent-9</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-aqua-transparent-8 m-r-5"></i> .text-aqua-transparent-8</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-aqua-transparent-7 m-r-5"></i> .text-aqua-transparent-7</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-aqua-transparent-6 m-r-5"></i> .text-aqua-transparent-6</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-aqua-transparent-5 m-r-5"></i> .text-aqua-transparent-5</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-aqua-transparent-4 m-r-5"></i> .text-aqua-transparent-4</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-aqua-transparent-3 m-r-5"></i> .text-aqua-transparent-3</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-aqua-transparent-2 m-r-5"></i> .text-aqua-transparent-2</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-aqua-transparent-1 m-r-5"></i> .text-aqua-transparent-1</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0"><i class="fa fa-lg fa-font text-teal-lighter m-r-5"></i> .text-teal-lighter</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-teal m-r-5"></i> .text-teal / .text-success</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-teal-darker m-r-5"></i> .text-teal-darker</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-teal-transparent-9 m-r-5"></i> .text-teal-transparent-9</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-teal-transparent-8 m-r-5"></i> .text-teal-transparent-8</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-teal-transparent-7 m-r-5"></i> .text-teal-transparent-7</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-teal-transparent-6 m-r-5"></i> .text-teal-transparent-6</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-teal-transparent-5 m-r-5"></i> .text-teal-transparent-5</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-teal-transparent-4 m-r-5"></i> .text-teal-transparent-4</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-teal-transparent-3 m-r-5"></i> .text-teal-transparent-3</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-teal-transparent-2 m-r-5"></i> .text-teal-transparent-2</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-teal-transparent-1 m-r-5"></i> .text-teal-transparent-1</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
						<thead>
							<tr>
								<th width="20%">Green</th>
								<th width="20%">Lime</th>
								<th width="20%">Orange</th>
								<th width="20%">Yellow</th>
								<th width="20%">Red</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-light">
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0"><i class="fa fa-lg fa-font text-green-lighter m-r-5"></i> .text-green-lighter</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-green m-r-5"></i> .text-green</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-green-darker m-r-5"></i> .text-green-darker</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-green-transparent-9 m-r-5"></i> .text-green-transparent-9</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-green-transparent-8 m-r-5"></i> .text-green-transparent-8</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-green-transparent-7 m-r-5"></i> .text-green-transparent-7</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-green-transparent-6 m-r-5"></i> .text-green-transparent-6</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-green-transparent-5 m-r-5"></i> .text-green-transparent-5</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-green-transparent-4 m-r-5"></i> .text-green-transparent-4</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-green-transparent-3 m-r-5"></i> .text-green-transparent-3</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-green-transparent-2 m-r-5"></i> .text-green-transparent-2</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-green-transparent-1 m-r-5"></i> .text-green-transparent-1</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0"><i class="fa fa-lg fa-font text-lime-lighter m-r-5"></i> .text-lime-lighter</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-lime m-r-5"></i> .text-lime</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-lime-darker m-r-5"></i> .text-lime-darker</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-lime-transparent-9 m-r-5"></i> .text-lime-transparent-9</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-lime-transparent-8 m-r-5"></i> .text-lime-transparent-8</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-lime-transparent-7 m-r-5"></i> .text-lime-transparent-7</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-lime-transparent-6 m-r-5"></i> .text-lime-transparent-6</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-lime-transparent-5 m-r-5"></i> .text-lime-transparent-5</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-lime-transparent-4 m-r-5"></i> .text-lime-transparent-4</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-lime-transparent-3 m-r-5"></i> .text-lime-transparent-3</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-lime-transparent-2 m-r-5"></i> .text-lime-transparent-2</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-lime-transparent-1 m-r-5"></i> .text-lime-transparent-1</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0"><i class="fa fa-lg fa-font text-orange-lighter m-r-5"></i> .text-orange-lighter</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-orange m-r-5"></i> .text-orange / .text-warning</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-orange-darker m-r-5"></i> .text-orange-darker</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-orange-transparent-9 m-r-5"></i> .text-orange-transparent-9</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-orange-transparent-8 m-r-5"></i> .text-orange-transparent-8</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-orange-transparent-7 m-r-5"></i> .text-orange-transparent-7</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-orange-transparent-6 m-r-5"></i> .text-orange-transparent-6</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-orange-transparent-5 m-r-5"></i> .text-orange-transparent-5</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-orange-transparent-4 m-r-5"></i> .text-orange-transparent-4</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-orange-transparent-3 m-r-5"></i> .text-orange-transparent-3</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-orange-transparent-2 m-r-5"></i> .text-orange-transparent-2</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-orange-transparent-1 m-r-5"></i> .text-orange-transparent-1</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0"><i class="fa fa-lg fa-font text-yellow-lighter m-r-5"></i> .text-yellow-lighter</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-yellow m-r-5"></i> .text-yellow</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-yellow-darker m-r-5"></i> .text-yellow-darker</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-yellow-transparent-9 m-r-5"></i> .text-yellow-transparent-9</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-yellow-transparent-8 m-r-5"></i> .text-yellow-transparent-8</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-yellow-transparent-7 m-r-5"></i> .text-yellow-transparent-7</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-yellow-transparent-6 m-r-5"></i> .text-yellow-transparent-6</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-yellow-transparent-5 m-r-5"></i> .text-yellow-transparent-5</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-yellow-transparent-4 m-r-5"></i> .text-yellow-transparent-4</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-yellow-transparent-3 m-r-5"></i> .text-yellow-transparent-3</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-yellow-transparent-2 m-r-5"></i> .text-yellow-transparent-2</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-yellow-transparent-1 m-r-5"></i> .text-yellow-transparent-1</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0"><i class="fa fa-lg fa-font text-red-lighter m-r-5"></i> .text-red-lighter</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-red m-r-5"></i> .text-red</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-red-darker m-r-5"></i> .text-red-darker</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-red-transparent-9 m-r-5"></i> .text-red-transparent-9</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-red-transparent-8 m-r-5"></i> .text-red-transparent-8</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-red-transparent-7 m-r-5"></i> .text-red-transparent-7</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-red-transparent-6 m-r-5"></i> .text-red-transparent-6</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-red-transparent-5 m-r-5"></i> .text-red-transparent-5</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-red-transparent-4 m-r-5"></i> .text-red-transparent-4</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-red-transparent-3 m-r-5"></i> .text-red-transparent-3</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-red-transparent-2 m-r-5"></i> .text-red-transparent-2</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-red-transparent-1 m-r-5"></i> .text-red-transparent-1</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
						<thead>
							<tr>
								<th width="20%">Pink</th>
								<th width="20%">Black</th>
								<th width="20%">Grey</th>
								<th width="20%">Silver</th>
								<th width="20%">White</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-light">
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0"><i class="fa fa-lg fa-font text-pink-lighter m-r-5"></i> .text-pink-lighter</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-pink m-r-5"></i> .text-pink / .text-inverse</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-pink-darker m-r-5"></i> .text-pink-darker</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-pink-transparent-9 m-r-5"></i> .text-pink-transparent-9</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-pink-transparent-8 m-r-5"></i> .text-pink-transparent-8</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-pink-transparent-7 m-r-5"></i> .text-pink-transparent-7</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-pink-transparent-6 m-r-5"></i> .text-pink-transparent-6</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-pink-transparent-5 m-r-5"></i> .text-pink-transparent-5</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-pink-transparent-4 m-r-5"></i> .text-pink-transparent-4</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-pink-transparent-3 m-r-5"></i> .text-pink-transparent-3</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-pink-transparent-2 m-r-5"></i> .text-pink-transparent-2</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-pink-transparent-1 m-r-5"></i> .text-pink-transparent-1</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0"><i class="fa fa-lg fa-font text-black-lighter m-r-5"></i> .text-black-lighter</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-black m-r-5"></i> .text-black / .text-inverse</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-black-darker m-r-5"></i> .text-black-darker</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-black-transparent-9 m-r-5"></i> .text-black-transparent-9</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-black-transparent-8 m-r-5"></i> .text-black-transparent-8</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-black-transparent-7 m-r-5"></i> .text-black-transparent-7</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-black-transparent-6 m-r-5"></i> .text-black-transparent-6</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-black-transparent-5 m-r-5"></i> .text-black-transparent-5</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-black-transparent-4 m-r-5"></i> .text-black-transparent-4</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-black-transparent-3 m-r-5"></i> .text-black-transparent-3</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-black-transparent-2 m-r-5"></i> .text-black-transparent-2</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-black-transparent-1 m-r-5"></i> .text-black-transparent-1</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0"><i class="fa fa-lg fa-font text-grey-lighter m-r-5"></i> .text-grey-lighter</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-grey m-r-5"></i> .text-grey</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-grey-darker m-r-5"></i> .text-grey-darker</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-grey-transparent-9 m-r-5"></i> .text-grey-transparent-9</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-grey-transparent-8 m-r-5"></i> .text-grey-transparent-8</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-grey-transparent-7 m-r-5"></i> .text-grey-transparent-7</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-grey-transparent-6 m-r-5"></i> .text-grey-transparent-6</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-grey-transparent-5 m-r-5"></i> .text-grey-transparent-5</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-grey-transparent-4 m-r-5"></i> .text-grey-transparent-4</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-grey-transparent-3 m-r-5"></i> .text-grey-transparent-3</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-grey-transparent-2 m-r-5"></i> .text-grey-transparent-2</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-grey-transparent-1 m-r-5"></i> .text-grey-transparent-1</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0 bg-inverse">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0 text-white">
										<tbody>
											<tr>
												<td nowrap class="border-top-0"><i class="fa fa-lg fa-font text-silver-lighter m-r-5"></i> .text-silver-lighter</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-silver m-r-5"></i> .text-silver / .text-muted</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-silver-darker m-r-5"></i> .text-silver-darker</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-silver-transparent-9 m-r-5"></i> .text-silver-transparent-9</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-silver-transparent-8 m-r-5"></i> .text-silver-transparent-8</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-silver-transparent-7 m-r-5"></i> .text-silver-transparent-7</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-silver-transparent-6 m-r-5"></i> .text-silver-transparent-6</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-silver-transparent-5 m-r-5"></i> .text-silver-transparent-5</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-silver-transparent-4 m-r-5"></i> .text-silver-transparent-4</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-silver-transparent-3 m-r-5"></i> .text-silver-transparent-3</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-silver-transparent-2 m-r-5"></i> .text-silver-transparent-2</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-silver-transparent-1 m-r-5"></i> .text-silver-transparent-1</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="p-0 bg-inverse">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0 text-white">
										<tbody>
											<tr>
												<td nowrap class="border-top-0"><i class="fa fa-lg fa-font text-white m-r-5"></i> .text-white</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-white-transparent-9 m-r-5"></i> .text-white-transparent-9</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-white-transparent-8 m-r-5"></i> .text-white-transparent-8</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-white-transparent-7 m-r-5"></i> .text-white-transparent-7</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-white-transparent-6 m-r-5"></i> .text-white-transparent-6</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-white-transparent-5 m-r-5"></i> .text-white-transparent-5</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-white-transparent-4 m-r-5"></i> .text-white-transparent-4</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-white-transparent-3 m-r-5"></i> .text-white-transparent-3</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-white-transparent-2 m-r-5"></i> .text-white-transparent-2</td>
											</tr>
											<tr>
												<td nowrap><i class="fa fa-lg fa-font text-white-transparent-1 m-r-5"></i> .text-white-transparent-1</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
						<thead>
							<tr>
								<th width="20%">Extra</th>
								<th width="20%"></th>
								<th width="20%"></th>
								<th width="20%"></th>
								<th width="20%"></th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-light">
								<td class="p-0 bg-light">
									<table class="table table-condensed p-0 bg-none table-no-border-left table-no-border-right table-no-border-bottom m-b-0">
										<tbody>
											<tr>
												<td nowrap class="border-top-0 text-center p-t-20">
													<i class="fa fa-5x fa-font text-gradient bg-gradient-orange-red"></i>
													<i class="fa fa-5x fa-font text-gradient bg-gradient-blue-indigo"></i>
													<i class="fa fa-5x fa-font text-gradient bg-gradient-black"></i>
													<br /><br />
													.text-gradient<br />
													.bg-gradient-*
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- end table-responsive -->
			</b-tab>
		</b-tabs>
		<!-- end tabs -->
	</div>
</template>