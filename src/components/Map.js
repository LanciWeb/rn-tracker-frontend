import React from 'react';
import MapView, { Polyline } from 'react-native-maps';
import { StyleSheet } from 'react-native';

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 38.959179 + i * 0.001,
      longitude: 16.286726 + i * 0.001,
    });
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 38.959179,
        longitude: 16.286726,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({ map: { height: 300 } });
