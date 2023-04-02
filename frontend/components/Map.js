import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import NewSessions from './NewSessions';
import SessionModal from './SessionModal';

export default function Map() {
    const [ markers, setMarkers ] = useState([{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }])
    const [ showModal, setShowModal ] = useState(false)
    const [ tempCoords, setTempCoords ] = useState({})
    const [ currSessionInfo, setCurrSessionInfo ] = useState({})
    const [ showSessionModal, setShowSessionModal ] = useState(false)

    const handlePress = async ({ longitude, latitude }) => {
        await fetch(`http://localhost:1337/api/sessions?filters[longitude][$eq]=${longitude}&filters[latitude][$eq]=${latitude}`)
        .then((res) => res.json())
        .then((data) => {
            setCurrSessionInfo(data)
            setShowSessionModal(true)
        })
    }

    return (
        <View>
            {showModal && (
                <NewSessions coords={tempCoords} />
            )}
            {
                showSessionModal && (
                    <SessionModal info={currSessionInfo} />
                )
            }
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
                        return <Marker key={idx} coordinate={coords} onPress={
                            (e) => handlePress(...e.nativeEvent.coordinate)
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