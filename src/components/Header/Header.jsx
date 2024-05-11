// import { NavLink } from "react-router-dom";
import * as v from "./Header.styled";
import icons from "../../images/icons.svg";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { UserBar } from "../UserBar/UserBar";
import { LogOutButton } from "../LogOutButton/LogOutButton";
import { UserNav } from "../UserNav/UserNav";

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <v.Header>
      <v.Logo>
        <v.LogoIcon>
          <use href={`${icons}#logo`} />
        </v.LogoIcon>
        <v.LogoText>VocabBuilder</v.LogoText>
      </v.Logo>
      {isLoggedIn && (
        <>
          <UserNav className="header" />

          <v.UserMenuWrapper>
            <UserBar />
            <BurgerMenu />
            <LogOutButton className="header" />
          </v.UserMenuWrapper>
        </>
      )}
    </v.Header>
  );
};
