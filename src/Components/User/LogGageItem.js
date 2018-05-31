import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions';
import style from './style.css'

const getPositions = (n, sel) => {
  return n.map((slide, i) => `${(i - sel) * 105}%` )
};

const Slide = ({handleClick, index, selected, x, onUpdateLog}) => {
  return (
    <div>
      <div
        className={`slide ${selected? 'slide--focus' : ''}`}
        style={{transform: `translateX(${x})`}}
        onClick={() => handleClick(index)}
      >
        <p>{selected? index + 1 : ''}</p>
      </div>
    </div>
  )
}

class LogGageItem extends Component {

  state = {
    index: 2,
    positions: getPositions(this.props.slides, 2)
  };

  handleSlideClick = (index) => {
    const { filedName, handleGage } = this.props;
    this.setState({
      index,
      positions: getPositions(this.props.slides, index)
    });
    handleGage(filedName, index + 1)
  };

  render() {
    const { filedName, handleGage } = this.props;
    return (
      <div className='slider_container'>
        <h4>{filedName}</h4>
        <div className="slider">

          {
            this.state.positions.map(
              (pos, i) =>
                <Slide
                x={pos}
                handleClick={this.handleSlideClick}
                index={i}
                selected={i===this.state.index}

                />
            )
          }
        </div>
      </div>

    );
  }
}

export default LogGageItem
