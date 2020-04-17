import * as React from 'react'

import {StyleSheet,Text,View} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import  MapView , { PROVIDER_GOOGLE } from 'expo'


function MapScreen() {
    return (
       <View style={styles.container}>

          <Text style = {styles.text}> Map Screen </Text>
      <Icon name= "camera" size={50} color = "green" style= {styles.cameraStyle}/>

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
      },
      cameraStyle : {
        paddingRight : 250, 
        paddingTop : 400
      }
})
export default MapScreen; 