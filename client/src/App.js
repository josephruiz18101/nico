import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExamplePages from './pages/ExamplePages';
import Comments from './pages/Comments';

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/examples" element={<ExamplePages />} />
                    <Route path="/comments" element={<Comments />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
