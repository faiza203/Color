import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

class FormElements extends React.Component {
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
					<li className="breadcrumb-item"><Link to="/form/elements">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/form/elements">Form Stuff</Link></li>
					<li className="breadcrumb-item active">Form Elements</li>
				</ol>
				<h1 className="page-header">Form Elements <small>header small text goes here...</small></h1>
		
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Form Controls
							</PanelHeader>
							<PanelBody>
								<div className="alert alert-secondary">
									Textual form controls—like <code>&lt;input&gt;</code>s, <code>&lt;select&gt;</code>s, and <code>&lt;textarea&gt;</code>s—are styled with the .form-control class. Included are styles for general appearance, focus state, sizing, and more.
								</div>
								<form>
									<div className="form-group row m-b-15">
										<label className="col-form-label col-md-3">Email address</label>
										<div className="col-md-9">
											<input type="email" className="form-control m-b-5" placeholder="Enter email" />
											<small className="f-s-12 text-grey-darker">We'll never share your email with anyone else.</small>
										</div>
									</div>
									<div className="form-group row m-b-15">
										<label className="col-form-label col-md-3">Example select</label>
										<div className="col-md-9">
											<select className="form-control">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
									</div>
									<div className="form-group row m-b-15">
										<label className="col-form-label col-md-3">Example multiple select</label>
										<div className="col-md-9">
											<select multiple className="form-control">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
									</div>
									<div className="form-group row m-b-15">
										<label className="col-form-label col-md-3">Example textarea</label>
										<div className="col-md-9">
											<textarea className="form-control" rows="3"></textarea>
										</div>
									</div>
								</form>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<!-- email -->\n'+
'<input type="email" className="form-control" placeholder="Enter email" />\n'+
'\n'+
'<!-- select -->\n'+
'<select className="form-control">...</select>\n'+
'\n'+
'<!-- multiple select -->\n'+
'<select multiple className="form-control">...</select>\n'+
'\n'+
'<!-- textarea -->\n'+
'<textarea className="form-control" rows="3"></textarea>'}
							/>
						</Panel>
						
						<Panel>
							<PanelHeader>
								Readonly
							</PanelHeader>
							<PanelBody>
								<form>
									<div className="form-group row m-b-15">
										<label className="col-sm-3 col-form-label">Readonly</label>
										<div className="col-sm-9">
											<input className="form-control" type="text" placeholder="Readonly input here…" readOnly />
										</div>
									</div>
									<div className="form-group row m-b-15">
										<label className="col-sm-3 col-form-label">Readonly Plaintext</label>
										<div className="col-sm-9">
											<input type="text" readOnly className="form-control-plaintext" value="email@example.com" />
										</div>
									</div>
									<div className="form-group row m-b-15">
										<label className="col-sm-3 col-form-label">Password</label>
										<div className="col-sm-9">
											<input type="password" className="form-control" placeholder="Password" />
										</div>
									</div>
								</form>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<!-- form-control-lg -->\n'+
'<input className="form-control" type="text" placeholder="Readonly input here…" readonly />\n'+
'\n'+
'<!-- readonly plaintext -->\n'+
'<input type="text" readonly className="form-control-plaintext" value="email@example.com" />\n'+
'\n'+
'<!-- password -->\n'+
'<input type="password" readonly className="form-control" placeholder="Password" />'}
							/>
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Sizing
							</PanelHeader>
							<PanelBody>
								<div className="p-t-10">
									<div className="row row-space-10">
										<div className="col-md-6">
											<div className="form-group m-b-10 p-t-5">
												<input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
											</div>
											<div className="form-group m-b-10">
												<input className="form-control" type="text" placeholder="default input" />
											</div>
											<div className="form-group m-b-10">
												<input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group m-b-10 p-t-5">
												<select className="form-control form-control-lg">
													<option>.form-control-lg</option>
												</select>
											</div>
											<div className="form-group m-b-10">
												<select className="form-control">
													<option>default select</option>
												</select>
											</div>
											<div className="form-group m-b-10">
												<select className="form-control form-control-sm">
													<option>.form-control-sm</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<!-- form-control-lg -->\n'+
