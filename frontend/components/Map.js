import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet } from 'react-native';

export default function Map() {
    return (
        <>
            <MapView 
                style={styles.map} 
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider={PROVIDER_GOOGLE}      
            />
        </>
    )
}

const styles = StyleSheet.create({
    map: {
      width: '100%',
      height: '100%',
    },
    searchBar: {

    }
  });