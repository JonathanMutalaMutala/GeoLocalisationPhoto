import React from 'react' ; 
import { StyleSheet,Text,View } from 'react-native'; 
import { MaterialIcons } from 'react-native-vector-icons'

import { DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,  } from '@react-navigation/drawer'

function Header({navigation}) {

    return(
        <View style={styles.header}>
              <MaterialIcons name='menu' size = {50} onPress={() => navigation.openDrawer()}  style = {styles.icon} />
            <View >
                <Text style={styles.headerText}> Screen Map </Text>
            </View>
        </View>
    ); 
}
const styles = StyleSheet.create({
    header: {
        width : '100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    headerText : {
        fontWeight : 'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,
    },
    icon : {
        position : 'absolute',
        right : -70,
        top: 5,
        color : "blue"
   }

})
export default Header; 