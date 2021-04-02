import React from 'react';
import { Link } from 'react-router-dom';

class ExtraInvoice extends React.Component {
	constructor(props) {
		super(props);
		
		this.print = () => {
			window.print();
		}
	}
	render() {
		return (
			<div>
				<ol className="breadcrumb hidden-print pull-right">
					<li className="breadcrumb-item"><Link to="/extra/invoice">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/extra/invoice">Extra</Link></li>
					<li className="breadcrumb-item active">Invoice</li>
				</ol>
				<h1 className="page-header hidden-print">Invoice <small>header small text goes here...</small></h1>
				<div className="invoice">
					<div className="invoice-company text-inverse f-w-600">
						<span className="pull-right hidden-print">
							<button className="btn btn-sm btn-white m-b-10 p-l-5 m-r-5"><i className="fa fa-file-pdf t-plus-1 text-danger fa-fw fa-lg"></i> Export as PDF</button>
							<button onClick={this.print} className="btn btn-sm btn-white m-b-10 p-l-5"><i className="fa fa-print t-plus-1 fa-fw fa-lg"></i> Print</button>
						</span>
						Company Name, Inc
					</div>
					<div className="invoice-header">
						<div className="invoice-from">
							<small>from</small>
							<address className="m-t-5 m-b-5">
								<strong className="text-inverse">Twitter, Inc.</strong><br />
								Street Address<br />
								City, Zip Code<br />
								Phone: (123) 456-7890<br />
								Fax: (123) 456-7890
							</address>
						</div>
						<div className="invoice-to">
							<small>to</small>
							<address className="m-t-5 m-b-5">
								<strong className="text-inverse">Company Name</strong><br />
								Street Address<br />
								City, Zip Code<br />
								Phone: (123) 456-7890<br />
								Fax: (123) 456-7890
							</address>
						</div>
						<div className="invoice-date">
							<small>Invoice / July period</small>
							<div className="date text-inverse m-t-5">August 3,2012</div>
							<div className="invoice-detail">
								#0000123DSS<br />
								Services Product
							</div>
						</div>
					</div>
					<div className="invoice-content">
						<div className="table-responsive">
							<table className="table table-invoice">
								<thead>
									<tr>
										<th>TASK DESCRIPTION</th>
										<th className="text-center" width="10%">RATE</th>
										<th className="text-center" width="10%">HOURS</th>
										<th className="text-right" width="20%">LINE TOTAL</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<span className="text-inverse">Website design &amp; development</span><br />
											<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis arcu.</small>
										</td>
										<td className="text-center">$50.00</td>
										<td className="text-center">50</td>
										<td className="text-right">$2,500.00</td>
									</tr>
									<tr>
										<td>
											<span className="text-inverse">Branding</span><br />
											<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis arcu.</small>
										</td>
										<td className="text-center">$50.00</td>
										<td className="text-center">40</td>
										<td className="text-right">$2,000.00</td>
									</tr>
									<tr>
										<td>
											<span className="text-inverse">Redesign Service</span><br />
											<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis arcu.</small>
										</td>
										<td className="text-center">$50.00</td>
										<td className="text-center">50</td>
										<td className="text-right">$2,500.00</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="invoice-price">
							<div className="invoice-price-left">
								<div className="invoice-price-row">
									<div className="sub-price">
										<small>SUBTOTAL</small>
										<span className="text-inverse">$4,500.00</span>
									</div>
									<div className="sub-price">
										<i className="fa fa-plus text-muted"></i>
									</div>
									<div className="sub-price">
										<small>PAYPAL FEE (5.4%)</small>
										<span className="text-inverse">$108.00</span>
									</div>
								</div>
							</div>
							<div className="invoice-price-right">
								<small>TOTAL</small> <span className="f-w-600">$4508.00</span>
							</div>
						</div>
					</div>
					<div className="invoice-note">
						* Make all cheques payable to [Your Company Name]<br />
						* Payment is due within 30 days<br />
						* If you have any questions concerning this invoice, contact  [Name, Phone Number, Email]
					</div>
					<div className="invoice-footer">
						<p className="text-center m-b-5 f-w-600">
							THANK YOU FOR YOUR BUSINESS
						</p>
						<p className="text-center">
							<span className="m-r-10"><i className="fa fa-fw fa-lg fa-globe"></i> matiasgallipoli.com</span>
							<span className="m-r-10"><i className="fa fa-fw fa-lg fa-phone-volume"></i> T:016-18192302</span>
							<span className="m-r-10"><i className="fa fa-fw fa-lg fa-envelope"></i> rtiemps@gmail.com</span>
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default ExtraInvoice;