import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text>Hellow Dev</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#8257E5',
    flex: 1,
    justifyContent: 'center'
  }
})