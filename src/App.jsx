import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PreviewPage from './pages/PreviewPage'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/onboarding' element={<Login />} />
        <Route path='/generate' element={<PreviewPage />} />
      </Routes>
    </div>
  )
}

export default App