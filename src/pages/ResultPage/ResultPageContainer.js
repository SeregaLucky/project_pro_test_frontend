import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import routes from '../../routes';
import ResultPage from './ResultPage';
import selects from '../../redux/questions/questionsSelectors';
import resultsOperations from '../../redux/questions/questionsOperations.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResultPageContainer = () => {
  const finished = useSelector(state => selects.getFinishedResults(state));
  const result = useSelector(state => selects.getResults(state));
  const isResultSended = useSelector(state => selects.getIsResultSended(state));
  const error = useSelector(state => selects.getError(state));

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
      <ToastContainer />
    </>
  );
};

export default ResultPageContainer;

// class ResultPageContainer extends Component {
//   static defaultProps = {
//     result: null,
//     getIsResultSended: null,
//     error: null,
//   };

//   static propTypes = {
//     putFinished: T.func.isRequired,
//     getResults: T.func.isRequired,
//     getIsResultSended: T.shape({}),
//     finished: T.bool.isRequired,
//     result: T.shape({
//       answeredRight: T.number.isRequired,
//       answeredWrong: T.number.isRequired,
//     }),
//     error: T.string,
//   };

//   componentDidMount() {
//     const { putFinished } = this.props;
//     putFinished();
//   }

//   componentDidUpdate(prevProps) {
//     const { finished, getResults, error } = this.props;
//     if (prevProps.finished !== finished) {
//       toast.success('Update test result success', { autoClose: 2000 });
//       getResults();
//     } else if (error) {
//       toast.error('Error with server, try again later!', { autoClose: false });
//       return;
//     }
//   }

//   render() {
//     const { result, isResultSended } = this.props;

//     return (
//       <>
//         {result && (
//           <ResultPage
//             answeredRight={result.answeredRight}
//             answeredWrong={result.answeredWrong}
//           />
//         )}
//         {!isResultSended && <Redirect to={routes.MAIN_PAGE} />}
//         <ToastContainer />
//       </>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   finished: selects.getFinishedResults(state),
//   result: selects.getResults(state),
//   isResultSended: selects.getIsResultSended(state),
//   error: selects.getError(state),
// });

// const mapDispatchToProps = dispatch => ({
//   putFinished: () => dispatch(resultsOperations.putResultsFinished()),
//   getResults: () => dispatch(resultsOperations.getResultsById()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ResultPageContainer);
