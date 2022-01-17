import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Register from './Register'
import Login from './Login'
import Myprofile from './Myprofile'
import Home from './Home'
import Contact from './Contact'
import Dashboard from './Dashboard'


const App = () => {

  
  return (
    <div>
      
        <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/myprofile' element={<Myprofile />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>

        </BrowserRouter>
      
    </div>
  )
}

export default App
