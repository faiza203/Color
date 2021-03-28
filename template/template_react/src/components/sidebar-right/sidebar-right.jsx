import React from 'react';
import { Collapse, CardHeader, CardBody, Card } from 'reactstrap';
import { PageSettings } from './../../config/page-settings.js';

class SidebarRight extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collapse: [
				{	id: 1, collapse: true },
				{	id: 2, collapse: false },
				{	id: 3, collapse: false },
				{	id: 4, collapse: false },
				{	id: 5, collapse: false },
				{	id: 6, collapse: false },
				{	id: 7, collapse: false },
			]
		};
		this.toggleCollapse = this.toggleCollapse.bind(this);
	}

	toggleCollapse(index) {
		var newArray = [];
		for (let collapseObj of this.state.collapse) {
			if (collapseObj.id === index) {
				collapseObj.collapse = !collapseObj.collapse;
			} else {
				collapseObj.collapse = false;
			}
			newArray.push(collapseObj);
		}

		this.setState({
			collapse: newArray
		});
	}
  
	render() {
		return (
			<PageSettings.Consumer>
				{({pageTwoSidebar}) => (
					<React.Fragment>
						{pageTwoSidebar && (
							<React.Fragment>
								<div id="sidebar-right" className="sidebar sidebar-right">
									<div className="overflow-scroll height-full">
										<ul className="nav">
											<li className="nav-widget p-0">
												<p className="text-white m-0 p-15">Accordion</p>
												<div id="accordion" className="accordion">
													{
														this.state.collapse.map((value, i) => (
														<Card className="bg-dark text-white border-0" key={i}>
															<CardHeader className={'card-header bg-dark-darker text-white pointer-cursor border-0 ' + (!value.collapse ? 'collapsed ' : '')} onClick={() => this.toggleCollapse(value.id)}>
																<i className="fa fa-circle text-teal f-s-8 mr-2"></i> Accordion Item #{value.id}
															</CardHeader>
															<Collapse isOpen={value.collapse}>
																<CardBody className="p-15">
																	Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus.
																</CardBody>
															</Collapse>
														</Card>
														))
													}
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="sidebar-bg sidebar-right"></div>
							</React.Fragment>
						)}
					</React.Fragment>
				)}
			</PageSettings.Consumer>
		)
	}
}


export default SidebarRight;
