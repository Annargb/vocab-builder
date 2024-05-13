import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTotalCount } from "../../redux/dictionary/dictionaryOperations";
import { selectTotalCount } from "../../redux/dictionary/dictionarySelectors";
import * as v from "./Statistics.styled";

export const Statistics = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTotalCount());
  }, [dispatch]);

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
