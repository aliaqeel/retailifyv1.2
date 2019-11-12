import React ,{useState} from 'react';

import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements'; 
import LinearGradient from 'react-native-linear-gradient';
import PasswordInputText from 'react-native-hide-show-password-input';
import { Dimensions } from 'react-native';

let {width, height} = Dimensions.get('window')
console.log(width, height)
const signup = (props) => {
    const [name,setName]= useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [address,setAddress]=useState('');
    const [city,setCity] = useState('');
  
    return(
        <View style= {styles.formContainer}>
            <Image style={styles.images} source={require('../Images/logoimage.jpeg')}/>
            <Text style={styles.heading}>Retailify</Text>
            <Text style={styles.subheading}>Shopping Made Simple</Text>
            <Text style={styles.subheading2}>SIGN UP</Text>
            <TextInput placeholder='name' style={styles.textInput}
                 value={name} onChangeText={ (name) => setName({ name }) }
            />
             <TextInput style={styles.textInput1} placeholder='email'  
                value={email} onChangeText={ (email) => setEmail({ email })}
            />
             <TextInput style={styles.textInput2} placeholder='password' secureTextEntry={true}  
                value={password} onChangeText={ (password) => setPassword({ password })}
            />
             <TextInput style={styles.textInput3} placeholder='address'   
                value={address} onChangeText={ (address) => setAddress({ address})}
            />
             <TextInput style={styles.textInput4} placeholder='city'   
                value={city} onChangeText={ (city) => setCity({ city})}
            />
            <TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate('form')}}>
                <Text style={styles.btntext} >
                    SIGN UP
                </Text>
            </TouchableOpacity>
          </View>  
    );
}
const styles = StyleSheet.create({
    formContainer:{
        //position:'absolute',
           alignSelf:"stretch",
           flex:1,
            left:0,
            top:0,
            bottom:0,
            backgroundColor: 'rgb(23, 41, 100)',
        },  
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
            alignItems: 'center',
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
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            alignContent:'center',
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
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            alignContent:'center',
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
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            alignContent:'center',
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
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            alignContent:'center',  
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
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            alignContent:'center',
        },
        textInput2:{
            //alignSelf:'center',
            padding:20,
            position:'absolute',
            left:width - (width*((width-70)/width)),
            width:width - (width*((width-270)/width)),
            height:height-(height*((height -53)/height)),
            bottom:height-(height*((height -280)/height)),
            backgroundColor:'rgb(14, 29, 75)',
            borderRadius:20,  
        },
        textInput3:{
            //alignSelf:'center',
            padding:20,
            position:'absolute',
            left:width - (width*((width-70)/width)),
            width:width - (width*((width-270)/width)),
            height:height-(height*((height -53)/height)),
            bottom:height-(height*((height -210)/height)),
            backgroundColor:'rgb(14, 29, 75)',
            borderRadius:20, 
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            alignContent:'center', 
        },
        textInput4:{
            //alignSelf:'center',
            padding:20,
            position:'absolute',
            left:width - (width*((width-70)/width)),
            width:width - (width*((width-270)/width)),
            height:height-(height*((height -53)/height)),
            bottom:height-(height*((height -140)/height)),
            backgroundColor:'rgb(14, 29, 75)',
            borderRadius:20,
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            alignContent:'center',  
        },
        button:{
            position:'absolute',
            width:width - (width*((width-230)/width)),
            height:width - (width*((width-30)/width)),
            left:height-(height*((height -90)/height)),
            bottom:height-(height*((height -90)/height)),
            backgroundColor:'rgb(243, 93, 24)',
            borderRadius:50,
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            alignContent:'center',
           },
           btntext:{
            position:'absolute',
            width:width * 0.1701388889,
            height:height * 0.0396484375,
            left:width * 0.1701388889,
            top:height * 0.00546875, 
            fontFamily:'sans-serif',
            fontStyle:'normal',
            fontWeight:"600",
            fontSize:18,
            lineHeight:29,
            textAlign:'center',
            textTransform:'uppercase',
            color:'#FFFFFF',
            borderRadius:50,
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            alignContent:'center', 
           },
        
});
export default signup;