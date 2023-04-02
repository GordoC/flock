//import { io } from 'socket.io-client'
import { StyleSheet, Text, View } from 'react-native';
// import React, { useState } from 'react';
// import Landing from './components/auth/Landing';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainContainer from './components/MainContainer';

const Stack = createStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Landing'>
    //     <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <MainContainer />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});