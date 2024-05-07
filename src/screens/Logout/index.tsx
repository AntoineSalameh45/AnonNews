import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {removeValue} from '../../utils/getCookie';

const Logout = ({navigation}) => {
  const stayLogged = () => {
    navigation.navigate('Home');
  };

  const handleLogout = async () => {
    try {
      await removeValue('accessToken');
      await removeValue('refreshToken');
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.propContainer}>
        <Text style={styles.text}>Are you sure you want to log out?</Text>
        <Text style={styles.text}>
          (You will stay logged in for this session)
        </Text>
        <View style={styles.choices}>
          <Pressable style={styles.yesButton} onPress={handleLogout}>
            <Text style={styles.text}>Yes</Text>
          </Pressable>
          <Pressable style={styles.noButton} onPress={stayLogged}>
            <Text style={styles.text}>No, stay logged in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Logout;