'<input className="form-control form-control-lg" type="text" />\n'+
'<select className="form-control form-control-lg">...</select>\n'+
'\n'+
'<!-- default -->\n'+
'<input className="form-control" type="text" />\n'+
'<select className="form-control">...</select>\n'+
'\n'+
'<!-- form-control-sm -->\n'+
'<input className="form-control form-control-sm" type="text" />\n'+
'<select className="form-control form-control-sm">...</select>'}
							/>
						</Panel>
						
						<Panel>
							<PanelHeader>
								Validation
							</PanelHeader>
							<PanelBody>
								<form>
									<div className="row form-group m-b-10">
										<label className="col-md-3 col-form-label">Valid Input</label>
										<div className="col-md-9">
											<div className="input-group">
												<div className="input-group-prepend"><span className="input-group-text">@</span></div>
												<input type="text" className="form-control is-valid" />
												<div className="valid-feedback">Looks good!</div>
											</div>
										</div>
									</div>
									<div className="row form-group m-b-10">
										<label className="col-md-3 col-form-label">Invalid Input</label>
										<div className="col-md-9">
											<div className="input-group">
												<div className="input-group-prepend"><span className="input-group-text">@</span></div>
												<input type="text" className="form-control is-invalid" />
												<div className="invalid-feedback">Please choose a unique and valid username.</div>
											</div>
										</div>
									</div>
									<div className="row form-group m-b-30">
										<label className="col-md-3 col-form-label">Tooltip Message</label>
										<div className="col-md-9">
											<div className="row row-space-10">
												<div className="col-md-6">
													<div className="input-group">
														<div className="input-group-prepend"><span className="input-group-text">@</span></div>
														<input type="text" className="form-control is-invalid" />
														<div className="invalid-tooltip">Please choose a unique and valid username.</div>
													</div>
												</div>
												<div className="col-md-6">
													<div className="input-group">
														<div className="input-group-prepend"><span className="input-group-text">@</span></div>
														<input type="text" className="form-control is-valid" />
														<div className="valid-tooltip">Looks good!</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<!-- valid -->\n'+
