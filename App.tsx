import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigator from './src/navigation/MainNavigator';
import UnauthStack from './src/navigation/UnauthStack';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {getValue, removeValue, setValue} from './src/utils/getCookie';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [refreshToken, setRefreshToken] = useState(Date.now());

  useEffect(() => {
    BootSplash.hide();
    checkAuthentication();
  }, [refreshToken]);

  const checkAuthentication = async () => {
    try {
      const accessToken = await getValue('accessToken');
      const isAuthenticated = !!accessToken;
      setIsAuthenticated(isAuthenticated);
    } catch (error) {
      console.error('Error checking authentication:', error);
    }
  };

  const handleLogin = async (accessToken, setIsAuthenticated?) => {
    try {
      await setValue('accessToken', accessToken, 30);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error setting access token:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await removeValue('accessToken');
      await removeValue('refreshToken');
      setRefreshToken(Date.now());
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          {isAuthenticated ? (
            <MainNavigator handleLogout={handleLogout} />
          ) : (
            <UnauthStack
              handleLogin={accessToken =>
                handleLogin(accessToken, setIsAuthenticated)
              }
              setIsAuthenticated={setIsAuthenticated}
            />
          )}
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
