// app/navigation/BottomTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ComponentsScreen from '../screens/ComponentsScreen';
import { Ionicons } from '@expo/vector-icons';

import Navbar from '../../components/NavBar';

const Tab = createBottomTabNavigator();

function ScreenWithNavbar({ component: Component, title }: { component: any; title: string }) {
  return () => (
    <>
      <Navbar title={title} />
      <Component />
    </>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size, focused }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        } else if (route.name === 'Components') {
          iconName = focused ? 'cube' : 'cube-outline';
        }

        return <Ionicons name={iconName! as keyof typeof Ionicons.glyphMap} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#6200ee',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={ScreenWithNavbar({ component: HomeScreen, title: 'Home' })} />
      <Tab.Screen name="Components" component={ScreenWithNavbar({ component: ComponentsScreen, title: 'Components' })} />
      <Tab.Screen name="Settings" component={ScreenWithNavbar({ component: SettingsScreen, title: 'Settings' })} />
    </Tab.Navigator>
  );
}
