import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import Navigator from './src/navigation/NavigationOfScreen'
//import { NavigationContainer } from '@react-navigation/native'

import NavigationDrawer from './src/navigation/NavigationDrawer'

export default function App() {
  return (<NavigationDrawer/>
      
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
