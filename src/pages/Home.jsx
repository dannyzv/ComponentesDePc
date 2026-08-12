import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPresets } from '../services/api.js';
import PresetCard from '../components/PresetCard.jsx';

const HERO_FEATURES = [
  'Catálogo organizado por categorías',
  'Compatibilidad verificada en tiempo real',
  'Configuraciones óptimas según presupuesto',
  'Precio total con desglose',
];

export default function Home() {
  const [presets, setPresets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPresets()
      .then((data) => setPresets(data.presets))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home">
      <section className="hero glass">
        <span className="hero-badge">PC Builder</span>
        <h1 className="hero-title">
          Arma tu PC ideal,
          <br />
          sin errores de compatibilidad.
        </h1>
        <p className="hero-subtitle">
          Selecciona componentes, verifica compatibilidad en tiempo real y obtén el
          mejor rendimiento según tu presupuesto.
        </p>
        <div className="hero-actions">
          <Link to="/builder" className="btn btn-primary">
            Arma tu PC
          </Link>
          <Link to="/optimizer" className="btn btn-secondary">
            Optimizar por presupuesto
          </Link>
        </div>
        <ul className="hero-features">
          {HERO_FEATURES.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="presets-section">
        <div className="section-head">
          <h2>Builds prediseñados</h2>
          <Link to="/optimizer" className="link">
            Generar el mío →
          </Link>
        </div>

        {loading && <p className="muted">Cargando builds…</p>}
        {error && <p className="error-text">{error}</p>}
        {!loading && !error && presets.length === 0 && (
          <p className="muted">No hay builds prediseñados. Ejecuta el seed del backend.</p>
        )}

        <div className="preset-grid">
          {presets.map((preset) => (
            <PresetCard key={preset._id} preset={preset} />
          ))}
        </div>
      </section>
    </div>
  );
}