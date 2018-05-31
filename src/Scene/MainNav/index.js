import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
// import * as actions from '../../actions/index';
import Navigation from '../../Components/Navigation'

class MainNav extends Component {
  render() {
    return (
      <div>
        <h2>Main Navigation</h2>
        <Navigation/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // const { paramId } = ownProps.match.params;
  return {
    state
  }
};

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default MainNav = withRouter(connect(
  mapStateToProps,
  null
)(MainNav));
