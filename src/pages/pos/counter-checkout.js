import React from 'react';
import { Link } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';
import PerfectScrollbar from 'react-perfect-scrollbar';

class PosCounterCheckout extends React.Component {
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
			<div className="vh-100">
				<div className="pos pos-counter" id="pos-counter">
					<div className="pos-counter-header">
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
				
					<div className="pos-counter-body">
						<div className="pos-counter-content">
							<PerfectScrollbar className="pos-counter-content-container">
								<div className="table-row">
									<div className="table in-use selected">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">1</div>
												<div className="order"><span>9 orders</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">4 / 4</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">35:20</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">$318.20</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">Unpaid</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table in-use">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">2</div>
												<div className="order"><span>12 orders</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">6 / 8</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">12:69</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">$682.20</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">Unpaid</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table available">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">3</div>
												<div className="order"><span>max 6 pax</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">0 / 6</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table available">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">4</div>
												<div className="order"><span>max 4 pax</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">0 / 4</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table available">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">5</div>
												<div className="order"><span>max 4 pax</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">0 / 4</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table in-use">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">6</div>
												<div className="order"><span>3 orders</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">3 / 6</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">20:52</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">$56.49</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">unpaid</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table in-use">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">7</div>
												<div className="order"><span>6 order</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">3 / 4</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">58:40</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">$329.02</span>
													</div>
												</div>
												<div className="table-info-col text-yellow">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-check-circle"></i>
														</span>
														<span className="text">Paid</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table in-use">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">8</div>
												<div className="order"><span>0 order</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">2 / 4</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">05:12</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">$0.00</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">unpaid</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table in-use">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">9</div>
												<div className="order"><span>4 order</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">2 / 4</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">52:58</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">$49.50</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">Unpaid</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table in-use">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">10</div>
												<div className="order"><span>12 order</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">9 / 12</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">66:69</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">$768.24</span>
													</div>
												</div>
												<div className="table-info-col text-yellow">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-check-circle"></i>
														</span>
														<span className="text">Paid</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table disabled">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">11</div>
												<div className="order"><span>Reserved for Sean</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">0 / 4</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table available">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">12</div>
												<div className="order"><span>max 6 pax</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">0 / 6</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table available">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">13</div>
												<div className="order"><span>max 6 pax</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">0 / 6</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table available">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">14</div>
												<div className="order"><span>max 6 pax</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">0 / 6</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table available">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">15</div>
												<div className="order"><span>max 6 pax</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">0 / 6</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table available">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">16</div>
												<div className="order"><span>max 6 pax</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">0 / 6</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table available">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">17</div>
												<div className="order"><span>max 6 pax</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">0 / 6</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table available">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">18</div>
												<div className="order"><span>max 6 pax</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">0 / 6</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table available">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">19</div>
												<div className="order"><span>max 6 pax</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">0 / 6</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="table available">
										<Link to="/pos/counter-checkout" className="table-container" data-toggle="select-table">
											<div className="table-status"></div>
											<div className="table-name">
												<div className="name">Table</div>
												<div className="no">20</div>
												<div className="order"><span>max 6 pax</span></div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-user"></i>
														</span>
														<span className="text">0 / 6</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="far fa-clock"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
											<div className="table-info-row">
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-hand-point-up"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
												<div className="table-info-col">
													<div className="table-info-container">
														<span className="icon">
															<i className="fa fa-dollar-sign"></i>
														</span>
														<span className="text">-</span>
													</div>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</PerfectScrollbar>
						</div>
					
