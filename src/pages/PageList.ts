import {LearnWithSpeakTabNavigation} from '../router';

import {
  CharacterDetail,
  Characters,
  EpisodeDetail,
  Episodes,
  Favorites,
  Locations,
} from './';

import type {NativeStackNavigationOptions} from '@react-navigation/native-stack/lib/typescript/src/types';

enum Prefix {
  LEARNWITHSPEAK = 'LearnWithSpeak',
}

enum NType {
  TAB = 'TAB',
  STACK = 'STACK',
}

enum Pages {
  LearnWithSpeakTab = 'LearnWithSpeakTab',
  Characters = 'Characters',
  Locations = 'Locations',
  Episodes = 'Episodes',
  Favorites = 'Favorites',
  EpisodeDetail = 'EpisodeDetail',
  CharacterDetail = 'CharacterDetail',
}

type IPageList = {
  [key in Pages]: {
    name: string;
    component: any;
    options?: NativeStackNavigationOptions;
  } & (
    | {
        type: NType.TAB;
        initialParams: any;
        options?: any;
      }
    | {
        type: NType.STACK;
      }
  );
};

const PAGE_LIST: IPageList = {
  [Pages.LearnWithSpeakTab]: {
    name: `${Prefix.LEARNWITHSPEAK}_${Pages.LearnWithSpeakTab}`,
    component: LearnWithSpeakTabNavigation,
    type: NType.STACK,
    options: {headerShown: false},
  },
  [Pages.EpisodeDetail]: {
    name: `${Prefix.LEARNWITHSPEAK}_${Pages.EpisodeDetail}`,
    component: EpisodeDetail,
    type: NType.STACK,
    options: {headerShown: false},
  },
  [Pages.CharacterDetail]: {
    name: `${Prefix.LEARNWITHSPEAK}_${Pages.CharacterDetail}`,
    component: CharacterDetail,
    type: NType.STACK,
    options: {headerShown: false},
  },

  //Tab
  [Pages.Characters]: {
    name: `${Prefix.LEARNWITHSPEAK}_${Pages.Characters}`,
    component: Characters,
    type: NType.TAB,
    initialParams: {
      name: 'user',
      type: 'ant',
      title: 'Karakterler',
    },
  },

  [Pages.Locations]: {
    name: `${Prefix.LEARNWITHSPEAK}_${Pages.Locations}`,
    component: Locations,
    type: NType.TAB,
    initialParams: {
      name: 'map',
      type: 'entypo',
      title: 'Lokasyonlar',
    },
  },

  [Pages.Episodes]: {
    name: `${Prefix.LEARNWITHSPEAK}_${Pages.Episodes}`,
    component: Episodes,
    type: NType.TAB,
    initialParams: {
      name: 'film',
      type: 'feather',
      title: 'Bölümler',
    },
  },

  [Pages.Favorites]: {
    name: `${Prefix.LEARNWITHSPEAK}_${Pages.Favorites}`,
    component: Favorites,
    type: NType.TAB,
    initialParams: {
      name: 'favorite',
      type: 'mat',
      title: 'Favoriler',
    },
  },
};

export {PAGE_LIST, NType};
