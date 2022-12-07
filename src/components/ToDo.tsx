import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: IToDo["category"]) => {
    setToDos((preToDos) => {
      const targetIndex = preToDos.findIndex((toDo) => toDo.id === id);
      const preToDo = preToDos[targetIndex];
      const newToDo = { text, id, category: newCategory };

      const array = [0, 1, 2, 3, 4, 5];

      return [
        ...preToDos.slice(0, targetIndex),
        newToDo,
        ...preToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )}
      {category !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>To Do</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>Done</button>
      )}
    </li>
  );
}
export default ToDo;
