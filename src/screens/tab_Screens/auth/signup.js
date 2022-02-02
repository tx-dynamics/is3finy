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
    pic,
    patient,
    support,
    add} from '../../../assets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import LanguageModal from '../../../components/lang_modal';

function signup (props){
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [conpass, setconpass] = useState('')
    const [lanmodal, setlanmodal] = useState(false)
    const [country, setCountry] = useState('Unknown');


    return(
    <KeyboardAwareScrollView style={styles.mainContainer} >
     <ImageBackground source={patient} style={styles.bg} >
            <Header backgroundColor='transparent' leftnavigation = {()=>props.navigation.navigate('ScreenStack',{screen:'Contact'})}  rightnavigation={()=>setlanmodal(true)} center = {logo} right={lang} left={support}  />
            <View style={styles.container} >
                <View style={styles.inputConatiner} >
                    <TextInput
                        value={name}
                        placeholderTextColor={'white'}
                        placeholder={"Name"}
                        onChangeText={value => setname(value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputConatiner} >
                    <TextInput
                        value={email}
                        placeholderTextColor={'white'}
                        placeholder={"Email"}
                        onChangeText={value => setemail(value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputConatiner} >
                    <TextInput
                        value={password}
                        secureTextEntry={true}
                        placeholderTextColor={'white'}
                        placeholder={"Password"}
                        onChangeText={value => setpassword(value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputConatiner} >
                    <TextInput
                        value={conpass}
                        secureTextEntry={true}
                        placeholderTextColor={'white'}
                        placeholder={"Confirm Password"}
                        onChangeText={value => setconpass(value)}
                        style={styles.input}
                    />
                </View>
            </View>
            <View style={{marginTop:responsiveHeight(10)}} >
                <GradButton style={styles.signup}  navigation={()=>props.navigation.navigate('Number')} txt = {'Signup'}/>
            </View>
            <View style={{height:responsiveScreenHeight(25)}}  />
     </ImageBackground>   
     {lanmodal?
        <LanguageModal ismodal={lanmodal} setmodal={()=>setlanmodal(!lanmodal)} country={country} selectcountry={(val)=>setCountry(val)} />
    :null}
     </KeyboardAwareScrollView>
     
    )
}
export default signup; 