import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

class FormWizards extends React.Component {
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
					<li className="breadcrumb-item"><Link to="/form/wizards">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/form/wizards">Form Stuff</Link></li>
					<li className="breadcrumb-item active">Wizards</li>
				</ol>
				<h1 className="page-header">Wizards <small>header small text goes here...</small></h1>
			
				<hr className="mb-4" />
		
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Wizard layout 1
							</PanelHeader>
							<PanelBody>
								<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
								<div className="nav-wizards-container">
									<nav className="nav nav-wizards-1 mb-2">
										<div className="nav-item col">
											<Link to="/form/wizards" className="nav-link completed">
												<div className="nav-no">1</div>
												<div className="nav-text">Completed step</div>
											</Link>
										</div>
										<div className="nav-item col">
											<Link to="/form/wizards" className="nav-link completed">
												<div className="nav-no">2</div>
												<div className="nav-text">Second step</div>
											</Link>
										</div>
										<div className="nav-item col">
											<Link to="/form/wizards" className="nav-link active">
												<div className="nav-no">3</div>
												<div className="nav-text">Active step</div>
											</Link>
										</div>
										<div className="nav-item col">
											<Link to="/form/wizards" className="nav-link disabled">
												<div className="nav-no">4</div>
												<div className="nav-text">Disabled step</div>
											</Link>
										</div>
										<div className="nav-item col">
											<Link to="/form/wizards" className="nav-link disabled">
												<div className="nav-no">5</div>
												<div className="nav-text">Last step</div>
											</Link>
										</div>
									</nav>
								</div>
								<div className="card">
									<div className="card-body">
										wizard content here
									</div>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<div className="nav-wizards-container">\n'+
'  <nav className="nav nav-wizards-1 mb-2">\n'+
'    <!-- completed -->\n'+
'    <div className="nav-item col">\n'+
'      <Link to="/form/wizards" className="nav-link completed">\n'+
'        <div className="nav-no">1</div>\n'+
'        <div className="nav-text">Completed step</div>\n'+
'      </Link>\n'+
'    </div>\n'+
'\n'+
'    <!-- active -->\n'+
'    <div className="nav-item col">\n'+
'      <Link to="/form/wizards" className="nav-link active">\n'+
'        <div className="nav-no">3</div>\n'+
'        <div className="nav-text">Active step</div>\n'+
'      </Link>\n'+
'    </div>\n'+
'\n'+
'    <!-- disabled -->\n'+
'    <div className="nav-item col">\n'+
'      <Link to="/form/wizards" className="nav-link disabled">\n'+
'        <div className="nav-no">5</div>\n'+
'        <div className="nav-text">Last step</div>\n'+
'      </Link>\n'+
'    </div>\n'+
'  </nav>\n'+
'</div>\n'+
'\n'+
'<div className="card">\n'+
'  <div className="card-body">\n'+
'    wizard content here\n'+
'  </div>\n'+
'</div>'}
							/>
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Wizard layout 2
							</PanelHeader>
							<PanelBody>
								<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
								<div className="nav-wizards-container">
									<nav className="nav nav-wizards-2 mb-3">
										<div className="nav-item col">
											<Link to="/form/wizards" className="nav-link completed">
												<div className="nav-text">1. Completed step</div>
											</Link>
										</div>
										<div className="nav-item col">
											<Link to="/form/wizards" className="nav-link active">
												<div className="nav-text">2. Active step text</div>
											</Link>
										</div>
										<div className="nav-item col">
											<Link to="/form/wizards" className="nav-link disabled">
												<div className="nav-text">3. Disabled step text</div>
											</Link>
										</div>
									</nav>
								</div>
								<div className="card">
									<div className="card-body">
										wizard content here
									</div>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<div className="nav-wizards-container">\n'+
