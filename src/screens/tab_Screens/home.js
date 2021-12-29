import React,{useState,useEffect} from 'react'
import {View,Text,ImageBackground,RefreshControl,PermissionsAndroid,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useIsFocused} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';
import GradButton from '../../components/gradient_button';
import RQButton from '../../components/request_button';
import {logo,lang,bullet,call,text,
    pic,
    video,
    voice,
    add} from '../../assets';
import styles from './styles';

function intro (props){
    return(
     <View>
         <Header leftnavigation = {props.navigation} rightnavigation = {props.navigation} center = {logo} right={lang} left={call}  />
         <Text style={styles.heading} >Put your request {'\n'} Keep it brief and Simple ,{'\n'} Select any two types</Text>
         <View style={styles.container} >
            <RQButton 
                navigation={()=>props.navigation.navigate('ScreenStack',{screen:'RQText'})}
                img = {text}
                txt = {'Text'}
                style={{width:15,height:17,alignSelf:'center',marginLeft:10}} />
         </View>
            <View style={[styles.container,{marginTop:responsiveHeight(3)}]} >
                <RQButton 
                    navigation={()=>props.navigation.navigate('ScreenStack',{screen:'RQPhoto'})}
                    img = {pic}
                    txt = {'Photo'}
                    style={{width:17,height:16,alignSelf:'center',marginLeft:10}} />
            </View>
            <View style={[styles.container,{marginTop:responsiveHeight(3)}]} >
                <RQButton 
                navigation={()=>props.navigation.navigate('ScreenStack',{screen:'RQVideo'})}
                img = {video}
                txt = {'Video'}
                style={{width:15,height:10,alignSelf:'center',marginLeft:10}} />
            </View>
            <View style={[styles.container,{marginTop:responsiveHeight(3)}]} >
                <RQButton 
                    navigation={()=>props.navigation.navigate('ScreenStack',{screen:'RQVoice'})}
                    img = {voice}
                    txt = {'Voice'}
                    style={{width:11.37,height:15.83,alignSelf:'center',marginLeft:10}} />
            </View>
            <View style={{marginTop:responsiveHeight(8)}} >
                <GradButton navigation={()=>props.navigation.navigate('Selection')} txt = {'Next'}/>
            </View>
     </View>   
     
    )
}
export default intro; 