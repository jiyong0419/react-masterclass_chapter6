import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "./atoms";

interface ISubmitData {
  toDo: string;
}
function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<ISubmitData>();
  const onSubmit = ({ toDo }: ISubmitData) => {
    setToDos((preToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
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
