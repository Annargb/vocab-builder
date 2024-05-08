import icons from "../../images/icons.svg";
import * as v from "./PasswordButton.styled";

export const PasswordButton = ({ isVisiblePassword, changeVisibility }) => {
  return (
    <v.PasswordBtn type="button" onClick={() => changeVisibility()}>
      <v.PasswordIcon>
        {isVisiblePassword ? (
          <use href={`${icons}#eye`} />
        ) : (
          <use href={`${icons}#eye-off`} />
        )}
      </v.PasswordIcon>
    </v.PasswordBtn>
  );
};
