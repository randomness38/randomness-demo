import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions';
import { Link } from 'react-router-dom';
import FilterNaveLink from "./FilterNavLink";


class Navigation extends Component {

  componentDidMount() {
    const { doFetchNavigation } = this.props;
    doFetchNavigation();


  }
  render() {
    const { navs, navIds } = this.props;
    return (
      <div>
        <div className="navigation">
          <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

          <label for="navi-toggle" className="navigation__button">
              <span className="navigation__icon">
                  &nbsp;
              </span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            {
              navIds && (
                <div className="navigation__list">
                  {navIds.map(id => {
                    return (
                      <p key={id}>
                        <FilterNaveLink filter={id === 'home' ? '' : navs[id].path}>
                          {navs[id].name}
                        </FilterNaveLink>
                      </p>

                    )

                  })}
                </div>
              )
            }
          </nav>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state, owmProps) => {
  return {
    navIds: state.navigationIds,
    navs: state.byNavigationId
  }
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })

export default connect(
  mapStateToProps,
  actions
)(Navigation)
