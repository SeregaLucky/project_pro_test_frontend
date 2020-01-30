export const getResults = state => {
  return state.result;
};

export const getResultsById = (state, id) => {
  const results = getResults(state);

  return results.map(result => result.id === id);
};
