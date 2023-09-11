//External Lib Import
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "devoloper.sujon@gmail.com",
      password: "pass123456",
    },
  });

  /*
   * form handle submit
   */
  const submitForm = (values) => {
    // login(values);
  };

  return (
    <div className="w-96 mx-auto">
        <form
      className="flex min-h-[70vh] gap-3 justify-center flex-col p-4 "
      onSubmit={handleSubmit(submitForm)}
      onReset={reset}
    >
      <h3 className="text-5xl text-center mb-2 font-bold">Login Here</h3>
      <hr />

      {/* {error && (
        <span className="text-red-500">
          {error?.message || t("something went wrong")}
        </span>
      )} */}

      <input
        className="bg-gray-50 rounded py-1 px-2 border-[1px] focus:outline-sky-500/50"
        type="email"
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}

      <input
        className="bg-gray-50 rounded py-1 px-2 border-[1px] focus:outline-sky-500/50"
        type="password"
        placeholder="password"
        {...register("password", { required: "Password is required" })}
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}

      <input
        // disabled={isLoading}
        className="border-[1px] border-red-100 bg-red-50 text-red-400 rounded font-semibold tracking-wider py-1 cursor-pointer hover:bg-red-100"
        type="submit"
        // value={isLoading ? "login..." : t("login")}
      />
      <hr />
      <p className="text-gray-500">
        {`Don't have an account?`}{" "}
        <Link
          className="text-cyan-800 hover:underline hover:text-orange-600"
          to="/register"
        >
          Register Here
        </Link>
      </p>
    </form>
    </div>
  );
};

export default Login;
