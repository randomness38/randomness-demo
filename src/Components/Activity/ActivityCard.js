import React from 'react'

export const ActivityCard = ({ activity }) => {
  return (
    <div>
      {
        activity && (
          <div>
            <p>{activity.title}</p>
            <p>{activity.guide}</p>
          </div>
        )
      }
    </div>
  )
}
