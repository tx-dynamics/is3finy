/* eslint-disable prettier/prettier */
import React, {useEffect, useState, useRef} from 'react';
import {View, LogBox, PermissionsAndroid,ImageBackground,Text,Image, NativeModules} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Snackbar from 'react-native-snackbar';
import {profile,home,homw,inquiry,noti,Tabbg,inqu,notiw,prow} from '../assets'


import Home from '../screens/tab_Screens/home'
import Selection from '../screens/tab_Screens/selection'
import Inquiry from '../screens/tab_Screens/inquiries'
import Notification from '../screens/tab_Screens/notification'
import Profile from '../screens/tab_Screens/profiles'


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const homeStack = () => {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      animationTypeForReplace: 'pop',
      headerShown: false,
    }}>
      
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Selection"
        component={Selection}
        options={{headerShown: false}}
      />
      
     
     
    </Stack.Navigator>
  );
};

const feed = () => {
  return (
    <Stack.Navigator>
       
       <Stack.Screen
        name="Feed"
        component={Feed}
        options={{headerShown: false}}
      />  
      {/* <Stack.Screen
        name="Track"
        component={Track}
        options={{headerShown: false}}
      />      
      <Stack.Screen
        name="AudioPlayer"
        component={AudioPlayer}
        options={{headerShown: false}}
      />*/}
      <Stack.Screen
        name="Packages"
        component={Packages}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
};

const explore = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Story"
        component={Explore}
        options={{headerShown: false}}
      />      
      {/* <Stack.Screen
        name="Track"
        component={Track}
        options={{headerShown: false}}
      />   
      <Stack.Screen
        name="AudioPlayer"
        component={AudioPlayer}
        options={{headerShown: false}}
      />*/}
      <Stack.Screen
        name="Packages"
        component={Packages}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />


    </Stack.Navigator>
  );
};

const music = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sound"
        component={Music}
        options={{headerShown: false}}
      />    
      {/* <Stack.Screen
        name="Track"
        component={Track}
        options={{headerShown: false}}
      />     
      <Stack.Screen
        name="AudioPlayer"
        component={AudioPlayer}
        options={{headerShown: false}}
      />*/}
      <Stack.Screen
        name="Packages"
        component={Packages}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />


    </Stack.Navigator>
  );
}

const favor = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favou"
        component={Fav}
        options={{headerShown: false}}
      />     
      {/* <Stack.Screen
        name="Track"
        component={Track}
        options={{headerShown: false}}
      />   
      <Stack.Screen
        name="AudioPlayer"
        component={AudioPlayer}
        options={{headerShown: false}}
      /> */}
      


    </Stack.Navigator>
  );
}

function Tabbar({navigation,props}) {

  useEffect(() => {

}, [])

 

// console.log(navigation);
  return (
      // <NavigationContainer independent={true}>
      <Tab.Navigator
      barStyle={{ backgroundColor: "#FFFFFF" }}
        // style={{borderTopLeftRadius:10,borderTopRightRadius:10}}
      >

        <Tab.Screen
          name="Home"
          component={homeStack}
          options={{
            tabBarLabel: <Text style={{ fontSize: 10, color: '#5E5F71', fontWeight: 'bold' }}> </Text>,
            tabBarIcon: ({ focused }) => (
                <>{focused?
                    <ImageBackground style={{alignSelf:'center',alignItems:'center',justifyContent:'center',width:32,height:32}}  source={Tabbg} >
                        <Image
                            style={{ width: 18, height: 17}}
                            source={homw}
                            // resizeMode='contain'
                        />
                    </ImageBackground>
                    :
                    <Image
                    style={{ width: 18, height: 17}}
                    source={home}
                    // resizeMode='contain'
                />
                }</>
              
              
            ),
          }}
        />

        <Tab.Screen
          name="Inquiry"
          component={Inquiry}
          options={{
            tabBarLabel: <Text style={{ fontSize: 10, color: '#5E5F71', fontWeight: 'bold' }}>  </Text>,
            tabBarIcon: ({ focused }) => (
                <>{focused?
                    <ImageBackground style={{alignSelf:'center',alignItems:'center',justifyContent:'center',width:32,height:32}}  source={Tabbg} >
                        <Image
                            style={{ width: 18, height: 17,tintColor:'#FFF2F2'}}
                            source={inqu}
                            // resizeMode='contain'
                        />
                    </ImageBackground>
                    :
                    <Image
                    style={{ width: 18, height: 17}}
                    source={inquiry}
                    // resizeMode='contain'
                />
                }</>
            ),
          }}
        />

       

        {/* {!this.state.countMessage == 0 ?
          <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
              tabBarLabel: <Text style={{ fontSize: 10, color: '#5E5F71', fontWeight: 'bold' }}> Notification </Text>,


              tabBarBadge: this.state.countMessage,
              tabBarIcon: ({ color }) => (
                <Image
                  style={{ width: 27, height: 26 }}
                  source={require("../assets/chaticon.png")}
                ></Image>
              ),
            }}
          />
          : */}
          <Tab.Screen
            name="Notification"
            component={Notification}
            activeColor={'green'}
            options={{
              // tabBarBadge: this.state.countMessage,
              tabBarLabel: <Text style={{ fontSize: 10, color: '#5E5F71', fontWeight: 'bold' }}>  </Text>,
              tabBarIcon: ({ focused }) => (
                <>{focused?
                    <ImageBackground style={{alignSelf:'center',alignItems:'center',justifyContent:'center',width:32,height:32}}  source={Tabbg} >
                        <Image
                            style={{ width: 18, height: 17,tintColor:'#FFF2F2'}}
                            source={notiw}
                            // resizeMode='contain'
                        />
                    </ImageBackground>
                    :
                    <Image
                    style={{ width: 18, height: 17}}
                    source={noti}
                    // resizeMode='contain'
                />
                }</>
              ),
            }}
          />
        {/* } */}


        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: <Text style={{ fontSize: 10, color: '#5E5F71', fontWeight: 'bold' }}>  </Text>,
            tabBarIcon: ({ focused }) => (
                <>{focused?
                    <ImageBackground style={{alignSelf:'center',alignItems:'center',justifyContent:'center',width:32,height:32}}  source={Tabbg} >
                        <Image
                            style={{ width: 18, height: 17,tintColor:'#FFF2F2'}}
                            source={prow}
                            // resizeMode='contain'
                        />
                    </ImageBackground>
                    :
                    <Image
                    style={{ width: 18, height: 17}}
                    source={profile}
                    // resizeMode='contain'
                />
                }</>
            ),
          }}
        />

      </Tab.Navigator>
    // </NavigationContainer>
  );
}


export default Tabbar;
