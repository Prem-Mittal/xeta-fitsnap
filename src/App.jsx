import React from 'react'
import {Navbar} from './components/Navbar'
import { CenterContent } from './components/CenterContent'
const App = () => {
  return (
    <>
     <Navbar/> 
     <div className='mx-auto mt-5 w-[55%]'>
      <img src="hp.jpeg" />
     </div>
     <CenterContent></CenterContent>
    </>

  )
}

export default App