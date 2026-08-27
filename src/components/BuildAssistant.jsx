import { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBuild } from '../context/BuildContext.jsx';
import {
  GAMER_COMPONENTS,
  STEP_ORDER,
  STEP_LABELS,
  STEP_ICONS,
  getMotherboardsForSocket,
  getRAMForType,
} from '../data/componentsData.js';
import { formatCOP } from '../utils/currency.js';
import PCVisual3D from './PCVisual3D.jsx';

const PLATFORM_INFO = {
  intel: {
    label: 'Intel',
    icon: 'Intel',
    desc: 'Core i3 / i5 / i7 / i9 — Socket LGA1700',
    socket: 'LGA1700',
    color: '#0071c5',
  },
  amd: {
    label: 'AMD',
    icon: 'AMD',
    desc: 'Ryzen 3 / 5 / 7 / 9 — Socket AM4 / AM5',
    socket: null,
    color: '#ed1c24',
  },
};

export default function BuildAssistant({ onComplete }) {
  const navigate = useNavigate();
  const { loadBuild } = useBuild();

  const [step, setStep] = useState('platform');
  const [platform, setPlatform] = useState(null);
  const [selected, setSelected] = useState({});
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const currentCategory = step !== 'platform' ? STEP_ORDER[currentCategoryIndex] : null;

  const filteredComponents = useMemo(() => {
    if (!currentCategory) return [];

    let list = GAMER_COMPONENTS.filter((c) => c.category === currentCategory);

    if (currentCategory === 'cpu' && platform) {
      list = list.filter((c) => c.brand === (platform === 'intel' ? 'Intel' : 'AMD'));
    }

    if (currentCategory === 'motherboard' && selected.cpu) {
      const socket = selected.cpu.specifications.socket;
      list = getMotherboardsForSocket(socket);
    }

    if (currentCategory === 'ram' && selected.motherboard) {
      const ramType = selected.motherboard.specifications.ramType;
      list = list.filter((c) => c.specifications.type === ramType);
    }

    return list;
  }, [currentCategory, platform, selected]);

  const totalPrice = useMemo(
    () => Object.values(selected).reduce((sum, c) => sum + (c?.price || 0), 0),
    [selected]
  );

  const handleSelectPlatform = useCallback((p) => {
    setPlatform(p);
    setStep('building');
    setCurrentCategoryIndex(0);
  }, []);

  const handleSelectComponent = useCallback(
    (component) => {
      const next = { ...selected, [currentCategory]: component };
      setSelected(next);

      if (currentCategoryIndex < STEP_ORDER.length - 1) {
        setCurrentCategoryIndex((i) => i + 1);
      }
    },
    [currentCategory, currentCategoryIndex, selected]
  );

  const handleBack = useCallback(() => {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex((i) => i - 1);
    } else {
      setStep('platform');
      setPlatform(null);
      setSelected({});
    }
  }, [currentCategoryIndex]);

  const handleSlotClick = useCallback(
    (slotKey) => {
      const idx = STEP_ORDER.indexOf(slotKey);
      if (idx !== -1) {
        setCurrentCategoryIndex(idx);
        setStep('building');
      }
    },
    []
  );

  const handleFinish = useCallback(() => {
    Object.values(selected).forEach((component) => {
      loadBuild(component);
    });
    if (onComplete) onComplete(selected);
    navigate('/builder');
  }, [selected, loadBuild, onComplete, navigate]);

  const isComplete = STEP_ORDER.every((cat) => selected[cat]);

  if (step === 'platform') {
    return (
      <section className="assistant-section">
        <div className="assistant-header glass">
          <h2 className="assistant-title">Arma tu PC Gamer</h2>
          <p className="muted">Elige tu plataforma para comenzar</p>
        </div>

        <div className="platform-grid">
          {Object.entries(PLATFORM_INFO).map(([key, info]) => (
            <button
              key={key}
              type="button"
              className="platform-card glass"
              onClick={() => handleSelectPlatform(key)}
              style={{ '--accent': info.color }}
            >
              <span className="platform-icon">{info.icon}</span>
              <span className="platform-name">{info.label}</span>
              <span className="platform-desc">{info.desc}</span>
            </button>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="assistant-section">
      <div className="assistant-layout">
        <div className="assistant-pc">
          <PCVisual3D selected={selected} currentStep={currentCategory} onSlotClick={handleSlotClick} />
        </div>

        <div className="assistant-panel">
          <div className="assistant-panel-head">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleBack}
            >
              ← Atrás
            </button>
            <h3 className="assistant-step-title">
              <span className="assistant-step-icon">{STEP_ICONS[currentCategory]}</span>
              {STEP_LABELS[currentCategory]}
            </h3>
            <span className="assistant-step-num">
              {currentCategoryIndex + 1} / {STEP_ORDER.length}
            </span>
          </div>

          <div className="assistant-progress">
            <div
              className="assistant-progress-fill"
              style={{ width: `${((currentCategoryIndex + 1) / STEP_ORDER.length) * 100}%` }}
            />
          </div>

          <div className="assistant-component-list">
            {filteredComponents.length === 0 && (
              <p className="muted">No hay componentes disponibles para esta categoría.</p>
            )}
            {filteredComponents.map((comp) => {
              const isActive = selected[currentCategory]?._id === comp._id;
              return (
                <button
                  key={comp._id}
                  type="button"
                  className={`assistant-component-card glass ${isActive ? 'is-selected' : ''}`}
                  onClick={() => handleSelectComponent(comp)}
                >
                  <div className="acc-info">
                    <span className="acc-name">{comp.name}</span>
                    <span className="acc-brand">{comp.brand}</span>
                  </div>
                  <span className="acc-price">{formatCOP(comp.price)}</span>
                </button>
              );
            })}
          </div>

          <div className="assistant-panel-foot">
            <div className="assistant-total">
              <span>Total:</span>
              <span className="assistant-total-price">{formatCOP(totalPrice)}</span>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              disabled={!isComplete}
              onClick={handleFinish}
            >
              {isComplete ? 'Ir al Constructor →' : `Selecciona ${STEP_ORDER.length - Object.keys(selected).length} más`}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
