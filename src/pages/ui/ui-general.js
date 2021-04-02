import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import { Alert } from 'reactstrap';
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

class UIGeneral extends React.Component {
	constructor(props) {
		super(props);
		
		this.codeMirrorOptions = {
			mode: 'application/xml',
			theme: 'material',
			lineNumbers: true,
			indentWithTabs: true,
			tabSize: 2,
			autoScroll: false
		}
		this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
	}
	
	onDismiss() {
    this.setState({ visible: false });
  }
	
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/ui">UI Elements</Link></li>
					<li className="breadcrumb-item active">General</li>
				</ol>
				<h1 className="page-header">General UI Elements <small>header small text goes here...</small></h1>
		
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>Alerts</PanelHeader>
							<PanelBody>
								<Alert color="success" className="mb-0" isOpen={this.state.visible} toggle={this.onDismiss}>
									<strong>Success!</strong>
									This is a success alert with <Link to="/ui/general" className="alert-link">an example link</Link>.
								</Alert>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>\n'+
'	<strong>Success!</strong>\n'+
'	This is a success alert with \n'+
'	<Link to="/ui/general" className="alert-link">an example link</Link>. \n'+
'</Alert>'}
							/>
						</Panel>
						<Panel>
							<PanelHeader>Alerts Color <span className="label label-success">NEW</span></PanelHeader>
							<PanelBody>
								<div className="row row-space-10">
									<div className="col-md-4">
										<Alert color="primary" className="m-b-10">
											Primary alert with <Link to="/ui/general" className="alert-link">an example link</Link>.
										</Alert>
									</div>
									<div className="col-md-4">
										<Alert color="info" className="m-b-10">
											Info alert with <Link to="/ui/general" className="alert-link">an example link</Link>.
										</Alert>
									</div>
									<div className="col-md-4">
										<Alert color="purple" className="m-b-10">
											Purple alert with <Link to="/ui/general" className="alert-link">an example link</Link>.
										</Alert>
									</div>
									<div className="col-md-4">
										<Alert color="indigo" className="m-b-10">
											Indigo alert with <Link to="/ui/general" className="alert-link">an example link</Link>.
										</Alert>
									</div>
									<div className="col-md-4">
										<Alert color="success" className="m-b-10">
											Success alert with <Link to="/ui/general" className="alert-link">an example link</Link>.
										</Alert>
									</div>
									<div className="col-md-4">
										<Alert color="green" className="m-b-10">
											Green alert with <Link to="/ui/general" className="alert-link">an example link</Link>.
										</Alert>
									</div>
									<div className="col-md-4">
										<Alert color="lime" className="m-b-10">
											Lime alert with <Link to="/ui/general" className="alert-link">an example link</Link>.
										</Alert>
									</div>
									<div className="col-md-4">
										<Alert color="warning" className="m-b-10">
											Warning alert with <Link to="/ui/general" className="alert-link">an example link</Link>.
										</Alert>
									</div>
									<div className="col-md-4">
										<Alert color="yellow" className="m-b-10">
											Yellow alert with <Link to="/ui/general" className="alert-link">an example link</Link>.
										</Alert>
									</div>
									<div className="col-md-4">
										<Alert color="danger" className="m-b-10">
											Danger alert with <Link to="/ui/general" className="alert-link">an example link</Link>.
										</Alert>
									</div>
									<div className="col-md-4">
										<Alert color="pink" className="m-b-10">
											Pink alert with <Link to="/ui/general" className="alert-link">an example link</Link>.
										</Alert>
									</div>
									<div className="col-md-4">
										<Alert color="dark" className="m-b-10">
											Dark alert with <Link to="/ui/general" className="alert-link">an example link</Link>.
										</Alert>
									</div>
									<div className="col-md-4">
										<Alert color="secondary" className="m-b-10">
											Secondary alert with <Link to="/ui/general" className="alert-link">an example link</Link>.
										</Alert>
									</div>
									<div className="col-md-4">
										<Alert color="light" className="m-b-10">
											Light alert with <Link to="/ui/general" className="alert-link">an example link</Link>.
										</Alert>
									</div>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Alert color="primary">...</Alert>\n'+
