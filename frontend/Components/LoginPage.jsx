import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import LoginCloud from '../assets/LoginCloud.svg';

export const LoginPage = () => {
    return (
    <SafeAreaView>
      <Text>Log In</Text>
        <LoginCloud style={{position: "absolute", bottom: 0, left: 0}}/>
    </SafeAreaView>
    )
};