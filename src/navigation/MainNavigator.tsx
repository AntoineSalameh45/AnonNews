import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackParamList';
import MainScreen from '../screens/MainScreen';

const MainStackNavigator = createStackNavigator<RootStackParamList>();

const MainNavigator = ({handleLogout}) => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
        initialParams={{handleLogout: handleLogout}}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainNavigator;
