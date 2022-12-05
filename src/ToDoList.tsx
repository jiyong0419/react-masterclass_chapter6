import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  Email: string;
  First_name: string;
  Last_name: string;
  User_name: string;
  password1: string;
  password2: string;
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ defaultValues: { Email: "@naver.com" } });
  const onValid = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("Email", {
            required: { value: true, message: "Email is reuqired." },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/gm,
              message: "Only naver.com emails allowed",
            },
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
            minLength: { value: 4, message: "Last name minLength is 4." },
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
      <p>{errors?.Email?.message}</p>
      <p>{errors?.First_name?.message}</p>
      <p>{errors?.Last_name?.message}</p>
      <p>{errors?.User_name?.message}</p>
      <p>{errors?.password1?.message}</p>
      <p>{errors?.password2?.message}</p>
    </div>
  );
}

export default ToDoList;
