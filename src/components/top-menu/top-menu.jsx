import React from 'react';
import TopMenuNav from './top-menu-nav.jsx';
import { PageSettings } from './../../config/page-settings.js';

class TopMenu extends React.Component {
	render() {
		return (
			<PageSettings.Consumer>
				{({pageMobileTopMenu}) => (
					<div id="top-menu" className={'top-menu ' + (pageMobileTopMenu ? 'd-block ': '')}>
						<TopMenuNav />
					</div>
				)}
			</PageSettings.Consumer>
		)
	}
}

export default TopMenu;