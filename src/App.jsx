import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Builder from './pages/Builder.jsx';
import Optimizer from './pages/Optimizer.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/optimizer" element={<Optimizer />} />
        </Routes>
      </main>
    </div>
  );
}