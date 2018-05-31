import React from 'react'
import { NavLink } from 'react-router-dom';

export const QuoteCard = ({ quote, activityId }) => {
  return (
    <div>
      <h4>QuoteCard</h4>
      {
        quote && (
          <p>{quote}</p>
        )
      }
      <p>
        <NavLink
          exact to={`/log/${activityId}`}
        >
          LOG
        </NavLink>
      </p>

      <p>
        <NavLink
          exact to={`/discovery`}
        >
          DISCOVER
        </NavLink>
      </p>

    </div>
  )
};
