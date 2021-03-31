const Filter = () => {
  return (
    <div>
      <div className="d-flex">
        <button className="btn btn-light">Add List</button>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Show All
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Show All
            </a>
            <a className="dropdown-item divider" href="#"></a>
            <a className="dropdown-item" href="#">
              Open Hold
            </a>
            <a className="dropdown-item" href="#">
              Solved
            </a>
            <a className="dropdown-item" href="#">
              Closed
            </a>
            <a className="dropdown-item" href="#">
              Re-open
            </a>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-danger dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Show All
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Show All
            </a>
            <a className="dropdown-item divider" href="#"></a>
            <a className="dropdown-item" href="#">
              Urgent
            </a>
            <a className="dropdown-item" href="#">
              High
            </a>
            <a className="dropdown-item" href="#">
              Normal
            </a>
            <a className="dropdown-item" href="#">
              Low
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Filter;
