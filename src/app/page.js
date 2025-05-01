import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './pages/index';
import '@fortawesome/fontawesome-svg-core/styles.css';


export default function App() {
  return (
    
    <>
      <Navbar />
      <main>
        <Home />
        <Footer />
      </main>
    </>
  );
}
