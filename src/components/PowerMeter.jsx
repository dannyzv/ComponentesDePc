export default function PowerMeter({ estimateW, psuW }) {
  if (!estimateW && !psuW) return null;

  const percent = psuW && psuW > 0 ? Math.min(100, Math.round((estimateW / psuW) * 100)) : 0;
  const level = percent >= 95 ? 'high' : percent >= 75 ? 'mid' : 'low';

  return (
    <div className="power-meter">
      <div className="power-meter-head">
        <span>Consumo estimado</span>
        <span className="power-meter-value">
          {estimateW || '—'} W {psuW ? `/ ${psuW} W` : ''}
        </span>
      </div>
      <div className="power-meter-bar">
        <div className={`power-meter-fill ${level}`} style={{ width: `${percent}%` }} />
      </div>
      {percent > 0 && (
        <span className="power-meter-pct muted">{percent}% de la fuente</span>
      )}
    </div>
  );
}