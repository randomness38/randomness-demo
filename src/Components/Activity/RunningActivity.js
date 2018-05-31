import React from 'react'
import Timer from '../../utils/timer'

export const RunningActivity = ({activity, runningTime, isCompleted}) => {
  return (
    <div>
      {
        activity && (
          <div>
            <p>{activity.title}</p>
            <Timer
              runningTime={runningTime}
              isCompleted={isCompleted}
            />
          </div>
        )
      }
    </div>
  )
}
