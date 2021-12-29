
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    add} from '../assets';
import styles from '../screens/tab_Screens/styles'

 export default function Button({ navigation,img,txt,style,isSelected }) {
    
    return(
         <TouchableOpacity onPress={navigation} style={styles.rqBtn}   >
            <View style={{flexDirection:'row'}}> 
                <Image
                    source={img}
                    style={style}
                />
                <Text style={styles.rqtxt} >{txt}</Text>
                <Image
                    source={add}
                    style={{width:15,height:15,marginLeft:10}}
                />
            </View>
        </TouchableOpacity> 
    )
}
