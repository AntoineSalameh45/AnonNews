import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
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

  const handleSignup = (email: string, password: string) => {
    dispatch(
      signup({
        email,
        password,
        token_expires_in: undefined,
      }),
    );
    console.log(email, password);
  };

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
              style={styles.button}
              onPress={() => handleSignup(email, password)}>
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
