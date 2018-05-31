import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import ThemeCard from "../../Components/Theme/ThemeCard";
import ActivityList from "../../Components/Activity/ActivityList";
import * as actions from '../../actions/index';
import ActivityItem from "../../Components/Activity/ActivityItem";

class ThemeScene extends Component {
  componentDidMount() {
    const {doFetchActivitiesByTheme, themeId} = this.props;
    doFetchActivitiesByTheme(themeId);
  }
  render() {
    const {category, themeId, activity} = this.props;
    return (
      <div>
        <h4>Theme Card</h4>
        <ThemeCard />
        {
          activity && (
            <ActivityItem
              category={category}
              themeId={themeId}
              filter={activity.id}
            >
              Random
            </ActivityItem>
          )
        }

        <h4>Activity List</h4>
        <ActivityList />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {category, themeId} = ownProps.match.params;
  const filteredKeys = state.activityIdsByFilter[themeId].ids;
  let randomKey = filteredKeys[Math.floor(Math.random()*filteredKeys.length)];
  return {
    activity: state.byActivityId[randomKey],
    category,
    themeId,
  }
};

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default ThemeScene = withRouter(connect(
  mapStateToProps,
  actions
)(ThemeScene));