'<div className="row form-group m-b-10">\n'+
'	<label className="col-md-3 col-form-label">Valid Input</label>\n'+
'	<div className="col-md-9">\n'+
'		<input type="text" className="form-control is-valid" />\n'+
'		<div className="valid-feedback">Looks good!</div>\n'+
'		<div className="valid-tooltip">Looks good!</div>\n'+
'	</div>\n'+
'</div>\n'+
'\n'+
'<!-- invalid -->\n'+
'<div className="row form-group m-b-10">\n'+
'	<label className="col-md-3 col-form-label">...</label>\n'+
'	<div className="col-md-9">\n'+
'		<input type="text" className="form-control is-invalid" />\n'+
'		<div className="invalid-feedback">...</div>\n'+
'		<div className="invalid-tooltip">...</div>\n'+
'	</div>\n'+
'</div>'}
							/>
						</Panel>
					</div>
				</div>
					
				<h3 className="m-b-20">Checkboxes and Radios</h3>
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								CSS Checkbox <span className="label label-success">NEW</span>
							</PanelHeader>
							<div className="alert alert-secondary fade show">
								CSS Checkboxes & Radios is <b>not</b> supported in older browser.
							</div>
							<PanelBody>
								<form>
									<div className="form-group row m-b-10">
										<label className="col-md-3 col-form-label">Default Checkbox</label>
										<div className="col-md-9">
											<div className="checkbox checkbox-css">
												<input type="checkbox" id="cssCheckbox1" value="" defaultChecked />
												<label htmlFor="cssCheckbox1">CSS Checkbox Label 1</label>
											</div>
											<div className="checkbox checkbox-css disabled">
												<input type="checkbox" id="cssCheckbox2" value="" disabled />
												<label htmlFor="cssCheckbox2">Disabled State</label>
											</div>
											<div className="checkbox checkbox-css is-valid">
												<input type="checkbox" id="cssCheckbox3" value="" />
												<label htmlFor="cssCheckbox3">Success State</label>
											</div>
											<div className="checkbox checkbox-css is-invalid">
												<input type="checkbox" id="cssCheckbox5" value="" />
												<label htmlFor="cssCheckbox5">Error State</label>
											</div>
										</div>
									</div>
									<div className="form-group row m-b-10">
										<label className="col-md-3 col-form-label">Inline Checkbox</label>
										<div className="col-md-9">
											<div className="checkbox checkbox-css checkbox-inline">
												<input type="checkbox" value="" id="inlineCssCheckbox1" defaultChecked />
												<label htmlFor="inlineCssCheckbox1">Checkbox Label 1</label>
											</div>
											<div className="checkbox checkbox-css checkbox-inline">
												<input type="checkbox" value="" id="inlineCssCheckbox2" />
												<label htmlFor="inlineCssCheckbox2">Checkbox Label 2</label>
											</div>
										</div>
									</div>
									<div className="form-group row m-b-10">
										<label className="col-md-3 col-form-label">Default Radio</label>
										<div className="col-md-9">
											<div className="radio radio-css">
												<input type="radio" name="radio_css" id="cssRadio1" defaultChecked />
												<label htmlFor="cssRadio1">Radio option 1</label>
											</div>
											<div className="radio radio-css disabled">
												<input type="radio" name="radio_css" id="cssRadio2" disabled />
												<label htmlFor="cssRadio2">Disabled State</label>
											</div>
											<div className="radio radio-css is-valid">
												<input type="radio" name="radio_css" id="cssRadio3" value="" />
												<label htmlFor="cssRadio3">Success State</label>
											</div>
											<div className="radio radio-css is-invalid">
												<input type="radio" name="radio_css" id="cssRadio5" value="" />
												<label htmlFor="cssRadio5">Error State</label>
											</div>
										</div>
									</div>
									<div className="form-group row m-b-10">
										<label className="col-md-3 col-form-label">Inline Radio</label>
										<div className="col-md-9">
											<div className="radio radio-css radio-inline">
												<input type="radio" name="radio_css_inline" id="inlineCssRadio1" value="option1" defaultChecked />
												<label htmlFor="inlineCssRadio1">Radio option 1</label>
											</div>
											<div className="radio radio-css radio-inline">
												<input type="radio" name="radio_css_inline" id="inlineCssRadio2" value="option2" />
												<label htmlFor="inlineCssRadio2">Radio option 2</label>
											</div>
										</div>
									</div>
									<div className="form-group row m-b-10">
										<label className="col-md-3 col-form-label">Checkbox Switcher</label>
										<div className="col-md-9 p-t-3">
											<div className="switcher">
												<input type="checkbox" name="switcher_checkbox_1" id="switcher_checkbox_1" defaultChecked value="1" />
												<label htmlFor="switcher_checkbox_1"></label>
											</div>
											<div className="switcher switcher-success">
												<input type="checkbox" name="switcher_checkbox_2" id="switcher_checkbox_2" defaultChecked value="1" />
												<label htmlFor="switcher_checkbox_2"></label>
											</div>
											<div className="switcher switcher-purple">
												<input type="checkbox" name="switcher_checkbox_3" id="switcher_checkbox_3" defaultChecked value="1" />
												<label htmlFor="switcher_checkbox_3"></label>
											</div>
											<div className="switcher switcher-danger">
												<input type="checkbox" name="switcher_checkbox_4" id="switcher_checkbox_4" defaultChecked value="1" />
												<label htmlFor="switcher_checkbox_4"></label>
											</div>
											<div className="switcher switcher-warning">
												<input type="checkbox" name="switcher_checkbox_5" id="switcher_checkbox_5" defaultChecked value="1" />
												<label htmlFor="switcher_checkbox_5"></label>
											</div>
										</div>
									</div>
								</form>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<!-- default -->\n'+
