import { Link } from 'react-router-dom';
import { useBuild } from '../context/BuildContext.jsx';
import CompatibilityBadge from './CompatibilityBadge.jsx';
import PowerMeter from './PowerMeter.jsx';
import PriceDisplay from './PriceDisplay.jsx';

export default function BuildSummary() {
  const { build, report, checking, reportError, totalPrice, removeComponent, clearBuild } =
    useBuild();
  const entries = Object.entries(build);
  const show = entries.length > 0;

  const psu = build.psu;
  const psuWattage = psu?.specifications?.wattage || 0;

  return (
    <aside className={`summary ${show ? '' : 'summary-empty'}`}>
      <div className="summary-head">
        <h2>Tu build</h2>
        {show && (
          <button className="link" onClick={clearBuild} type="button">
            Vaciar
          </button>
        )}
      </div>

      {!show ? (
        <div className="summary-placeholder">
          <p className="muted">
            Aún no tienes componentes. Agrégalos desde las categorías de arriba.
          </p>
          <Link to="/optimizer" className="link">
            o genera uno automático →
          </Link>
        </div>
      ) : (
        <>
          <ul className="summary-list">
            {entries.map(([category, component]) => (
              <li key={category} className="summary-item">
                <div className="summary-item-info">
                  <span className="summary-category">{category}</span>
                  <span className="summary-name">{component.name}</span>
                </div>
                <div className="summary-item-actions">
                  <span className="summary-price">${component.price}</span>
                  <button
                    className="summary-remove"
                    onClick={() => removeComponent(category)}
                    type="button"
                    aria-label={`Quitar ${component.name}`}
                  >
                    ×
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <PowerMeter estimateW={report?.power?.estimate} psuW={psuWattage} />

          <div className="summary-compat">
            {checking ? (
              <span className="muted">Verificando compatibilidad…</span>
            ) : reportError ? (
              <span className="error-text">No se pudo verificar: {reportError}</span>
            ) : (
              <CompatibilityBadge report={report} />
            )}
          </div>

          {report && report.warnings.length > 0 && (
            <ul className="summary-warnings">
              {report.warnings.slice(0, 4).map((warning, index) => (
                <li key={index} className="warning-item">
                  {warning.message}
                </li>
              ))}
            </ul>
          )}
          {report && report.errors.length > 0 && (
            <ul className="summary-errors">
              {report.errors.map((error, index) => (
                <li key={index} className="error-item">
                  {error.message}
                </li>
              ))}
            </ul>
          )}

          <div className="summary-total">
            <span>Total</span>
            <PriceDisplay value={totalPrice} />
          </div>
        </>
      )}
    </aside>
  );
}