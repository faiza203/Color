import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelFooter, PanelBody } from './../../components/panel/panel.jsx';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, ButtonGroup, Alert } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

class UIWidgetBoxes extends React.Component {
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
			cSelected: [],
			activeTab: '1'
		};
		this.toggleTab = this.toggleTab.bind(this);
		this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
	}

	onRadioBtnClick(rSelected) {
		this.setState({ rSelected });
	}

	toggleTab(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}
	
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/ui">UI Elements</Link></li>
					<li className="breadcrumb-item active">Widget Boxes</li>
				</ol>
				<h1 className="page-header">Widget Boxes <small>header small text goes here...</small></h1>
		
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>Panel (Default)</PanelHeader>
							<PanelBody>
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel>\n'+
'  <PanelHeader>Panel (Default)</PanelHeader>\n'+
'  <PanelBody>\n'+
'    <p>Panel Content Here</p>\n'+
'  </PanelBody>\n'+
'</Panel>'} />
						</Panel>
				
						<Panel>
							<PanelHeader noButton={true}>
								<UncontrolledDropdown className="pull-right">
									<DropdownToggle caret className="btn-xs btn-success">
										Action
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem>Action</DropdownItem>
										<DropdownItem>Another Action</DropdownItem>
										<DropdownItem>Something else here</DropdownItem>
										<DropdownItem divider />
										<DropdownItem>Separated link</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
								Panel Header with Dropdown
							</PanelHeader>
							<PanelBody>
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel>\n'+
'	<PanelHeader noButton={true}>\n'+
'		<UncontrolledDropdown className="pull-right">\n'+
'			<DropdownToggle caret className="btn-xs btn-success">\n'+
'				Dropdown\n'+
'			</DropdownToggle>\n'+
'			<DropdownMenu>\n'+
'				<DropdownItem>Action</DropdownItem>\n'+
'				<DropdownItem>Another Action</DropdownItem>\n'+
'				<DropdownItem>Something else here</DropdownItem>\n'+
'				<DropdownItem divider />\n'+
'				<DropdownItem>Separated link</DropdownItem>\n'+
'			</DropdownMenu>\n'+
'		</UncontrolledDropdown>\n'+
'		Panel Header with Dropdown\n'+
'	</PanelHeader>\n'+
'	<PanelBody>\n'+
'		<p>Panel Content Here</p>\n'+
'	</PanelBody>\n'+
'</Panel>'} />
						</Panel>
				
						<Panel>
							<PanelHeader noButton={true}>
								<ButtonGroup className="pull-right">
									<Button color="success" size="xs" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Option 1</Button>
									<Button color="success" size="xs" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Option 2</Button>
								</ButtonGroup>
								Panel Header with Radio Button
							</PanelHeader>
							<PanelBody>
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel>\n'+
'	<PanelHeader noButton={true}>\n'+
'		<ButtonGroup className="pull-right">\n'+
'			<Button color="success" size="xs" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Option 1</Button>\n'+
'			<Button color="success" size="xs" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Option 2</Button>\n'+
'		</ButtonGroup>\n'+
'		Panel Header with Radio Button\n'+
'	</PanelHeader>\n'+
'	<PanelBody>\n'+
'		<p>Panel Content Here</p>\n'+
'	</PanelBody>\n'+
'</Panel>'} />
						</Panel>
				
						<Panel>
							<PanelHeader noButton={true}>
								<div className="progress progress-sm pull-right m-t-5">
									<div className="progress-bar progress-bar-striped bg-success progress-bar-animated" style={{width: '40%'}}>40%</div>
								</div>
								Panel Header with Progress Bar
							</PanelHeader>
							<PanelBody>
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel>\n'+
'	<PanelHeader noButton={true}>\n'+
'		<div className="progress progress-sm pull-right m-t-5">\n'+
'			<div className="progress-bar progress-bar-striped bg-success progress-bar-animated">40%</div>\n'+
'		</div>\n'+
'		Panel Header with Progress Bar\n'+
'	</PanelHeader>\n'+
'	<PanelBody>\n'+
'		<p>Panel Content Here</p>\n'+
'	</PanelBody>\n'+
'</Panel>'} />
						</Panel>
				
						<Panel>
							<PanelHeader noButton={true}>
								<span className="label label-success mr-2">NEW</span> Panel Header with Label
							</PanelHeader>
							<PanelBody>
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel>\n'+
'	<PanelHeader noButton={true}>\n'+
'		<span className="label label-success mr-2">NEW</span> Panel Header with Label\n'+
'	</PanelHeader>\n'+
'	<PanelBody>\n'+
'		<p>Panel Content Here</p>\n'+
'	</PanelBody>\n'+
'</Panel>'} />
						</Panel>
				
						<Panel>
							<PanelHeader>
								Panel with Alert Box
							</PanelHeader>
							<Alert color="success" className="mb-0">
								<i className="fa fa-check fa-2x pull-left m-r-10"></i>
								<p className="m-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac posuere lacus, quis suscipit sem. Nulla sagittis aliquam erat non convallis.</p>
							</Alert>
							<PanelBody>
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel>\n'+
'	<PanelHeader>\n'+
'		Panel with Alert Box\n'+
'	</PanelHeader>\n'+
'	<Alert color="success" className="mb-0">\n'+
'		<i className="fa fa-check fa-2x pull-left m-r-10"></i>\n'+
'		<p className="m-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac posuere lacus, quis suscipit sem. Nulla sagittis aliquam erat non convallis.</p>\n'+
'	</Alert>\n'+
'	<PanelBody>\n'+
'		<p>Panel Content Here</p>\n'+
'	</PanelBody>\n'+
'</Panel>'} />
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel className="panel-hover-icon">
							<PanelHeader>
								Hover View Icon
							</PanelHeader>
							<PanelBody>
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel className="panel-hover-icon">\n'+
'	<PanelHeader>\n'+
'		Hover View Icon\n'+
'	</PanelHeader>\n'+
'	<PanelBody>\n'+
'		<p>Panel Content Here</p>\n'+
'	</PanelBody>\n'+
'</Panel>'} />
						</Panel>
				
						<Panel>
							<PanelHeader>
								Panel with Scrollbar
							</PanelHeader>
							<PanelBody>
								<PerfectScrollbar style={{height: '280px'}} options={{suppressScrollX: true}}>
									<p>
										<span className="fa-stack fa-4x pull-left m-r-10 text-inverse">
											<i className="fab fa-twitter fa-stack-1x"></i>
										</span>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed enim arcu. 
										Ut posuere in ligula quis ultricies. In in justo turpis. Donec ut dui at massa gravida 
										interdum nec vitae justo. Quisque ullamcorper vehicula dictum. Nullam hendrerit interdum eleifend. 
										Aenean luctus sed arcu laoreet scelerisque. Vivamus non ullamcorper mauris, id sagittis lorem. 
										Proin tincidunt mauris et dolor mattis imperdiet. Sed facilisis mattis diam elementum adipiscing. 
									</p>
									<p>
										<span className="fa-stack fa-4x pull-right m-l-10 text-inverse">
											<i className="fab fa-google-plus fa-stack-1x"></i>
										</span>
										Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
										Ut ante velit, pretium non nisi a, egestas placerat diam. Nullam aliquet iaculis ultricies. 
										Aliquam volutpat, sapien quis volutpat elementum, ligula purus auctor diam, at vestibulum nulla augue 
										vel purus. Praesent ac nisl a magna tincidunt interdum sed in turpis. Maecenas nec condimentum risus. 
										In congue pretium est, eget euismod tortor ornare quis.
									</p>
									<p>
										<span className="fa-stack fa-4x pull-left m-r-10 text-inverse">
											<i className="fab fa-facebook fa-stack-1x"></i>
										</span>
										Praesent eu ultrices justo. Vestibulum ante 
										ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
										Cras mattis ipsum quis sapien consectetur fringilla. 
										Etiam sagittis sem tempus purus elementum, vitae pretium sapien porta. Curabitur iaculis ante ut aliquam luctus. 
										Vivamus ullamcorper blandit imperdiet. Ut egestas, orci id rhoncus cursus, orci risus scelerisque enim, eget mattis eros lacus quis ligula. 
										Vivamus ullamcorper urna eget hendrerit laoreet.
									</p>
									<p>
										<span className="fa-stack fa-4x pull-right m-l-10 text-inverse">
											<i className="fab fa-apple fa-stack-1x"></i>
										</span>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
										Morbi accumsan velit dolor. Donec convallis eleifend magna, at euismod tellus convallis a. 
										Curabitur in nisi dolor. Cras viverra scelerisque orci, sed interdum ligula volutpat non. 
										Nunc eu enim ac neque tempor feugiat. Duis posuere lacus non magna eleifend, 
										non dictum sem feugiat. Duis eleifend condimentum pulvinar.
									</p>
								</PerfectScrollbar>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel>\n'+
