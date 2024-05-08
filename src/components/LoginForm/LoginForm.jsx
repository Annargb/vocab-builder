import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/schemas";
import * as v from "../RegisterForm/RegisterForm.styled";
import { PasswordButton } from "../PasswordButton/PasswordButton";
import { useVisiblePassword } from "../../hooks/useVisiblePassword";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data) => console.log(data);

  const { isVisiblePassword, changeVisibility } = useVisiblePassword();

  return (
    <v.FormWrapper>
      <v.Title>Login</v.Title>
      <v.SubTitle>
        Please enter your login details to continue using our service:
      </v.SubTitle>

      <v.Form onSubmit={handleSubmit(onSubmit)}>
        <v.InputContainer>
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
              type={isVisiblePassword ? "text" : "password"}
              placeholder="Password"
              className={errors.password ? "error" : "valid"}
            />
            {errors.password && <span>{errors.password.message}</span>}
            <PasswordButton
              changeVisibility={changeVisibility}
              isVisiblePassword={isVisiblePassword}
            />
          </v.Label>
        </v.InputContainer>

        <v.SubmitButton type="submit">Login</v.SubmitButton>
      </v.Form>
      <v.NavigateLink to="/register">Register</v.NavigateLink>
    </v.FormWrapper>
  );
};
