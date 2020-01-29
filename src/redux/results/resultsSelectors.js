export const getResults = state => console.log(state.results);

export const getResultsById = (state, id) => {
  const results = getResults(state);

  return results.map(result => result.id === id);
};
