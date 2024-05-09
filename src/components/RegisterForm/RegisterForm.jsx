import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas/schemas";
import * as v from "./RegisterForm.styled";
import { PasswordButton } from "../PasswordButton/PasswordButton";
import { useVisiblePassword } from "../../hooks/useVisiblePassword";
import { FormMessage } from "../FormMessage/FormMessage";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data) => console.log(data);

  const { isVisiblePassword, changeVisibility } = useVisiblePassword();

  return (
    <v.FormWrapper>
      <v.Title>Register</v.Title>
      <v.SubTitle>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </v.SubTitle>

      <v.Form onSubmit={handleSubmit(onSubmit)}>
        <v.InputContainer>
          <v.Label>
            <v.Input
              {...register("name")}
              type="text"
              placeholder="Name"
              className={errors.name ? "error" : "valid"}
            />
            {errors.name && <FormMessage>{errors.name.message}</FormMessage>}
          </v.Label>

          <v.Label>
            <v.Input
              {...register("email")}
              type="text"
              placeholder="Email"
              className={errors.email ? "error" : "valid"}
            />
            {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
          </v.Label>

          <v.Label>
            <v.Input
              {...register("password")}
              type={isVisiblePassword ? "text" : "password"}
              placeholder="Password"
              className={errors.password ? "error" : "valid"}
            />
            {errors.password && (
              <FormMessage>{errors.password.message}</FormMessage>
            )}
            <PasswordButton
              changeVisibility={changeVisibility}
              isVisiblePassword={isVisiblePassword}
            />
          </v.Label>
        </v.InputContainer>

        <v.SubmitButton type="submit">Register</v.SubmitButton>
      </v.Form>
      <v.LinkWrap>
        <v.NavigateLink to="/login">Login</v.NavigateLink>
      </v.LinkWrap>
    </v.FormWrapper>
  );
};
