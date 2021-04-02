import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import { PageSettings } from './../../config/page-settings.js';

class PageWithoutSidebar extends React.Component {
	static contextType = PageSettings;

	componentDidMount() {
		this.context.handleSetPageSidebar(false);
	}

	componentWillUnmount() {
		this.context.handleSetPageSidebar(true);
	}
	
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/page-option/without-sidebar">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/page-option/without-sidebar">Page Options</Link></li>
					<li className="breadcrumb-item active">Page without Sidebar</li>
				</ol>
				<h1 className="page-header">Page without Sidebar <small>header small text goes here...</small></h1>
		
				<Panel>
					<PanelHeader>Panel Title here</PanelHeader>
					<PanelBody>
						Panel Content Here
					</PanelBody>
				</Panel>
				
				<p>
					<Link to="/page-option/with-footer" className="btn btn-success">
						<i className="fa fa-arrow-circle-left"></i> Back to previous page
					</Link>
				</p>
			</div>
		)
	}
}

export default PageWithoutSidebar;