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
    support,
    next,
    add} from '../../assets';
import styles from './styles';
import LanguageModal from '../../components/lang_modal';

function selection (props){

    const [lanmodal, setlanmodal] = useState(false)
    const [country, setCountry] = useState('Unknown');


    return(
     <View>
         <Header leftnavigation = {()=>props.navigation.navigate('ScreenStack',{screen:'Contact'})}  rightnavigation={()=>setlanmodal(true)} center = {logo} right={lang} left={support}  />
          <View style={styles.selectionCont} >
              <Text style={styles.selectiontxt} >Automatically convert your inquiry to the{'\n'} suitable provider.</Text>
              <TouchableOpacity onPress={()=>props.navigation.navigate('ScreenStack',{screen:'Processing'})} >
                <Image
                    source={next}
                    style={styles.next}
                />
              </TouchableOpacity>
        </View>
        <Text style={[styles.selectiontxt,{color:'rgba(0, 0, 0, 0.3)',fontWeight:'400',fontSize:16,alignSelf:'center'}]} >OR</Text>
        <View style={[styles.selectionCont,{marginTop:responsiveHeight(1)}]} >
            <Text style={styles.selectiontxt} >Manually choose your provider.</Text>
            <Text style={[styles.selectiontxt,{marginTop:responsiveHeight(0.2)}]} >Manually insert a specific provider ID.</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate('ScreenStack',{screen:'Category'})} >
                <Image
                    source={next}
                    style={styles.next}
                />
            </TouchableOpacity>
        </View>  
        {lanmodal?
            <LanguageModal ismodal={lanmodal} setmodal={()=>setlanmodal(!lanmodal)} country={country} selectcountry={(val)=>setCountry(val)} />
        :null}
     </View>   
     
    )
}
export default selection; 