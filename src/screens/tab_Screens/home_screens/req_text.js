import React,{useState,useEffect} from 'react'
import {View,Text,TextInput,ImageBackground,RefreshControl,PermissionsAndroid,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
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
import RQButton from '../../../components/request_button';
import {logo,lang,
    back,
    add} from '../../../assets';
import styles from './styles';

function Rqtext (props){

    const [input, setinput] = useState('')

    return(
     <View>
         <Header 
            leftnavigation = {()=>props.navigation.goBack()}
            rightnavigation = {props.navigation}
            center = {logo}
            right={lang}
            left={back}
            leftstyle={{width:16,height:14,marginLeft:8}}
             />
         <Text style={[styles.heading,{marginTop:responsiveHeight(2)}]} >Write Text Here...</Text>
         <View style={styles.inputConatiner} >
            <View style={{width:'100%',height:'90%'}} >
                <TextInput
                    value={input}
                    multiline={true}
                    maxLength={180}
                    placeholderTextColor={'grey'}
                    placeholder={"Write about yor request here . . ."}
                    onChangeText={value => setinput(value)}
                    style={styles.input}
                />
            </View>
            <Text style={styles.maxtxt} >{input.length} / 180</Text>
         </View>
            <View style={{marginTop:responsiveHeight(8)}} >
                <GradButton navigation={()=>props.navigation.goBack()} txt = {'Done'}/>
            </View>
     </View>   
     
    )
}
export default Rqtext; 