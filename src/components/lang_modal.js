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
import GradButton from './gradient_button';
import {logo,lang,bullet,call,text,
    pic,
    patient,
    } from '../../assets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../screens/Splash/styles';
import styless from '../screens/tab_Screens/auth/styles';
import { Picker } from "@react-native-picker/picker";
function langModal ({ismodal,setmodal,country,selectcountry}){
   

    return(
    
        <Modal
                animationType="slide"
                transparent={true}
                visible={ismodal}
                // style={{ backgroundColor:'rgba(64, 77, 97, 1)' }}
                onRequestClose={() => {
                    setmodal(false);
                }}>
                <View
                    style={{
                        height: '100%',
                        backgroundColor: 'rgba(64, 77, 97, 0.5)',
                    }}>
                <KeyboardAwareScrollView>
                    <View
                        style={[styles.modalcontainer,{height:420,alignItems:'flex-start',marginTop:'40%'}]}>
                        <Text style={{fontWeight:'600',fontSize:16,fontFamily:'Poppins',color:'black',alignSelf:'center',marginTop:responsiveHeight(6)}} >Select Language</Text>
                        <View style={{height:'62%',justifyContent:'center',alignSelf:'center',marginTop:responsiveHeight(1)}} >
                            <View style={{width:'65%',borderTopColor:'black',borderBottomColor:'black',alignItems:'center',justifyContent:'center',alignSelf:'center',borderTopWidth:1,borderBottomWidth:1}} >
                                <Picker
                                    selectedValue={country}
                                    onValueChange={(value, index) => selectcountry(value)}
                                    mode="dropdown" // Android only
                                    dropdownIconColor={'#000000'}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="Please select your country" value="Unknown" />
                                    <Picker.Item label="English (United States)" value="US" />
                                    <Picker.Item label="English (United Kingdom)" value="UK" />
                                    <Picker.Item label="Arabic" value="Arabic" />
                                </Picker>
                            </View>
                        </View>
                        <View style={{marginTop:responsiveHeight(0.5),alignItems:'center',alignSelf:'center'}} >
                            <GradButton style={[styless.signup,{width:131}]}  navigation={()=>setmodal(false)} txt = {'Next'}/>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
                    </View>
        </Modal>
    
     
    )
}
export default langModal; 