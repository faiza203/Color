import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropdownProfile extends React.Component {
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
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="dropdown navbar-user" tag="li">
				<DropdownToggle tag="a">
					<img src="../assets/img/user/user-13.jpg" alt="" /> 
					<span className="d-none d-md-inline">Adam Schwartz</span> <b className="caret"></b>
				</DropdownToggle>
				<DropdownMenu className="dropdown-menu dropdown-menu-right" tag="ul">
					<DropdownItem>Edit Profile</DropdownItem>
					<DropdownItem><span className="badge badge-danger pull-right">2</span> Inbox</DropdownItem>
					<DropdownItem>Calendar</DropdownItem>
					<DropdownItem>Setting</DropdownItem>
					<div className="dropdown-divider"></div>
					<DropdownItem>Log Out</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
};

export default DropdownProfile;
