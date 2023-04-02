import React, {useState} from 'react';
import { StyleSheet, FlatList, Text, Modal, View, Button, TextInput } from 'react-native';
import NewSessionBackground from '../assets/NewSessionnBackgroud.svg';

function NewSessions(props) {
    const [show, setShow] = useState(true)
    const [submissionData, setSubmissionData] = useState({})

    const handleChange = (key, value) => {
        const newData = {
            ...submissionData,
        }

        if (key === 'Group Size') {
            newData['groupSize'] = value
        } else {
            newData[key.toLowerCase()] = value
        }
        setSubmissionData(newData)
    }

    const handlePress = async () => {
        const finalSubmission = {
            ...submissionData
        }
        finalSubmission['longitude'] = props.coords.longitude + ""
        finalSubmission['latitude'] = props.coords.latitude + ""
        console.log(finalSubmission);
        await fetch('http://localhost:1337/api/sessions', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({data:finalSubmission})
                    
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        props.socket.emit("create-pin", finalSubmission['longitude'], finalSubmission['latitude'])
        setShow(false)
    }

    return(
        <View style={styles.page}>
            <Modal transparent={true} visible={show}>
                <View style={styles.outside}>
                    <View style={styles.modal}>
                        <NewSessionBackground style={styles.component}/>
                        <View style={styles.content}>
                            <Text style={styles.location}>@ {props.location}</Text>
                            <FlatList
                                data={[
                                    {key: 'Course'},
                                    {key: 'Time'},
                                    {key: 'Group Size'},
                                    {key: 'Description'}
                                ]} 
                                renderItem={({item}) => {
                                    return (
                                        <View style={styles.format}>
                                            <Text style={styles.item}>{item.key}</Text>
                                            <TextInput 
                                                style={styles.input}
                                                onChangeText={text => {
                                                    handleChange(item.key, text)
                                                }} 
                                            />
                                        </View>
                                    )
                            }}
                            style={styles.list}/>
                            <View style={styles.buttons}>
                                <Button title='Cancel' color='#B6CFED' onPress={() => setShow(false)}/>
                                <Button title='Submit' color='#3172BA' onPress={() => handlePress()}/>
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
        marginBottom: 25
    }
});

export default NewSessions;