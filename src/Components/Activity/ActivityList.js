import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import {getVisibleActivities} from "../../reducers/index";
import ActivityItem from "./ActivityItem";


class ActivityList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.themeId !== prevProps.themeId) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const {doFetchActivitiesByTheme, themeId } = this.props;
    doFetchActivitiesByTheme(themeId);
  };


  //themeId 바뀔때 마다 dispatch 해야 함
  render() {
    const {category, themeId, activities} = this.props;
    return (
      <div>
        {
          activities && (
            activities.map(activity => {
              return (
                <div key={activity.id}>
                  <ActivityItem
                    category={category}
                    themeId={themeId}
                    filter={activity.id}
                  >
                    {activity.title}
                  </ActivityItem>
                </div>
              )
            })
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {category, themeId } = ownProps.match.params;
  return {
    activities: getVisibleActivities(state,themeId),
    category,
    themeId,
  }
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default withRouter(connect(
  mapStateToProps,
  actions
)(ActivityList));
