import {createSlice} from '@reduxjs/toolkit';
import {ICharacter} from '../../types';
import {FAV_STORAGE, setObjectToLocal} from '../../pages/storage';
import {showMessage} from 'react-native-flash-message';

const initialState: ICharacter[] = [];

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      let arr: ICharacter[] = [];
      if (!!state.find(x => x.id === action.payload.id))
        arr = state.filter(x => x.id !== action.payload.id);
      else {
        if (state.length === 10)
          return showMessage({
            message: "Favori sayısı 10'u geçemez",
            type: 'danger',
          });
        arr = [...state, action.payload];
      }
      setObjectToLocal(FAV_STORAGE, arr);
      return arr;
    },
  },
});

export default favoriteSlice.reducer;
export const {addToFavorite} = favoriteSlice.actions;
