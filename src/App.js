import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Community, Home, Nfts, Places } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/places' element={<Places />} />
        <Route exact path='/community' element={<Community />} />
        <Route exact path='/nfts' element={<Nfts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
