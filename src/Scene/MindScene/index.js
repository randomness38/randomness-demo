import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {getDefaultData} from "../../utils/helper";
import {ActivityItem} from "./ActivityItem";
import {MindCard} from "./MindCard";

// import * as actions from '../../actions/index';


class MindScene extends Component {
  render() {
    const curMind = getDefaultData('minds').find( mind => {
      return mind.name === this.props.mindId
    });
    const filteredActivities = getDefaultData('activities').filter(activity => {
      return activity.mind === this.props.mindId
    });

    return (
      <div>
        { curMind && <MindCard mind={curMind} />}

        {
          filteredActivities.map( activity => {
            return (
              <ActivityItem
                key={activity.id}
                activity={activity}
                category={this.props.category}
                themeId={this.props.themeId}
              />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { mindId, category, themeId } = ownProps.match.params;
  return{
    mindId,
    themeId,
    category,
  }
};

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default MindScene = withRouter(connect(
  mapStateToProps,
  null
)(MindScene));
