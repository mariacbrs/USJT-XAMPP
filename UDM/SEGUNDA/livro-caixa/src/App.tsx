// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Nav } from './components/nav/Nav';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { Reg } from './pages/Reg';
import './App.css';
// import { Hello } from './components/Hello';

export default function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <main className="main main-content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/registro" element={<Reg />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}



