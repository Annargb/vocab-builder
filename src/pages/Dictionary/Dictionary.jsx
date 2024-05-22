import { useDispatch, useSelector } from "react-redux";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { useEffect } from "react";
import {
  fetchOwnWords,
  // fetchSelectOptions,
  // fetchTotalCount,
} from "../../redux/dictionary/dictionaryOperations";
import {
  setCategory,
  setIsIrregular,
  setKeyword,
} from "../../redux/dictionary/dictionarySlice";
import {
  selectDictionaryFilter,
  // selectIsLoading,
  selectOwnWord,
} from "../../redux/dictionary/dictionarySelectors";
import { NotFoundBlock } from "../../components/NotFoundBlock/NotFoundBlock";
import { resetFilters } from "../../redux/recommend/recommendSlice";
import { TableHeader } from "../../components/TableHeader/TableHeader";
import { WordsTable } from "../../components/WordsTable/WordsTable";
import { Progress } from "../../components/Progress/Progress";
import { useModalState } from "../../hooks/useModalState";
import { CommonModal } from "../../components/CommonModal/CommonModal";
import { AddWordForm } from "../../components/AddWordForm/AddWordForm";
// import { Loader } from "../../components/Loader/Loader";

const Dictionary = () => {
  const dispatch = useDispatch();
  const dictionaryWords = useSelector(selectOwnWord);
  const filters = useSelector(selectDictionaryFilter);
  // const isLoading = useSelector(selectIsLoading);
  const { isModalOpen, openModal, closeModal } = useModalState();

  useEffect(() => {
    // dispatch(fetchSelectOptions());
    dispatch(fetchOwnWords());
    dispatch(resetFilters());
    // dispatch(fetchTotalCount());
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
      Cell: ({ row }) => <Progress progress={row.original.progress} />,
    },
    {
      accessor: "_id",
      Cell: ({ row }) => (
        <button onClick={() => console.log(row.original._id)}>...</button>
      ),
    },
  ];
  return (
    // return isLoading ? (
    //   <Loader />
    // ) : (
    <div>
      {dictionaryWords.length !== 0 || filters.keyword || filters.category ? (
        <>
          <Dashboard
            fetch={fetchOwnWords}
            setCategory={setCategory}
            setIsIrregular={setIsIrregular}
            setKeyword={setKeyword}
            openModal={openModal}
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
      <CommonModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        className="addWord"
      >
        <AddWordForm closeModal={closeModal} />
      </CommonModal>
    </div>
  );
};

export default Dictionary;
