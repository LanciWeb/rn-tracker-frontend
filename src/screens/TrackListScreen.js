import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text>TrackList</Text>
      <Button
        title="go to Track Detail"
        onPress={() => navigate('TrackDetail')}
      />
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
