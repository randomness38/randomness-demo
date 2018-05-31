import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions';
import {getUserLogs} from "../../reducers/user";

class MainScene extends Component {

  componentDidMount(){
    const { doFetchUser } = this.props;
    // doFetchUser('user1')

  }
  render() {
    const log = {
      id: 2,
      activityName:"activity3",
      timestamp: 1469479767190,
      runningTime: 5,
      monkeyGage: 3,
      egoGage: 3,
      doNotTryGage: 1,
      titanGage: 5,
    }
    let log3 = {
      id: 5,
      activityName:"activity4",
      timestamp: 1469479767190,
      runningTime: 5,
      monkeyGage: 3,
      egoGage: 3,
      doNotTryGage: 3,
      titanGage: 3,
    }
    const {
      doFetchAllActivities,
      doFetchActivity,
      doFetchActivitiesByCategory,
      doFetchActivitiesByTheme,
      doFetchCategories,
      doFetchNavigation,
      doFetchAllQuotes,
      doFetchRandomQuote,
      doFetchUser,
      doAddActivityLog,
      doChangeStats,
      user,
    } = this.props;
    // console.log(doAddActivityLog('user1', log3))
    // console.log('hack', API.getUser('user1'));


    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.byUserId['user1']

  }
};

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default MainScene = withRouter(connect(
  mapStateToProps,
  actions
)(MainScene));
