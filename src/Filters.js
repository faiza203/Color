const day = new Date();

const Filter = () => {
  return (
    <div className="filters d-flex justify-content-between mb-3">
      <div className="d-flex">
        <button className="btn btn-light addList">Add List</button>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Show All
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Show All
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Open
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                On Hold
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Solved
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Closed
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Re-open
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-danger dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Show All
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Show All
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Urgent
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Hight
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Normal
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Low
              </a>
            </li>
          </ul>
        </div>
        <button className="btn btn-light">
          {day.getDate() + " " + day.getMonth() + "," + day.getFullYear()}
        </button>
      </div>
      <div className="d-inline-flex search">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Filter;
