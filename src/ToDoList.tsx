import { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("Email", {
            required: { value: true, message: "Email is reuqired." },
          })}
          placeholder="Email"
        />
        <input
          {...register("First_name", {
            required: { value: true, message: "First name is reuqired." },
          })}
          placeholder="First name"
        />
        <input
          {...register("Last_name", {
            required: { value: true, message: "Last name is reuqired." },
            minLength: 2,
          })}
          placeholder="Last name"
        />
        <input
          {...register("User_name", {
            required: { value: true, message: "User name is reuqired." },
          })}
          placeholder="User name"
        />
        <input
          {...register("password1", {
            required: { value: true, message: "Password is reuqired." },
          })}
          placeholder="password1"
        />
        <input
          {...register("password2", {
            required: { value: true, message: "Password is reuqired." },
          })}
          placeholder="password2"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
