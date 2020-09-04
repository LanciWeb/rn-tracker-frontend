import {
  Accuracy,
  watchPositionAsync,
  requestPermissionsAsync,
} from 'expo-location';
import React from 'react';
import '../_mockLocations';
import Map from '../components/Map';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import SafeArea from '../components/SafeArea';
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {
  const [err, setErr] = React.useState(null);
  const { addLocation } = React.useContext(LocationContext);
  const startWatching = async () => {
    try {
      const granted = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Permission Denied');
      }
      await watchPositionAsync(
        {
          timeInterval: 1000,
          distanceInterval: 10,
          accuracy: Accuracy.BestForNavigation,
        },
        (location) => {
          addLocation(location);
        }
      );
    } catch (e) {
      console.log('siamo qui');
      setErr(e);
    }
  };
  React.useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeArea>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeArea>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
