import React from "react";

import TicketsInGrid from "../TicketsInGrid/TicketsInGrid";

import "./TicketGridView.css";

class TicketGridView extends React.Component {
  state = {
    tickets: [],
  };

  componentDidMount() {
    let tickets = [];
    for (let index = 0; index < 5; index++) {
      tickets.push(index);
    }
    this.setState({
      tickets,
    });
  }
  render() {
    const { tickets } = this.state;
    return (
      <div className="TicketCardsHo">
        {tickets.map((i) => (
          <TicketsInGrid key={i} />
        ))}
      </div>
    );
  }
}

export default TicketGridView;
