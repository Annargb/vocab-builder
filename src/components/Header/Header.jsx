// import { NavLink } from "react-router-dom";
import * as v from "./Header.styled";
import icons from "../../images/icons.svg";

export const Header = () => {
  return (
    <v.Header>
      <v.Logo>
        <v.LogoIcon>
          <use href={`${icons}#logo`} />
        </v.LogoIcon>
        <v.LogoText>VocabBuilder</v.LogoText>
      </v.Logo>
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/nannies">Nannies</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav> */}
    </v.Header>
  );
};
