import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardGroup, CardColumns, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, CardHeader, CardFooter, Button, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

class Bootstrap4 extends React.Component {
	constructor(props) {
		super(props);

		this.toggleTab1 = this.toggleTab1.bind(this);
		this.toggleTab2 = this.toggleTab2.bind(this);
		this.state = {
			activeTab1: '1',
			activeTab2: '1'
		};
	}

	toggleTab1(tab) {
		if (this.state.activeTab1 !== tab) {
			this.setState({
				activeTab1: tab
			});
		}
	}

	toggleTab2(tab) {
		if (this.state.activeTab2 !== tab) {
			this.setState({
				activeTab2: tab
			});
		}
	}
  
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/bootstrap-4">Home</Link></li>
					<li className="breadcrumb-item active">Bootstrap 4</li>
				</ol>
				<h1 className="page-header m-b-10">Bootstrap 4 <small>header small text goes here...</small></h1>
		
				<p className="m-b-20">
					We have included bootstrap 4 - cards element into our template. So now even you are using Bootstrap 3, you are able to use it as well. 
					A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
				</p>
				
				<div className="row">
					<div className="col-xl-3 col-sm-6">
						<div className="m-b-10 f-s-10 m-t-10"><b className="text-inverse">EXAMPLE</b></div>
						<Card className="border-0">
							<CardImg top src="/assets/img/gallery/gallery-1.jpg" alt="" />
							<CardBody>
								<CardTitle tag="h4" className="m-t-0 m-b-10">Card title</CardTitle>
								<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
								<Button color="default" size="sm">Go somewhere</Button>
							</CardBody>
						</Card>
						
						<div className="m-b-10 f-s-10 m-t-20"><b className="text-inverse">IMAGE OVERLAYS</b></div>
						<Card className="border-0" inverse>
							<CardImg top src="/assets/img/gallery/gallery-15.jpg" alt="" />
							<CardImgOverlay>
								<CardTitle tag="h4" className="m-t-0 m-b-10">Card title</CardTitle>
								<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
								<CardText><small>Last updated 3 mins ago</small></CardText>
							</CardImgOverlay>
						</Card>
						
						<div className="m-b-10 f-s-10 m-t-20"><b className="text-inverse">INVERTED TEXT</b></div>
						<Card inverse className="border-0 bg-dark card-inverse">
							<CardBody>
								<CardTitle tag="h4" className="m-t-5 m-b-10">Special title treatment</CardTitle>
								<CardText className="m-b-15">With supporting text below as a natural lead-in to additional content.</CardText>
								<Button color="warning" size="sm">Go somewhere</Button>
							</CardBody>
						</Card>
					</div>
					<div className="col-xl-3 col-sm-6">
						<div className="m-b-10 f-s-10 m-t-10"><b className="text-inverse">BLOCKS</b></div>
						<Card className="border-0">
							<CardBody>
								This is some text within a card block.
							</CardBody>
						</Card>
						
						<div className="m-b-10 f-s-10 m-t-20"><b className="text-inverse">TITLE, TEXT & LINKS</b></div>
						<Card className="border-0">
							<CardBody>
								<CardTitle tag="h4" className="m-t-0">Card title</CardTitle>
								<CardSubtitle className="m-b-10 text-muted">Card subtitle</CardSubtitle>
								<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
								<Link to="/bootstrap-4" className="card-link">Card link</Link>
								<Link to="/bootstrap-4" className="card-link">Another link</Link>
							</CardBody>
						</Card>
						
						<div className="m-b-10 f-s-10 m-t-20"><b className="text-inverse">WITH IMAGES</b></div>
						<Card className="border-0">
							<CardImg top src="/assets/img/gallery/gallery-2.jpg" alt="" />
							<CardBody>
								<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
							</CardBody>
						</Card>
						
						<div className="m-b-10 f-s-10 m-t-20"><b className="text-inverse">LIST GROUPS</b></div>
						<Card className="border-0">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">Cras justo odio</li>
								<li className="list-group-item">Dapibus ac facilisis in</li>
								<li className="list-group-item">Vestibulum at eros</li>
							</ul>
						</Card>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="m-b-10 f-s-10 m-t-10"><b className="text-inverse">HEADER & FOOTER</b></div>
						<Card className="border-0 text-center">
							<CardHeader className="f-w-600">
								Featured
							</CardHeader>
							<CardBody>
								<CardTitle tag="h4">Special title treatment</CardTitle>
								<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
								<Button color="primary" size="sm">Go somewhere</Button>
							</CardBody>
							<CardFooter className="text-muted f-w-600">
								2 days ago
							</CardFooter>
						</Card>
						
