import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';

class LoginV3 extends React.Component {
	static contextType = PageSettings;

	constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
	componentDidMount() {
		this.context.handleSetPageSidebar(false);
		this.context.handleSetPageHeader(false);
		this.context.handleSetBodyWhiteBg(true);
	}

	componentWillUnmount() {
		this.context.handleSetPageSidebar(true);
		this.context.handleSetPageHeader(true);
		this.context.handleSetBodyWhiteBg(false);
	}
	
	handleSubmit(event) {
		event.preventDefault();
    this.props.history.push('/dashboard/v3');
  }
  
	render() {
		return (
			<div className="login login-with-news-feed">
				<div className="news-feed">
					<div className="news-image" style={{backgroundImage: 'url(/assets/img/login-bg/login-bg-11.jpg)'}}></div>
					<div className="news-caption">
						<h4 className="caption-title"><b>Color</b> Admin App</h4>
						<p>
							Download the Color Admin app for iPhone®, iPad®, and Android™. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
				<div className="right-content">
					<div className="login-header">
						<div className="brand">
							<span className="logo"></span> <b>Color</b> Admin
							<small>responsive bootstrap 4 admin template</small>
						</div>
						<div className="icon">
							<i className="fa fa-sign-in"></i>
						</div>
					</div>
					<div className="login-content">
						<form className="margin-bottom-0" onSubmit={this.handleSubmit}>
							<div className="form-group m-b-15">
								<input type="text" className="form-control form-control-lg" placeholder="Email Address" required />
							</div>
							<div className="form-group m-b-15">
								<input type="password" className="form-control form-control-lg" placeholder="Password" required />
							</div>
							<div className="checkbox checkbox-css m-b-30">
								<input type="checkbox" id="remember_me_checkbox" value="" />
								<label htmlFor="remember_me_checkbox">
									Remember Me
								</label>
							</div>
							<div className="login-buttons">
								<button type="submit" className="btn btn-success btn-block btn-lg">Sign me in</button>
							</div>
							<div className="m-t-20 m-b-40 p-b-40 text-inverse">
								Not a member yet? Click <Link to="/user/register-v3" className="text-success">here</Link> to register.
							</div>
							<hr />
							<p className="text-center text-grey-darker">
								&copy; Color Admin All Right Reserved 2020
							</p>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(LoginV3);