'<div className="checkbox checkbox-css">\n'+
'	<input type="checkbox" id="cssCheckbox1" defaultChecked />\n'+
'	<label htmlFor="cssCheckbox1">Checkbox</label>\n'+
'</div>\n'+
'<div className="radio radio-css">\n'+
'	<input type="radio" id="cssRadio1" defaultChecked />\n'+
'	<label htmlFor="cssRadio1">Radio</label>\n'+
'</div>\n'+
'\n'+
'<!-- inline -->\n'+
'<div className="checkbox checkbox-css checkbox-inline">\n'+
'	<input type="checkbox" id="inlineCssCheckbox1" defaultChecked />\n'+
'	<label htmlFor="inlineCssCheckbox1">Inline Checkbox</label>\n'+
'</div>\n'+
'<div className="radio radio-css radio-inline">\n'+
'	<input type="radio" id="inlineCssRadio1" />\n'+
'	<label htmlFor="inlineCssRadio1">Inline Radio</label>\n'+
'</div>\n'+
'\n'+
'<!-- success state -->\n'+
'<div className="checkbox checkbox-css is-valid">...</div>\n'+
'<div className="checkbox checkbox-radio is-valid">...</div>\n'+
'\n'+
'<!-- error state -->\n'+
'<div className="checkbox checkbox-radio is-invalid">...</div>\n'+
'<div className="checkbox checkbox-css is-invalid">...</div>\n'+
'\n'+
'<!-- switcher -->\n'+
'<div className="switcher">\n'+
'	<input type="checkbox" name="switcher_checkbox_1" id="switcher_checkbox_1" defaultChecked value="1" />\n'+
'	<label htmlFor="switcher_checkbox_1"></label>\n'+
'</div>'}
							/>
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Checkboxes and Radios
							</PanelHeader>
							<PanelBody>
								<form>
									<div className="form-group row m-b-10">
										<label className="col-md-3 col-form-label">Checkbox</label>
										<div className="col-md-9">
											<div className="form-check">
												<input className="form-check-input" type="checkbox" value="" id="defaultCheckbox" />
												<label className="form-check-label" htmlFor="defaultCheckbox">Checkbox Label 1</label>
											</div>
											<div className="form-check">
												<input className="form-check-input" type="checkbox" value="" id="disabledCheckbox" disabled />
												<label className="form-check-label" htmlFor="disabledCheckbox">Disabled Checkbox</label>
											</div>
											<div className="form-check">
												<input className="form-check-input is-valid" type="checkbox" value="" id="validCheckbox" />
												<label className="form-check-label" htmlFor="validCheckbox">Valid Checkbox</label>
											</div>
											<div className="form-check">
												<input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheckbox" />
												<label className="form-check-label" htmlFor="invalidCheckbox">Invalid Checkbox</label>
											</div>
										</div>
									</div>
									<div className="form-group row m-b-10">
										<label className="col-md-3 col-form-label">Inline Checkbox</label>
										<div className="col-md-9">
											<div className="form-check form-check-inline">
												<input type="checkbox" value="" id="checkbox-inline-1" className="form-check-input" />
												<label className="form-check-label" htmlFor="checkbox-inline-1">Checkbox Label 1</label>
											</div>
											<div className="form-check form-check-inline">
												<input type="checkbox" value="" id="checkbox-inline-2" className="form-check-input" />
												<label className="form-check-label" htmlFor="checkbox-inline-2">Checkbox Label 2</label>
											</div>
										</div>
									</div>
									<div className="form-group row m-b-10">
										<label className="col-md-3 col-form-label">Radio Button</label>
										<div className="col-md-9">
											<div className="form-check">
												<input className="form-check-input" type="radio" name="default_radio" id="defaultRadio" value="" defaultChecked />
												<label className="form-check-label" htmlFor="defaultRadio">Radio option 1</label>
											</div>
											<div className="form-check">
												<input className="form-check-input" type="radio" name="default_radio" id="disabledDefaultRadio" value="" disabled />
												<label className="form-check-label" htmlFor="disabledDefaultRadio">Disabled Radio</label>
											</div>
											<div className="form-check">
												<input className="form-check-input is-valid" type="radio" name="default_radio" id="validDefaultRadio" value="" />
												<label className="form-check-label" htmlFor="validDefaultRadio">Success State</label>
											</div>
											<div className="form-check">
												<input className="form-check-input is-invalid" type="radio" name="default_radio" id="invalidDefaultRadio" value="" />
												<label className="form-check-label" htmlFor="invalidDefaultRadio">Error State</label>
											</div>
										</div>
									</div>
									<div className="form-group row m-b-10">
										<label className="col-md-3 col-form-label">Inline Radio Button</label>
										<div className="col-md-9">
											<div className="form-check form-check-inline">
												<input className="form-check-input" type="radio" name="radio_default_inline" id="defaultInlineRadio1" value="" defaultChecked />
												<label className="form-check-label" htmlFor="defaultInlineRadio1">Radio option 1</label>
											</div>
											<div className="form-check form-check-inline">
												<input className="form-check-input" type="radio" name="radio_default_inline" id="defaultInlineRadio2" value="" />
												<label className="form-check-label" htmlFor="defaultInlineRadio2">Radio option 2</label>
											</div>
										</div>
									</div>
								</form>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<!-- default -->\n'+
