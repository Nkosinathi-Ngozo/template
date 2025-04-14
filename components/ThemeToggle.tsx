import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';  // Import theme context

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Get current theme and toggle function

  return (
    <View style={styles.buttonContainer}>
      <Button
        title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        onPress={toggleTheme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    padding: 10,
  },
});

export default ThemeToggle;
