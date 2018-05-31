import React from 'react'
import TimerControl from "./TimerControl";

export const ActivityControl = ({activity, isRunning}) => {
  return (
    <div>
      {
        activity && (
          <div>
            <button onClick={() => isRunning()}>시작</button>
            <TimerControl defaultTime={activity.time}/>
          </div>
        )
      }

    </div>
  )
}
