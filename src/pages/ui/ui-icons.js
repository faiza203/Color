import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

class UIIcons extends React.Component {
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
					<li className="breadcrumb-item active">Icons</li>
				</ol>
				
				<h1 className="page-header">Icons <small>header small text goes here...</small></h1>
			
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>Icon Sizes</PanelHeader>
							<PanelBody>
								<div className="text-inverse">
									<i className="fas fa-camera-retro fa-xs"></i>&nbsp;
									<i className="fas fa-camera-retro fa-sm"></i>&nbsp;
									<i className="fas fa-camera-retro fa-lg"></i>&nbsp;
									<i className="fas fa-camera-retro fa-2x"></i>&nbsp;
									<i className="fas fa-camera-retro fa-3x"></i>&nbsp;
									<i className="fas fa-camera-retro fa-5x"></i>&nbsp;
									<i className="fas fa-camera-retro fa-7x"></i>&nbsp;
									<i className="fas fa-camera-retro fa-10x"></i>&nbsp;
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<i className="fas fa-camera-retro fa-xs"></i>\n'+
'<i className="fas fa-camera-retro fa-sm"></i>\n'+
'<i className="fas fa-camera-retro fa-lg"></i>\n'+
'<i className="fas fa-camera-retro fa-2x"></i>\n'+
'<i className="fas fa-camera-retro fa-3x"></i>\n'+
'<i className="fas fa-camera-retro fa-5x"></i>\n'+
'<i className="fas fa-camera-retro fa-7x"></i>\n'+
'<i className="fas fa-camera-retro fa-10x"></i>'} />
						</Panel>
						
						<Panel>
							<PanelHeader>Fixed Width Icons</PanelHeader>
							<PanelBody>
								<div className="f-s-14">
									<i className="fas fa-home fa-fw"></i> Home<br />
									<i className="fas fa-info fa-fw"></i> Info<br />
									<i className="fas fa-book fa-fw"></i> Library<br />
									<i className="fas fa-pencil-alt fa-fw"></i> Applications<br />
									<i className="fas fa-cog fa-fw"></i> Settings
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<i className="fas fa-home fa-fw"></i> Home\n'+
'<i className="fas fa-info fa-fw"></i> Info\n'+
'<i className="fas fa-book fa-fw"></i> Library\n'+
'<i className="fas fa-pencil-alt fa-fw"></i> Applications\n'+
'<i className="fas fa-cog fa-fw"></i> Settings'} />
						</Panel>
						
						<Panel>
							<PanelHeader>Animated Icons</PanelHeader>
							<PanelBody>
								<div className="fa-3x">
									<i className="fas fa-spinner fa-spin"></i>&nbsp;
									<i className="fas fa-circle-notch fa-spin"></i>&nbsp;
									<i className="fas fa-sync fa-spin"></i>&nbsp;
									<i className="fas fa-cog fa-spin"></i>&nbsp;
									<i className="fas fa-spinner fa-pulse"></i>&nbsp;
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<div className="fa-3x">\n'+
'	<i className="fas fa-spinner fa-spin"></i>\n'+
'	<i className="fas fa-circle-notch fa-spin"></i>\n'+
'	<i className="fas fa-sync fa-spin"></i>\n'+
'	<i className="fas fa-cog fa-spin"></i>\n'+
'	<i className="fas fa-spinner fa-pulse"></i>\n'+
'</div>'} />
						</Panel>
						
						<Panel>
							<PanelHeader>Power Transforms: Rotating & Flipping</PanelHeader>
							<PanelBody>
								<div className="f-s-14">
									<div className="fa-3x">
										<i className="fas fa-arrow-alt-circle-right"></i>&nbsp;
										<i className="fas fa-arrow-alt-circle-right fa-rotate-90"></i>&nbsp;
										<i className="fas fa-arrow-alt-circle-right fa-rotate-180"></i>&nbsp;
										<i className="fas fa-arrow-alt-circle-right fa-rotate-270"></i>&nbsp;
										<i className="fas fa-arrow-alt-circle-right fa-flip-horizontal"></i>&nbsp;
										<i className="fas fa-arrow-alt-circle-right fa-flip-vertical"></i>&nbsp;
									</div>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<div className="fa-3x">\n'+
'	<i className="fas fa-arrow-alt-circle-right"></i>\n'+
'	<i className="fas fa-arrow-alt-circle-right fa-rotate-90"></i>\n'+
'	<i className="fas fa-arrow-alt-circle-right fa-rotate-180"></i>\n'+
'	<i className="fas fa-arrow-alt-circle-right fa-rotate-270"></i>\n'+
'	<i className="fas fa-arrow-alt-circle-right fa-flip-horizontal"></i>\n'+
'	<i className="fas fa-arrow-alt-circle-right fa-flip-vertical"></i>\n'+
'</div>'} />
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>List Icons</PanelHeader>
							<PanelBody>
								<div className="f-s-14">
									<ul className="fa-ul">
										<li><span className="fa-li"><i className="fas fa-check-square text-primary"></i></span>List icons can</li>
										<li><span className="fa-li"><i className="fas fa-check-square text-purple"></i></span>be used to</li>
										<li><span className="fa-li"><i className="fas fa-spinner fa-pulse text-success"></i></span>replace bullets</li>
										<li><span className="fa-li"><i className="far fa-square text-inverse"></i></span>in lists</li>
									</ul>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<ul className="fa-ul">\n'+
'	<li>\n'+
'		<span className="fa-li"><i className="fas fa-check-square"></i></span>\n'+
'		List icons can\n'+
'	</li>\n'+
'	<li>\n'+
'		<span className="fa-li"><i className="fas fa-check-square"></i></span>\n'+
'		be used to\n'+
'	</li>\n'+
'	<li>\n'+
'		<span className="fa-li"><i className="fas fa-spinner fa-pulse"></i></span>\n'+
'		replace bullets\n'+
'	</li>\n'+
'	<li>\n'+
'		<span className="fa-li"><i className="far fa-square"></i></span>\n'+
'		in lists\n'+
'	</li>\n'+
'</ul>'} />
						</Panel>
						
						<Panel>
							<PanelHeader>Bordered & Pulled Icons</PanelHeader>
							<PanelBody>
								<div className="f-s-14">
									<i className="fas fa-quote-left fa-2x fa-pull-left fa-border"></i>
									Gatsby believed in the green light, the orgastic future that year by year recedes before us.
									It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...
									And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<i className="fas fa-quote-left fa-2x fa-pull-left fa-border"></i>\n'+
