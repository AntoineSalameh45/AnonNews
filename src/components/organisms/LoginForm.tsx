import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  Pressable,
} from 'react-native';
import styles from '../../screens/Login/styles';

interface iLoginFormProps {
  handleLogin: (
    email: string,
    password: string,
    token_expires_in: string | undefined,
  ) => void;
  navigation: any;
}

const LoginForm = ({handleLogin, navigation}: iLoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmail = (text: string) => {
    setEmail(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await handleLogin(email, password, '30m');
    } catch (error) {
      console.error('An error occurred during login:', error);
      Alert.alert(
        'Error',
        'An error occurred during login. Please try again.',
        [{text: 'OK'}],
      );
    } finally {
      setLoading(false);
    }
  };

  const toSignup = () => {
    navigation.navigate('Signup');
  };

  const isDisabled = !email || !password;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Text style={styles.title}>Wait a minute. Who are you?</Text>
          <TextInput
            placeholder="Email address"
            value={email}
            onChangeText={handleEmail}
            style={styles.input}
            placeholderTextColor="#222222aa"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={handlePassword}
            secureTextEntry={true}
            style={styles.input}
            placeholderTextColor="#222222aa"
          />
          <TouchableOpacity
            style={[styles.button, {opacity: isDisabled ? 0.5 : 1}]}
            onPress={handleSubmit}
            disabled={loading || isDisabled}>
            <Text style={styles.buttonText}>
              {loading ? 'Signing in...' : 'Sign in'}
            </Text>
          </TouchableOpacity>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Not a member?</Text>
            <Pressable onPress={toSignup}>
              <Text style={styles.signupLink}>
                Sign up to see our latest news
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginForm;
