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
import {useIsFocused} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Header, FAB} from 'react-native-elements';
import GradButton from '../../components/gradient_button';
import SEButton from '../../components/profile_btn';
import {privcy,lang,notific,
    ques,help,
    back,
    } from '../../assets';
import styles from './styles';

function setting (props){

    
    
    return(
     <View style={{flex:1}} >
         <Header
            backgroundColor={"transparent"}
            containerStyle={{
            alignSelf: 'center',
            // height: ,
            marginTop:10,
            borderBottomWidth: 0,
            // borderBottomColor: '#E1E3E6',
            }}
            leftComponent={
                <TouchableOpacity 
                onPress={()=>props.navigation.goBack()} 
                style={{}} >
                    <Image
                        source={back}
                        style={{width:16,height:14,marginLeft:8,tintColor:'black'}}
                    />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={{color:'black',fontFamily:'Poppins',fontSize:14,fontWeight:'500'}} >Settings</Text>
            }
            
        /> 

        <View style={{marginTop:responsiveHeight(1)}} >
            <SEButton
                txt = {'Notification'}
                img = {notific}
                navigation={()=>props.navigation.navigate('BottomTab',{screen:'Notification'})}
                imgstyle={{width:16,height:16,marginLeft:12,tintColor:'black'}}
            />
            <SEButton
                txt = {'Language'}
                img = {lang}
                imgstyle={{width:13.75,height:13.75,marginLeft:12,tintColor:'black'}}
            />
            <SEButton
                txt = {'FAQs'}
                img = {help}
                navigation={()=>props.navigation.navigate('FAQs')}
                imgstyle={{width:14,height:14,marginLeft:12,tintColor:'black'}}
            />
             <SEButton
                txt = {'Help'}
                img = {ques}
                imgstyle={{width:12.5,height:12.5,marginLeft:12,tintColor:'black'}}
            />
             <SEButton
                txt = {'Privacy Policy'}
                img = {privcy}
                imgstyle={{width:15.38,height:18.46,marginLeft:12,tintColor:'black'}}
            />
        </View>
     
    </View>
       
     
    )
}
export default setting;  