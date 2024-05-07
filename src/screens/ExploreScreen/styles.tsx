import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  newsContainer: {
    flex: 1,
  },
  newsItemContainer: {
    flex: 1,
    backgroundColor: '#ccccccee',
    flexDirection: 'column',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    top: -40,
    alignItems: 'center',
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
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  newsImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  newsInfoContainer: {
    width: '100%',
    paddingBottom: 20,
    marginTop: 20,
  },
  newsSource: {
    fontSize: 16,
    marginBottom: 5,
  },
  newsSourceLink: {
    color: '#950101',
  },
  newsCountry: {
    fontSize: 16,
    marginBottom: 5,
  },
  newsPublishedOn: {
    fontSize: 16,
    backgroundColor: '#950101aa',
    paddingHorizontal: 10,
  },
  activePage: {
    fontWeight: 'bold',
    backgroundColor: '#950101',
    padding: 5,
    borderRadius: 100 / 2,
    borderWidth: 1,
    borderColor: '#fff',
  },
});
export default styles;
