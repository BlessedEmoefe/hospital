import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
  const [modal, setModal] = useState(null);
  const [flash, setFlash] = useState(null);
  const timer = useRef(0);

  const openModal = useCallback((name) => setModal(name), []);
  const closeModal = useCallback(() => setModal(null), []);
  const flashItem = useCallback((id) => {
    setFlash(id);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setFlash(null), 1800);
  }, []);

  const value = useMemo(
    () => ({ modal, openModal, closeModal, flash, flashItem }),
    [modal, openModal, closeModal, flash, flashItem],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  return useContext(SiteContext);
}
