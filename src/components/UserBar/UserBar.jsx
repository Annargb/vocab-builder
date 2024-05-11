import { useSelector } from "react-redux";
import * as v from "./UserBar.styled";
import { selectUser } from "../../redux/auth/authSelectors";
import icons from "../../images/icons.svg";

export const UserBar = () => {
  const userName = useSelector(selectUser);

  return (
    <v.UserWrapper>
      <v.UserName>{userName}</v.UserName>
      <v.IconContainer>
        <v.UserIcon>
          <use href={`${icons}#user`} />
        </v.UserIcon>
      </v.IconContainer>
    </v.UserWrapper>
  );
};
