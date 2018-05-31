import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
// import * as actions from '../../actions/index';
import Category from '../../Components/Category'

class SubNav extends Component {
  render() {
    return (
      <div>
        <h2>Sub Navigation</h2>
        <Category />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

};

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default SubNav = withRouter(connect(
  mapStateToProps,
  null
)(SubNav));
