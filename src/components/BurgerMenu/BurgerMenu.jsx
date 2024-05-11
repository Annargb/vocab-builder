import icons from "../../images/icons.svg";
import * as v from "./BurgerMenu.styled";

export const BurgerMenu = () => {
  return (
    <v.BurgerButton type="button">
      <v.BurgerIcon>
        <use href={`${icons}#burger`} />
      </v.BurgerIcon>
    </v.BurgerButton>
  );
};
