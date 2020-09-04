import React from 'react';
import MapView, { Circle } from 'react-native-maps';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const {
    state: { currentLocation },
  } = React.useContext(LocationContext);

  if (!currentLocation)
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;

  const coords = {
    ...currentLocation.coords,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <MapView region={coords} style={styles.map} initialRegion={coords}>
      <Circle
        radius={30}
        center={currentLocation.coords}
        fillColor="rgba(158,158,255,0.3)"
        strokeColor="rgba(158,158,255,1.0)"
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({ map: { height: 300 } });
