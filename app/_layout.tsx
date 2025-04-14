// app/_layout.tsx
import React from 'react';
import BottomTabs from './navigation/BottomTabs';
import CustomDrawer from '../components/CustomDrawer';
import { DrawerProvider } from '../context/DrawerContext';

export default function Layout() {
  return (
    <DrawerProvider>
        <BottomTabs />
        <CustomDrawer />
    </DrawerProvider>
  );
}
