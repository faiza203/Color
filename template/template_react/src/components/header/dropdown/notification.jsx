import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropdownNotification extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
  
	render() {
		return (
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="dropdown" tag="li">
				<DropdownToggle className="f-s-14" tag="a">
					<i className="fa fa-bell"></i>
					<span className="label">5</span>
				</DropdownToggle>
				<DropdownMenu className="media-list dropdown-menu-right" tag="ul">
					<DropdownItem className="dropdown-header" tag="li" header>NOTIFICATIONS (5)</DropdownItem>
					<DropdownItem className="media">
						<div className="media-left">
							<i className="fa fa-bug media-object bg-silver-darker"></i>
						</div>
						<div className="media-body">
							<h6 className="media-heading">Server Error Reports <i className="fa fa-exclamation-circle text-danger"></i></h6>
							<div className="text-muted f-s-11">3 minutes ago</div>
						</div>
					</DropdownItem>
					<DropdownItem className="media">
						<div className="media-left">
							<img src="../assets/img/user/user-1.jpg" className="media-object" alt="" />
							<i className="fab fa-facebook-messenger text-primary media-object-icon"></i>
						</div>
						<div className="media-body">
							<h6 className="media-heading">John Smith</h6>
							<p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>
							<div className="text-muted f-s-11">25 minutes ago</div>
						</div>
					</DropdownItem>
					<DropdownItem className="media">
						<div className="media-left">
							<img src="../assets/img/user/user-2.jpg" className="media-object" alt="" />
							<i className="fab fa-facebook-messenger text-primary media-object-icon"></i>
						</div>
						<div className="media-body">
							<h6 className="media-heading">Olivia</h6>
							<p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>
							<div className="text-muted f-s-11">35 minutes ago</div>
						</div>
					</DropdownItem>
					<DropdownItem className="media">
						<div className="media-left">
							<i className="fa fa-plus media-object bg-silver-darker"></i>
						</div>
						<div className="media-body">
							<h6 className="media-heading"> New User Registered</h6>
							<div className="text-muted f-s-11">1 hour ago</div>
						</div>
					</DropdownItem>
					<DropdownItem className="media">
						<div className="media-left">
							<i className="fa fa-envelope media-object bg-silver-darker"></i>
							<i className="fab fa-google text-warning media-object-icon f-s-14"></i>
						</div>
						<div className="media-body">
							<h6 className="media-heading"> New Email From John</h6>
							<div className="text-muted f-s-11">2 hour ago</div>
						</div>
					</DropdownItem>
					<DropdownItem className="dropdown-footer text-center">
						View more
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
};

export default DropdownNotification;
