import React from 'react';
import { Link } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';

class KitchenOrder extends React.Component {
	static contextType = PageSettings;

	constructor(props) {
    super(props);
    
    this.time = '00:00';
  }
  
	handleStartTime() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var a;
		m = (m < 10) ? "0" + m : m;
		a = (h > 11) ? 'pm' : 'am';
		h = (h > 12) ? h - 12 : h;
		
		this.time = h + ":" + m + a;
		setTimeout(this.handleStartTime, 500);
	}
  
	componentDidMount() {
		this.context.handleSetPageSidebar(false);
		this.context.handleSetPageHeader(false);
		this.context.handleSetPageContentFullWidth(true);
		this.context.handleSetPageContentFullHeight(true);
		this.handleStartTime();
	}

	componentWillUnmount() {
		this.context.handleSetPageSidebar(true);
		this.context.handleSetPageHeader(true);
		this.context.handleSetPageContentFullWidth(false);
		this.context.handleSetPageContentFullHeight(false);
	}
  
	render() {
		return (
			<div className="pos pos-kitchen" id="pos-kitchen">
				<div className="pos-kitchen-header">
					<div className="logo">
						<Link to="/pos/counter-checkout">
							<div className="logo-img"><img alt="" src="../assets/img/pos/logo.svg" /></div>
							<div className="logo-text">Pine & Dine</div>
						</Link>
					</div>
					<div className="time" id="time">{this.time}</div>
					<div className="nav">
						<div className="nav-item">
							<Link to="/pos/kitchen-order" className="nav-link">
								<svg viewBox="0 0 16 16" className="nav-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 0 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z"/>
								</svg>
							</Link>
						</div>
						<div className="nav-item">
							<Link to="/pos/table-booking" className="nav-link">
								<svg viewBox="0 0 16 16" className="nav-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
									<path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
								</svg>
							</Link>
						</div>
						<div className="nav-item">
							<Link to="/pos/menu-stock" className="nav-link">
								<svg viewBox="0 0 16 16" className="nav-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
									<path fillRule="evenodd" d="M7.5 7.793V1h1v6.5H15v1H8.207l-4.853 4.854-.708-.708L7.5 7.793z"/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
				<div className="pos-kitchen-body">
					<div className="pos-task-row">
						<div className="pos-task">
							<div className="pos-task-info">
								<div className="table-no">
									Table <b>05</b>
								</div>
								<div className="order-no">
									Order No: #9049
								</div>
								<div className="order-type">
									<span className="label label-success">Dine-in</span>
								</div>
								<div className="time-pass" data-start-time="3">
									07:13 time
								</div>
							</div>
							<div className="pos-task-body">
								<div className="pos-task-completed">
									Completed: <b>(1/3)</b>
								</div>
								<div className="pos-task-product-row">
									<div className="pos-task-product">
										<div className="pos-task-product-img">
											<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-2.jpg)'}}></div>
										</div>
										<div className="pos-task-product-info">
											<div className="info">
												<div className="title">Pork Burger</div>
												<div className="desc">
													- large size<br />
													- extra cheese<br />
												</div>
											</div>
											<div className="qty">
												x1
											</div>
										</div>
										<div className="pos-task-product-action">
											<Link to="/pos/kitchen-order" className="btn btn-success">Complete</Link>
											<Link to="/pos/kitchen-order" className="btn btn-outline-inverse">Cancel</Link>
										</div>
									</div>
									<div className="pos-task-product">
										<div className="pos-task-product-img">
											<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-14.jpg)'}}></div>
										</div>
										<div className="pos-task-product-info">
											<div className="info">
												<div className="title">Macarons</div>
												<div className="desc">
													- serve after dishes
												</div>
											</div>
											<div className="qty">
												x1
											</div>
										</div>
										<div className="pos-task-product-action">
											<Link to="/pos/kitchen-order" className="btn btn-success">Complete</Link>
											<Link to="/pos/kitchen-order" className="btn btn-outline-inverse">Cancel</Link>
										</div>
									</div>
									<div className="pos-task-product completed">
										<div className="pos-task-product-img">
											<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-8.jpg)'}}></div>
											<div className="caption">
												<div>Completed</div>
											</div>
										</div>
										<div className="pos-task-product-info">
											<div className="info">
												<div className="title">Vita C Detox Juice</div>
												<div className="desc">
													- large size<br />
													- less ice<br />
												</div>
											</div>
											<div className="qty">
												x1
											</div>
										</div>
										<div className="pos-task-product-action">
											<Link to="/pos/kitchen-order" className="btn btn-success disabled">Complete</Link>
											<Link to="/pos/kitchen-order" className="btn btn-outline-inverse disabled">Cancel</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pos-task">
							<div className="pos-task-info">
								<div className="table-no">
									Table <b>14</b>
								</div>
								<div className="order-no">
									Order No: #9047
								</div>
								<div className="order-type">
									<span className="label label-success">Dine-in</span>
								</div>
								<div className="time-pass" data-start-time="3">
									<span className="text-danger">12:13</span> time
								</div>
							</div>
							<div className="pos-task-body">
								<div className="pos-task-completed">
									Completed: <b>(3/4)</b>
								</div>
								<div className="pos-task-product-row">
									<div className="pos-task-product">
										<div className="pos-task-product-img">
											<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-11.jpg)'}}></div>
										</div>
										<div className="pos-task-product-info">
											<div className="info">
												<div className="title">Baked chicken wing</div>
												<div className="desc">
													- 6 pieces<br />
													- honey source<br />
												</div>
											</div>
											<div className="qty">
												x1
											</div>
										</div>
										<div className="pos-task-product-action">
											<Link to="/pos/kitchen-order" className="btn btn-success">Complete</Link>
											<Link to="/pos/kitchen-order" className="btn btn-outline-inverse">Cancel</Link>
										</div>
									</div>
									<div className="pos-task-product completed">
										<div className="pos-task-product-img">
											<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-12.jpg)'}}></div>
											<div className="caption">
												<div>Completed</div>
											</div>
										</div>
										<div className="pos-task-product-info">
											<div className="info">
												<div className="title">Veggie Spaghetti</div>
												<div className="desc">
													- size: large <br />
													- spicy level: light
												</div>
											</div>
											<div className="qty">
												x1
											</div>
										</div>
										<div className="pos-task-product-action">
											<Link to="/pos/kitchen-order" className="btn btn-success disabled">Complete</Link>
											<Link to="/pos/kitchen-order" className="btn btn-outline-inverse disabled">Cancel</Link>
										</div>
									</div>
									<div className="pos-task-product completed">
										<div className="pos-task-product-img">
											<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-7.jpg)'}}></div>
											<div className="caption">
												<div>Completed</div>
											</div>
										</div>
										<div className="pos-task-product-info">
											<div className="info">
												<div className="title">Coffee Latte</div>
												<div className="desc">
													- no sugar<br />
													- more cream<br />
												</div>
											</div>
											<div className="qty">
												x1
											</div>
										</div>
										<div className="pos-task-product-action">
											<Link to="/pos/kitchen-order" className="btn btn-success disabled">Complete</Link>
											<Link to="/pos/kitchen-order" className="btn btn-outline-inverse disabled">Cancel</Link>
										</div>
									</div>
									<div className="pos-task-product completed">
										<div className="pos-task-product-img">
											<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-1.jpg)'}}></div>
											<div className="caption">
												<div>Completed</div>
											</div>
										</div>
										<div className="pos-task-product-info">
											<div className="info">
												<div className="title">Grill Chicken Chop</div>
												<div className="desc">
													- ala carte
												</div>
											</div>
											<div className="qty">
												x1
											</div>
										</div>
										<div className="pos-task-product-action">
											<Link to="/pos/kitchen-order" className="btn btn-success disabled">Complete</Link>
											<Link to="/pos/kitchen-order" className="btn btn-outline-inverse disabled">Cancel</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pos-task">
							<div className="pos-task-info">
								<div className="table-no">
									Table <b>17</b>
								</div>
								<div className="order-no">
									Order No: #9046
								</div>
								<div className="order-type">
									<span className="label bg-gray-500">Dine-in</span>
								</div>
								<div className="time-pass" data-start-time="3">
									All dish served<br />12:30 total time
								</div>
							</div>
							<div className="pos-task-body">
								<div className="pos-task-completed">
									Completed: <b>(3/3)</b>
								</div>
								<div className="pos-task-product-row">
									<div className="pos-task-product completed">
										<div className="pos-task-product-img">
											<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-2.jpg)'}}></div>
											<div className="caption">
												<div>Completed</div>
											</div>
										</div>
										<div className="pos-task-product-info">
											<div className="info">
												<div className="title">Pork Burger</div>
												<div className="desc">
													- large size<br />
													- extra cheese<br />
												</div>
											</div>
											<div className="qty">
												x1
											</div>
										</div>
										<div className="pos-task-product-action">
											<Link to="/pos/kitchen-order" className="btn btn-success disabled">Complete</Link>
											<Link to="/pos/kitchen-order" className="btn btn-outline-inverse disabled">Cancel</Link>
										</div>
									</div>
									<div className="pos-task-product completed">
										<div className="pos-task-product-img">
											<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-10.jpg)'}}></div>
											<div className="caption">
												<div>Completed</div>
											</div>
										</div>
										<div className="pos-task-product-info">
											<div className="info">
												<div className="title">Mushroom soup</div>
												<div className="desc">
													- ala carte<br />
													- more cheese<br />
												</div>
											</div>
											<div className="qty">
												x1
											</div>
										</div>
										<div className="pos-task-product-action">
											<Link to="/pos/kitchen-order" className="btn btn-success disabled">Complete</Link>
											<Link to="/pos/kitchen-order" className="btn btn-outline-inverse disabled">Cancel</Link>
										</div>
									</div>
									<div className="pos-task-product completed">
										<div className="pos-task-product-img">
											<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-8.jpg)'}}></div>
											<div className="caption">
												<div>Completed</div>
											</div>
										</div>
										<div className="pos-task-product-info">
											<div className="info">
												<div className="title">Vita C Detox Juice</div>
												<div className="desc">
													- large size<br />
													- less ice<br />
												</div>
											</div>
											<div className="qty">
												x1
											</div>
										</div>
										<div className="pos-task-product-action">
											<Link to="/pos/kitchen-order" className="btn btn-success disabled">Complete</Link>
											<Link to="/pos/kitchen-order" className="btn btn-outline-inverse disabled">Cancel</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pos-task">
							<div className="pos-task-info">
								<div className="table-no">
									Table <b>18</b>
								</div>
								<div className="order-no">
									Order No: #9045
								</div>
								<div className="order-type">
									<span className="label bg-gray-500">Dine-in</span>
								</div>
								<div className="time-pass" data-start-time="3">
									All dish served<br />12:30 total time
								</div>
							</div>
							<div className="pos-task-body">
								<div className="pos-task-completed">
									Completed: <b>(2/2)</b>
								</div>
								<div className="pos-task-product-row">
									<div className="pos-task-product completed">
										<div className="pos-task-product-img">
											<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-13.jpg)'}}></div>
											<div className="caption">
												<div>Completed</div>
											</div>
										</div>
										<div className="pos-task-product-info">
											<div className="info">
												<div className="title">Vanilla Ice Cream</div>
												<div className="desc">
													- ala carte
												</div>
											</div>
											<div className="qty">
												x1
											</div>
										</div>
										<div className="pos-task-product-action">
											<Link to="/pos/kitchen-order" className="btn btn-success disabled">Complete</Link>
											<Link to="/pos/kitchen-order" className="btn btn-outline-inverse disabled">Cancel</Link>
										</div>
									</div>
									<div className="pos-task-product completed">
										<div className="pos-task-product-img">
											<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-9.jpg)'}}></div>
											<div className="caption">
												<div>Completed</div>
											</div>
										</div>
										<div className="pos-task-product-info">
											<div className="info">
												<div className="title">Pancake</div>
												<div className="desc">
													- ala carte
												</div>
											</div>
											<div className="qty">
												x1
											</div>
										</div>
										<div className="pos-task-product-action">
											<Link to="/pos/kitchen-order" className="btn btn-success disabled">Complete</Link>
											<Link to="/pos/kitchen-order" className="btn btn-outline-inverse disabled">Cancel</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pos-task">
							<div className="pos-task-info">
								<div className="table-no">
									Table <b>02</b>
								</div>
								<div className="order-no">
									Order No: #9045
								</div>
								<div className="order-type">
									<span className="label bg-gray-500">Take Away</span>
								</div>
								<div className="time-pass" data-start-time="3">
									All dish served<br />22:28 total time
								</div>
							</div>
							<div className="pos-task-body">
								<div className="pos-task-completed">
									Completed: <b>(3/3)</b>
								</div>
								<div className="pos-task-product-row">
									<div className="pos-task-product completed">
										<div className="pos-task-product-img">
											<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-4.jpg)'}}></div>
											<div className="caption">
												<div>Completed</div>
											</div>
										</div>
										<div className="pos-task-product-info">
											<div className="info">
												<div className="title">Vegan Salad Bowl&reg;</div>
												<div className="desc">
													- ala carte
												</div>
											</div>
											<div className="qty">
												x1
											</div>
										</div>
										<div className="pos-task-product-action">
											<Link to="/pos/kitchen-order" className="btn btn-success disabled">Complete</Link>
											<Link to="/pos/kitchen-order" className="btn btn-outline-inverse disabled">Cancel</Link>
										</div>
									</div>
									<div className="pos-task-product completed">
										<div className="pos-task-product-img">
											<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-6.jpg)'}}></div>
											<div className="caption">
												<div>Completed</div>
											</div>
										</div>
										<div className="pos-task-product-info">
											<div className="info">
												<div className="title">Avocado Shake</div>
												<div className="desc">
													- ala carte
												</div>
											</div>
											<div className="qty">
												x1
											</div>
										</div>
										<div className="pos-task-product-action">
											<Link to="/pos/kitchen-order" className="btn btn-success disabled">Complete</Link>
											<Link to="/pos/kitchen-order" className="btn btn-outline-inverse disabled">Cancel</Link>
										</div>
									</div>
									<div className="pos-task-product completed">
										<div className="pos-task-product-img">
											<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-5.jpg)'}}></div>
											<div className="caption">
												<div>Completed</div>
											</div>
										</div>
										<div className="pos-task-product-info">
											<div className="info">
												<div className="title">Hawaiian Pizza&reg;</div>
												<div className="desc">
													- ala carte
												</div>
											</div>
											<div className="qty">
												x1
											</div>
										</div>
										<div className="pos-task-product-action">
											<Link to="/pos/kitchen-order" className="btn btn-success disabled">Complete</Link>
											<Link to="/pos/kitchen-order" className="btn btn-outline-inverse disabled">Cancel</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default KitchenOrder;