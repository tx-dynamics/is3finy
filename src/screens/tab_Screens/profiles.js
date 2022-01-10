import React,{useState,useEffect,useRef} from 'react'
import {View,Text,ImageBackground,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
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
import PRButton from '../../components/profile_btn';
import {dp,
    edit,
    paysetting,
    setting,
    logout} from '../../assets';
import styles from './styles';

function profile (props){

    const [arr, setArr] = useState([])
    const [isselected, setisselected] = useState(false)

    useEffect(() => {
        // console.log(listarr);

    }, [])
    
    return(
     <View style={{flex:1}} >
         <Header
            backgroundColor={"transparent"}
            containerStyle={{
            alignSelf: 'center',
            // height: ,
            marginTop:10,
            borderBottomWidth: 0,
            // borderBottomColor: '#E1E3E6',
            }}
            
            centerComponent={
                <Text style={{color:'black',fontFamily:'Poppins',fontSize:14,fontWeight:'500'}} >Profile</Text>
            }
            
        /> 
        <View style={styles.profcont} >
            <Image
                source={dp}
                style={styles.dp}
            />
            <Text style={styles.heading} >Neha Sharma</Text>
            <Text style={[styles.heading,{fontWeight:'400',fontSize:14,marginTop:5}]} >ID:89947983</Text>
            
        </View>
        <View style={{marginTop:responsiveHeight(1)}} >
           <PRButton
                txt = {'Edit Profile'}
                img = {edit}
                navigation={()=>props.navigation.navigate('ScreenStack',{screen:'EditProfile'})}
                imgstyle={{width:22,height:18,marginLeft:12}}
           />

            <PRButton
                txt = {'Payment Setting'}
                img = {paysetting}
                imgstyle={{width:17.5,height:17.5,marginLeft:12}}
           />

            <PRButton
                txt = {'Setting'}
                img = {setting}
                navigation={()=>props.navigation.navigate('ScreenStack',{screen:'Setting'})}
                imgstyle={{width:16.55,height:17.48,marginLeft:12}}
           />

            <PRButton
                txt = {'Log out'}
                img = {logout}
                navigation={()=>props.navigation.replace('ScreenStack',{screen:'Signup'})}
                imgstyle={{width:20,height:20,marginLeft:12}}
                txtstyle={[styles.heading,{fontWeight:'500',fontSize:14,marginTop:0,marginLeft:responsiveWidth(3),color:'white'}]}
                btnstyle={{marginTop:responsiveHeight(22),alignSelf:'center',alignItems:'center',flexDirection:'row',width:'87%',height:48,borderRadius:10,backgroundColor:'#FF8F8F'}}
           />

        </View>
       
    </View>
       
     
    )
}
export default profile;  