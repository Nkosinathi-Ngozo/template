// app/context/DrawerContext.tsx
import React, { createContext, useState, useContext } from 'react';

const DrawerContext = createContext({
  isDrawerOpen: false,
  openDrawer: () => {},
  closeDrawer: () => {},
});

export const useDrawer = () => useContext(DrawerContext);

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, openDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
