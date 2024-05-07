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
    backgroundColor: '#111',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherContainer: {
    marginTop: 20,
    backgroundColor: '#7AA2E3',
    borderRadius: 20,
    width: (width - 50) / 3,
    height: 150,
    justifyContent: 'center',
  },
  weatherDesc: {
    alignSelf: 'center',
    alignItems: 'center',
    color: '#F8F6E3',
  },
  weatherText: {
    color: '#F8F6E3',
    fontSize: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  locationContainer: {
    marginTop: 20,
    marginHorizontal: 5,
    backgroundColor: '#7AA2E3',
    borderRadius: 20,
    width: ((width - 10) * 2) / 3,
    height: 150,
    justifyContent: 'center',
  },
  infoContainer: {flexDirection: 'row', paddingHorizontal: 10},
  bgimg: {flex: 1, objectFit: 'cover', width: width, height: height},
  forecastContainer: {
    marginTop: 20,
    marginHorizontal: 5,
    backgroundColor: '#7AA2E3',
    borderRadius: 20,
    justifyContent: 'center',
  },
  forecastTitle: {
    backgroundColor: '#F8F6E3',
    color: '#7AA2E3',
    borderWidth: 1,
    borderColor: '#7AA2E3',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
  },
  forecastItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#F8F6E3',
    justifyContent: 'space-evenly',
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
});
export default styles;
