import { useFormContext } from "react-hook-form";
import { usePasswordAgain } from "../../../hooks/usePasswordAgain";
import { LoginFormSchemaType } from "../types/LoginFormSchemaType";
import { FormError } from "./Error";
import { useState } from "react";

export function LoginFormContent() {
  const { passwordAgainFailed } = usePasswordAgain();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useFormContext<LoginFormSchemaType>();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: LoginFormSchemaType) => {
    if (passwordAgainFailed()) {
      // Manually setting an error for the passwordAgain field
      setError("passwordAgain", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 max-w-[600px] grow pt-10 text-black"
      >
        {/* For each input, register it and display any errors */}
        <label htmlFor="username" className="text-white">Användarnamn</label>
        <input
          {...register("username", { required: "Username is required" })}
          type="text"
          id="username"
          className="border border-gray-300 p-2"
        />
        {errors.username && <FormError>{errors.username.message}</FormError>}

        <label htmlFor="password" className="text-white">Lösenord</label>
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          id="password"
          className="border border-gray-300 p-2"
        />
        {errors.password && <FormError>{errors.password.message}</FormError>}

        <label htmlFor="passwordAgain" className="text-white">Lösenord igen</label>
        <input
          {...register("passwordAgain", {
            required: "Please confirm your password",
          })}
          type="password"
          id="passwordAgain"
          className="border border-gray-300 p-2"
        />
        {errors.passwordAgain && (
          <FormError>{errors.passwordAgain.message}</FormError>
        )}

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Logga in
        </button>
        {submitted && (
          <p className="text-green-500 text-center text-5xl">Form submitted</p>
        )}
      </form>
    </div>
  );
}