'  <nav className="nav nav-wizards-2 mb-3">\n'+
'		 <div className="nav-item col">\n'+
'		 	 <Link to="/form/wizards" className="nav-link completed">\n'+
'				 <div className="nav-text">1. Completed step</div>\n'+
'			 </Link>\n'+
'		 </div>\n'+
'		 <div className="nav-item col">\n'+
'			 <Link to="/form/wizards" className="nav-link active">\n'+
'				 <div className="nav-text">2. Active step text</div>\n'+
'			 </Link>\n'+
'		 </div>\n'+
'		 <div className="nav-item col">\n'+
'			 <Link to="/form/wizards" className="nav-link disabled">\n'+
'				 <div className="nav-text">3. Disabled step text</div>\n'+
'			 </Link>\n'+
'		 </div>\n'+
'	 </nav>\n'+
'</div>\n'+
'\n'+
'<div className="card">\n'+
'  <div className="card-body">\n'+
'    wizard content here\n'+
'  </div>\n'+
'</div>'}
							/>
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Wizard layout 3
							</PanelHeader>
							<PanelBody>
								<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
								<div className="nav-wizards-container">
									<nav className="nav nav-wizards-3 mb-2">
										<div className="nav-item col">
											<Link to="/form/wizards" className="nav-link completed">
												<div className="nav-dot"></div>
												<div className="nav-title">Step 1</div>
												<div className="nav-text">Completed step</div>
											</Link>
										</div>
										<div className="nav-item col">
											<Link to="/form/wizards" className="nav-link completed">
												<div className="nav-dot"></div>
												<div className="nav-title">Step 2</div>
												<div className="nav-text">Second step</div>
											</Link>
										</div>
										<div className="nav-item col">
											<Link to="/form/wizards" className="nav-link active">
												<div className="nav-dot"></div>
												<div className="nav-title">Step 3</div>
												<div className="nav-text">Active step</div>
											</Link>
										</div>
										<div className="nav-item col">
											<Link to="/form/wizards" className="nav-link disabled">
												<div className="nav-dot"></div>
												<div className="nav-title">Step 4</div>
												<div className="nav-text">Disabled step</div>
											</Link>
										</div>
										<div className="nav-item col">
											<Link to="/form/wizards" className="nav-link disabled">
												<div className="nav-dot"></div>
												<div className="nav-title">Step 5</div>
												<div className="nav-text">Last step</div>
											</Link>
										</div>
									</nav>
								</div>
								<div className="card">
									<div className="card-body">
										wizard content here
									</div>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<div className="nav-wizards-container">\n'+
'  <nav className="nav nav-wizards-3 mb-2">\n'+
'		 <div className="nav-item col">\n'+
'			 <Link to="/form/wizards" className="nav-link completed">\n'+
'				 <div className="nav-dot"></div>\n'+
'				 <div className="nav-title">Step 1</div>\n'+
'				 <div className="nav-text">Completed step</div>\n'+
'			 </Link>\n'+
'		 </div>\n'+
'		 <div className="nav-item col">\n'+
'			<Link to="/form/wizards" className="nav-link completed">\n'+
'				 <div className="nav-dot"></div>\n'+
'				 <div className="nav-title">Step 2</div>\n'+
'				 <div className="nav-text">Second step</div>\n'+
'			 </Link>\n'+
'		 </div>\n'+
'		 <div className="nav-item col">\n'+
'			 <Link to="/form/wizards" className="nav-link active">\n'+
'				 <div className="nav-dot"></div>\n'+
'				 <div className="nav-title">Step 3</div>\n'+
'				 <div className="nav-text">Active step</div>\n'+
'			</Link>\n'+
'		 </div>\n'+
'		 <div className="nav-item col">\n'+
'			 <Link to="/form/wizards" className="nav-link disabled">\n'+
'				 <div className="nav-dot"></div>\n'+
'				 <div className="nav-title">Step 4</div>\n'+
'				 <div className="nav-text">Disabled step</div>\n'+
'			 </Link>\n'+
'		 </div>\n'+
'		 <div className="nav-item col">\n'+
'			 <Link to="/form/wizards" className="nav-link disabled">\n'+
'				 <div className="nav-dot"></div>\n'+
'				 <div className="nav-title">Step 5</div>\n'+
'				 <div className="nav-text">Last step</div>\n'+
'			 </Link>\n'+
'		 </div>\n'+
'	 </nav>\n'+
'</div>\n'+
'\n'+
'<div className="card">\n'+
'  <div className="card-body">\n'+
'    wizard content here\n'+
'  </div>\n'+
'</div>'}
							/>
						</Panel>
					</div>
				</div>
			</div>
		)
	}
}

export default FormWizards;