import React from 'react';
import { Link } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';

class SidebarProfile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			profileActive: 0
		};
		this.handleProfileExpand = this.handleProfileExpand.bind(this);
	}

	handleProfileExpand(e) {
		e.preventDefault();
		this.setState(state => ({
			profileActive: !this.state.profileActive,
		}));
	}
  
	render() {
		return (
			<PageSettings.Consumer>
				{({pageSidebarMinify}) => (
					<ul className="nav">
						<li className={"nav-profile " + (this.state.profileActive ? "expand " : "")}>
							<Link to="/" onClick={this.handleProfileExpand}>
								<div className="cover with-shadow"></div>
								<div className="image">
									<img src="/assets/img/user/user-13.jpg" alt="" />
								</div>
								<div className="info">
									<b className="caret pull-right"></b>
									Sean Ngu
									<small>Front end developer</small>
								</div>
							</Link>
						</li>
						<li>
							<ul className={"nav nav-profile " + (this.state.profileActive && !pageSidebarMinify ? "d-block " : "")}>
								<li><Link to="/"><i className="fa fa-cog"></i> Settings</Link></li>
								<li><Link to="/"><i className="fa fa-pencil-alt"></i> Send Feedback</Link></li>
								<li><Link to="/"><i className="fa fa-question-circle"></i> Helps</Link></li>
							</ul>
						</li>
					</ul>
				)}
			</PageSettings.Consumer>
		)
	}
}

export default SidebarProfile;