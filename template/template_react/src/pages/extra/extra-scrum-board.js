import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader } from './../../components/panel/panel.jsx';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ExtraScrumBoard extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = {
			modalAddTask: false,
			check1: true,
			check2: true,
			check3: false,
			check4: true,
			check5: false,
			check6: false,
			check7: true,
			check8: true,
			check9: true
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	
	toggleModal(name) {
		switch (name) {
			case 'modalAddTask':	
				this.setState({ modalAddTask: !this.state.modalAddTask });
				break;
			default:
				break;
		}
	}
	
	handleInputChange(event) {
		const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
	
	render() {
		return (
			<div style={{minHeight: '100vh', backgroundImage: 'url(../assets/img/cover/cover-scrum-board.png)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: '360px', backgroundPosition: 'right bottom'}}>
				<div className="d-flex align-items-center mb-md-3 mb-2">
					<h1 className="page-header mb-0">
						Scrum Board 
					</h1>
			
					<div className="ml-auto">
						<button onClick={() => this.toggleModal('modalAddTask')} className="btn btn-success btn-sm btn-rounded pl-2 pr-3"><i className="fa fa-plus mr-1"></i> Add Task</button>
					</div>
				</div>
		
				<div className="mb-md-4 mb-3 d-md-flex">
					<UncontrolledButtonDropdown>
						<DropdownToggle color="link" className="text-inverse p-0"><i className="far fa-folder fa-fw fa-lg text-muted mr-1"></i> project/color-admin <b className="caret text-muted"></b></DropdownToggle>
						<DropdownMenu>
							<DropdownItem><i className="far fa-folder fa-fw fa-lg text-muted mr-1"></i> project/mobile-app-dev</DropdownItem>
							<DropdownItem><i className="far fa-folder fa-fw fa-lg text-muted mr-1"></i> project/bootstrap-5</DropdownItem>
							<DropdownItem><i className="far fa-folder fa-fw fa-lg text-muted mr-1"></i> project/mvc-version</DropdownItem>
							<DropdownItem><i className="far fa-folder fa-fw fa-lg text-muted mr-1"></i> project/ruby-version</DropdownItem>
						</DropdownMenu>
					</UncontrolledButtonDropdown>
					<div className="ml-md-4 mt-md-0 mt-2"><i className="fa fa-code-branch fa-fw fa-lg mr-1 text-muted"></i> 1,392 pull request</div>
					<div className="ml-md-4 mt-md-0 mt-2"><i className="fa fa-users-cog fa-fw fa-lg mr-1 text-muted"></i> 52 participant</div>
					<div className="ml-md-4 mt-md-0 mt-2"><i className="far fa-clock fa-fw fa-lg mr-1 text-muted"></i> 14 day(s)</div>
				</div>
		
				<div className="row">
					<div className="col-xl-4 col-lg-6">
						<Panel>
							<PanelHeader>To do (5)</PanelHeader>
							<div className="list-group panel-body p-0">
								<div className="list-group-item  d-flex border-top-0">
									<div className="mr-3 f-s-16">
										<i className="far fa-question-circle text-muted fa-fw"></i> 
									</div>
									<div className="flex-fill">
										<div className="f-s-13 f-w-600 text-inverse">Enable open search</div>
										<div className="mb-1 f-s-12">
											<div className="text-inverse-lighter flex-1">#29949 opened yesterday by Terry</div>
										</div>
										<div className="mb-1">
											<span className="label label-primary mr-1">docs</span>
											<span className="label label-success mr-1">feature</span>
										</div>
										<hr className="m-b-10" />
										<div className="d-flex align-items-center m-b-5">
											<div className="f-s-12 mr-2 text-inverse f-w-600">
												Task (2/3)
											</div>
											<div className="progress progress-xs width-100 mb-0 mr-2">
												<div className="progress-bar progress-bar-striped" style={{width: '66%'}}></div>
											</div>
											<div className="f-s-10">66%</div>
										</div>
										<div className="form-group mb-1">
											<div className="collapse show" id="todoBoard">
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck1" name="check1" checked={this.state.check1} onChange={this.handleInputChange} />
													<label className="custom-control-label" htmlFor="customCheck1">create ui for autocomplete</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck2" name="check2" checked={this.state.check2} onChange={this.handleInputChange} />
													<label className="custom-control-label" htmlFor="customCheck2">integrate jquery autocomplete with ui</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck3" name="check3" checked={this.state.check3} onChange={this.handleInputChange} />
													<label className="custom-control-label" htmlFor="customCheck3">backend search return as json data</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<Link to="/page-option/with-search-sidebar" className="list-group-item list-group-item-action d-flex">
									<div className="mr-3 f-s-16">
										<i className="far fa-question-circle text-muted fa-fw"></i> 
									</div>
									<div className="flex-fill">
										<div className="f-s-13 f-w-600 text-inverse">Investigate adding markdownlint</div>
										<div className="mb-1 f-s-12">
											<div className="text-inverse-lighter flex-1">#29919 opened 9 days ago by xMediaKron</div>
										</div>
										<div className="mb-1">
											<span className="label label-default mr-1">build</span>
											<span className="label label-indigo">v5</span>
										</div>
									</div>
								</Link>
								<Link to="/page-option/with-search-sidebar" className="list-group-item list-group-item-action d-flex">
									<div className="mr-3 f-s-16">
										<i className="far fa-question-circle text-muted fa-fw"></i> 
									</div>
									<div className="flex-fill">
										<div className="f-s-13 f-w-600 text-inverse">Add a "Submit a Resource" form</div>
										<div className="mb-1 f-s-12">
											<div className="text-inverse-lighter flex-1">#29916 opened 9 days ago by Wasbbok</div>
										</div>
										<div className="mb-1 d-flex align-items-center">
											<div className="mr-2"><span className="label label-success">enhancement</span></div>
											<div className="d-flex">
												<div className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2" style={{backgroundImage: 'url(../assets/img/user/user-1.jpg)'}}>
												</div>
												<div className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2" style={{backgroundImage: 'url(../assets/img/user/user-2.jpg)'}}>
												</div>
												<div className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2" style={{backgroundImage: 'url(../assets/img/user/user-3.jpg)'}}>
												</div>
												<div className="widget-icon widget-icon-xs rounded-circle bg-muted text-white f-s-10">
													+2
												</div>
											</div>
										</div>
									</div>
								</Link>
								<Link to="/page-option/with-search-sidebar" className="list-group-item list-group-item-action d-flex">
									<div className="mr-3 f-s-16">
										<i className="far fa-question-circle text-muted fa-fw"></i> 
									</div>
									<div className="flex-fill">
										<div className="f-s-13 f-w-600 text-inverse">Custom control border color missing on focus</div>
										<div className="mb-1 f-s-12">
											<div className="text-inverse-lighter flex-1">#29796 opened 29 days ago by mdo</div>
										</div>
										<div className="mb-1">
											<span className="label label-pink">docs</span>
										</div>
									</div>
								</Link>
								<Link to="/page-option/with-search-sidebar" className="list-group-item list-group-item-action d-flex">
									<div className="mr-3 f-s-16">
										<i className="far fa-question-circle text-muted fa-fw"></i> 
									</div>
									<div className="flex-fill">
										<div className="f-s-13 f-w-600 text-inverse">New design for corporate page</div>
										<div className="mb-1 f-s-12">
											<div className="text-inverse-lighter flex-1">#29919 opened 19 days ago by sean</div>
										</div>
										<div className="mb-1">
											<span className="label label-default mr-1">design</span>
											<span className="label label-primary">v5</span>
										</div>
									</div>
								</Link>
							</div>
						</Panel>
					</div>
					<div className="col-xl-4 col-lg-6">
						
						<Panel>
							<PanelHeader>In Progress (2)</PanelHeader>
							<div className="list-group panel-body p-0">
								<div className="list-group-item  d-flex border-top-0">
									<div className="mr-3 f-s-16">
										<i className="fa fa-tools text-muted fa-fw"></i> 
									</div>
									<div className="flex-fill">
										<div className="f-s-13 f-w-600 text-inverse">HTML5 flexbox old browser compatibility</div>
										<div className="mb-1 f-s-12">
											<div className="text-inverse-lighter flex-1">#29982 handled by Sean</div>
										</div>
										<div className="mb-1">
											<span className="label label-indigo">enhancement</span>
										</div>
										<hr className="m-b-10" />
										<div className="d-flex align-items-center m-b-5">
											<div className="f-s-12 d-flex align-items-center text-inverse f-w-600">
												Task (1/2)
											</div>
											<div className="progress progress-xs width-100 mb-0 ml-2 mr-2">
												<div className="progress-bar progress-bar-striped bg-warning" style={{width: '50%'}}></div>
											</div>
											<div className="f-s-10">50%</div>
										</div>
										<div className="form-group mb-1">
											<div className="collapse show" id="inProgressBoard">
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck4" name="check4" checked={this.state.check4} onChange={this.handleInputChange} />
													<label className="custom-control-label" htmlFor="customCheck4">check all browser compatibility for HTML5 flexbox</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck5" name="check5" checked={this.state.check5} onChange={this.handleInputChange} />
													<label className="custom-control-label" htmlFor="customCheck5">fallback integration by using other display property</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="list-group-item list-group-item-action d-flex">
									<div className="mr-3 f-s-16">
										<i className="fa fa-bug text-danger fa-fw"></i> 
									</div>
									<div className="flex-fill">
										<div className="f-s-13 f-w-600 text-inverse">Mobile app autoclose on iOS</div>
										<div className="mb-1 f-s-12">
											<div className="text-inverse-lighter flex-1">#29953 handled by Ken</div>
										</div>
										<div className="mb-1">
											<span className="label label-default mr-1">issue</span>
											<span className="label label-danger">bug</span>
										</div>
										<hr className="m-b-10" />
										<div className="d-flex align-items-center m-b-5">
											<div className="f-s-12 d-flex align-items-center text-inverse f-w-600">
												Task (0/1)
											</div>
											<div className="progress progress-xs width-100 mb-0 ml-2 mr-2">
												<div className="progress-bar progress-bar-striped bg-danger" style={{width: '5%'}}></div>
											</div>
											<div className="f-s-10">0%</div>
										</div>
										<div className="form-group mb-1">
											<div className="collapse show" id="inProgress2Board">
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck6" name="check6" checked={this.state.check6} onChange={this.handleInputChange} />
													<label className="custom-control-label" htmlFor="customCheck6">debug and fix mobile auto close while using GPS issue</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Panel>
					</div>
					<div className="col-xl-4 col-lg-6">
						<Panel>
							<PanelHeader>Done (1)</PanelHeader>
							<div className="list-group panel-body p-0">
								<div href="#" className="list-group-item  d-flex border-top-0">
									<div className="mr-3 f-s-16">
										<i className="far fa-check-circle text-success fa-fw"></i> 
									</div>
									<div className="flex-fill">
										<div className="f-s-13 f-w-600 text-inverse">React version missing daterangepicker</div>
										<div className="mb-1 f-s-12">
											<div className="text-inverse-lighter flex-1">#29930 closed yesterday by Sean</div>
										</div>
										<div className="mb-1">
											<span className="label label-default mr-1">build</span>
											<span className="label label-success">feature</span>
										</div>
										<hr className="m-b-10" />
										<div className="d-flex align-items-center m-b-5">
											<div className="f-s-12 text-inverse f-w-600">
												Task (3/3)
											</div>
											<div className="progress progress-xs width-100 mb-0 ml-2 mr-2">
												<div className="progress-bar progress-bar-striped bg-success" style={{width: '100%'}}></div>
											</div>
											<div className="f-s-10">100%</div>
										</div>
										<div className="form-group mb-1">
											<div className="collapse show" id="completedBoard">
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck7" name="check7" checked={this.state.check7} onChange={this.handleInputChange} />
													<label className="custom-control-label" htmlFor="customCheck7">install react-daterangepicker</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck8" name="check8" checked={this.state.check8} onChange={this.handleInputChange} />
													<label className="custom-control-label" htmlFor="customCheck8">customize ui with scss</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck9" name="check9" checked={this.state.check9} onChange={this.handleInputChange} />
													<label className="custom-control-label" htmlFor="customCheck9">backend integration for data filter with daterange input</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Panel>
					</div>
				</div>
			
				<Modal isOpen={this.state.modalAddTask} toggle={() => this.toggleModal('modalAddTask')}>
					<ModalHeader toggle={() => this.toggleModal('modalAddTask')}>Add Task</ModalHeader>
					<ModalBody>
						<div className="form-group">
							<label>Title</label>
							<input type="text" className="form-control" />
						</div>
						<div className="form-group">
							<label>Status</label>
							<select className="form-control">
								<option value="">To Do</option>
								<option value="">In Progress</option>
								<option value="">Done</option>
							</select>
						</div>
						<div className="form-group">
							<label>Description</label>
							<textarea className="form-control" rows="10"></textarea>
						</div>
					</ModalBody>
					<ModalFooter>
						<button className="btn btn-white" onClick={() => this.toggleModal('modalAddTask')}>Cancel</button>
						<button className="btn btn-primary">Create</button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

export default ExtraScrumBoard;