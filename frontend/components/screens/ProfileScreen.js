import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../assets/profileScreen.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 16,
        bottom: 0,
        zIndex:0,
        backgroundAttachment: "fixed"
    }
})