// app/components/CustomDrawer.tsx
import React from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDrawer } from '../context/DrawerContext';
import CustomDrawerContent from './CustomDrawerContent';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function CustomDrawer() {
  const { isDrawerOpen, closeDrawer } = useDrawer();
  const [shouldRender, setShouldRender] = React.useState(isDrawerOpen);

  const translateX = React.useRef(new Animated.Value(SCREEN_WIDTH)).current;

  React.useEffect(() => {
    if (isDrawerOpen) {
      setShouldRender(true);
      Animated.timing(translateX, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateX, {
        toValue: SCREEN_WIDTH,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        setShouldRender(false); // Only unmount after animation
      });
    }
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  return (
    <TouchableOpacity style={styles.overlay} onPress={closeDrawer} activeOpacity={1}>
      <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
        <CustomDrawerContent/>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  drawer: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: SCREEN_WIDTH * 0.7,
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
    elevation: 20,
  },
  drawerTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  closeText: {
    fontSize: 16,
    color: 'blue',
  },
});
