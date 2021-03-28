import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import { PageSettings } from './../../config/page-settings.js';

class PageBoxedLayoutWithMixedMenu extends React.Component {
	static contextType = PageSettings;

	componentDidMount() {
		this.context.handleSetPageBoxedLayout(true);
		this.context.handleSetPageTopMenu(true);
	}

	componentWillUnmount() {
		this.context.handleSetPageBoxedLayout(false);
		this.context.handleSetPageTopMenu(false);
	}
  
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/page-option/boxed-layout-with-mixed-menu">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/page-option/boxed-layout-with-mixed-menu">Page Options</Link></li>
					<li className="breadcrumb-item active">Boxed Layout with Mixed Menu</li>
				</ol>
				<h1 className="page-header">Boxed Layout with Mixed Menu <small>header small text goes here...</small></h1>
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

export default PageBoxedLayoutWithMixedMenu;