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
    right,
    back,
    add} from '../../assets';
import styles from './styles';

function processing (props){
    return(
     <View>
         <Header leftstyle={{width:16,height:14,marginLeft:8}} leftnavigation = {()=>props.navigation.goBack()} rightnavigation = {props.navigation} center = {logo} right={lang} left={back}  />
          <View style={[styles.processingCont,{alignItems:'flex-start',height:246}]} >
          <View style={[styles.container,{marginTop:responsiveHeight(3)}]} >
                <View style={{flexDirection:'row'}} >
                    <Image
                        source={bullet}
                        style={styles.bullet}
                    />
                    <Text style={[styles.bulletxt,{fontSize:13,fontWeight:'400'}]} >Last time you used the app it was for{'\n'}free </Text>
                </View>
            </View>
            <View style={[styles.container,{marginTop:responsiveHeight(3),marginTop:15}]} >
                <View style={{flexDirection:'row'}} >
                    <Image
                        source={bullet}
                        style={styles.bullet}
                    />
                    <Text style={[styles.bulletxt,{fontSize:13,fontWeight:'400'}]} >This time you need to pay</Text>
                </View>
            </View>
            <Text style={[styles.heading,{fontWeight:'500',marginLeft:responsiveWidth(5),marginTop:responsiveHeight(2)}]} >Minimal payment</Text>
            <View style={[styles.container,{marginTop:responsiveHeight(3),marginTop:15}]} >
                <View style={{flexDirection:'row'}} >
                    <Image
                        source={bullet}
                        style={styles.bullet}
                    />
                    <Text style={[styles.bulletxt,{fontSize:13,fontWeight:'400'}]} >For general inquiry is L.E, 10</Text>
                </View>
            </View>
            <View style={[styles.container,{marginTop:responsiveHeight(3),marginTop:15}]} >
                <View style={{flexDirection:'row'}} >
                    <Image
                        source={bullet}
                        style={styles.bullet}
                    />
                    <Text style={[styles.bulletxt,{fontSize:13,fontWeight:'400'}]} >For specific inquiry via I.D, is L.E, 50.</Text>
                </View>
            </View>
        </View>
       <View style={{marginTop:responsiveHeight(30)}} >
           <GradButton style={{width:335,height:50,borderRadius:8,alignSelf:'center',justifyContent:'center'}} navigation={()=>props.navigation.navigate('PaymentSelect')} txt = {'Pay now'}/>
       </View>
       <TouchableOpacity style={[styles.watsapp,{marginTop:responsiveHeight(3),width:335,justifyContent:'flex-start'}]} >
           
            <Text style={[styles.selectiontxt,{width:'80%',textAlign:'left'}]} >Your inquiry answer is ready to see</Text>
            <Image
                source={right}
                style={{width:12,height:10.28,alignSelf:'center'}}
            />
        </TouchableOpacity>
     </View>   
     
    )
}
export default processing; 