import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#070F2B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  propContainer: {
    width: '70%',
  },
  choices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  yesButton: {
    backgroundColor: '#950101',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  noButton: {
    backgroundColor: '#222',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#F3F8FF',
  },
  text: {color: '#F3F8FF'},
});
export default styles;
