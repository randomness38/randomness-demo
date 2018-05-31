import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions';

class ThemeCard extends Component {
  componentDidMount() {
    const { doFetchAllThemes } = this.props;
    doFetchAllThemes();
  }

  render() {
    const { theme, themeId } = this.props;

    return (
      <div>
        {
          theme && (
            <div>
              <p>{theme.title}</p>
              <p>{theme.guide}</p>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {themeId} = ownProps.match.params;
  return {
    theme: state.byThemeId[themeId],
    themeId
  }
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default withRouter(connect(
  mapStateToProps,
  actions
)(ThemeCard));
