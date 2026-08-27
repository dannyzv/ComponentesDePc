import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { checkCompatibility } from '../services/api.js';

const BuildContext = createContext(null);

export function BuildProvider({ children }) {
  const [build, setBuild] = useState({});
  const [report, setReport] = useState(null);
  const [checking, setChecking] = useState(false);
  const [reportError, setReportError] = useState(null);

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
    setReportError(null);
  }

  function loadBuild(component) {
    if (component && component.category) {
      setBuild((current) => ({ ...current, [component.category]: component }));
    }
  }

  async function refreshReport() {
    const entries = Object.values(build);
    if (entries.length === 0) {
      setReport(null);
      setReportError(null);
      return;
    }
    setChecking(true);
    setReportError(null);
    try {
      const result = await checkCompatibility(entries.map((c) => ({ id: c._id })));
      setReport(result);
    } catch (error) {
      setReportError(error.message);
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
      reportError,
      totalPrice,
      addComponent,
      removeComponent,
      clearBuild,
      loadBuild,
      refreshReport,
    }),
    [build, report, checking, reportError, totalPrice]
  );

  return <BuildContext.Provider value={value}>{children}</BuildContext.Provider>;
}

export function useBuild() {
  return useContext(BuildContext);
}