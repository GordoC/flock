import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, Pressable } from 'react-native';
import LoginScreen from '../../assets/loginScreen.svg';

export default function Landing({ navigation }) {
    return (
        <View style={styles.container}>
            <LoginScreen style={styles.bg}/>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Email' style={styles.input}/>
                <TextInput placeholder='Password' secureTextEntry={true} style={styles.input}/>
                <Pressable style={styles.logInButton} onPress={() => Alert.alert('button pressed')}>
                    <Text style={styles.text}>Log In</Text>
                </Pressable>
                <Pressable style={styles.signUpButton} onPress={() => Alert.alert('button pressed')}>
                    <Text style={styles.text}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },

    bg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 16,
        bottom: 0,
        zIndex:-1
    },
    input: {
        backgroundColor: "#F6F6F6",
        color: "#000000",
        height: 50,
        borderRadius: 12,
        paddingLeft: 20,
        marginBottom: 10
    },
    inputContainer: {
        marginTop: "80%",
        paddingLeft:40,
        paddingRight:40,
    },
    logInButton: {
        backgroundColor: "#B6CFED",
        height: 44,
        width: 150,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginLeft: 160,
        marginTop:40
    },
    signUpButton: {
        backgroundColor: "#3172BA",
        height: 44,
        width: 150,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginTop:10,
        marginLeft: 160,
    },
    text: {
        color:"#FFFFFF",
        fontFamily: "Inter",
        fontSize: 15,
    }
  })
