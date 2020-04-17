/*
  ce fichier va permetre à afficher le drawer à droite de MapScreen 

*/


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SeeAllPublications from '../screens/SeePublicationsScreen'
import ProfilesScreen from '../screens/ProfilesScreen'
import MapScreen from '../screens/MapScreen' 
import Settings from '../screens/SettingsScreen'
import NavigationScreen from '../navigation/NavigationOfScreen'
import { MyDrawerContent} from './MyDrawerContent'



const Drawer =  createDrawerNavigator();

function NavigationDrawer(){
    return(
        <NavigationContainer initialRouteName = "Login">
          
         <Drawer.Navigator 
          drawerContent={props => <MyDrawerContent {... props} /> } 
          drawerPosition = 'right'
         >

          <Drawer.Screen name="Login" component={NavigationScreen}/>
          <Drawer.Screen name="Map" component={MapScreen}/>
          <Drawer.Screen name="SeeAllPublications" component={SeeAllPublications}/>
          <Drawer.Screen name="Settings" component={Settings}/>
          <Drawer.Screen name="Profile" component={ProfilesScreen}/>

         
          
        </Drawer.Navigator>
      </NavigationContainer>
       
    );
}

export default NavigationDrawer;