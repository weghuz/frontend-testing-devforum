import { z } from "zod";
import { loginFormSchema } from "../../../schema/loginFormSchema";

export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;