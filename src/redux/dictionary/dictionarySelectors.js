export const selectOptions = (state) => state.dictionary.selectOptions;
export const selectTotalCount = (state) => state.dictionary.totalCount;
export const selectDictionaryFilter = (state) =>
  state.dictionary.dictionaryFilter;
export const selectOwnWord = (state) => state.dictionary.ownWords;
export const selectIsLoading = (state) => state.dictionary.isLoading;
export const selectError = (state) => state.dictionary.error;
