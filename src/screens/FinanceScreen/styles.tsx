import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  newsContainer: {paddingHorizontal: 10, paddingTop: 10},
  newsItem: {
    backgroundColor: '#ffffffaa',
    marginBottom: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  newsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#940101',
    width: '100%',
    color: '#fff',
    padding: 15,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  newsDescription: {
    fontSize: 18,
    color: '#222',
    marginVertical: 30,
    paddingHorizontal: 10,
  },
  readMore: {
    color: '#950101',
  },
});
export default styles;
