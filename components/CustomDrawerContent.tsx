import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useNavigationState } from '@react-navigation/native';

export default function CustomDrawerContent() {
  const navigation = useNavigation<any>();
  const [isComponentsOpen, setComponentsOpen] = useState(false);
  const currentRoute = useNavigationState(state => state.routes[state.index].name);

  // Toggle function to handle dropdown visibility
  const toggleComponentsMenu = () => {
    setComponentsOpen(!isComponentsOpen);
  };

  // Helper function to check if the current screen is active
  // const isActive = (screen: string) => {
  //   return navigation.getCurrentRoute()?.name === screen;
  // };
  const isActive = (screen: string) => {
    return currentRoute === screen;
  };

  return (
    <View style={styles.container}>
      {/* Home Item */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={[
          styles.drawerItem,
          isActive('Home') && styles.activeDrawerItem, // Highlight if active
        ]}
      >
        <Ionicons style={[
          styles.icon,
          isActive('Home') && styles.activeIcon]} name="home-outline" size={24} color="black" />
        <Text style={[styles.link, isActive('Home') && styles.activeLink]}>Home</Text>
      </TouchableOpacity>

      {/* Components Menu */}
      <TouchableOpacity
        onPress={toggleComponentsMenu}
        style={[
          styles.drawerItem,
          isActive('Components') && styles.activeDrawerItem, // Highlight if active
        ]}
      >
        <Ionicons style={[
              styles.icon,
              isActive('Components') && styles.activeIcon]} name="cube-outline" size={24} color="black" />
        <Text style={[styles.link, isActive('Components') && styles.activeLink]}>
          Components
        </Text>
        <Ionicons style={[
              styles.icon,
              isActive('Components') && styles.activeIcon]} name={isComponentsOpen ? 'caret-up-outline' : 'caret-down-outline'} size={16} color="grey" marginLeft={20}/>
      </TouchableOpacity>

      {/* Dropdown Menu for Components */}
      {isComponentsOpen && (
        <View style={styles.dropdown}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Component1')}
            style={[
              styles.subItem,
              isActive('Component1') && styles.activeSubItem, // Highlight if active
            ]}
          >
            <Ionicons style={[
              styles.icon,
              isActive('Component1') && styles.activeIcon]} name="sparkles-outline" size={20} color="black" />
            <Text style={[styles.subItemText, isActive('Component1') && styles.activeSubItemText]}>Component 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Component2')}
            style={[
              styles.subItem,
              isActive('Component2') && styles.activeSubItem, // Highlight if active
            ]}
          >
            <Ionicons style={[
              styles.icon,
              isActive('Component2') && styles.activeIcon]} name="apps-outline" size={20} color="black" />
            <Text style={[styles.subItemText, isActive('Component2') && styles.activeSubItemText]}>Component 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Component3')}
            style={[
              styles.subItem,
              isActive('Component3') && styles.activeSubItem, // Highlight if active
            ]}
          >
            <Ionicons style={[
              styles.icon,
              isActive('Component3') && styles.activeIcon]} name="logo-buffer" size={20} color="black" />
            <Text style={[styles.subItemText, isActive('Component3') && styles.activeSubItemText]}>Component 3</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Settings Item */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={[
          styles.drawerItem,
          isActive('Settings') && styles.activeDrawerItem, // Highlight if active
        ]}
      >
        <Ionicons style={[
          styles.icon,
          isActive('Settings') && styles.activeIcon]} name="settings-outline" size={24} color="black" />
        <Text style={[styles.link, isActive('Settings') && styles.activeLink]}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingLeft: 10,
    borderRadius: 10
  },
  link: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '600',
  },
  dropdown: {
    paddingLeft: 20, // Indent dropdown items
    marginTop: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    paddingVertical: 10,
  },
  subItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingLeft: 20, // Additional indentation for dropdown items
  },
  subItemText: {
    marginLeft: 15,
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
  // Active item styles
  activeDrawerItem: {
    backgroundColor: '#e6f7ff', // Light blue background for active item
  },
  activeLink: {
    color: '#1890ff', // Blue text color for active item
  },
  icon: {
    color: 'black', // Blue text color for active item
  },
  activeSubItem: {
    backgroundColor: '#e6f7ff', // Light blue background for active subitems
  },
  activeSubItemText: {
    color: '#1890ff', // Blue text color for active subitem
  },
  activeIcon:{
    color: '#1890ff'
  }
});
