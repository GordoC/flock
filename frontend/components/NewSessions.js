import React from 'react';
import { StyleSheet, Text, Modal, View, Button } from 'react-native';

class NewSessions extends React.Component {
    constructor() {
        super();
        this.state = {show: false};
    }
    render() {
        return(
            <View>
                <Text>Not Modal</Text>
                <Button title='Show modal' onPress={()=>{this.setState({show: true})}}/>
                <Modal transparent={true} visible={this.state.show} style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View>
                            <Text style={{fontSize:50}}>Model Text</Text>
                            <Button title='Close Modal' onPress={()=>{this.setState({show: false})}} />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#000000',
        flex: 1
    },
    modalContent: {
        margin: 50
    }

});

export default NewSessions;