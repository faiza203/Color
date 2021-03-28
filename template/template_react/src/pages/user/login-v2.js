import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';

class LoginV2 extends React.Component {
	static contextType = PageSettings;

	constructor(props) {
		super(props);

		this.state = {
			activeBg: '/assets/img/login-bg/login-bg-17.jpg',
			bg1: true,
			bg2: false,
			bg3: false,
			bg4: false,
			bg5: false,
			bg6: false
		}
		this.selectBg = this.selectBg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	selectBg(e, active, bg) {
		e.preventDefault();

		this.setState(state => ({
			activeBg: bg,
			bg1: (active === 'bg1') ? true : false,
			bg2: (active === 'bg2') ? true : false,
			bg3: (active === 'bg3') ? true : false,
			bg4: (active === 'bg4') ? true : false,
			bg5: (active === 'bg5') ? true : false,
			bg6: (active === 'bg6') ? true : false
		}));
	}

	componentDidMount() {
		this.context.handleSetPageSidebar(false);
		this.context.handleSetPageHeader(false);
	}

	componentWillUnmount() {
		this.context.handleSetPageSidebar(true);
		this.context.handleSetPageHeader(true);
	}
	
	handleSubmit(event) {
		event.preventDefault();
    this.props.history.push('/dashboard/v3');
  }
  
	render() {
		return (
			<React.Fragment>
				<div className="login-cover">
					<div className="login-cover-image" style={{ backgroundImage: 'url(' + this.state.activeBg + ')'}}></div>
					<div className="login-cover-bg"></div>
				</div>
		
				<div className="login login-v2">
					<div className="login-header">
						<div className="brand">
							<span className="logo"></span> <b>Color</b> Admin
							<small>responsive bootstrap 4 admin template</small>
						</div>
						<div className="icon">
							<i className="fa fa-lock"></i>
						</div>
					</div>
					<div className="login-content">
						<form className="margin-bottom-0" onSubmit={this.handleSubmit}>
							<div className="form-group m-b-20">
								<input type="text" className="form-control form-control-lg" placeholder="Email Address" required />
							</div>
							<div className="form-group m-b-20">
								<input type="password" className="form-control form-control-lg" placeholder="Password" required />
							</div>
							<div className="checkbox checkbox-css m-b-20">
								<input type="checkbox" id="remember_checkbox" /> 
								<label htmlFor="remember_checkbox">
									Remember Me
								</label>
							</div>
							<div className="login-buttons">
								<button type="submit" className="btn btn-success btn-block btn-lg">Sign me in</button>
							</div>
							<div className="m-t-20">
								Not a member yet? Click <Link to="/user/register-v3">here</Link> to register.
							</div>
						</form>
					</div>
				</div>
			
				<ul className="login-bg-list clearfix">
					<li className={(this.state.bg1 ? 'active ' : '')}><Link to="/user/login-v2" onClick={(e) => this.selectBg(e, 'bg1', '/assets/img/login-bg/login-bg-17.jpg')} style={{backgroundImage: 'url(/assets/img/login-bg/login-bg-17.jpg)'}}></Link></li>
					<li className={(this.state.bg2 ? 'active ' : '')}><Link to="/user/login-v2" onClick={(e) => this.selectBg(e, 'bg2', '/assets/img/login-bg/login-bg-16.jpg')} style={{backgroundImage: 'url(/assets/img/login-bg/login-bg-16.jpg)'}}></Link></li>
					<li className={(this.state.bg3 ? 'active ' : '')}><Link to="/user/login-v2" onClick={(e) => this.selectBg(e, 'bg3', '/assets/img/login-bg/login-bg-15.jpg')} style={{backgroundImage: 'url(/assets/img/login-bg/login-bg-15.jpg)'}}></Link></li>
					<li className={(this.state.bg4 ? 'active ' : '')}><Link to="/user/login-v2" onClick={(e) => this.selectBg(e, 'bg4', '/assets/img/login-bg/login-bg-14.jpg')} style={{backgroundImage: 'url(/assets/img/login-bg/login-bg-14.jpg)'}}></Link></li>
					<li className={(this.state.bg5 ? 'active ' : '')}><Link to="/user/login-v2" onClick={(e) => this.selectBg(e, 'bg5', '/assets/img/login-bg/login-bg-13.jpg')} style={{backgroundImage: 'url(/assets/img/login-bg/login-bg-13.jpg)'}}></Link></li>
					<li className={(this.state.bg6 ? 'active ' : '')}><Link to="/user/login-v2" onClick={(e) => this.selectBg(e, 'bg6', '/assets/img/login-bg/login-bg-12.jpg')} style={{backgroundImage: 'url(/assets/img/login-bg/login-bg-12.jpg)'}}></Link></li>
				</ul>
			</React.Fragment>
		)
	}
}

export default withRouter(LoginV2);