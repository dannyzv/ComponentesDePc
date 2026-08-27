import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Ensamblar from './pages/Ensamblar.jsx';
import Builder from './pages/Builder.jsx';
import Optimizer from './pages/Optimizer.jsx';
import Login from './pages/Login.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ensamblar" element={<Ensamblar />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/optimizer" element={<Optimizer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}
