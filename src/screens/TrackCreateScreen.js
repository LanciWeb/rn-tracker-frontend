import React from 'react';
import '../_mockLocations';
import Map from '../components/Map';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import SafeArea from '../components/SafeArea';
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = React.useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);
  return (
    <SafeArea>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeArea>
  );
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({});
