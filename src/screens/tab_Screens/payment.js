import React,{useState,useEffect,useRef} from 'react'
import {View,Text,ImageBackground,TextInput,Modal,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
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
import RQButton from '../../components/request_button';
import {logo,donepay,bullet,call,text,
    card,chip,
    back,
    } from '../../assets';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function payment (props){

    const [name,setname] = useState('')
    const [cardnumber,setcardnumber] = useState('')
    const [expdate,setexpdate] = useState('')
    const [cvc,setcvc] = useState('')
    const [ismodal, setismodal] = useState(false)
    const expiryDatee = useRef(null);
    const cvcNo = useRef(null);
    return(
    <KeyboardAwareScrollView style={{flex:1}}>
    <View>
         <Header
            backgroundColor={"transparent"}
            containerStyle={{
            alignSelf: 'center',
            // height: ,
            // marginTop:20,
            borderBottomWidth: 0,
            // borderBottomColor: '#E1E3E6',
            }}
            leftComponent={
                <TouchableOpacity 
                onPress={()=>props.navigation.goBack()} 
                style={{}} >
                    <Image
                        source={back}
                        style={{width:16,height:14,marginLeft:8,tintColor:'black'}}
                    />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={{color:'black',fontFamily:'Poppins',fontSize:14,fontWeight:'500'}} >Payment Method</Text>
            }
            
        /> 
        <ImageBackground
            source={card}
            style={{width:293.17,height:163,marginTop:responsiveHeight(3),alignSelf:'center'}}
        >
            <View style={{margin:30}} >
                <View
                    style={{flexDirection:'row'}}
                >
                    <Image source={chip} style={{width:25.81,height:20.38}} />
                    <Text style={{flex:1,textAlign:'right',fontFamily:'Salsa',alignSelf:'flex-end',fontSize:14,fontWeight:'400',color:'#FFFFFF'}} >VISA</Text>
                </View>
                <Text style={{fontFamily:'Poppins',fontSize:14,fontWeight:'500',color:'#FFFFFF',marginTop:responsiveHeight(4)}} >{cardnumber==''?'5168 1234 4567 7890':cardnumber}</Text>
                <View
                    style={{flexDirection:'row',marginTop:responsiveHeight(3)}}
                >
                    <Text style={{flex:1,textAlign:'left',fontFamily:'Salsa',alignSelf:'flex-end',fontSize:10,fontWeight:'400',color:'#FFFFFF'}} >{name === ''?'Thomas Andeson':name}</Text>
                    <Text style={{flex:0.2,textAlign:'right',fontFamily:'Salsa',alignSelf:'flex-end',fontSize:9,fontWeight:'400',color:'#FFFFFF'}} >{expdate == '' ?'12/20':expdate}</Text>
                </View>
            </View>

        </ImageBackground>
        <Text style={[styles.heading,{fontSize:12,fontWeight:'400',color:'#4B4B4B80',alignSelf:'center',marginTop:responsiveHeight(2)}]} >By adding debit / creadit card you agree to the{'\n'}Terms & Condition</Text>
        <View style={[styles.watsapp,{marginTop:responsiveHeight(2),justifyContent:'flex-start',width:'90%'}]} >
                <TextInput
                    value={name}
                    placeholderTextColor={'grey'}
                    placeholder={"Thomas Anderson"}
                    maxLength={30}
                    onChangeText={value => setname(value)}
                    style={[styles.input,{alignSelf:'flex-start',marginLeft:responsiveWidth(2)}]}
                />
        </View>
        <Text style={[styles.heading,{fontSize:13,textAlign:'left',marginLeft:responsiveWidth(5),fontWeight:'400',color:'#4B4B4B80',marginTop:responsiveHeight(2)}]} >Card Number</Text>
        <View style={[styles.watsapp,{marginTop:responsiveHeight(2),justifyContent:'flex-start',width:'90%'}]} >
                <TextInput
                    value={cardnumber}
                    placeholderTextColor={'grey'}
                    placeholder={"5168 1234 4567 7890"}
                    keyboardType={'numeric'}
                    maxLength={21}
                    onChangeText={value => {setcardnumber(value
                        .replace(/\s?/g, '')
                            .replace(/(\d{3})/g, '$1 ')
                            .trim())
                            if (value.length === 20) {
                                expiryDatee.current.focus()
                            }}
                        }
                    style={[styles.input,{alignSelf:'flex-start',marginLeft:responsiveWidth(2)}]}
                />
        </View>
        <Text style={[styles.heading,{fontSize:13,textAlign:'left',marginLeft:responsiveWidth(5),fontWeight:'400',color:'#4B4B4B80',marginTop:responsiveHeight(2)}]} >Expiation date</Text>
        <View style={[styles.watsapp,{marginTop:responsiveHeight(2),justifyContent:'flex-start',marginLeft:responsiveWidth(5),alignSelf:'flex-start',width:248}]} >
                <TextInput
                    ref={expiryDatee}
                    value={expdate}
                    placeholderTextColor={'grey'}
                    placeholder={"12/20"}
                    keyboardType={'numeric'}
                    maxLength={5}
                    onChangeText={(value) => {setexpdate(
                        value.length === 4 && !value.includes('/')
                    ? `${value.substring(0, 2)}/${value.substring(2, 5)}`
                    : value)
                    // alert(JSON.stringify(text.length))
                    if ((value.includes('/') && value.length === 5) || (!value.includes('/') && value.length === 4)) {
                        cvcNo.current.focus()
                    }
                    }}
                    style={[styles.input,{alignSelf:'flex-start',marginLeft:responsiveWidth(2)}]}
                />
        </View>
        <Text style={[styles.heading,{fontSize:13,textAlign:'left',marginLeft:responsiveWidth(5),fontWeight:'400',color:'#4B4B4B80',marginTop:responsiveHeight(2)}]} >Code</Text>
        <View style={[styles.watsapp,{marginTop:responsiveHeight(2),justifyContent:'flex-start',alignSelf:'flex-start',marginLeft:responsiveWidth(5),width:248}]} >
                <TextInput
                    ref={cvcNo}
                    value={cvc}
                    placeholderTextColor={'grey'}
                    placeholder={"12/20"}
                    keyboardType={'numeric'}
                    maxLength={3}
                    onChangeText={(value) => setcvc(value)}
                    style={[styles.input,{alignSelf:'flex-start',marginLeft:responsiveWidth(2)}]}
                />
        </View>
        <View style={{marginTop:responsiveHeight(8),marginBottom:responsiveHeight(3)}} >
            
                <GradButton style={{width:335,height:50,borderRadius:8,alignSelf:'center',justifyContent:'center'}} navigation={()=>setismodal(true)} txt = {'Pay'}/>
            {/* :
                null
            } */}
        </View>
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
            style={[styles.modalcontainer,{width:291,height:342,marginTop:'40%'}]}>
            <View
            style={{
                marginTop:8,
                // backgroundColor:'#F2F2F2',
                // width:'90%',
                // height:342,
                justifyContent:'center'
                // borderBottomWidth:1,borderColor:'black'
            }}>
               <Image
                    source={donepay}
                    style={{width:180,height:122,alignSelf:'center'}}
               />
                <Text style={[styles.modaltxt,{fontSize:24,fontWeight:'500',color:'rgba(0, 0, 0, 0.5)',marginTop:responsiveHeight(5)}]} >Completed</Text>
            </View>
            <View style={{marginTop:responsiveHeight(8),marginBottom:responsiveHeight(3)}} >
            
                <GradButton 
                    style={{
                        width:94,
                        height:42,
                        borderRadius:8,
                        alignSelf:'center',
                        justifyContent:'center'
                    }} 
                    navigation={()=>{
                        setismodal(false)
                        props.navigation.replace('Main',{screen:'Home'})
                    }} 
                    txt = {'Close'}
                />
            {/* :
                null
            } */}
        </View>
            
        </View>
        </View>
    </Modal>
    </KeyboardAwareScrollView>
     
    )
}
export default payment;  