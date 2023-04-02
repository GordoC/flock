import React, {useState} from 'react';
import { StyleSheet, Text, Modal, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SessionModal(props) {
    const [show, setShow] = useState(true)
    const [joined, setJoined] = useState(false)
    return (
        <View style={styles.container}>
            <Modal transparent={true} visible={show}>
                <View style={styles.outside}>
                    <View style={styles.modal}>
                        <Ionicons name={'exit-outline'} size={30} color='#B6CFED' style={styles.exit} onPress={() => setShow(false)}/>
                        <View style={styles.modalBody}>
                            <Text style={{...styles.textStyle, fontSize: 36, fontWeight: 800}}>{props.info.course}</Text>
                            <Text style={styles.textStyle}>{props.info.date}</Text>
                            <Text style={styles.textStyle}>{props.info.time}</Text>
                            <View style={styles.groupSize}>
                                <Ionicons name={'person'} size={20} color='#3172BA' style={{marginRight: 10}} />
                                <Text style={styles.textStyle}>{props.info.groupSize}</Text>
                            </View>
                            <Text style={styles.textStyle}>{props.info.details}</Text>
                        </View>
                        <Button title={joined ? 'joined' : 'join'} onPress={() => setJoined(!joined)} color={joined ? '#B6CFED' : '#3172BA'}/>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    outside: {
        backgroundColor: '#000000aa',
        flex: 1
    },
    modal: {
        backgroundColor: '#ffffff',
        marginTop: 140,
        marginBottom: 140,
        marginLeft: 50,
        marginRight: 50,
        flex: 1,
        justifyContent: 'center',
        width: 300,
        height: 500,
        borderRadius: 20,
    },
    modalBody: {
        paddingLeft: 50
    }, 
    textStyle: {
        fontSize: 20,
        color: '#3172BA'
    },
    groupSize: {
        flexDirection: 'row'
    },
    joined: {
        color: '#FFF',

    },
    join: {
        color: '#FFF'
    },
    exit: {
        marginLeft: 250
    }
});