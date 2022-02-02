import React,{useState,useEffect} from 'react'
import {View,Text,ImageBackground,RefreshControl,TextInput,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
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
import DocumentPicker from 'react-native-document-picker';
import GradButton from '../../components/gradient_button';
import RQButton from '../../components/request_button';
import {logo,lang,bullet,cross,text,
    credit,reciept,
    back,
    } from '../../assets';
import styles from './styles';
var RNFS = require('react-native-fs');

function processing (props){

    const [checkcred,setcheckcred] = useState(false)
    const [image,setimage] = useState('')
    const [single, setsingle] = useState('')

    async function onImages() {
        try {
        setcheckcred(true)
        const res = await DocumentPicker.pickMultiple({
            type: [DocumentPicker.types.images],
        });
        let arr = [];
        res.map(item => {
            RNFS.readFile(item.uri, 'base64').then(async(res) => {
            await setsingle(`data:image/png;base64,${res}`);
            });
            // arr.push({
            // photoName: item.name,
            // photoLabel: item.name,
            // photoSize: item.size,
            // photo: url,
            // });
            // setTimeout(() => {
            //     savepic()
            // }, 3000);
        });
        // setphotos(arr);
        } catch (err) {
        if (DocumentPicker.isCancel(err)) {
            setcheckcred(false)
            // User cancelled the picker, exit any dialogs or menus and move on
        } else {
            throw err;
        }
        }
    }

    function remove_image(){
        setsingle('')
        setcheckcred(false)
    }

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
                        source={require('../../assets/images/backewq.png')}
                        style={{width:16,height:16,marginLeft:8,tintColor:'black'}}
                    />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={{color:'black',fontFamily:'Poppins',fontSize:14,fontWeight:'500'}} >Payment Method</Text>
            }
            
        /> 
        <Text style={[styles.heading,{fontFamily:'Lato',fontSize:14,fontWeight:'500',alignSelf:'flex-start',marginLeft:responsiveWidth(7.5),marginTop:responsiveHeight(5)}]} >Bank account details</Text>
        <Text style={[styles.heading,{fontFamily:'Lato',fontSize:11,fontWeight:'400',alignSelf:'flex-start',marginLeft:responsiveWidth(7.5),textAlign:'left'}]} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing{'\n'}consectetur nulla ac, libero sagittis, cursus integer et nunc.</Text>
        <Text style={[styles.heading,{fontFamily:'Lato',fontSize:14,fontWeight:'600',alignSelf:'flex-start',marginLeft:responsiveWidth(7.5),textAlign:'left',marginTop:responsiveHeight(5)}]} >xxxx-xxxx-xxxx-xxxx</Text>
        <View style={[styles.processingCont,{width:'90%',height:154,alignItems:'flex-start'}]} >
            <View style={{height:110,borderBottomWidth:1,borderBottomColor:'#CDCDCD',width:'100%'}} >
                <TextInput
                    style={{width:'90%',marginLeft:responsiveWidth(2),fontWeight:'400',fontSize:11,color:'black'}}
                    multiline={true}
                    placeholder={'Write a message...'}
                    placeholderTextColor={'black'}
                />
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}} >
                <View style={{flex:1}} >
                    <Text style={[styles.heading,{fontFamily:'Lato',fontSize:14,fontWeight:'400',alignSelf:'flex-start',marginLeft:responsiveWidth(3),textAlign:'left',marginTop:responsiveHeight(1)}]} >Upload receipt</Text>
                </View>
                <View style={{flex:0.1}} >
                    {checkcred?
                        <Image
                            source={reciept}
                            style={{width:22,height:20,marginTop:responsiveHeight(1)}}
                        />
                    :
                        <TouchableOpacity onPress={onImages} >
                            <Text style={[styles.heading,{fontFamily:'Lato',fontSize:22,fontWeight:'bold',alignSelf:'flex-start',marginLeft:responsiveWidth(2),textAlign:'left',marginTop:responsiveHeight(1)}]} >+</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
            {single != ''?
            <ImageBackground source={{uri:single}} style={{width:'100%',height:196,marginTop:responsiveHeight(5),alignSelf:'center'}} borderRadius={10} >
                    <View style={{ alignSelf: 'flex-end', flex: 0.5 }}>
                            <TouchableOpacity onPress={() => remove_image()} style={{width:15,height:15,justifyContent:'center',alignItems:'center',margin:10}}  >
                                <Image
                                    source={require('../../assets/images/crossblakc.png')}
                                    style={{width:9.41,height:10.41,tintColor:'black'}}
                                />
                            </TouchableOpacity>
                    </View>         
            </ImageBackground>
            :null}

        </View>
        
        <View style={{marginTop:responsiveHeight(35)}} >
            {checkcred?
                <GradButton style={{width:335,height:50,borderRadius:8,alignSelf:'center',justifyContent:'center'}} navigation={()=>props.navigation.navigate('Payment')} txt = {'Pay'}/>
            :
                null
            }
        </View>
        </View>
       
     
    )
}
export default processing;  