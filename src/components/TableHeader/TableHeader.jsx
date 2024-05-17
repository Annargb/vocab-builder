import icons from "../../images/icons.svg";
import * as v from "./TableHeader.styled";

export const TableHeader = ({ text }) => {
  const icon = text === "word" ? "uk" : "ukraine";

  return (
    <v.HeadContainer>
      <v.HeadText>{text}</v.HeadText>
      <v.CountryIcon>
        <use href={`${icons}#${icon}`} />
      </v.CountryIcon>
    </v.HeadContainer>
  );
};
