import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {signup} from '../../store/user/userSlice';
import AppHeader from '../../components/organisms/AppHeader';
import styles from './styles';

const Signup = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showMenu] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (text: string) => {
    setEmail(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleSignup = async (email: string, password: string) => {
    setLoading(true);
    try {
      await dispatch(
        signup({
          email,
          password,
          token_expires_in: undefined,
        }),
      );
      setLoading(false);
      Alert.alert(
        'Account Created',
        'Your account has been successfully created.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ],
      );
    } catch (error) {
      console.error('Error signing up:', error);
      setLoading(false);
      Alert.alert(
        'Error',
        'An error occurred during signup. Please try again.',
        [{text: 'OK'}],
      );
    }
  };

  // Disable button if email or password is empty
  const isDisabled = !email || !password;

  return (
    <>
      <ImageBackground
        source={require('../../assets/img4.jpg')}
        style={styles.bgimg}>
        <AppHeader showMenu={showMenu} />
        <View style={styles.container}>
          <View style={styles.subcontainer}>
            <Text style={styles.title}>Welcome to AnonNews.</Text>
            <TextInput
              placeholder="Email address"
              value={email}
              onChangeText={handleEmail}
              style={styles.input}
              placeholderTextColor="#22222269"
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={handlePassword}
              secureTextEntry={true}
              style={styles.input}
              placeholderTextColor="#22222269"
            />
            <TouchableOpacity
              style={[styles.button, {opacity: isDisabled ? 0.5 : 1}]} // Reduce opacity if disabled
              onPress={() => handleSignup(email, password)}
              disabled={loading || isDisabled} // Disable if loading or inputs are empty
            >
              <Text style={styles.buttonText}>
                {loading ? 'Creating your account...' : 'Create'}
              </Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Already one of us?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={styles.signupLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Signup;
