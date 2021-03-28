import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { PageSettings } from './../../config/page-settings.js';
import PerfectScrollbar from 'react-perfect-scrollbar';

class EmailInbox extends React.Component {
	static contextType = PageSettings;

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.toggleMobileEmailNav = this.toggleMobileEmailNav.bind(this);
		this.state = {
			dropdownOpen: false,
			isMobileEmailNavOn: false
		};
	}

	componentDidMount() {
		this.context.handleSetPageContentFullHeight(true);
		this.context.handleSetPageContentFullWidth(true);
	}

	componentWillUnmount() {
		this.context.handleSetPageContentFullHeight(false);
		this.context.handleSetPageContentFullWidth(false);
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
	
	toggleMobileEmailNav() {
		this.setState(state => ({
      isMobileEmailNavOn: !state.isMobileEmailNavOn
    }));
	}
  
	render() {
		return (
			<div className="vertical-box with-grid inbox bg-light">
				<div className="vertical-box-column width-200 hidden-xs">
					<div className="vertical-box">
						<div className="wrapper text-center">
							<div className="d-flex align-items-center justify-content-center">
								<button onClick={this.toggleMobileEmailNav} className="btn btn-inverse btn-sm mr-auto d-block d-lg-none">
									<i className="fa fa-cog"></i>
								</button>
								<Link to="/email/compose" className="btn btn-inverse p-l-40 p-r-40 btn-sm">
									Compose
								</Link>
							</div>
						</div>
						<div className={"vertical-box-row collapse d-lg-table-row " + (this.state.isMobileEmailNavOn ? 'show' : '') }>
							<div className="vertical-box-cell">
								<div className="vertical-box-inner-cell">
									<PerfectScrollbar className="height-full" options={{suppressScrollX: true}}>
										<div className="wrapper p-0">
											<div className="nav-title"><b>FOLDERS</b></div>
											<ul className="nav nav-inbox">
												<li className="active"><Link to="/email/inbox"><i className="fa fa-inbox fa-fw m-r-5"></i> Inbox <span className="badge pull-right">52</span></Link></li>
												<li><Link to="/email/inbox"><i className="fa fa-flag fa-fw m-r-5"></i> Important</Link></li>
												<li><Link to="/email/inbox"><i className="fa fa-envelope fa-fw m-r-5"></i> Sent</Link></li>
												<li><Link to="/email/inbox"><i className="fa fa-pencil-alt fa-fw m-r-5"></i> Drafts</Link></li>
												<li><Link to="/email/inbox"><i className="fa fa-trash fa-fw m-r-5"></i> Trash</Link></li>
											</ul>
											<div className="nav-title"><b>LABEL</b></div>
											<ul className="nav nav-inbox">
												<li><Link to="/email/inbox"><i className="fa fa-fw f-s-10 m-r-5 fa-circle text-inverse"></i> Admin</Link></li>
												<li><Link to="/email/inbox"><i className="fa fa-fw f-s-10 m-r-5 fa-circle text-primary"></i> Designer & Employer</Link></li>
												<li><Link to="/email/inbox"><i className="fa fa-fw f-s-10 m-r-5 fa-circle text-success"></i> Staff</Link></li>
												<li><Link to="/email/inbox"><i className="fa fa-fw f-s-10 m-r-5 fa-circle text-warning"></i> Sponsorer</Link></li>
												<li><Link to="/email/inbox"><i className="fa fa-fw f-s-10 m-r-5 fa-circle text-danger"></i> Client</Link></li>
											</ul>
										</div>
									</PerfectScrollbar>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="vertical-box-column">
					<div className="vertical-box">
						<div className="wrapper">
							<div className="btn-toolbar align-items-center">
								<div className="custom-control custom-checkbox mr-2">
									<input type="checkbox" className="custom-control-input" id="emailSelectAll" />
									<label className="custom-control-label" htmlFor="emailSelectAll"></label>
								</div>
								<Dropdown className={"m-r-5"} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
									<DropdownToggle color="white" className={'btn-sm'} caret>
										View All
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem><i className="fa fa-circle f-s-10 fa-fw m-r-5"></i> All</DropdownItem>
										<DropdownItem><i className="fa fa-circle f-s-10 fa-fw m-r-5"></i> Unread</DropdownItem>
										<DropdownItem><i className="fa fa-circle f-s-10 fa-fw m-r-5"></i> Contacts</DropdownItem>
										<DropdownItem><i className="fa fa-circle f-s-10 fa-fw m-r-5"></i> Groups</DropdownItem>
										<DropdownItem><i className="fa fa-circle f-s-10 fa-fw m-r-5"></i> Newsletters</DropdownItem>
										<DropdownItem><i className="fa fa-circle f-s-10 fa-fw m-r-5"></i> Social updates</DropdownItem>
										<DropdownItem><i className="fa fa-circle f-s-10 fa-fw m-r-5"></i> Everything else</DropdownItem>
									</DropdownMenu>
								</Dropdown>
								<div className="btn-group m-r-5">
									<button className="btn btn-sm btn-white"><i className="fa fa-redo"></i></button>
								</div>
								<div className="btn-group d-none">
									<button className="btn btn-sm btn-white"><i className="fa fa-times m-r-3"></i> <span className="hidden-xs">Delete</span></button>
									<button className="btn btn-sm btn-white"><i className="fa fa-folder m-r-3"></i> <span className="hidden-xs">Archive</span></button>
									<button className="btn btn-sm btn-white"><i className="fa fa-trash m-r-3"></i> <span className="hidden-xs">Junk</span></button>
								</div>
								<div className="btn-group ml-auto">
									<button className="btn btn-white btn-sm">
										<i className="fa fa-chevron-left"></i>
									</button>
									<button className="btn btn-white btn-sm">
										<i className="fa fa-chevron-right"></i>
									</button>
								</div>
							</div>
						</div>
						<div className="vertical-box-row bg-white">
							<div className="vertical-box-cell">
								<div className="vertical-box-inner-cell">
									<PerfectScrollbar className="height-full" options={{suppressScrollX: true}}>
										<ListGroup className="list-group-lg no-radius list-email">
        							<ListGroupItem className="unread">
												<div className="email-checkbox">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="emailCheckbox1" />
														<label className="custom-control-label" htmlFor="emailCheckbox1"></label>
													</div>
												</div>
												<Link to="/email/detail" className="email-user bg-gradient-blue">
													<span className="text-white">F</span>
												</Link>
												<div className="email-info">
													<Link to="/email/detail">
														<span className="email-sender">Facebook Blueprint</span>
														<span className="email-title">Newly released courses, holiday marketing tips, how-to video, and more!</span>
														<span className="email-desc">Sed scelerisque dui lacus, quis pellentesque lorem tincidunt rhoncus. Nulla accumsan elit pharetra, lacinia turpis nec, varius erat.</span>
														<span className="email-time">Today</span>
													</Link>
												</div>
        							</ListGroupItem>
        							<ListGroupItem className="unread">
												<div className="email-checkbox">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="emailCheckbox2" />
														<label className="custom-control-label" htmlFor="emailCheckbox2"></label>
													</div>
												</div>
												<Link to="/email/detail" className="email-user bg-gradient-purple">
													<span className="text-white">C</span>
												</Link>
												<div className="email-info">
													<Link to="/email/detail">
														<span className="email-sender">Color Admin</span>
														<span className="email-title">Color Admin dashboard v2 is ready for live</span>
														<span className="email-desc">Proin interdum aliquam urna, quis lobortis magna tincidunt ac. Integer sed pulvinar neque...</span>
														<span className="email-time">Today</span>
													</Link>
												</div>
											</ListGroupItem>
        							<ListGroupItem className="unread">
												<div className="email-checkbox">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="emailCheckbox3" />
														<label className="custom-control-label" htmlFor="emailCheckbox3"></label>
													</div>
												</div>
												<Link to="/email/detail" className="email-user bg-grey">
													<span className="text-white">W</span>
												</Link>
												<div className="email-info">
													<Link to="/email/detail">
														<span className="email-sender">support@wrapbootstrap.com</span>
														<span className="email-title">Bootstrap v4.0 is coming soon</span>
														<span className="email-desc">Praesent id pulvinar orci. Donec ac metus non ligula faucibus venenatis. Suspendisse tortor est, placerat eu dui sed...</span>
														<span className="email-time">Today</span>
													</Link>
												</div>
											</ListGroupItem>
        							<ListGroupItem className="unread">
												<div className="email-checkbox">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="emailCheckbox4" />
														<label className="custom-control-label" htmlFor="emailCheckbox4"></label>
													</div>
												</div>
												<Link to="/email/detail" className="email-user bg-grey">
													<i className="fab fa-github-alt text-white"></i>
												</Link>
												<div className="email-info">
													<Link to="/email/detail">
														<span className="email-sender">Github</span>
														<span className="email-title">Sidebar animation bugfix</span>
														<span className="email-desc">Nam sit amet lacinia massa, sit amet blandit urna. Duis pharetra ex id ipsum posuere...</span>
														<span className="email-time">2 days ago</span>
													</Link>
												</div>
											</ListGroupItem>
        							<ListGroupItem>
												<div className="email-checkbox">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="emailCheckbox5" />
														<label className="custom-control-label" htmlFor="emailCheckbox5"></label>
													</div>
												</div>
												<Link to="/email/detail" className="email-user bg-grey">
													<span className="text-white">W</span>
												</Link>
												<div className="email-info">
													<Link to="/email/detail">
														<span className="email-sender">Wrapbootstrap</span>
														<span className="email-title">Bootstrap Framework is awesome</span>
														<span className="email-desc">Etiam enim ipsum, malesuada in consectetur interdum, malesuada et lacus. Aenean faucibus turpis lorem...</span>
														<span className="email-time">1 week ago</span>
													</Link>
												</div>
											</ListGroupItem>
        							<ListGroupItem>
												<div className="email-checkbox">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="emailCheckbox6" />
														<label className="custom-control-label" htmlFor="emailCheckbox6"></label>
													</div>
												</div>
												<Link to="/email/detail" className="email-user">
													<img src="/assets/img/user/user-12.jpg" alt="" />
												</Link>
												<div className="email-info">
													<Link to="/email/detail">
														<span className="email-sender">Gerald Huff</span>
														<span className="email-title">Handlebars help you to build semantic template </span>
														<span className="email-desc">Proin consectetur accumsan rhoncus. Nulla porta orci ultricies lectus consequat fringilla. Vestibulum ante ipsum primis in faucibus...</span>
														<span className="email-time">2 months ago</span>
													</Link>
												</div>
											</ListGroupItem>
        							<ListGroupItem>
												<div className="email-checkbox">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="emailCheckbox7" />
														<label className="custom-control-label" htmlFor="emailCheckbox7"></label>
													</div>
												</div>
												<Link to="/email/detail" className="email-user">
													<img src="/assets/img/user/user-1.jpg" alt="" />
												</Link>
												<div className="email-info">
													<Link to="/email/detail">
														<span className="email-sender">Rick	Hopkins</span>
														<span className="email-title">jQuery 2++ no longer compatibility with the old browser</span>
														<span className="email-desc">Suspendisse ut urna orci. Vivamus ac diam sollicitudin, consequat mauris id, facilisis ipsum. Nam feugiat nisl a justo...</span>
														<span className="email-time">2 months ago</span>
													</Link>
												</div>
											</ListGroupItem>
        							<ListGroupItem>
												<div className="email-checkbox">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="emailCheckbox8" />
														<label className="custom-control-label" htmlFor="emailCheckbox8"></label>
													</div>
												</div>
												<Link to="/email/detail" className="email-user">
													<img src="/assets/img/user/user-13.jpg" alt="" />
												</Link>
												<div className="email-info">
													<Link to="/email/detail">
														<span className="email-sender">Jan Scott</span>
														<span className="email-title">LESS & SASS, which one is good?</span>
														<span className="email-desc">Nam vulputate cursus imperdiet. Sed sodales urna vitae ipsum iaculis, at fermentum...</span>
														<span className="email-time">2 months ago</span>
													</Link>
												</div>
											</ListGroupItem>
        							<ListGroupItem>
												<div className="email-checkbox">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="emailCheckbox9" />
														<label className="custom-control-label" htmlFor="emailCheckbox9"></label>
													</div>
												</div>
												<Link to="/email/detail" className="email-user">
													<img src="/assets/img/user/user-14.jpg" alt="" />
												</Link>
												<div className="email-info">
													<Link to="/email/detail">
														<span className="email-sender">Nadine Barnes</span>
														<span className="email-title">Simple Line Icons is available on Color Admin v1.4</span>
														<span className="email-desc">Maecenas auctor dui sit amet tristique congue. Pellentesque lobortis nulla quam. Etiam in vulputate magna...</span>
														<span className="email-time">3 months ago</span>
													</Link>
												</div>
											</ListGroupItem>
        							<ListGroupItem>
												<div className="email-checkbox">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="emailCheckbox10" />
														<label className="custom-control-label" htmlFor="emailCheckbox10"></label>
													</div>
												</div>
												<Link to="/email/detail" className="email-user bg-grey">
													<span className="text-white">E</span>
												</Link>
												<div className="email-info">
													<Link to="/email/detail">
														<span className="email-sender">Ellen Underwood</span>
														<span className="email-title">Font Awesome 5 is available now</span>
														<span className="email-desc">Proin consectetur accumsan rhoncus. Nulla porta orci ultricies lectus consequat fringilla. Vestibulum ante ipsum primis in faucibus...</span>
														<span className="email-time">3 months ago</span>
													</Link>
												</div>
											</ListGroupItem>
        							<ListGroupItem>
												<div className="email-checkbox">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="emailCheckbox11" />
														<label className="custom-control-label" htmlFor="emailCheckbox11"></label>
													</div>
												</div>
												<Link to="/email/detail" className="email-user bg-grey">
													<span className="text-white">W</span>
												</Link>
												<div className="email-info">
													<Link to="/email/detail">
														<span className="email-sender">newsletter@wrapbootstrap.com</span>
														<span className="email-title">Cyber week sale! Save up to 45%</span>
														<span className="email-desc">Praesent id pulvinar orci. Donec ac metus non ligula faucibus venenatis. Suspendisse tortor est, placerat eu dui sed...</span>
														<span className="email-time">3 months ago</span>
													</Link>
												</div>
											</ListGroupItem>
        							<ListGroupItem>
												<div className="email-checkbox">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="emailCheckbox12" />
														<label className="custom-control-label" htmlFor="emailCheckbox12"></label>
													</div>
												</div>
												<Link to="/email/detail" className="email-user bg-grey">
													<span className="text-white">S</span>
												</Link>
												<div className="email-info">
													<Link to="/email/detail">
														<span className="email-sender">Starbucks</span>
														<span className="email-title">Get your favorite Grande handcrafted beverage at $13</span>
														<span className="email-desc">Nam vulputate cursus imperdiet. Sed sodales urna vitae ipsum iaculis, at fermentum...</span>
														<span className="email-time">3 months ago</span>
													</Link>
												</div>
											</ListGroupItem>
        						</ListGroup>
									</PerfectScrollbar>
								</div>
							</div>
						</div>
						<div className="wrapper clearfix">
							<div className="btn-group pull-right">
								<button className="btn btn-white btn-sm">
									<i className="fa fa-chevron-left"></i>
								</button>
								<button className="btn btn-white btn-sm">
									<i className="fa fa-chevron-right"></i>
								</button>
							</div>
							<div className="m-t-5 text-inverse f-w-600">1,232 messages</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default EmailInbox;