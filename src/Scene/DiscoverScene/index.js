import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
// import * as actions from '../../actions/index';

class DiscoverScene extends Component {
  render() {
    return (
      <div>
        DiscoverScene
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
 return state
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default DiscoverScene = withRouter(connect(
  mapStateToProps,
  null
)(DiscoverScene));
