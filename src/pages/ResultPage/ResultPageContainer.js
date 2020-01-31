import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultPage from './ResultPage.js';
import * as selects from '../../redux/results/resultsSelectors.js';
import resultsOperations from '../../redux/results/resultsOperations.js';

class ResultPageContainer extends Component {
  componentDidMount() {
    const examId = '5e2ee3be933b4f3b74d81d92';
    const { getResults } = this.props;
    getResults(examId);
  }
  render() {
    const { result } = this.props;

    return (
      result && (
        <ResultPage
          answeredRight={result.answeredRight}
          answeredWrong={result.answeredWrong}
        />
      )
    );
  }
}

const mapStateToProps = state => ({
  result: selects.getResults(state),
});

const mapDispatchToProps = dispatch => ({
  getResults: examId => dispatch(resultsOperations.getResultsById(examId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultPageContainer);