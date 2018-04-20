import React from 'react'

export const MindCard = ({ mind }) => {
  return (
    <div>
      <h3>{mind.title}</h3>
      <p>{mind.expression}</p>
    </div>
  )
};
