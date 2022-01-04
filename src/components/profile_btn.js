import React,{useState,useEffect,useRef} from 'react'
import {View,Text,TouchableOpacity,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import LinearGradient from 'react-native-linear-gradient';

import {dp,
    edit,
    paysetting,
    setting,
    logout} from '../assets';
import styles from '../screens/tab_Screens/styles';

function profile ({props,txt,img,imgstyle,txtstyle,btnstyle,navigation}){


    useEffect(() => {
        // console.log(listarr);

    }, [])
    
    return(
    
            <TouchableOpacity onPress={navigation} style={btnstyle ? btnstyle:{marginTop:responsiveHeight(3),alignSelf:'center',alignItems:'center',flexDirection:'row',width:'87%',height:48,borderRadius:10,borderWidth:1,borderColor:'#DCDCDC'}} >
                <Image
                    source={img}
                    style={imgstyle}
                />
                <Text style={txtstyle?txtstyle:[styles.heading,{fontWeight:'500',fontSize:14,marginTop:0,marginLeft:responsiveWidth(3)}]} >{txt}</Text>

            </TouchableOpacity>
     
     
    )
}
export default profile;  