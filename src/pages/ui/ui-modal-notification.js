import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import SweetAlert from 'react-bootstrap-sweetalert';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

class UIModalNotification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalDialog: false,
			modalWithoutAnimation: false,
			modalMessage: false,
			modalAlert: false,
			sweetAlertPrimary: false,
			sweetAlertInfo: false,
			sweetAlertWarning: false,
			sweetAlertSuccess: false,
			sweetAlertError: false
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.toggleSweetAlert = this.toggleSweetAlert.bind(this);
		this.addNotification = this.addNotification.bind(this);
		this.notificationDOMRef = React.createRef();
	}
  
	addNotification(notificationType, notificationTitle, notificationMessage, notificationPosition, notificationContent) {
		if (notificationContent) {
			notificationContent = (
				<div className="widget-list widget-list-rounded inverse-mode w-100">
					<div className="widget-list-item">
						<div className="widget-list-media">
							<img src="../assets/img/user/user-12.jpg" alt="" className="rounded" />
						</div>
						<div className="widget-list-content">
							<h4 className="widget-list-title">Christopher Struth</h4>
							<p className="widget-list-desc">Bank Transfer</p>
						</div>
					</div>
				</div>
			);
		}
		store.addNotification({
			title: notificationTitle,
			message: notificationMessage,
			type: notificationType,
			insert: "top",
			container: notificationPosition,
			animationIn: ["animated", "fadeIn"],
			animationOut: ["animated", "fadeOut"],
			dismiss: { duration: 2000 },
			dismissable: { click: true },
			content: notificationContent
		});
	}
  
	toggleModal(name) {
		switch (name) {
			case 'modalDialog':	
				this.setState({ modalDialog: !this.state.modalDialog });
				break;
			case 'modalWithoutAnimation':	
				this.setState({ modalWithoutAnimation: !this.state.modalWithoutAnimation });
				break;
			case 'modalMessage':	
				this.setState({ modalMessage: !this.state.modalMessage });
				break;
			case 'modalAlert':	
				this.setState({ modalAlert: !this.state.modalAlert });
				break;
			default:
				break;
		}
	}
  
	toggleSweetAlert(name) {
		switch(name) {
			case 'primary':
				this.setState({ sweetAlertPrimary: !this.state.sweetAlertPrimary });
				break;
			case 'info':
				this.setState({ sweetAlertInfo: !this.state.sweetAlertInfo });
				break;
			case 'success':
				this.setState({ sweetAlertSuccess: !this.state.sweetAlertSuccess });
				break;
			case 'warning':
				this.setState({ sweetAlertWarning: !this.state.sweetAlertWarning });
				break;
			case 'error':
				this.setState({ sweetAlertError: !this.state.sweetAlertError });
				break;
			default:
				break;
		}
	}
  
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/ui">UI Elements</Link></li>
					<li className="breadcrumb-item active">Modal & Notification</li>
				</ol>
				<h1 className="page-header">Modal & Notification <small>header small text goes here...</small></h1>
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								React Notifications Component <span className="label label-success">NEW</span>
							</PanelHeader>
							<ReactNotification />
							<table className="table">
								<thead>
									<tr>
										<th>Description</th>
										<th>Demo</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><b className="text-inverse">Bottom Left</b> Success Notification</td>
										<td><button onClick={() => this.addNotification('success', 'Success', 'All your data has been successfully updated', 'bottom-left')} className="btn btn-sm btn-inverse">Demo</button></td>
									</tr>
									<tr>
										<td><b className="text-inverse">Bottom Right</b> Default Notification</td>
										<td><button onClick={() => this.addNotification('default', 'Default', 'A new issue has been reported by Office Desk', 'bottom-right')} className="btn btn-sm btn-primary">Demo</button></td>
									</tr>
									<tr>
										<td><b className="text-inverse">Bottom Center</b> Info Notification</td>
										<td><button onClick={() => this.addNotification('info', 'Info', 'You have an appointment at 4PM today', 'bottom-center')} className="btn btn-sm btn-info">Demo</button></td>
									</tr>
									<tr>
										<td><b className="text-inverse">Top Left</b> Success Notification</td>
										<td><button onClick={() => this.addNotification('warning', 'Success', 'All your data has been successfully updated', 'top-left')} className="btn btn-sm btn-warning">Demo</button></td>
									</tr>
									<tr>
										<td><b className="text-inverse">Top Right</b> Warning Notification</td>
										<td><button onClick={() => this.addNotification('danger', 'Danger', 'Document has been permanently removed', 'top-right')} className="btn btn-sm btn-danger">Demo</button></td>
									</tr>
									<tr>
										<td><b className="text-inverse">Top Center</b> Custom Notification</td>
										<td>
											<button onClick={() => this.addNotification('custom', 'Success', 'All your data has been successfully updated', 'top-center', true)} className="btn btn-sm btn-default">Demo</button></td>
									</tr>
								</tbody>
							</table>
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>Modal</PanelHeader>
							<table className="table">
								<thead>
									<tr>
										<th>Description</th>
										<th>Demo</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Default Modal Dialog Box.</td>
										<td><button onClick={() => this.toggleModal('modalDialog')} className="btn btn-sm btn-success">Demo</button></td>
									</tr>
									<tr>
										<td>Modal Dialog Box with fade out animation.</td>
										<td><button onClick={() => this.toggleModal('modalWithoutAnimation')} className="btn btn-sm btn-default">Demo</button></td>
									</tr>
									<tr>
										<td>Modal Dialog Box with full width white background.</td>
										<td><button onClick={() => this.toggleModal('modalMessage')} className="btn btn-sm btn-primary">Demo</button></td>
									</tr>
									<tr>
										<td>Modal Dialog Box with alert message.</td>
										<td><button onClick={() => this.toggleModal('modalAlert')} className="btn btn-sm btn-danger">Demo</button></td>
									</tr>
								</tbody>
							</table>
							<Modal isOpen={this.state.modalDialog} toggle={() => this.toggleModal('modalDialog')}>
								<ModalHeader toggle={() => this.toggleModal('modalDialog')}>Modal Dialog</ModalHeader>
          			<ModalBody>
          				<p>
										Modal body content here...
									</p>
								</ModalBody>
								<ModalFooter>
									<button className="btn btn-white" onClick={() => this.toggleModal('modalDialog')}>Close</button>
									<button className="btn btn-success">Action</button>
								</ModalFooter>
							</Modal>
							
							<Modal isOpen={this.state.modalWithoutAnimation} fade={false} toggle={() => this.toggleModal('modalWithoutAnimation')}>
								<ModalHeader toggle={() => this.toggleModal('modalWithoutAnimation')}>Modal Without Animation</ModalHeader>
          			<ModalBody>
          				<p>
										Modal body content here...
									</p>
								</ModalBody>
								<ModalFooter>
									<button className="btn btn-white" onClick={() => this.toggleModal('modalWithoutAnimation')}>Close</button>
								</ModalFooter>
							</Modal>
							
							<Modal isOpen={this.state.modalMessage} toggle={() => this.toggleModal('modalMessage')} modalClassName="modal-message">
								<ModalHeader toggle={() => this.toggleModal('modalMessage')}>Modal Message Header</ModalHeader>
          			<ModalBody>
									<p>Text in a modal</p>
									<p>Do you want to turn on location services so GPS can use your location ?</p>
								</ModalBody>
								<ModalFooter>
									<button className="btn btn-white" onClick={() => this.toggleModal('modalMessage')}>Close</button>
									<button className="btn btn-primary">Save Changes</button>
								</ModalFooter>
							</Modal>
							
							<Modal isOpen={this.state.modalAlert} toggle={() => this.toggleModal('modalAlert')}>
								<ModalHeader toggle={() => this.toggleModal('modalAlert')}>Alert Header</ModalHeader>
          			<ModalBody>
									<div className="alert alert-danger m-b-0">
										<h5><i className="fa fa-info-circle"></i> Alert Header</h5>
										<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
									</div>
								</ModalBody>
								<ModalFooter>
									<button className="btn btn-white" onClick={() => this.toggleModal('modalAlert')}>Close</button>
									<button className="btn btn-danger">Action</button>
								</ModalFooter>
							</Modal>
						</Panel>
						<Panel title="Modal">
							<PanelHeader>
								Bootstrap SweetAlert <span className="label label-success">NEW</span>
							</PanelHeader>
							<PanelBody>
								<p className="lead m-b-10 text-inverse">
									SweetAlert for Bootstrap. A beautiful replacement for JavaScript's "alert"
								</p>
								<hr />
								<p className="">
									Try any of those!
								</p>
								<button onClick={() => this.toggleSweetAlert('primary')} className="btn btn-primary m-r-5">Primary</button>
								<button onClick={() => this.toggleSweetAlert('info')} className="btn btn-info m-r-5">Info</button>
								<button onClick={() => this.toggleSweetAlert('success')} className="btn btn-success m-r-5">Success</button>
								<button onClick={() => this.toggleSweetAlert('warning')} className="btn btn-warning m-r-5">Warning</button>
								<button onClick={() => this.toggleSweetAlert('error')} className="btn btn-danger m-r-5">Danger</button>
							</PanelBody>
						</Panel>
						{(this.state.sweetAlertPrimary &&
							<SweetAlert showCancel
								confirmBtnText="Continue"
								confirmBtnBsStyle="primary"
								cancelBtnBsStyle="default"
								title="Are you sure?"
								onConfirm={() => this.toggleSweetAlert('primary')}
								onCancel={() => this.toggleSweetAlert('primary')}
							>
								You will not be able to recover this imaginary file!
							</SweetAlert>
						)}
						{(this.state.sweetAlertInfo &&
							<SweetAlert info showCancel
								confirmBtnText="Continue"
								confirmBtnBsStyle="info"
								cancelBtnBsStyle="default"
								title="Are you sure?"
								onConfirm={() => this.toggleSweetAlert('info')}
								onCancel={() => this.toggleSweetAlert('info')}
							>
								You will not be able to recover this imaginary file!
							</SweetAlert>
						)}
						{(this.state.sweetAlertSuccess &&
							<SweetAlert success showCancel
								confirmBtnText="Continue"
								confirmBtnBsStyle="success"
								cancelBtnBsStyle="default"
								title="Are you sure?"
								onConfirm={() => this.toggleSweetAlert('success')}
								onCancel={() => this.toggleSweetAlert('success')}
							>
								You will not be able to recover this imaginary file!
							</SweetAlert>
						)}
						{(this.state.sweetAlertWarning &&
							<SweetAlert warning showCancel
								confirmBtnText="Continue"
								confirmBtnBsStyle="warning"
								cancelBtnBsStyle="default"
								title="Are you sure?"
								onConfirm={() => this.toggleSweetAlert('warning')}
								onCancel={() => this.toggleSweetAlert('warning')}
							>
								You will not be able to recover this imaginary file!
							</SweetAlert>
						)}
						{(this.state.sweetAlertError &&
							<SweetAlert danger showCancel
								confirmBtnText="Yes, delete it!"
								confirmBtnBsStyle="danger"
								cancelBtnBsStyle="default"
								title="Are you sure?"
								onConfirm={() => this.toggleSweetAlert('error')}
								onCancel={() => this.toggleSweetAlert('error')}
							>
								You will not be able to recover this imaginary file!
							</SweetAlert>
						)}
					</div>
				</div>
			</div>
		)
	}
}

export default UIModalNotification;