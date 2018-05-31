import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import {QuoteCard} from "../Quote/QuoteCard";
import {TimeScoreBoard} from "../User/TimeScoreBoard";
import {unixTimestamp} from "../../utils/formatTools";


class CompletedActivity extends Component {
  componentDidMount() {
    const {doChangeStats, doFetchRandomQuote, runningTime, diffDay} = this.props;
      doChangeStats('user1', runningTime, diffDay, unixTimestamp());
      doFetchRandomQuote();

  }

  render() {
    const { quote, user, activityId } = this.props;
    console.log('updated user', user);
    return (
      <div>
        {
          user && quote && (
            <div>
              <TimeScoreBoard
                user={user}
              />
              <QuoteCard
                userId={user.id}
                quote={quote.quote}
                activityId={activityId}
              />
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const {activityId} = ownProps.match.params;
  return {
    activityId,
    user: state.byUserId['user1'],
    quote: state.byQuoteId[state.quoteIds],
    quoteIds: state.quoteIds,
  }
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default withRouter(connect(
  mapStateToProps,
  actions
)(CompletedActivity));
