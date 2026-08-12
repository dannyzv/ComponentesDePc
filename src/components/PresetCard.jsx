import { Link } from 'react-router-dom';

const USE_TYPE_LABELS = {
  gaming: 'Gaming',
  office: 'Oficina',
  editing: 'Edición',
  development: 'Desarrollo',
};

export default function PresetCard({ preset }) {
  const entries = Object.entries(preset.components || {}).filter(([, component]) => component);

  return (
    <article className="card glass preset-card">
      <div className="preset-head">
        <h3>{preset.name}</h3>
        <span className="preset-use">{USE_TYPE_LABELS[preset.useType] || preset.useType}</span>
      </div>
      <p className="preset-desc muted">{preset.description}</p>

      <ul className="preset-items">
        {entries.map(([category, component]) => (
          <li key={category}>
            <span className="preset-category">{category}</span>
            <span className="preset-component">{component.name}</span>
          </li>
        ))}
      </ul>

      <div className="preset-foot">
        <strong className="preset-price">${preset.totalPrice}</strong>
        <Link className="link" to="/builder">
          Usar esta build →
        </Link>
      </div>
    </article>
  );
}