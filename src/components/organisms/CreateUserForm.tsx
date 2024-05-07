import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import createUser, {
  iCreateUserRequestBody,
  iCreateUserResponse,
} from './CreateUser';

const CreateUserForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMsg('');

    try {
      const userData: iCreateUserRequestBody = {
        email,
        password,
        token_expires_in: '30m',
      };

      const response: iCreateUserResponse = await createUser(userData);
      console.log('User created successfully:', response);
    } catch (err: any) {
      console.error('Error creating user:', err.message);
      setErrorMsg(err.message || 'Failed to create user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}
      <Button
        title={loading ? 'Loading...' : 'Submit'}
        onPress={handleSubmit}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default CreateUserForm;
