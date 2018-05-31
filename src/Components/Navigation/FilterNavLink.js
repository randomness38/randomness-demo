import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterNaveLink = ({
                          filter,
                          children
                        }) => (
  <NavLink
    className="navigation__item"
    exact to={`/${filter}`}
    // activeStyle={{
    //      textDecoration: 'none',
    //  }}
  >
    {children}
  </NavLink>
);

export default FilterNaveLink;
