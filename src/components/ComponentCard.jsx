const SPEC_FIELDS = {
  cpu: ['socket', 'cores', 'threads', 'tdp'],
  motherboard: ['socket', 'formFactor', 'ramType', 'ramSlots'],
  gpu: ['vram', 'tdp', 'lengthMm'],
  ram: ['type', 'capacityTotal', 'speed'],
  storage: ['interface', 'capacity', 'formFactor'],
  psu: ['wattage', 'grade'],
  cooling: ['type', 'tdpRating'],
  case: ['formFactor', 'maxGpuLength'],
};

export default function ComponentCard({ component, onAdd }) {
  const specs = component.specifications || {};
  const fields = SPEC_FIELDS[component.category] || [];

  return (
    <article className="card glass">
      <div className="card-head">
        <h3 className="card-title">{component.name}</h3>
        <span className="card-brand">{component.brand}</span>
      </div>

      <ul className="card-specs">
        {fields.map((field) => {
          const value = specs[field];
          if (value === undefined || value === null) return null;
          return (
            <li key={field}>
              <span className="spec-key">{field}</span>
              <span className="spec-value">{value}</span>
            </li>
          );
        })}
      </ul>

      <div className="card-foot">
        <span className="card-price">${component.price}</span>
        <button className="btn-add" onClick={onAdd}>
          Agregar
        </button>
      </div>
    </article>
  );
}