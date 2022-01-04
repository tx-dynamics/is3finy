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
    back,
    add} from '../../assets';
import styles from './styles';

function processing (props){
    return(
     <View>
         <Header leftstyle={{width:16,height:14,margin:8}} leftnavigation = {()=>props.navigation.goBack()} rightnavigation = {props.navigation} center = {logo} right={lang} left={back}  />
          <View style={styles.processingCont} >
              <Text style={styles.selectiontxt} >Your inquiry is now being processed to be{'\n'}answered soon , Your average wait time{'\n'}for a reply</Text>
              <TouchableOpacity>
                <View style={styles.ellipse} >
                    <Text style={[styles.heading,{color:'#6CE200',fontWeight:'600',marginTop:0}]} >58{'\n'}Minutes</Text>
                </View>
              </TouchableOpacity>
        </View>
       <View style={{marginTop:responsiveHeight(10)}} >
           <GradButton navigation={()=>props.navigation.navigate('Signup')} txt = {'Next'}/>
       </View>

     </View>   
     
    )
}
export default processing; 