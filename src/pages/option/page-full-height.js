import React from 'react';
import { PageSettings } from './../../config/page-settings.js';
import PerfectScrollbar from 'react-perfect-scrollbar';

class PageFullHeight extends React.Component {
	static contextType = PageSettings;

	componentDidMount() {
		this.context.handleSetPageContentFullHeight(true);
		this.context.handleSetPageContentFullWidth(true);
	}

	componentWillUnmount() {
		this.context.handleSetPageContentFullHeight(false);
		this.context.handleSetPageContentFullWidth(false);
	}
	
	render() {
		return (
			<div className="vertical-box">
				<div className="vertical-box-column width-250">
					<div className="vertical-box">
						<div className="wrapper bg-blue-darker text-white">
							Left Column Top Box
						</div>
						<div className="vertical-box-row bg-blue text-white">
							<div className="vertical-box-cell">
								<div className="vertical-box-inner-cell">
									<PerfectScrollbar className="wrapper height-full" options={{suppressScrollX: true}}>
										Content Area with scrollbar. Try to scroll down.
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										You got the bottom
									</PerfectScrollbar>
								</div>
							</div>
						</div>
						<div className="wrapper bg-blue-darker text-white">
							Left Column Bottom Box
						</div>
					</div>
				</div>
				<div className="vertical-box-column">
					<div className="vertical-box">
						<div className="vertical-box-row">
							<div className="vertical-box-cell">
								<div className="vertical-box-inner-cell">
									<PerfectScrollbar className="wrapper height-full" options={{suppressScrollX: true}}>
										Content Area with scrollbar. Try to scroll down.
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										You got the bottom
									</PerfectScrollbar>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="vertical-box-column width-250">
					<div className="vertical-box">
						<div className="wrapper bg-green-darker text-white">
							Right Column Top Box
						</div>
						<div className="vertical-box-row bg-green text-white">
							<div className="vertical-box-cell">
								<div className="vertical-box-inner-cell">
									<PerfectScrollbar className="wrapper height-full" options={{suppressScrollX: true}}>
										Content Area with scrollbar. Try to scroll down.
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										<p>&nbsp;</p>
										You got the bottom
									</PerfectScrollbar>
								</div>
							</div>
						</div>
						<div className="wrapper bg-green-darker text-white">
							Right Column Bottom Box
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PageFullHeight;