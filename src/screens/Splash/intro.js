import React,{useState,useEffect} from 'react'
import {View,Text,ImageBackground,Modal,PermissionsAndroid,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
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
import LanguageModal from '../../components/lang_modal';
import GradButton from '../../components/gradient_button';
import {logo,lang,bullet} from '../../assets';
import styles from './styles';

function intro (props){
    const [ismodal, setismodal] = useState(false)
    const [lanmodal, setlanmodal] = useState(false)
    const [country, setCountry] = useState('Unknown');

    return(
     <View>
         <Header rightnavigation={()=>setlanmodal(true)}  center = {logo} right={lang} left={null} leftstyle={{color:'transparent'}}  />
         <View style={styles.container} >
            <View style={{flexDirection:'row'}} >
                <Image
                    source={bullet}
                    style={styles.bullet}
                />
                <Text style={styles.bulletxt} >This app is used for quick and brief {'\n'} medical inquires. </Text>
            </View>
         </View>
            <View style={[styles.container,{marginTop:responsiveHeight(3)}]} >
                <View style={{flexDirection:'row'}} >
                    <Image
                        source={bullet}
                        style={styles.bullet}
                    />
                    <Text style={styles.bulletxt} >Show your labs and get an instant {'\n'} opinion upon. </Text>
                </View>
            </View>
            <View style={[styles.container,{marginTop:responsiveHeight(3)}]} >
                <View style={{flexDirection:'row'}} >
                    <Image
                        source={bullet}
                        style={styles.bullet}
                    />
                    <Text style={styles.bulletxt} >Show your radiology work up and get {'\n'} an instant opinion upon. </Text>
                </View>
            </View>
            <View style={[styles.container,{marginTop:responsiveHeight(3)}]} >
                <View style={{flexDirection:'row'}} >
                    <Image
                        source={bullet}
                        style={styles.bullet}
                    />
                    <Text style={styles.bulletxt} >Show your prescription if you need {'\n'} clarification. </Text>
                </View>
            </View>
            <View style={{marginTop:responsiveHeight(42)}} >
                <GradButton navigation={()=>setismodal(true)} txt = {'Get Started'}/>
            </View>
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
                        margin:10
                        // borderBottomWidth:1,borderColor:'black'
                    }}>
                        <View style={{margin:18,alignSelf:'center',alignItems:'center'}} >
                            <Text style={styles.modaltxt} >You will not pay this time, but next time{'\n'}you use the app you would need to charge{'\n'} your account</Text>
                            <Text style={[styles.modaltxt,{marginTop:10}]} >The cost of a general inquiry is L.E, {'\n'} 10/inquiry</Text>
                            <Text style={[styles.modaltxt,{marginTop:10}]} >The cost of a private inguiry using an I.D,{'\n'} si L.E, 50/inquiry</Text>
                            <View style={{marginTop:responsiveHeight(4)}} />                            
                            <GradButton 
                            style={{width:91,height:37,borderRadius:10,alignSelf:'center',justifyContent:'center'}}
                            navigation={()=>{
                                props.navigation.replace('Main')
                                setismodal(false)
                                }} txt = {'Close'}/>
                        </View>
                    </View>
                </View>
                </View>
            </Modal>
            {lanmodal?
                <LanguageModal ismodal={lanmodal} setmodal={()=>setlanmodal(!lanmodal)} country={country} selectcountry={(val)=>setCountry(val)} />
            :null}
     </View>   
     
    )
}
export default intro; 