import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;
const Title = styled.h2`
  text-align: center;
  padding: 0;
  margin: 0;
`;

interface IBoard {
  boardId: string;
  toDos: string[];
}

function Board({ boardId, toDos }: IBoard) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic) => (
          <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              <Card toDo={toDo} index={index} />
            ))}
            {magic.placeholder}
          </Wrapper>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
