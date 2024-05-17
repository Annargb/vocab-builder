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
import { selectRecommendedWords } from "../../redux/recommend/recommendSelectors";
import { AddToDictionaryBtn } from "../../components/AddToDictionaryBtn/AddToDictionaryBtn";
import { TableHeader } from "../../components/TableHeader/TableHeader";

const Recommend = () => {
  const dispatch = useDispatch();
  const recommendedWords = useSelector(selectRecommendedWords);

  useEffect(() => {
    dispatch(fetchRecommendedWords());
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
      <WordsTable columnsData={columnsData} tableData={recommendedWords} />
    </>
  );
};

export default Recommend;
