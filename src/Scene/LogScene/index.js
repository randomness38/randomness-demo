import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import Slider from 'material-ui/Slider';
import LogInfoCard from "../../Components/User/LogInfoCard";
import LogForm from "../../Components/User/LogForm";
import * as actions from '../../actions/index';


class LogScene extends Component {
  componentDidMount() {
    const {doFetchAllActivities} = this.props;
    doFetchAllActivities();
  }

  state = {
    slider: 0
  };

  handleSlider = (event, value) => {
    this.setState({slider: value * 10});
  };

  render() {
    const {activityId, activity} = this.props;
    console.log(typeof activity.time)
    return (
      <div >
        <LogInfoCard />
        {
          activity && (
            <LogForm
              activityName={activity.title}
              runningTime={activity.time}
            />
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
    activity: state.byActivityId[activityId]
  }
};

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default LogScene = withRouter(connect(
  mapStateToProps,
  actions
)(LogScene));
