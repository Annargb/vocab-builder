import * as v from "./AddToDictionaryBtn.styled";
import icons from "../../images/icons.svg";
import { useDispatch } from "react-redux";
import { addRecommendedWord } from "../../redux/recommend/recommendOperations";
import { fetchTotalCount } from "../../redux/dictionary/dictionaryOperations";

export const AddToDictionaryBtn = ({ id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(id);
    dispatch(addRecommendedWord(id));
    dispatch(fetchTotalCount());
  };

  return (
    <v.AddButton type="button" onClick={handleClick}>
      <v.TextBtn>Add to dictionary</v.TextBtn>
      <v.ArrowIcon>
        <use href={`${icons}#link-arrow`} />
      </v.ArrowIcon>
    </v.AddButton>
  );
};
