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
    pickercon,
    add} from '../../../assets';
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

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
    const [picker, setpicker] = useState(undefined)
    

    return(
    <KeyboardAwareScrollView style={styles.mainContainer} >
     <ImageBackground source={patient} style={styles.bg} >
         <View style={styles.bg_color} >
            <Header leftstyle={{width:16,height:14,marginLeft:8}} backgroundColor='transparent' leftnavigation = {()=>props.navigation.goBack()} rightnavigation = {()=>alert('coming soon')} center = {logo} right={lang} left={back}  />
            <Text style={[styles.heading,{color:'#FFFFFF',fontWeight:'600',fontFamily:'Lato'}]} >Enter Phone Number</Text>
            <View style={styles.contary} >
                {/* <Text style={[styles.heading,{color:'#FFFFFF',fontWeight:'400',fontFamily:'Lato',marginTop:0}]} >US</Text>
                <Image source={pickercon} style={{width:8.33,height:4.7,marginLeft:responsiveWidth(3)}} /> */}
                <RNPickerSelect
                    placeholder={{label:'Select',value:null}}
                    items={sports}
                    onValueChange={value => {
                    setpicker(value)
                    }}
                    style={{inputAndroid:{color:'#FFFFFF',width:70,marginLeft:responsiveWidth(5),fontWeight:'400',fontFamily:'Lato',marginTop:0},iconContainer: {
                        top: 18,
                        // left:responsiveWidth(13),
                      },}}
                    value={picker}
                    useNativeAndroidPickerStyle={false}
                    Icon={() => {
                        return <Image source={pickercon} style={{width:8.33,height:4.7,marginLeft:responsiveWidth(3)}} />;
                      }}
                    // ref={el => {
                    // this.inputRefs.favSport1 = el;
                    // }}
                />
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
        </View>
     </ImageBackground>   
     </KeyboardAwareScrollView>
     
    )
}
export default signup; 