'	<PanelHeader>\n'+
'		Panel with Scrollbar\n'+
'	</PanelHeader>\n'+
'	<PanelBody>\n'+
'		<PerfectScrollbar class="height-sm" options={{suppressScrollX: true}}>\n'+
'	  	...\n'+
'		</PerfectScrollbar>\n'+
'	</PanelBody>\n'+
'</Panel>'} />
						</Panel>
				
						<Panel>
							<PanelHeader>
								Panel with Toolbar & Footer
							</PanelHeader>
							<div className="panel-toolbar">
								<div className="btn-group m-r-5">
									<button className="btn btn-white"><i className="fa fa-bold"></i></button>
									<button className="btn btn-white active"><i className="fa fa-italic"></i></button>
									<button className="btn btn-white"><i className="fa fa-underline"></i></button>
								</div>
								<div className="btn-group">
									<button className="btn btn-white"><i className="fa fa-align-left"></i></button>
									<button className="btn btn-white active"><i className="fa fa-align-center"></i></button>
									<button className="btn btn-white"><i className="fa fa-align-right"></i></button>
									<button className="btn btn-white"><i className="fa fa-align-justify"></i></button>
								</div>
							</div>
							<textarea className="form-control no-rounded-corner" rows="5" defaultValue="This is a form textarea."></textarea>
							<PanelFooter className="text-right">
								<button className="btn btn-white btn-sm">Cancel</button>
								<button className="btn btn-primary btn-sm m-l-5">Action</button>
							</PanelFooter>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel>\n'+
