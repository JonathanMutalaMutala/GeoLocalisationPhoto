import React from 'react'
import { StyleSheet, Text, View, ImageBackground,Image, TextInput, TouchableOpacity} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

import bgImagePresentation from '../../images/backGroundColor.jpg'

function LoginScreen(props){
  const {navigation} = props
    return(
        <ImageBackground  
            style={styles.background}
            source={bgImagePresentation}        
        >
            <View style = {styles.container}/>
            <View style = {styles.centrerTextInput}>
                    <View style = {styles.inputWrap}>
                        <Input
                        style= {styles.inputUserNameAndPassWord ,{paddingRight: 40}}
                        placeholder = " Username"
                        textAlign={'center'}
                        placeholderTextColor="#000"                       
                        leftIcon={
                        <Icon
                            name='user'
                            size={30}
                            color='black'
                        />
                        }                  
                        />
                    </View>

                    <View style= {styles.inputWrap}>
                        <Input
                                style = {styles.inputUserNameAndPassWord}
                                placeholder = " Password"
                                placeholderTextColor="black"  
                                textAlign={'center'}                    
                                leftIcon={
                                <Icon
                                    name='lock'
                                    size={30}
                                    color='black'
                                />
                                }
            
                            />
                    </View>
                    <TouchableOpacity activeOpacity= {.5} onPress = {() => navigation.navigate('Map') }>
                        <View style={styles.LoginAndSignIn_Btn}>
                                <Text style= {styles.buttonText}>Login</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity= {.5}>
                        <View style={styles.LoginAndSignIn_Btn}>
                            <Text style= {styles.buttonText}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity= {.5}>
                        <View>
                            <Text style= {styles.forgotPasswordText}>Forgot Password ?</Text>
                        </View>
                    </TouchableOpacity>
                    
             <View style={styles.container}/>   
         </View> 

        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      background : {
        width: null,
        height: null, 
        flex: 1
      },
      inputWrap: {
        flexDirection:"row",
        marginVertical: 10,
        height: 40,
        backgroundColor: "transparent",
      }, 
      inputUserNameAndPassWord: {
        flex: 1, 
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        color:'black',
       
      },
      centrerTextInput: {
        paddingHorizontal: 15,
        paddingVertical : 80
      },
      LoginAndSignIn_Btn : {
        backgroundColor : "green",
        paddingVertical: 15, 
        marginVertical : 15, 
        marginHorizontal: 30,
        alignItems: "center", 
        justifyContent: "center", 
        borderRadius: 30
      }, 
      buttonText: {
        color: "black", 
        fontSize: 20, 
    
      },
      forgotPasswordText : 
      {
        color: "black",
        backgroundColor: "transparent", 
        textAlign: "center", 
      }
})
export default LoginScreen;
