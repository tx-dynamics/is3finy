import React,{useState,useEffect,useRef} from 'react'
import {View,Text,ImageBackground,Image,TextInput, TouchableOpacity,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import LinearGradient from 'react-native-linear-gradient';
import {useIsFocused} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Header, FAB} from 'react-native-elements';
import GradButton from '../../components/gradient_button';
import PRButton from '../../components/profile_btn';
import {dp,camra,
    edit,eback,
    paysetting,
    setting,
    logout} from '../../assets';
import styles from './styles';

function profile (props){

    const [arr, setArr] = useState('')
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
            // justifyContent:'center',
            marginTop:10,
            borderBottomWidth: 0,
            // borderBottomColor: '#E1E3E6',
            }}
            leftComponent={
                <TouchableOpacity onPress={()=>props.navigation.goBack()} >
                    <Image
                        source = {eback}
                        style={{width:7,height:15,marginLeft:15}}
                    />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={{color:'black',fontFamily:'Poppins',fontSize:14,fontWeight:'500'}} >Edit Profile</Text>
            }
            
        /> 
        <View style={styles.profcont} >
            <ImageBackground
                source={dp}
                style={styles.dp}
            >
                <TouchableOpacity style={{width:91,height:91,backgroundColor:'rgba(0, 0, 0, 0.5)',borderRadius:100,justifyContent:'center'}}  >
                    <Image
                        source={camra}
                        style={{width:30,height:24.75,alignSelf:'center'}}
                    />
                </TouchableOpacity>
            </ImageBackground>
            <Text style={[styles.heading,{fontWeight:'400',fontSize:14}]} ></Text>
            
        </View>
        <View style={{marginTop:responsiveHeight(1)}} >
            <View style={[styles.inputConatiner,{borderRadius:4,borderWidth:1    ,borderColor:'#DCDCDC'}]} >
                <TextInput
                    style={[styles.input,{fontWeight:'500',fontSize:14,alignSelf:'flex-start',marginLeft:10}]}
                    placeholder='Name'
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                />
           </View>

           <View style={[styles.inputConatiner,{borderRadius:4,borderWidth:1    ,borderColor:'#DCDCDC'}]} >
                <TextInput
                    style={[styles.input,{fontWeight:'500',fontSize:14,alignSelf:'flex-start',marginLeft:10}]}
                    placeholder='Phone Number'
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                />
           </View>

           <View style={[styles.inputConatiner,{borderRadius:4,borderWidth:1    ,borderColor:'#DCDCDC'}]} >
                <TextInput
                    style={[styles.input,{fontWeight:'500',fontSize:14,alignSelf:'flex-start',marginLeft:10}]}
                    placeholder='Password'
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                />
           </View>

           <View style={[styles.inputConatiner,{borderRadius:4,borderWidth:1    ,borderColor:'#DCDCDC'}]} >
                <TextInput
                    style={[styles.input,{fontWeight:'500',fontSize:14,alignSelf:'flex-start',marginLeft:10}]}
                    placeholder='Gender'
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                />
           </View>

           <View style={[styles.inputConatiner,{borderRadius:4,borderWidth:1    ,borderColor:'#DCDCDC'}]} >
                <TextInput
                    style={[styles.input,{fontWeight:'500',fontSize:14,alignSelf:'flex-start',marginLeft:10}]}
                    placeholder='Date of birth'
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                />
           </View>
            <View style={{marginTop:responsiveHeight(8)}} >
                <GradButton style={{width:335,height:48,borderRadius:10,alignSelf:'center',justifyContent:'center'}}  txt={'Save'} />
            </View>

        </View>
       
    </View>
       
     
    )
}
export default profile;  