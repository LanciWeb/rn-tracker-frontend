import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam('_id');
  const { state } = React.useContext(TrackContext);
  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text h1>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={track.locations.map((l) => l.coords)} />
      </MapView>
    </>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({ map: { height: 300 } });
