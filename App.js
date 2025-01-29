import React from 'react';
// import ReactDOM from './react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import Innovation from './innovation';

const App = () => {
  return (
    <BrowserRouter>
    {/* <Home /> */}
    {/* <Innovation /> */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/innovation' element={<Innovation />} />
      <Route path='/:id' element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Book />)

{/* <img src="/assets/shg-CoDTbIqM.svg" class="-500:hidden" alt=""><img src="/assets/shg-CoDTbIqM.svg" class="-500:hidden" alt=""></img> */}