import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
// import * as actions from '../../actions/index';

class NotFound extends Component {
  render() {
    return (
      <div>
        NotFound
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state;
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default NotFound = withRouter(connect(
  mapStateToProps,
  null
)(NotFound));
