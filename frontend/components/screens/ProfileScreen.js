import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileScreenBg from '../../assets/profileScreen.svg'

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ProfileScreenBg style={styles.bg}/>
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