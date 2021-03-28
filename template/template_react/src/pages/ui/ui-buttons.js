import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

class UIButtons extends React.Component {
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
	}
	
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/ui">UI Elements</Link></li>
					<li className="breadcrumb-item active">Buttons</li>
				</ol>
				<h1 className="page-header">Buttons <small>header small text goes here...</small></h1>
				
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Buttons <span className="label label-success">NEW</span>
							</PanelHeader>
							<PanelBody>
								<button type="button" className="btn btn-white m-r-5 m-b-5">White</button>
								<button type="button" className="btn btn-default m-r-5 m-b-5">Default</button>
								<button type="button" className="btn btn-grey m-r-5 m-b-5">Grey</button>
								<button type="button" className="btn btn-purple m-r-5 m-b-5">Purple</button>
								<button type="button" className="btn btn-indigo m-r-5 m-b-5">Indigo</button>
								<button type="button" className="btn btn-primary m-r-5 m-b-5">Primary</button>
								<button type="button" className="btn btn-info m-r-5 m-b-5">Info</button>
								<button type="button" className="btn btn-yellow m-r-5 m-b-5">Yellow</button>
								<button type="button" className="btn btn-warning m-r-5 m-b-5">Warning</button>
								<button type="button" className="btn btn-pink m-r-5 m-b-5">Pink</button>
								<button type="button" className="btn btn-danger m-r-5 m-b-5">Danger</button>
								<button type="button" className="btn btn-success m-r-5 m-b-5">Success</button>
								<button type="button" className="btn btn-green m-r-5 m-b-5">Green</button>
								<button type="button" className="btn btn-lime m-r-5 m-b-5">Lime</button>
								<button type="button" className="btn btn-inverse m-r-5 m-b-5">Inverse</button>
								<button type="button" className="btn btn-link m-b-5">Link</button>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<button type="button" className="btn btn-default">Default</button>\n'+
'<button type="button" className="btn btn-grey">Grey</button>\n'+
'<button type="button" className="btn btn-purple">Purple</button>\n'+
'<button type="button" className="btn btn-indigo">Indigo</button>\n'+
'<button type="button" className="btn btn-primary">Primary</button>\n'+
'<button type="button" className="btn btn-info">Info</button>\n'+
'<button type="button" className="btn btn-yellow">Yellow</button>\n'+
'<button type="button" className="btn btn-warning">Warning</button>\n'+
'<button type="button" className="btn btn-pink">Pink</button>\n'+
'<button type="button" className="btn btn-danger">Danger</button>\n'+
'<button type="button" className="btn btn-success">Success</button>\n'+
'<button type="button" className="btn btn-green">Green</button>\n'+
'<button type="button" className="btn btn-lime">Lime</button>\n'+
'<button type="button" className="btn btn-inverse">Inverse</button>\n'+
'<button type="button" className="btn btn-link">Link</button>'} />
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Button Dropdowns
							</PanelHeader>
							<PanelBody>
								<div className="btn-group m-r-5 m-b-5">
									<button className="btn btn-default">Dropdown</button>
									<UncontrolledButtonDropdown>
										<DropdownToggle color="default" caret></DropdownToggle>
										<DropdownMenu>
											<DropdownItem>Action 1</DropdownItem>
											<DropdownItem>Action 2</DropdownItem>
											<DropdownItem>Action 3</DropdownItem>
											<DropdownItem divider></DropdownItem>
											<DropdownItem>Action 4</DropdownItem>
										</DropdownMenu>
									</UncontrolledButtonDropdown>
								</div>
								<div className="btn-group dropup m-r-5 m-b-5">
									<button className="btn btn-primary">Dropup</button>
									<UncontrolledButtonDropdown direction="up">
										<DropdownToggle caret color="primary"></DropdownToggle>
										<DropdownMenu>
											<DropdownItem>Action 1</DropdownItem>
											<DropdownItem>Action 2</DropdownItem>
											<DropdownItem>Action 3</DropdownItem>
											<DropdownItem divider></DropdownItem>
											<DropdownItem>Action 4</DropdownItem>
										</DropdownMenu>
									</UncontrolledButtonDropdown>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<div className="btn-group m-r-5 m-b-5">\n'+
