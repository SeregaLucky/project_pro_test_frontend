export const getResults = state => {
  return state.result.result;
};

export const getResultsById = (state, examId) => {
  const results = getResults(state);

  return results.map(result => result.id === examId);
};
