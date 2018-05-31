import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions';
import FilterNaveLink from "./FilterNavLink";
import {getVisibleThemes} from "../../reducers/index";

class Category extends Component {

  componentDidMount() {
    const { doFetchCategories, doFetchThemesByCategory } = this.props;
    doFetchCategories();
    doFetchThemesByCategory('pause');
    doFetchThemesByCategory('play');

  }
  render() {
    const { pauseThemes, playThemes, categoryIds } = this.props;
    return (
      <div>
        {
          categoryIds.map( categoryId => {
            return (
              <div key={categoryId}>
                <h3>{categoryId}</h3>
                {
                  categoryId === 'pause'
                    ? pauseThemes.map( theme => {
                    return (
                      <p key={theme.id}>
                        <FilterNaveLink
                          filter={theme.id}
                          category={categoryId}
                        >
                          {theme.title}
                        </FilterNaveLink>
                      </p>
                    )
                  })
                    : playThemes.map( theme => {
                    return (
                      <p key={theme.id}>
                        <FilterNaveLink
                          filter={theme.id}
                          category={categoryId}
                        >
                          {theme.title}
                        </FilterNaveLink>
                      </p>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categoryIds: state.categoryIds,
    pauseThemes: getVisibleThemes(state, 'pause'),
    playThemes: getVisibleThemes(state, 'play'),
  }
};


export default connect(
  mapStateToProps,
  actions
)(Category)
