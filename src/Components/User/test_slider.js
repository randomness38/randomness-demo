import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions';

const getPositions = (n, sel) => {
  return n.map((slide, i) => `${(i - sel) * 105}%` )
};

const Slide = ({handleClick, index, selected, x}) => {
  return (
    <div>
      <div
        className={`slide ${selected? 'slide--focus' : ''}`}
        style={{transform: `translateX(${x})`}}
        onClick={ (e) => handleClick(index)}
      />
    </div>
  )
}


class Silder extends Component {

  state = {
    index: 1,
    positions: getPositions(this.props.slides, 1)
  }

  handleSlideClick (index) {
    this.setState({
      index,
      positions: getPositions(this.props.slides, index)
    })
  }

  render() {

    return (
      <div className="slider">
        {
          this.state.positions.map(
            (pos, i) => <Slide x={pos} handleClick={this.handleSlideClick} index={i} selected={i===this.state.index} />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = ({state}) => {
  return {
    state
  }
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })

export default connect(
  mapStateToProps,
  {actions}
)(Slider)

