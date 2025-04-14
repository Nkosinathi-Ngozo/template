import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface buttonProps{
  color: string;
  width: number | `${number}%`;
  height: number | `${number}%`;
  isDisabled: boolean;
  label?: string;
  onPress?: () => void;
}

const CustomButton: React.FC<buttonProps> = ({ color, width, height, isDisabled = false, label = 'Button', onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: color, width: width, height: height }, isDisabled && styles.disabled]}
      onPress={onPress}
      disabled={isDisabled}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: '#ccc',
  },
})