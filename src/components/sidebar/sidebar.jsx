import React from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { PageSettings } from './../../config/page-settings.js';
import SidebarProfile from './sidebar-profile.jsx';
import SidebarNav from './sidebar-nav.jsx';

class Sidebar extends React.Component {
	static contextType = PageSettings;
	
	render() {
		return (
			<PageSettings.Consumer>
				{({toggleSidebarMinify, toggleMobileSidebar, pageSidebarTransparent}) => (
					<React.Fragment>
						<div id="sidebar" className={'sidebar ' + (pageSidebarTransparent ? 'sidebar-transparent' : '')}>
							<PerfectScrollbar className="height-full" options={{suppressScrollX: true}}>
								{!this.context.pageSidebarSearch && (
								<SidebarProfile />
								)}
								<SidebarNav />
								<Link to="/" className="sidebar-minify-btn" onClick={toggleSidebarMinify}>
									<i className="fa fa-angle-double-left"></i>
								</Link>
							</PerfectScrollbar>
						</div>
						<div className="sidebar-bg"></div>
						<div className="sidebar-mobile-dismiss" onClick={toggleMobileSidebar}></div>
					</React.Fragment>
				)}
			</PageSettings.Consumer>
		)
	}
}

export default Sidebar;
