/**
 * Authentication Schema
 */

import * as z from "zod";

const usernameRule = z.string().min(3).max(20);
const emailRule = z.email();

const registerSchema = z
  .object({
    fullName: z.string().min(3),
    email: emailRule,
    username: usernameRule,
    password: z.string().min(16),
    confirmPassword: z.string().min(16),
    salt: z.string().min(16),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password Do Not Match.",
    path: ["confirm-password"],
  });

export { registerSchema };
export type RegisterSchema = z.infer<typeof registerSchema>;
