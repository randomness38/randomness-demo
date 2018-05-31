import React from 'react';
import { NavLink } from 'react-router-dom';

const ActivityItem = ({
                          category,
                          themeId,
                          filter,
                          children
                        }) => (
  <NavLink
    exact to={`/${category}/${themeId}/${filter}`}
    // activeStyle={{
    //      textDecoration: 'none',
    //  }}
  >
    {children}
  </NavLink>
);

export default ActivityItem;
