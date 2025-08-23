import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Main from './Main'
import SecondPage from './SecondPage'
import Subcomp from './Subcomp'

const App = () =>{
    return (

       <div>
            <Routes>
                <Route path='/' element={<Subcomp/>} />
                <Route path='/SpecificBook' element={<SecondPage/>} />
            </Routes> 
       </div>
    )
}

export default App