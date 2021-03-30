import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css"
import TicketGridView from "./Component/TicketGridView/TicketGridView";

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
        <TicketGridView />
      </div>
    );
  }
}

export default Bootstrap4;
