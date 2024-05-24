import { useSelector } from "react-redux";
import { selectTotalCount } from "../../redux/dictionary/dictionarySelectors";
import * as v from "./Statistics.styled";

export const Statistics = () => {
  const totalCount = useSelector(selectTotalCount);
  return (
    <>
      <v.TotalCount>
        To study:
        <v.Accent> {totalCount}</v.Accent>
      </v.TotalCount>
    </>
  );
};
