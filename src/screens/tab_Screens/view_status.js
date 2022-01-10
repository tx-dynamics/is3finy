import React,{useState,useEffect,useRef} from 'react'
import {View,Text,TouchableOpacity,TextInput,Modal,RefreshControl,PermissionsAndroid,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { RNCamera } from 'react-native-camera';
import {useIsFocused} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';
import GradButton from '../../components/gradient_button';
import {logo,lang,camcros,
    back,ratin,flip,flash,
    add_video} from '../../assets';
import styles from './styles';
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import VideoPlayer from 'react-native-video-player'

const ratingrange = [
        {
            selected:false,
            value:'1'
        },
        {
            selected:false,
            value:'2'
        },
        {
            selected:false,
            value:'3'
        },
        {
            selected:false,
            value:'4'
        },
        {
            selected:false,
            value:'5'
        },
        {
            selected:false,
            value:'6'
        },
        {
            selected:false,
            value:'7'
        },
        {
            selected:false,
            value:'8'
        },
        {
            selected:false,
            value:'9'
        },
        {
            selected:false,
            value:'10'
        },
    ]



function status (props){

    const camera = useRef(null)
    const [video, setvideo] = useState('')
    const [rating, setrating] = useState([])
    const [isselected, setisselected] = useState(false)
    const [ismodal, setismodal] = useState(false)
    const [success, setsuccess] = useState(false)

    useEffect(() => {
        setrating(ratingrange)
        
    }, [])

  
    function selectRating(selected,val){
        // alert('called')
        var res = []
        if(!selected){
        res = rating.map((item)=>{
            if(item.value === val){
                return{
                    ...item,
                    selected:true
                }
            }else{
                return{
                    ...item,
                    selected:false
                }
            }
        })
        setisselected(true)
        }else{
         res = rating.map((item)=>{
                return{
                    ...item,
                    selected:false
                }
            })
        setisselected(false)
        }

        setrating(res)


    }

   
        return(
            <View style={{flex:1}} >
                <Header 
                   leftnavigation = {()=>props.navigation.goBack()}
                   rightnavigation = {props.navigation}
                   center = {logo}
                   right={lang}
                   leftstyle={{color:'white'}}

               />
                <Text style={[styles.heading,{marginTop:responsiveHeight(2),fontWeight:'600',fontSize:16}]} >Inquiry Reply</Text>
       
                <View  >
                    {video == ''?
                        <View style={{width:'90%',height:199,marginTop:responsiveHeight(3),borderRadius:10,alignSelf:'center'}} >
                            <VideoPlayer
                                // video={{uri:video}}
                                customStyles={{borderRadius:10}}
                                video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                                videoWidth={1600}
                                videoHeight={900}
                                thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                            />
                        </View>
                     :
                    null
                    } 

                <Text style={[styles.heading,{marginTop:responsiveHeight(8),fontWeight:'500',fontSize:16}]} >You don’t need to pay every{'\n'}time you use our app.</Text>
                    
                    
                </View>
                   <View style={{marginTop:responsiveHeight(10)}} >
                       <GradButton navigation={()=>setismodal(true)} txt = {'Done'}/>
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
                        style={[styles.modalcontainer,{height:332}]}>
                        
                        <Text style={[styles.modaltxt,{fontSize:16,fontWeight:'500',marginTop:responsiveHeight(6)}]} >Out of 10 where 10 is the best how{'\n'} 
                        much satisfied are you from our{'\n'}
                        service?</Text>
                        
                        <View style={{alignSelf:'center',justifyContent:'center',alignItems:'center',height:150}} >
                            <FlatList
                                style={{alignContent:'center', alignSelf:'center',marginTop:responsiveHeight(3)}}
                                // horizontal={true}
                                numColumns={6}
                                data={rating}
                                renderItem={({ item,index }) => 
                                <View style={{alignItems:'center'}}>
                                    {item.selected?
                                    <TouchableOpacity onPress={()=>selectRating(item.selected,item.value)} style={{borderRadius:100,margin:5,marginLeft:item.value === '7'?responsiveWidth(13.5):null,backgroundColor:'#6CE200',width:39,height:39,alignItems:'center',justifyContent:'center'}} >
                                        <Text style={[styles.modaltxt,{fontSize:18,fontWeight:'500',color:'white'}]} >{item.value}</Text>
                                    </TouchableOpacity>
                                    :
                                    
                                    <TouchableOpacity onPress={()=>selectRating(item.selected,item.value)} style={{borderRadius:100,margin:5,marginLeft:item.value === '7'?responsiveWidth(13.5):null,backgroundColor:'rgba(108, 226, 0, 0.1)',width:39,height:39,alignItems:'center',justifyContent:'center'}} >
                                        <Text style={[styles.modaltxt,{fontSize:18,fontWeight:'500',color:'rgba(0, 0, 0, 0.5)'}]} >{item.value}</Text>
                                    </TouchableOpacity>
                                    }
                                </View>
                                }
                            />
                        </View>
                        {isselected?
                        <TouchableOpacity onPress={()=>{
                            setismodal(false)
                            setsuccess(true)
                            setTimeout(() => {
                                setsuccess(false)
                                props.navigation.goBack()
                            }, 2000);                                
                            }}
                            style={{alignSelf:'center',alignItems:'center'}}>
                                <LinearGradient
                                start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#7CFF04', '#00AE55']} 
                                style={{width:125,height:51,borderRadius:10,justifyContent:'center',alignItems:'center'}}
                            >
                                <Text style={{color:'#FFFFFF'}} >Submit</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={{width:125,height:51,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(108, 226, 0, 0.5)'}} >
                                <Text style={{color:'#FFFFFF'}} >Submit</Text>

                            </TouchableOpacity>
                        }
                    </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={success}
                    // style={{ backgroundColor:'rgba(64, 77, 97, 1)' }}
                    onRequestClose={() => {
                        setsuccess(false);
                    }}>
                    <View
                        style={{
                            height: '100%',
                            backgroundColor: 'rgba(64, 77, 97, 0.5)',
                        }}>
                    <View
                        style={[styles.modalcontainer,{height:237}]}>
                        
                        <Image
                            source={ratin}
                            style={{width:193,height:121,alignSelf:'center',marginTop:responsiveHeight(3)}}
                        />
                       <Text style={[styles.modaltxt,{fontSize:14,fontWeight:'500',marginTop:responsiveHeight(6)}]} >Review Successfully Submit</Text>
                    </View>
                    </View>
                </Modal>

            </View>   
            
           )
    

    
}
export default status; 