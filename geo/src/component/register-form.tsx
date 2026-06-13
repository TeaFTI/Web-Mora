import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { Button } from "~/_shadcn/interface/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "~/_shadcn/interface/field";
import { Input } from "~/_shadcn/interface/input";
import { registerFn } from "~/server/authentication/authentication";
import { registerSchema } from "~/server/authentication/schema";

export function RegisterForm() {
  const register = useServerFn(registerFn);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleRegister = async ({
    value,
  }: {
    value: {
      fullName: string;
      email: string;
      username: string;
      password: string;
      confirmPassword: string;
      salt?: string;
    };
  }) => {
    setServerError(null);

    const result = await register({
      data: {
        fullName: value.fullName,
        email: value.email,
        username: value.username,
        password: value.password,
        confirmPassword: value.confirmPassword,
        salt: value.salt || "",
      },
    });
    if (result?.error) setServerError(result.error);
  }

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validators: { onChange: registerSchema },
    onSubmit: handleRegister,
  });

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        form.handleSubmit();
      }}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create New User</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Fill in the form below to create a new user.
          </p>
        </div>
        {/* Full Name */}
        <form.Field
          name="fullName"
          children={(field) => {
            const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
                <Input
                  className="bg-background"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  aria-invalid={isInvalid}
                  type="text"
                  placeholder="Full Name"
                  required
                  autoFocus
                />
                {isInvalid && (
                  <FieldError errors={field.state.meta.errors} />
                )}
              </Field>
            )
          }}
        />
        {/* Email */}
        <form.Field
          name="email"
          children={(field) => {
            const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  className="bg-background"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  aria-invalid={isInvalid}
                  type="email"
                  placeholder="email@example.com"
                  required
                />
                {isInvalid && (
                  <FieldError errors={field.state.meta.errors} />
                )}
                <FieldDescription>
                  The Email for the new user.
                </FieldDescription>
              </Field>
            )
          }}
        />
        {/* Username */}
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input
            id="username"
            className="bg-background"
            type="text"
            placeholder="Username"
            required
          />
          <FieldDescription>
            The Username for the new user.
          </FieldDescription>
        </Field>
        {/* Password */}
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            className="bg-background"
            type="password"
            required
          />
          <FieldDescription>
            Must be at least 16 characters long.
          </FieldDescription>
        </Field>
        {/* Confirm Password */}
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
          <Input
            id="confirm-password"
            className="bg-background"
            type="password"
            required
          />
          <FieldDescription>Please confirm the password.</FieldDescription>
        </Field>
        {/* Submit */}
        <Field>
          <Button type="submit">Create User</Button>
        </Field>
        <FieldSeparator>Or</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Sign Up with GitHub
          </Button>
          <FieldDescription className="px-6 text-center">
            Already registered? <Link to="/login">Login</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
};
