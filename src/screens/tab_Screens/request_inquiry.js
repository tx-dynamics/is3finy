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
import LanguageModal from '../../components/lang_modal';
import {logo,lang,bullet,call,text,
    right,
    support,
    add} from '../../assets';
import styles from './styles';

function processing (props){

    const [lanmodal, setlanmodal] = useState(false)
    const [country, setCountry] = useState('Unknown');


    return(
     <View style={{flex:1}} >
         <Header             
            leftnavigation = {()=>props.navigation.navigate('ScreenStack',{screen:'Contact'})}
            rightnavigation={()=>setlanmodal(true)} center = {logo} right={lang} left={support} />
          <View style={[styles.processingCont,{alignItems:'flex-start',height:102}]} >
          <View style={[styles.container,{marginTop:responsiveHeight(3)}]} >
                <View style={{flexDirection:'row'}} >
                    <Image
                        source={bullet}
                        style={styles.bullet}
                    />
                    <Text style={[styles.bulletxt,{fontSize:13,fontWeight:'400',marginLeft:responsiveHeight(1.5)}]} >You will not pay this time, but next time{'\n'}
                    you use the app you would need to charge{'\n'}your account</Text>
                </View>
            </View>
            
            
        </View>
       <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-end'}} >
           <GradButton style={{width:335,height:50,borderRadius:8,alignSelf:'center',justifyContent:'center',marginBottom:responsiveHeight(5)}} navigation={()=>props.navigation.navigate('PaymentInstruct')} txt = {'Request Inquiry'}/>
       </View>
       {lanmodal?
            <LanguageModal ismodal={lanmodal} setmodal={()=>setlanmodal(!lanmodal)} country={country} selectcountry={(val)=>setCountry(val)} />
        :null}
     </View>   
     
    )
}
export default processing; 