import React from 'react';
import { Routes, Route } from 'react-router';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/privacy-policy"
                        element={<PrivacyPolicy />}
                    ></Route>
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
