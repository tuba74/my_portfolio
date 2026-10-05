import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects/Projects.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/projects' element={<Projects/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
