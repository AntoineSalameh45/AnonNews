import React, {useState} from 'react';
import {Alert, ImageBackground} from 'react-native';
import styles from '../../screens/Login/styles';
import AppHeader from '../../components/organisms/AppHeader';
import LoginForm from '../../components/organisms/LoginForm';
import {useDispatch} from 'react-redux';
import {login} from '../../store/user/userSlice';
import {setValue} from '../../utils/getCookie';

const Login = ({navigation, setIsAuthenticated}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async (
    email: string,
    password: string,
    token_expires_in: string,
  ) => {
    setLoading(true);
    try {
      const response = await dispatch(
        login({email, password, token_expires_in}),
      );
      if (response.payload) {
        const accessToken = response.payload.accessToken;
        await setValue('accessToken', accessToken, 30);
        setIsAuthenticated(true);
        setLoginSuccess(true);
      } else {
        console.error('Login action did not return a payload:', response);
      }
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

  return (
    <>
      <ImageBackground
        source={require('../../assets/img4.jpg')}
        style={styles.bgimg}>
        <AppHeader showMenu={false} />
        <LoginForm
          handleLogin={handleLogin}
          loading={loading}
          navigation={navigation}
        />
      </ImageBackground>
    </>
  );
};

export default Login;
