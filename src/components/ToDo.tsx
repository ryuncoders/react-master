import React from "react";
import { IToDo, toDoState } from "./atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (setCategory: IToDo["category"]) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((todo) => todo.id === id);
      const newToDo = { text, id, category: setCategory };
      console.log(newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={() => onClick("TO_DO")}>
          TO DO
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={() => onClick("DOING")}>
          DOING
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={() => onClick("DONE")}>
          DONE
        </button>
      )}
    </li>
  );
}

export default ToDo;
