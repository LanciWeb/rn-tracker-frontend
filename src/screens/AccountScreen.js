import React from 'react';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
const AccountScreen = () => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text>Account screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signOut} />
      </Spacer>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
