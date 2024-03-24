import AsyncStorage from '@react-native-async-storage/async-storage';

const FAV_STORAGE = 'fav';

const setObjectToLocal = async (storageName: string, value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageName, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getObjectFromLocal = async (storageName: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageName);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export {FAV_STORAGE, setObjectToLocal, getObjectFromLocal};
