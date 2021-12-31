
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



 export default function gradient_button({ style,navigation,txt,disable }) {
    
    return(
        <>
        {disable?
            <TouchableOpacity style={{width:159,height:51,borderRadius:10,backgroundColor:'rgba(108, 226, 0, 0.5)',alignSelf:'center',alignItems:'center',justifyContent:'center'}} >
                <Text  style={{alignSelf:"center",justifyContent:'center',fontSize:18,fontWeight:'500',fontFamily:'Poppins',color:'white'}}>{txt}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={navigation} style={style?style:{width:159,alignSelf:'center',alignItems:'center',justifyContent:'center'}} >
                <LinearGradient
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#7CFF04', '#00AE55']} 
                    style={style?style:{width:159,height:51,borderRadius:10,justifyContent:'center',alignItems:'center'}}
                >
                    <Text  style={{alignSelf:"center",justifyContent:'center',fontSize:18,fontWeight:'500',fontFamily:'Poppins',color:'white'}}>{txt}</Text>
                </LinearGradient>
            </TouchableOpacity>
        }
         </>
    )
}
