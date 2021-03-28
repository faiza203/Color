import React from 'react';
import { Route } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';
import FloatSubMenuList from './float-sub-menu-list.jsx';

class FloatSubMenu extends React.Component {
	static contextType = PageSettings;
	
	constructor(props) {
		super(props);
		this.state = {
			active: -1,
			clicked: -1
		};
	}
	
	handleExpand(e, i, match) {
		e.preventDefault();
		
		if (this.state.clicked === -1 && match) {
			this.setState(state => ({
				active: -1,
				clicked: 1
			}));
		} else {
			this.setState(state => ({
				active: (this.state.active === i ? -1 : i),
				clicked: 1
			}));
		}
		setTimeout(() => {
			this.context.handleFloatSubMenuClick();
		}, 0);
	}
	
	render() {
		return (
			<PageSettings.Consumer>
				{({ 
					pageFloatSubMenu, 
					pageFloatSubMenuActive,
					pageFloatSubMenuTop,
					pageFloatSubMenuLeft,
					pageFloatSubMenuBottom,
					pageFloatSubMenuLineTop,
					pageFloatSubMenuLineBottom,
					pageFloatSubMenuArrowTop,
					pageFloatSubMenuArrowBottom,
					handleFloatSubMenuOnMouseOver,
					handleFloatSubMenuOnMouseOut
				}) => (
					<div id="float-sub-menu" 
						onMouseOver={handleFloatSubMenuOnMouseOver} 
						onMouseOut={handleFloatSubMenuOnMouseOut} 
						className={"float-sub-menu-container " + (pageFloatSubMenuActive ? 'd-block' : 'd-none')} 
						style={{ 
							left: pageFloatSubMenuLeft, 
							top: pageFloatSubMenuTop, 
							bottom: pageFloatSubMenuBottom 
						}}>
						<div className="float-sub-menu-arrow" style={{ 
							top: pageFloatSubMenuArrowTop, 
							bottom: pageFloatSubMenuArrowBottom 
						}}>
						</div>
						<div className="float-sub-menu-line" style={{ 
							top: pageFloatSubMenuLineTop, 
							bottom: pageFloatSubMenuLineBottom 
						}}>
						</div>
						<ul className="float-sub-menu">
							{pageFloatSubMenu.children && pageFloatSubMenu.children.map((menu, i) => (
								<Route path={menu.path} exact={menu.exact} key={i} children={({ match }) => (
									<FloatSubMenuList
										data={menu} 
										key={i} 
										expand={(e) => this.handleExpand(e, i, match)}
										active={i === this.state.active} 
										clicked={this.state.clicked}
									/>
								)} />
							))}
						</ul>
					</div>
				)}
			</PageSettings.Consumer>
		);
	}
};

export default FloatSubMenu;
