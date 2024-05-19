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
import {
  selectDictionaryFilter,
  selectOwnWord,
} from "../../redux/dictionary/dictionarySelectors";
import { NotFoundBlock } from "../../components/NotFoundBlock/NotFoundBlock";
import { resetFilters } from "../../redux/recommend/recommendSlice";
import { TableHeader } from "../../components/TableHeader/TableHeader";
import { WordsTable } from "../../components/WordsTable/WordsTable";

const Dictionary = () => {
  const dispatch = useDispatch();
  const dictionaryWords = useSelector(selectOwnWord);
  const filters = useSelector(selectDictionaryFilter);

  useEffect(() => {
    dispatch(fetchSelectOptions());
    dispatch(fetchOwnWords());
    dispatch(resetFilters());
    dispatch(fetchTotalCount());
  }, [dispatch]);

  const columnsData = [
    {
      Header: () => <TableHeader text={"word"} />,
      accessor: "en",
    },
    {
      Header: () => <TableHeader text={"translation"} />,
      accessor: "ua",
    },
    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Progress",
      accessor: "progress",
    },
    {
      accessor: "_id",
      Cell: ({ row }) => (
        <button onClick={() => console.log(row.original._id)}>...</button>
      ),
    },
  ];

  return (
    <div>
      {dictionaryWords.length !== 0 || filters.keyword || filters.category ? (
        <>
          <Dashboard
            fetch={fetchOwnWords}
            setCategory={setCategory}
            setIsIrregular={setIsIrregular}
            setKeyword={setKeyword}
          />
          <WordsTable
            columnsData={columnsData}
            tableData={dictionaryWords}
            className="dictionary"
          />
        </>
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
