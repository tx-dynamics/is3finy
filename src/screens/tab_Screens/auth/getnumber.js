import React,{useState,useEffect} from 'react'
import {View,Text,ImageBackground,TextInput,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
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
import Header from '../../../components/header';
import GradButton from '../../../components/gradient_button';
import {logo,lang,bullet,call,text,
    back,
    patient,
    // pickercon,
    add} from '../../../assets';
import { Picker } from "@react-native-picker/picker";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import LanguageModal from '../../../components/lang_modal';

const sports = [
    {
      label: 'US',
      value: 'US',
    },
    {
      label: 'UK',
      value: 'Uk',
    },
    {
      label: 'Canada',
      value: 'Canada',
    },
  ];


function signup (props){
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [conpass, setconpass] = useState('')
    const [cont, setcont] = useState(undefined)
    const [lanmodal, setlanmodal] = useState(false)
    const [country, setCountry] = useState('Unknown');


    return(
    <KeyboardAwareScrollView style={styles.mainContainer} >
     <ImageBackground source={patient} style={styles.bg} >
            <Header             
              leftstyle={{color:'white'}}
              backgroundColor='transparent' 
              leftnavigation = {()=>props.navigation.goBack()}
              rightnavigation={()=>setlanmodal(true)} center = {logo} right={lang}  />
            <Text style={[styles.heading,{color:'#FFFFFF',fontWeight:'600',fontFamily:'Lato'}]} >Enter Phone Number</Text>
            <View style={[styles.contary,{width:150}]} >
               
                {/*  */}
                <Picker
                    selectedValue={cont}
                    onValueChange={(value, index) => setcont(value)}
                    mode="dialog" // Android only
                    dropdownIconColor={'#FFFFFF'}
                    style={{color:'white',width:150}}
                >
                    <Picker.Item label="Select" value="Unknown" />
                    <Picker.Item label="US" value="US" />
                    <Picker.Item label="UK" value="UK" />
                    <Picker.Item label="Canada" value="Canada" />
                </Picker>
            </View>
            <View style={styles.container} >
               
                <View style={[styles.inputConatiner,{marginTop:0,backgroundColor:'transparent',borderBottomWidth:0.5,width:267,borderBottomColor:'#FFFFFF'}]} >
                    <TextInput
                        value={conpass}
                        keyboardType='name-phone-pad'
                        placeholderTextColor={'white'}
                        placeholder={"+1 (324) 847 2544"}
                        onChangeText={value => setconpass(value)}
                        style={[styles.input,{alignSelf:'center'}]}
                    />
                </View>
            </View>
            <View style={{marginTop:responsiveHeight(10)}} >
                <GradButton style={styles.signup}  navigation={()=>props.navigation.navigate('Otp')} txt = {'Continue'}/>
            </View>
            <View style={{height:responsiveScreenHeight(40)}}  />
     </ImageBackground>
     {lanmodal?
          <LanguageModal ismodal={lanmodal} setmodal={()=>setlanmodal(!lanmodal)} country={country} selectcountry={(val)=>setCountry(val)} />
      :null}
     </KeyboardAwareScrollView>
     
    )
}
export default signup; 