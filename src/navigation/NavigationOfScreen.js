/*
Ce fichier permet de donner la navigation à l'ecran LOGIN Vers le screen central(MapScreen)

*/


import * as React from 'react'
import {createStackNavigator } from '@react-navigation/stack'
import {StyleSheet,Text,View} from 'react-native';

import LoginScreen from '../screens/LoginScreen'

const Stack = createStackNavigator(); 

function NavigationOfScreen (navigation) {
    return(
            <Stack.Navigator initialRouteName = "Login" >
                <Stack.Screen
                name = 'Login'
                component={LoginScreen}
                
                options = { 
                    {
                     title: 'Login',
                     headerTransparent : true
                    }
                }
                />
            </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    
})
export default  NavigationOfScreen; 