import React from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import Date from '../Atoms/TodayDate';
import Menu from '../../assets/svg/MenuSvg.svg';

const AppHeader = ({navigation, showMenu}: any) => {
  const menuToggle = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleSubContainer}>
        <Image
          source={require('../../assets/anon-banner-cr4.png')}
          style={styles.headerLogo}
        />
        <Date />
      </View>
      {showMenu && (
        <View>
          <Pressable onPress={menuToggle}>
            <Menu width={30} height={30} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000000',
  },
  titleSubContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerLogo: {height: 70, width: 100, resizeMode: 'cover'},
});
