import axios from "axios"
import { useEffect, useState } from "react"

const getData = (id)=>{
    const [data, setData] = useState()
const Url = `https://rickandmortyapi.com/api/location/${id}`
useEffect(() => {
  axios.get(Url)
.then(res=>{setData(res.data)})
.catch(err=>{console.log(err)})
}, [])


return data
}

export default getData