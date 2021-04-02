import React from 'react';
import { Link } from 'react-router-dom';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { InputGroup, Input, InputGroupButtonDropdown, Button } from 'reactstrap';

class ExtraSearch extends React.Component {
	constructor(props) {
		super(props);

		this.toggleDropDown = this.toggleDropDown.bind(this);
		this.toggleSplit = this.toggleSplit.bind(this);
		this.state = {
			dropdownOpen: false,
			splitButtonOpen: false
		};
	}

	toggleDropDown() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	toggleSplit() {
		this.setState({
			splitButtonOpen: !this.state.splitButtonOpen
		});
	}
  
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/extra/search">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/extra/search">Extra</Link></li>
					<li className="breadcrumb-item active">Search Results</li>
				</ol>
				<h1 className="page-header">Search Results <small>3 results found</small></h1>
				<div className="row">
					<div className="col-md-12">
						<div className="result-container">
							<InputGroup size="lg" className="m-b-20">
								<Input placeholder="Enter keywords here..." type="text" className="input-white" />
								<InputGroupButtonDropdown addonType="append" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
									<Button color="primary"><i className="fa fa-search fa-fw"></i> Search</Button>
									<DropdownToggle color="primary" split>
										<i className="fa fa-cog fa-fw"></i>
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem>Action</DropdownItem>
										<DropdownItem>Another Action</DropdownItem>
										<DropdownItem>Something else here</DropdownItem>
										<DropdownItem divider />
										<DropdownItem>Separated link</DropdownItem>
									</DropdownMenu>
								</InputGroupButtonDropdown>
							</InputGroup>
							<div className="d-block d-md-flex align-items-center mb-3">
								<UncontrolledButtonDropdown className="mr-2">
									<DropdownToggle color="white" className="btn-white-without-border" caret>
										Filters by
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem>Posted Date</DropdownItem>
										<DropdownItem>View Count</DropdownItem>
										<DropdownItem>Total View</DropdownItem>
										<DropdownItem divider />
										<DropdownItem>Location</DropdownItem>
									</DropdownMenu>
								</UncontrolledButtonDropdown>
								<div className="btn-group">
									<Link to="/extra/search" className="btn btn-white btn-white-without-border"><i className="fa fa-list"></i></Link>
									<Link to="/extra/search" className="btn btn-white btn-white-without-border"><i className="fa fa-th"></i></Link>
									<Link to="/extra/search" className="btn btn-white btn-white-without-border"><i className="fa fa-th-large"></i></Link>
								</div>
								<div className="ml-auto d-none d-lg-block">
									<ul className="pagination mb-0">
										<li className="page-item disabled"><Link to="/extra/search" className="page-link">«</Link></li>
										<li className="page-item active"><Link to="/extra/search" className="page-link">1</Link></li>
										<li className="page-item"><Link to="/extra/search" className="page-link">2</Link></li>
										<li className="page-item"><Link to="/extra/search" className="page-link">3</Link></li>
										<li className="page-item"><Link to="/extra/search" className="page-link">4</Link></li>
										<li className="page-item"><Link to="/extra/search" className="page-link">5</Link></li>
										<li className="page-item"><Link to="/extra/search" className="page-link">6</Link></li>
										<li className="page-item"><Link to="/extra/search" className="page-link">7</Link></li>
										<li className="page-item"><Link to="/extra/search" className="page-link">»</Link></li>
									</ul>
								</div>
							</div>
							<ul className="result-list">
								<li>
									<Link to="/extra/search" className="result-image" style={{backgroundImage: 'url(/assets/img/gallery/gallery-51.jpg)'}}></Link>
									<div className="result-info">
										<h4 className="title"><Link to="/extra/search">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link></h4>
										<p className="location">United State, BY 10089</p>
										<p className="desc">
											Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
										</p>
										<div className="btn-row">
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Analytics"><i className="fa fa-fw fa-chart-bar"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Tasks"><i className="fa fa-fw fa-tasks"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Configuration"><i className="fa fa-fw fa-cog"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Performance"><i className="fa fa-fw fa-tachometer-alt"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Users"><i className="fa fa-fw fa-user"></i></Link>
										</div>
									</div>
									<div className="result-price">
										$92,101 <small>PER MONTH</small>
										<Link to="/extra/search" className="btn btn-yellow btn-block">View Details</Link>
									</div>
								</li>
								<li>
									<Link to="/extra/search" className="result-image" style={{backgroundImage: 'url(/assets/img/gallery/gallery-52.jpg)'}}></Link>
									<div className="result-info">
										<h4 className="title"><Link to="/extra/search">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link></h4>
										<p className="location">United State, BY 10089</p>
										<p className="desc">
											Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
										</p>
										<div className="btn-row">
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Analytics"><i className="fa fa-fw fa-chart-bar"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Tasks"><i className="fa fa-fw fa-tasks"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Configuration"><i className="fa fa-fw fa-cog"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Performance"><i className="fa fa-fw fa-tachometer-alt"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Users"><i className="fa fa-fw fa-user"></i></Link>
										</div>
									</div>
									<div className="result-price">
										$102,232 <small>PER MONTH</small>
										<Link to="/extra/search" className="btn btn-yellow btn-block">View Details</Link>
									</div>
								</li>
								<li>
									<Link to="/extra/search" className="result-image" style={{backgroundImage: 'url(/assets/img/gallery/gallery-53.jpg)'}}></Link>
									<div className="result-info">
										<h4 className="title"><Link to="/extra/search">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link></h4>
										<p className="location">United State, BY 10089</p>
										<p className="desc">
											Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
										</p>
										<div className="btn-row">
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Analytics"><i className="fa fa-fw fa-chart-bar"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Tasks"><i className="fa fa-fw fa-tasks"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Configuration"><i className="fa fa-fw fa-cog"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Performance"><i className="fa fa-fw fa-tachometer-alt"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Users"><i className="fa fa-fw fa-user"></i></Link>
										</div>
									</div>
									<div className="result-price">
										$183,921 <small>PER MONTH</small>
										<Link to="/extra/search" className="btn btn-yellow btn-block">View Details</Link>
									</div>
								</li>
								<li>
									<Link to="/extra/search" className="result-image" style={{backgroundImage: 'url(/assets/img/gallery/gallery-54.jpg)'}}></Link>
									<div className="result-info">
										<h4 className="title"><Link to="/extra/search">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link></h4>
										<p className="location">United State, BY 10089</p>
										<p className="desc">
											Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
										</p>
										<div className="btn-row">
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Analytics"><i className="fa fa-fw fa-chart-bar"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Tasks"><i className="fa fa-fw fa-tasks"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Configuration"><i className="fa fa-fw fa-cog"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Performance"><i className="fa fa-fw fa-tachometer-alt"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Users"><i className="fa fa-fw fa-user"></i></Link>
										</div>
									</div>
									<div className="result-price">
										$82,991 <small>PER MONTH</small>
										<Link to="/extra/search" className="btn btn-yellow btn-block">View Details</Link>
									</div>
								</li>
								<li>
									<Link to="/extra/search" className="result-image" style={{backgroundImage: 'url(/assets/img/gallery/gallery-55.jpg)'}}></Link>
									<div className="result-info">
										<h4 className="title"><Link to="/extra/search">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link></h4>
										<p className="location">United State, BY 10089</p>
										<p className="desc">
											Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
										</p>
										<div className="btn-row">
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Analytics"><i className="fa fa-fw fa-chart-bar"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Tasks"><i className="fa fa-fw fa-tasks"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Configuration"><i className="fa fa-fw fa-cog"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Performance"><i className="fa fa-fw fa-tachometer-alt"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Users"><i className="fa fa-fw fa-user"></i></Link>
										</div>
									</div>
									<div className="result-price">
										$422,999 <small>PER MONTH</small>
										<Link to="/extra/search" className="btn btn-yellow btn-block">View Details</Link>
									</div>
								</li>
								<li>
									<Link to="/extra/search" className="result-image" style={{backgroundImage: 'url(/assets/img/gallery/gallery-56.jpg)'}}></Link>
									<div className="result-info">
										<h4 className="title"><Link to="/extra/search">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link></h4>
										<p className="location">United State, BY 10089</p>
										<p className="desc">
											Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
										</p>
										<div className="btn-row">
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Analytics"><i className="fa fa-fw fa-chart-bar"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Tasks"><i className="fa fa-fw fa-tasks"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Configuration"><i className="fa fa-fw fa-cog"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Performance"><i className="fa fa-fw fa-tachometer-alt"></i></Link>
											<Link to="/extra/search" data-toggle="tooltip" data-container="body" data-title="Users"><i className="fa fa-fw fa-user"></i></Link>
										</div>
									</div>
									<div className="result-price">
										$891,872 <small>PER MONTH</small>
										<Link to="/extra/search" className="btn btn-yellow btn-block">View Details</Link>
									</div>
								</li>
							</ul>
							<div className="clearfix m-t-20">
								<ul className="pagination pull-right">
									<li className="page-item disabled"><Link to="/extra/search" className="page-link">«</Link></li>
									<li className="page-item active"><Link to="/extra/search" className="page-link">1</Link></li>
									<li className="page-item"><Link to="/extra/search" className="page-link">2</Link></li>
									<li className="page-item"><Link to="/extra/search" className="page-link">3</Link></li>
									<li className="page-item"><Link to="/extra/search" className="page-link">4</Link></li>
									<li className="page-item"><Link to="/extra/search" className="page-link">5</Link></li>
									<li className="page-item"><Link to="/extra/search" className="page-link">6</Link></li>
									<li className="page-item"><Link to="/extra/search" className="page-link">7</Link></li>
									<li className="page-item"><Link to="/extra/search" className="page-link">»</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ExtraSearch;