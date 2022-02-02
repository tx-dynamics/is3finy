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
  timers,
    video,
    back,
    add} from '../../assets';
import styles from './styles';
import LanguageModal from '../../components/lang_modal';

function processing (props){

  const [lanmodal, setlanmodal] = useState(false)
  const [country, setCountry] = useState('Unknown');


    return(
     <View>
         <Header             
            leftstyle={{color:'white'}}
            leftnavigation = {()=>props.navigation.goBack()}
            rightnavigation={()=>setlanmodal(true)} center = {logo} right={lang}  />
          <View style={styles.processingCont} >
              <Text style={[styles.selectiontxt,{lineHeight:responsiveHeight(3)}]} >Your inquiry is now being processed to be{'\n'}answered soon , Your average wait time{'\n'}for a reply</Text>
              {/* <TouchableOpacity>
                <View style={styles.ellipse} >
                    <Text style={[styles.heading,{color:'#6CE200',fontWeight:'600',marginTop:0}]} >58{'\n'}Minutes</Text>
                </View>
              </TouchableOpacity> */}
        </View>
        <TouchableOpacity style={{marginTop:responsiveHeight(8)}} >
          <Image
            source={timers}
            style={{width:134,height:134,alignSelf:'center'}}
          />
        </TouchableOpacity>
       <View style={{marginTop:responsiveHeight(10)}} >
           <GradButton navigation={()=>props.navigation.navigate('Signup')} txt = {'Next'}/>
       </View>
       {lanmodal?
            <LanguageModal ismodal={lanmodal} setmodal={()=>setlanmodal(!lanmodal)} country={country} selectcountry={(val)=>setCountry(val)} />
        :null}
     </View>   
     
    )
}
export default processing; 