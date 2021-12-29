import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import RQText from '../screens/tab_Screens/home_screens/req_text'
import RQPhoto from '../screens/tab_Screens/home_screens/req_photo'
import RQVideo from '../screens/tab_Screens/home_screens/req_video'
import RQVoice from '../screens/tab_Screens/home_screens/req_voice'
import Processing from '../screens/tab_Screens/processing'
import Category from '../screens/tab_Screens/selec_field'

const Stack = createStackNavigator();

const AudiofileStack = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      independent={true}
      >
     <Stack.Screen
        name="RQText"
        component={RQText}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RQPhoto"
        component={RQPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RQVideo"
        component={RQVideo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RQVoice"
        component={RQVoice}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Processing"
        component={Processing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AudiofileStack;
