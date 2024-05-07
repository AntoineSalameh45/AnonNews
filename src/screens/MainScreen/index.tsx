import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainDrawer from '../../navigation/MainDrawer';

const MainScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <MainDrawer />
    </NavigationContainer>
  );
};

export default MainScreen;
