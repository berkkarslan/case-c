import React, { ReactNode } from 'react'
type Props = {
  children: ReactNode
  title?: string
}
const Card: React.FC<Props> = ({ children, title }) => {
  return (
    <div className='card h-100'>
      <div className='card-body'>
        {title ? <h5 className='card-title'>{title}</h5> : null}
        {children}
      </div>
    </div>
  )
}

export default Card
