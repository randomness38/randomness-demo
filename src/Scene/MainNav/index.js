import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {getDefaultData} from "../../utils/helper";
// import * as actions from '../../actions/index';

class MainNav extends Component {
  render() {
    const defaultData = getDefaultData('navigation');
    const userData = getDefaultData('user');
    return (
      <div>
        {defaultData.map( nav => {
          return <div key={nav.id}>
            <Link to={`/${nav.name === 'myRandom' ? `myRandom/${userData[0].userName}`: nav.path}`}
            >
              {nav.name}
            </Link>
          </div>
        })}
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


export default MainNav= withRouter(connect(
  mapStateToProps,
  null,
)(MainNav));
