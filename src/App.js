import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Communities, Home, Nfts, Places } from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/places' element={<Places />} />
        <Route exact path='/communities' element={<Communities />} />
        <Route exact path='/nfts' element={<Nfts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
