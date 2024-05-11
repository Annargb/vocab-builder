import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas/schemas";
import * as v from "./RegisterForm.styled";
import { PasswordButton } from "../PasswordButton/PasswordButton";
import { useVisiblePassword } from "../../hooks/useVisiblePassword";
import { FormMessage } from "../FormMessage/FormMessage";

export const RegisterForm = ({ $register }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    // mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data) => console.log(data);

  const { isVisiblePassword, changeVisibility } = useVisiblePassword();

  return (
    <v.FormWrapper>
      <v.Title>Register</v.Title>
      <v.SubTitle $register={$register}>
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
              className={
                dirtyFields.name || errors.name
                  ? errors.name
                    ? "error"
                    : "valid"
                  : ""
              }
            />
            {console.log(errors.name)}
            {(dirtyFields.name || errors.name) && (
              <FormMessage error={errors.name !== undefined}>
                {errors.name?.message || "Success name"}
              </FormMessage>
            )}
          </v.Label>

          <v.Label>
            <v.Input
              {...register("email")}
              type="text"
              placeholder="Email"
              className={
                dirtyFields.email || errors.email
                  ? errors.email
                    ? "error"
                    : "valid"
                  : ""
              }
            />
            {(dirtyFields.email || errors.email) && (
              <FormMessage error={errors.email !== undefined}>
                {errors.email?.message || "Success email"}
              </FormMessage>
            )}
          </v.Label>

          <v.Label>
            <v.Input
              {...register("password")}
              type={isVisiblePassword ? "text" : "password"}
              placeholder="Password"
              className={
                dirtyFields.password || errors.password
                  ? errors.password
                    ? "error"
                    : "valid"
                  : ""
              }
            />
            <PasswordButton
              changeVisibility={changeVisibility}
              isVisiblePassword={isVisiblePassword}
            />
            {(dirtyFields.password || errors.password) && (
              <FormMessage error={errors.password !== undefined}>
                {errors.password?.message || "Success password"}
              </FormMessage>
            )}
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
