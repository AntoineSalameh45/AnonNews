import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  subcontainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F6E3',
    marginHorizontal: 20,
    borderRadius: 20,
  },
  title: {
    color: '#222',
    fontSize: 16,
    marginBottom: 50,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#950101aa',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#222',
  },
  button: {
    backgroundColor: '#950101aa',
    width: '80%',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  signupText: {
    fontWeight: 'normal',
    marginRight: 5,
    color: '#222',
  },
  signupLink: {
    fontWeight: 'bold',
    color: '#950101',
  },
  bgimg: {flex: 1, objectFit: 'cover', width: width, height: height},
});

export default styles;
