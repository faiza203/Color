import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';

class PageBlank extends React.Component {
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/page-option/blank">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/page-option/blank">Page Options</Link></li>
					<li className="breadcrumb-item active">Blank Page</li>
				</ol>
				<h1 className="page-header">Blank Page <small>header small text goes here...</small></h1>
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

export default PageBlank;