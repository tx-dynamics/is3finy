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
    next,
    add} from '../../assets';
import styles from './styles';

function selection (props){
    return(
     <View>
         <Header leftnavigation = {()=>props.navigation.navigate('ScreenStack',{screen:'Contact'})} rightnavigation = {()=>alert('coming soon')} center = {logo} right={lang} left={call}  />
          <View style={styles.selectionCont} >
              <Text style={styles.selectiontxt} >Do you want our system to direct your{'\n'} inquiry to the suitable replies?</Text>
              <TouchableOpacity onPress={()=>props.navigation.navigate('ScreenStack',{screen:'Processing'})} >
                <Image
                    source={next}
                    style={styles.next}
                />
              </TouchableOpacity>
        </View>
        <Text style={[styles.selectiontxt,{color:'rgba(0, 0, 0, 0.3)',fontWeight:'400',fontSize:16,alignSelf:'center'}]} >OR</Text>
        <View style={[styles.selectionCont,{marginTop:responsiveHeight(1)}]} >
            <Text style={styles.selectiontxt} >Do you want to choose certain doctor{'\n'}or specialty your inquiry to the suitable{'\n'} replied?</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate('ScreenStack',{screen:'Category'})} >
                <Image
                    source={next}
                    style={styles.next}
                />
            </TouchableOpacity>
        </View>  

     </View>   
     
    )
}
export default selection; 