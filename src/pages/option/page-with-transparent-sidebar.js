import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import { PageSettings } from './../../config/page-settings.js';

class PageWithTransparentSidebar extends React.Component {
	static contextType = PageSettings;

	componentDidMount() {
		this.context.handleSetPageSidebarTransparent(true);
	}

	componentWillUnmount() {
		this.context.handleSetPageSidebarTransparent(false);
	}
	
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/page-option/with-transparent-sidebar">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/page-option/with-transparent-sidebar">Page Options</Link></li>
					<li className="breadcrumb-item active">Page with Transparent Sidebar</li>
				</ol>
				<h1 className="page-header">Page with Transparent Sidebar <small>header small text goes here...</small></h1>
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

export default PageWithTransparentSidebar;