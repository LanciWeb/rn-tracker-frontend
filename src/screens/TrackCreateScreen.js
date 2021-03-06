import React from 'react';
import '../_mockLocations';
import Map from '../components/Map';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import SafeArea from '../components/SafeArea';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';
import { withNavigationFocus } from 'react-navigation';
import { Context as LocationContext } from '../context/LocationContext';
const TrackCreateScreen = ({ isFocused }) => {
  const {
    addLocation,
    state: { recording },
  } = React.useContext(LocationContext);
  const callback = React.useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeArea>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeArea>
  );
};

TrackCreateScreen.navigationOptions = () => ({
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20} />,
});

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({});
