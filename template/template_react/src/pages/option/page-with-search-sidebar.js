import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import { PageSettings } from './../../config/page-settings.js';

class PageWithSearchSidebar extends React.Component {
	static contextType = PageSettings;

	componentDidMount() {
		this.context.handleSetPageSidebarSearch(true);
	}

	componentWillUnmount() {
		this.context.handleSetPageSidebarSearch(false);
	}
	
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/page-option/with-top-menu">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/page-option/with-top-menu">Page Options</Link></li>
					<li className="breadcrumb-item active">Page with Search Sidebar</li>
				</ol>
				<h1 className="page-header">Page with Search Sidebar <small>header small text goes here...</small></h1>
				<Panel>
					<PanelHeader>Panel Title here</PanelHeader>
					<PanelBody>
						Panel Content Here
					</PanelBody>
				</Panel>
			</div>
		)
	}
}

export default PageWithSearchSidebar;