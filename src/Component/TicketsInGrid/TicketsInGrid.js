import React from "react";

import TicketCard from "../TicketCard/TicketCard";

class TicketsInGrid extends React.Component {
  state = {
    tickets: [],
  };

  componentDidMount() {
    let tickets = [];
    for (let index = 0; index < 30; index++) {
      tickets.push(index);
    }
    this.setState({
      tickets,
    });
  }
  render() {
    const { tickets } = this.state;
    return (
      <div className="d-flex flex-column border overflow-scroll bg-primary">
        {tickets.map((i) => (
          <TicketCard key={i} className=" bg-primary" />
        ))}
      </div>
    );
  }
}

export default TicketsInGrid;