'	<button className="btn btn-default">Dropdown</button>\n'+
'	<UncontrolledButtonDropdown>\n'+
'		<DropdownToggle caret color="default"></DropdownToggle>\n'+
'		<DropdownMenu>\n'+
'			<DropdownItem>Action 1</DropdownItem>\n'+
'			<DropdownItem>Action 2</DropdownItem>\n'+
'			<DropdownItem>Action 3</DropdownItem>\n'+
'			<DropdownItem divider></DropdownItem>\n'+
'			<DropdownItem>Action 4</DropdownItem>\n'+
'		</DropdownMenu>\n'+
'	</UncontrolledButtonDropdown>\n'+
'</div>'} />
						</Panel>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>Button Sizes</PanelHeader>
							<PanelBody>
								<button className="btn btn-primary btn-lg m-r-5 m-b-5">Large Button</button>
								<button className="btn btn-primary m-r-5 m-b-5">Default Button</button>
								<button className="btn btn-default btn-sm m-r-5 m-b-5">Small Button</button>
								<button className="btn btn-default btn-xs m-r-5 m-b-5">Extra Small</button>
							</PanelBody>
					
							<CodeMirror options={this.codeMirrorOptions} value={
'<button className="btn btn-primary btn-lg">Large Button</button>\n'+
'<button className="btn btn-primary">Default Button</button>\n'+
'<button className="btn btn-primary btn-sm">Small Button</button>\n'+
'<button className="btn btn-primary btn-xs">Extra Small</button>'} />
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>Button State</PanelHeader>
							<PanelBody>
								<div className="row">
									<div className="col-md-6">
										<button className="btn btn-default disabled m-r-5 m-b-5">Disabled Button</button>
										<button className="btn btn-default active m-r-5 m-b-5">Active Button</button>
									</div>
									<div className="col-md-6">
										<button className="btn btn-primary btn-block m-b-5">Block Button</button>
									</div>
								</div>
							</PanelBody>
					
							<CodeMirror options={this.codeMirrorOptions} value={
'<button className="btn btn-default disabled">Disabled Button</button>\n'+
'<button className="btn btn-default active">Active Button</button>\n'+
'<button className="btn btn-primary btn-block">Block Button</button>'} />
						</Panel>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>Button with Icon</PanelHeader>
							<PanelBody>
								<div className="row text-center">
									<div className="col-md-6">
										<p>
											<button className="btn btn-lg btn-primary">
												<i className="fab fa-twitter fa-2x pull-left m-r-10 text-black"></i>
												<b>Twitter Bootstrap</b><br />
												<small>Version 3.0</small>
											</button>
										</p>
									</div>
									<div className="col-md-6">
										<p>
											<button className="btn btn-default m-r-5"><i className="fa fa-comment"></i> Comment</button>
											<button className="btn btn-default m-r-5"><i className="fa fa-cogs"></i> Setting</button>
											<button className="btn btn-default"><i className="fa fa-cog"></i></button>
										</p>
										<p>
											<button className="btn btn-default btn-block"><i className="fa fa-list pull-right"></i> Button block with icon</button>
										</p>
									</div>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<button className="btn btn-lg btn-primary">\n'+
'	<i className="fab fa-twitter fa-2x pull-left m-r-10 text-black"></i>\n'+
'	<b>Twitter Bootstrap</b><br />\n'+
'	<small>Version 3.0</small>\n'+
'</button>'} />
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>Button Group Vertical & Justified</PanelHeader>
							<PanelBody>
								<div className="row">
									<div className="col-md-6">
										<div className="btn-group">
											<button className="btn btn-white">Left</button>
											<button className="btn btn-white active">Middle</button>
											<button className="btn btn-white">Right</button>
										</div>
										<p></p>
										<div className="btn-group">
											<button className="btn btn-white"><i className="fa fa-align-left"></i></button>
											<button className="btn btn-white active"><i className="fa fa-align-center"></i></button>
											<button className="btn btn-white"><i className="fa fa-align-right"></i></button>
											<button className="btn btn-white"><i className="fa fa-align-justify"></i></button>
										</div>
										<p></p>
									</div>
									<div className="col-md-6">
										<div className="btn-group">
											<button type="button" className="btn btn-white">1</button>
											<button type="button" className="btn btn-white active">2</button>
											<button type="button" className="btn btn-white">3</button>
										</div>
										<div className="btn-group">
											<button type="button" className="btn btn-white">4</button>
											<button type="button" className="btn btn-white">5</button>
											<button type="button" className="btn btn-white">6</button>
										</div>
										<div className="btn-group">
											<button type="button" className="btn btn-white">7</button>
										</div>
										<p></p>
										<div className="btn-group">
											<button className="btn btn-inverse"><i className="fa fa-backward"></i></button>
											<button className="btn btn-inverse"><i className="fa fa-fast-backward"></i></button>
											<button className="btn btn-inverse"><i className="fa fa-pause"></i></button>
											<button className="btn btn-inverse active"><i className="fa fa-play"></i></button>
											<button className="btn btn-inverse"><i className="fa fa-forward"></i></button>
											<button className="btn btn-inverse"><i className="fa fa-fast-forward"></i></button>
										</div>
									</div>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<div className="btn-group">\n'+
'	<button className="btn btn-white">Left</button>\n'+
'	<button className="btn btn-white active">Middle</button>\n'+
'	<button className="btn btn-white">Right</button>\n'+
'</div>'} />
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>Button Toolbars</PanelHeader>
							<PanelBody>
								<div className="row">
									<div className="col-md-4">
										<div className="btn-group-vertical m-r-5">
											<button type="button" className="btn btn-purple"><i className="fa fa-cog"></i> Button</button>
											<button type="button" className="btn btn-purple active"><i className="fa fa-cog"></i> Button</button>
											<button type="button" className="btn btn-purple"><i className="fa fa-cog"></i> Button</button>
										</div>
									</div>
									<div className="col-md-8">
										<div className="btn-group btn-group-justified">
											<button className="btn btn-default">Left</button>
											<button className="btn btn-default active">Middle</button>
											<button className="btn btn-default">Right</button>
										</div>
									</div>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<div className="btn-group">\n'+
