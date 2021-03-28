import React from 'react';
import { Link } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

class PosTableBooking extends React.Component {
	static contextType = PageSettings;
	
	constructor(props) {
    super(props);
    
    this.state = {
			modalPosBooking: false
		}
    this.time = '00:00';
  }
  
	toggleModal(name) {
		switch (name) {
			case 'modalPosBooking':	
				this.setState({ modalPosBooking: !this.state.modalPosBooking });
				break;
			default:
				break;
		}
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
				<div className="pos pos-booking" id="pos-booking">
					<div className="pos-booking-header">
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
				
					<div className="pos-booking-body">
						<div className="pos-booking-content">
							<PerfectScrollbar className="pos-booking-content-container">
								<div className="d-md-flex align-items-center mb-4">
									<div className="pos-booking-title flex-1">
										<div className="f-s-24 mb-1">Available Table (8/20)</div>
										<div className="mb-2 mb-md-0 d-flex">
											<div className="d-flex align-items-center mr-3">
												<i className="fa fa-circle fa-fw text-gray-700 f-s-9 mr-1"></i> Completed
											</div>
											<div className="d-flex align-items-center mr-3">
												<i className="fa fa-circle fa-fw text-warning f-s-9 mr-1"></i> Upcoming
											</div>
											<div className="d-flex align-items-center mr-3">
												<i className="fa fa-circle fa-fw text-success f-s-9 mr-1"></i> In-progress
											</div>
										</div>
									</div>
									<div>
										<div className="input-group date mb-0" data-render="datepicker" data-date-format="dd-mm-yyyy" data-date-start-date="Date.default">
											<input type="text" className="form-control" placeholder="Today's" />
											<span className="input-group-addon">
												<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-calendar-date-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm.066-2.544c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2zm-2.957-2.89v5.332H5.77v-4.61h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"/>
												</svg>
											</span>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">01</div>
															<div className="desc">max 4 pax</div>
														</div>
														<div className="pr-1 text-success">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
																<path fillRule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">Reserved by Sean</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
														<div className="info">Reserved by Jess (4pax)</div>
														<div className="status upcoming"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">Reserved by Jess (4pax)</div>
														<div className="status upcoming"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">02</div>
															<div className="desc">max 8 pax</div>
														</div>
														<div className="text-gray-800">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
																<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">Reserved by John (8pax)</div>
														<div className="status in-progress"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">Reserved by Terry (6pax)</div>
														<div className="status upcoming"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">03</div>
															<div className="desc">max 8 pax</div>
														</div>
														<div className="text-gray-800">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
																<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">Walk in lunch</div>
														<div className="status in-progress"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">Reserved by Lisa (8pax)</div>
														<div className="status upcoming"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">Reserved by Lisa (8pax)</div>
														<div className="status upcoming"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">Reserved by Terry</div>
														<div className="status upcoming"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">04</div>
															<div className="desc">max 4 pax</div>
														</div>
														<div className="text-gray-800">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
																<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">Walk in lunch</div>
														<div className="status in-progress"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">Reserved by Richard (4pax)</div>
														<div className="status upcoming"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">Reserved by Richard (4pax)</div>
														<div className="status upcoming"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">Reserved by Paul (3pax)</div>
														<div className="status upcoming"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">Reserved by Paul (3pax)</div>
														<div className="status upcoming"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">Reserved by Paul (3pax)</div>
														<div className="status upcoming"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">05</div>
															<div className="desc">max 4 pax</div>
														</div>
														<div className="text-gray-800">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
																<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">Walk in lunch</div>
														<div className="status in-progress"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">06</div>
															<div className="desc">max 4 pax</div>
														</div>
														<div className="text-success">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
																<path fillRule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">07</div>
															<div className="desc">max 6 pax</div>
														</div>
														<div className="text-gray-800">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
																<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">Walk in lunch</div>
														<div className="status in-progress"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">08</div>
															<div className="desc">max 4 pax</div>
														</div>
														<div className="text-gray-800">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
																<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">Walk in lunch</div>
														<div className="status in-progress"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">09</div>
															<div className="desc">max 4 pax</div>
														</div>
														<div className="text-success">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
																<path fillRule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">10</div>
															<div className="desc">max 4 pax</div>
														</div>
														<div className="text-gray-800">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
																<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">Walk in lunch</div>
														<div className="status in-progress"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">11</div>
															<div className="desc">max 4 pax</div>
														</div>
														<div className="text-success">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
																<path fillRule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">12</div>
															<div className="desc">max 4 pax</div>
														</div>
														<div className="text-success">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
																<path fillRule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">13</div>
															<div className="desc">max 4 pax</div>
														</div>
														<div className="text-success">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
																<path fillRule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">14</div>
															<div className="desc">max 6 pax</div>
														</div>
														<div className="text-gray-800">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
																<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">Walk in lunch</div>
														<div className="status in-progress"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">15</div>
															<div className="desc">max 6 pax</div>
														</div>
														<div className="text-gray-800">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
																<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">Walk in lunch</div>
														<div className="status in-progress"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">16</div>
															<div className="desc">max 4 pax</div>
														</div>
														<div className="text-success">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
																<path fillRule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">17</div>
															<div className="desc">max 4 pax</div>
														</div>
														<div className="text-success">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
																<path fillRule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">18</div>
															<div className="desc">max 6 pax</div>
														</div>
														<div className="text-gray-800">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
																<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">Walk in lunch</div>
														<div className="status in-progress"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">19</div>
															<div className="desc">max 6 pax</div>
														</div>
														<div className="text-gray-800">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
																<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">Walk in lunch</div>
														<div className="status in-progress"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
										<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} className="table-booking">
											<div className="table-booking-container">
												<div className="table-booking-header">
													<div className="d-flex align-items-center">
														<div className="flex-1">
															<div className="title">TABLE</div>
															<div className="no">20</div>
															<div className="desc">max 6 pax</div>
														</div>
														<div className="text-gray-800">
															<svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
																<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
															</svg>
														</div>
													</div>
												</div>
												<div className="table-booking-body">
													<div className="booking">
														<div className="time">08:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">09:00am</div>
														<div className="info">Walk in breakfast</div>
														<div className="status completed"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">10:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">11:00am</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking highlight">
														<div className="time">12:00pm</div>
														<div className="info">Walk in lunch</div>
														<div className="status in-progress"><i className="fa fa-circle"></i></div>
													</div>
													<div className="booking">
														<div className="time">01:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">02:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">03:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">04:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">05:00pm</div>
															<div className="info-title">-</div>
															<div className="info-desc"></div>
													</div>
													<div className="booking">
														<div className="time">06:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">07:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">08:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">09:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
													<div className="booking">
														<div className="time">10:00pm</div>
														<div className="info">-</div>
														<div className="status"></div>
													</div>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</PerfectScrollbar>
						</div>
					</div>
				</div>
				
				<Modal isOpen={this.state.modalPosBooking} size="lg" toggle={() => this.toggleModal('modalPosBooking')} modalClassName="modal-pos-booking">
					<ModalBody>
						<div class="d-flex align-items-center mb-3">
							<h4 class="modal-title d-flex align-items-center"><img alt="" src="../assets/img/pos/icon-table-black.svg" height="30" class="mr-2" /> Table 01 <small class="f-s-13 f-w-600 ml-2">max 4 pax</small></h4>
							<Link to="/pos/table-booking" onClick={() => this.toggleModal('modalPosBooking')} class="ml-auto close"><i class="fa fa-times"></i></Link>
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
					</ModalBody>
					<ModalFooter>
						<Link to="/pos/table-booking" class="btn btn-default width-100" onClick={() => this.toggleModal('modalPosBooking')}>Cancel</Link>
						<button type="submit" class="btn btn-success width-100">Book</button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

export default PosTableBooking;