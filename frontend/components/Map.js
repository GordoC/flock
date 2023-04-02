import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import NewSessions from './NewSessions';
import { io } from 'socket.io-client'
import SessionModal from './SessionModal';

export default function Map() {
    const [ markers, setMarkers ] = useState([])
    const [ showModal, setShowModal ] = useState(false)
    const [ tempCoords, setTempCoords ] = useState({})
    const [ currSessionInfo, setCurrSessionInfo ] = useState({})
    const [ showSessionModal, setShowSessionModal ] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:1337/api/sessions`, {
            method: 'GET',
            mode: 'cors'
        })
        .then((response) => response.json())
        .then((data) => {
            let newMarkers = []
            for (let i = 0; i < data.data.length; i++) {
                newMarkers.push({
                    latitude: data.data[i].attributes.latitude, 
                    longitude: data.data[i].attributes.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                })
            }
            setMarkers(newMarkers)
        })
    }, [])

    const socket = io("http://localhost:1337")
    socket.on("receive-pin", async (longitude, latitude) => {
        console.log("GOODBYE WORLD")
        console.log(longitude)
        console.log(latitude)
        setMarkers([ ...markers, {
            latitude: latitude, 
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421} ])
    })
    const handlePress = async (coords) => {
        await fetch(`http://localhost:1337/api/sessions?filters[longitude][$eq]=${coords.longitude}&filters[latitude][$eq]=${coords.latitude}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.data[0].attributes)
            setCurrSessionInfo(data.data[0].attributes)
            setShowSessionModal(true)
        })
    }

    return (
        <View>
            {showModal && (
                <NewSessions coords={tempCoords} socket={socket} />
            )}
            {
                showSessionModal && (
                    <SessionModal info={currSessionInfo} />
                )
            }
            <MapView 
                style={styles.map} 
                initialRegion={{
                    latitude: 49.2666656,
                    longitude: -123.249999,
                    latitudeDelta: 0.0722,
                    longitudeDelta: 0.0221,
                }}
                provider={PROVIDER_GOOGLE}
                onLongPress={(e) => {
                    setShowModal(true)
                    setTempCoords({...e.nativeEvent.coordinate})
                    setMarkers([...markers, {
                        ...e.nativeEvent.coordinate,
                        latitudeDelta: 1,
                        longitudeDelta: 1,
                    }])
                }}
            >
                {
                    markers.map((coords, idx) => {
                        return <Marker key={idx} coordinate={coords} onPress={
                            (e) => handlePress(e.nativeEvent.coordinate)
                        } />
                    })
                }
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
      width: '100%',
      height: '100%',
    }
  });