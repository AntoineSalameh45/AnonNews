import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
const {width} = Dimensions.get('window');

const BreakingNews = () => {
  return (
    <View>
      <View style={styles.breakingHeader}>
        <Text style={styles.breaking}>Breaking News!!</Text>
      </View>
      <View>
        <ImageBackground
          source={require('../../assets/img4.jpg')}
          style={styles.breakingimg}>
          <View style={styles.breakingText}>
            <Text style={styles.breaking}>
              The final assignment deadline might be sooner than you think
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default BreakingNews;

const styles = StyleSheet.create({
  breakingHeader: {backgroundColor: '#950101', padding: 5},
  breaking: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  breakingimg: {
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    width: width,
    height: 250,
  },
  breakingText: {
    backgroundColor: '#ccccccc4',
    flex: 0.3,
    borderTopWidth: 2,
    borderColor: '#950101',
  },
});
