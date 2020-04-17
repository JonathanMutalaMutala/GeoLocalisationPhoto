/*
    Permet de faire Apparaitre de faire la navigation on map screen 
*/

import * as React from 'react'
import {createStackNavigator } from '@react-navigation/stack'
import MapScreen from '../screens/MapScreen'

const Stack = createStackNavigator(); 

function NavigationOfScreen (navigation) {
    return(
            <Stack.Navigator >
                <Stack.Screen
                name = 'Map'
                component={MapScreen}
                
                options = { 
                    {title: 'Map'}
                }
                />
            </Stack.Navigator>
    )
}
export default  NavigationOfScreen; 