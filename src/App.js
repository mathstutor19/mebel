import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import Home from './pages/Home/Home';
// import Contact from './pages/Contact/Contact';
// import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
// import Works from './pages/Works/Works';
// import Order from './pages/Order/Order';
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Works = lazy(() => import('./pages/Works/Works'));
const Order = lazy(() => import('./pages/Order/Order'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="works" element={<Works />} />
          <Route path="order" element={<Order />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
