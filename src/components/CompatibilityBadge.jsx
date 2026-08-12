export default function CompatibilityBadge({ report, compact = false }) {
  if (!report) return null;

  const state = report.compatible ? 'ok' : 'error';
  const label = report.compatible ? 'Compatible' : 'Incompatible';
  const issues = compact ? report.errors.length + report.warnings.length : null;

  return (
    <div className={`compat-badge ${state}`}>
      <span className="compat-icon">{report.compatible ? '✓' : '✕'}</span>
      <span className="compat-label">{label}</span>
      {issues !== null && <span className="compat-count">{issues}</span>}
    </div>
  );
}