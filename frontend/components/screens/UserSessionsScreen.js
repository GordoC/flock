import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Meetings from '../../assets/meetings.svg'

export default function UserSessionsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Meetings style={styles.bg}/>
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