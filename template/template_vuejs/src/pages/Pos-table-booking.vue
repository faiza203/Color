<template>
	<!-- BEGIN pos-booking -->
	<div class="pos pos-booking" id="pos-booking">
		<!-- BEGIN pos-booking-header -->
		<div class="pos-booking-header">
			<div class="logo">
				<router-link to="/pos/counter-checkout">
					<div class="logo-img"><img src="/assets/img/pos/logo.svg" /></div>
					<div class="logo-text">Pine & Dine</div>
				</router-link>
			</div>
			<div class="time" id="time">{{ time }}</div>
			<div class="nav">
				<div class="nav-item">
					<router-link to="/pos/kitchen-order" class="nav-link">
						<svg viewBox="0 0 16 16" class="nav-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 0 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z"/>
						</svg>
					</router-link>
				</div>
				<div class="nav-item">
					<router-link to="/pos/table-booking" class="nav-link">
						<svg viewBox="0 0 16 16" class="nav-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
							<path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
						</svg>
					</router-link>
				</div>
				<div class="nav-item">
					<router-link to="/pos/menu-stock" class="nav-link">
						<svg viewBox="0 0 16 16" class="nav-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
							<path fill-rule="evenodd" d="M7.5 7.793V1h1v6.5H15v1H8.207l-4.853 4.854-.708-.708L7.5 7.793z"/>
						</svg>
					</router-link>
				</div>
			</div>
		</div>
		<!-- END pos-booking-header -->
		
		<!-- BEGIN pos-booking-body -->
		<div class="pos-booking-body">
			<!-- BEGIN pos-booking-content -->
			<div class="pos-booking-content">
				<div class="pos-booking-content-container" data-scrollbar="true" data-height="100%" data-skip-mobile="true">
					<div class="d-md-flex align-items-center mb-4">
						<div class="pos-booking-title flex-1">
							<div class="f-s-24 mb-1">Available Table (8/20)</div>
							<div class="mb-2 mb-md-0 d-flex">
								<div class="d-flex align-items-center mr-3">
									<i class="fa fa-circle fa-fw text-gray-700 f-s-9 mr-1"></i> Completed
								</div>
								<div class="d-flex align-items-center mr-3">
									<i class="fa fa-circle fa-fw text-warning f-s-9 mr-1"></i> Upcoming
								</div>
								<div class="d-flex align-items-center mr-3">
									<i class="fa fa-circle fa-fw text-success f-s-9 mr-1"></i> In-progress
								</div>
							</div>
						</div>
						<div>
							<div class="input-group date mb-0" data-render="datepicker" data-date-format="dd-mm-yyyy" data-date-start-date="Date.default">
								<input type="text" class="form-control" placeholder="Today's" />
								<span class="input-group-addon">
									<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-calendar-date-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm.066-2.544c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2zm-2.957-2.89v5.332H5.77v-4.61h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"/>
									</svg>
								</span>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">01</div>
												<div class="desc">max 4 pax</div>
											</div>
											<div class="pr-1 text-success">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
													<path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">Reserved by Sean</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
											<div class="info">Reserved by Jess (4pax)</div>
											<div class="status upcoming"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">Reserved by Jess (4pax)</div>
											<div class="status upcoming"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">02</div>
												<div class="desc">max 8 pax</div>
											</div>
											<div class="text-gray-800">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
													<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">Reserved by John (8pax)</div>
											<div class="status in-progress"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">Reserved by Terry (6pax)</div>
											<div class="status upcoming"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">03</div>
												<div class="desc">max 8 pax</div>
											</div>
											<div class="text-gray-800">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
													<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">Walk in lunch</div>
											<div class="status in-progress"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">Reserved by Lisa (8pax)</div>
											<div class="status upcoming"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">Reserved by Lisa (8pax)</div>
											<div class="status upcoming"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">Reserved by Terry</div>
											<div class="status upcoming"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">04</div>
												<div class="desc">max 4 pax</div>
											</div>
											<div class="text-gray-800">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
													<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">Walk in lunch</div>
											<div class="status in-progress"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">Reserved by Richard (4pax)</div>
											<div class="status upcoming"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">Reserved by Richard (4pax)</div>
											<div class="status upcoming"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">Reserved by Paul (3pax)</div>
											<div class="status upcoming"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">Reserved by Paul (3pax)</div>
											<div class="status upcoming"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">Reserved by Paul (3pax)</div>
											<div class="status upcoming"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">05</div>
												<div class="desc">max 4 pax</div>
											</div>
											<div class="text-gray-800">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
													<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">Walk in lunch</div>
											<div class="status in-progress"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">06</div>
												<div class="desc">max 4 pax</div>
											</div>
											<div class="text-success">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
													<path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">07</div>
												<div class="desc">max 6 pax</div>
											</div>
											<div class="text-gray-800">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
													<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">Walk in lunch</div>
											<div class="status in-progress"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">08</div>
												<div class="desc">max 4 pax</div>
											</div>
											<div class="text-gray-800">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
													<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">Walk in lunch</div>
											<div class="status in-progress"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">09</div>
												<div class="desc">max 4 pax</div>
											</div>
											<div class="text-success">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
													<path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">10</div>
												<div class="desc">max 4 pax</div>
											</div>
											<div class="text-gray-800">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
													<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">Walk in lunch</div>
											<div class="status in-progress"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">11</div>
												<div class="desc">max 4 pax</div>
											</div>
											<div class="text-success">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
													<path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">12</div>
												<div class="desc">max 4 pax</div>
											</div>
											<div class="text-success">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
													<path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">13</div>
												<div class="desc">max 4 pax</div>
											</div>
											<div class="text-success">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
													<path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">14</div>
												<div class="desc">max 6 pax</div>
											</div>
											<div class="text-gray-800">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
													<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">Walk in lunch</div>
											<div class="status in-progress"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">15</div>
												<div class="desc">max 6 pax</div>
											</div>
											<div class="text-gray-800">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
													<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">Walk in lunch</div>
											<div class="status in-progress"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">16</div>
												<div class="desc">max 4 pax</div>
											</div>
											<div class="text-success">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
													<path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">17</div>
												<div class="desc">max 4 pax</div>
											</div>
											<div class="text-success">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
													<path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">18</div>
												<div class="desc">max 6 pax</div>
											</div>
											<div class="text-gray-800">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
													<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">Walk in lunch</div>
											<div class="status in-progress"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">19</div>
												<div class="desc">max 6 pax</div>
											</div>
											<div class="text-gray-800">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
													<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">Walk in lunch</div>
											<div class="status in-progress"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<a href="javascript:;" v-b-modal.modalPosBooking class="table-booking">
								<div class="table-booking-container">
									<div class="table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">20</div>
												<div class="desc">max 6 pax</div>
											</div>
											<div class="text-gray-800">
												<svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
													<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
												</svg>
											</div>
										</div>
									</div>
									<div class="table-booking-body">
										<div class="booking">
											<div class="time">08:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">09:00am</div>
											<div class="info">Walk in breakfast</div>
											<div class="status completed"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">10:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">11:00am</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking highlight">
											<div class="time">12:00pm</div>
											<div class="info">Walk in lunch</div>
											<div class="status in-progress"><i class="fa fa-circle"></i></div>
										</div>
										<div class="booking">
											<div class="time">01:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">02:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">03:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">04:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">05:00pm</div>
												<div class="info-title">-</div>
												<div class="info-desc"></div>
										</div>
										<div class="booking">
											<div class="time">06:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">07:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">08:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">09:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
										<div class="booking">
											<div class="time">10:00pm</div>
											<div class="info">-</div>
											<div class="status"></div>
										</div>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<!-- END pos-counter-content -->
		</div>
		<!-- END pos-booking-body -->
		
		<!-- BEGIN #modalPosBooking -->
		<b-modal modal-class="modal-pos-booking" :hide-header="true" size="lg" id="modalPosBooking">
			<div class="d-flex align-items-center mb-3">
				<h4 class="modal-title d-flex align-items-center"><img src="/assets/img/pos/icon-table-black.svg" height="30" class="mr-2" /> Table 01 <small class="f-s-13 f-w-600 ml-2">max 4 pax</small></h4>
				<a href="javascript:;" data-dismiss="modal" class="ml-auto close"><i class="fa fa-times"></i></a>
			</div>
			<div class="row row-space-10">
				<div class="col-lg-6">
					<div class="form-group mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text f-w-600">08:00am</span>
							</div>
							<input type="text" class="form-control" placeholder="" />
						</div>
					</div>
					<div class="form-group mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text f-w-600">09:00am</span>
							</div>
							<input type="text" class="form-control" placeholder="" value="Reserved by Sean" />
						</div>
					</div>
					<div class="form-group mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text f-w-600">10:00am</span>
							</div>
							<input type="text" class="form-control" placeholder="" />
						</div>
					</div>
					<div class="form-group mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text f-w-600">11:00am</span>
							</div>
							<input type="text" class="form-control" placeholder="" />
						</div>
					</div>
					<div class="form-group mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text f-w-600">12:00pm</span>
							</div>
							<input type="text" class="form-control" placeholder="" />
						</div>
					</div>
					<div class="form-group mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text f-w-600">01:00pm</span>
							</div>
							<input type="text" class="form-control" placeholder="" />
						</div>
					</div>
					<div class="form-group mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text f-w-600">02:00pm</span>
							</div>
							<input type="text" class="form-control" placeholder="" />
						</div>
					</div>
					<div class="form-group mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text f-w-600">03:00pm</span>
							</div>
							<input type="text" class="form-control" placeholder="" />
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="form-group mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text f-w-600">04:00pm</span>
							</div>
							<input type="text" class="form-control" placeholder="" />
						</div>
					</div>
					<div class="form-group mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text f-w-600">05:00pm</span>
							</div>
							<input type="text" class="form-control" placeholder="" value="Reserved by Jess (4pax)" />
						</div>
					</div>
					<div class="form-group mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text f-w-600">06:00pm</span>
							</div>
							<input type="text" class="form-control" placeholder="" value="Reserved by Jess (4pax)" />
						</div>
					</div>
					<div class="form-group mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text f-w-600">07:00pm</span>
							</div>
							<input type="text" class="form-control" placeholder="" />
						</div>
					</div>
					<div class="form-group mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text f-w-600">08:00pm</span>
							</div>
							<input type="text" class="form-control" placeholder="" />
						</div>
					</div>
					<div class="form-group mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text f-w-600">09:00pm</span>
							</div>
							<input type="text" class="form-control" placeholder="" />
						</div>
					</div>
					<div class="form-group mb-2">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text f-w-600">10:00pm</span>
							</div>
							<input type="text" class="form-control" placeholder="" />
						</div>
					</div>
				</div>
			</div>
		</b-modal>
		<!-- END #modalPosBooking -->
	</div>
	<!-- END pos-booking -->
</template>

<script>
import PageOptions from '../config/PageOptions.vue'

export default {
	created() {
		PageOptions.pageEmpty = true;
		PageOptions.pageFullHeight = true;
		this.handleStartTime();
	},
	beforeRouteLeave (to, from, next) {
		PageOptions.pageEmpty = false;
		PageOptions.pageFullHeight = false;
		next();
	},
	data: function () {
    return {
      time: '00:00',
      posMobileSidebar: false
    }
  },
  methods: {
		posMobileSidebarToggled: function() {
			this.posMobileSidebar = !this.posMobileSidebar;
		},
		handleCheckTime: function(i) {
			if (i < 10) {
				i = '0' + i;
			}
			return i;
		},
		handleStartTime: function() {
			var today = new Date();
			var h = today.getHours();
			var m = today.getMinutes();
			var a;
			m = this.handleCheckTime(m);
			a = (h > 11) ? 'pm' : 'am';
			h = (h > 12) ? h - 12 : h;
			
			this.time = h + ':' + m + a;
			setTimeout(() => {
				this.handleStartTime();
			}, 500);
		}
  }
}
</script>