						<div className="m-b-10 f-s-10 m-t-20"><b className="text-inverse">NAVIGATION</b></div>
						<Card className="border-0">
							<CardHeader>
								<Nav tabs className="card-header-tabs">
									<NavItem>
										<NavLink className={classnames({ active: this.state.activeTab1 === '1' })} onClick={() => { this.toggleTab1('1'); }}>
											Active
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className={classnames({ active: this.state.activeTab1 === '2' })} onClick={() => { this.toggleTab1('2'); }} >
											Link
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink disabled>
											Disabled
										</NavLink>
									</NavItem>
								</Nav>
							</CardHeader>
							<CardBody>
								<TabContent className="p-0 text-center m-0" activeTab={this.state.activeTab1}>
									<TabPane tabId="1">
										<CardTitle tag="h4">Special title treatment</CardTitle>
										<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
										<Button color="default" size="sm">Go somewhere</Button>
									</TabPane>
									<TabPane tabId="2">
										<CardTitle tag="h4">Special title treatment</CardTitle>
										<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
										<Button color="yellow" size="sm">Go somewhere</Button>
									</TabPane>
								</TabContent>
							</CardBody>
						</Card>
						
						<div className="m-b-10 f-s-10 m-t-20"><b className="text-inverse">NAVIGATION PILLS</b></div>
						<Card>
							<CardHeader className="border-0">
								<Nav pills className="card-header-pills">
									<NavItem>
										<NavLink className={classnames({ active: this.state.activeTab2 === '1' })} onClick={() => { this.toggleTab2('1'); }}>
											Active
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className={classnames({ active: this.state.activeTab2 === '2' })} onClick={() => { this.toggleTab2('2'); }} >
											Link
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink disabled>
											Disabled
										</NavLink>
									</NavItem>
								</Nav>
							</CardHeader>
							<CardBody>
								<TabContent className="p-0 text-center m-0" activeTab={this.state.activeTab2}>
									<TabPane tabId="1">
										<CardTitle tag="h4">Special title treatment</CardTitle>
										<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
										<Button color="primary" size="sm">Go somewhere</Button>
									</TabPane>
									<TabPane tabId="2">
										<CardTitle tag="h4">Special title treatment</CardTitle>
										<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
										<Button color="success" size="sm">Go somewhere</Button>
									</TabPane>
								</TabContent>
							</CardBody>
						</Card>
					</div>
					
					<div className="col-xl-3 col-sm-6">
						<div className="m-b-10 f-s-10 m-t-10"><b className="text-inverse">BACKGROUND VARIANTS</b></div>
						
						<Card className="border-0 card-inverse bg-blue text-white text-center m-b-10">
							<CardBody>
								<blockquote className="card-blockquote mb-0">
									<p className="f-s-14 f-w-600">Make it so that <br />everything becomes your<br /> spiritual advisor</p>
									<footer className="blockquote-footer f-s-12 text-white">Someone famous in <cite title="Source Title">Source Title</cite></footer>
								</blockquote>
							</CardBody>
						</Card>
						<Card className="border-0 card-inverse bg-teal text-white text-center m-b-10">
							<CardBody>
								<blockquote className="card-blockquote mb-0">
									<p className="f-s-14 f-w-600">You don't have <br />to invade a country in order<br /> to be happy</p>
									<footer className="blockquote-footer f-s-12 text-white">Someone famous in <cite title="Source Title">Source Title</cite></footer>
								</blockquote>
							</CardBody>
						</Card>
						<Card className="border-0 card-inverse bg-dark text-white text-center m-b-10">
							<CardBody>
								<blockquote className="card-blockquote mb-0">
									<p className="f-s-14 f-w-600">Imagination is to <br />never pretend to be <br /> handicapped</p>
									<footer className="blockquote-footer f-s-12 text-white">Someone famous in <cite title="Source Title">Source Title</cite></footer>
								</blockquote>
							</CardBody>
						</Card>
						
						<div className="m-b-10 f-s-10 m-t-20"><b className="text-inverse">OUTLINE CARDS</b></div>
				
						<Card body outline color="warning" className="card-outline-warning bg-white text-warning text-center m-b-10">
							<blockquote className="card-blockquote mb-0">
								<p className="f-s-14 f-w-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
								<footer className="blockquote-footer f-s-12 text-warning">Someone famous in <cite title="Source Title">Source Title</cite></footer>
							</blockquote>
						</Card>
						
						<Card body outline color="danger" className="card-outline-danger bg-white text-danger text-center m-b-10">
							<blockquote className="card-blockquote mb-0">
								<p className="f-s-14 f-w-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
								<footer className="blockquote-footer f-s-12 text-danger">Someone famous in <cite title="Source Title">Source Title</cite></footer>
							</blockquote>
						</Card>
					</div>
				</div>
				
