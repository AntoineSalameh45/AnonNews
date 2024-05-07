import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import Home from '../screens/Home';
import Explore from '../screens/ExploreScreen';
import AppHeader from '../components/organisms/AppHeader';
import Weather from '../screens/WeatherScreen';
import Finance from '../screens/FinanceScreen';
import Logout from '../screens/Logout';

const Drawer = createDrawerNavigator();

const MainDrawer = ({navigation}) => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: styles.drawerStyle,
          headerShown: true,
          headerStyle: styles.headerStyle,
          headerTintColor: '#070F2B',
          drawerActiveTintColor: '#ffff',
          drawerActiveBackgroundColor: '#950101aa',
          drawerInactiveTintColor: 'gray',
          drawerPosition: 'right',
          drawerType: 'slide',
        }}
        initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            header: () => <AppHeader navigation={navigation} showMenu={true} />,
          })}
        />
        <Drawer.Screen
          name="Explore"
          component={Explore}
          options={({navigation}) => ({
            header: () => <AppHeader navigation={navigation} showMenu={true} />,
          })}
        />
        <Drawer.Screen
          name="Weather"
          component={Weather}
          options={({navigation}) => ({
            header: () => <AppHeader navigation={navigation} showMenu={true} />,
          })}
        />
        <Drawer.Screen
          name="Finance"
          component={Finance}
          options={({navigation}) => ({
            header: () => <AppHeader navigation={navigation} showMenu={true} />,
          })}
        />
        <Drawer.Screen
          name="Logout"
          component={Logout}
          options={{
            header: () => <AppHeader navigation={navigation} showMenu={true} />,
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#070F2B',
  },
  headerStyle: {
    backgroundColor: '#070F2B',
  },
});

export default MainDrawer;
