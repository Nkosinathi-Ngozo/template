import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/config/colors'

const ButtonScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Button Components</Text>
        
      
    </View>
  )
}

export default ButtonScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: Colors.lightBackground,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});