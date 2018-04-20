import React from 'react'

export const ThemeCard = ({ theme }) => {
  return (
    <div>
      <h3>{theme.title}</h3>
      <p>{theme.expression}</p>
    </div>
  )
};
