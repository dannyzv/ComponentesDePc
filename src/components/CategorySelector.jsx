export default function CategorySelector({ categories, active, onChange, selected = {} }) {
  return (
    <nav className="category-selector">
      {Object.entries(categories).map(([key, label]) => {
        const isActive = active === key;
        const hasComponent = Boolean(selected[key]);
        return (
          <button
            key={key}
            type="button"
            className={`chip ${isActive ? 'is-active' : ''} ${hasComponent ? 'is-selected' : ''}`}
            onClick={() => onChange(key)}
            aria-pressed={isActive}
          >
            {label}
            {hasComponent && <span className="chip-dot" title="Componente en el build" />}
          </button>
        );
      })}
    </nav>
  );
}