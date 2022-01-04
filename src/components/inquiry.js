import React,{useState,useEffect,useRef} from 'react'
import {View,Text,ImageBackground,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {logo,lang,bullet,pic,text,video,voice,
    info,gpay,
    back,
    } from '../../assets';
// import styles from './styles';


function inquires ({props,item,navigation}){

    
    
    return(
     
                <View style={{width:'90%',height:110,alignSelf:'center',backgroundColor:'rgba(237, 237, 237, 1)',marginTop:responsiveHeight(2),borderRadius:10}} >
                    <View style={{margin:15}} >
                        <Text style={{fontFamily:'Poppins',fontWeight:'500',fontSize:9,color:'rgba(114, 114, 114, 1)'}} >Sent On</Text>
                        <Text style={{fontFamily:'Poppins',fontWeight:'500',fontSize:13,color:'black'}} >{item.date}</Text>
                        <Text style={{fontFamily:'Poppins',fontWeight:'500',fontSize:9,color:'rgba(114, 114, 114, 1)',marginTop:responsiveHeight(1)}} >Inquiry method</Text>
                    <View style={{flexDirection:'row'}} >
                        <View style={{flexDirection:'row',flex:1,alignItems:'center'}} >
                            {item.inquiry_method.map((dat)=>{
                               if(dat.type === 'txt'){
                                return(
                                    <Image
                                        source={dat.img}
                                        style={{width:15,height:17,margin:5,tintColor:'black'}}
                                    />
                                )
                               }else if(dat.type === 'video'){
                                return(
                                    <Image
                                        source={dat.img}
                                        style={{width:17,height:12,margin:5,tintColor:'black'}}
                                    />
                                )
                               }else if(dat.type === 'voice'){
                                return(
                                    <Image
                                        source={dat.img}
                                        style={{width:12.67,height:17.83,margin:5,tintColor:'black'}}
                                    />
                                )
                               }else{ 
                               return(
                                    <Image
                                        source={dat.img}
                                        style={{width:17,height:16,margin:5,tintColor:'black'}}
                                    />
                                )
                                }
                            })}
                        </View>
                        <TouchableOpacity onPress={navigation} style={{width:111,height:36,borderRadius:10,backgroundColor:'#6CE200',alignItems:'center',justifyContent:'center'}} >
                            <Text style={{color:'white'}} >View Status</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
            
       
     
    )
}
export default inquires;  