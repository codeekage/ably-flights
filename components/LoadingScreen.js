import React from 'react'
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'

const { width, height } = Dimensions.get('window')

export default LoadingScreen = ({ message }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
      <Text style={styles.welcome}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  /*   container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#000',
    width : width,
    height: height
  }, */
  welcome: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10
  },

  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
