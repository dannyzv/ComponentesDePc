import { useEffect, useState } from 'react';
import { getComponents } from '../services/api.js';
import { useBuild } from '../context/BuildContext.jsx';
import CategorySelector from '../components/CategorySelector.jsx';
import ComponentCard from '../components/ComponentCard.jsx';
import BuildSummary from '../components/BuildSummary.jsx';

const CATEGORY_LABELS = {
  cpu: 'Procesador',
  motherboard: 'Placa madre',
  gpu: 'Tarjeta gráfica',
  ram: 'Memoria RAM',
  storage: 'Almacenamiento',
  psu: 'Fuente de poder',
  cooling: 'Refrigeración',
  case: 'Gabinete',
};

export default function Builder() {
  const { build, addComponent } = useBuild();
  const [category, setCategory] = useState('cpu');
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getComponents({ category })
      .then((data) => setComponents(data.components))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="builder">
      <header className="page-head">
        <h1>Constructor de PC</h1>
        <p className="muted">
          Elige una categoría, revisa los componentes y añádelos a tu build. La
          compatibilidad se verifica en tiempo real.
        </p>
        <p className="selected-count muted">
          Componentes seleccionados: <strong>{Object.keys(build).length}</strong> / 8
        </p>
      </header>

      <CategorySelector
        categories={CATEGORY_LABELS}
        active={category}
        onChange={setCategory}
        selected={build}
      />

      <div className="builder-layout">
        <div>
          {loading && <p className="muted">Cargando componentes…</p>}
          {error && <p className="error-text">{error}</p>}
          {!loading && !error && components.length === 0 && (
            <p className="muted">No hay componentes en esta categoría.</p>
          )}

          <div className="component-grid">
            {components.map((component) => (
              <ComponentCard
                key={component._id}
                component={component}
                onAdd={() => addComponent(component)}
              />
            ))}
          </div>
        </div>

        <BuildSummary />
      </div>
    </div>
  );
}