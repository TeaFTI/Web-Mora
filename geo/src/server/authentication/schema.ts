import * as z from "zod";

const usernameRule = z.string().min(3).max(20);
const emailRule = z.email().optional();
const passwordRule = z.string().min(16);

const registerSchema = z.object({
  fullName: z.string().min(3),
  email: emailRule,
  username: usernameRule,
  password: passwordRule,
});

const loginSchema = z.object({
  username: usernameRule.or(emailRule),
  password: passwordRule,
});

export { loginSchema, registerSchema };
export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
