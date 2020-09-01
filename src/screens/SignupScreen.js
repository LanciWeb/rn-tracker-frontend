import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button title="go to signin" onPress={() => navigate('Signin')} />
      <Button title="go to main flow" onPress={() => navigate('mainFlow')} />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
