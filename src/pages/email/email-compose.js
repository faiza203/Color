import React from 'react';
import ReactTags from 'react-tag-autocomplete';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

class EmailCompose extends React.Component {
	static contextType = PageSettings;
	
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.toggleMobileEmailNav = this.toggleMobileEmailNav.bind(this);
		this.state = {
			dropdownOpen: false,
			cc: false,
			bcc: false,
			isMobileEmailNavOn: false,
			tags: [
				{ id: 1, name: 'bootstrap@gmail.com' },
				{ id: 2, name: 'google@gmail.com' }
			],
			tagsCc: [],
			tagsBcc: [],
			suggestions: [
				{ id: 3, name: 'programmer@gmail.com' },
				{ id: 4, name: 'uxui@gmail.com' },
				{ id: 5, name: 'designer@gmail.com' },
				{ id: 6, name: 'android@gmail.com' }
			],
			text: '',
			editor: {
				height: (window.innerHeight > 600) ? window.innerHeight - 315 : 300
			}
		};
	}

	componentDidMount() {
		this.context.handleSetPageContentFullHeight(true);
		this.context.handleSetPageContentFullWidth(true);
	}

	componentWillUnmount() {
		this.context.handleSetPageContentFullHeight(false);
		this.context.handleSetPageContentFullWidth(false);
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
  
	handleTagDelete (i) {
		const tags = this.state.tags.slice(0)
		tags.splice(i, 1)
		this.setState({ tags })
	}

	handleTagAddition (tag) {
		const tags = [].concat(this.state.tags, tag)
		this.setState({ tags })
	}

	handleTagCcDelete (i) {
		const tagsCc = this.state.tagsCc.slice(0)
		tagsCc.splice(i, 1)
		this.setState({ tagsCc })
	}

	handleTagCcAddition (tag) {
		const tagsCc = [].concat(this.state.tagsCc, tag)
		this.setState({ tagsCc })
	}

	handleTagBccDelete (i) {
		const tagsBcc = this.state.tagsBcc.slice(0)
		tagsBcc.splice(i, 1)
		this.setState({ tagsBcc })
	}

	handleTagBccAddition (tag) {
		const tagsBcc = [].concat(this.state.tagsBcc, tag)
		this.setState({ tagsBcc })
	}

	handleCc(e) {
		e.preventDefault();
		this.setState(state => ({
			cc: true
		}));
	}

	handleBcc(e) {
		e.preventDefault();
		this.setState(state => ({
			bcc: true
		}));
	}

	handleChange(value) {
		this.setState({ text: value })
	}
	
	toggleMobileEmailNav() {
		this.setState(state => ({
      isMobileEmailNavOn: !state.isMobileEmailNavOn
    }));
	}
  
	render() {
		return (
			<div className="vertical-box with-grid inbox bg-light">
				<div className="vertical-box-column width-200 hidden-xs">
					<div className="vertical-box">
						<div className="wrapper text-center">
							<div className="d-flex align-items-center justify-content-center">
								<button onClick={this.toggleMobileEmailNav} className="btn btn-inverse btn-sm mr-auto d-block d-lg-none">
									<i className="fa fa-cog"></i>
								</button>
								<Link to="/email/compose" className="btn btn-inverse p-l-40 p-r-40 btn-sm">
									Compose
								</Link>
							</div>
						</div>
						<div className={"vertical-box-row collapse d-lg-table-row " + (this.state.isMobileEmailNavOn ? 'show' : '') }>
							<div className="vertical-box-cell">
								<div className="vertical-box-inner-cell">
									<PerfectScrollbar className="height-full" options={{suppressScrollX: true}}>
										<div className="wrapper p-0">
											<div className="nav-title"><b>FOLDERS</b></div>
											<ul className="nav nav-inbox">
												<li><Link to="/email/inbox"><i className="fa fa-inbox fa-fw m-r-5"></i> Inbox <span className="badge pull-right">52</span></Link></li>
												<li><Link to="/email/inbox"><i className="fa fa-flag fa-fw m-r-5"></i> Important</Link></li>
												<li><Link to="/email/inbox"><i className="fa fa-envelope fa-fw m-r-5"></i> Sent</Link></li>
												<li><Link to="/email/inbox"><i className="fa fa-pencil-alt fa-fw m-r-5"></i> Drafts</Link></li>
												<li><Link to="/email/inbox"><i className="fa fa-trash fa-fw m-r-5"></i> Trash</Link></li>
											</ul>
											<div className="nav-title"><b>LABEL</b></div>
											<ul className="nav nav-inbox">
												<li><Link to="/email/compose"><i className="fa fa-fw f-s-10 m-r-5 fa-circle text-inverse"></i> Admin</Link></li>
												<li><Link to="/email/compose"><i className="fa fa-fw f-s-10 m-r-5 fa-circle text-primary"></i> Designer & Employer</Link></li>
												<li><Link to="/email/compose"><i className="fa fa-fw f-s-10 m-r-5 fa-circle text-success"></i> Staff</Link></li>
												<li><Link to="/email/compose"><i className="fa fa-fw f-s-10 m-r-5 fa-circle text-warning"></i> Sponsorer</Link></li>
												<li><Link to="/email/compose"><i className="fa fa-fw f-s-10 m-r-5 fa-circle text-danger"></i> Client</Link></li>
											</ul>
										</div>
									</PerfectScrollbar>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="vertical-box-column">
					<div className="vertical-box">
						<div className="wrapper">
							<span className="btn-group m-r-5">
								<Link to="/email/compose" className="btn btn-white btn-sm"><i className="fa fa-envelope m-r-3 m-r-xs-0"></i> <span className="hidden-xs">Send</span></Link>
								<Link to="/email/compose" className="btn btn-white btn-sm"><i className="fa fa-paperclip m-r-3 m-r-xs-0"></i> <span className="hidden-xs">Attach</span></Link>
							</span>
							<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
								<DropdownToggle color="white btn-sm">
									<i className="fa fa-ellipsis-h"></i>
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem>Save draft</DropdownItem>
									<DropdownItem>Show From</DropdownItem>
									<DropdownItem>Check names</DropdownItem>
									<DropdownItem>Switch to plain text</DropdownItem>
									<DropdownItem>Check for accessibility issues</DropdownItem>
								</DropdownMenu>
							</ButtonDropdown>
							<span className="pull-right">
								<Link to="/email/compose" className="btn btn-white btn-sm"><i className="fa fa-times m-r-3 m-r-xs-0"></i> <span className="hidden-xs">Discard</span></Link>
							</span>
						</div>
						<div className="vertical-box-row bg-white">
							<div className="vertical-box-cell">
								<div className="vertical-box-inner-cell">
									<PerfectScrollbar className="height-full p-15" options={{suppressScrollX: true}}>
										<form action="/" method="POST" name="email_to_form">
											<div className="email-to">
												<span className="float-right-link">
													{!this.state.cc && <Link to="/email/compose" onClick={this.handleCc.bind(this)} className="m-r-5">Cc</Link>}
													{!this.state.bcc && <Link to="/email/compose" onClick={this.handleBcc.bind(this)}>Bcc</Link>}
												</span>
												<label className="control-label">To:</label>
												<div className="email-to-input">
													<ReactTags classNames={this.state.tagClass} placeholder="" tags={this.state.tags} suggestions={this.state.suggestions} handleDelete={this.handleTagDelete.bind(this)} handleAddition={this.handleTagAddition.bind(this)} />
												</div>
											</div>
											{this.state.cc &&
												<div className="email-to">
													<label className="control-label">Cc:</label>
													<div className="email-to-input">
														<ReactTags classNames={this.state.tagClass} placeholder="" tags={this.state.tagsCc} suggestions={this.state.suggestions} handleDelete={this.handleTagCcDelete.bind(this)} handleAddition={this.handleTagCcAddition.bind(this)} />
													</div>
												</div>
											}
											{this.state.bcc &&
												<div className="email-to">
													<label className="control-label">Bcc:</label>
													<div className="email-to-input">
														<ReactTags classNames={this.state.tagClass} placeholder="" tags={this.state.tagsBcc} suggestions={this.state.suggestions} handleDelete={this.handleTagBccDelete.bind(this)} handleAddition={this.handleTagBccAddition.bind(this)} />
													</div>
												</div>
											}
											<div className="email-subject">
												<input type="text" className="form-control form-control-lg" placeholder="Subject" />
											</div>
											<div className="email-content p-t-15">
												<ReactQuill value={this.state.text} onChange={this.handleChange} style={{ height: this.state.editor.height + 'px', marginBottom: '20px' }} />
											</div>
										</form>
									</PerfectScrollbar>
								</div>
							</div>
						</div>
						<div className="wrapper text-right">
							<button type="submit" className="btn btn-white p-l-40 p-r-40 m-r-5">Discard</button>
							<button type="submit" className="btn btn-primary p-l-40 p-r-40">Send</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default EmailCompose;