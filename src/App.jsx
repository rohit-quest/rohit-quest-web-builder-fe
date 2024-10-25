import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Generate from './pages/Generate'
import Login from './pages/Login'
import Onboarding from './components/Onboarding'
// import PreviewPage from "./pages/PreviewPage";
// import Create from './components/Create'

const App = () => {
  return (
    <div className='h-screen'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/onboarding' element={<Onboarding />} />
        {/* <Route path='/create' element={<Create />} /> */}
        <Route path='/generate' element={<Generate />} />
      </Routes>
    </div>
  );
};

export default App;
