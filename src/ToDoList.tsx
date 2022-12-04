import { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch } = useForm();

  console.log(watch());

  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("First_name")} placeholder="First name" />
        <input {...register("Last_name")} placeholder="Last name" />
        <input {...register("User_name")} placeholder="User name" />
        <input {...register("password1")} placeholder="password1" />
        <input {...register("password2")} placeholder="password2" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
