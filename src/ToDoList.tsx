import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  name: string;
  password: string;
  password1: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        {
          message: "Password are not the same.",
        },
        { shouldFocus: true }
      );
    }
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("name", {
            required: "name is required",
            minLength: { value: 5, message: "Write at least 5" },
          })}
          placeholder="name"
        />
        <span>{errors?.name?.message}</span>
        <input
          {...register("password", {
            required: "password is required",
            minLength: { value: 8, message: "Write at least 8" },
          })}
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "password is required",
            minLength: { value: 8, message: "Write at least 8" },
          })}
          placeholder="password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
