export const Actions = ({ actionN, backgroundC }) => {
  const changeVisibility = (number) => {
    const AllTicketsD = document.querySelectorAll(".ticketsD");
    const ticketsD = AllTicketsD[number];
    ticketsD.classList.forEach((classname) => {
      classname === "false"
        ? ticketsD.classList.remove("false")
        : ticketsD.classList.add("false");
      classname === "false"
        ? (ticketsD.style.backgroundColor = backgroundC)
        : (ticketsD.style.backgroundColor = "#fff");
    });
  };

  return (
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
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
      <button className="min" onClick={() => changeVisibility(actionN)}>
        <i className="fa fa-minus"></i>
      </button>
    </div>
  );
};
