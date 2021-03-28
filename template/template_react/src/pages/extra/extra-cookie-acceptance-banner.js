import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';

class ExtraCookieAcceptanceBanner extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showModal: true
		}
	}
	
	hideBanner() {
		this.setState({ showModal: false });
	}
	
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/extra/cookie-acceptance-banner">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/extra/cookie-acceptance-banner">Extra</Link></li>
					<li className="breadcrumb-item active">Cookie Acceptance Banner</li>
				</ol>
				<h1 className="page-header">Cookie Acceptance Banner <small>header small text goes here...</small></h1>
				<Panel>
					<PanelHeader>Panel Title here</PanelHeader>
					<PanelBody>
						Panel Content Here
					</PanelBody>
				</Panel>
				<div className="position-fixed" style={{ "left": "0", "right": "0", "bottom": "0", "zIndex": "1020"}}>
					<Alert color="primary" isOpen={this.state.showModal} className="bg-inverse-transparent-9 text-white rounded-0 mb-0 d-md-flex align-items-center pl-xl-5 pr-xl-5 pt-xl-4 pt-4 pb-xl-4">
						<div className="flex-fill">
							<h4>This website uses cookies</h4>
							<p className="mb-0">
								We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.
							</p>
						</div>
						<div className="pl-xl-4 pt-xl-0 pt-3">
							<button onClick={() => this.hideBanner()} className="btn btn-outline-white btn-lg width-150" data-dismiss="alert">Accept</button>
						</div>
					</Alert>
				</div>
			</div>
		)
	}
}

export default ExtraCookieAcceptanceBanner;