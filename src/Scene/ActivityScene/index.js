import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {getDefaultData} from "../../utils/helper";
import Timer from "../../utils/timer";
// import * as actions from '../../actions/index';

class ActivityScene extends Component {
  state = {
    onStarting : false,
  }

  render() {
    const startActivity = () => {
      this.setState({
        onStarting : true,
      })
    };

    const curActivity = getDefaultData('activities').find(activity =>{
      return activity.name === this.props.activityId
    });
    // user log 에 현재 activityName  없으면 log 를 추가해야 하고
    // log 가 있으면 completed:false 확인하고 currentDay 를 가져옴.

    return (
      <div>
        {
          (!this.state.onStarting)

          ?
            (
              <div>
                <h3>{curActivity.title}</h3>
                <h5>{curActivity.guide}</h5>
                <div>
                  <button onClick={startActivity}>시작</button>
                  <button>{`${curActivity.time} Min`}</button>
                </div>
              </div>
            )
          :
            (
              // 이제 5:00 타이밍 거는거 해야해요
              <div>
                <Timer />
              </div>
            )
        }

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { mindId, category, themeId, activityId } = ownProps.match.params;
  return {
    activityId
  }
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default ActivityScene = withRouter(connect(
  mapStateToProps,
  null
)(ActivityScene));
