export const getResults = state => state.results;

export const getResultsById = (state, id) => {
  const results = getResults(state);

  return results.map(result => result.id === id);
};
