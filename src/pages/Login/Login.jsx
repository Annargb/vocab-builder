import { ImageBackground } from "../../components/ImageBackground/ImageBackground";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import * as v from "./Login.styled";

const Login = () => {
  return (
    <v.CommonContainer>
      <ImageBackground />
      <LoginForm />
    </v.CommonContainer>
  );
};

export default Login;
