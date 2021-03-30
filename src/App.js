import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
} from "reactstrap";
import "./App.css";

import { dragOver, dragStart, dropOver, dropStart } from "./DragAndDrop";

class Bootstrap4 extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTab1 = this.toggleTab1.bind(this);
    this.toggleTab2 = this.toggleTab2.bind(this);
    this.state = {
      activeTab1: "1",
      activeTab2: "1",
    };
  }
  changeVisibility = (number) => {
    const AllTicketsD = document.querySelectorAll(".ticketsD");
    const ticketsD = AllTicketsD[number];
    ticketsD.classList.forEach((classname) => {
      classname === "false"
        ? ticketsD.classList.remove("false")
        : ticketsD.classList.add("false");
    });
  };

  toggleTab1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      });
    }
  }

  toggleTab2(tab) {
    if (this.state.activeTab2 !== tab) {
      this.setState({
        activeTab2: tab,
      });
    }
  }

  render() {
    return (
      <div className="m-3">
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Router>
              <Link to="/bootstrap-4">Home</Link>
            </Router>
          </li>
          <li className="breadcrumb-item active">Tickets</li>
        </ol>
        <h1 className="page-header m-b-10">Gridview of Tickets</h1>

        <div className="panel-toolbar">
          <div className="btn-group m-r-5">
            <button className="btn btn-white">
              <i className="fa fa-plus"></i> Ticket
            </button>
            <button className="btn btn-white active">
              <i className="fa fa-edit"></i>
            </button>
            <button className="btn btn-white">
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
          <p className="m-b-20"></p>
        </div>
        <div className="tickets">
          <div className="ticketsD">
            <div className="mb-2 actions">
              <div className=" d-inline-flex drpdwn">
                <p className="m-b-0">Action</p>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-eye"></i> View
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-trash-alt"></i> Delete
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-comments"></i> Comment
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-file-pdf"></i> Download
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-print"></i> Print
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-archive"></i> Archive
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span
                          className="iconify"
                          data-icon="ion-md-share"
                          data-inline="false"
                        ></span>{" "}
                        Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="min" onClick={() => this.changeVisibility(0)}>
                <i className="fa fa-minus"></i>
              </button>
            </div>
            <div className="mb-2 mt-2 ticketCardWidth">
              <Card className="border-0 m-t-0 card " id="card1" draggable={true} onDragStart={dragStart} onDragEnd={dragOver}>
                <CardBody>
                  <CardTitle tag="h4" className="title m-t-0">
                    Ticket title
                  </CardTitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Owner
                    <div
                      className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                      style={{
                        backgroundImage: "url(../assets/img/user/user-1.jpg)",
                      }}
                    ></div>
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Status
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Priority
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Created on
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Deadline
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Catergory
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Assigned To
                    <div className="d-flex">
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-1.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-2.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-3.jpg)",
                        }}
                      ></div>
                      <div className="widget-icon widget-icon-xs rounded-circle bg-muted text-white f-s-10">
                        +2
                      </div>
                    </div>
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
                <CardFooter className="text-muted f-w-600">
                  <Router>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="View details/profile"
                    >
                      <button
                        type="button"
                        className="btn btn-green btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-eye"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="delete"
                    >
                      <button
                        type="button"
                        className="btn btn-red btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="make comments"
                    >
                      <button
                        type="button"
                        className="btn btn-lime btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-comments"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="share it"
                    >
                      <button
                        type="button"
                        className="btn btn-purple btn-xs m-r-5 m-b-5"
                      >
                        <span
                          className="iconify"
                          data-icon="ion-md-share"
                          data-inline="false"
                        ></span>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="save as PDF"
                    >
                      <button
                        type="button"
                        className="btn btn-orange btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-file-pdf"></i>
                      </button>
                    </Link>
                    <Link to="/bootstrap-4" className="card-link" title="print">
                      <button
                        type="button"
                        className="btn btn-indigo btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-print"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="archive it"
                    >
                      <button
                        type="button"
                        className="btn btn-gray btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-archive"></i>
                      </button>
                    </Link>
                  </Router>
                </CardFooter>
              </Card>
            </div>
            <div className="mb-2 mt-2 ticketCardWidth">
              <Card className="border-0 m-t-0 card "  id="card2" draggable={true} onDragStart={dragStart} onDragEnd={dragOver}>
                <CardBody>
                  <CardTitle tag="h4" className="title m-t-0">
                    Ticket title
                  </CardTitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Owner
                    <div
                      className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                      style={{
                        backgroundImage: "url(../assets/img/user/user-1.jpg)",
                      }}
                    ></div>
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Status
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Priority
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Created on
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Deadline
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Catergory
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Assigned To
                    <div className="d-flex">
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-1.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-2.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-3.jpg)",
                        }}
                      ></div>
                      <div className="widget-icon widget-icon-xs rounded-circle bg-muted text-white f-s-10">
                        +2
                      </div>
                    </div>
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
                <CardFooter className="text-muted f-w-600">
                  <Router>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="View details/profile"
                    >
                      <button
                        type="button"
                        className="btn btn-green btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-eye"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="delete"
                    >
                      <button
                        type="button"
                        className="btn btn-red btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="make comments"
                    >
                      <button
                        type="button"
                        className="btn btn-lime btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-comments"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="share it"
                    >
                      <button
                        type="button"
                        className="btn btn-purple btn-xs m-r-5 m-b-5"
                      >
                        <span
                          className="iconify"
                          data-icon="ion-md-share"
                          data-inline="false"
                        ></span>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="save as PDF"
                    >
                      <button
                        type="button"
                        className="btn btn-orange btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-file-pdf"></i>
                      </button>
                    </Link>
                    <Link to="/bootstrap-4" className="card-link" title="print">
                      <button
                        type="button"
                        className="btn btn-indigo btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-print"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="archive it"
                    >
                      <button
                        type="button"
                        className="btn btn-gray btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-archive"></i>
                      </button>
                    </Link>
                  </Router>
                </CardFooter>
              </Card>
            </div>
            <div className="mb-2 mt-2 ticketCardWidth">
              <Card className="border-0 m-t-0 card "  id="card3" draggable={true} onDragStart={dragStart} onDragEnd={dragOver}>
                <CardBody>
                  <CardTitle tag="h4" className="title m-t-0">
                    Ticket title
                  </CardTitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Owner
                    <div
                      className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                      style={{
                        backgroundImage: "url(../assets/img/user/user-1.jpg)",
                      }}
                    ></div>
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Status
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Priority
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Created on
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Deadline
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Catergory
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Assigned To
                    <div className="d-flex">
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-1.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-2.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-3.jpg)",
                        }}
                      ></div>
                      <div className="widget-icon widget-icon-xs rounded-circle bg-muted text-white f-s-10">
                        +2
                      </div>
                    </div>
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
                <CardFooter className="text-muted f-w-600">
                  <Router>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="View details/profile"
                    >
                      <button
                        type="button"
                        className="btn btn-green btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-eye"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="delete"
                    >
                      <button
                        type="button"
                        className="btn btn-red btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="make comments"
                    >
                      <button
                        type="button"
                        className="btn btn-lime btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-comments"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="share it"
                    >
                      <button
                        type="button"
                        className="btn btn-purple btn-xs m-r-5 m-b-5"
                      >
                        <span
                          className="iconify"
                          data-icon="ion-md-share"
                          data-inline="false"
                        ></span>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="save as PDF"
                    >
                      <button
                        type="button"
                        className="btn btn-orange btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-file-pdf"></i>
                      </button>
                    </Link>
                    <Link to="/bootstrap-4" className="card-link" title="print">
                      <button
                        type="button"
                        className="btn btn-indigo btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-print"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="archive it"
                    >
                      <button
                        type="button"
                        className="btn btn-gray btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-archive"></i>
                      </button>
                    </Link>
                  </Router>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="ticketsD">
            <div className="mb-2 actions">
              <div className=" d-inline-flex drpdwn">
                <p className="m-b-0">Action</p>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-eye"></i> View
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-trash-alt"></i> Delete
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-comments"></i> Comment
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-file-pdf"></i> Download
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-print"></i> Print
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-archive"></i> Archive
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span
                          className="iconify"
                          data-icon="ion-md-share"
                          data-inline="false"
                        ></span>{" "}
                        Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="min" onClick={() => this.changeVisibility(1)}>
                <i className="fa fa-minus"></i>
              </button>
            </div>
            <div className="mb-2 mt-2 ticketCardWidth">
              <Card className="border-0 m-t-0 card " id="card4" draggable={true} onDragStart={dragStart} onDragEnd={dragOver}>
                <CardBody>
                  <CardTitle tag="h4" className="title m-t-0">
                    Ticket title
                  </CardTitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Owner
                    <div
                      className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                      style={{
                        backgroundImage: "url(../assets/img/user/user-1.jpg)",
                      }}
                    ></div>
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Status
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Priority
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Created on
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Deadline
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Catergory
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Assigned To
                    <div className="d-flex">
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-1.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-2.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-3.jpg)",
                        }}
                      ></div>
                      <div className="widget-icon widget-icon-xs rounded-circle bg-muted text-white f-s-10">
                        +2
                      </div>
                    </div>
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
                <CardFooter className="text-muted f-w-600">
                  <Router>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="View details/profile"
                    >
                      <button
                        type="button"
                        className="btn btn-green btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-eye"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="delete"
                    >
                      <button
                        type="button"
                        className="btn btn-red btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="make comments"
                    >
                      <button
                        type="button"
                        className="btn btn-lime btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-comments"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="share it"
                    >
                      <button
                        type="button"
                        className="btn btn-purple btn-xs m-r-5 m-b-5"
                      >
                        <span
                          className="iconify"
                          data-icon="ion-md-share"
                          data-inline="false"
                        ></span>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="save as PDF"
                    >
                      <button
                        type="button"
                        className="btn btn-orange btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-file-pdf"></i>
                      </button>
                    </Link>
                    <Link to="/bootstrap-4" className="card-link" title="print">
                      <button
                        type="button"
                        className="btn btn-indigo btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-print"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="archive it"
                    >
                      <button
                        type="button"
                        className="btn btn-gray btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-archive"></i>
                      </button>
                    </Link>
                  </Router>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="ticketsD">
            <div className="mb-2 actions">
              <div className=" d-inline-flex drpdwn">
                <p className="m-b-0">Action</p>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-eye"></i> View
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-trash-alt"></i> Delete
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-comments"></i> Comment
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-file-pdf"></i> Download
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-print"></i> Print
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-archive"></i> Archive
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span
                          className="iconify"
                          data-icon="ion-md-share"
                          data-inline="false"
                        ></span>{" "}
                        Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="min" onClick={() => this.changeVisibility(2)}>
                <i className="fa fa-minus"></i>
              </button>
            </div>{" "}
            <div className="mb-2 mt-2 ticketCardWidth">
              <Card className="border-0 m-t-0 card "  id="card5" draggable={true} onDragStart={dragStart} onDragEnd={dragOver}>
                <CardBody>
                  <CardTitle tag="h4" className="title m-t-0">
                    Ticket title
                  </CardTitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Owner
                    <div
                      className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                      style={{
                        backgroundImage: "url(../assets/img/user/user-1.jpg)",
                      }}
                    ></div>
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Status
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Priority
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Created on
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Deadline
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Catergory
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Assigned To
                    <div className="d-flex">
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-1.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-2.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-3.jpg)",
                        }}
                      ></div>
                      <div className="widget-icon widget-icon-xs rounded-circle bg-muted text-white f-s-10">
                        +2
                      </div>
                    </div>
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
                <CardFooter className="text-muted f-w-600">
                  <Router>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="View details/profile"
                    >
                      <button
                        type="button"
                        className="btn btn-green btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-eye"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="delete"
                    >
                      <button
                        type="button"
                        className="btn btn-red btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="make comments"
                    >
                      <button
                        type="button"
                        className="btn btn-lime btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-comments"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="share it"
                    >
                      <button
                        type="button"
                        className="btn btn-purple btn-xs m-r-5 m-b-5"
                      >
                        <span
                          className="iconify"
                          data-icon="ion-md-share"
                          data-inline="false"
                        ></span>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="save as PDF"
                    >
                      <button
                        type="button"
                        className="btn btn-orange btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-file-pdf"></i>
                      </button>
                    </Link>
                    <Link to="/bootstrap-4" className="card-link" title="print">
                      <button
                        type="button"
                        className="btn btn-indigo btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-print"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="archive it"
                    >
                      <button
                        type="button"
                        className="btn btn-gray btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-archive"></i>
                      </button>
                    </Link>
                  </Router>
                </CardFooter>
              </Card>
            </div>
            <div className="mb-2 mt-2 ticketCardWidth">
              <Card className="border-0 m-t-0 card "  id="card6" draggable={true} onDragStart={dragStart} onDragEnd={dragOver}>
                <CardBody>
                  <CardTitle tag="h4" className="title m-t-0">
                    Ticket title
                  </CardTitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Owner
                    <div
                      className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                      style={{
                        backgroundImage: "url(../assets/img/user/user-1.jpg)",
                      }}
                    ></div>
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Status
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Priority
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Created on
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Deadline
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Catergory
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Assigned To
                    <div className="d-flex">
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-1.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-2.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-3.jpg)",
                        }}
                      ></div>
                      <div className="widget-icon widget-icon-xs rounded-circle bg-muted text-white f-s-10">
                        +2
                      </div>
                    </div>
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
                <CardFooter className="text-muted f-w-600">
                  <Router>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="View details/profile"
                    >
                      <button
                        type="button"
                        className="btn btn-green btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-eye"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="delete"
                    >
                      <button
                        type="button"
                        className="btn btn-red btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="make comments"
                    >
                      <button
                        type="button"
                        className="btn btn-lime btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-comments"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="share it"
                    >
                      <button
                        type="button"
                        className="btn btn-purple btn-xs m-r-5 m-b-5"
                      >
                        <span
                          className="iconify"
                          data-icon="ion-md-share"
                          data-inline="false"
                        ></span>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="save as PDF"
                    >
                      <button
                        type="button"
                        className="btn btn-orange btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-file-pdf"></i>
                      </button>
                    </Link>
                    <Link to="/bootstrap-4" className="card-link" title="print">
                      <button
                        type="button"
                        className="btn btn-indigo btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-print"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="archive it"
                    >
                      <button
                        type="button"
                        className="btn btn-gray btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-archive"></i>
                      </button>
                    </Link>
                  </Router>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="ticketsD">
            <div className="mb-2 actions">
              <div className=" d-inline-flex drpdwn">
                <p className="m-b-0">Action</p>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-eye"></i> View
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-trash-alt"></i> Delete
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-comments"></i> Comment
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-file-pdf"></i> Download
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-print"></i> Print
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-archive"></i> Archive
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span
                          className="iconify"
                          data-icon="ion-md-share"
                          data-inline="false"
                        ></span>{" "}
                        Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="min" onClick={() => this.changeVisibility(3)}>
                <i className="fa fa-minus"></i>
              </button>
            </div>
            <div className="mb-2 mt-2 ticketCardWidth">
              <Card className="border-0 m-t-0 card "  id="card7" draggable={true} onDragStart={dragStart} onDragEnd={dragOver}>
                <CardBody>
                  <CardTitle tag="h4" className="title m-t-0">
                    Ticket title
                  </CardTitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Owner
                    <div
                      className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                      style={{
                        backgroundImage: "url(../assets/img/user/user-1.jpg)",
                      }}
                    ></div>
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Status
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Priority
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Created on
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Deadline
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Catergory
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Assigned To
                    <div className="d-flex">
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-1.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-2.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-3.jpg)",
                        }}
                      ></div>
                      <div className="widget-icon widget-icon-xs rounded-circle bg-muted text-white f-s-10">
                        +2
                      </div>
                    </div>
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
                <CardFooter className="text-muted f-w-600">
                  <Router>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="View details/profile"
                    >
                      <button
                        type="button"
                        className="btn btn-green btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-eye"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="delete"
                    >
                      <button
                        type="button"
                        className="btn btn-red btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="make comments"
                    >
                      <button
                        type="button"
                        className="btn btn-lime btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-comments"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="share it"
                    >
                      <button
                        type="button"
                        className="btn btn-purple btn-xs m-r-5 m-b-5"
                      >
                        <span
                          className="iconify"
                          data-icon="ion-md-share"
                          data-inline="false"
                        ></span>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="save as PDF"
                    >
                      <button
                        type="button"
                        className="btn btn-orange btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-file-pdf"></i>
                      </button>
                    </Link>
                    <Link to="/bootstrap-4" className="card-link" title="print">
                      <button
                        type="button"
                        className="btn btn-indigo btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-print"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="archive it"
                    >
                      <button
                        type="button"
                        className="btn btn-gray btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-archive"></i>
                      </button>
                    </Link>
                  </Router>
                </CardFooter>
              </Card>
            </div>
            <div className="mb-2 mt-2 ticketCardWidth">
              <Card className="border-0 m-t-0 card "  id="card8" draggable={true} onDragStart={dragStart} onDragEnd={dragOver}>
                <CardBody>
                  <CardTitle tag="h4" className="title m-t-0">
                    Ticket title
                  </CardTitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Owner
                    <div
                      className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                      style={{
                        backgroundImage: "url(../assets/img/user/user-1.jpg)",
                      }}
                    ></div>
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Status
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Priority
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Created on
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Deadline
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Catergory
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Assigned To
                    <div className="d-flex">
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-1.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-2.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-3.jpg)",
                        }}
                      ></div>
                      <div className="widget-icon widget-icon-xs rounded-circle bg-muted text-white f-s-10">
                        +2
                      </div>
                    </div>
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
                <CardFooter className="text-muted f-w-600">
                  <Router>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="View details/profile"
                    >
                      <button
                        type="button"
                        className="btn btn-green btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-eye"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="delete"
                    >
                      <button
                        type="button"
                        className="btn btn-red btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="make comments"
                    >
                      <button
                        type="button"
                        className="btn btn-lime btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-comments"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="share it"
                    >
                      <button
                        type="button"
                        className="btn btn-purple btn-xs m-r-5 m-b-5"
                      >
                        <span
                          className="iconify"
                          data-icon="ion-md-share"
                          data-inline="false"
                        ></span>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="save as PDF"
                    >
                      <button
                        type="button"
                        className="btn btn-orange btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-file-pdf"></i>
                      </button>
                    </Link>
                    <Link to="/bootstrap-4" className="card-link" title="print">
                      <button
                        type="button"
                        className="btn btn-indigo btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-print"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="archive it"
                    >
                      <button
                        type="button"
                        className="btn btn-gray btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-archive"></i>
                      </button>
                    </Link>
                  </Router>
                </CardFooter>
              </Card>
            </div>
            <div className="mb-2 mt-2 ticketCardWidth">
              <Card className="border-0 m-t-0 card "  id="card9" draggable={true} onDragStart={dragStart} onDragEnd={dragOver}>
                <CardBody>
                  <CardTitle tag="h4" className="title m-t-0">
                    Ticket title
                  </CardTitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Owner
                    <div
                      className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                      style={{
                        backgroundImage: "url(../assets/img/user/user-1.jpg)",
                      }}
                    ></div>
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Status
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Priority
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Created on
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Deadline
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Catergory
                  </CardSubtitle>
                  <CardSubtitle className="m-b-10 text-muted">
                    Assigned To
                    <div className="d-flex">
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-1.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-2.jpg)",
                        }}
                      ></div>
                      <div
                        className="widget-img widget-img-xs rounded-circle bg-inverse mr-n2"
                        style={{
                          backgroundImage: "url(../assets/img/user/user-3.jpg)",
                        }}
                      ></div>
                      <div className="widget-icon widget-icon-xs rounded-circle bg-muted text-white f-s-10">
                        +2
                      </div>
                    </div>
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
                <CardFooter className="text-muted f-w-600">
                  <Router>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="View details/profile"
                    >
                      <button
                        type="button"
                        className="btn btn-green btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-eye"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="delete"
                    >
                      <button
                        type="button"
                        className="btn btn-red btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="make comments"
                    >
                      <button
                        type="button"
                        className="btn btn-lime btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-comments"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="share it"
                    >
                      <button
                        type="button"
                        className="btn btn-purple btn-xs m-r-5 m-b-5"
                      >
                        <span
                          className="iconify"
                          data-icon="ion-md-share"
                          data-inline="false"
                        ></span>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="save as PDF"
                    >
                      <button
                        type="button"
                        className="btn btn-orange btn-xs m-r-5 m-b-5"
                      >
                        <i className="far fa-file-pdf"></i>
                      </button>
                    </Link>
                    <Link to="/bootstrap-4" className="card-link" title="print">
                      <button
                        type="button"
                        className="btn btn-indigo btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-print"></i>
                      </button>
                    </Link>
                    <Link
                      to="/bootstrap-4"
                      className="card-link"
                      title="archive it"
                    >
                      <button
                        type="button"
                        className="btn btn-gray btn-xs m-r-5 m-b-5"
                      >
                        <i className="fas fa-archive"></i>
                      </button>
                    </Link>
                  </Router>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bootstrap4;
