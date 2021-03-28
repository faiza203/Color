<template>
	<div class="h-100">
		<!-- BEGIN pos -->
		<div class="pos pos-customer" v-bind:class="{ 'pos-mobile-sidebar-toggled' : posMobileSidebar }" id="pos-customer">
			<!-- BEGIN pos-menu -->
			<div class="pos-menu">
				<div class="logo">
					<router-link to="/dashboard/v3">
						<div class="logo-img"><img src="/assets/img/pos/logo.svg" /></div>
						<div class="logo-text">Pine & Dine</div>
					</router-link>
				</div>
				<div class="nav-container">
					<div data-scrollbar="true" data-height="100%" data-skip-mobile="true">
						<ul class="nav nav-tabs">
							<li class="nav-item">
								<a class="nav-link active" href="javascript:;" data-filter="all">
									<i class="fa fa-fw fa-utensils mr-1 ml-n2"></i> All Dishes
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="javascript:;" data-filter="meat">
									<i class="fa fa-fw fa-drumstick-bite mr-1 ml-n2"></i> Meat
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="javascript:;" data-filter="burger">
									<i class="fa fa-fw fa-hamburger mr-1 ml-n2"></i> Burger
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="javascript:;" data-filter="pizza">
									<i class="fa fa-fw fa-pizza-slice mr-1 ml-n2"></i> Pizza
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="javascript:;" data-filter="drinks">
									<i class="fa fa-fw fa-cocktail mr-1 ml-n2"></i> Drinks
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="javascript:;" data-filter="desserts">
									<i class="fa fa-fw fa-ice-cream mr-1 ml-n2"></i> Desserts
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="javascript:;" data-filter="snacks">
									<i class="fa fa-fw fa-cookie-bite mr-1 ml-n2"></i> Snacks
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- END pos-menu -->
			
			<!-- BEGIN pos-content -->
			<div class="pos-content">
				<div class="pos-content-container" data-scrollbar="true" data-height="100%" data-skip-mobile="true">
					<div class="product-row">
						<div class="product-container" data-type="meat">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-1.jpg)"></div>
								<div class="text">
									<div class="title">Grill Chicken Chop&reg;</div>
									<div class="desc">chicken, egg, mushroom, salad</div>
									<div class="price">$10.99</div>
								</div>
							</a>
						</div>
						<div class="product-container" data-type="meat">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-2.jpg)"></div>
								<div class="text">
									<div class="title">Grill Pork Chop&reg;</div>
									<div class="desc">pork, egg, mushroom, salad</div>
									<div class="price">$12.99</div>
								</div>
							</a>
						</div>
						<div class="product-container" data-type="meat">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-3.jpg)"></div>
								<div class="text">
									<div class="title">Capellini Tomato Sauce&reg;</div>
									<div class="desc">spaghetti, tomato, mushroom </div>
									<div class="price">$11.99</div>
								</div>
							</a>
						</div>
						<div class="product-container" data-type="meat">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-4.jpg)"></div>
								<div class="text">
									<div class="title">Vegan Salad Bowl&reg;</div>
									<div class="desc">apple, carrot, tomato </div>
									<div class="price">$6.99</div>
								</div>
							</a>
						</div>
						<div class="product-container" data-type="pizza">
							<div class="product not-available">
								<div class="img" style="background-image: url(/assets/img/pos/product-5.jpg)"></div>
								<div class="text">
									<div class="title">Hawaiian Pizza&reg;</div>
									<div class="desc">pizza, crab meat, pineapple </div>
									<div class="price">$20.99</div>
								</div>
								<div class="not-available-text">
									<div>Not Available</div>
								</div>
							</div>
						</div>
						<div class="product-container" data-type="burger">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-17.jpg)"></div>
								<div class="text">
									<div class="title">Perfect Burger</div>
									<div class="desc">Dill pickle, cheddar cheese, tomato, red onion, ground chuck beef</div>
									<div class="price">$8.99</div>
								</div>
							</a>
						</div>
						<div class="product-container" data-type="drinks">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-6.jpg)"></div>
								<div class="text">
									<div class="title">Avocado Shake</div>
									<div class="desc">avocado, milk, vanilla</div>
									<div class="price">$3.99</div>
								</div>
							</a>
						</div>
						<div class="product-container" data-type="drinks">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-7.jpg)"></div>
								<div class="text">
									<div class="title">Coffee Latte</div>
									<div class="desc">espresso, milk</div>
									<div class="price">$2.99</div>
								</div>
							</a>
						</div>
						<div class="product-container" data-type="drinks">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-8.jpg)"></div>
								<div class="text">
									<div class="title">Vita C Detox Juice</div>
									<div class="desc">apricot, apple, carrot and ginger juice</div>
									<div class="price">$2.99</div>
								</div>
							</a>
						</div>
						<div class="product-container" data-type="snacks">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-9.jpg)"></div>
								<div class="text">
									<div class="title">Pancake</div>
									<div class="desc">Non dairy, egg, baking soda, sugar, all purpose flour</div>
									<div class="price">$5.99</div>
								</div>
							</a>
						</div>
						<div class="product-container" data-type="snacks">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-10.jpg)"></div>
								<div class="text">
									<div class="title">Mushroom soup</div>
									<div class="desc">Evaporated milk, marsala wine, beef cubes, chicken broth, butter</div>
									<div class="price">$3.99</div>
								</div>
							</a>
						</div>
						<div class="product-container" data-type="snacks">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-11.jpg)"></div>
								<div class="text">
									<div class="title">Baked chicken wing</div>
									<div class="desc">Chicken wings, a1 steak sauce, honey, cayenne pepper</div>
									<div class="price">$6.99</div>
								</div>
							</a>
						</div>
						<div class="product-container" data-type="meat">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-12.jpg)"></div>
								<div class="text">
									<div class="title">Veggie Spaghetti</div>
									<div class="desc">Yellow squash, pasta, roasted red peppers, zucchini</div>
									<div class="price">$12.99</div>
								</div>
							</a>
						</div>
						<div class="product-container" data-type="desserts">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-13.jpg)"></div>
								<div class="text">
									<div class="title">Vanilla Ice Cream</div>
									<div class="desc">Heavy whipping cream, white sugar, vanilla extract</div>
									<div class="price">$3.99</div>
								</div>
							</a>
						</div>
						<div class="product-container" data-type="desserts">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-15.jpg)"></div>
								<div class="text">
									<div class="title">Perfect Yeast Doughnuts</div>
									<div class="desc">Chocolate hazelnut spread, bread flour, doughnuts, quick rise yeast, butter</div>
									<div class="price">$2.99</div>
								</div>
							</a>
						</div>
						<div class="product-container" data-type="desserts">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-14.jpg)"></div>
								<div class="text">
									<div class="title">Macarons</div>
									<div class="desc">Almond flour, egg whites, heavy cream, food coloring, powdered sugar</div>
									<div class="price">$4.99</div>
								</div>
							</a>
						</div>
						<div class="product-container" data-type="desserts">
							<a href="javascript:;" class="product" v-b-modal.modalPosItem>
								<div class="img" style="background-image: url(/assets/img/pos/product-16.jpg)"></div>
								<div class="text">
									<div class="title">Perfect Vanilla Cupcake</div>
									<div class="desc">Baking powder, all purpose flour, plain kefir, vanilla extract</div>
									<div class="price">$2.99</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<!-- END pos-content -->
			
			<!-- BEGIN pos-sidebar -->
			<div class="pos-sidebar" id="pos-sidebar">
				<div class="pos-sidebar-header">
					<div class="back-btn">
						<button type="button" v-on:click="posMobileSidebarToggled" class="btn">
							<svg viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
							</svg>
						</button>
					</div>
					<div class="icon"><img src="/assets/img/pos/icon-table.svg" /></div>
					<div class="title">Table 01</div>
					<div class="order">Order: <b>#0056</b></div>
				</div>
				<div class="pos-sidebar-nav">
					<ul class="nav nav-tabs nav-fill">
						<li class="nav-item">
							<a class="nav-link active" href="javascript:;" data-toggle="tab" data-target="#newOrderTab">New Order (5)</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="javascript:;" data-toggle="tab" data-target="#orderHistoryTab">Order History (0)</a>
						</li>
					</ul>
				</div>
				<div class="pos-sidebar-body tab-content" data-scrollbar="true" data-height="100%">
					<div class="tab-pane fade h-100 show active" id="newOrderTab">
						<div class="pos-table">
							<div class="row pos-table-row">
								<div class="col-9">
									<div class="pos-product-thumb">
										<div class="img" style="background-image: url(/assets/img/pos/product-2.jpg)"></div>
										<div class="info">
											<div class="title">Grill Pork Chop</div>
											<div class="single-price">$12.99</div>
											<div class="desc">- size: large</div>
											<div class="input-group qty">
												<div class="input-group-append">
													<a href="javascript:;" class="btn btn-default"><i class="fa fa-minus"></i></a>
												</div>
												<input type="text" class="form-control" value="01" />
												<div class="input-group-prepend">
													<a href="javascript:;" class="btn btn-default"><i class="fa fa-plus"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-3 total-price">$12.99</div>
							</div>
							<div class="row pos-table-row">
								<div class="col-9">
									<div class="pos-product-thumb">
										<div class="img" style="background-image: url(/assets/img/pos/product-8.jpg)"></div>
										<div class="info">
											<div class="title">Orange Juice</div>
											<div class="single-price">$5.00</div>
											<div class="desc">
												- size: large<br />
												- less ice
											</div>
											<div class="input-group qty">
												<div class="input-group-append">
													<a href="javascript:;" class="btn btn-default"><i class="fa fa-minus"></i></a>
												</div>
												<input type="text" class="form-control" value="02" />
												<div class="input-group-prepend">
													<a href="javascript:;" class="btn btn-default"><i class="fa fa-plus"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-3 total-price">$10.00</div>
								<div class="pos-remove-confirmation">
									<svg width="2em" height="2em" viewBox="0 0 16 16" class="mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
										<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
									</svg>
									Remove this item? 
									<a href="javascript:;" class="btn btn-white ml-auto mr-2">No</a>
									<a href="javascript:;" class="btn btn-danger">Yes</a>
								</div>
							</div>
							<div class="row pos-table-row">
								<div class="col-9">
									<div class="pos-product-thumb">
										<div class="img" style="background-image: url(/assets/img/pos/product-1.jpg)"></div>
										<div class="info">
											<div class="title">Grill chicken chop</div>
											<div class="single-price">$10.99</div>
											<div class="desc">
												- size: large<br />
												- spicy: medium
											</div>
											<div class="input-group qty">
												<div class="input-group-append">
													<a href="javascript:;" class="btn btn-default"><i class="fa fa-minus"></i></a>
												</div>
												<input type="text" class="form-control" value="01" />
												<div class="input-group-prepend">
													<a href="javascript:;" class="btn btn-default"><i class="fa fa-plus"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-3 total-price">$10.99</div>
							</div>
							<div class="row pos-table-row">
								<div class="col-9">
									<div class="pos-product-thumb">
										<div class="img" style="background-image: url(/assets/img/pos/product-5.jpg)"></div>
										<div class="info">
											<div class="title">Hawaiian Pizza</div>
											<div class="single-price">$15.00</div>
											<div class="desc">
												- size: large<br />
												- more onion
											</div>
											<div class="input-group qty">
												<div class="input-group-append">
													<a href="javascript:;" class="btn btn-default"><i class="fa fa-minus"></i></a>
												</div>
												<input type="text" class="form-control" value="01" />
												<div class="input-group-prepend">
													<a href="javascript:;" class="btn btn-default"><i class="fa fa-plus"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-3 total-price">$15.00</div>
							</div>
							<div class="row pos-table-row">
								<div class="col-9">
									<div class="pos-product-thumb">
										<div class="img" style="background-image: url(/assets/img/pos/product-10.jpg)"></div>
										<div class="info">
											<div class="title">Mushroom Soup</div>
											<div class="single-price">$3.99</div>
											<div class="desc">
												- size: large<br />
												- more cheese
											</div>
											<div class="input-group qty">
												<div class="input-group-append">
													<a href="javascript:;" class="btn btn-default"><i class="fa fa-minus"></i></a>
												</div>
												<input type="text" class="form-control" value="01" />
												<div class="input-group-prepend">
													<a href="javascript:;" class="btn btn-default"><i class="fa fa-plus"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-3 total-price">$3.99</div>
							</div>
						</div>
					</div>
					<div class="tab-pane fade h-100" id="orderHistoryTab">
						<div class="h-100 d-flex align-items-center justify-content-center text-center p-20">
							<div>
								<div class="mb-3 mt-n5">
									<svg width="6em" height="6em" viewBox="0 0 16 16" class="text-gray-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"/>
										<path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"/>
									</svg>
								</div>
								<h4>No order history found</h4>
							</div>
						</div>
					</div>
				</div>
				<div class="pos-sidebar-footer">
					<div class="subtotal">
						<div class="text">Subtotal</div>
						<div class="price">$30.98</div>
					</div>
					<div class="taxes">
						<div class="text">Taxes (6%)</div>
						<div class="price">$2.12</div>
					</div>
					<div class="total">
						<div class="text">Total</div>
						<div class="price">$33.10</div>
					</div>
					<div class="btn-row">
						<a href="javascript:;" class="btn btn-default"><i class="fa fa-bell fa-fw fa-lg"></i> Service</a>
						<a href="javascript:;" class="btn btn-default"><i class="fa fa-file-invoice-dollar fa-fw fa-lg"></i> Bill</a>
						<a href="javascript:;" class="btn btn-success"><i class="fa fa-check fa-fw fa-lg"></i> Submit Order</a>
					</div>
				</div>
			</div>
			<!-- END pos-sidebar -->
		</div>
		<!-- END pos -->
		
		<!-- BEGIN pos-mobile-sidebar-toggler -->
		<a href="javascript:;" class="pos-mobile-sidebar-toggler" v-on:click="posMobileSidebarToggled">
			<svg viewBox="0 0 16 16" class="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"/>
				<path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"/>
			</svg>
			<span class="badge">5</span>
		</a>
		<!-- END pos-mobile-sidebar-toggler -->
		
		<!-- BEGIN #modalPosItem -->
		<b-modal modal-class="modal-pos-item" :hide-header="true" :hide-footer="true" size="lg" body-class="p-0" id="modalPosItem">
			<a href="javascript:;" class="close" @click="$bvModal.hide('modalPosItem')"><i class="fa fa-times"></i></a>
			<div class="pos-product">
				<div class="pos-product-img">
					<div class="img" style="background-image: url(../assets/img/pos/product-1.jpg)"></div>
				</div>
				<div class="pos-product-info">
					<div class="title">Grill Chicken Chop</div>
					<div class="desc">
						chicken, egg, mushroom, salad
					</div>
					<div class="price">$10.99</div>
					<hr />
					<div class="option-row">
						<div class="qty">
							<div class="input-group">
								<a href="javascript:;" class="btn btn-default"><i class="fa fa-minus"></i></a>
								<input type="text" class="form-control border-0 text-center" name="" value="1" />
								<a href="javascript:;" class="btn btn-default"><i class="fa fa-plus"></i></a>
							</div>
						</div>
					</div>
					<div class="option-row">
						<div class="option-title">Size</div>
						<div class="option-list">
							<div class="option">
								<input type="radio" id="size3" name="size" class="option-input" checked />
								<label class="option-label" for="size3">
									<span class="option-text">Small</span>
									<span class="option-price">+0.00</span>
								</label>
							</div>
							<div class="option">
								<input type="radio" id="size1" name="size" class="option-input" />
								<label class="option-label" for="size1">
									<span class="option-text">Large</span>
									<span class="option-price">+3.00</span>
								</label>
							</div>
							<div class="option">
								<input type="radio" id="size2" name="size" class="option-input" />
								<label class="option-label" for="size2">
									<span class="option-text">Medium</span>
									<span class="option-price">+1.50</span>
								</label>
							</div>
						</div>
					</div>
					<div class="option-row">
						<div class="option-title">Add On</div>
						<div class="option-list">
							<div class="option">
								<input type="checkbox" name="addon[sos]" value="true" class="option-input" id="addon1" />
								<label class="option-label" for="addon1">
									<span class="option-text">More BBQ sos</span>
									<span class="option-price">+0.00</span>
								</label>
							</div>
							<div class="option">
								<input type="checkbox" name="addon[ff]" value="true" class="option-input" id="addon2" />
								<label class="option-label" for="addon2">
									<span class="option-text">Extra french fries</span>
									<span class="option-price">+1.00</span>
								</label>
							</div>
							<div class="option">
								<input type="checkbox" name="addon[ms]" value="true" class="option-input" id="addon3" />
								<label class="option-label" for="addon3">
									<span class="option-text">Mushroom soup</span>
									<span class="option-price">+3.50</span>
								</label>
							</div>
							<div class="option">
								<input type="checkbox" name="addon[ms]" value="true" class="option-input" id="addon4" />
								<label class="option-label" for="addon4">
									<span class="option-text">Lemon Juice (set)</span>
									<span class="option-price">+2.50</span>
								</label>
							</div>
						</div>
					</div>
					<div class="btn-row">
						<a href="javascript:;" class="btn btn-default" data-dismiss="modal">Cancel</a>
						<a href="javascript:;" class="btn btn-success">Add to cart <i class="fa fa-plus fa-fw ml-2"></i></a>
					</div>
				</div>
			</div>
		</b-modal>
		<!-- END #modalPosItem -->
	</div>
</template>

<script>
import PageOptions from '../config/PageOptions.vue'

export default {
	created() {
		PageOptions.pageEmpty = true;
		PageOptions.pageFullHeight = true;
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
		}
  }
}
</script>