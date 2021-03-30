import React from "react";

import TicketCard from "../TicketCard/TicketCard";

class TicketsInGrid extends React.Component {
  state = {
    tickets: [],
  };

  componentDidMount() {
    let tickets = [];
    for (let index = 0; index < 1; index++) {
      tickets.push(index);
    }
    this.setState({
      tickets,
    });
  }
  render() {
    const { tickets } = this.state;
    return (
      <div>
        {tickets.map((i) => (
          <TicketCard key={i} className=" bg-primary" />
        ))}
      </div>
    );
  }
}

export default TicketsInGrid;
