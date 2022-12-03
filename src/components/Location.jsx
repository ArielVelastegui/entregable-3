
import React from 'react'

export const Location = ({name,type,dimension,residents}) => {
  return (
    <section>
        <h2>{name}</h2>
        <ul>
          <span className='loc_info'>

            <li><span className='subtitle'>Type:</span> {type}</li>
            <li><span className='subtitle'>Dimension:</span> {dimension}</li>
            <li><span className='subtitle'>Population:</span> {residents}</li>

          </span>
        </ul>
        
    </section>
  )
}
