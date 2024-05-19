import { useState } from "react";
import { Pagination, Stack, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectRecommendTotalPages } from "../../redux/recommend/recommendSelectors";

export const WordsPagination = () => {
  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectRecommendTotalPages);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="primary"
          siblingCount={0}
          boundaryCount={1}
          showFirstButton
          showLastButton
        />
      </Stack>
    </Box>
  );
};

// import { useSelector } from "react-redux";
// import { selectRecommendTotalPages } from "../../redux/recommend/recommendSelectors";
// import { useState } from "react";
// import * as v from "./WordsPagination.styled";

// export const WordsPagination = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const totalPages = useSelector(selectRecommendTotalPages);

//   const handlePageClick = (data) => {
//     setCurrentPage(data.selected);
//     console.log(data);
//   };

//   const handleFirstPage = () => {
//     setCurrentPage(1);
//   };

//   const handleLastPage = () => {
//     setCurrentPage(totalPages);
//   };

//   return (
//     <v.PaginationContainer>
//       <v.Button onClick={handleFirstPage} disabled={currentPage === 0}>
//         Перша
//       </v.Button>
//       <v.StyledReactPaginate
//         previousLabel={"Назад"}
//         nextLabel={"Вперед"}
//         breakLabel={"..."}
//         pageCount={totalPages}
//         marginPagesDisplayed={1}
//         pageRangeDisplayed={2}
//         onPageChange={handlePageClick}
//         containerClassName={"pagination"}
//         activeClassName={"active"}
//         previousClassName={"previous"}
//         nextClassName={"next"}
//         breakClassName={"break"}
//       />
//       <v.Button onClick={handleLastPage} disabled={currentPage === totalPages}>
//         Остання
//       </v.Button>
//     </v.PaginationContainer>
//   );
// };
