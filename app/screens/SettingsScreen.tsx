import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Add your theme toggle or other settings here */}
      <Text style={styles.item}>• Theme: Light / Dark Toggle</Text>
      <Text style={styles.item}>• Language: English (Coming soon)</Text>
      <Text style={styles.item}>• Notifications (Coming soon)</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    fontSize: 16,
    marginBottom: 12,
  },
});
