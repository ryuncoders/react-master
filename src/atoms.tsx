import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IToDosState {
  [key: string]: ITodo[];
}

export const toDosState = atom<IToDosState>({
  key: "toDos",
  default: {
    TODO: [],
    DOING: [],
    DONE: [],
  },
});
