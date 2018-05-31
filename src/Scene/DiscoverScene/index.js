import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import ActivityItem from "../../Components/Activity/ActivityItem";
import {category} from "../../actions/schema";
import * as actions from '../../actions/index';

class DiscoverScene extends Component {

  componentDidMount() {
    const {doFetchAllActivities} = this.props;
    doFetchAllActivities();
  }
  render() {
    const {activity} = this.props;
    console.log(activity);
    return (
      <div>{
        activity && (
          <ActivityItem
            category={activity.category}
            themeId={activity.theme}
            filter={activity.id}
          >
            Random
          </ActivityItem>
        )
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const allKeys = state.activityIdsByFilter['all'].ids;
  console.log('allKeys',allKeys)

  let randomKey = allKeys[Math.floor(Math.random()*allKeys.length)];
    return {
      activity: state.byActivityId[randomKey]
    }
};

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default DiscoverScene = withRouter(connect(
  mapStateToProps,
  actions
)(DiscoverScene));
