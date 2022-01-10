import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import RQText from '../screens/tab_Screens/home_screens/req_text'
import RQPhoto from '../screens/tab_Screens/home_screens/req_photo'
import RQVideo from '../screens/tab_Screens/home_screens/req_video'
import RQVoice from '../screens/tab_Screens/home_screens/req_voice'
import Processing from '../screens/tab_Screens/processing'
import Category from '../screens/tab_Screens/selec_field'
import Contact from '../screens/tab_Screens/contact_us'
import FieldList from '../screens/tab_Screens/field_list'
import Signup from '../screens/tab_Screens/auth/signup'
import Number from '../screens/tab_Screens/auth/getnumber'
import Otp from '../screens/tab_Screens/auth/otp'
import PaymentInstruct from '../screens/tab_Screens/payment_instruct'
import PaymentSelect from '../screens/tab_Screens/payment_select'
import Payment from '../screens/tab_Screens/payment'
import Status from '../screens/tab_Screens/view_status'
import Setting from '../screens/tab_Screens/setting'
import EditProfile from '../screens/tab_Screens/editProfile'
import FAQs from '../screens/tab_Screens/faqs'

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
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FieldList"
        component={FieldList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Number"
        component={Number}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentInstruct"
        component={PaymentInstruct}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="PaymentSelect"
        component={PaymentSelect}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Status"
        component={Status}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="FAQs"
        component={FAQs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AudiofileStack;
