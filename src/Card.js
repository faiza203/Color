import { Link, BrowserRouter as Router } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
} from "reactstrap";
import { dragOver, dragStart, dropOver, dropStart } from "./DragAndDrop";

export const TicketCard = () => {
  return (
    <div className="mb-2 mt-2 ticketCardWidth">
      <Card
        className="border-0 m-t-0 card "
        id="card2"
        draggable={true}
        onDragStart={dragStart}
        onDragEnd={dragOver}
      >
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
          <CardSubtitle className="m-b-10 text-muted">Status</CardSubtitle>
          <CardSubtitle className="m-b-10 text-muted">Priority</CardSubtitle>
          <CardSubtitle className="m-b-10 text-muted">Created on</CardSubtitle>
          <CardSubtitle className="m-b-10 text-muted">Deadline</CardSubtitle>
          <CardSubtitle className="m-b-10 text-muted">Catergory</CardSubtitle>
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
            <Link to="/bootstrap-4" className="card-link" title="delete">
              <button type="button" className="btn btn-red btn-xs m-r-5 m-b-5">
                <i className="far fa-trash-alt"></i>
              </button>
            </Link>
            <Link to="/bootstrap-4" className="card-link" title="make comments">
              <button type="button" className="btn btn-lime btn-xs m-r-5 m-b-5">
                <i className="far fa-comments"></i>
              </button>
            </Link>
            <Link to="/bootstrap-4" className="card-link" title="share it">
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
            <Link to="/bootstrap-4" className="card-link" title="save as PDF">
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
            <Link to="/bootstrap-4" className="card-link" title="archive it">
              <button type="button" className="btn btn-gray btn-xs m-r-5 m-b-5">
                <i className="fas fa-archive"></i>
              </button>
            </Link>
          </Router>
        </CardFooter>
      </Card>
    </div>
  );
};
