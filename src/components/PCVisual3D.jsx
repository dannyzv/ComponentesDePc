import { STEP_ICONS } from '../data/componentsData.js';
import { formatCOP } from '../utils/currency.js';

const SLOT_CONFIG = [
  { key: 'cpu', label: 'CPU', top: '8%', left: '38%', w: '24%', h: '14%' },
  { key: 'motherboard', label: 'Motherboard', top: '24%', left: '10%', w: '80%', h: '18%' },
  { key: 'ram', label: 'RAM', top: '26%', left: '72%', w: '16%', h: '14%' },
  { key: 'gpu', label: 'GPU', top: '46%', left: '10%', w: '68%', h: '16%' },
  { key: 'storage', label: 'SSD', top: '64%', left: '10%', w: '28%', h: '10%' },
  { key: 'psu', label: 'PSU', top: '78%', left: '10%', w: '35%', h: '14%' },
  { key: 'cooling', label: 'Cooler', top: '8%', left: '68%', w: '22%', h: '14%' },
  { key: 'case', label: 'Case', top: '0', left: '0', w: '100%', h: '100%', isFrame: true },
];

export default function PCVisual3D({ selected, currentStep, onSlotClick }) {
  const filledCount = Object.keys(selected).length;

  return (
    <div className="pc3d-container">
      <div className="pc3d-case">
        <div className="pc3d-inner">
          {SLOT_CONFIG.filter((s) => !s.isFrame).map((slot) => {
            const isSelected = !!selected[slot.key];
            const isCurrent = slot.key === currentStep;
            const component = selected[slot.key];

            return (
              <button
                key={slot.key}
                type="button"
                className={`pc3d-slot ${isSelected ? 'filled' : ''} ${isCurrent ? 'current' : ''}`}
                style={{ top: slot.top, left: slot.left, width: slot.w, height: slot.h }}
                onClick={() => onSlotClick && onSlotClick(slot.key)}
                title={component ? component.name : `Seleccionar ${slot.label}`}
              >
                <span className="pc3d-slot-icon">{STEP_ICONS[slot.key]}</span>
                <span className="pc3d-slot-label">
                  {isSelected ? component.name.split(' ').slice(0, 2).join(' ') : slot.label}
                </span>
                {isSelected && component && (
                  <span className="pc3d-slot-price">{formatCOP(component.price)}</span>
                )}
              </button>
            );
          })}

          <div className="pc3d-glow" />
        </div>
      </div>

      <div className="pc3d-counter">
        <span className="pc3d-counter-fill">{filledCount}</span>
        <span className="pc3d-counter-sep">/</span>
        <span className="pc3d-counter-total">8</span>
        <span className="pc3d-counter-label">componentes</span>
      </div>
    </div>
  );
}
