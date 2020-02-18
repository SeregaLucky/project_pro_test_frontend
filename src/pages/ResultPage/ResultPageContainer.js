import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import routes from '../../routes';
import ResultPage from './ResultPage';
import selects from '../../redux/questions/questionsSelectors';
import globalSelectors from '../../redux/global/globalSelectors';
import resultsOperations from '../../redux/questions/questionsOperations.js';
import { ToastContainer, toast } from 'react-toastify';
import styles from './ResultPage.module.css';
import 'react-toastify/dist/ReactToastify.css';

const ResultPageContainer = () => {
  const finished = useSelector(state => selects.getFinishedResults(state));
  const result = useSelector(state => selects.getResults(state));
  const isResultSended = useSelector(state => selects.getIsResultSended(state));
  const error = useSelector(state => selects.getError(state));
  const isLoading = useSelector(state => globalSelectors.getIsLoading(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resultsOperations.putResultsFinished());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (finished) {
      toast.success('Update test result success', { autoClose: 2000 });
      dispatch(resultsOperations.getResultsById());
    }
    if (error) {
      toast.error('Error with server, try again later!', { autoClose: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  return (
    <>
      {result && (
        <ResultPage
          answeredRight={result.answeredRight}
          answeredWrong={result.answeredWrong}
        />
      )}

      {!isResultSended && <Redirect to={routes.MAIN_PAGE} />}

      {isLoading && <div className={styles.section}></div>}

      <ToastContainer />
    </>
  );
};

export default ResultPageContainer;
