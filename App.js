import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,Image,TextInput} from 'react-native';
import Form from './App/Components/Login';
import {createAppContainer,StackNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import signup from './App/Components/Signup';
import mainpage from './App/Components/MainPage';
const mainnavigator = createStackNavigator(
  {
    form: Form,
    signUp:signup,
    mainPage: mainpage,
  },
  {
    initialRouteName: 'form',
    defaultNavigationOptions: {
      headerBackTitle: true,
      headerTintColor: '#ffff',
      headerStyle: {
        backgroundColor: '#172964',
        elevation: 0
      }
      
    }
  } 
);
const style = StyleSheet.create({

})
export default createAppContainer(mainnavigator);


