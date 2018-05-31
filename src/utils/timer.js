import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {getDefaultData} from "./helper";
import { Circle } from 'rc-progress';


const Header = () => (
  <header>
    <h1>React Timer</h1>
  </header>
)

const ButtonGroup = ({onStart, stopped}) => (
  <div>
    <span onClick={onStart}>{stopped ? 'Start' : 'Pause'}</span>
    {/*<span onClick={props.onReset}>Reset</span>*/}
  </div>
)

class Timer extends Component {
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  state = {
    activityTime: this.props.runningTime,
    percent: 0,
    stopped: true,
    seconds: 0,
  };

  tick() {
    this.setState({
      seconds: this.state.seconds + 1
    })
  }

  handleStart() {
    if (this.state.stopped) {
      this.timerID = setInterval(() => this.tick(), 1000)
      this.setState({ stopped: false })
    } else {
      clearInterval(this.timerID)
      this.setState({ stopped: true })
    }
  }

  handleReset() {
    clearInterval(this.timerID)
    this.setState({ seconds: 0, stopped: true })
  }

  correctValueFormat(value) {
    return value < 10 ? '0' + value : value
  }

  transformTime() {
    const current = this.state.seconds;
    // const hours = Math.floor((current % (60 * 60 * 24)) / (60 * 60))
    const minutes = Math.floor((current % (60 * 60)) / 60);
    const seconds = Math.floor((current % 60));

    return {
      // hours: this.correctValueFormat(hours),
      minutes: this.correctValueFormat(minutes),
      seconds: this.correctValueFormat(seconds)
    }
  }

  handleTimePercentage = () => {
    let runningSec = this.state.activityTime * 60;
    let percent = (this.state.seconds / runningSec) * 100;
    return percent
  };


  render(){
    const { minutes, seconds } = this.transformTime();
    const { activityId } = this.props.match.params;
    const userId = getDefaultData('user')[0].id;
    const lapseMin = Math.floor((this.state.seconds % (60 * 60)) / 60);
    return (

      <div>
        <Header />
        <ButtonGroup
          onStart={() => this.handleStart()}
          // onReset={() => this.handleReset()}
          stopped={this.state.stopped}
        />
        <div>{lapseMin}</div>
        <div>{this.state.activityTime}</div>
        {

          (lapseMin === this.state.activityTime)
          // ? this.props.history.push(`/discover`)
          ? this.props.isCompleted()
          : (
              <div>
                <p>{`${minutes} : ${seconds}`}</p>
                <Circle style={{width: 300}} trailWidth={30} percent={this.handleTimePercentage()} strokeWidth="30" strokeColor="blue" />
              </div>
            )
        }

      </div>
    )
  }
}

export default withRouter(Timer)
