//External Lib Import
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { usePostUserMutation } from "../../redux/services/signup.service";

//Internal Lib Import

const RegisterPage = () => {
    const navigate = useNavigate()
  const [postUser, {data:authResponse}] = usePostUserMutation();
  const [error, setError] = useState(null);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  //   handle form submit
  const submitForm = (values) => {
    setError("");
    if (values.password === values.confirmPassword) {
      setError("");
      postUser(values);
    //   reset()
    } else {
      setError("Must be same your Password and Confirm Password");
    }
  };
//   console.log(authResponse);

// redirect to HomePage
  if(authResponse?.accessToken){
    localStorage.setItem("accessToken", authResponse?.accessToken)
    navigate('/')
  }

  return (
    <div className="min-w-96 max-w-xl mx-auto">
      <form
        className="flex min-h-[70vh] gap-3 justify-center flex-col p-4 "
        onSubmit={handleSubmit(submitForm)}
        onReset={reset}
      >
        <h3 className="text-5xl text-center mb-2 font-bold">Register Here</h3>
        <hr />
        {/* {error && (
          <span className="text-red-500">
            {error?.message || t("something went wrong")}
          </span>
        )} */}
        <input
          className="bg-gray-50 rounded py-1 px-2 border-[1px] focus:outline-sky-500/50"
          type="text"
          placeholder="Name"
          {...register("name")}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
        <input
          className="bg-gray-50 rounded py-1 px-2 border-[1px] focus:outline-sky-500/50"
          type="text"
          placeholder="email"
          {...register("email", { required: "Email Address is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <input
          className="bg-gray-50 rounded py-1 px-2 border-[1px] focus:outline-sky-500/50"
          type="password"
          placeholder="New password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <input
          className="bg-gray-50 rounded py-1 px-2 border-[1px] focus:outline-sky-500/50"
          type="password"
          placeholder="confirm password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
        {error && <p className="text-red-500">{error}</p>}

        <input
          //   disabled={isLoading}
          className="border-[1px] border-red-100 bg-red-50 text-red-400 rounded font-semibold tracking-wider py-1 cursor-pointer hover:bg-red-100"
          type="submit"
          //   value={isLoading ? t("register...") : t("register")}
        />
        <hr />
        <p className="text-gray-500">
          Already have an account?
          <Link
            className="text-cyan-800 hover:underline hover:text-orange-600"
            to="/login"
          >
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
