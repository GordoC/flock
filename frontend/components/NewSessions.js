import React, {useState} from 'react';
import { StyleSheet, FlatList, Text, Modal, View, Button, TextInput } from 'react-native';
import NewSessionBackground from '../assets/NewSessionnBackgroud.svg';

function NewSessions(props: location) {
    state = {
        TextInputs: []
    };
    return(
        <View style={styles.page}>
            <Text>idk</Text>
            <Modal transparent={true} visible={true}>
                <View style={styles.outside}>
                    <View style={styles.modal}>
                        <NewSessionBackground style={styles.component}/>
                        <View style={styles.content}>
                            <Text style={styles.location}>@ {props.location}</Text>
                            <FlatList
                                data={[
                                    {key: 'Course'},
                                    {key: 'Date'},
                                    {key: 'Time'},
                                    {key: 'Group Size'},
                                    {key: 'Details'}
                                ]} 
                                renderItem={({item}) => {
                                    return (
                                        <View style={styles.format}>
                                            <Text style={styles.item}>{item.key}</Text>
                                            <TextInput style={styles.input} />
                                        </View>
                                    )
                            }}
                            style={styles.list}/>
                            <View style={styles.buttons}>
                                <Button title='Cancel' color='#B6CFED'/>
                                <Button title='Submit' color='#3172BA'/>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginTop: 100
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
        marginRight:50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 500
    },
    bg: {
        zIndex: -1
    },
    component: {
        position: 'absolute'
    },
    item: {
        width: 200
    },
    location: {
        marginTop: 110,
        marginBottom: 10,
        fontSize: 20
    },
    input: {
        flex: 1,
        backgroundColor: '#ECF1F8',
        borderRadius: 8
    },
    cancelBtn: {
        borderRadius: 30
    },
    submitBtn: {
        borderRadius: 30
    },
    buttons: {
        
    }
});

export default NewSessions;