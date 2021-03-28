import React from 'react';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

class UIIonicons extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '1'
		};
	}

	toggle(tab) {
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
					<li className="breadcrumb-item active">Ionicons</li>
				</ol>
				<h1 className="page-header">Ionicons V4.0 <small>bundle with 696 icons (android & ios icons)</small></h1>
				
				<Nav tabs className="nav-tabs-inverse">
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '1' })}
							onClick={() => { this.toggle('1'); }}
						>
							<i className="ion-logo-android fa-lg text-green"></i> <span className="d-none d-lg-inline m-l-5">Material style (317)</span>&nbsp;
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '2' })}
							onClick={() => { this.toggle('2'); }}
						>
							<i className="ion-logo-apple fa-lg"></i> <span className="d-none d-lg-inline m-l-5">IOS style (317)</span>&nbsp;
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '3' })}
							onClick={() => { this.toggle('3'); }}
						>
							<i className="ion-logo-ionic fa-lg text-blue"></i> <span className="d-none d-lg-inline m-l-5">Logos (62)</span>&nbsp;
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<div className="row row-space-10" data-id="icon">
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-add-circle-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-add-circle-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-add-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-add-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-add fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-add</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-airplane fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-airplane</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-alarm fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-alarm</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-albums fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-albums</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-alert fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-alert</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-american-football fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-american-football</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-analytics fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-analytics</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-aperture fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-aperture</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-apps fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-apps</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-appstore fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-appstore</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-archive fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-archive</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-back fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-back</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-down fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-down</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-dropdown-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-dropdown-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-dropdown fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-dropdown</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-dropleft-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-dropleft-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-dropleft fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-dropleft</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-dropright-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-dropright-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-dropright fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-dropright</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-dropup-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-dropup-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-dropup fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-dropup</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-forward fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-forward</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-round-back fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-round-back</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-round-down fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-round-down</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-round-forward fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-round-forward</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-round-up fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-round-up</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-arrow-up fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-arrow-up</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-at fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-at</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-attach fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-attach</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-backspace fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-backspace</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-barcode fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-barcode</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-baseball fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-baseball</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-basket fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-basket</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-basketball fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-basketball</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-battery-charging fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-battery-charging</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-battery-dead fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-battery-dead</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-battery-full fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-battery-full</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-beaker fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-beaker</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-bed fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-bed</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-beer fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-beer</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-bicycle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-bicycle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-bluetooth fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-bluetooth</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-boat fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-boat</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-body fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-body</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-bonfire fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-bonfire</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-book fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-book</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-bookmark fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-bookmark</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-bookmarks fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-bookmarks</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-bowtie fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-bowtie</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-briefcase fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-briefcase</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-browsers fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-browsers</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-brush fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-brush</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-bug fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-bug</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-build fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-build</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-bulb fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-bulb</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-bus fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-bus</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-business fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-business</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-cafe fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-cafe</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-calculator fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-calculator</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-calendar fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-calendar</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-call fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-call</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-camera fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-camera</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-car fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-car</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-card fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-card</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-cart fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-cart</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-cash fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-cash</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-cellular fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-cellular</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-chatboxes fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-chatboxes</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-chatbubbles fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-chatbubbles</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-checkbox-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-checkbox-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-checkbox fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-checkbox</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-checkmark-circle-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-checkmark-circle-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-checkmark-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-checkmark-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-checkmark fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-checkmark</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-clipboard fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-clipboard</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-clock fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-clock</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-close-circle-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-close-circle-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-close-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-close-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-close fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-close</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-cloud-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-cloud-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-cloud-done fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-cloud-done</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-cloud-download fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-cloud-download</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-cloud-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-cloud-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-cloud-upload fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-cloud-upload</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-cloud fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-cloud</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-cloudy-night fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-cloudy-night</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-cloudy fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-cloudy</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-code-download fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-code-download</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-code-working fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-code-working</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-code fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-code</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-cog fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-cog</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-color-fill fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-color-fill</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-color-filter fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-color-filter</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-color-palette fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-color-palette</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-color-wand fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-color-wand</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-compass fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-compass</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-construct fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-construct</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-contact fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-contact</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-contacts fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-contacts</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-contract fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-contract</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-contrast fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-contrast</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-copy fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-copy</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-create fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-create</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-crop fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-crop</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-cube fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-cube</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-cut fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-cut</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-desktop fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-desktop</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-disc fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-disc</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-document fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-document</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-done-all fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-done-all</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-download fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-download</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-easel fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-easel</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-egg fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-egg</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-exit fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-exit</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-expand fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-expand</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-eye-off fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-eye-off</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-eye fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-eye</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-fastforward fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-fastforward</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-female fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-female</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-filing fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-filing</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-film fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-film</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-finger-print fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-finger-print</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-fitness fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-fitness</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-flag fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-flag</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-flame fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-flame</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-flash-off fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-flash-off</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-flash fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-flash</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-flashlight fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-flashlight</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-flask fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-flask</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-flower fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-flower</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-folder-open fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-folder-open</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-folder fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-folder</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-football fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-football</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-funnel fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-funnel</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-gift fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-gift</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-git-branch fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-git-branch</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-git-commit fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-git-commit</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-git-compare fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-git-compare</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-git-merge fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-git-merge</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-git-network fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-git-network</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-git-pull-request fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-git-pull-request</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-glasses fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-glasses</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-globe fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-globe</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-grid fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-grid</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-hammer fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-hammer</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-hand fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-hand</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-happy fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-happy</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-headset fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-headset</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-heart fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-heart</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-heart-dislike fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-heart-dislike</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-heart-empty fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-heart-empty</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-heart-half fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-heart-half</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-help-buoy fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-help-buoy</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-help-circle-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-help-circle-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-help-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-help-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-help fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-help</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-home fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-home</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-hourglass fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-hourglass</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-ice-cream fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-ice-cream</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-image fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-image</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-images fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-images</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-infinite fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-infinite</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-information-circle-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-information-circle-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-information-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-information-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-information fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-information</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-jet fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-jet</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-journal fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-journal</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-key fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-key</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-keypad fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-keypad</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-laptop fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-laptop</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-leaf fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-leaf</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-link fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-link</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-list-box fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-list-box</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-list fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-list</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-locate fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-locate</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-lock fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-lock</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-log-in fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-log-in</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-log-out fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-log-out</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-magnet fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-magnet</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-mail-open fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-mail-open</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-mail-unread fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-mail-unread</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-mail fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-mail</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-male fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-male</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-man fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-man</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-map fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-map</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-medal fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-medal</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-medical fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-medical</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-medkit fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-medkit</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-megaphone fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-megaphone</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-menu fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-menu</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-mic-off fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-mic-off</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-mic fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-mic</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-microphone fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-microphone</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-moon fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-moon</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-more fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-more</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-move fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-move</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-musical-note fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-musical-note</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-musical-notes fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-musical-notes</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-navigate fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-navigate</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-notifications-off fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-notifications-off</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-notifications-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-notifications-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-notifications fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-notifications</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-nuclear fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-nuclear</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-nutrition fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-nutrition</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-open fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-open</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-options fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-options</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-outlet fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-outlet</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-paper-plane fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-paper-plane</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-paper fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-paper</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-partly-sunny fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-partly-sunny</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-pause fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-pause</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-paw fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-paw</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-people fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-people</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-person-add fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-person-add</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-person fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-person</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-phone-landscape fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-phone-landscape</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-phone-portrait fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-phone-portrait</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-photos fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-photos</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-pie fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-pie</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-pin fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-pin</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-pint fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-pint</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-pizza fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-pizza</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-planet fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-planet</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-play-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-play-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-play fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-play</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-podium fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-podium</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-power fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-power</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-pricetag fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-pricetag</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-pricetags fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-pricetags</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-print fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-print</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-pulse fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-pulse</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-qr-scanner fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-qr-scanner</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-quote fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-quote</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-radio-button-off fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-radio-button-off</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-radio-button-on fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-radio-button-on</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-radio fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-radio</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-rainy fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-rainy</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-recording fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-recording</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-redo fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-redo</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-refresh-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-refresh-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-refresh fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-refresh</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-remove-circle-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-remove-circle-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-remove-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-remove-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-remove fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-remove</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-reorder fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-reorder</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-repeat fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-repeat</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-resize fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-resize</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-restaurant fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-restaurant</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-return-left fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-return-left</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-return-right fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-return-right</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-reverse-camera fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-reverse-camera</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-rewind fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-rewind</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-ribbon fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-ribbon</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-rocket fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-rocket</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-rose fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-rose</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-sad fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-sad</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-save fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-save</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-school fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-school</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-search fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-search</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-send fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-send</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-settings fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-settings</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-share-alt fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-share-alt</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-share fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-share</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-shirt fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-shirt</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-shuffle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-shuffle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-skip-backward fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-skip-backward</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-skip-forward fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-skip-forward</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-snow fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-snow</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-speedometer fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-speedometer</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-square-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-square-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-square fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-square</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-star-half fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-star-half</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-star-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-star-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-star fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-star</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-stats fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-stats</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-stopwatch fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-stopwatch</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-subway fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-subway</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-sunny fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-sunny</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-swap fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-swap</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-switch fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-switch</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-sync fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-sync</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-tablet-landscape fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-tablet-landscape</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-tablet-portrait fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-tablet-portrait</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-tennisball fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-tennisball</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-text fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-text</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-thermometer fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-thermometer</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-thumbs-down fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-thumbs-down</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-thumbs-up fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-thumbs-up</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-thunderstorm fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-thunderstorm</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-time fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-time</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-timer fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-timer</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-today fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-today</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-train fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-train</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-transgender fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-transgender</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-trash fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-trash</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-trending-down fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-trending-down</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-trending-up fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-trending-up</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-trophy fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-trophy</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-tv fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-tv</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-umbrella fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-umbrella</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-undo fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-undo</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-unlock fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-unlock</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-videocam fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-videocam</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-volume-high fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-volume-high</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-volume-low fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-volume-low</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-volume-mute fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-volume-mute</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-volume-off fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-volume-off</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-wallet fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-wallet</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-walk fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-walk</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-warning fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-warning</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-watch fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-watch</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-water fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-water</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-wifi fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-wifi</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-wine fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-wine</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-md-woman fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-md-woman</p></div>
						</div>
					</TabPane>
					<TabPane tabId="2">
						<div className="row row-space-10">
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-add-circle-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-add-circle-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-add-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-add-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-add fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-add</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-airplane fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-airplane</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-alarm fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-alarm</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-albums fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-albums</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-alert fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-alert</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-american-football fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-american-football</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-analytics fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-analytics</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-aperture fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-aperture</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-apps fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-apps</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-appstore fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-appstore</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-archive fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-archive</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-back fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-back</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-down fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-down</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-dropdown-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-dropdown-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-dropdown fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-dropdown</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-dropleft-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-dropleft-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-dropleft fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-dropleft</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-dropright-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-dropright-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-dropright fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-dropright</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-dropup-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-dropup-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-dropup fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-dropup</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-forward fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-forward</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-round-back fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-round-back</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-round-down fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-round-down</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-round-forward fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-round-forward</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-round-up fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-round-up</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-arrow-up fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-arrow-up</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-at fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-at</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-attach fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-attach</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-backspace fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-backspace</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-barcode fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-barcode</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-baseball fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-baseball</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-basket fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-basket</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-basketball fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-basketball</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-battery-charging fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-battery-charging</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-battery-dead fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-battery-dead</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-battery-full fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-battery-full</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-beaker fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-beaker</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-bed fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-bed</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-beer fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-beer</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-bicycle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-bicycle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-bluetooth fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-bluetooth</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-boat fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-boat</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-body fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-body</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-bonfire fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-bonfire</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-book fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-book</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-bookmark fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-bookmark</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-bookmarks fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-bookmarks</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-bowtie fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-bowtie</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-briefcase fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-briefcase</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-browsers fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-browsers</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-brush fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-brush</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-bug fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-bug</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-build fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-build</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-bulb fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-bulb</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-bus fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-bus</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-business fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-business</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-cafe fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-cafe</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-calculator fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-calculator</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-calendar fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-calendar</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-call fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-call</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-camera fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-camera</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-car fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-car</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-card fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-card</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-cart fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-cart</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-cash fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-cash</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-cellular fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-cellular</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-chatboxes fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-chatboxes</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-chatbubbles fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-chatbubbles</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-checkbox-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-checkbox-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-checkbox fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-checkbox</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-checkmark-circle-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-checkmark-circle-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-checkmark-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-checkmark-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-checkmark fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-checkmark</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-clipboard fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-clipboard</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-clock fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-clock</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-close-circle-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-close-circle-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-close-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-close-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-close fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-close</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-cloud-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-cloud-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-cloud-done fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-cloud-done</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-cloud-download fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-cloud-download</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-cloud-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-cloud-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-cloud-upload fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-cloud-upload</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-cloud fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-cloud</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-cloudy-night fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-cloudy-night</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-cloudy fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-cloudy</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-code-download fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-code-download</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-code-working fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-code-working</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-code fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-code</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-cog fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-cog</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-color-fill fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-color-fill</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-color-filter fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-color-filter</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-color-palette fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-color-palette</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-color-wand fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-color-wand</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-compass fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-compass</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-construct fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-construct</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-contact fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-contact</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-contacts fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-contacts</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-contract fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-contract</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-contrast fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-contrast</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-copy fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-copy</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-create fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-create</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-crop fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-crop</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-cube fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-cube</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-cut fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-cut</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-desktop fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-desktop</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-disc fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-disc</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-document fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-document</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-done-all fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-done-all</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-download fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-download</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-easel fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-easel</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-egg fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-egg</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-exit fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-exit</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-expand fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-expand</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-eye-off fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-eye-off</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-eye fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-eye</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-fastforward fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-fastforward</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-female fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-female</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-filing fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-filing</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-film fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-film</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-finger-print fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-finger-print</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-fitness fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-fitness</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-flag fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-flag</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-flame fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-flame</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-flash-off fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-flash-off</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-flash fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-flash</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-flashlight fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-flashlight</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-flask fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-flask</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-flower fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-flower</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-folder-open fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-folder-open</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-folder fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-folder</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-football fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-football</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-funnel fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-funnel</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-gift fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-gift</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-git-branch fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-git-branch</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-git-commit fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-git-commit</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-git-compare fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-git-compare</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-git-merge fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-git-merge</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-git-network fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-git-network</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-git-pull-request fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-git-pull-request</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-glasses fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-glasses</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-globe fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-globe</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-grid fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-grid</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-hammer fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-hammer</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-hand fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-hand</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-happy fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-happy</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-headset fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-headset</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-heart fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-heart</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-heart-dislike fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-heart-dislike</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-heart-empty fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-heart-empty</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-heart-half fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-heart-half</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-help-buoy fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-help-buoy</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-help-circle-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-help-circle-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-help-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-help-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-help fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-help</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-home fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-home</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-hourglass fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-hourglass</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-ice-cream fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-ice-cream</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-image fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-image</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-images fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-images</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-infinite fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-infinite</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-information-circle-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-information-circle-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-information-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-information-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-information fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-information</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-jet fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-jet</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-journal fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-journal</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-key fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-key</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-keypad fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-keypad</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-laptop fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-laptop</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-leaf fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-leaf</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-link fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-link</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-list-box fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-list-box</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-list fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-list</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-locate fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-locate</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-lock fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-lock</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-log-in fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-log-in</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-log-out fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-log-out</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-magnet fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-magnet</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-mail-open fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-mail-open</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-mail-unread fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-mail-unread</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-mail fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-mail</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-male fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-male</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-man fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-man</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-map fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-map</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-medal fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-medal</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-medical fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-medical</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-medkit fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-medkit</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-megaphone fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-megaphone</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-menu fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-menu</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-mic-off fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-mic-off</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-mic fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-mic</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-microphone fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-microphone</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-moon fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-moon</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-more fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-more</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-move fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-move</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-musical-note fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-musical-note</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-musical-notes fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-musical-notes</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-navigate fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-navigate</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-notifications-off fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-notifications-off</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-notifications-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-notifications-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-notifications fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-notifications</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-nuclear fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-nuclear</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-nutrition fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-nutrition</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-open fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-open</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-options fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-options</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-outlet fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-outlet</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-paper-plane fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-paper-plane</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-paper fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-paper</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-partly-sunny fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-partly-sunny</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-pause fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-pause</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-paw fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-paw</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-people fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-people</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-person-add fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-person-add</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-person fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-person</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-phone-landscape fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-phone-landscape</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-phone-portrait fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-phone-portrait</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-photos fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-photos</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-pie fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-pie</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-pin fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-pin</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-pint fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-pint</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-pizza fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-pizza</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-planet fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-planet</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-play-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-play-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-play fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-play</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-podium fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-podium</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-power fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-power</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-pricetag fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-pricetag</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-pricetags fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-pricetags</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-print fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-print</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-pulse fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-pulse</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-qr-scanner fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-qr-scanner</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-quote fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-quote</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-radio-button-off fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-radio-button-off</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-radio-button-on fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-radio-button-on</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-radio fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-radio</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-rainy fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-rainy</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-recording fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-recording</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-redo fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-redo</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-refresh-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-refresh-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-refresh fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-refresh</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-remove-circle-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-remove-circle-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-remove-circle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-remove-circle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-remove fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-remove</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-reorder fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-reorder</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-repeat fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-repeat</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-resize fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-resize</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-restaurant fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-restaurant</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-return-left fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-return-left</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-return-right fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-return-right</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-reverse-camera fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-reverse-camera</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-rewind fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-rewind</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-ribbon fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-ribbon</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-rocket fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-rocket</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-rose fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-rose</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-sad fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-sad</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-save fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-save</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-school fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-school</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-search fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-search</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-send fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-send</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-settings fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-settings</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-share-alt fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-share-alt</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-share fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-share</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-shirt fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-shirt</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-shuffle fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-shuffle</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-skip-backward fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-skip-backward</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-skip-forward fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-skip-forward</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-snow fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-snow</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-speedometer fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-speedometer</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-square-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-square-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-square fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-square</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-star-half fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-star-half</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-star-outline fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-star-outline</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-star fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-star</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-stats fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-stats</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-stopwatch fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-stopwatch</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-subway fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-subway</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-sunny fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-sunny</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-swap fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-swap</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-switch fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-switch</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-sync fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-sync</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-tablet-landscape fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-tablet-landscape</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-tablet-portrait fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-tablet-portrait</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-tennisball fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-tennisball</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-text fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-text</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-thermometer fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-thermometer</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-thumbs-down fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-thumbs-down</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-thumbs-up fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-thumbs-up</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-thunderstorm fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-thunderstorm</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-time fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-time</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-timer fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-timer</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-today fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-today</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-train fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-train</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-transgender fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-transgender</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-trash fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-trash</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-trending-down fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-trending-down</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-trending-up fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-trending-up</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-trophy fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-trophy</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-tv fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-tv</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-umbrella fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-umbrella</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-undo fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-undo</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-unlock fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-unlock</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-videocam fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-videocam</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-volume-high fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-volume-high</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-volume-low fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-volume-low</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-volume-mute fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-volume-mute</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-volume-off fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-volume-off</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-wallet fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-wallet</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-walk fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-walk</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-warning fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-warning</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-watch fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-watch</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-water fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-water</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-wifi fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-wifi</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-wine fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-wine</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-ios-woman fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-ios-woman</p></div>
						</div>
					</TabPane>
					<TabPane tabId="3">
						<div className="row row-space-10">
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-android fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-android</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-angular fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-angular</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-apple fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-apple</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-bitbucket fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-bitbucket</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-bitcoin fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-bitcoin</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-buffer fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-buffer</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-chrome fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-chrome</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-closed-captioning fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-closed-captioning</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-codepen fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-codepen</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-css3 fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-css3</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-designernews fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-designernews</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-dribbble fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-dribbble</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-dropbox fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-dropbox</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-euro fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-euro</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-facebook fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-facebook</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-flickr fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-flickr</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-foursquare fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-foursquare</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-freebsd-devil fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-freebsd-devil</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-game-controller-a fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-game-controller-a</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-game-controller-b fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-game-controller-b</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-github fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-github</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-google fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-google</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-googleplus fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-googleplus</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-hackernews fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-hackernews</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-html5 fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-html5</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-instagram fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-instagram</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-ionic fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-ionic</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-ionitron fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-ionitron</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-javascript fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-javascript</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-linkedin fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-linkedin</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-markdown fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-markdown</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-model-s fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-model-s</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-no-smoking fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-no-smoking</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-nodejs fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-nodejs</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-npm fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-npm</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-octocat fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-octocat</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-pinterest fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-pinterest</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-playstation fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-playstation</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-polymer fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-polymer</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-python fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-python</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-reddit fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-reddit</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-rss fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-rss</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-sass fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-sass</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-skype fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-skype</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-slack fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-slack</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-snapchat fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-snapchat</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-steam fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-steam</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-tumblr fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-tumblr</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-tux fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-tux</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-twitch fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-twitch</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-twitter fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-twitter</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-usd fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-usd</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-vimeo fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-vimeo</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-vk fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-vk</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-whatsapp fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-whatsapp</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-windows fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-windows</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-wordpress fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-wordpress</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-xbox fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-xbox</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-xing fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-xing</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-yahoo fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-yahoo</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-yen fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion-logo-yen</p></div>
							<div className="col-lg-2 col-sm-4 col-6 p-t-5 p-b-5"><i className="ion ion-logo-youtube fa-2x fa-fw pull-left m-r-10 text-black-lighter"></i><p className="text-ellipsis m-b-0 m-t-3">ion ion-logo-youtube</p></div>
						</div>
					</TabPane>
				</TabContent>
			</div>
		)
	}
}

export default UIIonicons;