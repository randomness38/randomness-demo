import React from 'react'
import {Link} from 'react-router-dom';

// 왜 not defined 이 뜨는거지?
export const ActivityItem = ({ category, themeId, activity }) => {
  return (
    <div>
      <Link to={`/${category}/${themeId}/${activity.mind}/${activity.name}`}
      >
        {activity.title}
      </Link>

    </div>
  )
};
