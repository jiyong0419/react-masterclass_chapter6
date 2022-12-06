import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

interface ISubmitData {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<ISubmitData>();
  const onSubmit = ({ toDo }: ISubmitData) => {
    setToDos((toDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...toDos,
    ]);
    setValue("toDo", "");
  };
  console.log(toDos);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", { required: "Write To Do" })}
          placeholder="Write a to do"
        />
        <button>submit</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
