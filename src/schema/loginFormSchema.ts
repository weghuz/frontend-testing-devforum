import { z } from "zod";

export const loginFormSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(8).max(20),
    passwordAgain: z.string().min(8).max(20),
});