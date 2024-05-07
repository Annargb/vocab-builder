import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas/schemas";
import * as v from "./RegisterForm.styled";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touched },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <v.Title>Register</v.Title>
      <v.SubTitle>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </v.SubTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <v.InputContainer>
          <v.Label>
            <v.Input
              {...register("name")}
              type="text"
              placeholder="Name"
              className={errors.name ? "error" : "valid"}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </v.Label>

          <v.Label>
            <v.Input
              {...register("email")}
              type="text"
              placeholder="Email"
              className={errors.email ? "error" : "valid"}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </v.Label>

          <v.Label>
            <v.Input
              {...register("password")}
              type="password"
              placeholder="Password"
              className={errors.password ? "error" : "valid"}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </v.Label>
        </v.InputContainer>

        <v.SubmitButton type="submit">Register</v.SubmitButton>
      </form>
    </>
  );
};
