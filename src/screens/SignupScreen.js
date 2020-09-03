import React from 'react';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
const SignupScreen = () => {
  const { state, signUp, clearErrorMessage } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        // onDidBlur={() => {}}
        // onDidFocus={() => {}}
        // onWillBlur={() => {}}
        onWillFocus={clearErrorMessage}
      />
      <AuthForm
        onSubmit={signUp}
        buttonTitle="Sign Up"
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead."
      />
      <NavLink routeName="network" text="network log" />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return { header: () => false };
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: { flex: 1, marginBottom: 200, justifyContent: 'center' },
});
