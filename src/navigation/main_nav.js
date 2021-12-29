/* eslint-disable prettier/prettier */
import React, {useEffect, useState, useRef} from 'react';
import {View, LogBox, PermissionsAndroid, NativeModules} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { StripeProvider } from '@stripe/stripe-react-native';

// import Signin from '../screens/Signin';
// import Splash from '../screens/Splash';
import AuthenticationStack from './Auth_nav';
import ScreenStack from './stack';
import BottomTab from './bottomTab';

//redux
// import {connect} from 'react-redux';

const Stack = createStackNavigator();

function MainNav({}) {
  let initial = 'Auth';

  useEffect(() => {}, []);

  return (
    // <NavigationContainer
    //   // independent={true}
    // >
        <Stack.Navigator 
          // independent={true}
        //   initialRouteName={initial}
          >
         <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />
          
          <Stack.Screen
            name="ScreenStack"
            component={ScreenStack}
            options={{
              headerShown: false,
            }}
          />
      </Stack.Navigator>
  );
}


export default MainNav;
