// import { useDispatch, useSelector } from "react-redux";
// import { Dashboard } from "../../components/Dashboard/Dashboard";
// import { useEffect } from "react";
// import {
//   fetchOwnWords,
//   fetchSelectOptions,
//   fetchTotalCount,
// } from "../../redux/dictionary/dictionaryOperations";
// import {
//   setCategory,
//   setIsIrregular,
//   setKeyword,
// } from "../../redux/dictionary/dictionarySlice";
// import {
//   selectDictionaryFilter,
//   selectIsLoading,
//   selectOwnWord,
// } from "../../redux/dictionary/dictionarySelectors";
// import { NotFoundBlock } from "../../components/NotFoundBlock/NotFoundBlock";
// import { resetFilters } from "../../redux/recommend/recommendSlice";
// import { TableHeader } from "../../components/TableHeader/TableHeader";
// import { WordsTable } from "../../components/WordsTable/WordsTable";
// import { Progress } from "../../components/Progress/Progress";
// import { ButtonPopover } from "../../components/ButtonPopover/ButtonPopover";
// // import { Loader } from "../../components/Loader/Loader";

// const Dictionary = () => {
//   const dispatch = useDispatch();
//   const dictionaryWords = useSelector(selectOwnWord);
//   const filters = useSelector(selectDictionaryFilter);
//   const isLoading = useSelector(selectIsLoading);

//   useEffect(() => {
//     dispatch(fetchSelectOptions());
//     dispatch(fetchOwnWords());
//     dispatch(resetFilters());
//     dispatch(fetchTotalCount());
//   }, [dispatch]);

//   const columnsData = [
//     {
//       Header: () => <TableHeader text={"word"} />,
//       accessor: "en",
//     },
//     {
//       Header: () => <TableHeader text={"translation"} />,
//       accessor: "ua",
//     },
//     {
//       Header: "Category",
//       accessor: "category",
//     },
//     {
//       Header: "Progress",
//       accessor: "progress",
//       Cell: ({ row }) => <Progress progress={row.original.progress} />,
//     },
//     {
//       accessor: "_id",
//       Cell: ({ row }) => (
//         <ButtonPopover id={row.original._id} word={row.original} />
//       ),
//     },
//   ];
//   return (
//     <>
//       {/* {isLoading && <Loader />} */}
//       {dictionaryWords.length !== 0 && !isLoading && (
//         <>
//           <Dashboard
//             fetch={fetchOwnWords}
//             setCategory={setCategory}
//             setIsIrregular={setIsIrregular}
//             setKeyword={setKeyword}
//           />
//           <WordsTable
//             columnsData={columnsData}
//             tableData={dictionaryWords}
//             className="dictionary"
//           />
//         </>
//       )}
//       {dictionaryWords.length === 0 &&
//         !filters.category &&
//         !filters.keyword &&
//         !isLoading && (
//           <>
//             <Dashboard className="dictionary" />
//             <NotFoundBlock
//               title="You don't have words in your dictionary right now."
//               text="Please create or add a word from the recommended list to start learning. We want to improve your vocabulary and expand your knowledge, so please share words you would like to add to your learning."
//             />
//           </>
//         )}
//       {dictionaryWords.length === 0 &&
//         !isLoading &&
//         (filters.category || filters.keyword) && (
//           <>
//             {/* <Dashboard /> */}
//             <NotFoundBlock
//               title="There are no words found in your dictionary for this category."
//               text="Please create or add a word from the list of recommended words for this category to start learning."
//             />
//           </>
//         )}
//     </>
//   );
// };

// export default Dictionary;

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
  // selectIsLoading,
  selectOwnWord,
} from "../../redux/dictionary/dictionarySelectors";
import { NotFoundBlock } from "../../components/NotFoundBlock/NotFoundBlock";
import { resetFilters } from "../../redux/recommend/recommendSlice";
import { TableHeader } from "../../components/TableHeader/TableHeader";
import { WordsTable } from "../../components/WordsTable/WordsTable";
import { Progress } from "../../components/Progress/Progress";
import { ButtonPopover } from "../../components/ButtonPopover/ButtonPopover";
// import { Loader } from "../../components/Loader/Loader";

const Dictionary = () => {
  const dispatch = useDispatch();
  const dictionaryWords = useSelector(selectOwnWord);
  const filters = useSelector(selectDictionaryFilter);
  // const isLoading = useSelector(selectIsLoading);

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
      Cell: ({ row }) => <Progress progress={row.original.progress} />,
    },
    {
      accessor: "_id",
      Cell: ({ row }) => (
        <ButtonPopover id={row.original._id} word={row.original} />
      ),
    },
  ];
  return (
    // return isLoading ? (
    //   <Loader />
    // ) : (
    <>
      {dictionaryWords.length !== 0 &&
        (!filters.keyword || filters.category) && (
          <Dashboard
            fetch={fetchOwnWords}
            setCategory={setCategory}
            setIsIrregular={setIsIrregular}
            setKeyword={setKeyword}
          />
        )}
      {dictionaryWords.length !== 0 ? (
        <>
          {/* <Dashboard
            fetch={fetchOwnWords}
            setCategory={setCategory}
            setIsIrregular={setIsIrregular}
            setKeyword={setKeyword}
          /> */}
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
    </>
  );
};

export default Dictionary;
