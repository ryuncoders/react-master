import React from "react";
import { Categories, IToDo, toDoState } from "./atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (setCategory: IToDo["category"]) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((todo) => todo.id === id);
      const newToDo = { text, id, category: setCategory };
      console.log(setCategory, newToDo);
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
      {category !== Categories.TO_DO && (
        <button
          // name={Categories.TO_DO + ""}
          onClick={() => onClick(Categories.TO_DO)}
        >
          TO DO
        </button>
      )}
      {category !== Categories.DOING && (
        <button onClick={() => onClick(Categories.DOING)}>DOING</button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => onClick(Categories.DONE)}>DONE</button>
      )}
    </li>
  );
}

export default ToDo;
