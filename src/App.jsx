import getData from './hooks/getData'
import './App.css'
import { Location } from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import { useEffect, useState } from 'react'
import ErrorFetch from './components/ErrorFetch'




function App() {
  
  const [inputLoc, setInputLoc] = useState()
  const [hack, setHack] = useState()
  const randomIdLocation = (Math.floor(Math.random()*126)+1)
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    setInputLoc(e.target.inputSearch.value)
  }
  
  const data = getData(randomIdLocation,inputLoc)[0]
  const hasError = getData(randomIdLocation,inputLoc)[1]
  
  const pops = data?.residents.length

  useEffect(() => {
      if (pops===0){
        setHack(true)
      } 
      else if (pops!=0){
        setHack(false)}
    
        if(hasError){
          setHack(false)
        }
  }, [hack,pops,hasError,inputLoc,data])
  
  
    
  console.log(pops)
  return (
    <div className="App">
      <header>
      
      <h1>Rick and Morty locations</h1>
      
      <form className='input' onSubmit={handleSubmit}>

      <input id='inputSearch' type="text" placeholder='Enter an Id number from 1 to 126'/>
      <button>Search</button>

      </form>
      
      </header>
      
      {
        
          hasError?
          <ErrorFetch />:
          <>
          <section className='planet'>

          <Location name={data?.name} type={data?.type} dimension={data?.dimension} residents={data?.residents.length} /> 
          </section>
          <div className="main_residents">

          {
            
            data?.residents.map(url=>(
              <section className='res_container'>

                <ResidentInfo key={url} url={url}/>
              </section>
            ))
            
          }  
          </div>

          </>

              
          
      }
       <article>
        <p className={hack?'pickle':'hide'}>This planet is ricksolated </p><img className={hack?'rickso':'hide'} src="/images/Pickle_rick.png" alt="picklerick photo" />
       </article> 
      
    </div>
  )
}

export default App
