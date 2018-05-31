import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import style from './style.css'
//
// let aE = document.querySelectorAll('a:not(.notThis)');
//
// [].forEach.call(aE, function (aElement) {
//   'use strict';
//   aElement.onclick = function(e) {
//     e.preventDefault();
//   };
// });


export const Duration = ({time, duration, handleDuration}) => {
  return (
        <div id={duration === time ? 'the17-selected' : ''}
             onClick={() => handleDuration(time)}
        >
          {`${time} MIN`}
        </div>
  )
};

class TimerControl extends Component {

  state = {
    duration : this.props.defaultTime,
    times : [5, 10, 15, 20]
  };

  handleDuration = (time) => {
    const { doChangeActivityDuration } = this.props;
    this.setState({
      duration: time
    });
    return doChangeActivityDuration(time)
  }
  render() {
    const {duration, times} = this.state;
    return (
      <div>
        <section className="the17">
          {times.map(time => {
            return <Duration time={time} duration={duration} handleDuration={this.handleDuration}/>
          })}
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({state}) => {
  return {
    state
  }
};

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })

export default connect(
  mapStateToProps,
  actions
)(TimerControl)

