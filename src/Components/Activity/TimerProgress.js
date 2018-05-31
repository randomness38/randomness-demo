import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Circle } from 'rc-progress';

import * as actions from '../../actions/index'



class TimerProgress extends Component {
  state = {
    percent: 0,
  };

  handlePercent = () => {
    const { percent } = this.state;
    percent !== 100 &&
      this.setState({  percent : this.state.percent + 1 });
  };

  render() {
    return(
      <div className='Slider'>
        <Circle percent={this.state.percent} strokeWidth="4" strokeColor="blue" />n
        <button onClick={() => this.handlePercent()}>time start</button>
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
)(TimerProgress)
