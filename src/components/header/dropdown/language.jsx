import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropdownLanguage extends React.Component {
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
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="dropdown navbar-languager" tag="li">
				<DropdownToggle className="dropdown-toggle" tag="a">
					<span className="flag-icon flag-icon-us m-r-5" title="us"></span>
					<span className="name d-none d-sm-inline">EN</span>
				</DropdownToggle>
				<DropdownMenu className="dropdown-menu dropdown-menu-right" tag="ul">
					<DropdownItem><span className="flag-icon flag-icon-us m-r-5" title="us"></span> English</DropdownItem>
					<DropdownItem><span className="flag-icon flag-icon-cn m-r-5" title="cn"></span> Chinese</DropdownItem>
					<DropdownItem><span className="flag-icon flag-icon-jp m-r-5" title="jp"></span> Japanese</DropdownItem>
					<DropdownItem><span className="flag-icon flag-icon-be m-r-5" title="be"></span> Belgium</DropdownItem>
					<DropdownItem divider></DropdownItem>
					<DropdownItem className="text-center">more options</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
};

export default DropdownLanguage;
