import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import LogGageItem from "./LogGageItem";
import {generateId, unixTimestamp} from "../../utils/formatTools";


class LogForm extends Component {

  // componentDidMount() {
  //   const {doFetchAllActivities, activityId, time} = this.props;
  //   doFetchAllActivities();
  //   // this.setState({
  //   //   activityName: activityId,
  //   //   runningTime: time
  //   // })
  // }

  state = {
    id: generateId(),
    activityName: this.props.activityName,
    runningTime: this.props.runningTime,
    timestamp: unixTimestamp(),
    monkeyGage : 1,
    egoGage: 1,
    doNotTryGage: 1,
    titanGage: 1,
  };

  handleGage = ( fieldName, gage ) => {
    this.setState({ [fieldName]: gage})
  };

  handleSubmit = () => {
    const activityLog = {
      id: this.state.id,
      activityName: this.state.activityName,
      runningTime: this.props.duration,
      timestamp: this.state.timestamp,
      monkeyGage: this.state.monkeyGage,
      egoGage: this.state.egoGage,
      doNotTryGage: this.state.doNotTryGage,
      titanGage: this.state.titanGage,
    };

    const {doAddActivityLog, doChangeStats} = this.props;
    return doAddActivityLog('user1', activityLog)
          // .then(() => {
          //   doChangeStats('user1', activityLog.runningTime, true, activityLog.timestamp)
          // })
          .then( () => {
            this.props.history.push(`/discovery`);
          })


  };


  render() {
    const LogFields = ['monkeyGage', 'egoGage', 'doNotTryGage', 'titanGage'];
    return (
      <div>
        {
          LogFields.map(filed => {
            return (
              <LogGageItem
                key={filed}
                slides={[1,1,1,1,1]}
                filedName={filed}
                handleGage={this.handleGage}
              />
            )
          })
        }
        <button onClick={() => this.handleSubmit()}>SUBMIT</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {activityId} = ownProps.match.params;
  return {
    activityId,
    duration: state.duration,
  }
};

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default withRouter(connect(
  mapStateToProps,
  actions
)(LogForm));