						<div className="pos-counter-sidebar" id="pos-counter-sidebar">
							<div className="pos-sidebar-header">
								<div className="back-btn">
									<button type="button" data-dismiss-className="pos-mobile-sidebar-toggled" data-target="#pos-counter" className="btn">
										<svg viewBox="0 0 16 16" className="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
										</svg>
									</button>
								</div>
								<div className="icon"><img alt="" src="../assets/img/pos/icon-table.svg" /></div>
								<div className="title">Table 00</div>
								<div className="order">Order: <b>#0000</b></div>
							</div>
							<div className="pos-sidebar-body">
								<div className="pos-table" data-id="pos-table-info">
									<div className="row pos-table-row">
										<div className="col-8">
											<div className="pos-product-thumb">
												<div className="img" style={{backgroundImage: 'url(../assets/img/pos/product-2.jpg'}}></div>
												<div className="info">
													<div className="title">Grill Pork Chop</div>
													<div className="desc">- size: large</div>
												</div>
											</div>
										</div>
										<div className="col-1 total-qty">x1</div>
										<div className="col-3 total-price">$12.99</div>
									</div>
									<div className="row pos-table-row">
										<div className="col-8">
											<div className="pos-product-thumb">
												<div className="img" style={{backgroundImage: 'url(../assets/img/pos/product-8.jpg'}}></div>
												<div className="info">
													<div className="title">Orange Juice</div>
													<div className="desc">
														- size: large<br />
														- less ice
													</div>
												</div>
											</div>
										</div>
										<div className="col-1 total-qty">x2</div>
										<div className="col-3 total-price">$10.00</div>
									</div>
									<div className="row pos-table-row">
										<div className="col-8">
											<div className="pos-product-thumb">
												<div className="img" style={{backgroundImage: 'url(../assets/img/pos/product-13.jpg'}}></div>
												<div className="info">
													<div className="title">Vanilla Ice-cream</div>
													<div className="desc">
														- scoop: 1 <br />
														- flavour: vanilla
													</div>
												</div>
											</div>
										</div>
										<div className="col-1 total-qty">x1</div>
										<div className="col-3 total-price">$3.99</div>
									</div>
									<div className="row pos-table-row">
										<div className="col-8">
											<div className="pos-product-thumb">
												<div className="img" style={{backgroundImage: 'url(../assets/img/pos/product-1.jpg'}}></div>
												<div className="info">
													<div className="title">Grill chicken chop</div>
													<div className="desc">
														- size: large<br />
														- spicy: medium
													</div>
												</div>
											</div>
										</div>
										<div className="col-1 total-qty">x1</div>
										<div className="col-3 total-price">$10.99</div>
									</div>
									<div className="row pos-table-row">
										<div className="col-8">
											<div className="pos-product-thumb">
												<div className="img" style={{backgroundImage: 'url(../assets/img/pos/product-10.jpg'}}></div>
												<div className="info">
													<div className="title">Mushroom Soup</div>
													<div className="desc">
														- size: large<br />
														- more cheese
													</div>
												</div>
											</div>
										</div>
										<div className="col-1 total-qty">x1</div>
										<div className="col-3 total-price">$3.99</div>
									</div>
									<div className="row pos-table-row">
										<div className="col-8">
											<div className="pos-product-thumb">
												<div className="img" style={{backgroundImage: 'url(../assets/img/pos/product-5.jpg'}}></div>
												<div className="info">
													<div className="title">Hawaiian Pizza</div>
													<div className="desc">
														- size: large<br />
														- more onion
													</div>
												</div>
											</div>
										</div>
										<div className="col-1 total-qty">x1</div>
										<div className="col-3 total-price">$15.00</div>
									</div>
									<div className="row pos-table-row">
										<div className="col-8">
											<div className="pos-product-thumb">
												<div className="img" style={{backgroundImage: 'url(../assets/img/pos/product-15.jpg'}}></div>
												<div className="info">
													<div className="title">Perfect Yeast Doughnuts</div>
													<div className="desc">
														- size: 1 set<br />
														- flavour: random
													</div>
												</div>
											</div>
										</div>
										<div className="col-1 total-qty">x1</div>
										<div className="col-3 total-price">$2.99</div>
									</div>
									<div className="row pos-table-row">
										<div className="col-8">
											<div className="pos-product-thumb">
												<div className="img" style={{backgroundImage: 'url(../assets/img/pos/product-14.jpg'}}></div>
												<div className="info">
													<div className="title">Macarons</div>
													<div className="desc">
														- size: 1 set<br />
														- flavour: random
													</div>
												</div>
											</div>
										</div>
										<div className="col-1 total-qty">x1</div>
										<div className="col-3 total-price">$4.99</div>
									</div>
								</div>
								<div className="h-100 d-none align-items-center justify-content-center text-center p-20" data-id="pos-table-empty">
									<div>
										<div className="mb-3">
											<svg width="6em" height="6em" viewBox="0 0 16 16" className="text-gray-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"/>
												<path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"/>
											</svg>
										</div>
										<h4>No table selected</h4>
									</div>
								</div>
							</div>
							<div className="pos-sidebar-footer">
								<div className="subtotal">
									<div className="text">Subtotal</div>
									<div className="price" data-id="price-subtotal">$64.94</div>
								</div>
								<div className="taxes">
									<div className="text">Taxes (6%)</div>
									<div className="price" data-id="price-subtotal">$3.90</div>
								</div>
								<div className="total">
									<div className="text">Total</div>
									<div className="price" data-id="price-subtotal">$68.84</div>
								</div>
								<div className="btn-row">
									<Link to="/pos/counter-checkout" className="btn btn-default width-150"><i className="fa fa-qrcode fa-fw fa-lg"></i> Digital Wallet</Link>
									<Link to="/pos/counter-checkout" className="btn btn-default width-150"><i className="fab fa-cc-visa fa-fw fa-lg"></i> Credit Card</Link>
									<Link to="/pos/counter-checkout" className="btn btn-success"><i className="fa fa-cash-register fa-fw fa-lg"></i> Pay by Cash</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PosCounterCheckout;