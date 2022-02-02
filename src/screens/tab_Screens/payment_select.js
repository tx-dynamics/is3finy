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
    const [checkrqpay,setcheckrqpay] = useState(false)
    const [checkcopay,setcheckcopay] = useState(false)

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
                        style={{width:16,height:15,marginLeft:8,tintColor:'black'}}
                    />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={{color:'black',fontFamily:'Poppins',fontSize:14,fontWeight:'500'}} >Payment Method</Text>
            }
            
        /> 
        <Text style={[styles.heading,{fontFamily:'Lato',fontSize:13,fontWeight:'500',alignSelf:'flex-start',marginLeft:responsiveWidth(4),marginTop:responsiveHeight(5)}]} >SELECT PAYMENT METHOD</Text>
        <View style={[styles.processingCont,{flexDirection:'row',height:83,alignItems:'center',marginTop:responsiveHeight(7)}]} >
            {checkcred?
                <TouchableOpacity onPress={()=>setcheckcred(false)} style={styles.bullent_cont} >
                    <View style={styles.bullet_inside} />
                </TouchableOpacity>
            :
                <TouchableOpacity onPress={()=>{
                    setcheckcred(true)
                    setcheckgpay(false)
                    setcheckrqpay(false)
                    setcheckcopay(false)
                }} style={styles.bullent_cont} />
            }
            <Text style={styles.paytxt} >Credit/Debit Card</Text>
            
        </View>
        <View style={[styles.processingCont,{flexDirection:'row',height:83,alignItems:'center',marginTop:responsiveHeight(2)}]} >
            {checkgpay?
                <TouchableOpacity onPress={()=>setcheckgpay(false)} style={styles.bullent_cont} >
                    <View style={styles.bullet_inside} />
                </TouchableOpacity>
            :
                <TouchableOpacity onPress={()=>{
                    setcheckgpay(true)
                    setcheckcred(false)
                    setcheckrqpay(false)
                    setcheckcopay(false)
                }} style={styles.bullent_cont} />
            }<Text style={styles.paytxt} >Pay at C.I.B Bank ATM machines{'\n'}(payless services)</Text>
            
        </View>

        <View style={[styles.processingCont,{flexDirection:'row',height:83,alignItems:'center',marginTop:responsiveHeight(2)}]} >
            {checkrqpay?
                <TouchableOpacity onPress={()=>setcheckrqpay(false)} style={styles.bullent_cont} >
                    <View style={styles.bullet_inside} />
                </TouchableOpacity>
            :
                <TouchableOpacity onPress={()=>{
                    setcheckgpay(false)
                    setcheckcred(false)
                    setcheckrqpay(true)
                    setcheckcopay(false)

                }} style={styles.bullent_cont} />
            }<Text style={styles.paytxt} >Request many collection via an agent</Text>
            
        </View>

        <View style={[styles.processingCont,{flexDirection:'row',height:83,alignItems:'center',marginTop:responsiveHeight(2)}]} >
            {checkcopay?
                <TouchableOpacity onPress={()=>setcheckcopay(false)} style={styles.bullent_cont} >
                    <View style={styles.bullet_inside} />
                </TouchableOpacity>
            :
                <TouchableOpacity onPress={()=>{
                    setcheckgpay(false)
                    setcheckcred(false)
                    setcheckrqpay(false)
                    setcheckcopay(true)
                }} style={styles.bullent_cont} />
            }<Text style={styles.paytxt} >Add coupon</Text>
            
        </View>
        
        <View style={{marginTop:responsiveHeight(15)}} >
            {checkcred || checkgpay || checkrqpay || checkcopay ?
                <GradButton style={{width:335,height:50,borderRadius:8,alignSelf:'center',justifyContent:'center'}} navigation={()=>{
                    checkgpay?
                        props.navigation.navigate('BankPay')
                    :
                        props.navigation.navigate('Payment')
                }} txt = {'Pay'}/>
            :
                null
            }
        </View>
        </View>
       
     
    )
}
export default processing;  