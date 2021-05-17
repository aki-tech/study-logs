import React from 'react'

const Card = ({children}) => {
  return (
    <div>
      <div className="rounded-3xl shadow bg-white p-28">
        {children}
      </div>
    </div>
  )
}

export default Card
