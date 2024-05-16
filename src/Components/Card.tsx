import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Wrapper = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

interface ICard {
  toDoId: number;
  toDoText: string;
  index: number;
}

function Card({ toDoId, toDoText, index }: ICard) {
  return (
    <Draggable key={toDoId} draggableId={toDoText} index={index}>
      {(magic, snapshot) => (
        <Wrapper
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDoText}
        </Wrapper>
      )}
    </Draggable>
  );
}

export default React.memo(Card);