'	<button className="btn btn-purple">Button</button>\n'+
'	<button className="btn btn-purple active">Button</button>\n'+
'	<button className="btn btn-purple">Button</button>\n'+
'</div>\n'+
'\n'+
'<div className="btn-group btn-group-justified">\n'+
'	<button className="btn btn-default">Left</button>\n'+
'	<button className="btn btn-default active">Middle</button>\n'+
'	<button className="btn btn-default">Right</button>\n'+
'</div>'} />
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>Button Icon & Sizes</PanelHeader>
							<PanelBody>
								<div className="row">
									<div className="col-md-6">
										<p>
											<button className="btn btn-default btn-icon btn-circle btn-lg m-r-2"><i className="fa fa-expand"></i></button>
											<button className="btn btn-success btn-icon btn-circle btn-lg m-r-2"><i className="fa fa-redo"></i></button>
											<button className="btn btn-warning btn-icon btn-circle btn-lg m-r-2"><i className="fa fa-minus"></i></button>
											<button className="btn btn-danger btn-icon btn-circle btn-lg m-r-2"><i className="fa fa-times"></i></button>
											<button className="btn btn-primary btn-icon btn-circle btn-lg m-r-2"><i className="fab fa-facebook-f"></i></button>
											<button className="btn btn-info btn-icon btn-circle btn-lg m-r-2"><i className="fab fa-twitter"></i></button>
											<button className="btn btn-inverse btn-icon btn-circle btn-lg"><i className="fab fa-stack-overflow"></i></button>
										</p>
										<p>
											<button className="btn btn-default btn-icon btn-circle btn-sm m-r-2"><i className="fa fa-expand"></i></button>
											<button className="btn btn-success btn-icon btn-circle btn-sm m-r-2"><i className="fa fa-redo"></i></button>
											<button className="btn btn-warning btn-icon btn-circle btn-sm m-r-2"><i className="fa fa-minus"></i></button>
											<button className="btn btn-danger btn-icon btn-circle btn-sm m-r-2"><i className="fa fa-times"></i></button>
											<button className="btn btn-primary btn-icon btn-circle btn-sm m-r-2"><i className="fab fa-facebook-f"></i></button>
											<button className="btn btn-info btn-icon btn-circle btn-sm m-r-2"><i className="fab fa-twitter"></i></button>
											<button className="btn btn-inverse btn-icon btn-circle btn-sm m-r-2"><i className="fab fa-stack-overflow"></i></button>
										</p>
									</div>
									<div className="col-md-6">
										<p>
											<button className="btn btn-default btn-icon btn-circle m-r-2"><i className="fa fa-expand"></i></button>
											<button className="btn btn-success btn-icon btn-circle m-r-2"><i className="fa fa-redo"></i></button>
											<button className="btn btn-warning btn-icon btn-circle m-r-2"><i className="fa fa-minus"></i></button>
											<button className="btn btn-danger btn-icon btn-circle m-r-2"><i className="fa fa-times"></i></button>
											<button className="btn btn-primary btn-icon btn-circle m-r-2"><i className="fab fa-facebook-f"></i></button>
											<button className="btn btn-info btn-icon btn-circle m-r-2"><i className="fab fa-twitter"></i></button>
											<button className="btn btn-inverse btn-icon btn-circle m-r-2"><i className="fab fa-stack-overflow"></i></button>
										</p>
										<p>
											<button className="btn btn-default btn-icon btn-circle btn-xs m-r-2"><i className="fa fa-expand"></i></button>
											<button className="btn btn-success btn-icon btn-circle btn-xs m-r-2"><i className="fa fa-redo"></i></button>
											<button className="btn btn-warning btn-icon btn-circle btn-xs m-r-2"><i className="fa fa-minus"></i></button>
											<button className="btn btn-danger btn-icon btn-circle btn-xs m-r-2"><i className="fa fa-times"></i></button>
											<button className="btn btn-primary btn-icon btn-circle btn-xs m-r-2"><i className="fab fa-facebook-f"></i></button>
											<button className="btn btn-info btn-icon btn-circle btn-xs m-r-2"><i className="fab fa-twitter"></i></button>
											<button className="btn btn-inverse btn-icon btn-circle btn-xs m-r-2"><i className="fab fa-stack-overflow"></i></button>
										</p>
									</div>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<button className="btn btn-default btn-icon btn-circle btn-lg">\n'+
'	<i className="fa fa-expand"></i>\n'+
'</button>\n'+
'<button className="btn btn-default btn-icon btn-circle">\n'+
'	<i className="fa fa-expand"></i>\n'+
'</button>\n'+
'<button className="btn btn-default btn-icon btn-circle btn-sm">\n'+
'	<i className="fa fa-expand"></i>\n'+
'</button>\n'+
'<button className="btn btn-default btn-icon btn-circle btn-xs">\n'+
'	<i className="fa fa-expand"></i>\n'+
'</button>'} />
						</Panel>
					</div>
				</div>
			</div>
		)
	}
}

export default UIButtons;