import icons from "../../images/icons.svg";
import * as v from "./AddWordBtn.styled";

export const AddWordBtn = () => {
  return (
    <v.BtnLinkContainer>
      <v.AddWordBtn type="button">
        <v.Text>Add word</v.Text>
        <v.CommonIcon>
          <use href={`${icons}#plus`} />
        </v.CommonIcon>
      </v.AddWordBtn>

      <v.TrainLink to="/training">
        <v.Text>Train oneself</v.Text>
        <v.CommonIcon>
          <use href={`${icons}#link-arrow`} />
        </v.CommonIcon>
      </v.TrainLink>
    </v.BtnLinkContainer>
  );
};