'	<PanelHeader>\n'+
'		Panel with Toolbar & Footer\n'+
'	</PanelHeader>\n'+
'	<div className="panel-toolbar">\n'+
'		<div className="btn-group m-r-5">\n'+
'			...\n'+
'		</div>\n'+
'		<div className="btn-group">\n'+
'			...\n'+
'		</div>\n'+
'	</div>\n'+
'	<textarea className="form-control no-rounded-corner" rows="5">This is a form textarea.</textarea>\n'+
'	<PanelFooter className="text-right">\n'+
'		<a href="#" className="btn btn-white btn-sm">Cancel</a>\n'+
'		<a href="#" className="btn btn-primary btn-sm m-l-5">Action</a>\n'+
'	</PanelFooter>\n'+
'</Panel>'} />
						</Panel>
				
						<Panel theme="default" className="panel-with-tabs">
							<PanelHeader noButton={true}>
								<Nav tabs className="pull-right mt-n1 mb-n3">
									<NavItem>
										<NavLink className={'pt-2 pb-2 ' + classnames({ active: this.state.activeTab === '1' })}
											onClick={() => { this.toggleTab('1'); }}>
											Home
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className={'pt-2 pb-2 ' + classnames({ active: this.state.activeTab === '2' })}
											onClick={() => { this.toggleTab('2'); }}>
											Profile
										</NavLink>
									</NavItem>
								</Nav>
								Panel with Tabs
							</PanelHeader>
							<PanelBody>
								<TabContent activeTab={this.state.activeTab}>
									<TabPane tabId="1">
										<p className="m-b-0">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
									</TabPane>
									<TabPane tabId="2">
										<p className="m-b-0">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
									</TabPane>
								</TabContent>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel theme="default" className="panel-with-tabs">\n'+