				<div className="row">
					<div className="col-12">
						<div className="m-b-10 f-s-10 m-t-20"><b className="text-inverse">CARD GROUPS</b></div>
						<CardGroup className="m-b-20">
							<Card>
								<CardImg top  src="/assets/img/gallery/gallery-6.jpg" alt="Card image cap" />
								<CardBody>
									<CardTitle tag="h4">Card title</CardTitle>
									<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
									<CardText className="text-muted">Last updated 3 mins ago</CardText>
								</CardBody>
							</Card>
							<Card>
								<CardImg top  src="/assets/img/gallery/gallery-7.jpg" alt="Card image cap" />
								<CardBody>
									<CardTitle tag="h4">Card title</CardTitle>
									<CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
									<CardText className="text-muted">Last updated 3 mins ago</CardText>
								</CardBody>
							</Card>
							<Card>
								<CardImg top  src="/assets/img/gallery/gallery-8.jpg" alt="Card image cap" />
								<CardBody>
									<CardTitle tag="h4">Card title</CardTitle>
									<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
									<CardText className="text-muted">Last updated 3 mins ago</CardText>
								</CardBody>
							</Card>
							<Card>
								<CardImg top  src="/assets/img/gallery/gallery-9.jpg" alt="Card image cap" />
								<CardBody>
									<CardTitle tag="h4">Card title</CardTitle>
									<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
									<CardText className="text-muted">Last updated 3 mins ago</CardText>
								</CardBody>
							</Card>
						</CardGroup>
					</div>
					<div className="col-12">
						<div className="m-b-10 f-s-10 m-t-5"><b className="text-inverse">CARD COLUMNS</b></div>
						<CardColumns className="border-0">
							<Card>
								<CardImg top className="img-fluid" src="/assets/img/gallery/gallery-11.jpg" alt="Card image cap" />
								<CardBody>
									<CardTitle tag="h4">Card title that wraps to a new line</CardTitle>
									<CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
								</CardBody>
							</Card>
							<Card className="border-0">
								<CardBody>
									<blockquote className="blockquote mb-0">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
										<footer className="blockquote-footer text-muted f-s-12">
											Someone famous in <cite title="Source Title">Source Title</cite>
										</footer>
									</blockquote>
								</CardBody>
							</Card>
							<Card className="card-inverse border-0 text-white">
								<CardImg top className="img-fluid" src="/assets/img/gallery/gallery-10.jpg" alt="Card image cap" />
								<CardImgOverlay>
									<CardTitle tag="h4">Card title</CardTitle>
									<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
									<CardText><small>Last updated 3 mins ago</small></CardText>
								</CardImgOverlay>
							</Card>
							<Card className="card-inverse bg-indigo text-center text-white border-0">
								<CardBody>
									<blockquote className="blockquote mb-0">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
										<footer className="blockquote-footer text-white f-s-12">
											Someone famous in <cite title="Source Title">Source Title</cite>
										</footer>
									</blockquote>
								</CardBody>
							</Card>
							<Card className="card-inverse border-0 text-white">
								<CardImg className="img-fluid" src="/assets/img/gallery/gallery-17.jpg" alt="Card image" />
								<CardImgOverlay>
									<CardTitle tag="h4">Card title</CardTitle>
									<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
									<CardText>Last updated 3 mins ago</CardText>
								</CardImgOverlay>
							</Card>
							<Card className="card-inverse bg-dark text-white text-right border-0">
								<CardBody>
									<blockquote className="blockquote mb-0">
										<p className="f-s-14">Fusce finibus sed augue quis volutpat. Duis non cursus felis. Nunc tristique lacinia orci, vel iaculis ipsum pretium at. Nullam ac mattis eros. Quisque a mauris in ex vulputate accumsan.</p>
										<footer className="blockquote-footer text-white f-s-12">
											Someone famous in <cite title="Source Title">Source Title</cite>
										</footer>
									</blockquote>
								</CardBody>
							</Card>
							<Card className="border-0">
								<CardBody>
									<CardTitle tag="h4">Card title</CardTitle>
									<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
									<CardText className="text-muted">Last updated 3 mins ago</CardText>
								</CardBody>
							</Card>
							<Card className="border-0 card-inverse text-white">
								<CardImg src="/assets/img/gallery/gallery-13.jpg" alt="Card image" />
								<CardImgOverlay>
									<CardTitle tag="h4">Card title</CardTitle>
									<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
									<CardText>Last updated 3 mins ago</CardText>
								</CardImgOverlay>
							</Card>
							<Card className="text-center border-0">
								<CardBody>
									<CardTitle tag="h4">Card title</CardTitle>
									<CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
									<CardText><small className="text-muted">Last updated 3 mins ago</small></CardText>
								</CardBody>
							</Card>
							<Card className="border-0">
								<CardImg top src="/assets/img/gallery/gallery-14.jpg" alt="Card image cap" />
								<CardBody>
									<CardTitle tag="h4">Card title</CardTitle>
									<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
								</CardBody>
							</Card>
						</CardColumns>
					</div>
				</div>
			</div>
		)
	}
}

export default Bootstrap4;