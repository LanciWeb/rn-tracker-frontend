import React from 'react';
import Map from '../components/Map';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import SafeArea from '../components/SafeArea';
import { requestPermissionsAsync } from 'expo-location';

const TrackCreateScreen = () => {
  const [err, setErr] = React.useState(null);
  const startWatching = async () => {
    try {
      const granted = await requestPermissionsAsync();
      if (!granted) {
        setErr('Permission Denied');
      }
    } catch (e) {
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
