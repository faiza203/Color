import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';

class RegisterV3 extends React.Component {
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
			<div className="register register-with-news-feed">
				<div className="news-feed">
					<div className="news-image" style={{ backgroundImage: 'url(/assets/img/login-bg/login-bg-9.jpg)' }}></div>
					<div className="news-caption">
						<h4 className="caption-title"><b>Color</b> Admin App</h4>
						<p>
							As a Color Admin app administrator, you use the Color Admin console to manage your organization’s account, such as add new users, manage security settings, and turn on the services you want your team to access.
						</p>
					</div>
				</div>
				<div className="right-content">
					<h1 className="register-header">
						Sign Up
						<small>Create your Color Admin Account. It’s free and always will be.</small>
					</h1>
					<div className="register-content">
						<form className="margin-bottom-0" onSubmit={this.handleSubmit}>
							<label className="control-label">Name <span className="text-danger">*</span></label>
							<div className="row row-space-10">
								<div className="col-md-6 m-b-15">
									<input type="text" className="form-control" placeholder="First name" required />
								</div>
								<div className="col-md-6 m-b-15">
									<input type="text" className="form-control" placeholder="Last name" required />
								</div>
							</div>
							<label className="control-label">Email <span className="text-danger">*</span></label>
							<div className="row m-b-15">
								<div className="col-md-12">
									<input type="text" className="form-control" placeholder="Email address" required />
								</div>
							</div>
							<label className="control-label">Re-enter Email <span className="text-danger">*</span></label>
							<div className="row m-b-15">
								<div className="col-md-12">
									<input type="text" className="form-control" placeholder="Re-enter email address" required />
								</div>
							</div>
							<label className="control-label">Password <span className="text-danger">*</span></label>
							<div className="row m-b-15">
								<div className="col-md-12">
									<input type="password" className="form-control" placeholder="Password" required />
								</div>
							</div>
							<div className="checkbox checkbox-css m-b-30">
								<div className="checkbox checkbox-css m-b-30">
									<input type="checkbox" id="agreement_checkbox" value="" />
									<label htmlFor="agreement_checkbox">
										By clicking Sign Up, you agree to our <Link to="/user/register-v3">Terms</Link> and that you have read our <Link to="/user/register-v3">Data Policy</Link>, including our <Link to="/user/register-v3">Cookie Use</Link>.
									</label>
								</div>
							</div>
							<div className="register-buttons">
								<button type="submit" className="btn btn-primary btn-block btn-lg">Sign Up</button>
							</div>
							<div className="m-t-20 m-b-40 p-b-40 text-inverse">
								Already a member? Click <Link to="/user/login-v3">here</Link> to login.
							</div>
							<hr />
							<p className="text-center">
								&copy; Color Admin All Right Reserved 2020
							</p>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(RegisterV3);