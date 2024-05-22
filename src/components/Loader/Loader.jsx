import * as v from "./Loader.styled";
import icons from "../../images/icons.svg";

export const Loader = () => {
  return (
    <v.LoaderContainer>
      <v.LoaderIcon>
        <use href={`${icons}#logo`} />
      </v.LoaderIcon>
    </v.LoaderContainer>
  );
};
