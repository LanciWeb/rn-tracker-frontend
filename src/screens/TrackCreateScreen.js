import React from 'react';
import '../_mockLocations';
import Map from '../components/Map';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import SafeArea from '../components/SafeArea';
import {
  Accuracy,
  watchPositionAsync,
  requestPermissionsAsync,
} from 'expo-location';

const TrackCreateScreen = () => {
  const [err, setErr] = React.useState(null);
  const startWatching = async () => {
    try {
      const granted = await requestPermissionsAsync();
      await watchPositionAsync(
        {
          timeInterval: 1000,
          distanceInterval: 10,
          accuracy: Accuracy.BestForNavigation,
        },
        (location) => {
          console.log(location);
        }
      );
      if (!granted) {
        throw new Error('Permission Denied');
      }
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
