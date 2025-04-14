import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const components = ['Button', 'Input', 'Card', 'Loading Spinner', 
  'Modal', 'SnackBar', 'Toast', 'Accordion', 
  'Stepper/Progress Indicator', 'Date Picker', 'File Picker ', 
  'Tooltip', ' Search Bar', 'Modal Bottom sheet', 'Floating Action Button (FAB)',
  'Hamburger', 'Drawer Tab Navigation', 'ThemeToggle', ]

const componentIcon = [
  'hand-left-outline',               // Button
  'create-outline',                 // Input
  'albums-outline',                // Card
  'sync-outline',                  // Loading Spinner
  'browsers-outline',             // Modal
  'chatbox-ellipses-outline',     // SnackBar
  'notifications-outline',        // Toast
  'list-outline',                 // Accordion
  'stats-chart-outline',          // Stepper/Progress Indicator
  'calendar-outline',             // Date Picker
  'document-attach-outline',      // File Picker
  'information-circle-outline',   // Tooltip
  'search-outline',               // Search Bar
  'ellipsis-horizontal-circle-outline', // Modal Bottom Sheet
  'add-circle-outline',           // Floating Action Button (FAB)
  'reorder-three-outline',        // Hamburger
  'menu-outline',                 // Drawer Tab Navigation
  'moon-outline'                  // ThemeToggle
]

const pairedComponents = components.map((component, index) => ({
  name: component,
  icon: componentIcon[index]
}));




const ComponentsScreen: React.FC = () => {
  const navigation = useNavigation<any>();


  const navigateTo = (name: string) =>{
    navigation.navigateTo('Home');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reusable Components</Text>

      <FlatList
        data={pairedComponents}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigateTo(item.name)}
          style={styles.item}>
            <View style={styles.iconContainer}>
              <Ionicons style={styles.icon} name={item.icon! as keyof typeof Ionicons.glyphMap} size={20}></Ionicons>
            </View>
            <Text style={styles.name}>{item.name}</Text>
            <Ionicons name="arrow-forward" style={styles.arrow} color={'black'} size={20}/>
        </TouchableOpacity>
        )}
      />
      <Text style={styles.note}>Tap on each item in the future to preview it in action.</Text>
    </View>
  );
};

export default ComponentsScreen;

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
    borderWidth: .7,
    marginBottom: 10,
    borderRadius:8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer:{
    flexDirection: 'row',
    backgroundColor: '#1890ff',
    borderRadius: 8,
    margin: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: '#fff',
    margin: 10
  },
  note: {
    marginTop: 20,
    fontSize: 14,
    color: '#888',
  },
  arrow:{
    marginEnd: 10
  },
  name: {
    fontSize: 18,
    fontWeight: '200',
  }
});
