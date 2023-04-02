import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchBar } from './SearchBar'
import NewSessions from './NewSessions';

export default function Map() {
    const [ markers, setMarkers ] = useState([{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }])
    const [ showModal, setShowModal ] = useState(false)
    const [ tempCoords, setTempCoords ] = useState({})


    return (
        <View>
            {showModal && (
                <NewSessions coords={tempCoords} />
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