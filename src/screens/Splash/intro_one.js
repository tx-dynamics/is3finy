import React,{useState,useEffect} from 'react'
import {View,Text,ImageBackground,Modal,Image,FlatList,Switch} from 'react-native'
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
import LanguageModal from '../../components/lang_modal';
import {logo,lang,bullet,call,text,
    pic,
    patient,
    } from '../../assets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import styless from '../tab_Screens/auth/styles';
import { Picker } from "@react-native-picker/picker";
function introone (props){
    const [lanmodal, setlanmodal] = useState(false)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [conpass, setconpass] = useState('')
    const [country, setCountry] = useState('Unknown');

    return(
    <View style={styles.mainContainer} >
     <ImageBackground source={patient} style={styles.bg} >
     <Header
            backgroundColor={'transparent'}
            containerStyle={{
            alignSelf: 'center',
            // justifyContent:'center',
            // marginTop:20,
            borderBottomWidth: 0,
            // borderBottomColor: '#E1E3E6',
            }}
            
            centerComponent={
                <Image
                    source={logo}
                    style={{width:65,height:65,alignSelf:'center'}}
                />
            }
            rightComponent={
                <TouchableOpacity 
                onPress={()=>setlanmodal(true)}
                 style={{justifyContent:'center',marginTop:responsiveHeight(3.5)}} >
                    <Image
                        source={lang}
                        style={{width:22,height:22,marginRight:8}}
                    />
                </TouchableOpacity>
                
            }
        /> 

            <View style={{marginTop:responsiveHeight(10)}} >
                    <Text style={[styles.bulletxt,{color:'#6CE200',fontSize:17.28,textAlign:'center'}]} >1-</Text>
                    <Text style={[styles.bulletxt,{color:'white',fontSize:17.28,textAlign:'center',marginTop:responsiveWidth(2)}]} >This app is used for quick and brief{'\n'}medical inquires</Text>
                    <Text style={[styles.bulletxt,{color:'#6CE200',fontSize:17.28,textAlign:'center',marginTop:responsiveWidth(5)}]} >2-</Text>
                    <Text style={[styles.bulletxt,{color:'white',fontSize:17.28,textAlign:'center',marginTop:responsiveWidth(2)}]} >Show your labs and get an instant {'\n'}opinion upon</Text>
                    <Text style={[styles.bulletxt,{color:'#6CE200',fontSize:17.28,textAlign:'center',marginTop:responsiveWidth(5)}]} >3-</Text>
                    <Text style={[styles.bulletxt,{color:'white',fontSize:17.28,textAlign:'center',marginTop:responsiveWidth(2)}]} >Show your radiology work up and get{'\n'}an instant opinion upon</Text>
                    <Text style={[styles.bulletxt,{color:'#6CE200',fontSize:17.28,textAlign:'center',marginTop:responsiveWidth(5)}]} >4-</Text>
                    <Text style={[styles.bulletxt,{color:'white',fontSize:17.28,textAlign:'center',marginTop:responsiveWidth(2)}]} >Show your prescription if you need{'\n'}clarification</Text>
            
            </View>

            <View style={{marginTop:responsiveHeight(15),alignItems:'center'}} >
                <GradButton style={[styless.signup,{width:159}]}  navigation={()=>props.navigation.navigate('Intro')} txt = {'Get Started'}/>
            </View>
            <View style={{height:responsiveScreenHeight(25)}}  />
            {lanmodal?
                <LanguageModal ismodal={lanmodal} setmodal={()=>setlanmodal(!lanmodal)} country={country} selectcountry={(val)=>setCountry(val)} />
            :null}
            
     </ImageBackground>   
     </View>
     
    )
}
export default introone; 