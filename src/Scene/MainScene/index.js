import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
// import * as actions from '../../actions/index';

class MainScene extends Component {
  render() {
    return (
      <div>
        MainScene
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state
};

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default MainScene = withRouter(connect(
  mapStateToProps,
  null
)(MainScene));
