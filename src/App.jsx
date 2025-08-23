import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import WhatsappBulle from './components/WhatsappBulle';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>  
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/login' element={<Login/>}></Route>    
        <Route path='/register' element={<Register/>}></Route>
        </Routes>
        <WhatsappBulle/>
     </BrowserRouter>
  );
}

export default App;
