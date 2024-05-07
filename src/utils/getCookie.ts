import AsyncStorage from '@react-native-async-storage/async-storage';

const setValue = async (key: string, value: string, expireIn: number) => {
  const now = new Date().getTime();
  const expiry = now + expireIn * 60000;
  const data = JSON.stringify({value, expiry});

  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    console.error('AsyncStorage Error: ', error);
  }
};

const getValue = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data) {
      const {value, expiry} = JSON.parse(data);
      const now = new Date().getTime();

      if (now < expiry) {
        return value;
      } else {
        await AsyncStorage.removeItem(key);
      }
    }
    return null;
  } catch (error) {
    console.error('AsyncStorage Error: ', error);
    return null;
  }
};

const removeValue = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('AsyncStorage Error: ', error);
  }
};

export {setValue, getValue, removeValue};
