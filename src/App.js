import React from 'react'
import { Routes, Route } from 'react-router-dom'
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
    </div>
  );
}

export default App;
