import { useDispatch } from "react-redux";
import icons from "../../images/icons.svg";
import * as v from "./LogOutButton.styled";
import { logOutUser } from "../../redux/auth/authOperation";

export const LogOutButton = ({ className }) => {
  const dispatch = useDispatch();

  return (
    <v.LogOutBtn
      type="button"
      className={className}
      onClick={() => dispatch(logOutUser())}
    >
      <span>Log out</span>
      <v.ArrowIcon>
        <use href={`${icons}#arrow-right`} />
      </v.ArrowIcon>
    </v.LogOutBtn>
  );
};
