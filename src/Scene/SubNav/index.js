import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {getDefaultData} from "../../utils/helper";

// import * as actions from '../../actions/index';

class SubNav extends Component {
  render() {
    const categoryData = getDefaultData('categories');
    const themeData = getDefaultData('themes');
    const filteredTheme = (filter) => {
      return themeData.filter( theme =>  theme.category === filter)
    };

    return (
      <div>
        {categoryData.map(category => {
          return (
            <div key={category.id}>
              <h3>{category.name}</h3>
              {filteredTheme(category.name).map(theme => {
                return <div key={theme.id}>
                  <Link to={`/${category.name}/${theme.name}`}
                  >
                    {theme.name}
                  </Link>
                </div>

              })}
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // const {id} = ownProps.match.params
  return {
    state
  }
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default SubNav= withRouter(connect(
  mapStateToProps,
  null,
)(SubNav));
