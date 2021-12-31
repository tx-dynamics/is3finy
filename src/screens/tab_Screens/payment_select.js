import React,{useState,useEffect} from 'react'
import {View,Text,ImageBackground,RefreshControl,PermissionsAndroid,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
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
import {logo,lang,bullet,call,text,
    credit,gpay,
    back,
    } from '../../assets';
import styles from './styles';

function processing (props){

    const [checkcred,setcheckcred] = useState(false)
    const [checkgpay,setcheckgpay] = useState(false)

    return(
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
        <Text style={[styles.heading,{fontFamily:'Lato',fontSize:13,fontWeight:'500',alignSelf:'flex-start',marginLeft:responsiveWidth(4),marginTop:responsiveHeight(5)}]} >SELECT PAYMENT METHOD</Text>
        <View style={[styles.processingCont,{flexDirection:'row',height:104,alignItems:'center',marginTop:responsiveHeight(10)}]} >
            {checkcred?
                <TouchableOpacity onPress={()=>setcheckcred(false)} style={styles.bullent_cont} >
                    <View style={styles.bullet_inside} />
                </TouchableOpacity>
            :
                <TouchableOpacity onPress={()=>{
                    setcheckcred(true)
                    setcheckgpay(false)
                }} style={styles.bullent_cont} />
            }
            <Text style={styles.paytxt} >Credit/Debit Card</Text>
            <Image
                source={credit}
                style={{width:45,height:45}}
            />
        </View>
        <View style={[styles.processingCont,{flexDirection:'row',height:104,alignItems:'center',marginTop:responsiveHeight(2)}]} >
            {checkgpay?
                <TouchableOpacity onPress={()=>setcheckgpay(false)} style={styles.bullent_cont} >
                    <View style={styles.bullet_inside} />
                </TouchableOpacity>
            :
                <TouchableOpacity onPress={()=>{
                    setcheckgpay(true)
                    setcheckcred(false)
                }} style={styles.bullent_cont} />
            }<Text style={styles.paytxt} >Google Payment</Text>
            <Image
                source={gpay}
                style={{width:55,height:23}}
            />
        </View>
        
        <View style={{marginTop:responsiveHeight(30)}} >
            {checkcred || checkgpay?
                <GradButton style={{width:335,height:50,borderRadius:8,alignSelf:'center',justifyContent:'center'}} navigation={()=>props.navigation.navigate('Payment')} txt = {'Pay'}/>
            :
                null
            }
        </View>
        </View>
       
     
    )
}
export default processing;  