'<div className="form-check">\n'+
'	<input type="checkbox" className="form-check-input" id="defaultCheckbox" />\n'+
'	<label className="form-check-label" htmlFor="defaultCheckbox">...</label>\n'+
'</div>\n'+
'<div className="form-check">\n'+
'	<input className="form-check-input" type="radio" id="defaultRadio" defaultChecked />\n'+
'	<label className="form-check-label" htmlFor="defaultRadio">...</label>\n'+
'</div>\n'+
'\n'+
'<!-- inline -->\n'+
'<div className="form-check form-check-inline">\n'+
'	...\n'+
'</div>\n'+
'\n'+
'<!-- valid state -->\n'+
'<div className="form-check">\n'+
'	<input className="form-check-input is-valid" />\n'+
'	<label className="form-check-label">...</label>\n'+
'</div>\n'+
'\n'+
'<!-- invalid state -->\n'+
'<div className="form-check">\n'+
'	<input className="form-check-input is-invalid" />\n'+
'	<label className="form-check-label">...</label>\n'+
'</div>'}
							/>
						</Panel>
					</div>
				</div>

				<h3 className="m-b-20">Input Group</h3>
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Input Group
							</PanelHeader>
							<PanelBody>
								<div className="input-group m-b-10">
									<div className="input-group-prepend"><span className="input-group-text">@</span></div>
									<input type="text" className="form-control" placeholder="Username" />
								</div>
								<div className="input-group m-b-10">
									<input type="text" className="form-control" />
									<div className="input-group-append"><span className="input-group-text"><i className="fa fa-calendar"></i></span></div>
								</div>
								<div className="input-group m-b-10">
									<div className="input-group-prepend"><span className="input-group-text">$</span></div>
									<input type="text" className="form-control" />
									<div className="input-group-append"><span className="input-group-text">.00</span></div>
								</div>
								<div className="input-group m-b-10">
									<div className="input-group-prepend">
										<span className="input-group-text"><input type="checkbox" /></span>
									</div>
									<input type="text" className="form-control" placeholder="Checkbox add on" />
								</div>
								<div className="input-group m-b-10">
									<div className="input-group-prepend">
										<span className="input-group-text"><input type="radio" /></span>
									</div>
									<input type="text" className="form-control" placeholder="Radio button add on" />
								</div>
								<div className="input-group m-b-10">
									<div className="input-group-prepend">
										<button type="button" className="btn btn-primary">Action</button>
										<button type="button" className="btn btn-primary" data-toggle="dropdown">
											<span className="caret"></span>
										</button>
										<ul className="dropdown-menu">
											<li><Link to="/form/elements">Action</Link></li>
											<li><Link to="/form/elements">Another action</Link></li>
											<li><Link to="/form/elements">Something else here</Link></li>
											<li className="divider"></li>
											<li><Link to="/form/elements">Separated link</Link></li>
										</ul>
									</div>
									<input type="text" className="form-control" />
									<div className="input-group-append">
										<button type="button" className="btn btn-yellow" data-toggle="dropdown">
										<span className="caret"></span>
										</button>
										<button type="button" className="btn btn-yellow dropdown-toggle no-caret">Action</button>
										<ul className="dropdown-menu dropdown-menu-right">
											<li><Link to="/form/elements">Action</Link></li>
											<li><Link to="/form/elements">Another action</Link></li>
											<li><Link to="/form/elements">Something else here</Link></li>
											<li className="divider"></li>
											<li><Link to="/form/elements">Separated link</Link></li>
										</ul>
									</div>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<div className="input-group">\n'+
