import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function CompteInformationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Information Screen </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default CompteInformationScreen