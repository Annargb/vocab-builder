import { ImageBackground } from "../../components/ImageBackground/ImageBackground";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import * as v from "./Register.styled";

const Register = () => {
  return (
    <v.CommonContainer>
      <ImageBackground $register={true} />
      <RegisterForm />
    </v.CommonContainer>
  );
};

export default Register;
