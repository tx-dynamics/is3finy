import React,{useState,useEffect} from 'react'
import {View,TouchableOpacity,Text,ImageBackground,RefreshControl,PermissionsAndroid,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import LinearGradient from 'react-native-linear-gradient';
import {Header, FAB} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function header({ leftnavigation,rightnavigation,center,right,left }) {
    // console.log(center);
    return(
        <Header
            backgroundColor="#2C2C2C"
            containerStyle={{
            alignSelf: 'center',
            // height: ,
            // marginTop:20,
            borderBottomWidth: 0,
            // borderBottomColor: '#E1E3E6',
            }}
            leftComponent={
                <TouchableOpacity 
                onPress={leftnavigation} 
                style={{justifyContent:'center',marginTop:responsiveHeight(3)}} >
                    <Image
                        source={left}
                        style={{width:22,height:22,marginLeft:8}}
                    />
                </TouchableOpacity>
            }
            centerComponent={
                <Image
                    source={center}
                    style={{width:65,height:65,alignSelf:'center'}}
                />
            }
            rightComponent={
                <TouchableOpacity 
                    // onPress={()=>navigation.replace('BottomTab')}
                 style={{justifyContent:'center',marginTop:responsiveHeight(3)}} >
                    <Image
                        source={right}
                        style={{width:22,height:22,marginRight:8}}
                    />
                </TouchableOpacity>
                
            }
        /> 
    )
         
    }