'<Alert color="secondary">...</Alert>\n'+
'<Alert color="success">...</Alert>\n'+
'<Alert color="danger">...</Alert>\n'+
'<Alert color="warning">...</Alert>\n'+
'<Alert color="yellow">...</Alert>\n'+
'<Alert color="info">...</Alert>\n'+
'<Alert color="lime">...</Alert>\n'+
'<Alert color="purple">...</Alert>\n'+
'<Alert color="light">...</Alert>\n'+
'<Alert color="dark">...</Alert>\n'+
'<Alert color="indigo">...</Alert>\n'+
'<Alert color="pink">...</Alert>\n'+
'<Alert color="green">...</Alert>'}
							/>
						</Panel>
						<Panel>
							<PanelHeader>Notes</PanelHeader>
							<PanelBody>
								<div className="note note-primary m-b-15">
									<div className="note-icon"><i className="fab fa-facebook-f"></i></div>
									<div className="note-content">
										<h4><b>Note with icon!</b></h4>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
											Maecenas id gravida libero. Etiam semper id sem a ultricies.
										</p>
									</div>
								</div>
								<div className="note note-warning note-with-right-icon m-b-15">
									<div className="note-icon"><i className="fa fa-lightbulb"></i></div>
									<div className="note-content text-right">
										<h4><b>Note with right icon!</b></h4>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
											Maecenas id gravida libero. Etiam semper id sem a ultricies.
										</p>
									</div>
								</div>
								<div className="note note-secondary m-b-15">
									<div className="note-content">
										<h4><b>Note without icon!</b></h4>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
											Maecenas id gravida libero. Etiam semper id sem a ultricies.
										</p>
									</div>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<!-- default -->\n'+
'<div className="note note-primary">\n'+
'	<div className="note-icon"><i className="fab fa-facebook-f"></i></div>\n'+
'	<div className="note-content">\n'+
'		<h4><b>Note with icon!</b></h4>\n'+
'		<p> ... </p>\n'+
'	</div>\n'+
'</div>\n'+
'\n'+
'<!-- with right icon -->\n'+
'<div className="note note-warning note-with-right-icon">\n'+
'	<div className="note-icon"><i className="fa fa-lightbulb"></i></div>\n'+
'	<div className="note-content text-right">\n'+
'		<h4><b>Note with right icon!</b></h4>\n'+
'		<p> ... </p>\n'+
'	</div>\n'+
'</div>'}
							/>
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Labels & Badges <span className="label label-success">NEW</span>
							</PanelHeader>
							<PanelBody>
								<div className="row f-s-15">
									<div className="col-md-8">
										<div className="m-b-3">
											<span className="label label-danger m-r-3">Danger</span>
											<span className="label label-warning m-r-3">Warning</span>
											<span className="label label-yellow m-r-3">Yellow</span>
											<span className="label label-lime m-r-3">Lime</span>
											<span className="label label-green m-r-3">Green</span>
											<span className="label label-success">Success</span>
										</div>
										<div className="m-b-3">
											<span className="label label-primary m-r-3">Primary</span>
											<span className="label label-info m-r-3">Info</span>
											<span className="label label-purple m-r-3">Purple</span>
											<span className="label label-indigo m-r-3">Indigo</span>
											<span className="label label-dark">Dark</span>
										</div>
										<div className="m-b-3">
											<span className="label label-pink m-r-3">Pink</span>
											<span className="label label-secondary m-r-3">Secondary</span>
											<span className="label label-default m-r-3">Default</span>
											<span className="label label-light">Light</span>
										</div>
									</div>
									<div className="col-md-4">
										<div className="m-b-3">
											<span className="label label-inverse">label</span>
										</div>
										<div className="m-b-3">
											<span className="badge badge-secondary">badge</span>
										</div>
										<div className="m-b-3">
											<span className="badge badge-default badge-square">badge-square</span>
										</div>
									</div>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<!-- label -->\n'+
