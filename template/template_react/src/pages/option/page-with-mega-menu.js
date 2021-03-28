import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import { PageSettings } from './../../config/page-settings.js';

class PageWithMegaMenu extends React.Component {
	static contextType = PageSettings;

	componentDidMount() {
		this.context.handleSetPageHeaderMegaMenu(true);
	}

	componentWillUnmount() {
		this.context.handleSetPageHeaderMegaMenu(false);
	}
  
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/page-option/with-mega-menu">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/page-option/with-mega-menu">Page Options</Link></li>
					<li className="breadcrumb-item active">Page with Mega Menu</li>
				</ol>
				<h1 className="page-header">Page with Mega Menu <small>header small text goes here...</small></h1>
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

export default PageWithMegaMenu;