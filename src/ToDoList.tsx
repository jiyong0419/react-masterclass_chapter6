import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  Email: string;
  First_name: string;
  Last_name: string;
  User_name: string;
  password1: string;
  password2: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IForm>({ defaultValues: { Email: "@naver.com" } });
  const onValid = (data: IForm) => {
    if (data.password1 !== data.password2) {
      setError("password1", { message: "Password are not the same." });
    }
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
            validate: {
              noJeon: (value) =>
                value.includes("jeon") ? "no Jeon allowed" : true,
              noChoi: (value) =>
                value.includes("choi") ? "no Choi allowed" : true,
            },
          })}
          placeholder="First name"
        />
        <input
          {...register("Last_name", {
            required: { value: true, message: "Last name is reuqired." },
            minLength: { value: 4, message: "Last name minLength is 4." },
            validate: {
              noJiyong: (value) =>
                value.includes("jiyong") ? "no jiyong allowed." : true,
              noNico: (value) =>
                value.includes("nico") ? "no nico allowed." : true,
            },
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
      <p>{errors?.extraError?.message}</p>
    </div>
  );
}

export default ToDoList;
