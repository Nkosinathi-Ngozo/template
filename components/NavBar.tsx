import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // or 'react-native-vector-icons/Ionicons'
import type { NavigationProp } from '@react-navigation/native';
import { useDrawer } from '../context/DrawerContext';

const Navbar = ({ title }: { title: string }) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { openDrawer } = useDrawer();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
      >
        <Ionicons name='arrow-back' size={24} color="#333"/>
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        onPress={openDrawer}
      >
        <Ionicons name='menu' size={24} color="#333"/>
        </TouchableOpacity>
    </View>
  );  
};

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 20,
    padding: 8,
  },
});

export default Navbar;
