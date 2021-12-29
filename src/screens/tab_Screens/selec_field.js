import React,{useState,useEffect} from 'react'
import {View,Text,TextInput,RefreshControl,PermissionsAndroid,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
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
    video,
    back,
    add} from '../../assets';
import styles from './styles';

function category (props){
    const [input, setinput] = useState('')

    return(
     <View>
         <Header leftnavigation = {()=>props.navigation.goBack()} rightnavigation = {props.navigation} center = {logo} right={lang} left={back}  />
          <View style={[styles.cat_con,{marginTop:responsiveHeight(5)}]} >
             <View style={styles.cat} >
                 <Text style={styles.cat_txt} >Medicine</Text>
             </View>
             <View style={styles.cat} >
                 <Text style={styles.cat_txt} >Surgery</Text>
             </View>
        </View>
        <View style={[styles.cat_con,{marginTop:responsiveHeight(4)}]} >
             <View style={styles.cat} >
                 <Text style={styles.cat_txt} >Pediatrics</Text>
             </View>
             <View style={styles.cat} >
                 <Text style={[styles.cat_txt,{textAlign:'center'}]} >Obs. and{'\n'}Gyn</Text>
             </View>
        </View>
        <Text style={[styles.selectiontxt,{marginTop:responsiveHeight(12)}]} >Or Put your doctor ID to send the inquiry{'\n'}directly to him</Text>
        <View style={styles.inputConatiner} >
            <TextInput
                value={input}
                placeholderTextColor={'grey'}
                placeholder={"I.D. no. here"}
                onChangeText={value => setinput(value)}
                style={styles.input}
            />
        </View>
        <View style={{marginTop:responsiveHeight(6)}} >
           <GradButton navigation={()=>props.navigation.navigate('Selection')} txt = {'Next'}/>
       </View>
     </View>   
     
    )
}
export default category; 