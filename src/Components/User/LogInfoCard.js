import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions';

class LogInfoCard extends Component {
  render() {
    return (
      <div>
        LogInfoCard
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // const {id} = ownProps.match.params
  return {
    state
  }
};

export default withRouter(connect(
  mapStateToProps,
  actions
)(LogInfoCard));
