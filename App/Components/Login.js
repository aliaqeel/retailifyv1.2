import React , {useState} from 'react';
import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity} from 'react-native';
import {createAppContainer,StackNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Button} from 'react-native-elements'; 
import LinearGradient from 'react-native-linear-gradient';
import PasswordInputText from 'react-native-hide-show-password-input';
import Fonts from '../utils/font';
import * as Font from 'expo-font';
import { Dimensions } from 'react-native';
import FBSDK,{LoginManager} from 'react-native-fbsdk';
//_fbAuth=()=>{
    //LoginManager.    
//}
let {width, height} = Dimensions.get('window')

const Form = (props) => {
 //render(){
  
   const [username,setName]= useState('');
   const [password,setPassword] = useState('');

    //async componentDidMount() {
      //  await Font.loadAsync({
        //  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        //});
    
        //this.setState({ fontLoaded: true });
      //}
    return (
        <View style= {styles.formContainer}>
            <Image style={styles.images} source={require('../Images/logoimage.jpeg')}/>
           <Text style={styles.heading}>Retailify</Text>
            <Text style={styles.subheading}>Shopping Made Simple</Text>
            <Text style={styles.subheading2}>SIGN IN TO GET STARTED</Text>
            <TextInput placeholder='email address' style={styles.textInput}
                 value={username} onChangeText={ (username) => setName( username) }
            />
            <TextInput style={styles.textInput1} placeholder='password' secureTextEntry={true}  
                value={password} onChangeText={ (password) => setPassword( password )}/>

            <TouchableOpacity style={styles.button}  onPress={()=>{props.navigation.navigate('mainPage')}}>
                <Text style={styles.btntext}>
                    Login
                </Text>
            </TouchableOpacity>

            <Text style={styles.showtext1}>OR SIGN UP TO GET STARTED</Text>
            <TouchableOpacity style={styles.button2} onPress={this._onPressButton}>
                <View>
                <Image style={styles.googleimages} source={require('../Images/googlepng.png')}/>
                </View>
                <Text style={styles.btn2text}>
                    CONTINUE WITH GOOGLE
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}   onPress={()=>{props.navigation.navigate('url:https://www.facebook.com')}}>
                <View>
                <Image style={styles.facebookimages} source={require('../Images/Vector.png')}/>
                </View>
                <Text style={styles.btn3text}>
                    CONTINUE WITH FACEBOOK
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button4}  onPress={()=>{props.navigation.navigate('signUp')}}>
                <Text style={styles.btn4text}>
                    CREATE ACCOUNT
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button5}  onPress={this._onPressButton}>
                <Text style={styles.btn5text}>
                    Forgot Password
                 </Text>
            </TouchableOpacity>
        </View>
        );
 //}
}

