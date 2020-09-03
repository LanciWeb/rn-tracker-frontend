import React from 'react';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signIn, clearErrorMessage } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents
        // onDidBlur={() => {}}
        // onDidFocus={() => {}}
        // onWillBlur={() => {}}
        onWillFocus={clearErrorMessage}
      />
      <AuthForm
        onSubmit={signIn}
        buttonTitle="Sign In"
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
      />
      <NavLink
        routeName="Signup"
        text="Don't ypu have an account? Sign up instead."
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return { header: () => false };
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: { flex: 1, marginBottom: 200, justifyContent: 'center' },
});
