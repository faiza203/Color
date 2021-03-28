import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import { PageSettings } from './../../config/page-settings.js';

class PageWithTopMenu extends React.Component {
	static contextType = PageSettings;

	componentDidMount() {
		this.context.handleSetPageTopMenu(true);
		this.context.handleSetPageSidebar(false);
	}

	componentWillUnmount() {
		this.context.handleSetPageTopMenu(false);
		this.context.handleSetPageSidebar(true);
	}
	
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/page-option/with-top-menu">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/page-option/with-top-menu">Page Options</Link></li>
					<li className="breadcrumb-item active">Page with Top Menu</li>
				</ol>
				<h1 className="page-header">Page with Top Menu <small>header small text goes here...</small></h1>
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

export default PageWithTopMenu;