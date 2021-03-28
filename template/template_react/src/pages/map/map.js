import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';

class Map extends React.Component {
	static contextType = PageSettings;
	
	componentDidMount() {
		this.context.handleSetPageContentFullWidth(true);
		this.context.handleSetPageContentInverseMode(true);
	}

	componentWillUnmount() {
		this.context.handleSetPageContentFullWidth(false);
		this.context.handleSetPageContentInverseMode(false);
	}
  
	render() {
		return (
			<div>
				<ol className="breadcrumb pull-right">
					<li className="breadcrumb-item"><Link to="/map">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/map">Map</Link></li>
					<li className="breadcrumb-item active">Google Map</li>
				</ol>
				<h1 className="page-header">Google Map <small>header small text goes here...</small></h1>
				<div className="map">
					<GoogleMapReact defaultCenter={{lat: 25.304304, lng: -90.06591800000001}} defaultZoom={5}></GoogleMapReact>
				</div>
			</div>
		)
	}
}

export default Map;