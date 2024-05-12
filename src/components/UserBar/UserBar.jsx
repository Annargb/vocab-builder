import { useSelector } from "react-redux";
import * as v from "./UserBar.styled";
import { selectUser } from "../../redux/auth/authSelectors";
import icons from "../../images/icons.svg";

export const UserBar = ({ className }) => {
  const userName = useSelector(selectUser);

  return (
    <v.UserWrapper className={className}>
      <v.UserName className={className}>{userName}</v.UserName>
      <v.IconContainer className={className}>
        <v.UserIcon className={className}>
          <use href={`${icons}#user`} />
        </v.UserIcon>
      </v.IconContainer>
    </v.UserWrapper>
  );
};
