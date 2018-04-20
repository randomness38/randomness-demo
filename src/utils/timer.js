import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {getDefaultData} from "./helper";

const Header = () => (
  <header>
    <h1>React Timer</h1>
  </header>
)

const ButtonGroup = (props) => (
  <div>
    <span onClick={props.onStart}>{props.stopped ? 'Start' : 'Pause'}</span>
    <span onClick={props.onReset}>Reset</span>
  </div>
)

class Timer extends Component {
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  state = {
    activityTime: 1,
    seconds: 0,
    stopped: true
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
          onReset={() => this.handleReset()}
          stopped={this.state.stopped}
        />
        <div>{lapseMin}</div>
        <div>{this.state.activityTime}</div>
        {

          (lapseMin === this.state.activityTime)
          ? this.props.history.push(`/log/${activityId}/${userId}`)
          : (
              <div>
                {minutes} : {seconds}
              </div>
            )
        }

      </div>
    )
  }
}

export default withRouter(Timer)
