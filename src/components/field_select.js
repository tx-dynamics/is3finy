import React,{useState,useRef,useEffect} from 'react'
import {View,Text,TouchableOpacity,TextInput,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {useIsFocused} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {logo,lang,bullet,call,text,
    check,
    checked,
    back,
    add} from '../assets';
import styles from '../screens/tab_Screens/styles';



function fieldselect ({props,item,setItem}){
   
    return(
     
                <>
                {item.selected?
                    <View style={{width:335,flexDirection:'row',height:45,borderWidth:0.5,borderColor:'#DCDCDC',borderRadius:7,backgroundColor:'#FFFFFF',elevation:1,alignItems:'center',alignSelf:'center',margin:10}} >
                        <Text style={[styles.sTextItem,{color:'#6CE200'}]}>{item.name}</Text>
                        <TouchableOpacity
                        style={{width:20,height:20}}
                         onPress={()=>{
                            setItem(item.selected,item.id)
                        }}>
                            <Image
                                source={checked}
                                style={{height:16,width:16}}
                            />
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={{width:335,flexDirection:'row',height:45,borderWidth:0.5,borderColor:'#DCDCDC',borderRadius:7,backgroundColor:'#FFFFFF',elevation:1,alignItems:'center',alignSelf:'center',margin:10}} >
                        <Text style={styles.sTextItem}>{item.name}</Text>
                        <TouchableOpacity
                        style={{width:20,height:20}}
                            onPress={()=>{
                                setItem(item.selected,item.id)
                            }}
                        >
                            <Image
                                source={check}
                                style={{height:16,width:16}}
                            />
                        </TouchableOpacity>
                    </View>
                }
                </>
                
             
     
    )
}
export default fieldselect; 