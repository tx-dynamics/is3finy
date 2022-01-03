import React,{useState,useEffect} from 'react'
import {View,Text,TouchableOpacity,ImageBackground,Modal,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import LinearGradient from 'react-native-linear-gradient';
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
import OTPInputView from '@twotalltotems/react-native-otp-input'
function signup (props){
    const [ismodal, setismodal] = useState(false)


    return(
    <KeyboardAwareScrollView style={styles.mainContainer} >
     <ImageBackground source={patient} style={styles.bg} >
         <View style={styles.bg_color} >
            <Header leftstyle={{width:16,height:14,marginLeft:8}} backgroundColor='transparent' leftnavigation = {()=>props.navigation.goBack()} rightnavigation = {()=>alert('coming soon')} center = {logo} right={lang} left={back}  />
            <Text style={[styles.heading,{color:'#FFFFFF',fontWeight:'600',fontFamily:'Lato'}]} >Enter Code</Text>
            {/* <OTPInputView pinCount={4} /> */}
            <OTPInputView
            style={{width: '80%', height: 200,alignSelf:'center'}}
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            // autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled = {(code => {
                console.log(`Code is ${code}, you are good to go!`)
            })}
        />
            <View style={{marginTop:responsiveHeight(10)}} >
            <Text style={[styles.heading,{color:'#FFFFFF',fontWeight:'400',fontSize:12,textAlign:'left',fontFamily:'Roboto',marginLeft:35,marginBottom:responsiveHeight(1)}]} >Resend 0:23</Text>
                <GradButton style={styles.signup}  navigation={()=>setismodal(true)} txt = {'Continue'}/>
            </View>
            <View style={{height:responsiveScreenHeight(40)}}  />
        </View>
     </ImageBackground>   
     <Modal
        animationType="slide"
        transparent={true}
        visible={ismodal}
        // style={{ backgroundColor:'rgba(64, 77, 97, 1)' }}
        onRequestClose={() => {
        setismodal(false);
        }}>
        <View
            style={{
                height: '100%',
                backgroundColor: 'rgba(64, 77, 97, 0.5)',
            }}>
        <View
            style={styles.modalcontainer}>
            <View
            style={{
                marginTop:20,
                backgroundColor:'#F2F2F2',
                width:'90%',
                height:319,
                justifyContent:'center'
                // borderBottomWidth:1,borderColor:'black'
            }}>
                <View style={{margin:18,alignSelf:'center',justifyContent:'center',alignItems:'center'}} >
                    <Text style={[styles.modaltxt,{justifyContent:'center'}]} >Lorem ipsum dolor sit amet, consecter adipiscing elit. Tristique luctus ut orci hendrerit massa massa neque neque. Turpis mi pharetra tellus arcu dolor in ligula amet eget porttitor. Viverra et auctor eu elit dictumst molestie quam in pharetra. Ornare adipiscing sit uris cursus vulputate. Eget ut eget mattis etiam accumsan.</Text>
                </View>
                
            </View>
            <Text style={[styles.heading,{marginTop:responsiveHeight(3)}]} >Allow all terms & conditions</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:responsiveHeight(3)}} >
            <TouchableOpacity onPress={()=>
                setismodal(false)
                }
                style={{alignSelf:'center',justifyContent:'center',alignItems:'center',width:63,height:27,backgroundColor:'#FF9393',borderRadius:4}}>
                    <Text style={{color:'#FFFFFF'}} >Deny</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                setismodal(false)
                props.navigation.navigate('PaymentInstruct')
                }}
                style={{alignSelf:'center',alignItems:'center',width:63,height:27,borderRadius:4,marginLeft:responsiveHeight(5)}}>
                     <LinearGradient
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#7CFF04', '#00AE55']} 
                    style={{width:63,height:27,justifyContent:'center',alignItems:'center',borderRadius:4}}
                >
                    <Text style={{color:'#FFFFFF'}} >Allow</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
            
        </View>
        </View>
    </Modal>
     </KeyboardAwareScrollView>
     
    )
}
export default signup; 