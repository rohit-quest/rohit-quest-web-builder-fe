import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Generate from './pages/Generate'
import Login from './pages/Login'
import Onboarding from './components/Onboarding'
import CodePreviewer from './pages/CodePreviewer'
import { useAtom } from 'jotai'
import { Loader } from './Atoms/AtomStores'
// import PreviewPage from "./pages/PreviewPage";
// import Create from './components/Create'

const App = () => {
  const [loader, _] = useAtom(Loader);
  return (
    <div className='h-screen relative'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/onboarding' element={<Onboarding />} />
        {/* <Route path='/create' element={<Create />} /> */}
        <Route path='/generate' element={<Generate />} />
        <Route path="/preview/:id" element={<CodePreviewer />} />
      </Routes>
      <div class={`${loader ? 'flex' : 'hidden'} items-center justify-center h-screen absolute top-0 left-0 w-full backdrop-blur-sm z-50`}>
        <div class="relative">
            <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
              <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
