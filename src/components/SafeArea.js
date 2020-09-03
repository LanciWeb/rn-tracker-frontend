import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

const SafeArea = ({ children }) => {
  return <SafeAreaView style={styles.droidSafeArea}>{children}</SafeAreaView>;
};

export default SafeArea;

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
