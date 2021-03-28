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
					<span className="label">0</span>
				</DropdownToggle>
				<DropdownMenu className="media-list dropdown-menu-right" tag="ul">
					<DropdownItem className="dropdown-header" tag="li" header>NOTIFICATIONS (0)</DropdownItem>
					<DropdownItem className="text-center p-10">
						No notification found
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
};

export default DropdownNotification;
