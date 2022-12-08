import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";

interface ISubmitData {
  toDo: string;
}
function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<ISubmitData>();
  const onSubmit = ({ toDo }: ISubmitData) => {
    setToDos((preToDos) => [
      { text: toDo, id: Date.now(), category },
      ...preToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("toDo", { required: "Write To Do" })}
        placeholder="Write a to do"
      />
      <button>submit</button>
    </form>
  );
}
export default CreateToDo;
