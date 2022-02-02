import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import SignupScreen from '../screens/SignUp';
// import Signin from '../screens/Sigin';
import Splash from '../screens/Splash';
import Intro from '../screens/Splash/intro';
import initialIntro from '../screens/Splash/intro_one';
// import Forgot from '../screens/Forgot';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const AuthenticationStack = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      independent={true}
      initialRouteName="Splash"
      screenOptions={{
        animationTypeForReplace: 'pop',
        headerShown: false,
      }}>
      <Stack.Screen component={Splash} name="Splash" />
      <Stack.Screen component={initialIntro} name="initialIntro" />
      <Stack.Screen component={Intro} name="Intro" />
      {/* <Stack.Screen component={SignupScreen} name="Signup" />
      <Stack.Screen component={Forgot} name="Forgot" /> */}
      
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AuthenticationStack;
