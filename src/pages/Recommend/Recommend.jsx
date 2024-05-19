import { useDispatch, useSelector } from "react-redux";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { useEffect } from "react";
import { fetchRecommendedWords } from "../../redux/recommend/recommendOperations";
import {
  setCategory,
  setIsIrregular,
  setKeyword,
} from "../../redux/recommend/recommendSlice";
import { WordsTable } from "../../components/WordsTable/WordsTable";
import {
  selectRecommendFilter,
  selectRecommendedWords,
} from "../../redux/recommend/recommendSelectors";
import { AddToDictionaryBtn } from "../../components/AddToDictionaryBtn/AddToDictionaryBtn";
import { TableHeader } from "../../components/TableHeader/TableHeader";
import { NotFoundBlock } from "../../components/NotFoundBlock/NotFoundBlock";
import { fetchTotalCount } from "../../redux/dictionary/dictionaryOperations";
// import { WordsPagination } from "../../components/WordsPagination/WordsPagination";

const Recommend = () => {
  const dispatch = useDispatch();
  const recommendedWords = useSelector(selectRecommendedWords);
  const filters = useSelector(selectRecommendFilter);

  useEffect(() => {
    dispatch(fetchRecommendedWords());
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
      accessor: "_id",
      Cell: ({ row }) => <AddToDictionaryBtn id={row.original._id} />,
    },
  ];

  return (
    <>
      <Dashboard
        className="recommend"
        fetch={fetchRecommendedWords}
        setCategory={setCategory}
        setIsIrregular={setIsIrregular}
        setKeyword={setKeyword}
      />
      {recommendedWords.length !== 0 && (
        <>
          <WordsTable columnsData={columnsData} tableData={recommendedWords} />
          {/* <WordsPagination /> */}
        </>
      )}

      {(filters.keyword || filters.category) &&
        recommendedWords.length === 0 && (
          <NotFoundBlock
            title="Sorry, we did not find words in our database according to your request."
            text="Try searching for other words or add the desired word to your dictionary for further study."
          />
        )}
    </>
  );
};

export default Recommend;