'	<span className="input-group-prepend">$</span>\n'+
'	<input type="text" className="form-control" />\n'+
'	<span className="input-group-append">.00</span>\n'+
'</div>\n'+
'\n'+
'<div className="input-group">\n'+
'	<input type="text" className="form-control">\n'+
'	<div className="input-group-append">\n'+
'		<button type="button" className="btn btn-yellow" data-toggle="dropdown">\n'+
'			<span className="caret"></span>\n'+
'		</button>\n'+
'		<button type="button" className="btn btn-yellow dropdown-toggle no-caret">\n'+
'			Action\n'+
'		</button>\n'+
'		<ul className="dropdown-menu dropdown-menu-right">\n'+
'			...\n'+
'		</ul>\n'+
'	</div>\n'+
'</div>'}
							/>
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Input Group Sizing
							</PanelHeader>
							<PanelBody>
								<div className="input-group input-group-lg m-b-10">
									<div className="input-group-prepend"><span className="input-group-text">@</span></div>
									<input type="text" className="form-control" placeholder="Username" />
								</div>
								<div className="input-group m-b-10">
									<div className="input-group-prepend"><span className="input-group-text">@</span></div>
									<input type="text" className="form-control" placeholder="Username" />
								</div>
								<div className="input-group input-group-sm m-b-10">
									<div className="input-group-prepend"><span className="input-group-text">@</span></div>
									<input type="text" className="form-control" placeholder="Username" />
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<!-- input-group-lg -->\n'+
'<div className="input-group input-group-lg">...</div>\n'+
'\n'+
'<!-- default -->\n'+
'<div className="input-group">...</div>\n'+
'\n'+
'<!-- input-group-sm -->\n'+
'<div className="input-group input-group-sm">...</div>'}
							/>
						</Panel>
					</div>
				</div>
				
				<h3 className="m-b-20">Form Style</h3>
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Default Style
							</PanelHeader>
							<PanelBody>
								<form action="" method="POST">
									<fieldset>
										<legend className="m-b-15">Legend</legend>
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">Email address</label>
											<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputPassword1">Password</label>
											<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
										</div>
										<div className="checkbox checkbox-css m-b-20">
											<input type="checkbox" id="nf_checkbox_css_1" />
											<label htmlFor="nf_checkbox_css_1">Check me out</label>
										</div>
										<button type="submit" className="btn btn-sm btn-primary m-r-5">Login</button>
										<button type="submit" className="btn btn-sm btn-default">Cancel</button>
									</fieldset>
								</form>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<div className="form-group">\n'+
'	<label>...</label>\n'+
'	<input type="text" className="form-control" />\n'+
'</div>'}
							/>
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Form Horizontal
							</PanelHeader>
							<PanelBody>
								<form action="" method="POST">
									<fieldset>
										<legend className="m-b-15">Legend</legend>
										<div className="form-group row m-b-15">
											<label className="col-md-3 col-form-label">Email address</label>
											<div className="col-md-7">
												<input type="email" className="form-control" placeholder="Enter email" />
											</div>
										</div>
										<div className="form-group row m-b-15">
											<label className="col-md-3 col-form-label">Password</label>
											<div className="col-md-7">
												<input type="password" className="form-control" placeholder="Password" />
											</div>
										</div>
										<div className="form-group row m-b-15">
											<div className="col-md-7 offset-md-3">
												<div className="checkbox checkbox-css">
													<input type="checkbox" id="fh_checkbox_css_1" />
													<label htmlFor="fh_checkbox_css_1">Check me out</label>
												</div>
											</div>
										</div>
										<div className="form-group row">
											<div className="col-md-7 offset-md-3">
												<button type="submit" className="btn btn-sm btn-primary m-r-5">Login</button>
												<button type="submit" className="btn btn-sm btn-default">Cancel</button>
											</div>
										</div>
									</fieldset>
								</form>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<div className="form-group row m-b-15">\n'+
'	<label className="col-md-3 col-form-label">...</label>\n'+
'	<div className="col-md-7">\n'+
'		<input type="text" className="form-control" placeholder="" />\n'+
'	</div>\n'+
'</div>'}
							/>
						</Panel>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<Panel>
							<PanelHeader>
								Inline Form
							</PanelHeader>
							<PanelBody>
								<form className="form-inline" action="" method="POST">
									<div className="form-group m-r-10">
										<input type="email" className="form-control" id="exampleInputEmail2" placeholder="Enter email" />
									</div>
									<div className="form-group m-r-10">
										<input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
									</div>
									<div className="form-check m-r-10">
										<input className="form-check-input" id="inline_form_checkbox" type="checkbox" />
										<label className="form-check-label" htmlFor="inline_form_checkbox">Remember me</label>
									</div>
									<button type="submit" className="btn btn-sm btn-primary m-r-5">Sign in</button>
									<button type="submit" className="btn btn-sm btn-default">Register</button>
								</form>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<form className="form-inline">\n'+
'	...\n'+
'</form>'}
							/>
						</Panel>
					</div>
				</div>
			</div>
		)
	}
}

export default FormElements;