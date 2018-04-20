import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
// import * as actions from '../../actions/index';

class UserScene extends Component {
  render() {
    return (
      <div>
        UserScene
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

};

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default UserScene = withRouter(connect(
  mapStateToProps,
  null
)(UserScene));
