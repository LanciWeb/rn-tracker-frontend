import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Circle, Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const {
    state: { locations, currentLocation },
  } = React.useContext(LocationContext);

  if (!currentLocation)
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;

  const coords = {
    ...currentLocation.coords,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <MapView region={coords} style={styles.map}>
      <Circle
        radius={30}
        center={currentLocation.coords}
        fillColor="rgba(158,158,255,0.3)"
        strokeColor="rgba(158,158,255,1.0)"
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({ map: { height: 300 } });
