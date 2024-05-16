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

const Recommend = () => {
  const dispatch = useDispatch();
  const recommendedWords = useSelector(selectRecommendedWords);

  useEffect(() => {
    dispatch(fetchRecommendedWords());
  }, [dispatch]);

  const columnsData = [
    {
      Header: "Word",
      accessor: "en",
    },
    {
      Header: "Translation",
      accessor: "ua",
    },
    {
      Header: "Category",
      accessor: "category",
    },
    {
      accessor: "_id",
      Cell: ({ row }) => (
        <button onClick={() => console.log(row.original._id)}>
          Додати слово
        </button>
      ),
    },
  ];

  // const tableData = [
  //   {
  //     name: "John Doe",
  //     age: 30,
  //   },
  //   {
  //     name: "Jane Smith",
  //     age: 25,
  //   },
  //   // Додаткові рядки
  // ];

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
