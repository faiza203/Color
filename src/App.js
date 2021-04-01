import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Link, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import TicketCard from "./card";
import Actions from "./action";
import Filter from "./filters";


const itemsFromBackend = [
  { id: "a", content: "First task",owner:"Alex" },
  { id: "b", content: "Second task",owner:"John" },
  { id: "c", content: "Third task" ,owner:"Trump"},
  { id: "d", content: "Fourth task",owner:"Pierre" },
  { id: "e", content: "Fifth task",owner:"Bob" },
  { id: "f", content: "Six task" ,owner:"Boby"},
  { id: "g", content: "Seven task" ,owner:"Michel"},
  { id: "h", content: "Eight task" ,owner:"Sam"},
];

const columnsFromBackend = {
 "1": {
    name: "Requested",
    items: [itemsFromBackend[0], itemsFromBackend[1], itemsFromBackend[2]],
    classN: "t1",
  },
  "2": {
    name: "To do",
    items: [itemsFromBackend[3], itemsFromBackend[4]],
    classN: "t2",
  },
  "3": {
    name: "In Progress",
    items: [itemsFromBackend[5]],
    classN: "t3",
  },
  "4": {
    name: "Done",
    items: [itemsFromBackend[6], itemsFromBackend[7]],
    classN: "t4",
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;
console.log(result);
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};




function KanBanBoard(props) {
  const [columns, setColumns] = useState(columnsFromBackend);

  useEffect(()=>{

    console.log(Object.entries(columns));
  });

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
      <div className="scroll">
        <Filter />
        <div className="TicketCardsHo">
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div className={`ticketsD ${column.classN}`}>
                  {column.name}
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          <Actions />
                          <div className="cards">
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        <TicketCard content={item} />
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              );
            })}
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default KanBanBoard;
