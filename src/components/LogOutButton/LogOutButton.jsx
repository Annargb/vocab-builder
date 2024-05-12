import { useDispatch } from "react-redux";
import icons from "../../images/icons.svg";
import * as v from "./LogOutButton.styled";
import { logOutUser } from "../../redux/auth/authOperation";

export const LogOutButton = ({ className, closeModal }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutUser());
    closeModal && closeModal();
  };

  return (
    <v.LogOutBtn
      type="button"
      className={className}
      onClick={handleClick}
      // onClick={() => dispatch(logOutUser())}
    >
      <v.BtnText className={className}>Log out</v.BtnText>
      <v.ArrowIcon className={className}>
        <use href={`${icons}#arrow-right`} />
      </v.ArrowIcon>
    </v.LogOutBtn>
  );
};
