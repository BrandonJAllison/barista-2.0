import { Droppable } from "react-beautiful-dnd";
import ListItem from "./list-item";
import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";



const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 8px;
  background: #111827;
`;

const DraggableElement = ({ prefix, elements }) => (
  <DroppableStyles>
    <Typography style={{marginBottom:'20px', color:'white'}}>{prefix}</Typography>
    <Droppable droppableId={`${prefix}`}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {elements.map((item, index) => (
            <ListItem key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DroppableStyles>
);

export default DraggableElement;