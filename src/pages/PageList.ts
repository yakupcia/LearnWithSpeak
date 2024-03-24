import {LearnWithSpeakTabNavigation} from '../router';

import {Characters} from './';

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
    options: {headerShown: false, title: ''},
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
};

export {PAGE_LIST, NType};
