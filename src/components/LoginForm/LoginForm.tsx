"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchemaType } from "./types/LoginFormSchemaType";
import { LoginFormContent } from "./components/LoginFormContent";
import { loginFormSchema } from "../../schema/loginFormSchema";

export function LoginForm() {
  const methods = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <FormProvider {...methods}>
      <LoginFormContent />
    </FormProvider>
  );
}
