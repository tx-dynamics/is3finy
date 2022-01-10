import React,{useState,useEffect,useRef} from 'react'
import {View,Text,TouchableOpacity,TextInput,ImageBackground,RefreshControl,PermissionsAndroid,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import { RNCamera } from 'react-native-camera';
import {useIsFocused} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';
import GradButton from '../../components/gradient_button';
import {one,two,three,four,five,
    back,faqsa,gdown,gUp,
    add_video} from '../../assets';
import styles from './styles';
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import VideoPlayer from 'react-native-video-player'


function Rqtext (props){

    const camera = useRef(null)
    const [current, setcurrent] = useState()
    const [toggle1, settoggle1] = useState(false)
    const [toggle2, settoggle2] = useState(false)
    const [toggle3, settoggle3] = useState(false)
    const [toggle4, settoggle4] = useState(false)
   

    useEffect(() => {
        setcurrent(one)
        
    }, [])


    function getimage (val){
        if(val === 1){
            setcurrent(two)
            settoggle2(false)
            settoggle3(false)
            settoggle4(false)
        }else if(val === 2){
            setcurrent(three)
            settoggle1(false)
            settoggle3(false)
            settoggle4(false)
        }else if(val === 3){
            setcurrent(four)
            settoggle2(false)
            settoggle1(false)
            settoggle4(false)
        }else if(val === 4){
            setcurrent(five)
            settoggle2(false)
            settoggle3(false)
            settoggle3(false)
        }else{
            setcurrent(one)
        }
    }

    
        return(
            <View>
                <Header 
                   leftnavigation = {()=>props.navigation.goBack()}
                   rightnavigation = {props.navigation}
                   center = {faqsa}
                   centerstyle={{width:40,height:14,marginTop:responsiveHeight(3.5)}}
                   leftstyle={{color:'white'}}

               />
       
                <View  >
                    <Image
                        source={current}
                        style={{alignSelf:'center',width:335,height:174,borderRadius:4,marginTop:responsiveHeight(3)}}
                    />
                    <View style={{
                            marginTop:responsiveHeight(5),
                            width:326,
                            height:toggle1?170:48,
                            borderRadius:5,borderWidth:0.5,borderColor:'#DCDCDC',alignItems:'center',alignSelf:'center',
                            backgroundColor:toggle1?'rgba(108, 226, 0, 0.1)':'#FFFFFF'}} >

                        <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',marginTop:responsiveHeight(1.5)}} >
                            <Text style={[styles.selectiontxt,{color:'#6CE200',fontSize:12,fontFamily:'Rubik',marginLeft:15,margin:0,textAlign:'left',width:'85%'}]} >What is Kamtawfik?</Text>
                            {toggle1?
                                <TouchableOpacity 
                                    onPress={()=>{
                                        getimage()
                                        settoggle1(false)
                                    }}
                                    style={{width:25,height:25,alignItems:'center',justifyContent:'center'}} >
                                        <Image
                                            source={gUp}
                                            style={{width:14,height:8}}
                                        />
                                </TouchableOpacity>
                            :
                                <TouchableOpacity 
                                    onPress={()=>{
                                        let val  = 1
                                        getimage(val)
                                        settoggle1(true)
                                    }}
                                    style={{width:25,height:25,alignItems:'center',justifyContent:'center'}} >
                                        <Image
                                            source={gdown}
                                            style={{width:14,height:8}}
                                        />
                                </TouchableOpacity>
                            }
                        </View>
                        
                        {toggle1 &&
                        <Text 
                            style={[styles.selectiontxt,{color:'#6CE200',fontWeight:'400',fontSize:12,fontFamily:'Rubik',marginLeft:15,margin:0,textAlign:'left',width:'85%'}]}  
                        >Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit. Aenean tincidunt vulputate{'\n'}integer auctor pellentesque vitae facilisis{'\n'}tellus morbi. Laoreet gravida dui quis vitae,{'\n'}dolor vitae mi. Est, justo nisi, orci neque{'\n'}est. Et id sem suspendisse imperdiet amet{'\n'}viverra in in. </Text>}
                        
                    </View>
                    
                    <View style={{
                            marginTop:responsiveHeight(2),width:326,height:toggle2?170:48,
                            borderRadius:5,borderWidth:0.5,borderColor:'#DCDCDC',alignItems:'center',alignSelf:'center',
                            backgroundColor:toggle2?'rgba(108, 226, 0, 0.1)':'#FFFFFF'}} >

                        <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',marginTop:responsiveHeight(1.5)}} >
                            <Text style={[styles.selectiontxt,{color:'#6CE200',fontSize:12,fontFamily:'Rubik',marginLeft:15,margin:0,textAlign:'left',width:'85%'}]} >How we use the app?</Text>
                            {toggle2?
                                <TouchableOpacity 
                                    onPress={()=>{
                                        getimage()
                                        settoggle2(false)
                                    }}
                                    style={{width:25,height:25,alignItems:'center',justifyContent:'center'}} >
                                        <Image
                                            source={gUp}
                                            style={{width:14,height:8}}
                                        />
                                </TouchableOpacity>
                            :
                                <TouchableOpacity 
                                    onPress={()=>{
                                        let val  = 2
                                        getimage(val)
                                        settoggle2(true)
                                    }}
                                    style={{width:25,height:25,alignItems:'center',justifyContent:'center'}} >
                                        <Image
                                            source={gdown}
                                            style={{width:14,height:8}}
                                        />
                                </TouchableOpacity>
                            }
                        </View>
                        
                        {toggle2 &&
                        <Text 
                            style={[styles.selectiontxt,{color:'#6CE200',fontWeight:'400',fontSize:12,fontFamily:'Rubik',marginLeft:15,margin:0,textAlign:'left',width:'85%'}]}  
                        >Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit. Aenean tincidunt vulputate{'\n'}integer auctor pellentesque vitae facilisis{'\n'}tellus morbi. Laoreet gravida dui quis vitae,{'\n'}dolor vitae mi. Est, justo nisi, orci neque{'\n'}est. Et id sem suspendisse imperdiet amet{'\n'}viverra in in. </Text>}
                        
                    </View>

                    <View style={{
                            marginTop:responsiveHeight(2),width:326,height:toggle3?170:48,
                            borderRadius:5,borderWidth:0.5,borderColor:'#DCDCDC',alignItems:'center',alignSelf:'center',
                            backgroundColor:toggle3?'rgba(108, 226, 0, 0.1)':'#FFFFFF'}} >

                        <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',marginTop:responsiveHeight(1.5)}} >
                            <Text style={[styles.selectiontxt,{color:'#6CE200',fontSize:12,fontFamily:'Rubik',marginLeft:15,margin:0,textAlign:'left',width:'85%'}]} >What is the Benefits of this App?</Text>
                            {toggle3?
                                <TouchableOpacity 
                                    onPress={()=>{
                                        getimage()
                                        settoggle3(false)
                                    }}
                                    style={{width:25,height:25,alignItems:'center',justifyContent:'center'}} >
                                        <Image
                                            source={gUp}
                                            style={{width:14,height:8}}
                                        />
                                </TouchableOpacity>
                            :
                                <TouchableOpacity 
                                    onPress={()=>{
                                        let val  = 3
                                        getimage(val)
                                        settoggle3(true)
                                    }}
                                    style={{width:25,height:25,alignItems:'center',justifyContent:'center'}} >
                                        <Image
                                            source={gdown}
                                            style={{width:14,height:8}}
                                        />
                                </TouchableOpacity>
                            }
                        </View>
                        
                        {toggle3 &&
                        <Text 
                            style={[styles.selectiontxt,{color:'#6CE200',fontWeight:'400',fontSize:12,fontFamily:'Rubik',marginLeft:15,margin:0,textAlign:'left',width:'85%'}]}  
                        >Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit. Aenean tincidunt vulputate{'\n'}integer auctor pellentesque vitae facilisis{'\n'}tellus morbi. Laoreet gravida dui quis vitae,{'\n'}dolor vitae mi. Est, justo nisi, orci neque{'\n'}est. Et id sem suspendisse imperdiet amet{'\n'}viverra in in. </Text>}
                        
                    </View>


                    <View style={{
                            marginTop:responsiveHeight(2),width:326,height:toggle4?170:48,
                            borderRadius:5,borderWidth:0.5,borderColor:'#DCDCDC',alignItems:'center',alignSelf:'center',
                            backgroundColor:toggle4?'rgba(108, 226, 0, 0.1)':'#FFFFFF'}} >

                        <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',marginTop:responsiveHeight(1.5)}} >
                            <Text style={[styles.selectiontxt,{color:'#6CE200',fontSize:12,fontFamily:'Rubik',marginLeft:15,margin:0,textAlign:'left',width:'85%'}]} >Why should I purchase the full report?</Text>
                            {toggle4?
                                <TouchableOpacity 
                                    onPress={()=>{
                                        getimage()
                                        settoggle4(false)
                                    }}
                                    style={{width:25,height:25,alignItems:'center',justifyContent:'center'}} >
                                        <Image
                                            source={gUp}
                                            style={{width:14,height:8}}
                                        />
                                </TouchableOpacity>
                            :
                                <TouchableOpacity 
                                    onPress={()=>{
                                        let val  = 4
                                        getimage(val)
                                        settoggle4(true)
                                    }}
                                    style={{width:25,height:25,alignItems:'center',justifyContent:'center'}} >
                                        <Image
                                            source={gdown}
                                            style={{width:14,height:8}}
                                        />
                                </TouchableOpacity>
                            }
                        </View>
                        
                        {toggle4 &&
                        <Text 
                            style={[styles.selectiontxt,{color:'#6CE200',fontWeight:'400',fontSize:12,fontFamily:'Rubik',marginLeft:15,margin:0,textAlign:'left',width:'85%'}]}  
                        >Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit. Aenean tincidunt vulputate{'\n'}integer auctor pellentesque vitae facilisis{'\n'}tellus morbi. Laoreet gravida dui quis vitae,{'\n'}dolor vitae mi. Est, justo nisi, orci neque{'\n'}est. Et id sem suspendisse imperdiet amet{'\n'}viverra in in. </Text>}
                        
                    </View>
                    
                </View>
            </View>   
            
           )

    
}
export default Rqtext; 