import icons from "../../images/icons.svg";
import * as v from "./AddWordBtn.styled";

export const AddWordBtn = ({ className }) => {
  return (
    <v.BtnLinkContainer>
      <v.AddWordBtn type="button" className={className}>
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
