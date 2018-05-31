import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import { ActivityControl } from "../../Components/Activity/ActivityControl";
import { RunningActivity } from "../../Components/Activity/RunningActivity";
import CompletedActivity from "../../Components/Activity/CompletedActivity";
import {ActivityCard} from "../../Components/Activity/ActivityCard";
import moment from 'moment'
import TimerProgress from "../../Components/Activity/TimerProgress";

class ActivityScene extends Component {

  componentDidMount() {
    const { doFetchActivity, doChangeStats, doFetchUser, activityId } = this.props;
    doFetchUser('user1');
    doFetchActivity(activityId);

    // TODO: yesterday setting 하고 activity 최종 시뮬레이션 하기
    // month/ day 는 인덱스 단위로 표기
    // let yesterday = moment(new Date(2018, 3, 25));
    // let diffDay = moment().diff(yesterday, "days");
    // console.log('diffDay',diffDay);
    // console.log(doChangeStats('user1', 4, diffDay, yesterday));

  }

  state = {
    isRunning: false,
    isCompleted: false,
  };

  handleRunning = () => {
    this.setState({  isRunning : !this.state.isRunning })
  };


  handleCompleted = () => {
    this.setState({  isCompleted : !this.state.isCompleted })
  };

  //TODO: handleTimer() 추가하기

  render() {
    const {activity, duration, user} = this.props;
    const {isRunning, isCompleted } = this.state;
    let diffDay = moment().diff(user && user.lastDate , "days");
    console.log(diffDay);
    return (
      <div>
        {
          // activity 시작 버튼 클릭! Activity Running 화면으로 전환
          !isRunning && !isCompleted && (
            <div>
              <h3>Activity Card</h3>
              <ActivityCard
                activity={activity}
              />
              <h3>ActivityControl</h3>
              <ActivityControl
                activity={activity}
                isRunning={this.handleRunning}
              />
              {/*<p>{this.state.isRunning}</p>*/}
            </div>
          )
        }

        {
          // activity 시작 전
          isRunning && !isCompleted && duration && (
            <div>
              <h3>Running Activity</h3>
              <RunningActivity
                runningTime={duration}
                activity={activity}
                isCompleted={this.handleCompleted}
              />
            </div>
          )
        }


        {
          // Completed Activity
          isRunning && isCompleted && (
            <div>
              <h3>Completed Activity</h3>
              <CompletedActivity
                runningTime={duration}
                diffDay={diffDay}
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
    activity: state.byActivityId[activityId],
    user: state.byUserId['user1'],
    activityId,
    duration: state.duration,
  }
};

export default ActivityScene = withRouter(connect(
  mapStateToProps,
  actions
)(ActivityScene));
