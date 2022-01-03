import React,{useState,useEffect} from 'react'
import {View,Text,TextInput,TouchableOpacity,PermissionsAndroid,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {useIsFocused} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';
import GradButton from '../../components/gradient_button';
import RQButton from '../../components/request_button';
import {logo,lang,bullet,call,text,
    pic,
    watsapp,
    back,
    add} from '../../assets';
import styles from './styles';

function category (props){
    const [input, setinput] = useState('')

    return(
     <View>
         <Header leftstyle={{width:16,height:14,marginLeft:8}} leftnavigation = {()=>props.navigation.goBack()} rightnavigation = {()=>alert('coming soon')} center = {logo} right={lang} left={back}  />
         <Text style={[styles.heading,{marginTop:responsiveHeight(3)}]} >Contact us</Text>
         <Text style={[styles.selectiontxt,{margin:8}]} >Were are happy to recieve your{'\n'}Feedback and Suggestions</Text>
         <View style={styles.inputConatiner} >
            <TextInput
                value={input}
                placeholderTextColor={'grey'}
                placeholder={"Reason"}
                onChangeText={value => setinput(value)}
                style={[styles.input,{alignSelf:'flex-start',marginLeft:10,fontSize:14}]}
            />
        </View>
        <View style={[styles.inputConatiner,{height:144,marginTop:responsiveHeight(5)}]} >
            <TextInput
                value={input}
                multiline={true}
                placeholderTextColor={'grey'}
                placeholder={"Your Message"}
                onChangeText={value => setinput(value)}
                style={[styles.input,{alignSelf:'flex-start',marginLeft:10,fontSize:14}]}
            />
        </View>
        <View style={{marginTop:responsiveHeight(8)}} >
            <GradButton 
            style={{ 
                width:109,
                height:51,
                borderRadius:8,
                alignSelf:'center',
                justifyContent:'center'
            }}  navigation={()=>props.navigation.goBack()} txt = {'Send'}/>
        </View>
        <TouchableOpacity style={styles.watsapp} >
            <Image 
                source={watsapp}
                style={styles.watsapp_icon}
            />
            <Text style={[styles.selectiontxt,{color:'rgba(0, 0, 0, 0.5)'}]} >Share Via Whatsapp</Text>
        </TouchableOpacity>
     </View>   
     
    )
}
export default category; 