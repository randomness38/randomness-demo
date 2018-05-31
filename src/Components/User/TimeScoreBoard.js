import React from 'react'
import {nFormatter} from "../../utils/formatTools";

export const TimeScoreBoard = ({ user }) => {
  return (
    <div>
      <p>Time Score Board</p>
      {
        user && (
          <div>
            <h4>누적랜더밍</h4>
            <p>{`${user.timeStack} Minutes`}</p>
            {/*<p>{`${nFormatter(user.timeStack, 0)} 분`}</p>*/}
            <h4>연속랜더밍</h4>
            <p>{`${user.days} Days`}</p>
          </div>
        )
      }
    </div>
  )
}
