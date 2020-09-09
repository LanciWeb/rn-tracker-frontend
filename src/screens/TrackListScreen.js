import React from 'react';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { navigate } = navigation;
  const { state, fetchTracks } = React.useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text>Track List</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigate('TrackDetail', { _id: item._id });
              }}
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
