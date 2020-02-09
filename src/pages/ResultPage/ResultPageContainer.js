import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import ResultPage from './ResultPage.js';
import * as selects from '../../redux/questions/questionsSelectors';
import resultsOperations from '../../redux/questions/questionsOperations.js';

class ResultPageContainer extends Component {
  static propTypes = {
    putFinished: T.func.isRequired,
    getResults: T.func.isRequired,
    finished: T.bool.isRequired,
    result: T.shape({
      answeredRight: T.number.isRequired,
      answeredWrong: T.number.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { putFinished } = this.props;
    putFinished();
  }

  componentDidUpdate(prevProps) {
    const { finished, getResults } = this.props;
    if (prevProps.finished !== finished) {
      getResults();
    }
  }

  render() {
    const { result } = this.props;

    return (
      <>
        {result && (
          <ResultPage
            answeredRight={result.answeredRight}
            answeredWrong={result.answeredWrong}
          />
        )}
        {!result && <div> Not Results yet </div>}
      </>
    );
  }
}

const mapStateToProps = state => ({
  finished: selects.getFinishedResults(state),
  result: selects.getResults(state),
});

const mapDispatchToProps = dispatch => ({
  putFinished: () => dispatch(resultsOperations.putResultsFinished()),
  getResults: () => dispatch(resultsOperations.getResultsById()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultPageContainer);