'Gatsby believed in the green light, the orgastic future that year by year recedes before us.'} />
						</Panel>
						
						
						<Panel>
							<PanelHeader>Stacked Icons</PanelHeader>
							<PanelBody>
								<div className="f-s-14">
									<span className="fa-stack fa-2x">
										<i className="far fa-square fa-stack-2x"></i>
										<i className="fab fa-twitter fa-stack-1x"></i>
									</span>
									<span className="fa-stack fa-2x">
										<i className="fa fa-circle fa-stack-2x"></i>
										<i className="fa fa-flag fa-stack-1x fa-inverse"></i>
									</span>
									<span className="fa-stack fa-2x">
										<i className="fa fa-square fa-stack-2x"></i>
										<i className="fa fa-terminal fa-stack-1x fa-inverse"></i>
									</span>
									<span className="fa-stack fa-2x">
										<i className="fa fa-camera fa-stack-1x"></i>
										<i className="fa fa-ban fa-stack-2x"></i>
									</span>
									<span className="fa-stack fa-2x">
										<i className="far fa-circle fa-stack-2x"></i>
										<i className="fa fa-cog fa-stack-1x"></i>
									</span>
								</div>
							</PanelBody>
							<CodeMirror options={this.codeMirrorOptions} value={
'<span className="fa-stack fa-2x text-primary">\n'+
'	<i className="far fa-square fa-stack-2x"></i>\n'+
'	<i className="fab fa-twitter fa-stack-1x"></i>\n'+
'</span>\n'+
'<span className="fa-stack fa-2x">\n'+
'	<i className="fa fa-circle fa-stack-2x"></i>\n'+
'	<i className="fa fa-flag fa-stack-1x fa-inverse"></i>\n'+
'</span>\n'+
'<span className="fa-stack fa-2x">\n'+
'	<i className="fa fa-square fa-stack-2x"></i>\n'+
'	<i className="fa fa-terminal fa-stack-1x fa-inverse"></i>\n'+
'</span>\n'+
'<span className="fa-stack fa-2x">\n'+
'	<i className="fa fa-camera fa-stack-1x"></i>\n'+
'	<i className="fa fa-ban fa-stack-2x"></i>\n'+
'</span>\n'+
'<span className="fa-stack fa-2x">\n'+
'	<i className="far fa-circle fa-stack-2x"></i>\n'+
'	<i className="fa fa-cog fa-stack-1x"></i>\n'+
'</span>'} />
						</Panel>
					</div>
				</div>
				
				<div className="row">
					<div className="col-xl-6">
						<h3 className="m-b-10"><b>Solid</b></h3>
						<p className="m-b-20">
							Solid type Font Awesome Icon prefix 
							<code>fas fa-*</code>
						</p>
						<div className="row m-b-20 f-s-14">
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-address-book"></i> <span className="text-inverse">address-book</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-address-card"></i> <span className="text-inverse">address-card</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-adjust"></i> <span className="text-inverse">adjust</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-align-center"></i> <span className="text-inverse">align-center</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-align-justify"></i> <span className="text-inverse">align-justify</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-align-left"></i> <span className="text-inverse">align-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-align-right"></i> <span className="text-inverse">align-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-ambulance"></i> <span className="text-inverse">ambulance</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-american-sign-language-interpreting"></i> <span className="text-inverse">american-sign-language-interpreting</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-anchor"></i> <span className="text-inverse">anchor</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-angle-double-down"></i> <span className="text-inverse">angle-double-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-angle-double-left"></i> <span className="text-inverse">angle-double-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-angle-double-right"></i> <span className="text-inverse">angle-double-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-angle-double-up"></i> <span className="text-inverse">angle-double-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-angle-down"></i> <span className="text-inverse">angle-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-angle-left"></i> <span className="text-inverse">angle-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-angle-right"></i> <span className="text-inverse">angle-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-angle-up"></i> <span className="text-inverse">angle-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-archive"></i> <span className="text-inverse">archive</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-arrow-alt-circle-down"></i> <span className="text-inverse">arrow-alt-circle-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-arrow-alt-circle-left"></i> <span className="text-inverse">arrow-alt-circle-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-arrow-alt-circle-right"></i> <span className="text-inverse">arrow-alt-circle-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-arrow-alt-circle-up"></i> <span className="text-inverse">arrow-alt-circle-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-arrow-circle-down"></i> <span className="text-inverse">arrow-circle-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-arrow-circle-left"></i> <span className="text-inverse">arrow-circle-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-arrow-circle-right"></i> <span className="text-inverse">arrow-circle-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-arrow-circle-up"></i> <span className="text-inverse">arrow-circle-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-arrow-down"></i> <span className="text-inverse">arrow-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-arrow-left"></i> <span className="text-inverse">arrow-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-arrow-right"></i> <span className="text-inverse">arrow-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-arrow-up"></i> <span className="text-inverse">arrow-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-arrows-alt"></i> <span className="text-inverse">arrows-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-arrows-alt-h"></i> <span className="text-inverse">arrows-alt-h</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-arrows-alt-v"></i> <span className="text-inverse">arrows-alt-v</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-assistive-listening-systems"></i> <span className="text-inverse">assistive-listening-systems</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-asterisk"></i> <span className="text-inverse">asterisk</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-at"></i> <span className="text-inverse">at</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-audio-description"></i> <span className="text-inverse">audio-description</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-backward"></i> <span className="text-inverse">backward</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-balance-scale"></i> <span className="text-inverse">balance-scale</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-ban"></i> <span className="text-inverse">ban</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-barcode"></i> <span className="text-inverse">barcode</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-bars"></i> <span className="text-inverse">bars</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-bath"></i> <span className="text-inverse">bath</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-battery-empty"></i> <span className="text-inverse">battery-empty</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-battery-full"></i> <span className="text-inverse">battery-full</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-battery-half"></i> <span className="text-inverse">battery-half</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-battery-quarter"></i> <span className="text-inverse">battery-quarter</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-battery-three-quarters"></i> <span className="text-inverse">battery-three-quarters</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-bed"></i> <span className="text-inverse">bed</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-beer"></i> <span className="text-inverse">beer</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-bell"></i> <span className="text-inverse">bell</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-bell-slash"></i> <span className="text-inverse">bell-slash</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-bicycle"></i> <span className="text-inverse">bicycle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-binoculars"></i> <span className="text-inverse">binoculars</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-birthday-cake"></i> <span className="text-inverse">birthday-cake</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-blind"></i> <span className="text-inverse">blind</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-bold"></i> <span className="text-inverse">bold</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-bolt"></i> <span className="text-inverse">bolt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-bomb"></i> <span className="text-inverse">bomb</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-book"></i> <span className="text-inverse">book</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-bookmark"></i> <span className="text-inverse">bookmark</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-braille"></i> <span className="text-inverse">braille</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-briefcase"></i> <span className="text-inverse">briefcase</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-bug"></i> <span className="text-inverse">bug</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-building"></i> <span className="text-inverse">building</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-bullhorn"></i> <span className="text-inverse">bullhorn</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-bullseye"></i> <span className="text-inverse">bullseye</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-bus"></i> <span className="text-inverse">bus</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-calculator"></i> <span className="text-inverse">calculator</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-calendar"></i> <span className="text-inverse">calendar</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-calendar-alt"></i> <span className="text-inverse">calendar-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-calendar-check"></i> <span className="text-inverse">calendar-check</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-calendar-minus"></i> <span className="text-inverse">calendar-minus</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-calendar-plus"></i> <span className="text-inverse">calendar-plus</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-calendar-times"></i> <span className="text-inverse">calendar-times</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-camera"></i> <span className="text-inverse">camera</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-camera-retro"></i> <span className="text-inverse">camera-retro</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-car"></i> <span className="text-inverse">car</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-caret-down"></i> <span className="text-inverse">caret-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-caret-left"></i> <span className="text-inverse">caret-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-caret-right"></i> <span className="text-inverse">caret-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-caret-square-down"></i> <span className="text-inverse">caret-square-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-caret-square-left"></i> <span className="text-inverse">caret-square-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-caret-square-right"></i> <span className="text-inverse">caret-square-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-caret-square-up"></i> <span className="text-inverse">caret-square-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-caret-up"></i> <span className="text-inverse">caret-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-cart-arrow-down"></i> <span className="text-inverse">cart-arrow-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-cart-plus"></i> <span className="text-inverse">cart-plus</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-certificate"></i> <span className="text-inverse">certificate</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-chart-area"></i> <span className="text-inverse">chart-area</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-chart-bar"></i> <span className="text-inverse">chart-bar</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-chart-line"></i> <span className="text-inverse">chart-line</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-chart-pie"></i> <span className="text-inverse">chart-pie</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-check"></i> <span className="text-inverse">check</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-check-circle"></i> <span className="text-inverse">check-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-check-square"></i> <span className="text-inverse">check-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-chevron-circle-down"></i> <span className="text-inverse">chevron-circle-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-chevron-circle-left"></i> <span className="text-inverse">chevron-circle-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-chevron-circle-right"></i> <span className="text-inverse">chevron-circle-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-chevron-circle-up"></i> <span className="text-inverse">chevron-circle-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-chevron-down"></i> <span className="text-inverse">chevron-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-chevron-left"></i> <span className="text-inverse">chevron-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-chevron-right"></i> <span className="text-inverse">chevron-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-chevron-up"></i> <span className="text-inverse">chevron-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-child"></i> <span className="text-inverse">child</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-circle"></i> <span className="text-inverse">circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-circle-notch"></i> <span className="text-inverse">circle-notch</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-clipboard"></i> <span className="text-inverse">clipboard</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-clock"></i> <span className="text-inverse">clock</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-clone"></i> <span className="text-inverse">clone</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-closed-captioning"></i> <span className="text-inverse">closed-captioning</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-cloud"></i> <span className="text-inverse">cloud</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-cloud-download-alt"></i> <span className="text-inverse">cloud-download-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-cloud-upload-alt"></i> <span className="text-inverse">cloud-upload-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-code"></i> <span className="text-inverse">code</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-code-branch"></i> <span className="text-inverse">code-branch</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-coffee"></i> <span className="text-inverse">coffee</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-cog"></i> <span className="text-inverse">cog</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-cogs"></i> <span className="text-inverse">cogs</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-columns"></i> <span className="text-inverse">columns</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-comment"></i> <span className="text-inverse">comment</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-comment-alt"></i> <span className="text-inverse">comment-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-comments"></i> <span className="text-inverse">comments</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-compass"></i> <span className="text-inverse">compass</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-compress"></i> <span className="text-inverse">compress</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-copy"></i> <span className="text-inverse">copy</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-copyright"></i> <span className="text-inverse">copyright</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-credit-card"></i> <span className="text-inverse">credit-card</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-crop"></i> <span className="text-inverse">crop</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-crosshairs"></i> <span className="text-inverse">crosshairs</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-cube"></i> <span className="text-inverse">cube</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-cubes"></i> <span className="text-inverse">cubes</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-cut"></i> <span className="text-inverse">cut</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-database"></i> <span className="text-inverse">database</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-deaf"></i> <span className="text-inverse">deaf</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-desktop"></i> <span className="text-inverse">desktop</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-dollar-sign"></i> <span className="text-inverse">dollar-sign</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-dot-circle"></i> <span className="text-inverse">dot-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-download"></i> <span className="text-inverse">download</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-edit"></i> <span className="text-inverse">edit</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-eject"></i> <span className="text-inverse">eject</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-ellipsis-h"></i> <span className="text-inverse">ellipsis-h</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-ellipsis-v"></i> <span className="text-inverse">ellipsis-v</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-envelope"></i> <span className="text-inverse">envelope</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-envelope-open"></i> <span className="text-inverse">envelope-open</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-envelope-square"></i> <span className="text-inverse">envelope-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-eraser"></i> <span className="text-inverse">eraser</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-euro-sign"></i> <span className="text-inverse">euro-sign</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-exchange-alt"></i> <span className="text-inverse">exchange-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-exclamation"></i> <span className="text-inverse">exclamation</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-exclamation-circle"></i> <span className="text-inverse">exclamation-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-exclamation-triangle"></i> <span className="text-inverse">exclamation-triangle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-expand"></i> <span className="text-inverse">expand</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-expand-arrows-alt"></i> <span className="text-inverse">expand-arrows-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-external-link-alt"></i> <span className="text-inverse">external-link-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-external-link-square-alt"></i> <span className="text-inverse">external-link-square-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-eye"></i> <span className="text-inverse">eye</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-eye-dropper"></i> <span className="text-inverse">eye-dropper</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-eye-slash"></i> <span className="text-inverse">eye-slash</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-fast-backward"></i> <span className="text-inverse">fast-backward</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-fast-forward"></i> <span className="text-inverse">fast-forward</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-fax"></i> <span className="text-inverse">fax</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-female"></i> <span className="text-inverse">female</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-fighter-jet"></i> <span className="text-inverse">fighter-jet</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-file"></i> <span className="text-inverse">file</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-file-alt"></i> <span className="text-inverse">file-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-file-archive"></i> <span className="text-inverse">file-archive</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-file-audio"></i> <span className="text-inverse">file-audio</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-file-code"></i> <span className="text-inverse">file-code</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-file-excel"></i> <span className="text-inverse">file-excel</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-file-image"></i> <span className="text-inverse">file-image</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-file-pdf"></i> <span className="text-inverse">file-pdf</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-file-powerpoint"></i> <span className="text-inverse">file-powerpoint</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-file-video"></i> <span className="text-inverse">file-video</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-file-word"></i> <span className="text-inverse">file-word</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-film"></i> <span className="text-inverse">film</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-filter"></i> <span className="text-inverse">filter</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-fire"></i> <span className="text-inverse">fire</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-fire-extinguisher"></i> <span className="text-inverse">fire-extinguisher</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-flag"></i> <span className="text-inverse">flag</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-flag-checkered"></i> <span className="text-inverse">flag-checkered</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-flask"></i> <span className="text-inverse">flask</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-folder"></i> <span className="text-inverse">folder</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-folder-open"></i> <span className="text-inverse">folder-open</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-font"></i> <span className="text-inverse">font</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-forward"></i> <span className="text-inverse">forward</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-frown"></i> <span className="text-inverse">frown</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-futbol"></i> <span className="text-inverse">futbol</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-gamepad"></i> <span className="text-inverse">gamepad</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-gavel"></i> <span className="text-inverse">gavel</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-gem"></i> <span className="text-inverse">gem</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-genderless"></i> <span className="text-inverse">genderless</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-gift"></i> <span className="text-inverse">gift</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-glass-martini"></i> <span className="text-inverse">glass-martini</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-globe"></i> <span className="text-inverse">globe</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-graduation-cap"></i> <span className="text-inverse">graduation-cap</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-h-square"></i> <span className="text-inverse">h-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hand-lizard"></i> <span className="text-inverse">hand-lizard</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hand-paper"></i> <span className="text-inverse">hand-paper</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hand-peace"></i> <span className="text-inverse">hand-peace</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hand-point-down"></i> <span className="text-inverse">hand-point-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hand-point-left"></i> <span className="text-inverse">hand-point-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hand-point-right"></i> <span className="text-inverse">hand-point-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hand-point-up"></i> <span className="text-inverse">hand-point-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hand-pointer"></i> <span className="text-inverse">hand-pointer</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hand-rock"></i> <span className="text-inverse">hand-rock</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hand-scissors"></i> <span className="text-inverse">hand-scissors</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hand-spock"></i> <span className="text-inverse">hand-spock</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-handshake"></i> <span className="text-inverse">handshake</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hashtag"></i> <span className="text-inverse">hashtag</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hdd"></i> <span className="text-inverse">hdd</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-heading"></i> <span className="text-inverse">heading</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-headphones"></i> <span className="text-inverse">headphones</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-heart"></i> <span className="text-inverse">heart</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-heartbeat"></i> <span className="text-inverse">heartbeat</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-history"></i> <span className="text-inverse">history</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-home"></i> <span className="text-inverse">home</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hospital"></i> <span className="text-inverse">hospital</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hourglass"></i> <span className="text-inverse">hourglass</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hourglass-end"></i> <span className="text-inverse">hourglass-end</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hourglass-half"></i> <span className="text-inverse">hourglass-half</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-hourglass-start"></i> <span className="text-inverse">hourglass-start</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-i-cursor"></i> <span className="text-inverse">i-cursor</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-id-badge"></i> <span className="text-inverse">id-badge</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-id-card"></i> <span className="text-inverse">id-card</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-image"></i> <span className="text-inverse">image</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-images"></i> <span className="text-inverse">images</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-inbox"></i> <span className="text-inverse">inbox</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-indent"></i> <span className="text-inverse">indent</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-industry"></i> <span className="text-inverse">industry</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-info"></i> <span className="text-inverse">info</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-info-circle"></i> <span className="text-inverse">info-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-italic"></i> <span className="text-inverse">italic</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-key"></i> <span className="text-inverse">key</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-keyboard"></i> <span className="text-inverse">keyboard</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-language"></i> <span className="text-inverse">language</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-laptop"></i> <span className="text-inverse">laptop</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-leaf"></i> <span className="text-inverse">leaf</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-lemon"></i> <span className="text-inverse">lemon</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-level-down-alt"></i> <span className="text-inverse">level-down-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-level-up-alt"></i> <span className="text-inverse">level-up-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-life-ring"></i> <span className="text-inverse">life-ring</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-lightbulb"></i> <span className="text-inverse">lightbulb</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-link"></i> <span className="text-inverse">link</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-lira-sign"></i> <span className="text-inverse">lira-sign</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-list"></i> <span className="text-inverse">list</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-list-alt"></i> <span className="text-inverse">list-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-list-ol"></i> <span className="text-inverse">list-ol</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-list-ul"></i> <span className="text-inverse">list-ul</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-location-arrow"></i> <span className="text-inverse">location-arrow</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-lock"></i> <span className="text-inverse">lock</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-lock-open"></i> <span className="text-inverse">lock-open</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-long-arrow-alt-down"></i> <span className="text-inverse">long-arrow-alt-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-long-arrow-alt-left"></i> <span className="text-inverse">long-arrow-alt-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-long-arrow-alt-right"></i> <span className="text-inverse">long-arrow-alt-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-long-arrow-alt-up"></i> <span className="text-inverse">long-arrow-alt-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-low-vision"></i> <span className="text-inverse">low-vision</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-magic"></i> <span className="text-inverse">magic</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-magnet"></i> <span className="text-inverse">magnet</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-male"></i> <span className="text-inverse">male</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-map"></i> <span className="text-inverse">map</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-map-marker"></i> <span className="text-inverse">map-marker</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-map-marker-alt"></i> <span className="text-inverse">map-marker-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-map-pin"></i> <span className="text-inverse">map-pin</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-map-signs"></i> <span className="text-inverse">map-signs</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-mars"></i> <span className="text-inverse">mars</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-mars-double"></i> <span className="text-inverse">mars-double</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-mars-stroke"></i> <span className="text-inverse">mars-stroke</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-mars-stroke-h"></i> <span className="text-inverse">mars-stroke-h</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-mars-stroke-v"></i> <span className="text-inverse">mars-stroke-v</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-medkit"></i> <span className="text-inverse">medkit</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-meh"></i> <span className="text-inverse">meh</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-mercury"></i> <span className="text-inverse">mercury</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-microchip"></i> <span className="text-inverse">microchip</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-microphone"></i> <span className="text-inverse">microphone</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-microphone-slash"></i> <span className="text-inverse">microphone-slash</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-minus"></i> <span className="text-inverse">minus</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-minus-circle"></i> <span className="text-inverse">minus-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-minus-square"></i> <span className="text-inverse">minus-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-mobile"></i> <span className="text-inverse">mobile</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-mobile-alt"></i> <span className="text-inverse">mobile-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-money-bill-alt"></i> <span className="text-inverse">money-bill-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-moon"></i> <span className="text-inverse">moon</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-motorcycle"></i> <span className="text-inverse">motorcycle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-mouse-pointer"></i> <span className="text-inverse">mouse-pointer</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-music"></i> <span className="text-inverse">music</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-neuter"></i> <span className="text-inverse">neuter</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-newspaper"></i> <span className="text-inverse">newspaper</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-object-group"></i> <span className="text-inverse">object-group</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-object-ungroup"></i> <span className="text-inverse">object-ungroup</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-outdent"></i> <span className="text-inverse">outdent</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-paint-brush"></i> <span className="text-inverse">paint-brush</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-paper-plane"></i> <span className="text-inverse">paper-plane</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-paperclip"></i> <span className="text-inverse">paperclip</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-paragraph"></i> <span className="text-inverse">paragraph</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-paste"></i> <span className="text-inverse">paste</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-pause"></i> <span className="text-inverse">pause</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-pause-circle"></i> <span className="text-inverse">pause-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-paw"></i> <span className="text-inverse">paw</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-pen-square"></i> <span className="text-inverse">pen-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-pencil-alt"></i> <span className="text-inverse">pencil-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-percent"></i> <span className="text-inverse">percent</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-phone"></i> <span className="text-inverse">phone</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-phone-square"></i> <span className="text-inverse">phone-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-phone-volume"></i> <span className="text-inverse">phone-volume</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-plane"></i> <span className="text-inverse">plane</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-play"></i> <span className="text-inverse">play</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-play-circle"></i> <span className="text-inverse">play-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-plug"></i> <span className="text-inverse">plug</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-plus"></i> <span className="text-inverse">plus</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-plus-circle"></i> <span className="text-inverse">plus-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-plus-square"></i> <span className="text-inverse">plus-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-podcast"></i> <span className="text-inverse">podcast</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-pound-sign"></i> <span className="text-inverse">pound-sign</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-power-off"></i> <span className="text-inverse">power-off</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-print"></i> <span className="text-inverse">print</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-puzzle-piece"></i> <span className="text-inverse">puzzle-piece</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-qrcode"></i> <span className="text-inverse">qrcode</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-question"></i> <span className="text-inverse">question</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-question-circle"></i> <span className="text-inverse">question-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-quote-left"></i> <span className="text-inverse">quote-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-quote-right"></i> <span className="text-inverse">quote-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-random"></i> <span className="text-inverse">random</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-recycle"></i> <span className="text-inverse">recycle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-redo"></i> <span className="text-inverse">redo</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-redo-alt"></i> <span className="text-inverse">redo-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-registered"></i> <span className="text-inverse">registered</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-reply"></i> <span className="text-inverse">reply</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-reply-all"></i> <span className="text-inverse">reply-all</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-retweet"></i> <span className="text-inverse">retweet</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-road"></i> <span className="text-inverse">road</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-rocket"></i> <span className="text-inverse">rocket</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-rss"></i> <span className="text-inverse">rss</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-rss-square"></i> <span className="text-inverse">rss-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-ruble-sign"></i> <span className="text-inverse">ruble-sign</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-rupee-sign"></i> <span className="text-inverse">rupee-sign</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-save"></i> <span className="text-inverse">save</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-search"></i> <span className="text-inverse">search</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-search-minus"></i> <span className="text-inverse">search-minus</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-search-plus"></i> <span className="text-inverse">search-plus</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-server"></i> <span className="text-inverse">server</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-share"></i> <span className="text-inverse">share</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-share-alt"></i> <span className="text-inverse">share-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-share-alt-square"></i> <span className="text-inverse">share-alt-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-share-square"></i> <span className="text-inverse">share-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-shekel-sign"></i> <span className="text-inverse">shekel-sign</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-shield-alt"></i> <span className="text-inverse">shield-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-ship"></i> <span className="text-inverse">ship</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-shopping-bag"></i> <span className="text-inverse">shopping-bag</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-shopping-basket"></i> <span className="text-inverse">shopping-basket</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-shopping-cart"></i> <span className="text-inverse">shopping-cart</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-shower"></i> <span className="text-inverse">shower</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sign-in-alt"></i> <span className="text-inverse">sign-in-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sign-language"></i> <span className="text-inverse">sign-language</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sign-out-alt"></i> <span className="text-inverse">sign-out-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-signal"></i> <span className="text-inverse">signal</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sitemap"></i> <span className="text-inverse">sitemap</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sliders-h"></i> <span className="text-inverse">sliders-h</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-smile"></i> <span className="text-inverse">smile</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-snowflake"></i> <span className="text-inverse">snowflake</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sort"></i> <span className="text-inverse">sort</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sort-alpha-down"></i> <span className="text-inverse">sort-alpha-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sort-alpha-up"></i> <span className="text-inverse">sort-alpha-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sort-amount-down"></i> <span className="text-inverse">sort-amount-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sort-amount-up"></i> <span className="text-inverse">sort-amount-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sort-down"></i> <span className="text-inverse">sort-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sort-numeric-down"></i> <span className="text-inverse">sort-numeric-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sort-numeric-up"></i> <span className="text-inverse">sort-numeric-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sort-up"></i> <span className="text-inverse">sort-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-space-shuttle"></i> <span className="text-inverse">space-shuttle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-spinner"></i> <span className="text-inverse">spinner</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-square"></i> <span className="text-inverse">square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-star"></i> <span className="text-inverse">star</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-star-half"></i> <span className="text-inverse">star-half</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-step-backward"></i> <span className="text-inverse">step-backward</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-step-forward"></i> <span className="text-inverse">step-forward</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-stethoscope"></i> <span className="text-inverse">stethoscope</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sticky-note"></i> <span className="text-inverse">sticky-note</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-stop"></i> <span className="text-inverse">stop</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-stop-circle"></i> <span className="text-inverse">stop-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-stopwatch"></i> <span className="text-inverse">stopwatch</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-street-view"></i> <span className="text-inverse">street-view</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-strikethrough"></i> <span className="text-inverse">strikethrough</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-subscript"></i> <span className="text-inverse">subscript</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-subway"></i> <span className="text-inverse">subway</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-suitcase"></i> <span className="text-inverse">suitcase</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sun"></i> <span className="text-inverse">sun</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-superscript"></i> <span className="text-inverse">superscript</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sync"></i> <span className="text-inverse">sync</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-sync-alt"></i> <span className="text-inverse">sync-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-table"></i> <span className="text-inverse">table</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-tablet"></i> <span className="text-inverse">tablet</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-tablet-alt"></i> <span className="text-inverse">tablet-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-tachometer-alt"></i> <span className="text-inverse">tachometer-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-tag"></i> <span className="text-inverse">tag</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-tags"></i> <span className="text-inverse">tags</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-tasks"></i> <span className="text-inverse">tasks</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-taxi"></i> <span className="text-inverse">taxi</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-terminal"></i> <span className="text-inverse">terminal</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-text-height"></i> <span className="text-inverse">text-height</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-text-width"></i> <span className="text-inverse">text-width</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-th"></i> <span className="text-inverse">th</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-th-large"></i> <span className="text-inverse">th-large</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-th-list"></i> <span className="text-inverse">th-list</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-thermometer-empty"></i> <span className="text-inverse">thermometer-empty</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-thermometer-full"></i> <span className="text-inverse">thermometer-full</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-thermometer-half"></i> <span className="text-inverse">thermometer-half</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-thermometer-quarter"></i> <span className="text-inverse">thermometer-quarter</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-thermometer-three-quarters"></i> <span className="text-inverse">thermometer-three-quarters</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-thumbs-down"></i> <span className="text-inverse">thumbs-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-thumbs-up"></i> <span className="text-inverse">thumbs-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-thumbtack"></i> <span className="text-inverse">thumbtack</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-ticket-alt"></i> <span className="text-inverse">ticket-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-times"></i> <span className="text-inverse">times</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-times-circle"></i> <span className="text-inverse">times-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-tint"></i> <span className="text-inverse">tint</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-toggle-off"></i> <span className="text-inverse">toggle-off</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-toggle-on"></i> <span className="text-inverse">toggle-on</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-trademark"></i> <span className="text-inverse">trademark</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-train"></i> <span className="text-inverse">train</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-transgender"></i> <span className="text-inverse">transgender</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-transgender-alt"></i> <span className="text-inverse">transgender-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-trash"></i> <span className="text-inverse">trash</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-trash-alt"></i> <span className="text-inverse">trash-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-tree"></i> <span className="text-inverse">tree</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-trophy"></i> <span className="text-inverse">trophy</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-truck"></i> <span className="text-inverse">truck</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-tty"></i> <span className="text-inverse">tty</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-tv"></i> <span className="text-inverse">tv</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-umbrella"></i> <span className="text-inverse">umbrella</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-underline"></i> <span className="text-inverse">underline</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-undo"></i> <span className="text-inverse">undo</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-undo-alt"></i> <span className="text-inverse">undo-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-universal-access"></i> <span className="text-inverse">universal-access</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-university"></i> <span className="text-inverse">university</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-unlink"></i> <span className="text-inverse">unlink</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-unlock"></i> <span className="text-inverse">unlock</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-unlock-alt"></i> <span className="text-inverse">unlock-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-upload"></i> <span className="text-inverse">upload</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-user"></i> <span className="text-inverse">user</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-user-circle"></i> <span className="text-inverse">user-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-user-md"></i> <span className="text-inverse">user-md</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-user-plus"></i> <span className="text-inverse">user-plus</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-user-secret"></i> <span className="text-inverse">user-secret</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-user-times"></i> <span className="text-inverse">user-times</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-users"></i> <span className="text-inverse">users</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-utensil-spoon"></i> <span className="text-inverse">utensil-spoon</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-utensils"></i> <span className="text-inverse">utensils</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-venus"></i> <span className="text-inverse">venus</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-venus-double"></i> <span className="text-inverse">venus-double</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-venus-mars"></i> <span className="text-inverse">venus-mars</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-video"></i> <span className="text-inverse">video</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-volume-down"></i> <span className="text-inverse">volume-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-volume-off"></i> <span className="text-inverse">volume-off</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-volume-up"></i> <span className="text-inverse">volume-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-wheelchair"></i> <span className="text-inverse">wheelchair</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-wifi"></i> <span className="text-inverse">wifi</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-window-close"></i> <span className="text-inverse">window-close</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-window-maximize"></i> <span className="text-inverse">window-maximize</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-window-minimize"></i> <span className="text-inverse">window-minimize</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-window-restore"></i> <span className="text-inverse">window-restore</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-won-sign"></i> <span className="text-inverse">won-sign</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-wrench"></i> <span className="text-inverse">wrench</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fas fa-lg fa-fw m-r-10 fa-yen-sign"></i> <span className="text-inverse">yen-sign</span></div>
						</div>
					</div>
					<div className="col-xl-6">
						<h3 className="m-b-10"><b>Regular</b></h3>
						<p className="m-b-20">
							Regular type Font Awesome Icon prefix 
							<code>far fa-*</code>
						</p>
						<div className="row m-b-20 f-s-14">
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-address-book"></i> <span className="text-inverse">address-book</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-address-card"></i> <span className="text-inverse">address-card</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-arrow-alt-circle-down"></i> <span className="text-inverse">arrow-alt-circle-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-arrow-alt-circle-left"></i> <span className="text-inverse">arrow-alt-circle-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-arrow-alt-circle-right"></i> <span className="text-inverse">arrow-alt-circle-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-arrow-alt-circle-up"></i> <span className="text-inverse">arrow-alt-circle-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-bell"></i> <span className="text-inverse">bell</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-bell-slash"></i> <span className="text-inverse">bell-slash</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-bookmark"></i> <span className="text-inverse">bookmark</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-building"></i> <span className="text-inverse">building</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-calendar"></i> <span className="text-inverse">calendar</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-calendar-alt"></i> <span className="text-inverse">calendar-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-calendar-check"></i> <span className="text-inverse">calendar-check</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-calendar-minus"></i> <span className="text-inverse">calendar-minus</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-calendar-plus"></i> <span className="text-inverse">calendar-plus</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-calendar-times"></i> <span className="text-inverse">calendar-times</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-caret-square-down"></i> <span className="text-inverse">caret-square-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-caret-square-left"></i> <span className="text-inverse">caret-square-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-caret-square-right"></i> <span className="text-inverse">caret-square-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-caret-square-up"></i> <span className="text-inverse">caret-square-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-chart-bar"></i> <span className="text-inverse">chart-bar</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-check-circle"></i> <span className="text-inverse">check-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-check-square"></i> <span className="text-inverse">check-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-circle"></i> <span className="text-inverse">circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-clipboard"></i> <span className="text-inverse">clipboard</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-clock"></i> <span className="text-inverse">clock</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-clone"></i> <span className="text-inverse">clone</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-closed-captioning"></i> <span className="text-inverse">closed-captioning</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-comment"></i> <span className="text-inverse">comment</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-comment-alt"></i> <span className="text-inverse">comment-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-comments"></i> <span className="text-inverse">comments</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-compass"></i> <span className="text-inverse">compass</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-copy"></i> <span className="text-inverse">copy</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-copyright"></i> <span className="text-inverse">copyright</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-credit-card"></i> <span className="text-inverse">credit-card</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-dot-circle"></i> <span className="text-inverse">dot-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-edit"></i> <span className="text-inverse">edit</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-envelope"></i> <span className="text-inverse">envelope</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-envelope-open"></i> <span className="text-inverse">envelope-open</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-eye-slash"></i> <span className="text-inverse">eye-slash</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-file"></i> <span className="text-inverse">file</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-file-alt"></i> <span className="text-inverse">file-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-file-archive"></i> <span className="text-inverse">file-archive</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-file-audio"></i> <span className="text-inverse">file-audio</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-file-code"></i> <span className="text-inverse">file-code</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-file-excel"></i> <span className="text-inverse">file-excel</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-file-image"></i> <span className="text-inverse">file-image</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-file-pdf"></i> <span className="text-inverse">file-pdf</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-file-powerpoint"></i> <span className="text-inverse">file-powerpoint</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-file-video"></i> <span className="text-inverse">file-video</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-file-word"></i> <span className="text-inverse">file-word</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-flag"></i> <span className="text-inverse">flag</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-folder"></i> <span className="text-inverse">folder</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-folder-open"></i> <span className="text-inverse">folder-open</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-frown"></i> <span className="text-inverse">frown</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-futbol"></i> <span className="text-inverse">futbol</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-gem"></i> <span className="text-inverse">gem</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-hand-lizard"></i> <span className="text-inverse">hand-lizard</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-hand-paper"></i> <span className="text-inverse">hand-paper</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-hand-peace"></i> <span className="text-inverse">hand-peace</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-hand-point-down"></i> <span className="text-inverse">hand-point-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-hand-point-left"></i> <span className="text-inverse">hand-point-left</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-hand-point-right"></i> <span className="text-inverse">hand-point-right</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-hand-point-up"></i> <span className="text-inverse">hand-point-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-hand-pointer"></i> <span className="text-inverse">hand-pointer</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-hand-rock"></i> <span className="text-inverse">hand-rock</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-hand-scissors"></i> <span className="text-inverse">hand-scissors</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-hand-spock"></i> <span className="text-inverse">hand-spock</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-handshake"></i> <span className="text-inverse">handshake</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-hdd"></i> <span className="text-inverse">hdd</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-heart"></i> <span className="text-inverse">heart</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-hospital"></i> <span className="text-inverse">hospital</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-hourglass"></i> <span className="text-inverse">hourglass</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-id-badge"></i> <span className="text-inverse">id-badge</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-id-card"></i> <span className="text-inverse">id-card</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-image"></i> <span className="text-inverse">image</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-images"></i> <span className="text-inverse">images</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-keyboard"></i> <span className="text-inverse">keyboard</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-lemon"></i> <span className="text-inverse">lemon</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-life-ring"></i> <span className="text-inverse">life-ring</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-lightbulb"></i> <span className="text-inverse">lightbulb</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-list-alt"></i> <span className="text-inverse">list-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-map"></i> <span className="text-inverse">map</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-meh"></i> <span className="text-inverse">meh</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-minus-square"></i> <span className="text-inverse">minus-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-money-bill-alt"></i> <span className="text-inverse">money-bill-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-moon"></i> <span className="text-inverse">moon</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-newspaper"></i> <span className="text-inverse">newspaper</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-object-group"></i> <span className="text-inverse">object-group</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-object-ungroup"></i> <span className="text-inverse">object-ungroup</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-paper-plane"></i> <span className="text-inverse">paper-plane</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-pause-circle"></i> <span className="text-inverse">pause-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-play-circle"></i> <span className="text-inverse">play-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-plus-square"></i> <span className="text-inverse">plus-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-question-circle"></i> <span className="text-inverse">question-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-registered"></i> <span className="text-inverse">registered</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-save"></i> <span className="text-inverse">save</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-share-square"></i> <span className="text-inverse">share-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-smile"></i> <span className="text-inverse">smile</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-snowflake"></i> <span className="text-inverse">snowflake</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-square"></i> <span className="text-inverse">square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-star"></i> <span className="text-inverse">star</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-star-half"></i> <span className="text-inverse">star-half</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-sticky-note"></i> <span className="text-inverse">sticky-note</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-stop-circle"></i> <span className="text-inverse">stop-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-sun"></i> <span className="text-inverse">sun</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-thumbs-down"></i> <span className="text-inverse">thumbs-down</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-thumbs-up"></i> <span className="text-inverse">thumbs-up</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-times-circle"></i> <span className="text-inverse">times-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-trash-alt"></i> <span className="text-inverse">trash-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-user"></i> <span className="text-inverse">user</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-user-circle"></i> <span className="text-inverse">user-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-window-close"></i> <span className="text-inverse">window-close</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-window-maximize"></i> <span className="text-inverse">window-maximize</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-window-minimize"></i> <span className="text-inverse">window-minimize</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="far fa-lg fa-fw m-r-10 fa-window-restore"></i> <span className="text-inverse">window-restore</span></div>
						</div>
				
						<h3 className="m-b-10"><b>Brands</b></h3>
						<p className="m-b-20">
							Brand type Font Awesome Icon prefix 
							<code>fab fa-*</code>
						</p>
						<div className="row m-b-20 f-s-14">
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-500px"></i> <span className="text-inverse">500px</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-accessible-icon"></i> <span className="text-inverse">accessible-icon</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-accusoft"></i> <span className="text-inverse">accusoft</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-adn"></i> <span className="text-inverse">adn</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-adversal"></i> <span className="text-inverse">adversal</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-affiliatetheme"></i> <span className="text-inverse">affiliatetheme</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-algolia"></i> <span className="text-inverse">algolia</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-amazon"></i> <span className="text-inverse">amazon</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-amazon-pay"></i> <span className="text-inverse">amazon-pay</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-amilia"></i> <span className="text-inverse">amilia</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-android"></i> <span className="text-inverse">android</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-angellist"></i> <span className="text-inverse">angellist</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-angrycreative"></i> <span className="text-inverse">angrycreative</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-angular"></i> <span className="text-inverse">angular</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-app-store"></i> <span className="text-inverse">app-store</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-app-store-ios"></i> <span className="text-inverse">app-store-ios</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-apper"></i> <span className="text-inverse">apper</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-apple"></i> <span className="text-inverse">apple</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-apple-pay"></i> <span className="text-inverse">apple-pay</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-asymmetrik"></i> <span className="text-inverse">asymmetrik</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-audible"></i> <span className="text-inverse">audible</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-autoprefixer"></i> <span className="text-inverse">autoprefixer</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-avianex"></i> <span className="text-inverse">avianex</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-aviato"></i> <span className="text-inverse">aviato</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-aws"></i> <span className="text-inverse">aws</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-bandcamp"></i> <span className="text-inverse">bandcamp</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-behance"></i> <span className="text-inverse">behance</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-behance-square"></i> <span className="text-inverse">behance-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-bimobject"></i> <span className="text-inverse">bimobject</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-bitbucket"></i> <span className="text-inverse">bitbucket</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-bitcoin"></i> <span className="text-inverse">bitcoin</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-bity"></i> <span className="text-inverse">bity</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-black-tie"></i> <span className="text-inverse">black-tie</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-blackberry"></i> <span className="text-inverse">blackberry</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-blogger"></i> <span className="text-inverse">blogger</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-blogger-b"></i> <span className="text-inverse">blogger-b</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-bluetooth"></i> <span className="text-inverse">bluetooth</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-bluetooth-b"></i> <span className="text-inverse">bluetooth-b</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-btc"></i> <span className="text-inverse">btc</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-buromobelexperte"></i> <span className="text-inverse">buromobelexperte</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-buysellads"></i> <span className="text-inverse">buysellads</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-cc-amazon-pay"></i> <span className="text-inverse">cc-amazon-pay</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-cc-amex"></i> <span className="text-inverse">cc-amex</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-cc-apple-pay"></i> <span className="text-inverse">cc-apple-pay</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-cc-diners-club"></i> <span className="text-inverse">cc-diners-club</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-cc-discover"></i> <span className="text-inverse">cc-discover</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-cc-jcb"></i> <span className="text-inverse">cc-jcb</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-cc-mastercard"></i> <span className="text-inverse">cc-mastercard</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-cc-paypal"></i> <span className="text-inverse">cc-paypal</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-cc-stripe"></i> <span className="text-inverse">cc-stripe</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-cc-visa"></i> <span className="text-inverse">cc-visa</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-centercode"></i> <span className="text-inverse">centercode</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-chrome"></i> <span className="text-inverse">chrome</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-cloudscale"></i> <span className="text-inverse">cloudscale</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-cloudsmith"></i> <span className="text-inverse">cloudsmith</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-cloudversify"></i> <span className="text-inverse">cloudversify</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-codepen"></i> <span className="text-inverse">codepen</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-codiepie"></i> <span className="text-inverse">codiepie</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-connectdevelop"></i> <span className="text-inverse">connectdevelop</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-contao"></i> <span className="text-inverse">contao</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-cpanel"></i> <span className="text-inverse">cpanel</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-creative-commons"></i> <span className="text-inverse">creative-commons</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-css3"></i> <span className="text-inverse">css3</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-css3-alt"></i> <span className="text-inverse">css3-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-cuttlefish"></i> <span className="text-inverse">cuttlefish</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-d-and-d"></i> <span className="text-inverse">d-and-d</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-dashcube"></i> <span className="text-inverse">dashcube</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-delicious"></i> <span className="text-inverse">delicious</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-deploydog"></i> <span className="text-inverse">deploydog</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-deskpro"></i> <span className="text-inverse">deskpro</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-deviantart"></i> <span className="text-inverse">deviantart</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-digg"></i> <span className="text-inverse">digg</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-digital-ocean"></i> <span className="text-inverse">digital-ocean</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-discord"></i> <span className="text-inverse">discord</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-discourse"></i> <span className="text-inverse">discourse</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-dochub"></i> <span className="text-inverse">dochub</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-docker"></i> <span className="text-inverse">docker</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-draft2digital"></i> <span className="text-inverse">draft2digital</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-dribbble"></i> <span className="text-inverse">dribbble</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-dribbble-square"></i> <span className="text-inverse">dribbble-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-dropbox"></i> <span className="text-inverse">dropbox</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-drupal"></i> <span className="text-inverse">drupal</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-dyalog"></i> <span className="text-inverse">dyalog</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-earlybirds"></i> <span className="text-inverse">earlybirds</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-edge"></i> <span className="text-inverse">edge</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-elementor"></i> <span className="text-inverse">elementor</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-ember"></i> <span className="text-inverse">ember</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-empire"></i> <span className="text-inverse">empire</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-envira"></i> <span className="text-inverse">envira</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-erlang"></i> <span className="text-inverse">erlang</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-ethereum"></i> <span className="text-inverse">ethereum</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-etsy"></i> <span className="text-inverse">etsy</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-expeditedssl"></i> <span className="text-inverse">expeditedssl</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-facebook"></i> <span className="text-inverse">facebook</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-facebook-f"></i> <span className="text-inverse">facebook-f</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-facebook-messenger"></i> <span className="text-inverse">facebook-messenger</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-facebook-square"></i> <span className="text-inverse">facebook-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-firefox"></i> <span className="text-inverse">firefox</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-first-order"></i> <span className="text-inverse">first-order</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-firstdraft"></i> <span className="text-inverse">firstdraft</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-flickr"></i> <span className="text-inverse">flickr</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-fly"></i> <span className="text-inverse">fly</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-font-awesome"></i> <span className="text-inverse">font-awesome</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-font-awesome-alt"></i> <span className="text-inverse">font-awesome-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-font-awesome-flag"></i> <span className="text-inverse">font-awesome-flag</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-fonticons"></i> <span className="text-inverse">fonticons</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-fonticons-fi"></i> <span className="text-inverse">fonticons-fi</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-fort-awesome"></i> <span className="text-inverse">fort-awesome</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-fort-awesome-alt"></i> <span className="text-inverse">fort-awesome-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-forumbee"></i> <span className="text-inverse">forumbee</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-foursquare"></i> <span className="text-inverse">foursquare</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-free-code-camp"></i> <span className="text-inverse">free-code-camp</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-freebsd"></i> <span className="text-inverse">freebsd</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-get-pocket"></i> <span className="text-inverse">get-pocket</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-gg"></i> <span className="text-inverse">gg</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-gg-circle"></i> <span className="text-inverse">gg-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-git"></i> <span className="text-inverse">git</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-git-square"></i> <span className="text-inverse">git-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-github"></i> <span className="text-inverse">github</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-github-alt"></i> <span className="text-inverse">github-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-github-square"></i> <span className="text-inverse">github-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-gitkraken"></i> <span className="text-inverse">gitkraken</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-gitlab"></i> <span className="text-inverse">gitlab</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-gitter"></i> <span className="text-inverse">gitter</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-glide"></i> <span className="text-inverse">glide</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-glide-g"></i> <span className="text-inverse">glide-g</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-gofore"></i> <span className="text-inverse">gofore</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-goodreads"></i> <span className="text-inverse">goodreads</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-goodreads-g"></i> <span className="text-inverse">goodreads-g</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-google"></i> <span className="text-inverse">google</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-google-drive"></i> <span className="text-inverse">google-drive</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-google-play"></i> <span className="text-inverse">google-play</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-google-plus"></i> <span className="text-inverse">google-plus</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-google-plus-g"></i> <span className="text-inverse">google-plus-g</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-google-plus-square"></i> <span className="text-inverse">google-plus-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-google-wallet"></i> <span className="text-inverse">google-wallet</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-gratipay"></i> <span className="text-inverse">gratipay</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-grav"></i> <span className="text-inverse">grav</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-gripfire"></i> <span className="text-inverse">gripfire</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-grunt"></i> <span className="text-inverse">grunt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-gulp"></i> <span className="text-inverse">gulp</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-hacker-news"></i> <span className="text-inverse">hacker-news</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-hacker-news-square"></i> <span className="text-inverse">hacker-news-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-hire-a-helper"></i> <span className="text-inverse">hire-a-helper</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-hooli"></i> <span className="text-inverse">hooli</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-hotjar"></i> <span className="text-inverse">hotjar</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-houzz"></i> <span className="text-inverse">houzz</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-html5"></i> <span className="text-inverse">html5</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-hubspot"></i> <span className="text-inverse">hubspot</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-imdb"></i> <span className="text-inverse">imdb</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-instagram"></i> <span className="text-inverse">instagram</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-internet-explorer"></i> <span className="text-inverse">internet-explorer</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-ioxhost"></i> <span className="text-inverse">ioxhost</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-itunes"></i> <span className="text-inverse">itunes</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-itunes-note"></i> <span className="text-inverse">itunes-note</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-jenkins"></i> <span className="text-inverse">jenkins</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-joget"></i> <span className="text-inverse">joget</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-joomla"></i> <span className="text-inverse">joomla</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-js"></i> <span className="text-inverse">js</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-js-square"></i> <span className="text-inverse">js-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-jsfiddle"></i> <span className="text-inverse">jsfiddle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-keycdn"></i> <span className="text-inverse">keycdn</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-kickstarter"></i> <span className="text-inverse">kickstarter</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-kickstarter-k"></i> <span className="text-inverse">kickstarter-k</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-korvue"></i> <span className="text-inverse">korvue</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-laravel"></i> <span className="text-inverse">laravel</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-lastfm"></i> <span className="text-inverse">lastfm</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-lastfm-square"></i> <span className="text-inverse">lastfm-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-leanpub"></i> <span className="text-inverse">leanpub</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-less"></i> <span className="text-inverse">less</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-line"></i> <span className="text-inverse">line</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-linkedin"></i> <span className="text-inverse">linkedin</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-linkedin-in"></i> <span className="text-inverse">linkedin-in</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-linode"></i> <span className="text-inverse">linode</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-linux"></i> <span className="text-inverse">linux</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-lyft"></i> <span className="text-inverse">lyft</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-magento"></i> <span className="text-inverse">magento</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-maxcdn"></i> <span className="text-inverse">maxcdn</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-medapps"></i> <span className="text-inverse">medapps</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-medium"></i> <span className="text-inverse">medium</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-medium-m"></i> <span className="text-inverse">medium-m</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-medrt"></i> <span className="text-inverse">medrt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-meetup"></i> <span className="text-inverse">meetup</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-microsoft"></i> <span className="text-inverse">microsoft</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-mix"></i> <span className="text-inverse">mix</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-mixcloud"></i> <span className="text-inverse">mixcloud</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-mizuni"></i> <span className="text-inverse">mizuni</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-modx"></i> <span className="text-inverse">modx</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-monero"></i> <span className="text-inverse">monero</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-napster"></i> <span className="text-inverse">napster</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-nintendo-switch"></i> <span className="text-inverse">nintendo-switch</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-node"></i> <span className="text-inverse">node</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-node-js"></i> <span className="text-inverse">node-js</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-npm"></i> <span className="text-inverse">npm</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-ns8"></i> <span className="text-inverse">ns8</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-nutritionix"></i> <span className="text-inverse">nutritionix</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-odnoklassniki"></i> <span className="text-inverse">odnoklassniki</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-odnoklassniki-square"></i> <span className="text-inverse">odnoklassniki-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-opencart"></i> <span className="text-inverse">opencart</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-openid"></i> <span className="text-inverse">openid</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-opera"></i> <span className="text-inverse">opera</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-optin-monster"></i> <span className="text-inverse">optin-monster</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-osi"></i> <span className="text-inverse">osi</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-page4"></i> <span className="text-inverse">page4</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-pagelines"></i> <span className="text-inverse">pagelines</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-palfed"></i> <span className="text-inverse">palfed</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-patreon"></i> <span className="text-inverse">patreon</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-paypal"></i> <span className="text-inverse">paypal</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-periscope"></i> <span className="text-inverse">periscope</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-phabricator"></i> <span className="text-inverse">phabricator</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-phoenix-framework"></i> <span className="text-inverse">phoenix-framework</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-pied-piper"></i> <span className="text-inverse">pied-piper</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-pied-piper-alt"></i> <span className="text-inverse">pied-piper-alt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-pied-piper-pp"></i> <span className="text-inverse">pied-piper-pp</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-pinterest"></i> <span className="text-inverse">pinterest</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-pinterest-p"></i> <span className="text-inverse">pinterest-p</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-pinterest-square"></i> <span className="text-inverse">pinterest-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-playstation"></i> <span className="text-inverse">playstation</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-product-hunt"></i> <span className="text-inverse">product-hunt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-pushed"></i> <span className="text-inverse">pushed</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-python"></i> <span className="text-inverse">python</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-qq"></i> <span className="text-inverse">qq</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-quora"></i> <span className="text-inverse">quora</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-ravelry"></i> <span className="text-inverse">ravelry</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-react"></i> <span className="text-inverse">react</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-rebel"></i> <span className="text-inverse">rebel</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-red-river"></i> <span className="text-inverse">red-river</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-reddit"></i> <span className="text-inverse">reddit</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-reddit-alien"></i> <span className="text-inverse">reddit-alien</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-reddit-square"></i> <span className="text-inverse">reddit-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-rendact"></i> <span className="text-inverse">rendact</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-renren"></i> <span className="text-inverse">renren</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-replyd"></i> <span className="text-inverse">replyd</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-resolving"></i> <span className="text-inverse">resolving</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-rocketchat"></i> <span className="text-inverse">rocketchat</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-rockrms"></i> <span className="text-inverse">rockrms</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-safari"></i> <span className="text-inverse">safari</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-sass"></i> <span className="text-inverse">sass</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-schlix"></i> <span className="text-inverse">schlix</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-scribd"></i> <span className="text-inverse">scribd</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-searchengin"></i> <span className="text-inverse">searchengin</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-sellcast"></i> <span className="text-inverse">sellcast</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-sellsy"></i> <span className="text-inverse">sellsy</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-servicestack"></i> <span className="text-inverse">servicestack</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-shirtsinbulk"></i> <span className="text-inverse">shirtsinbulk</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-simplybuilt"></i> <span className="text-inverse">simplybuilt</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-sistrix"></i> <span className="text-inverse">sistrix</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-skyatlas"></i> <span className="text-inverse">skyatlas</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-skype"></i> <span className="text-inverse">skype</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-slack"></i> <span className="text-inverse">slack</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-slack-hash"></i> <span className="text-inverse">slack-hash</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-slideshare"></i> <span className="text-inverse">slideshare</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-snapchat"></i> <span className="text-inverse">snapchat</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-snapchat-ghost"></i> <span className="text-inverse">snapchat-ghost</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-snapchat-square"></i> <span className="text-inverse">snapchat-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-soundcloud"></i> <span className="text-inverse">soundcloud</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-speakap"></i> <span className="text-inverse">speakap</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-spotify"></i> <span className="text-inverse">spotify</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-stack-exchange"></i> <span className="text-inverse">stack-exchange</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-stack-overflow"></i> <span className="text-inverse">stack-overflow</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-staylinked"></i> <span className="text-inverse">staylinked</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-steam"></i> <span className="text-inverse">steam</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-steam-square"></i> <span className="text-inverse">steam-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-steam-symbol"></i> <span className="text-inverse">steam-symbol</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-sticker-mule"></i> <span className="text-inverse">sticker-mule</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-strava"></i> <span className="text-inverse">strava</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-stripe"></i> <span className="text-inverse">stripe</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-stripe-s"></i> <span className="text-inverse">stripe-s</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-studiovinari"></i> <span className="text-inverse">studiovinari</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-stumbleupon"></i> <span className="text-inverse">stumbleupon</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-stumbleupon-circle"></i> <span className="text-inverse">stumbleupon-circle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-superpowers"></i> <span className="text-inverse">superpowers</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-supple"></i> <span className="text-inverse">supple</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-telegram"></i> <span className="text-inverse">telegram</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-telegram-plane"></i> <span className="text-inverse">telegram-plane</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-tencent-weibo"></i> <span className="text-inverse">tencent-weibo</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-themeisle"></i> <span className="text-inverse">themeisle</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-trello"></i> <span className="text-inverse">trello</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-tripadvisor"></i> <span className="text-inverse">tripadvisor</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-tumblr"></i> <span className="text-inverse">tumblr</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-tumblr-square"></i> <span className="text-inverse">tumblr-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-twitch"></i> <span className="text-inverse">twitch</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-twitter"></i> <span className="text-inverse">twitter</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-twitter-square"></i> <span className="text-inverse">twitter-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-typo3"></i> <span className="text-inverse">typo3</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-uber"></i> <span className="text-inverse">uber</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-uikit"></i> <span className="text-inverse">uikit</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-uniregistry"></i> <span className="text-inverse">uniregistry</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-untappd"></i> <span className="text-inverse">untappd</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-usb"></i> <span className="text-inverse">usb</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-ussunnah"></i> <span className="text-inverse">ussunnah</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-vaadin"></i> <span className="text-inverse">vaadin</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-viacoin"></i> <span className="text-inverse">viacoin</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-viadeo"></i> <span className="text-inverse">viadeo</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-viadeo-square"></i> <span className="text-inverse">viadeo-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-viber"></i> <span className="text-inverse">viber</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-vimeo"></i> <span className="text-inverse">vimeo</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-vimeo-square"></i> <span className="text-inverse">vimeo-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-vimeo-v"></i> <span className="text-inverse">vimeo-v</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-vine"></i> <span className="text-inverse">vine</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-vk"></i> <span className="text-inverse">vk</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-vnv"></i> <span className="text-inverse">vnv</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-vuejs"></i> <span className="text-inverse">vuejs</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-weibo"></i> <span className="text-inverse">weibo</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-weixin"></i> <span className="text-inverse">weixin</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-whatsapp"></i> <span className="text-inverse">whatsapp</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-whatsapp-square"></i> <span className="text-inverse">whatsapp-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-whmcs"></i> <span className="text-inverse">whmcs</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-wikipedia-w"></i> <span className="text-inverse">wikipedia-w</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-windows"></i> <span className="text-inverse">windows</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-wordpress"></i> <span className="text-inverse">wordpress</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-wordpress-simple"></i> <span className="text-inverse">wordpress-simple</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-wpbeginner"></i> <span className="text-inverse">wpbeginner</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-wpexplorer"></i> <span className="text-inverse">wpexplorer</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-wpforms"></i> <span className="text-inverse">wpforms</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-xbox"></i> <span className="text-inverse">xbox</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-xing"></i> <span className="text-inverse">xing</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-xing-square"></i> <span className="text-inverse">xing-square</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-y-combinator"></i> <span className="text-inverse">y-combinator</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-yahoo"></i> <span className="text-inverse">yahoo</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-yandex"></i> <span className="text-inverse">yandex</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-yandex-international"></i> <span className="text-inverse">yandex-international</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-yelp"></i> <span className="text-inverse">yelp</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-yoast"></i> <span className="text-inverse">yoast</span></div>
							<div className="col-md-6 col-sm-6 col-xs-6 m-b-10 text-ellipsis"><i className="fab fa-lg fa-fw m-r-10 fa-youtube"></i> <span className="text-inverse">youtube</span></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default UIIcons;