import { useState } from "react";
import { useForm } from "react-hook-form";

interface ISubmitData {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<ISubmitData>();
  const onSubmit = (data: ISubmitData) => {
    console.log(data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", { required: "Write To Do" })}
          placeholder="Write a to do"
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default ToDoList;
