import React from 'react';
import { Link } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';
import { Modal, ModalBody } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

class CustomerOrder extends React.Component {
	static contextType = PageSettings;

	constructor(props) {
    super(props);
    
    this.state = {
			modalPosItem: false,
			posMobileSidebarToggled: false
		}
		this.toggleModal = this.toggleModal.bind(this);
  }
  
	togglePosMobileSidebar() {
		this.setState({ posMobileSidebarToggled: !this.state.posMobileSidebarToggled });
	}
  
	toggleModal(name) {
		switch (name) {
			case 'modalPosItem':	
				this.setState({ modalPosItem: !this.state.modalPosItem });
				break;
			default:
				break;
		}
	}
  
	componentDidMount() {
		this.context.handleSetPageSidebar(false);
		this.context.handleSetPageHeader(false);
		this.context.handleSetPageContentFullWidth(true);
		this.context.handleSetPageContentFullHeight(true);
	}

	componentWillUnmount() {
		this.context.handleSetPageSidebar(true);
		this.context.handleSetPageHeader(true);
		this.context.handleSetPageContentFullWidth(false);
		this.context.handleSetPageContentFullHeight(false);
	}
  
	render() {
		return (
			<div className="vh-100">
				<div className={'pos pos-customer ' + (this.state.posMobileSidebarToggled ? 'pos-mobile-sidebar-toggled' : '')} id="pos-customer">
					<div className="pos-menu">
						<div className="logo">
							<Link to="/">
								<div className="logo-img"><img alt="" src="../assets/img/pos/logo.svg" /></div>
								<div className="logo-text">Pine & Dine</div>
							</Link>
						</div>
						<div className="nav-container">
							<PerfectScrollbar className="height-full" options={{suppressScrollX: true}}>
								<ul className="nav nav-tabs">
									<li className="nav-item">
										<Link to="/pos/customer-order" className="nav-link active" data-filter="all">
											<i className="fa fa-fw fa-utensils mr-1 ml-n2"></i> All Dishes
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/pos/customer-order" className="nav-link" data-filter="meat">
											<i className="fa fa-fw fa-drumstick-bite mr-1 ml-n2"></i> Meat
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/pos/customer-order" className="nav-link" data-filter="burger">
											<i className="fa fa-fw fa-hamburger mr-1 ml-n2"></i> Burger
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/pos/customer-order" className="nav-link" data-filter="pizza">
											<i className="fa fa-fw fa-pizza-slice mr-1 ml-n2"></i> Pizza
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/pos/customer-order" className="nav-link" data-filter="drinks">
											<i className="fa fa-fw fa-cocktail mr-1 ml-n2"></i> Drinks
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/pos/customer-order" className="nav-link" data-filter="desserts">
											<i className="fa fa-fw fa-ice-cream mr-1 ml-n2"></i> Desserts
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/pos/customer-order" className="nav-link" data-filter="snacks">
											<i className="fa fa-fw fa-cookie-bite mr-1 ml-n2"></i> Snacks
										</Link>
									</li>
								</ul>
							</PerfectScrollbar>
						</div>
					</div>
					
					<div className="pos-content">
						<PerfectScrollbar className="pos-content-container" options={{suppressScrollX: true}}>
							<div className="product-row">
								<div className="product-container" data-type="meat">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-1.jpg)'}}></div>
										<div className="text">
											<div className="title">Grill Chicken Chop&reg;</div>
											<div className="desc">chicken, egg, mushroom, salad</div>
											<div className="price">$10.99</div>
										</div>
									</Link>
								</div>
								<div className="product-container" data-type="meat">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-2.jpg)'}}></div>
										<div className="text">
											<div className="title">Grill Pork Chop&reg;</div>
											<div className="desc">pork, egg, mushroom, salad</div>
											<div className="price">$12.99</div>
										</div>
									</Link>
								</div>
								<div className="product-container" data-type="meat">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-3.jpg)'}}></div>
										<div className="text">
											<div className="title">Capellini Tomato Sauce&reg;</div>
											<div className="desc">spaghetti, tomato, mushroom </div>
											<div className="price">$11.99</div>
										</div>
									</Link>
								</div>
								<div className="product-container" data-type="meat">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-4.jpg)'}}></div>
										<div className="text">
											<div className="title">Vegan Salad Bowl&reg;</div>
											<div className="desc">apple, carrot, tomato </div>
											<div className="price">$6.99</div>
										</div>
									</Link>
								</div>
								<div className="product-container" data-type="pizza">
									<div className="product not-available">
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-5.jpg)'}}></div>
										<div className="text">
											<div className="title">Hawaiian Pizza&reg;</div>
											<div className="desc">pizza, crab meat, pineapple </div>
											<div className="price">$20.99</div>
										</div>
										<div className="not-available-text">
											<div>Not Available</div>
										</div>
									</div>
								</div>
								<div className="product-container" data-type="burger">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-17.jpg)'}}></div>
										<div className="text">
											<div className="title">Perfect Burger</div>
											<div className="desc">Dill pickle, cheddar cheese, tomato, red onion, ground chuck beef</div>
											<div className="price">$8.99</div>
										</div>
									</Link>
								</div>
								<div className="product-container" data-type="drinks">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-6.jpg)'}}></div>
										<div className="text">
											<div className="title">Avocado Shake</div>
											<div className="desc">avocado, milk, vanilla</div>
											<div className="price">$3.99</div>
										</div>
									</Link>
								</div>
								<div className="product-container" data-type="drinks">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-7.jpg)'}}></div>
										<div className="text">
											<div className="title">Coffee Latte</div>
											<div className="desc">espresso, milk</div>
											<div className="price">$2.99</div>
										</div>
									</Link>
								</div>
								<div className="product-container" data-type="drinks">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-8.jpg)'}}></div>
										<div className="text">
											<div className="title">Vita C Detox Juice</div>
											<div className="desc">apricot, apple, carrot and ginger juice</div>
											<div className="price">$2.99</div>
										</div>
									</Link>
								</div>
								<div className="product-container" data-type="snacks">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-9.jpg)'}}></div>
										<div className="text">
											<div className="title">Pancake</div>
											<div className="desc">Non dairy, egg, baking soda, sugar, all purpose flour</div>
											<div className="price">$5.99</div>
										</div>
									</Link>
								</div>
								<div className="product-container" data-type="snacks">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-10.jpg)'}}></div>
										<div className="text">
											<div className="title">Mushroom soup</div>
											<div className="desc">Evaporated milk, marsala wine, beef cubes, chicken broth, butter</div>
											<div className="price">$3.99</div>
										</div>
									</Link>
								</div>
								<div className="product-container" data-type="snacks">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-11.jpg)'}}></div>
										<div className="text">
											<div className="title">Baked chicken wing</div>
											<div className="desc">Chicken wings, a1 steak sauce, honey, cayenne pepper</div>
											<div className="price">$6.99</div>
										</div>
									</Link>
								</div>
								<div className="product-container" data-type="meat">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-12.jpg)'}}></div>
										<div className="text">
											<div className="title">Veggie Spaghetti</div>
											<div className="desc">Yellow squash, pasta, roasted red peppers, zucchini</div>
											<div className="price">$12.99</div>
										</div>
									</Link>
								</div>
								<div className="product-container" data-type="desserts">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-13.jpg)'}}></div>
										<div className="text">
											<div className="title">Vanilla Ice Cream</div>
											<div className="desc">Heavy whipping cream, white sugar, vanilla extract</div>
											<div className="price">$3.99</div>
										</div>
									</Link>
								</div>
								<div className="product-container" data-type="desserts">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-15.jpg)'}}></div>
										<div className="text">
											<div className="title">Perfect Yeast Doughnuts</div>
											<div className="desc">Chocolate hazelnut spread, bread flour, doughnuts, quick rise yeast, butter</div>
											<div className="price">$2.99</div>
										</div>
									</Link>
								</div>
								<div className="product-container" data-type="desserts">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-14.jpg)'}}></div>
										<div className="text">
											<div className="title">Macarons</div>
											<div className="desc">Almond flour, egg whites, heavy cream, food coloring, powdered sugar</div>
											<div className="price">$4.99</div>
										</div>
									</Link>
								</div>
								<div className="product-container" data-type="desserts">
									<Link to="/pos/customer-order" className="product" onClick={() => this.toggleModal('modalPosItem')}>
										<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-16.jpg)'}}></div>
										<div className="text">
											<div className="title">Perfect Vanilla Cupcake</div>
											<div className="desc">Baking powder, all purpose flour, plain kefir, vanilla extract</div>
											<div className="price">$2.99</div>
										</div>
									</Link>
								</div>
							</div>
						</PerfectScrollbar>
					</div>
					
					<div className="pos-sidebar" id="pos-sidebar">
						<div className="pos-sidebar-header">
							<div className="back-btn">
								<button type="button" onClick={() => this.togglePosMobileSidebar()} className="btn">
									<svg viewBox="0 0 16 16" className="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
									</svg>
								</button>
							</div>
							<div className="icon"><img alt="" src="../assets/img/pos/icon-table.svg" /></div>
							<div className="title">Table 01</div>
							<div className="order">Order: <b>#0056</b></div>
						</div>
						<div className="pos-sidebar-nav">
							<ul className="nav nav-tabs nav-fill">
								<li className="nav-item">
									<Link to="/pos/customer-order" className="nav-link active">New Order (5)</Link>
								</li>
								<li className="nav-item">
									<Link to="/pos/customer-order" className="nav-link">Order History (0)</Link>
								</li>
							</ul>
						</div>
						<div className="pos-sidebar-body tab-content" data-scrollbar="true" data-height="100%">
							<div className="tab-pane fade h-100 show active" id="newOrderTab">
								<div className="pos-table">
									<div className="row pos-table-row">
										<div className="col-9">
											<div className="pos-product-thumb">
												<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-2.jpg)'}}></div>
												<div className="info">
													<div className="title">Grill Pork Chop</div>
													<div className="single-price">$12.99</div>
													<div className="desc">- size: large</div>
													<div className="input-group qty">
														<div className="input-group-append">
															<Link to="/pos/customer-order" className="btn btn-default"><i className="fa fa-minus"></i></Link>
														</div>
														<input type="text" className="form-control" value="01" />
														<div className="input-group-prepend">
															<Link to="/pos/customer-order" className="btn btn-default"><i className="fa fa-plus"></i></Link>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-3 total-price">$12.99</div>
									</div>
									<div className="row pos-table-row">
										<div className="col-9">
											<div className="pos-product-thumb">
												<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-8.jpg)'}}></div>
												<div className="info">
													<div className="title">Orange Juice</div>
													<div className="single-price">$5.00</div>
													<div className="desc">
														- size: large<br />
														- less ice
													</div>
													<div className="input-group qty">
														<div className="input-group-append">
															<Link to="/pos/customer-order" className="btn btn-default"><i className="fa fa-minus"></i></Link>
														</div>
														<input type="text" className="form-control" />
														<div className="input-group-prepend">
															<Link to="/pos/customer-order" className="btn btn-default"><i className="fa fa-plus"></i></Link>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-3 total-price">$10.00</div>
										<div className="pos-remove-confirmation">
											<svg width="2em" height="2em" viewBox="0 0 16 16" className="mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
												<path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
											</svg>
											Remove this item? 
											<Link to="/pos/customer-order" className="btn btn-white ml-auto mr-2">No</Link>
											<Link to="/pos/customer-order" className="btn btn-danger">Yes</Link>
										</div>
									</div>
									<div className="row pos-table-row">
										<div className="col-9">
											<div className="pos-product-thumb">
												<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-1.jpg)'}}></div>
												<div className="info">
													<div className="title">Grill chicken chop</div>
													<div className="single-price">$10.99</div>
													<div className="desc">
														- size: large<br />
														- spicy: medium
													</div>
													<div className="input-group qty">
														<div className="input-group-append">
															<Link to="/pos/customer-order" className="btn btn-default"><i className="fa fa-minus"></i></Link>
														</div>
														<input type="text" className="form-control" value="01" />
														<div className="input-group-prepend">
															<Link to="/pos/customer-order" className="btn btn-default"><i className="fa fa-plus"></i></Link>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-3 total-price">$10.99</div>
									</div>
									<div className="row pos-table-row">
										<div className="col-9">
											<div className="pos-product-thumb">
												<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-5.jpg)'}}></div>
												<div className="info">
													<div className="title">Hawaiian Pizza</div>
													<div className="single-price">$15.00</div>
													<div className="desc">
														- size: large<br />
														- more onion
													</div>
													<div className="input-group qty">
														<div className="input-group-append">
															<Link to="/pos/customer-order" className="btn btn-default"><i className="fa fa-minus"></i></Link>
														</div>
														<input type="text" className="form-control" value="02" />
														<div className="input-group-prepend">
															<Link to="/pos/customer-order" className="btn btn-default"><i className="fa fa-plus"></i></Link>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-3 total-price">$15.00</div>
									</div>
									<div className="row pos-table-row">
										<div className="col-9">
											<div className="pos-product-thumb">
												<div className="img" style={{backgroundImage: 'url(/assets/img/pos/product-10.jpg)'}}></div>
												<div className="info">
													<div className="title">Mushroom Soup</div>
													<div className="single-price">$3.99</div>
													<div className="desc">
														- size: large<br />
														- more cheese
													</div>
													<div className="input-group qty">
														<div className="input-group-append">
															<button className="btn btn-default"><i className="fa fa-minus"></i></button>
														</div>
														<input type="text" className="form-control" value="01" />
														<div className="input-group-prepend">
															<button className="btn btn-default"><i className="fa fa-plus"></i></button>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-3 total-price">$3.99</div>
									</div>
								</div>
							</div>
							<div className="tab-pane fade h-100" id="orderHistoryTab">
								<div className="h-100 d-flex align-items-center justify-content-center text-center p-20">
									<div>
										<div className="mb-3 mt-n5">
											<svg width="6em" height="6em" viewBox="0 0 16 16" className="text-gray-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"/>
												<path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"/>
											</svg>
										</div>
										<h4>No order history found</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="pos-sidebar-footer">
							<div className="subtotal">
								<div className="text">Subtotal</div>
								<div className="price">$30.98</div>
							</div>
							<div className="taxes">
								<div className="text">Taxes (6%)</div>
								<div className="price">$2.12</div>
							</div>
							<div className="total">
								<div className="text">Total</div>
								<div className="price">$33.10</div>
							</div>
							<div className="btn-row">
								<Link to="/pos/customer-order" className="btn btn-default"><i className="fa fa-bell fa-fw fa-lg"></i> Service</Link>
								<Link to="/pos/customer-order" className="btn btn-default"><i className="fa fa-file-invoice-dollar fa-fw fa-lg"></i> Bill</Link>
								<Link to="/pos/customer-order" className="btn btn-success"><i className="fa fa-check fa-fw fa-lg"></i> Submit Order</Link>
							</div>
						</div>
					</div>
				</div>
				
				<Link to="/pos/customer-order" className="pos-mobile-sidebar-toggler" onClick={() => this.togglePosMobileSidebar()}>
					<svg viewBox="0 0 16 16" className="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"/>
						<path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"/>
					</svg>
					<span className="badge">5</span>
				</Link>
				
				
				<Modal isOpen={this.state.modalPosItem} size="lg" toggle={() => this.toggleModal('modalPosItem')} modalClassName="modal-pos-item">
					<ModalBody className="p-0">
						<Link to="/pos/customer-order" onClick={() => this.toggleModal('modalPosItem')} class="close"><i class="fa fa-times"></i></Link>
						<div class="pos-product">
							<div class="pos-product-img">
								<div class="img" style={{backgroundImage: 'url(../assets/img/pos/product-1.jpg)'}}></div>
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
											<Link to="/pos/customer-order" class="btn btn-default"><i class="fa fa-minus"></i></Link>
											<input type="text" class="form-control border-0 text-center" name="" value="1" />
											<Link to="/pos/customer-order" class="btn btn-default"><i class="fa fa-plus"></i></Link>
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
									<Link to="/pos/customer-order" class="btn btn-default" data-dismiss="modal">Cancel</Link>
									<Link to="/pos/customer-order" class="btn btn-success">Add to cart <i class="fa fa-plus fa-fw ml-2"></i></Link>
								</div>
							</div>
						</div>
					</ModalBody>
				</Modal>
			</div>
		)
	}
}

export default CustomerOrder;