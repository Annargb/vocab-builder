import icons from "../../images/icons.svg";
import * as v from "./BurgerMenu.styled";

export const BurgerMenu = ({ openModal }) => {
  return (
    <v.BurgerButton type="button" onClick={() => openModal()}>
      <v.BurgerIcon>
        <use href={`${icons}#burger`} />
      </v.BurgerIcon>
    </v.BurgerButton>
  );
};