const styles = StyleSheet.create({
    images:{
        height:height-(height*((height -70)/height)),
        width:width - (width*((width-52)/width)),

        position: 'absolute',
        //alignSelf:'stretch',
        left:width - (width*((width-75)/width)),
        //rigt:0,
        top:height-(height*((height -45)/height)),
        //bottom:0,
        //width: null,
       justifyContent: 'center',
       // alignItems: 'center',
      },
      googleimages:{
        height:height-(height*((height -15)/height)),
        width:width - (width*((width-15)/width)),
        position: 'absolute',
        left:width - (width*((width-10)/width)),
        top:height-(height*((height -8)/height)),
       justifyContent: 'center',
      // color:'rgb(234, 67, 54)'
       // alignItems: 'center',
      },
      facebookimages:{
        height:height-(height*((height -15)/height)),
        width:width - (width*((width-15)/width)),
        position: 'absolute',
        left:width - (width*((width-7)/width)),
        top:height-(height*((height -8)/height)),
       justifyContent: 'center',
      // color:'rgb(234, 67, 54)'
       // alignItems: 'center',
      },
    
    formContainer:{
    //position:'absolute',
       alignSelf:"stretch",
       flex:1,
        left:0,
        top:0,
        bottom:0,
        backgroundColor: 'rgb(23, 41, 100)',

    },  
    heading:{
        position:'absolute',
        left: width - (width*((width-140)/width)),
        right:width - (width*((width-29.73)/width)),
        top:height-(height*((height -29.73)/height)),
        bottom:height-(height*((height -78.62)/height)),
        fontFamily:'sans-serif',
        fontWeight:'bold',
        fontStyle:'normal',
        fontSize:48,
        lineHeight:87,
        color:'rgb(250,114,31)',
        //flex:1,
        //flexDirection:"row",
        //justifyContent:'center',
        //alignContent:'center',
       },
       subheading:{
        position:'absolute',
        left:width - (width*((width-140)/width)),
        right:width - (width*((width-18.13)/width)),
        top:height-(height*((height -85)/height)),
        bottom:height-(height*((height -76.11)/height)),
        fontFamily:'sans-serif',
        fontStyle:'normal',
        fontWeight:'600',
        fontSize: 20,
        lineHeight:44,
        color:'rgb(253, 232, 223)',
        //flex:1,
        //flexDirection:"row",
        //justifyContent:'center',
        //alignContent:'center',
    }, 
       subheading2:{
        position:'absolute',
        //width:423,
        //height:49,
        left:width - (width*((width-95)/width)),
        top:height-(height*((height -150)/height)),
        fontFamily:'sans-serif',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize: 22,
        lineHeight:20,
        textAlign:"center",
        textTransform:"uppercase",
        color:'#ffff',
        //flex:1,
        //flexDirection:"row",
        //justifyContent:'center',
        //alignContent:'center',
    }, 
    showtext1:{
        position:'absolute',
        width:width - (width*((width-150)/width)),
        height:height-(height*((height -50)/height)),
        left:width - (width*((width-135)/width)),
        top: height-(height*((height -350)/height)),
        fontFamily:'sans-serif',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:12,
        lineHeight:27,
        alignItems:'center',
        textTransform:'uppercase',
        color:'#ffffff',
        //flex:1,
        //flexDirection:"row",
        //justifyContent:'center',
        //alignContent:'center',
       },
    
    textInput:{
        //alignSelf:'center',
        padding:20,
        position:'absolute',
        left:width - (width*((width-70)/width)),
        width:width - (width*((width-270)/width)),
        height:height-(height*((height -55)/height)),
        bottom:height-(height*((height -420)/height)),
        backgroundColor:'rgb(14, 29, 75)',
        borderRadius:20,  
        //flex:1,
        //flexDirection:'row',
        //justifyContent:'center',
        //alignContent:'center',
    },
    textInput1:{
        //alignSelf:'center',
        padding:20,
        position:'absolute',
        left:width - (width*((width-70)/width)),
        width:width - (width*((width-270)/width)),
        height:height-(height*((height -53)/height)),
        bottom:height-(height*((height -350)/height)),
        backgroundColor:'rgb(14, 29, 75)',
        borderRadius:20,
        //flex:1,
        //flexDirection:'row', 
        //justifyContent:'center',
        //alignContent:'center', 
    },
    button:{
        position:'absolute',
        width:width - (width*((width-230)/width)),
        height:height-(height*((height -30)/height)),
        left:width - (width*((width-90)/width)),
        top:height-(height*((height -310)/height)),
        backgroundColor:'rgb(243, 93, 24)',
        borderRadius:50,
        //flex:1,
        //flexDirection:'row',
        //justifyContent:'center',
        //alignItems:'center',
        //alignContent:'center',
       },
       btntext:{
        position:'absolute',
        width:width - (width*((width-70)/width)),
        height:height-(height*((height -29)/height)),
        left:width - (width*((width-70)/width)),
        top:height-(height*((height -4)/height)),
        fontFamily:'sans-serif',
        fontStyle:'normal',
        fontWeight:"600",
        fontSize:24,
        lineHeight:29,
        textAlign:'center',
        textTransform:'uppercase',
        color:'#FFFFFF',
        borderRadius:50,
        //justifyContent:'center',
        //alignItems:'center',
        //alignContent:'center',
       },
       button2:{
        position:'absolute',
        width:width - (width*((width-230)/width)),
        height:height-(height*((height -30)/height)),
        left:width - (width*((width-92)/width)),
        top:height-(height*((height -380)/height)),
        backgroundColor:'rgb(234, 67, 54)',
        borderRadius:50,
        //flex:1,
        //flexDirection:'row',
        //alignItems:'center',
        //alignContent:'center',
       },
       btn2text:{
        position:'absolute',
        height:height-(height*((height -48)/height)),
        left:width - (width*((width-26.67)/width)),
        top:height-(height*((height -3)/height)), 
        fontFamily:'sans-serif',
        fontStyle:'normal',
        fontWeight:"600",
        fontSize:14,
        lineHeight:24,
        //display:'flex',
        textAlign:'center',
        letterSpacing:2,
        textTransform:'uppercase',
        color:'#FFFF',
        borderRadius:50,
        //justifyContent:'center',
        //alignItems:'center',
        //alignContent:'center',
       },
       button3:{
        position:'absolute',
        width:width - (width*((width-230)/width)),
        height:height-(height*((height -30)/height)),
        left:width - (width*((width-95)/width)),
        top:height-(height*((height -420)/height)),
        backgroundColor:'rgb(31, 55, 135)',
        borderRadius:50,
        //flex:1,
        //flexDirection:'row',
        //alignItems:'center',
        //alignContent:'center',
       },
       btn3text:{
        position:'absolute',
        height:height-(height*((height -48)/height)),
        right:width - (width*((width-9)/width)),
        top:height-(height*((height -3)/height)),
        fontFamily:'sans-serif',
        fontStyle:'normal',
        fontWeight:"600",
        fontSize:14,
        lineHeight:24,
        display:'flex',
        textAlign:'center',
        letterSpacing:2,
        textTransform:'uppercase',
        color:'#FFFFFF',
        borderRadius:50,
        //justifyContent:'center',
        //alignItems:'center',
        //alignContent:'center',
       },
       button4:{
        position:'absolute',
        width:width - (width*((width-230)/width)),
        height:height-(height*((height -30)/height)),
        left:width - (width*((width-90)/width)),
        top:height-(height*((height -460)/height)),
        //right:0,
        bottom:0,
        backgroundColor:'rgb(14, 29, 75)',
        borderRadius:50,
        //flex:1,
        //flexDirection:'row',
        //alignItems:'center',
        //alignContent:'center',
       },
       btn4text:{
        position:'absolute',
        width:width - (width*((width-231)/width)),
        height:height-(height*((height -29)/height)),
        left:width - (width*((width-1)/width)),
        top:height-(height*((height -3)/height)),
        fontFamily:'sans-serif',
        fontStyle:'normal',
        fontWeight:"600",
        fontSize:16,
        lineHeight:24,
        textAlign:'center',
        textTransform:'uppercase',
        color:'#FFFFFF',
        borderRadius:50,
       // justifyContent:'center',
        //alignItems:'center',
        //alignContent:'center',
       },
       button5:{
        position:'absolute',
        width:width - (width*((width-230)/width)),
        height:height-(height*((height -30)/height)),
        left:width - (width*((width-90)/width)),
        top:height-(height*((height -500)/height)),
        bottom:0,
        //backgroundColor:'rgb(14, 29, 75)',
        //borderRadius:50,
        //flex:1,
        //flexDirection:'row',
        //alignItems:'center',
        //alignContent:'center',
       },
       btn5text:{
        position:'absolute',
        width:width - (width*((width-231)/width)),
        height:height-(height*((height -27)/height)),
        left:width - (width*((width-75)/width)),
        top:height-(height*((height -3)/height)),
        fontFamily:'sans-serif',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:12,
        lineHeight:27,
        alignItems:'center',
        color:'#ffff',
        justifyContent:'center',
        //alignItems:'center',
        //alignContent:'center',
       },
    
    
});
export default Form;
