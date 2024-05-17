import * as v from "./AddToDictionaryBtn.styled";
import icons from "../../images/icons.svg";

export const AddToDictionaryBtn = ({ id }) => {
  return (
    <v.AddButton type="button" onClick={() => console.log(id)}>
      <v.TextBtn>Add to dictionary</v.TextBtn>
      <v.ArrowIcon>
        <use href={`${icons}#link-arrow`} />
      </v.ArrowIcon>
    </v.AddButton>
  );
};
