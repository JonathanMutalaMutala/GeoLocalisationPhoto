import React from 'react'
import { StyleSheet, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar,Title,Caption,Paragraph,Drawer,Text } from 'react-native-paper'
import { DrawerContent, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'


export function MyDrawerContent(props) {

    const [isDarkTheme,setIsDarkTheme] = React.useState(false);
    const toggleTheme = () =>{
        setIsDarkTheme(!isDarkTheme);
    }


  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView>
            <View style = {styles.drawerContent} >
               <View styl={styles.userInfoSection} >
                   <View style = {{flexDirection:'row',marginTop:15}}>
                       <Avatar.Image 
                       
                       source = {{
                           uri : 'images\map-marker-pin-ConvertImage.png'
                       }}
                       size = {50} 
                       />
                       <View>
                           <Title style={styles.title}>Jonathan Mutala</Title>
                           <Caption style = {styles.caption}>@jonathanmutala</Caption>
                       </View>
                   </View>
                    <View style = {styles.row}>
                        <View style = {styles.section}>
                            <Paragraph style= {[styles.paragraph,styles.caption]}> 5 </Paragraph>
                            <Caption style={styles.caption}> publications</Caption>
                        </View>
                       
                        
                    </View>
               </View>
                    <Drawer.Section style={ styles.drawerSection}>

                    <DrawerItem
                    icon = {({color,size}) => (
                        <Icon
                        name = "account-outline"
                        color = {color}
                        size= {size}
                        />
                    )}
                    label = "Profile"
                    onPress = {() => {props.navigation.navigate('Profile')}}
                    
                    />

                    <DrawerItem
                    icon = {({color,size}) => (
                        <Icon
                        name = "image-album"
                        color = {color}
                        size= {size}
                        />
                    )}
                    label = "Voir les publications"
                    onPress = {() => {props.navigation.navigate('SeeAllPublications')}}
                    
                    />
                    
                    <DrawerItem
                    icon = {({color,size}) => (
                        <Icon
                        name =  "map-marker-outline"
                        color = {color}
                        size= {size}
                        />
                    )}
                    label = "Retour au map"
                    onPress = {() => {props.navigation.navigate('Map')}}
                    
                    />
                    
                    <DrawerItem
                    icon = {({color,size}) => (
                        <Icon
                        name = "settings-outline"
                        color = {color}
                        size= {size}
                        />
                    )}
                    label = "Settings"
                    onPress = {() => {props.navigation.navigate('Settings')}}
                    
                    />
                  
                    </Drawer.Section>


            </View>
        </DrawerContentScrollView>
        <Drawer.Section style = {styles.bottomDrawerSection}>
            <DrawerItem
              icon = {({color,size}) => (
                  <Icon
                  name = "exit-to-app"
                  color = {color}
                  size= {size}
                  />
              )}
              label = "Sign Out"
              onPress = {() => {}}
            
            />

        </Drawer.Section>
    </View>
  )
}

const styles = StyleSheet.create({
 drawerContent: {
     flex : 1 
 }, 
 userInfoSection : {
     paddingLeft : 20, 
 },
 title: {
     fontSize : 16, 
     marginTop : 3 , 
     fontWeight:'bold'
 }, 
 caption : {
     fontSize : 14, 
     lineHeight : 14, 
 }, 
 row : {
      marginTop : 20, 
      flexDirection : 'column-reverse',
      alignItems : 'center',
 },
 section : {
     flexDirection : 'row',
     alignItems : 'center',
     marginRight : 15
 },
 paragraph : {
     fontWeight : 'bold',
     marginRight : 3,
 },
 drawerSection : {
     marginTop : 15,
 },
 bottomDrawerSection : {
     marginBottom : 15,
     borderTopColor: '#f4f4f4',
     borderTopWidth : 1
 },
 preference : {
     flexDirection : 'row',
     justifyContent : 'space-between',
     paddingVertical : 12,
     paddingHorizontal : 16,
 },
 alignement : {
    paddingRight : 50
 }
})
