import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackParamList';
import React from 'react';
import Signup from '../screens/SignUp';
import Login from '../screens/Login';

const UnauthStackTab = createStackNavigator<RootStackParamList>();

const UnauthStack = ({handleLogin, setIsAuthenticated}) => {
  return (
    <UnauthStackTab.Navigator>
      <UnauthStackTab.Screen
        name="Login"
        children={({navigation}) => (
          <Login
            handleLogin={handleLogin}
            setIsAuthenticated={setIsAuthenticated}
            navigation={navigation}
          />
        )}
        options={{headerShown: false}}
      />
      <UnauthStackTab.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
    </UnauthStackTab.Navigator>
  );
};

export default UnauthStack;
