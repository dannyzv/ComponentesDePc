import { formatCOP } from '../utils/currency.js';

const SLOT_CONFIG = [
  { key: 'cpu', label: 'CPU', top: '25%', left: '38%', w: '8%', h: '5%', color: '#3b82f6' },
  { key: 'cooling', label: 'Cooler', top: '20%', left: '34%', w: '10%', h: '7%', color: '#06b6d4' },
  { key: 'motherboard', label: 'Motherboard', top: '18%', left: '30%', w: '28%', h: '38%', color: '#8b5cf6' },
  { key: 'ram', label: 'RAM', top: '25%', left: '48%', w: '6%', h: '8%', color: '#f59e0b' },
  { key: 'gpu', label: 'GPU', top: '40%', left: '30%', w: '28%', h: '7%', color: '#22c55e' },
  { key: 'storage', label: 'SSD', top: '48%', left: '30%', w: '12%', h: '4%', color: '#ec4899' },
  { key: 'psu', label: 'PSU', top: '53%', left: '30%', w: '18%', h: '6%', color: '#f97316' },
];

export default function PCFinal3D({ selected }) {
  const filledCount = Object.keys(selected).length;
  const totalPrice = Object.values(selected).reduce((sum, c) => sum + (c?.price || 0), 0);
  const isComplete = filledCount === 8;

  return (
    <div className="pcfinal-wrapper">
      <div className="pcfinal-scene">
        <div className="pcfinal-case">
          <img
            src="/pc-gamer.png.jpg"
            alt="PC Gamer"
            className="pcfinal-image"
            draggable={false}
          />
          <div className="pcfinal-overlay">
            {SLOT_CONFIG.map((slot) => {
              const component = selected[slot.key];
              const isFilled = !!component;

              return (
                <div
                  key={slot.key}
                  className={`pcfinal-slot ${isFilled ? 'filled' : 'empty'}`}
                  style={{
                    top: slot.top,
                    left: slot.left,
                    width: slot.w,
                    height: slot.h,
                    '--slot-color': slot.color,
                  }}
                >
                  {isFilled ? (
                    <>
                      <span className="pcfinal-slot-glow" />
                      <span className="pcfinal-slot-name">
                        {component.name.split(' ').slice(0, 3).join(' ')}
                      </span>
                      <span className="pcfinal-slot-price">{formatCOP(component.price)}</span>
                    </>
                  ) : (
                    <span className="pcfinal-slot-empty">{slot.label}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pcfinal-info">
        <div className="pcfinal-status">
          <span className={`pcfinal-badge ${isComplete ? 'complete' : 'partial'}`}>
            {isComplete ? 'Ensamblaje Completo' : `${filledCount}/8 Componentes`}
          </span>
        </div>

        <div className="pcfinal-total">
          <span className="pcfinal-total-label">Precio Final</span>
          <span className="pcfinal-total-price">{formatCOP(totalPrice)}</span>
        </div>

        {isComplete && (
          <div className="pcfinal-specs">
            {selected.cpu && (
              <div className="pcfinal-spec">
                <span className="pcfinal-spec-label">CPU</span>
                <span className="pcfinal-spec-value">{selected.cpu.name}</span>
              </div>
            )}
            {selected.gpu && (
              <div className="pcfinal-spec">
                <span className="pcfinal-spec-label">GPU</span>
                <span className="pcfinal-spec-value">{selected.gpu.name}</span>
              </div>
            )}
            {selected.ram && (
              <div className="pcfinal-spec">
                <span className="pcfinal-spec-label">RAM</span>
                <span className="pcfinal-spec-value">
                  {selected.ram.specifications.capacityTotal}GB DDR{selected.ram.specifications.type?.replace('DDR', '')}
                </span>
              </div>
            )}
            {selected.storage && (
              <div className="pcfinal-spec">
                <span className="pcfinal-spec-label">SSD</span>
                <span className="pcfinal-spec-value">
                  {selected.storage.specifications.capacity >= 1000
                    ? `${selected.storage.specifications.capacity / 1000}TB`
                    : `${selected.storage.specifications.capacity}GB`}
                </span>
              </div>
            )}
            {selected.psu && (
              <div className="pcfinal-spec">
                <span className="pcfinal-spec-label">PSU</span>
                <span className="pcfinal-spec-value">
                  {selected.psu.specifications.wattage}W {selected.psu.specifications.grade}
                </span>
              </div>
            )}
            {selected.motherboard && (
              <div className="pcfinal-spec">
                <span className="pcfinal-spec-label">Motherboard</span>
                <span className="pcfinal-spec-value">{selected.motherboard.name}</span>
              </div>
            )}
            {selected.cooling && (
              <div className="pcfinal-spec">
                <span className="pcfinal-spec-label">Cooler</span>
                <span className="pcfinal-spec-value">{selected.cooling.name}</span>
              </div>
            )}
            {selected.case && (
              <div className="pcfinal-spec">
                <span className="pcfinal-spec-label">Case</span>
                <span className="pcfinal-spec-value">{selected.case.name}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
