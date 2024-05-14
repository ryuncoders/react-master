import { atom, selector } from "recoil";

interface IToDosState {
  [key: string]: string[];
}

export const toDosState = atom<IToDosState>({
  key: "toDos",
  default: {
    TODO: ["a", "b"],
    DOING: ["c", "d", "e"],
    DONE: ["f"],
  },
});
