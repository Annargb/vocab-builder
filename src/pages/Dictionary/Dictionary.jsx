import { useDispatch } from "react-redux";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { useEffect } from "react";
import {
  fetchOwnWords,
  fetchSelectOptions,
} from "../../redux/dictionary/dictionaryOperations";
import {
  setCategory,
  setIsIrregular,
  setKeyword,
} from "../../redux/dictionary/dictionarySlice";

const Dictionary = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSelectOptions());
    dispatch(fetchOwnWords());
  }, [dispatch]);

  return (
    <div>
      <Dashboard
        fetch={fetchOwnWords}
        setCategory={setCategory}
        setIsIrregular={setIsIrregular}
        setKeyword={setKeyword}
      />
    </div>
  );
};

export default Dictionary;