'<span className="label label-inverse">label</span>\n'+
'\n'+
'<!-- badge -->\n'+
'<span className="badge badge-secondary">badge</span>\n'+
'\n'+
'<!-- badge-square -->\n'+
'<span className="badge badge-default badge-square">badge-square</span>'}
						/>
						</Panel>
						
						<Panel>
							<PanelHeader>Pagination & Pager</PanelHeader>
							<PanelBody>
								<div>
									<ul className="pagination pagination-lg m-t-0 m-b-5">
										<li className="page-item disabled"><Link to="/ui/general" className="page-link">«</Link></li>
										<li className="page-item active"><Link to="/ui/general" className="page-link">1</Link></li>
										<li className="page-item"><Link to="/ui/general" className="page-link">2</Link></li>
										<li className="page-item"><Link to="/ui/general" className="page-link">3</Link></li>
										<li className="page-item"><Link to="/ui/general" className="page-link">4</Link></li>
										<li className="page-item"><Link to="/ui/general" className="page-link">5</Link></li>
										<li className="page-item"><Link to="/ui/general" className="page-link">»</Link></li>
									</ul>
								</div>
								<div>
									<ul className="pagination m-t-0 m-b-5">
										<li className="page-item disabled"><Link to="/ui/general" className="page-link">«</Link></li>
										<li className="page-item active"><Link to="/ui/general" className="page-link">1</Link></li>
										<li className="page-item"><Link to="/ui/general" className="page-link">2</Link></li>
										<li className="page-item"><Link to="/ui/general" className="page-link">3</Link></li>
										<li className="page-item"><Link to="/ui/general" className="page-link">4</Link></li>
										<li className="page-item"><Link to="/ui/general" className="page-link">5</Link></li>
										<li className="page-item"><Link to="/ui/general" className="page-link">»</Link></li>
									</ul>
								</div>
								<div>
									<ul className="pagination pagination-sm m-t-0 m-b-5">
										<li className="page-item disabled"><Link to="/ui/general" className="page-link">«</Link></li>
										<li className="page-item active"><Link to="/ui/general" className="page-link">1</Link></li>
										<li className="page-item"><Link to="/ui/general" className="page-link">2</Link></li>
										<li className="page-item"><Link to="/ui/general" className="page-link">3</Link></li>
										<li className="page-item"><Link to="/ui/general" className="page-link">4</Link></li>
										<li className="page-item"><Link to="/ui/general" className="page-link">5</Link></li>
										<li className="page-item"><Link to="/ui/general" className="page-link">»</Link></li>
									</ul>
								</div>
								<ul className="pager m-b-10">
									<li><Link to="/ui/general">Previous</Link></li>
									<li><Link to="/ui/general">Next</Link></li>
								</ul>
								<ul className="pager m-t-0 m-b-0">
									<li className="previous disabled"><Link to="/ui/general">&larr; Older</Link></li>
									<li className="next"><Link to="/ui/general">Newer &rarr;</Link></li>
								</ul>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<!-- pagination -->\n'+
'<ul className="pagination">\n'+
'	<li className="page-item disabled"><a href="#" className="page-link">«</a></li>\n'+
'	<li className="page-item active"><a href="#" className="page-link">1</a></li>\n'+
'	<li className="page-item"><a href="#" className="page-link">2</a></li>\n'+
'	<li className="page-item"><a href="#" className="page-link">3</a></li>\n'+
'	<li className="page-item"><a href="#" className="page-link">4</a></li>\n'+
'	<li className="page-item"><a href="#" className="page-link">5</a></li>\n'+
'	<li className="page-item"><a href="#" className="page-link">»</a></li>\n'+
'</ul>\n'+
'\n'+
'<!-- pager -->\n'+
'<ul className="pager">\n'+
'	<li><a href="#">Previous</a></li>\n'+
'	<li><a href="#">Next</a></li>\n'+
'</ul>'}
						/>
						</Panel>
						
						<Panel>
							<PanelHeader>Progress bar</PanelHeader>
							<PanelBody>
								<div className="row">
									<div className="col-md-6">
										<div className="progress rounded-corner m-b-15">
											<div className="progress-bar" style={{width: '80%'}}>Basic</div>
										</div>
										<div className="progress rounded-corner m-b-15">
											<div className="progress-bar bg-warning progress-bar-striped" style={{width: '80%'}}>Striped</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="progress rounded-corner m-b-15">
											<div className="progress-bar bg-purple progress-bar-striped progress-bar-animated" style={{width: '80%'}}>Animated</div>
										</div>
										<div className="progress rounded-corner m-b-15">
											<div className="progress-bar bg-dark">Stacked</div>
											<div className="progress-bar bg-grey">Stacked</div>
											<div className="progress-bar bg-lime">Stacked</div>
										</div>
									</div>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<!-- default -->\n'+
'<div className="progress rounded-corner">\n'+
'	<div className="progress-bar">Basic</div>\n'+
'</div>\n'+
'\n'+
'<!-- striped -->\n'+
'<div className="progress rounded-corner progress-striped">\n'+
'	<div className="progress-bar bg-warning">\n'+
'		Striped\n'+
'	</div>\n'+
'</div>\n'+
'\n'+
'<!-- animated -->\n'+
'<div className="progress rounded-corner progress-striped active">\n'+
'	<div className="progress-bar bg-purple">\n'+
'		Animated\n'+
'	</div>\n'+
'</div>\n'+
'\n'+
'<!-- stacked -->\n'+
'<div className="progress rounded-corner">\n'+
'	<div className="progress-bar bg-dark">\n'+
'		Stacked\n'+
'	</div>\n'+
'	<div className="progress-bar bg-grey">\n'+
'		Stacked\n'+
'	</div>\n'+
'	<div className="progress-bar bg-lime">\n'+
'		Stacked\n'+
'	</div>\n'+
'</div>'}
							/>
						</Panel>
					</div>
				</div>
			</div>
		)
	}
}

export default UIGeneral;