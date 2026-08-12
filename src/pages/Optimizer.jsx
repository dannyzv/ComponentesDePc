import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { optimizeBuild } from '../services/api.js';
import PriceDisplay from '../components/PriceDisplay.jsx';
import { useBuild } from '../context/BuildContext.jsx';

const USE_TYPES = [
  { value: 'gaming', label: 'Gaming', description: 'Tarjeta gráfica y CPU priorizados' },
  { value: 'office', label: 'Oficina', description: 'Productividad y multitarea ligera' },
  { value: 'editing', label: 'Edición', description: 'Render, video y creación' },
  { value: 'development', label: 'Desarrollo', description: 'Compilación y contenedores' },
];

export default function Optimizer() {
  const navigate = useNavigate();
  const { addComponent } = useBuild();
  const [budget, setBudget] = useState(1200);
  const [useType, setUseType] = useState('gaming');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleOptimize(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await optimizeBuild({ budget: Number(budget), useType });
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function applyToBuilder() {
    if (!result) return;
    Object.entries(result.components).forEach(([category, component]) => {
      addComponent({
        _id: component.id,
        category,
        name: component.name,
        brand: component.brand,
        price: component.price,
        specifications: component.specifications,
      });
    });
    navigate('/builder');
  }

  return (
    <div className="optimizer">
      <header className="page-head">
        <h1>Optimizador de builds</h1>
        <p className="muted">
          Ingresa tu presupuesto y el tipo de uso: generamos la mejor combinación de
          componentes que alcanza.
        </p>
      </header>

      <form className="optimizer-form glass" onSubmit={handleOptimize}>
        <label className="field">
          <span className="field-label">Presupuesto (USD)</span>
          <input
            type="number"
            min="100"
            step="50"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </label>

        <fieldset className="field">
          <legend className="field-label">Tipo de uso</legend>
          <div className="radio-grid">
            {USE_TYPES.map((type) => (
              <label
                key={type.value}
                className={`radio-card ${useType === type.value ? 'is-active' : ''}`}
              >
                <input
                  type="radio"
                  name="useType"
                  value={type.value}
                  checked={useType === type.value}
                  onChange={() => setUseType(type.value)}
                />
                <span className="radio-card-label">{type.label}</span>
                <span className="radio-card-desc">{type.description}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Generando…' : 'Generar build óptimo'}
        </button>
        {error && <p className="error-text">{error}</p>}
      </form>

      {result && (
        <section className="result glass">
          <div className="result-head">
            <h2>Build óptimo</h2>
            <PriceDisplay value={result.totalPrice} />
          </div>
          <p className="muted">
            Presupuesto {result.budget} USD · Consumo estimado {result.powerEstimate} W ·
            Sobrante {result.remainingBudget} USD
          </p>

          <ul className="result-list">
            {Object.entries(result.components).map(([category, component]) => (
              <li key={category} className="result-item">
                <span className="result-category">{category}</span>
                <span className="result-name">{component.name}</span>
                <span className="result-price">
                  <PriceDisplay value={component.price} compact />
                </span>
              </li>
            ))}
          </ul>

          {result.rejectionReasons.length > 0 && (
            <div className="result-warnings">
              <h3>Sin asignación</h3>
              {result.rejectionReasons.map((reason) => (
                <p key={reason.category} className="muted">
                  {reason.category}: {reason.reason}
                </p>
              ))}
            </div>
          )}

          <button className="btn btn-secondary" onClick={applyToBuilder}>
            Llevar esta configuración al constructor
          </button>
        </section>
      )}
    </div>
  );
}