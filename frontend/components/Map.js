import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { SearchBar } from './SearchBar'
import NewSessions from './NewSessions';
import { io } from 'socket.io-client'

export default function Map() {
    const [ markers, setMarkers ] = useState([])
    const [ showModal, setShowModal ] = useState(false)
    const [ tempCoords, setTempCoords ] = useState({})

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

    return (
        <View>
            {showModal && (
                <NewSessions coords={tempCoords} socket={socket} />
            )}
            <MapView 
                style={styles.map} 
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider={PROVIDER_GOOGLE}
                onLongPress={(e) => {
                    setShowModal(true)
                    setTempCoords({...e.nativeEvent.coordinate})
                    setMarkers([...markers, {
                        ...e.nativeEvent.coordinate,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }])
                }}
            >
                {
                    markers.map((coords, idx) => {
                        return <Marker key={idx} coordinate={coords} />
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