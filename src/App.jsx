import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Preview from './pages/Preview'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/preview' element={<Preview />} />
      </Routes>
    </div>
  )
}

export default App