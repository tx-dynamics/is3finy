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
import Icon from 'react-native-vector-icons/Ionicons';

export default function header({ centerstyle,backgroundColor,leftstyle,leftnavigation,rightnavigation,center,right,left }) {
    // console.log(center);
    return(
        <Header
            backgroundColor={ backgroundColor ? backgroundColor : "#2C2C2C"}
            containerStyle={{
            alignSelf: 'center',
            // justifyContent:'center',
            // marginTop:20,
            borderBottomWidth: 0,
            // borderBottomColor: '#E1E3E6',
            }}
            leftComponent={
                <>  
                {left != null ?
                <TouchableOpacity 
                    onPress={leftnavigation} 
                    style={{justifyContent:'center',marginTop:responsiveHeight(3.5),height:29,width:83.69}} >
                        <Image
                            source={left}
                            style={leftstyle?leftstyle:{height:29,width:83.69,marginLeft:8}}
                        />
                    </TouchableOpacity>
                :    
                <TouchableOpacity 
                    onPress={leftnavigation} 
                    style={{justifyContent:'center',marginTop:responsiveHeight(3.2),width:30}} >
                    <Icon name = 'arrow-back' size={28} style={leftstyle?leftstyle:{color:'white'}} />
                </TouchableOpacity>
                }
                </>
                
            }
            centerComponent={
                <Image
                    source={center}
                    style={centerstyle?centerstyle:{width:65,height:65,alignSelf:'center'}}
                />
            }
            rightComponent={
                <TouchableOpacity 
                onPress={rightnavigation}
                 style={{justifyContent:'center',marginTop:responsiveHeight(3.5)}} >
                    <Image
                        source={right}
                        style={{width:22,height:22,marginRight:8}}
                    />
                </TouchableOpacity>
                
            }
        /> 
    )
         
    }