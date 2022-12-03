import axios from "axios"
import { useEffect, useState } from "react"

const getData = (id,loc)=>{
    const [data, setData] = useState()
    const [hasError, setHasError] = useState(false)
    const all = [data,hasError]
let Url



useEffect(() => {
  if(loc){
    Url=`https://rickandmortyapi.com/api/location/${loc}`

  }else{
    Url = `https://rickandmortyapi.com/api/location/${id}`
  }

  axios.get(Url)
.then(res=>{setData(res.data)
  setHasError(false)})
.catch(err=>{console.log(err)
  setHasError(true)})
}, [loc])


return all
}

export default getData