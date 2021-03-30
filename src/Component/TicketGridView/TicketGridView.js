import React from "react";

import TicketsInGrid from "../TicketsInGrid/TicketsInGrid";

import "./TicketGridView.css";

class TicketGridView extends React.Component {
  state = {
    tickets: [],
  };

  componentDidMount() {
    let tickets = [];
    for (let index = 0; index < 10; index++) {
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
          <TicketsInGrid key={i} />
        ))}
      </div>
    );
  }
}

export default TicketGridView;
