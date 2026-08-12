import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { checkCompatibility } from '../services/api.js';

const BuildContext = createContext(null);

export function BuildProvider({ children }) {
  const [build, setBuild] = useState({});
  const [report, setReport] = useState(null);
  const [checking, setChecking] = useState(false);

  function addComponent(component) {
    setBuild((current) => ({ ...current, [component.category]: component }));
  }

  function removeComponent(category) {
    setBuild((current) => {
      const next = { ...current };
      delete next[category];
      return next;
    });
  }

  function clearBuild() {
    setBuild({});
    setReport(null);
  }

  async function refreshReport() {
    const entries = Object.values(build);
    if (entries.length === 0) {
      setReport(null);
      return;
    }
    setChecking(true);
    try {
      const result = await checkCompatibility(entries.map((c) => ({ id: c._id })));
      setReport(result);
    } finally {
      setChecking(false);
    }
  }

  useEffect(() => {
    refreshReport();
  }, [build]);

  const totalPrice = useMemo(
    () => Object.values(build).reduce((sum, c) => sum + (c.price || 0), 0),
    [build]
  );

  const value = useMemo(
    () => ({
      build,
      report,
      checking,
      totalPrice,
      addComponent,
      removeComponent,
      clearBuild,
      refreshReport,
    }),
    [build, report, checking, totalPrice]
  );

  return <BuildContext.Provider value={value}>{children}</BuildContext.Provider>;
}

export function useBuild() {
  return useContext(BuildContext);
}