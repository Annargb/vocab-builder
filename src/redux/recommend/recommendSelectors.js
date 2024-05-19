export const selectRecommendFilter = (state) => state.recommend.recommendFilter;
export const selectRecommendedWords = (state) =>
  state.recommend.recommendedWords;
export const selectPage = (state) => state.recommend.page;
export const selectRecommendTotalPages = (state) => state.recommend.totalPages;
export const selectIsLoading = (state) => state.recommend.isLoading;
