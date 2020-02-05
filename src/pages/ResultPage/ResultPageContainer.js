import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultPage from './ResultPage.js';
import * as selects from '../../redux/questions/questionsSelectors';
import resultsOperations from '../../redux/questions/questionsOperations.js';

class ResultPageContainer extends Component {
  componentDidMount() {
    const { getResults } = this.props;
    getResults();
    // getFinishedresults
  }

  componentDidUpdate() {
    // getResults(); по условию что есть finished = true
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
  getResults: () => dispatch(resultsOperations.getResultsById()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultPageContainer);
