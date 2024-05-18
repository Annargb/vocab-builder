import { useDispatch, useSelector } from "react-redux";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { useEffect } from "react";
import {
  fetchOwnWords,
  fetchSelectOptions,
  fetchTotalCount,
} from "../../redux/dictionary/dictionaryOperations";
import {
  setCategory,
  setIsIrregular,
  setKeyword,
} from "../../redux/dictionary/dictionarySlice";
import { selectOwnWord } from "../../redux/dictionary/dictionarySelectors";
import { NotFoundBlock } from "../../components/NotFoundBlock/NotFoundBlock";
import { resetFilters } from "../../redux/recommend/recommendSlice";

const Dictionary = () => {
  const dispatch = useDispatch();
  const dictionaryWords = useSelector(selectOwnWord);

  useEffect(() => {
    dispatch(fetchSelectOptions());
    dispatch(fetchOwnWords());
    dispatch(resetFilters());
    dispatch(fetchTotalCount());
  }, [dispatch]);

  return (
    <div>
      {dictionaryWords.length !== 0 ? (
        <Dashboard
          fetch={fetchOwnWords}
          setCategory={setCategory}
          setIsIrregular={setIsIrregular}
          setKeyword={setKeyword}
        />
      ) : (
        <>
          <Dashboard className="dictionary" />
          <NotFoundBlock
            title="You don't have words in your dictionary right now."
            text="Please create or add a word to start learning. We want to improve your vocabulary and expand your knowledge, so please share words you would like to add to your learning."
          />
        </>
      )}
    </div>
  );
};

export default Dictionary;
