import React from 'react';
import Map from '../components/Map';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
