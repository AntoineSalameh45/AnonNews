import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingTop: 10,
  },
  headerLogo: {height: 70, width: 100, resizeMode: 'cover'},
  subContainer: {
    marginTop: 20,
    marginHorizontal: 5,
    backgroundColor: '#E5E7EB',
    borderBottomLeftRadius: 20,
    flexDirection: 'column',
    height: 100,
    padding: 10,
  },
  text: {color: '#696B6F'},
  title: {color: '#696B6F', fontWeight: 'bold'},
  readmore: {color: 'blue'},
  titleContainer: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  bgimg: {flex: 1, objectFit: 'cover', width: width, height: height},
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
  cardTextContainer: {width: '70%', padding: 20},
  cardImg: {height: '100%', flex: 1},
});
export default styles;
