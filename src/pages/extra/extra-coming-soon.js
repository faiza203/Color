import React from 'react';
import { Link } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';
import Countdown, { doubleDigit } from "react-downcount";

class ExtraComingSoon extends React.Component {
	static contextType = PageSettings;

	constructor(props) {
		super(props);
		this.endDate = Date.now() + 1000 * 60 * 60 * 240;
	}

	componentDidMount() {
		this.context.handleSetPageSidebar(false);
		this.context.handleSetPageHeader(false);
		this.context.handleSetBodyWhiteBg(true);
		this.context.handleSetPageContentClass('p-0');
	}

	componentWillUnmount() {
		this.context.handleSetPageSidebar(true);
		this.context.handleSetPageHeader(true);
		this.context.handleSetPageContentClass('');
		this.context.handleSetBodyWhiteBg(false);
	}
	
	render() {
		return (
			<div className="coming-soon">
				<div className="coming-soon-header">
					<div className="bg-cover"></div>
					<div className="brand">
						<span className="logo"></span> <b>Color</b> Admin
					</div>
					<div className="desc">
						Our website is almost there and it’s rebuilt from scratch! A lot of great new features <br />and improvements are coming.
					</div>
					<div className="timer">
						<div id="timer" className="is-countdown">
							<Countdown className="custom-counter" endDate={this.endDate}>
								{({ days, hrs, mins, secs, isCompleted }) => {
									return isCompleted	? 
									'Done'
										: 
									<React.Fragment>
										<span className="countdown-row countdown-show4">
											<span className="d-flex flex-grow-1">
												<span className="countdown-section">
													<span className="countdown-amount">{days > 0 && `${days}`}</span>
													<span className="countdown-period">Days</span>
												</span>
												<span className="countdown-section">
													<span className="countdown-amount">{hrs}</span>
													<span className="countdown-period">Hours</span>
												</span>
												<span className="countdown-section">
													<span className="countdown-amount">{doubleDigit(mins)}</span>
													<span className="countdown-period">Minutes</span>
												</span>
												<span className="countdown-section">
													<span className="countdown-amount">{doubleDigit(secs)}</span>
													<span className="countdown-period">Seconds</span>
												</span>
											</span>
										</span>
									</React.Fragment>
								}}
							</Countdown>
						</div>
					</div>
				</div>
				<div className="coming-soon-content">
					<div className="desc">
						We are launching a closed <b>beta</b> soon!<br /> Sign up to try it before others and be the first to know when we <b>launch</b>.
					</div>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Email Address" />
						<div className="input-group-append">
							<button type="button" className="btn btn-inverse">Notify Me</button>
						</div>
					</div>
					<p className="help-block m-b-25"><i>We don't spam. Your email address is secure with us.</i></p>
					<p>
						Follow us on 
						<Link to="/extra/coming-soon" className="text-inverse"><i className="fab fa-twitter fa-lg fa-fw text-info"></i> Twitter</Link> and 
						<Link to="/extra/coming-soon" className="text-inverse"><i className="fab fa-facebook fa-lg fa-fw text-primary"></i> Facebook</Link>
					</p>
				</div>
			</div>
		)
	}
}

export default ExtraComingSoon;