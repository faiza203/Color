<template>
	<!-- BEGIN pos-counter -->
	<div class="pos pos-counter" v-bind:class="{ 'pos-mobile-sidebar-toggled' : posMobileSidebar }" id="pos-counter">
		<!-- BEGIN pos-counter-header -->
		<div class="pos-counter-header">
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
		<!-- END pos-counter-header -->
		
		<!-- BEGIN pos-counter-body -->
		<div class="pos-counter-body">
			<!-- BEGIN pos-counter-content -->
			<div class="pos-counter-content">
				<vue-custom-scrollbar class="pos-counter-content-container">
					<div class="table-row">
						<div class="table in-use selected">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">1</div>
									<div class="order"><span>9 orders</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">4 / 4</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">35:20</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">$318.20</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">Unpaid</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table in-use">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">2</div>
									<div class="order"><span>12 orders</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">6 / 8</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">12:69</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">$682.20</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">Unpaid</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table available">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">3</div>
									<div class="order"><span>max 6 pax</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">0 / 6</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table available">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">4</div>
									<div class="order"><span>max 4 pax</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">0 / 4</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table available">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">5</div>
									<div class="order"><span>max 4 pax</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">0 / 4</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table in-use">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">6</div>
									<div class="order"><span>3 orders</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">3 / 6</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">20:52</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">$56.49</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">unpaid</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table in-use">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">7</div>
									<div class="order"><span>6 order</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">3 / 4</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">58:40</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">$329.02</span>
										</div>
									</div>
									<div class="table-info-col text-yellow">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-check-circle"></i>
											</span>
											<span class="text">Paid</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table in-use">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">8</div>
									<div class="order"><span>0 order</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">2 / 4</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">05:12</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">$0.00</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">unpaid</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table in-use">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">9</div>
									<div class="order"><span>4 order</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">2 / 4</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">52:58</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">$49.50</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">Unpaid</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table in-use">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">10</div>
									<div class="order"><span>12 order</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">9 / 12</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">66:69</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">$768.24</span>
										</div>
									</div>
									<div class="table-info-col text-yellow">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-check-circle"></i>
											</span>
											<span class="text">Paid</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table disabled">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">11</div>
									<div class="order"><span>Reserved for Sean</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">0 / 4</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table available">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">12</div>
									<div class="order"><span>max 6 pax</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">0 / 6</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table available">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">13</div>
									<div class="order"><span>max 6 pax</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">0 / 6</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table available">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">14</div>
									<div class="order"><span>max 6 pax</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">0 / 6</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table available">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">15</div>
									<div class="order"><span>max 6 pax</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">0 / 6</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table available">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">16</div>
									<div class="order"><span>max 6 pax</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">0 / 6</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table available">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">17</div>
									<div class="order"><span>max 6 pax</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">0 / 6</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table available">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">18</div>
									<div class="order"><span>max 6 pax</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">0 / 6</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table available">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">19</div>
									<div class="order"><span>max 6 pax</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">0 / 6</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="table available">
							<a href="javascript:;" class="table-container">
								<div class="table-status"></div>
								<div class="table-name">
									<div class="name">Table</div>
									<div class="no">20</div>
									<div class="order"><span>max 6 pax</span></div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-user"></i>
											</span>
											<span class="text">0 / 6</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="far fa-clock"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
								<div class="table-info-row">
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-hand-point-up"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
									<div class="table-info-col">
										<div class="table-info-container">
											<span class="icon">
												<i class="fa fa-dollar-sign"></i>
											</span>
											<span class="text">-</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					</div>
				</vue-custom-scrollbar>
			</div>
			<!-- END pos-counter-content -->
		
			<!-- BEGIN pos-counter-sidebar -->
			<div class="pos-counter-sidebar" id="pos-counter-sidebar">
				<div class="pos-sidebar-header">
					<div class="back-btn">
						<button type="button" v-on:click="posMobileSidebarToggled" class="btn">
							<svg viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
							</svg>
						</button>
					</div>
					<div class="icon"><img src="/assets/img/pos/icon-table.svg" /></div>
					<div class="title">Table 00</div>
					<div class="order">Order: <b>#0000</b></div>
				</div>
				<div class="pos-sidebar-body">
					<div class="pos-table" data-id="pos-table-info">
						<div class="row pos-table-row">
							<div class="col-8">
								<div class="pos-product-thumb">
									<div class="img" style="background-image: url(/assets/img/pos/product-2.jpg)"></div>
									<div class="info">
										<div class="title">Grill Pork Chop</div>
										<div class="desc">- size: large</div>
									</div>
								</div>
							</div>
							<div class="col-1 total-qty">x1</div>
							<div class="col-3 total-price">$12.99</div>
						</div>
						<div class="row pos-table-row">
							<div class="col-8">
								<div class="pos-product-thumb">
									<div class="img" style="background-image: url(/assets/img/pos/product-8.jpg)"></div>
									<div class="info">
										<div class="title">Orange Juice</div>
										<div class="desc">
											- size: large<br />
											- less ice
										</div>
									</div>
								</div>
							</div>
							<div class="col-1 total-qty">x2</div>
							<div class="col-3 total-price">$10.00</div>
						</div>
						<div class="row pos-table-row">
							<div class="col-8">
								<div class="pos-product-thumb">
									<div class="img" style="background-image: url(/assets/img/pos/product-13.jpg)"></div>
									<div class="info">
										<div class="title">Vanilla Ice-cream</div>
										<div class="desc">
											- scoop: 1 <br />
											- flavour: vanilla
										</div>
									</div>
								</div>
							</div>
							<div class="col-1 total-qty">x1</div>
							<div class="col-3 total-price">$3.99</div>
						</div>
						<div class="row pos-table-row">
							<div class="col-8">
								<div class="pos-product-thumb">
									<div class="img" style="background-image: url(/assets/img/pos/product-1.jpg)"></div>
									<div class="info">
										<div class="title">Grill chicken chop</div>
										<div class="desc">
											- size: large<br />
											- spicy: medium
										</div>
									</div>
								</div>
							</div>
							<div class="col-1 total-qty">x1</div>
							<div class="col-3 total-price">$10.99</div>
						</div>
						<div class="row pos-table-row">
							<div class="col-8">
								<div class="pos-product-thumb">
									<div class="img" style="background-image: url(/assets/img/pos/product-10.jpg)"></div>
									<div class="info">
										<div class="title">Mushroom Soup</div>
										<div class="desc">
											- size: large<br />
											- more cheese
										</div>
									</div>
								</div>
							</div>
							<div class="col-1 total-qty">x1</div>
							<div class="col-3 total-price">$3.99</div>
						</div>
						<div class="row pos-table-row">
							<div class="col-8">
								<div class="pos-product-thumb">
									<div class="img" style="background-image: url(/assets/img/pos/product-5.jpg)"></div>
									<div class="info">
										<div class="title">Hawaiian Pizza</div>
										<div class="desc">
											- size: large<br />
											- more onion
										</div>
									</div>
								</div>
							</div>
							<div class="col-1 total-qty">x1</div>
							<div class="col-3 total-price">$15.00</div>
						</div>
						<div class="row pos-table-row">
							<div class="col-8">
								<div class="pos-product-thumb">
									<div class="img" style="background-image: url(/assets/img/pos/product-15.jpg)"></div>
									<div class="info">
										<div class="title">Perfect Yeast Doughnuts</div>
										<div class="desc">
											- size: 1 set<br />
											- flavour: random
										</div>
									</div>
								</div>
							</div>
							<div class="col-1 total-qty">x1</div>
							<div class="col-3 total-price">$2.99</div>
						</div>
						<div class="row pos-table-row">
							<div class="col-8">
								<div class="pos-product-thumb">
									<div class="img" style="background-image: url(/assets/img/pos/product-14.jpg)"></div>
									<div class="info">
										<div class="title">Macarons</div>
										<div class="desc">
											- size: 1 set<br />
											- flavour: random
										</div>
									</div>
								</div>
							</div>
							<div class="col-1 total-qty">x1</div>
							<div class="col-3 total-price">$4.99</div>
						</div>
					</div>
					<div class="h-100 d-none align-items-center justify-content-center text-center p-20" data-id="pos-table-empty">
						<div>
							<div class="mb-3">
								<svg width="6em" height="6em" viewBox="0 0 16 16" class="text-gray-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"/>
									<path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"/>
								</svg>
							</div>
							<h4>No table selected</h4>
						</div>
					</div>
				</div>
				<div class="pos-sidebar-footer">
					<div class="subtotal">
						<div class="text">Subtotal</div>
						<div class="price" data-id="price-subtotal">$64.94</div>
					</div>
					<div class="taxes">
						<div class="text">Taxes (6%)</div>
						<div class="price" data-id="price-subtotal">$3.90</div>
					</div>
					<div class="total">
						<div class="text">Total</div>
						<div class="price" data-id="price-subtotal">$68.84</div>
					</div>
					<div class="btn-row">
						<a href="javascript:;" class="btn btn-default width-150"><i class="fa fa-qrcode fa-fw fa-lg"></i> Digital Wallet</a>
						<a href="javascript:;" class="btn btn-default width-150"><i class="fab fa-cc-visa fa-fw fa-lg"></i> Credit Card</a>
						<a href="javascript:;" class="btn btn-success"><i class="fa fa-cash-register fa-fw fa-lg"></i> Pay by Cash</a>
					</div>
				</div>
			</div>
			<!-- END pos-sidebar -->
		</div>
		<!-- END pos-counter-body -->
	</div>
	<!-- END pos-counter -->
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