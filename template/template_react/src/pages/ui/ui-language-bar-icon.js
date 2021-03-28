import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import { PageSettings } from './../../config/page-settings.js';

class UILanguageBarIcon extends React.Component {
	static contextType = PageSettings;

	componentDidMount() {
		this.context.handleSetPageHeaderLanguageBar(true);
	}

	componentWillUnmount() {
		this.context.handleSetPageHeaderLanguageBar(false);
	}
  
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/ui">UI Elements</Link></li>
					<li className="breadcrumb-item active">UI Language Bar & Icon</li>
				</ol>
				<h1 className="page-header">UI Language Bar & Icon <small>header small text goes here...</small></h1>
				
				<Panel>
					<PanelHeader>
						Language Icon List
					</PanelHeader>
					<PanelBody>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ad width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ad" id="ad"></div> <b className="text-inverse">AD</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ae width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ae" id="ae"></div> <b className="text-inverse">AE</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-af width-full m-r-10 m-t-0 m-b-3 fa-3x" title="af" id="af"></div> <b className="text-inverse">AF</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ag width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ag" id="ag"></div> <b className="text-inverse">AG</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ai width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ai" id="ai"></div> <b className="text-inverse">AU</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-al width-full m-r-10 m-t-0 m-b-3 fa-3x" title="al" id="al"></div> <b className="text-inverse">AL</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-am width-full m-r-10 m-t-0 m-b-3 fa-3x" title="am" id="am"></div> <b className="text-inverse">AM</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ao width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ao" id="ao"></div> <b className="text-inverse">AO</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-aq width-full m-r-10 m-t-0 m-b-3 fa-3x" title="aq" id="aq"></div> <b className="text-inverse">AQ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ar width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ar" id="ar"></div> <b className="text-inverse">AR</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-as width-full m-r-10 m-t-0 m-b-3 fa-3x" title="as" id="as"></div> <b className="text-inverse">AS</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-at width-full m-r-10 m-t-0 m-b-3 fa-3x" title="at" id="at"></div> <b className="text-inverse">AT</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-au width-full m-r-10 m-t-0 m-b-3 fa-3x" title="au" id="au"></div> <b className="text-inverse">AU</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-aw width-full m-r-10 m-t-0 m-b-3 fa-3x" title="aw" id="aw"></div> <b className="text-inverse">AW</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ax width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ax" id="ax"></div> <b className="text-inverse">AX</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-az width-full m-r-10 m-t-0 m-b-3 fa-3x" title="az" id="az"></div> <b className="text-inverse">AZ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ba width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ba" id="ba"></div> <b className="text-inverse">BA</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bb width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bb" id="bb"></div> <b className="text-inverse">BB</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bd width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bd" id="bd"></div> <b className="text-inverse">BD</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-be width-full m-r-10 m-t-0 m-b-3 fa-3x" title="be" id="be"></div> <b className="text-inverse">BE</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bf width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bf" id="bf"></div> <b className="text-inverse">BF</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bg width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bg" id="bg"></div> <b className="text-inverse">BG</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bh width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bh" id="bh"></div> <b className="text-inverse">BH</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bi width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bi" id="bi"></div> <b className="text-inverse">BI</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bj width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bj" id="bj"></div> <b className="text-inverse">BJ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bl width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bl" id="bl"></div> <b className="text-inverse">BL</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bm width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bm" id="bm"></div> <b className="text-inverse">BM</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bn width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bn" id="bn"></div> <b className="text-inverse">BN</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bo width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bo" id="bo"></div> <b className="text-inverse">BO</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bq width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bq" id="bq"></div> <b className="text-inverse">BQ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-br width-full m-r-10 m-t-0 m-b-3 fa-3x" title="br" id="br"></div> <b className="text-inverse">BR</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bs width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bs" id="bs"></div> <b className="text-inverse">BS</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bt width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bt" id="bt"></div> <b className="text-inverse">BT</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bv width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bv" id="bv"></div> <b className="text-inverse">BV</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bw width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bw" id="bw"></div> <b className="text-inverse">BW</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-by width-full m-r-10 m-t-0 m-b-3 fa-3x" title="by" id="by"></div> <b className="text-inverse">BY</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-bz width-full m-r-10 m-t-0 m-b-3 fa-3x" title="bz" id="bz"></div> <b className="text-inverse">BZ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ca width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ca" id="ca"></div> <b className="text-inverse">CA</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-cc width-full m-r-10 m-t-0 m-b-3 fa-3x" title="cc" id="cc"></div> <b className="text-inverse">CC</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-cd width-full m-r-10 m-t-0 m-b-3 fa-3x" title="cd" id="cd"></div> <b className="text-inverse">CD</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-cf width-full m-r-10 m-t-0 m-b-3 fa-3x" title="cf" id="cf"></div> <b className="text-inverse">CF</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-cg width-full m-r-10 m-t-0 m-b-3 fa-3x" title="cg" id="cg"></div> <b className="text-inverse">CG</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ch width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ch" id="ch"></div> <b className="text-inverse">CH</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ci width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ci" id="ci"></div> <b className="text-inverse">CI</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ck width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ck" id="ck"></div> <b className="text-inverse">CK</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-cl width-full m-r-10 m-t-0 m-b-3 fa-3x" title="cl" id="cl"></div> <b className="text-inverse">CL</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-cm width-full m-r-10 m-t-0 m-b-3 fa-3x" title="cm" id="cm"></div> <b className="text-inverse">CM</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-cn width-full m-r-10 m-t-0 m-b-3 fa-3x" title="cn" id="cn"></div> <b className="text-inverse">CN</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-co width-full m-r-10 m-t-0 m-b-3 fa-3x" title="co" id="co"></div> <b className="text-inverse">CO</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-cr width-full m-r-10 m-t-0 m-b-3 fa-3x" title="cr" id="cr"></div> <b className="text-inverse">CR</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-cu width-full m-r-10 m-t-0 m-b-3 fa-3x" title="cu" id="cu"></div> <b className="text-inverse">CU</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-cv width-full m-r-10 m-t-0 m-b-3 fa-3x" title="cv" id="cv"></div> <b className="text-inverse">CV</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-cw width-full m-r-10 m-t-0 m-b-3 fa-3x" title="cw" id="cw"></div> <b className="text-inverse">CW</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-cx width-full m-r-10 m-t-0 m-b-3 fa-3x" title="cx" id="cx"></div> <b className="text-inverse">CX</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-cy width-full m-r-10 m-t-0 m-b-3 fa-3x" title="cy" id="cy"></div> <b className="text-inverse">CY</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-cz width-full m-r-10 m-t-0 m-b-3 fa-3x" title="cz" id="cz"></div> <b className="text-inverse">CZ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-de width-full m-r-10 m-t-0 m-b-3 fa-3x" title="de" id="de"></div> <b className="text-inverse">DE</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-dj width-full m-r-10 m-t-0 m-b-3 fa-3x" title="dj" id="dj"></div> <b className="text-inverse">DJ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-dk width-full m-r-10 m-t-0 m-b-3 fa-3x" title="dk" id="dk"></div> <b className="text-inverse">DK</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-dm width-full m-r-10 m-t-0 m-b-3 fa-3x" title="dm" id="dm"></div> <b className="text-inverse">DM</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-do width-full m-r-10 m-t-0 m-b-3 fa-3x" title="do" id="do"></div> <b className="text-inverse">DO</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-dz width-full m-r-10 m-t-0 m-b-3 fa-3x" title="dz" id="dz"></div> <b className="text-inverse">DZ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ec width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ec" id="ec"></div> <b className="text-inverse">EC</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ee width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ee" id="ee"></div> <b className="text-inverse">EE</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-eg width-full m-r-10 m-t-0 m-b-3 fa-3x" title="eg" id="eg"></div> <b className="text-inverse">EG</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-eh width-full m-r-10 m-t-0 m-b-3 fa-3x" title="eh" id="eh"></div> <b className="text-inverse">EH</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-er width-full m-r-10 m-t-0 m-b-3 fa-3x" title="er" id="er"></div> <b className="text-inverse">ER</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-es width-full m-r-10 m-t-0 m-b-3 fa-3x" title="es" id="es"></div> <b className="text-inverse">ES</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-et width-full m-r-10 m-t-0 m-b-3 fa-3x" title="et" id="et"></div> <b className="text-inverse">ET</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-fi width-full m-r-10 m-t-0 m-b-3 fa-3x" title="fi" id="fi"></div> <b className="text-inverse">FI</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-fj width-full m-r-10 m-t-0 m-b-3 fa-3x" title="fj" id="fj"></div> <b className="text-inverse">FJ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-fk width-full m-r-10 m-t-0 m-b-3 fa-3x" title="fk" id="fk"></div> <b className="text-inverse">FK</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-fm width-full m-r-10 m-t-0 m-b-3 fa-3x" title="fm" id="fm"></div> <b className="text-inverse">FM</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-fo width-full m-r-10 m-t-0 m-b-3 fa-3x" title="fo" id="fo"></div> <b className="text-inverse">FO</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-fr width-full m-r-10 m-t-0 m-b-3 fa-3x" title="fr" id="fr"></div> <b className="text-inverse">FR</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ga width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ga" id="ga"></div> <b className="text-inverse">GA</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gb width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gb" id="gb"></div> <b className="text-inverse">GB</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gd width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gd" id="gd"></div> <b className="text-inverse">GD</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ge width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ge" id="ge"></div> <b className="text-inverse">GE</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gf width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gf" id="gf"></div> <b className="text-inverse">GF</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gg width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gg" id="gg"></div> <b className="text-inverse">GG</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gh width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gh" id="gh"></div> <b className="text-inverse">GH</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gi width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gi" id="gi"></div> <b className="text-inverse">GI</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gl width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gl" id="gl"></div> <b className="text-inverse">GL</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gm width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gm" id="gm"></div> <b className="text-inverse">GM</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gn width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gn" id="gn"></div> <b className="text-inverse">GN</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gp width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gp" id="gp"></div> <b className="text-inverse">GP</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gq width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gq" id="gq"></div> <b className="text-inverse">GQ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gr width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gr" id="gr"></div> <b className="text-inverse">GR</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gs width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gs" id="gs"></div> <b className="text-inverse">GS</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gt width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gt" id="gt"></div> <b className="text-inverse">GT</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gu width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gu" id="gu"></div> <b className="text-inverse">GU</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gw width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gw" id="gw"></div> <b className="text-inverse">GW</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-gy width-full m-r-10 m-t-0 m-b-3 fa-3x" title="gy" id="gy"></div> <b className="text-inverse">GY</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-hk width-full m-r-10 m-t-0 m-b-3 fa-3x" title="hk" id="hk"></div> <b className="text-inverse">HK</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-hm width-full m-r-10 m-t-0 m-b-3 fa-3x" title="hm" id="hm"></div> <b className="text-inverse">HM</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-hn width-full m-r-10 m-t-0 m-b-3 fa-3x" title="hn" id="hn"></div> <b className="text-inverse">HN</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-hr width-full m-r-10 m-t-0 m-b-3 fa-3x" title="hr" id="hr"></div> <b className="text-inverse">HR</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ht width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ht" id="ht"></div> <b className="text-inverse">HT</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-hu width-full m-r-10 m-t-0 m-b-3 fa-3x" title="hu" id="hu"></div> <b className="text-inverse">HU</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-id width-full m-r-10 m-t-0 m-b-3 fa-3x" title="id" id="id"></div> <b className="text-inverse">ID</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ie width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ie" id="ie"></div> <b className="text-inverse">IE</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-il width-full m-r-10 m-t-0 m-b-3 fa-3x" title="il" id="il"></div> <b className="text-inverse">IL</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-im width-full m-r-10 m-t-0 m-b-3 fa-3x" title="im" id="im"></div> <b className="text-inverse">IM</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-in width-full m-r-10 m-t-0 m-b-3 fa-3x" title="in" id="in"></div> <b className="text-inverse">IN</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-io width-full m-r-10 m-t-0 m-b-3 fa-3x" title="io" id="io"></div> <b className="text-inverse">IO</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-iq width-full m-r-10 m-t-0 m-b-3 fa-3x" title="iq" id="iq"></div> <b className="text-inverse">IQ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ir width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ir" id="ir"></div> <b className="text-inverse">IR</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-is width-full m-r-10 m-t-0 m-b-3 fa-3x" title="is" id="is"></div> <b className="text-inverse">IS</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-it width-full m-r-10 m-t-0 m-b-3 fa-3x" title="it" id="it"></div> <b className="text-inverse">IT</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-je width-full m-r-10 m-t-0 m-b-3 fa-3x" title="je" id="je"></div> <b className="text-inverse">JE</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-jm width-full m-r-10 m-t-0 m-b-3 fa-3x" title="jm" id="jm"></div> <b className="text-inverse">JM</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-jo width-full m-r-10 m-t-0 m-b-3 fa-3x" title="jo" id="jo"></div> <b className="text-inverse">JO</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-jp width-full m-r-10 m-t-0 m-b-3 fa-3x" title="jp" id="jp"></div> <b className="text-inverse">JP</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ke width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ke" id="ke"></div> <b className="text-inverse">KE</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-kg width-full m-r-10 m-t-0 m-b-3 fa-3x" title="kg" id="kg"></div> <b className="text-inverse">KG</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-kh width-full m-r-10 m-t-0 m-b-3 fa-3x" title="kh" id="kh"></div> <b className="text-inverse">KH</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ki width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ki" id="ki"></div> <b className="text-inverse">KI</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-km width-full m-r-10 m-t-0 m-b-3 fa-3x" title="km" id="km"></div> <b className="text-inverse">KM</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-kn width-full m-r-10 m-t-0 m-b-3 fa-3x" title="kn" id="kn"></div> <b className="text-inverse">KN</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-kp width-full m-r-10 m-t-0 m-b-3 fa-3x" title="kp" id="kp"></div> <b className="text-inverse">KP</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-kr width-full m-r-10 m-t-0 m-b-3 fa-3x" title="kr" id="kr"></div> <b className="text-inverse">KR</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-kw width-full m-r-10 m-t-0 m-b-3 fa-3x" title="kw" id="kw"></div> <b className="text-inverse">KW</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ky width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ky" id="ky"></div> <b className="text-inverse">KY</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-kz width-full m-r-10 m-t-0 m-b-3 fa-3x" title="kz" id="kz"></div> <b className="text-inverse">KZ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-la width-full m-r-10 m-t-0 m-b-3 fa-3x" title="la" id="la"></div> <b className="text-inverse">LA</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-lb width-full m-r-10 m-t-0 m-b-3 fa-3x" title="lb" id="lb"></div> <b className="text-inverse">LB</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-lc width-full m-r-10 m-t-0 m-b-3 fa-3x" title="lc" id="lc"></div> <b className="text-inverse">LC</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-li width-full m-r-10 m-t-0 m-b-3 fa-3x" title="li" id="li"></div> <b className="text-inverse">LI</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-lk width-full m-r-10 m-t-0 m-b-3 fa-3x" title="lk" id="lk"></div> <b className="text-inverse">LK</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-lr width-full m-r-10 m-t-0 m-b-3 fa-3x" title="lr" id="lr"></div> <b className="text-inverse">LR</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ls width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ls" id="ls"></div> <b className="text-inverse">LS</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-lt width-full m-r-10 m-t-0 m-b-3 fa-3x" title="lt" id="lt"></div> <b className="text-inverse">LT</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-lu width-full m-r-10 m-t-0 m-b-3 fa-3x" title="lu" id="lu"></div> <b className="text-inverse">LU</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-lv width-full m-r-10 m-t-0 m-b-3 fa-3x" title="lv" id="lv"></div> <b className="text-inverse">LV</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ly width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ly" id="ly"></div> <b className="text-inverse">LY</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ma width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ma" id="ma"></div> <b className="text-inverse">MA</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mc width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mc" id="mc"></div> <b className="text-inverse">MC</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-md width-full m-r-10 m-t-0 m-b-3 fa-3x" title="md" id="md"></div> <b className="text-inverse">MD</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-me width-full m-r-10 m-t-0 m-b-3 fa-3x" title="me" id="me"></div> <b className="text-inverse">ME</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mf width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mf" id="mf"></div> <b className="text-inverse">MF</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mg width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mg" id="mg"></div> <b className="text-inverse">MG</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mh width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mh" id="mh"></div> <b className="text-inverse">MH</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mk width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mk" id="mk"></div> <b className="text-inverse">MK</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ml width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ml" id="ml"></div> <b className="text-inverse">ML</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mm width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mm" id="mm"></div> <b className="text-inverse">MM</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mn width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mn" id="mn"></div> <b className="text-inverse">MN</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mo width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mo" id="mo"></div> <b className="text-inverse">MO</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mp width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mp" id="mp"></div> <b className="text-inverse">MP</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mq width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mq" id="mq"></div> <b className="text-inverse">MQ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mr width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mr" id="mr"></div> <b className="text-inverse">MR</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ms width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ms" id="ms"></div> <b className="text-inverse">MS</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mt width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mt" id="mt"></div> <b className="text-inverse">MT</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mu width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mu" id="mu"></div> <b className="text-inverse">MU</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mv width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mv" id="mv"></div> <b className="text-inverse">MV</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mw width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mw" id="mw"></div> <b className="text-inverse">MW</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mx width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mx" id="mx"></div> <b className="text-inverse">MX</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-my width-full m-r-10 m-t-0 m-b-3 fa-3x" title="my" id="my"></div> <b className="text-inverse">MY</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-mz width-full m-r-10 m-t-0 m-b-3 fa-3x" title="mz" id="mz"></div> <b className="text-inverse">MZ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-na width-full m-r-10 m-t-0 m-b-3 fa-3x" title="na" id="na"></div> <b className="text-inverse">NA</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-nc width-full m-r-10 m-t-0 m-b-3 fa-3x" title="nc" id="nc"></div> <b className="text-inverse">NC</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ne width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ne" id="ne"></div> <b className="text-inverse">NE</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-nf width-full m-r-10 m-t-0 m-b-3 fa-3x" title="nf" id="nf"></div> <b className="text-inverse">NF</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ng width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ng" id="ng"></div> <b className="text-inverse">NG</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ni width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ni" id="ni"></div> <b className="text-inverse">NI</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-nl width-full m-r-10 m-t-0 m-b-3 fa-3x" title="nl" id="nl"></div> <b className="text-inverse">NL</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-no width-full m-r-10 m-t-0 m-b-3 fa-3x" title="no" id="no"></div> <b className="text-inverse">NO</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-np width-full m-r-10 m-t-0 m-b-3 fa-3x" title="np" id="np"></div> <b className="text-inverse">NP</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-nr width-full m-r-10 m-t-0 m-b-3 fa-3x" title="nr" id="nr"></div> <b className="text-inverse">NR</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-nu width-full m-r-10 m-t-0 m-b-3 fa-3x" title="nu" id="nu"></div> <b className="text-inverse">NU</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-nz width-full m-r-10 m-t-0 m-b-3 fa-3x" title="nz" id="nz"></div> <b className="text-inverse">NZ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-om width-full m-r-10 m-t-0 m-b-3 fa-3x" title="om" id="om"></div> <b className="text-inverse">OM</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-pa width-full m-r-10 m-t-0 m-b-3 fa-3x" title="pa" id="pa"></div> <b className="text-inverse">PA</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-pe width-full m-r-10 m-t-0 m-b-3 fa-3x" title="pe" id="pe"></div> <b className="text-inverse">PE</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-pf width-full m-r-10 m-t-0 m-b-3 fa-3x" title="pf" id="pf"></div> <b className="text-inverse">PF</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-pg width-full m-r-10 m-t-0 m-b-3 fa-3x" title="pg" id="pg"></div> <b className="text-inverse">PG</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ph width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ph" id="ph"></div> <b className="text-inverse">PH</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-pk width-full m-r-10 m-t-0 m-b-3 fa-3x" title="pk" id="pk"></div> <b className="text-inverse">PK</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-pl width-full m-r-10 m-t-0 m-b-3 fa-3x" title="pl" id="pl"></div> <b className="text-inverse">PL</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-pm width-full m-r-10 m-t-0 m-b-3 fa-3x" title="pm" id="pm"></div> <b className="text-inverse">PM</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-pn width-full m-r-10 m-t-0 m-b-3 fa-3x" title="pn" id="pn"></div> <b className="text-inverse">PN</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-pr width-full m-r-10 m-t-0 m-b-3 fa-3x" title="pr" id="pr"></div> <b className="text-inverse">PR</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ps width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ps" id="ps"></div> <b className="text-inverse">PS</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-pt width-full m-r-10 m-t-0 m-b-3 fa-3x" title="pt" id="pt"></div> <b className="text-inverse">PT</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-pw width-full m-r-10 m-t-0 m-b-3 fa-3x" title="pw" id="pw"></div> <b className="text-inverse">PW</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-py width-full m-r-10 m-t-0 m-b-3 fa-3x" title="py" id="py"></div> <b className="text-inverse">PY</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-qa width-full m-r-10 m-t-0 m-b-3 fa-3x" title="qa" id="qa"></div> <b className="text-inverse">QA</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-re width-full m-r-10 m-t-0 m-b-3 fa-3x" title="re" id="re"></div> <b className="text-inverse">RE</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ro width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ro" id="ro"></div> <b className="text-inverse">RO</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-rs width-full m-r-10 m-t-0 m-b-3 fa-3x" title="rs" id="rs"></div> <b className="text-inverse">RS</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ru width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ru" id="ru"></div> <b className="text-inverse">RU</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-rw width-full m-r-10 m-t-0 m-b-3 fa-3x" title="rw" id="rw"></div> <b className="text-inverse">RW</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sa width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sa" id="sa"></div> <b className="text-inverse">SA</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sb width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sb" id="sb"></div> <b className="text-inverse">SB</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sc width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sc" id="sc"></div> <b className="text-inverse">SC</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sd width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sd" id="sd"></div> <b className="text-inverse">SD</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-se width-full m-r-10 m-t-0 m-b-3 fa-3x" title="se" id="se"></div> <b className="text-inverse">SE</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sg width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sg" id="sg"></div> <b className="text-inverse">SG</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sh width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sh" id="sh"></div> <b className="text-inverse">SH</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-si width-full m-r-10 m-t-0 m-b-3 fa-3x" title="si" id="si"></div> <b className="text-inverse">SI</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sj width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sj" id="sj"></div> <b className="text-inverse">SJ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sk width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sk" id="sk"></div> <b className="text-inverse">SK</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sl width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sl" id="sl"></div> <b className="text-inverse">SL</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sm width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sm" id="sm"></div> <b className="text-inverse">SM</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sn width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sn" id="sn"></div> <b className="text-inverse">SN</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-so width-full m-r-10 m-t-0 m-b-3 fa-3x" title="so" id="so"></div> <b className="text-inverse">SO</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sr width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sr" id="sr"></div> <b className="text-inverse">SR</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ss width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ss" id="ss"></div> <b className="text-inverse">SS</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-st width-full m-r-10 m-t-0 m-b-3 fa-3x" title="st" id="st"></div> <b className="text-inverse">ST</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sv width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sv" id="sv"></div> <b className="text-inverse">SV</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sx width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sx" id="sx"></div> <b className="text-inverse">SX</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sy width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sy" id="sy"></div> <b className="text-inverse">SY</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-sz width-full m-r-10 m-t-0 m-b-3 fa-3x" title="sz" id="sz"></div> <b className="text-inverse">SZ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-tc width-full m-r-10 m-t-0 m-b-3 fa-3x" title="tc" id="tc"></div> <b className="text-inverse">TC</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-td width-full m-r-10 m-t-0 m-b-3 fa-3x" title="td" id="td"></div> <b className="text-inverse">TD</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-tf width-full m-r-10 m-t-0 m-b-3 fa-3x" title="tf" id="tf"></div> <b className="text-inverse">TF</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-tg width-full m-r-10 m-t-0 m-b-3 fa-3x" title="tg" id="tg"></div> <b className="text-inverse">TG</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-th width-full m-r-10 m-t-0 m-b-3 fa-3x" title="th" id="th"></div> <b className="text-inverse">TH</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-tj width-full m-r-10 m-t-0 m-b-3 fa-3x" title="tj" id="tj"></div> <b className="text-inverse">TJ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-tk width-full m-r-10 m-t-0 m-b-3 fa-3x" title="tk" id="tk"></div> <b className="text-inverse">TK</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-tl width-full m-r-10 m-t-0 m-b-3 fa-3x" title="tl" id="tl"></div> <b className="text-inverse">TL</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-tm width-full m-r-10 m-t-0 m-b-3 fa-3x" title="tm" id="tm"></div> <b className="text-inverse">TM</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-tn width-full m-r-10 m-t-0 m-b-3 fa-3x" title="tn" id="tn"></div> <b className="text-inverse">TN</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-to width-full m-r-10 m-t-0 m-b-3 fa-3x" title="to" id="to"></div> <b className="text-inverse">TO</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-tr width-full m-r-10 m-t-0 m-b-3 fa-3x" title="tr" id="tr"></div> <b className="text-inverse">TR</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-tt width-full m-r-10 m-t-0 m-b-3 fa-3x" title="tt" id="tt"></div> <b className="text-inverse">TT</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-tv width-full m-r-10 m-t-0 m-b-3 fa-3x" title="tv" id="tv"></div> <b className="text-inverse">TV</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-tw width-full m-r-10 m-t-0 m-b-3 fa-3x" title="tw" id="tw"></div> <b className="text-inverse">TW</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-tz width-full m-r-10 m-t-0 m-b-3 fa-3x" title="tz" id="tz"></div> <b className="text-inverse">TZ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ua width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ua" id="ua"></div> <b className="text-inverse">UA</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ug width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ug" id="ug"></div> <b className="text-inverse">UG</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-um width-full m-r-10 m-t-0 m-b-3 fa-3x" title="um" id="um"></div> <b className="text-inverse">UM</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-us width-full m-r-10 m-t-0 m-b-3 fa-3x" title="us" id="us"></div> <b className="text-inverse">US</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-uy width-full m-r-10 m-t-0 m-b-3 fa-3x" title="uy" id="uy"></div> <b className="text-inverse">UY</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-uz width-full m-r-10 m-t-0 m-b-3 fa-3x" title="uz" id="uz"></div> <b className="text-inverse">UZ</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-va width-full m-r-10 m-t-0 m-b-3 fa-3x" title="va" id="va"></div> <b className="text-inverse">VA</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-vc width-full m-r-10 m-t-0 m-b-3 fa-3x" title="vc" id="vc"></div> <b className="text-inverse">VC</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ve width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ve" id="ve"></div> <b className="text-inverse">VE</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-vg width-full m-r-10 m-t-0 m-b-3 fa-3x" title="vg" id="vg"></div> <b className="text-inverse">VG</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-vi width-full m-r-10 m-t-0 m-b-3 fa-3x" title="vi" id="vi"></div> <b className="text-inverse">VI</b></div>
						</div>
						<div className="row">
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-vn width-full m-r-10 m-t-0 m-b-3 fa-3x" title="vn" id="vn"></div> <b className="text-inverse">VN</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-vu width-full m-r-10 m-t-0 m-b-3 fa-3x" title="vu" id="vu"></div> <b className="text-inverse">VU</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-wf width-full m-r-10 m-t-0 m-b-3 fa-3x" title="wf" id="wf"></div> <b className="text-inverse">WF</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ws width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ws" id="ws"></div> <b className="text-inverse">WS</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-ye width-full m-r-10 m-t-0 m-b-3 fa-3x" title="ye" id="ye"></div> <b className="text-inverse">YE</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-yt width-full m-r-10 m-t-0 m-b-3 fa-3x" title="yt" id="yt"></div> <b className="text-inverse">YT</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-za width-full m-r-10 m-t-0 m-b-3 fa-3x" title="za" id="za"></div> <b className="text-inverse">ZA</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-zm width-full m-r-10 m-t-0 m-b-3 fa-3x" title="zm" id="zm"></div> <b className="text-inverse">ZM</b></div>
							<div className="col-md-1 col-sm-2 col-3 m-b-10 text-center"><div className="flag-icon flag-icon-zw width-full m-r-10 m-t-0 m-b-3 fa-3x" title="zw" id="zw"></div> <b className="text-inverse">ZW</b></div>
						</div>
					</PanelBody>
				</Panel>
			</div>
		)
	}
}

export default UILanguageBarIcon;