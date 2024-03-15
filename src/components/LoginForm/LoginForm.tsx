"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./schema/loginFormSchema";
import { LoginFormSchemaType } from "./types/LoginFormSchemaType";

export function LoginForm() {
  const methods = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (data: LoginFormSchemaType) => {
    console.log(data);
  };

  const { handleSubmit } = methods;

  return (
    <div className="flex justify-center">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 max-w-[600px] grow pt-10"
        >
          <label htmlFor="username">Användarnamn</label>
          <input
            type="text"
            id="username"
            className="border border-gray-300 p-2"
          />
          <label htmlFor="password">Lösenord</label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Logga in
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
