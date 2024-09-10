import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js';
import Veterinarian from './Veterinarian.js';
import Services from './Services.js';
import Gallery from './Gallery.js';
import Pricing from './Pricing.js';
import Blog from './Blog.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import Breadcrumb from './Breadcrumb.js';
import Counter from './Counter.js';
import Faq from './Faq.js';



function App() {
  const path = [
    {
      prevp: "Home",
      activp: "About"
    },
    {
      prevp: "Home",
      activp: "Veterinarian"
    },
    {
      prevp: "Home",
      activp: "Services"
    },
    {
      prevp: "Home",
      activp: "Gallery"
    },
    {
      prevp: "Home",
      activp: "Pricing"
    },
    {
      prevp: "Home",
      activp: "Blog"
    },
    {
      prevp: "Home",
      activp: "Contact"
    }
  ]
  return (
    <div classNameName="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/*' element={<Home />} />

          <Route path='/About' element={
            <>
             <Breadcrumb prevp={path[0].prevp} activep={path[0].activp} />
              <About />
              <Counter />
              <Faq />
              <Contact />
            </>
          } />

          <Route path='/Veterinarian' element={
            <>
             <Breadcrumb prevp={path[1].prevp} activep={path[1].activp} />
              <Veterinarian />
            </>
          } />
          <Route path='/Services' element={<>
            <Breadcrumb prevp={path[2].prevp} activep={path[2].activp} />
            <About />
            <Services />
          </>} />
          <Route path='/Gallery' element={<>
            <Breadcrumb prevp={path[3].prevp} activep={path[3].activp} />
            <Gallery />
          </>} />
          <Route path='/Pricing' element={
            <>
           <Breadcrumb prevp={path[4].prevp} activep={path[4].activp} />
              <Pricing />
              <Contact />
            </>
          } />
          <Route path='/Blog' element={
            <>
             <Breadcrumb prevp={path[5].prevp} activep={path[5].activp} />
              <Blog />
            </>
          } />
          <Route path='/Contact' element={
            <>
             <Breadcrumb prevp={path[6].prevp} activep={path[6].activp} />
              <Contact />
            </>
          } />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
