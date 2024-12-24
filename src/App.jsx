import React from 'react';
import { Routes, Route } from 'react-router';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
