import React from 'react';
import { StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';
import { Text, Input, Button } from 'react-native-elements';
const AuthForm = ({ headerText, errorMessage, onSubmit, buttonTitle }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="E-mail"
        value={email}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setPassword}
      />
      <Spacer>
        {errorMessage ? (
          <Text style={styles.errorMessage}> {errorMessage}</Text>
        ) : null}
        <Button
          title={buttonTitle}
          onPress={() => {
            onSubmit(email, password);
          }}
        />
      </Spacer>
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  errorMessage: { fontSize: 16, color: 'red', marginLeft: 15, marginTop: 15 },
});
