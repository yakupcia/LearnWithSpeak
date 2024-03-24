// React and React Native
import React from 'react';
import { SafeAreaView } from 'react-native';

// 3th Party
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

// Helpers and Pagelist
import { navigationRef } from './helper';
import { NType, PAGE_LIST } from '../pages/PageList'

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            {Object.values(PAGE_LIST).map(page => {
              if (page.type === NType.STACK)
                return <Stack.Screen {...{ ...page, key: Math.random() }} />;
            })}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>

  );
};

export default Router;