import React from 'react';
import Map from '../components/Map';
import { Text } from 'react-native-elements';
import { StyleSheet, SafeAreaView } from 'react-native';
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
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
