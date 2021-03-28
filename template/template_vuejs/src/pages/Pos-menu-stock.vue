<template>
	<!-- BEGIN pos-stock -->
	<div class="pos pos-stock" id="pos-stock">
		<!-- BEGIN pos-stock-header -->
		<div class="pos-stock-header">
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
		<!-- END pos-stock-header -->
		
		<!-- BEGIN pos-stock-body -->
		<div class="pos-stock-body">
			<!-- BEGIN pos-stock-content -->
			<div class="pos-stock-content">
				<vue-custom-scrollbar class="pos-stock-content-container">
					<div class="row row-space-0">
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-1.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Grill Chicken Chop&reg;</div>
											<div class="desc">chicken, egg, mushroom, salad</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="20" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product1" checked value="1" />
															<label for="product1"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-2.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Grill Pork Chop&reg;</div>
											<div class="desc">pork, egg, mushroom, salad</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="30" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product2" checked value="1" />
															<label for="product2"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-3.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Capellini Tomato Sauce&reg;</div>
											<div class="desc">spaghetti, tomato, mushroom</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="15" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product3" checked value="1" />
															<label for="product3"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-4.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Vegan Salad Bowl&reg;</div>
											<div class="desc">apple, carrot, tomato</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="10" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product4" checked value="1" />
															<label for="product4"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-5.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Hawaiian Pizza&reg;</div>
											<div class="desc">pizza, crab meat, pineapple</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="10" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product5" checked value="1" />
															<label for="product5"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-6.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Avocado Shake</div>
											<div class="desc">avocado, milk, vanilla</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="0" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product6" value="1" />
															<label for="product6"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-7.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Coffee Latte</div>
											<div class="desc">espresso, milk</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="50" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product7" checked value="1" />
															<label for="product7"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-8.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Vita C Detox Juice</div>
											<div class="desc">apricot, apple, carrot and ginger juice</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="50" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product8" checked value="1" />
															<label for="product8"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-9.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Pancake</div>
											<div class="desc">Non dairy, egg, baking soda, sugar, all purpose flour</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="13" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product9" checked value="1" />
															<label for="product9"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-10.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Mushroom soup</div>
											<div class="desc">Evaporated milk, marsala wine, beef cubes, chicken broth, butter</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="30" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product10" checked value="1" />
															<label for="product10"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-11.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Baked chicken wing</div>
											<div class="desc">Chicken wings, a1 steak sauce, honey, cayenne pepper</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="32" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product11" checked value="1" />
															<label for="product11"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-12.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Veggie Spaghetti</div>
											<div class="desc">Yellow squash, pasta, roasted red peppers, zucchini</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="7" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product12" checked value="1" />
															<label for="product12"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-13.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Vanilla Ice Cream</div>
											<div class="desc">Heavy whipping cream, white sugar, vanilla extract</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="50" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product13" checked value="1" />
															<label for="product13"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-14.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Perfect Yeast Doughnuts</div>
											<div class="desc">Chocolate hazelnut spread, bread flour, doughnuts, quick rise yeast, butter</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="10" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product14" checked value="1" />
															<label for="product14"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-15.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Macarons</div>
											<div class="desc">Almond flour, egg whites, heavy cream, food coloring, powdered sugar</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="20" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product15" checked value="1" />
															<label for="product15"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url(/assets/img/pos/product-16.jpg)"></div>
										</div>
										<div class="product-info">
											<div class="title">Perfect Vanilla Cupcake</div>
											<div class="desc">Baking powder, all purpose flour, plain kefir, vanilla extract</div>
											
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" value="16" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="switcher switcher-success d-block">
															<input type="checkbox" name="" id="product16" checked value="1" />
															<label for="product16"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</vue-custom-scrollbar>
			</div>
			<!-- END pos-stock-content -->
		</div>
		<!-- END pos-stock-body -->
	</div>
	<!-- END pos-stock -->
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