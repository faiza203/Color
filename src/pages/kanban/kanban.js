import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Link, BrowserRouter as Router } from "react-router-dom";

//import "./../../../src/components/kanban/style.css";

import TicketCard from "./../../../src/components/kanban/Card";
import Actions from "./../../../src/components/kanban/Action";
import Filter from "./../../../src/components/kanban/Filters";


const itemsFromBackend = [
  { id: "a", content: "First task" },
  { id: "b", content: "Second task" },
  { id: "c", content: "Third task" },
  { id: "d", content: "Fourth task" },
  { id: "e", content: "Fifth task" },
  { id: "f", content: "Six task" },
  { id: "g", content: "Seven task" },
  { id: "h", content: "Eight task" },
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
      <h1 className="page-header m-b-10">Gridview of Tickets</h1>

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
