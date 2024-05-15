import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/schemas";
import * as v from "../RegisterForm/RegisterForm.styled";
import { PasswordButton } from "../PasswordButton/PasswordButton";
import { useVisiblePassword } from "../../hooks/useVisiblePassword";
import { FormMessage } from "../FormMessage/FormMessage";
import { useDispatch } from "react-redux";
import { logInUser } from "../../redux/auth/authOperation";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data) => {
    dispatch(logInUser(data));
  };

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

        <v.SubmitButton type="submit">Login</v.SubmitButton>
      </v.Form>
      <v.LinkWrap>
        <v.NavigateLink to="/register">Register</v.NavigateLink>
      </v.LinkWrap>
    </v.FormWrapper>
  );
};
