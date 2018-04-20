import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
// import * as actions from '../../actions/index';
import { MindItem } from './MindItem'
import { ThemeCard } from './ThemeCard'
import {getDefaultData} from "../../utils/helper";


class ThemeScene extends Component {

  render() {
    const themes = getDefaultData('themes');
    const curTheme = themes.find(theme => {
      return theme.name === this.props.themeId
    });
    const filteredMinds = getDefaultData('minds').filter(mind => {
      return mind.theme === this.props.themeId
    });
    return (
      <div>
        {curTheme && <ThemeCard theme={curTheme}/>}
        {filteredMinds.map(mind => {
          return (
              <MindItem
                key={mind.id}
                mind={mind}
                category={this.props.category}
                themeId={this.props.themeId}/>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { themeId, category } = ownProps.match.params;
  return {
    themeId,
    category
  }

}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default ThemeScene = withRouter(connect(
  mapStateToProps,
  null
)(ThemeScene));