'	<PanelHeader noButton={true}>\n'+
'		<Nav tabs className="pull-right mt-n1 mb-n3">\n'+
'			<NavItem>\n'+
'				<NavLink className="pt-2 pb-2">\n'+
'					Home\n'+
'				</NavLink>\n'+
'			</NavItem>\n'+
'			<NavItem>\n'+
'				<NavLink className="pt-2 pb-2">\n'+
'					Profile\n'+
'				</NavLink>\n'+
'			</NavItem>\n'+
'		</Nav>\n'+
'		Panel with Tabs\n'+
'	</PanelHeader>\n'+
' <PanelBody>\n'+
'	  <TabContent activeTab={this.state.activeTab}>\n'+
'		  <TabPane tabId="1">\n'+
'			  <p className="m-b-0">...</p>\n'+
'		  </TabPane>\n'+
'		  <TabPane tabId="2">\n'+
'			  <p className="m-b-0">...</p>\n'+
'		  </TabPane>\n'+
'	  </TabContent>\n'+
' </PanelBody>\n'+
'</Panel>'} />
						</Panel>
					</div>
				</div>
		
				<h3 className="m-b-20">Panel Theme</h3>
		
				<div className="row">
					<div className="col-xl-6">
						<Panel theme="default">
							<PanelHeader>Panel (Default)</PanelHeader>
							<PanelBody>
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel theme="default">\n'+
'	...\n'+
'</Panel>'} />
						</Panel>
				
						<Panel theme="success">
							<PanelHeader>Panel Success</PanelHeader>
							<PanelBody>
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel theme="success">\n'+
'	...\n'+
'</Panel>'} />
						</Panel>
				
						<Panel theme="warning">
							<PanelHeader>Panel Warning</PanelHeader>
							<PanelBody>
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel theme="warning">\n'+
'	...\n'+
'</Panel>'} />
						</Panel>
				
						<Panel theme="danger">
							<PanelHeader>Panel Danger</PanelHeader>
							<PanelBody>
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel theme="danger">\n'+
'	...\n'+
'</Panel>'} />
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>Panel Inverse</PanelHeader>
							<PanelBody>
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel>\n'+
'	...\n'+
'</Panel>'} />
						</Panel>
				
						<Panel theme="primary">
							<PanelHeader>Panel Primary</PanelHeader>
							<PanelBody>
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel theme="primary">\n'+
'	...\n'+
'</Panel>'} />
						</Panel>
				
						<Panel theme="info">
							<PanelHeader>Panel Info</PanelHeader>
							<PanelBody>
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel theme="info">\n'+
'	...\n'+
'</Panel>'} />
						</Panel>
					</div>
				</div>
		
		
				<h3>Full Color Panel Theme</h3>
				<p className="m-b-20">
					You can customize the panel body / header <code>background</code> & <code>text color</code> by adding predefined CSS class. E.g <code>.bg-black</code>. Full list of available predefined background class can be found <a href="helper_css.html">here</a>.
				</p>
		
				<div className="row">
					<div className="col-xl-6">
						<Panel className="bg-black">
							<PanelHeader>Full Color Panel</PanelHeader>
							<PanelBody className="text-white">
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel className="bg-black">\n'+
'	<PanelBody className="text-white">\n'+
'		...\n'+
'	</PanelBody>\n'+
'</Panel>'} />
						</Panel>
				
						<Panel theme="primary" className="bg-blue">
							<PanelHeader>Full Color Panel</PanelHeader>
							<PanelBody className="text-white">
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel theme="primary" className="bg-blue">\n'+
'	<PanelBody className="text-white">\n'+
'		...\n'+
'	</PanelBody>\n'+
'</Panel>'} />
						</Panel>
				
						<Panel theme="success" className="bg-success">
							<PanelHeader>Full Color Panel</PanelHeader>
							<PanelBody className="text-white">
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel theme="success" className="bg-success">\n'+
'	<PanelBody className="text-white">\n'+
'		...\n'+
'	</PanelBody>\n'+
'</Panel>'} />
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel theme="warning" className="bg-warning">
							<PanelHeader>Full Color Panel</PanelHeader>
							<PanelBody className="text-white">
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel theme="warning" className="bg-warning">\n'+
'	<PanelBody className="text-white">\n'+
'		...\n'+
'	</PanelBody>\n'+
'</Panel>'} />
						</Panel>
				
						<Panel theme="danger" className="bg-danger">
							<PanelHeader>Full Color Panel</PanelHeader>
							<PanelBody className="text-white">
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel theme="danger" className="bg-danger">\n'+
'	<PanelBody className="text-white">\n'+
'		...\n'+
'	</PanelBody>\n'+
'</Panel>'} />
						</Panel>
				
						<Panel theme="info" className="bg-info">
							<PanelHeader>Full Color Panel</PanelHeader>
							<PanelBody className="text-white">
								<p>Panel Content Here</p>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<Panel theme="info" className="bg-info">\n'+
'	<PanelBody className="text-white">\n'+
'		...\n'+
'	</PanelBody>\n'+
'</Panel>'} />
						</Panel>
					</div>
				</div>
			</div>
		)
	}
}

export default UIWidgetBoxes