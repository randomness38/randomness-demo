import React from 'react'
import {Link} from 'react-router-dom';

// 왜 not defined 이 뜨는거지?
export const MindItem = ({ mind, category, themeId }) => {
  return (
    <div>
      <Link to={`/${category}/${themeId}/${mind.name}`}
      >
        {mind.name}
      </Link>

    </div>
  )
};
