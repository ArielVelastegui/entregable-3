import axios from 'axios'
import React, { useEffect, useState } from 'react'




const ResidentInfo = ({url,dato}) => {
    const [resi, setResi] = useState()

    useEffect(() => {
        axios.get(url)
        .then(res=>setResi(res.data
))
        .catch(err=>console.log(err))
  }, [])
    
  return (
    <section className='risie'>
       <img className='res_photo' src={resi?.image} alt="character photo" />
       <div className='status'>
        <div className={resi?.status=='Alive'?'circle':'red_circle'}></div>
        <span>{resi?.status}</span>
       </div>
       <article>
        <h3>{resi?.name} </h3>
       
        <ul>
          <span className='res_info'>

            <li><span className='sub_res'>Breed:</span> {resi?.species} </li>
            <li><span className='sub_res'>Origin:</span> {resi?.origin.name} </li>
            <li><span className='sub_res'>Episodes appearances:</span> {resi?.episode.length} </li>
          </span>
            
        </ul>
       </article>
       
    </section>
  )
 
}

export default ResidentInfo