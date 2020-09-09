import React from 'react';
import { StyleSheet } from 'react-native';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';
import SafeArea from '../components/SafeArea';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signIn, clearErrorMessage } = React.useContext(AuthContext);
  return (
    <SafeArea style={styles.container}>
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
    </SafeArea>
  );
};

SigninScreen.navigationOptions = () => {
  return { header: () => false };
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: { flex: 1, marginBottom: 200, justifyContent: 'center' },
});
