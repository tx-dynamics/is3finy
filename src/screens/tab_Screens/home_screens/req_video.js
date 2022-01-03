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
import Header from '../../../components/header';
import GradButton from '../../../components/gradient_button';
import RQButton from '../../../components/request_button';
import {logo,lang,camcros,
    back,save,flip,flash,
    add_video} from '../../../assets';
import styles from './styles';
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import VideoPlayer from 'react-native-video-player'


function Rqtext (props){

    const camera = useRef(null)
    const [input, setinput] = useState('')
    const [video, setvideo] = useState('')
    const [showVideo, setshowVideo] = useState(false)
    const [recording, setrecording] = useState(false)
    const [cameraopen, setcameraopen] = useState(false)
    const [flipcam, setflipcam] = useState(false)
    const [toggleTorch, settoggleTorch] = useState(false)
    const [current, setcurrent] = useState(RNCamera.Constants.Type.back)
    const [currentFlash, setcurrentFlash] = useState(RNCamera.Constants.FlashMode.off)
    const [isstopwatch, setisstopwatch] = useState(false);
    const [ontimer, setontimer] = useState(false);
    const [stopwatchReset, setstopwatchReset] = useState(false);


    useEffect(() => {
        // setimages(image)
        
    }, [])

    async function startRecording() {
        // this.setState({ recording: true });
        setrecording(true)
        setontimer(true)
        // setstopwatchReset(false)
        settimer()
        // default to mp4 for android as codec is not set
        const { uri, codec = "mp4" } = await camera.current.recordAsync();
        console.log(uri);
        setvideo(uri);

        console.log("timer start");
     
    }

    function settimer(){
        let interval;
        var secs = 0;
        const startTimer = () => {
          // console.log(recording);
          interval = setInterval(() => {
            // console.log(secs);
            secs = secs + 1;
  
            if (secs === 60) {
              console.log("calling");
              // setisdisable(false);
              // setindex(true);
              setontimer(false);
              clearInterval(interval);
  
              // setRecording(recording);
              setTimeout(() => {
                // alert('stopped called')
                stopRecording();
              }, 500);
            //   console.log("called");
            } else {
            //   setvideo(uri);
            }
          }, 1000);
        };
        clearInterval(interval);
        startTimer();
  
    }
    
    function stopRecording() {
        setrecording(false)
        setstopwatchReset(true)
        setontimer(false)

        camera.current.stopRecording();
        setshowVideo(true)
    }

    function flipcamera (){
        setflipcam(!flipcam)
        if(flipcam){
            setcurrent(RNCamera.Constants.Type.front)
        }else{
            setcurrent(RNCamera.Constants.Type.back)
        }
    }

    function toggleFlash(){
        settoggleTorch(!toggleTorch)
        if(toggleTorch){
            setcurrentFlash(RNCamera.Constants.FlashMode.torch)
        }else{
            setcurrentFlash(RNCamera.Constants.FlashMode.off)
        }
    }

    if(cameraopen){
        return(
            <>
            {showVideo?
             <VideoPlayer
                video={{uri:video}}
            // video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                videoWidth={1600}
                videoHeight={2550}
                thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
            />
            :
            <RNCamera
            ref={camera}
            style={{width:'100%',height:'85%'}}
            type={current}
            flashMode={currentFlash}
            androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
            androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
        />
            }
            
                {showVideo?
                <TouchableOpacity onPress={()=>{
                    setshowVideo(false)
                    }} style={{position:'absolute',top:responsiveHeight(8),width:50,height:30,left:30,right:0,bottom:0}} >
                    <Image
                        source={camcros}
                        style={{width:28.8,height:28.8}}
                    />
                     
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={()=>setcameraopen(false)} style={{position:'absolute',top:responsiveHeight(8),width:50,height:30,left:30,right:0,bottom:0}} >
                    <Image
                        source={camcros}
                        style={{width:28.8,height:28.8}}
                    />
                     
                </TouchableOpacity>
                }
                
                {showVideo?
                <View style={{flex:1,backgroundColor:'black',justifyContent: "center"}} >
                    <TouchableOpacity onPress={()=> setcameraopen(false) } style={{width:50,height:50,alignSelf:'center',borderWidth:2,justifyContent:'center',alignItems:'center',borderColor:'white',backgroundColor:'transparent',borderRadius:100}} >
                        <Image
                            source={save}
                            style={{width:22.37,height:22.5,alignSelf:'center'}}
                        />
                    
                </TouchableOpacity>
                </View>
                :
                <View style={{flex:1,backgroundColor:'black'}} >
                    <View style={{alignItems:'center'}} >
                    <Stopwatch
                laps
                start={ontimer}
                reset={stopwatchReset}
                // totalDuration={6000}
                // handleFinish={() => {
                //   ontimer(false), setindex(false), stopRecording();
                // }}
                //To start
                options={{
                    container: {
                    backgroundColor: "transparent",
                    // padding: 5,
                    // borderRadius: 5,
                    // width: 180,
                    // alignSelf: "center",
                    marginTop: 10,
                    },
                    text: {
                    fontSize: 12,
                    fontWeight:'500',
                    fontFamily:'Rubik',
                    color: "white",
                    alignSelf: "center",
                    },
                }}
                //options for the styling
                getTime={(time) => {
                    //console.log(time);
                }}
                />
                    </View>
                    <View style={{ flex: 1,justifyContent:'space-around',backgroundColor:'black', flexDirection: "row", justifyContent: "center" }}>
                
                <TouchableOpacity onPress={toggleFlash} style={{alignSelf:'center'}} >
                    <Image
                        source={flash}
                        style={{width:28,height:28,alignSelf:'center',marginRight:responsiveWidth(28)}}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>  recording?stopRecording():startRecording()} style={{width:50,height:50,alignSelf:'center',borderWidth:2,justifyContent:'center',alignItems:'center',borderColor:'white',backgroundColor:'transparent',borderRadius:100}} >
                    <>{recording?
                        <View style={{width:42,height:42,alignSelf:'center',alignSelf:'center',backgroundColor:'#FF6666',borderRadius:100}} />
                    :
                        <View style={{width:42,height:42,alignSelf:'center',alignSelf:'center',backgroundColor:'white',borderRadius:100}} />
                    }</>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>flipcamera()} style={{alignSelf:'center'}} >
                    <Image
                        source={flip}
                        style={{width:28,height:28,alignSelf:'center',marginLeft:responsiveWidth(28)}}
                    />
                </TouchableOpacity>
                    </View>
                </View>
                }

                
               
            </>
        )
    }else{
        return(
            <View>
                <Header 
                   leftnavigation = {()=>props.navigation.goBack()}
                   rightnavigation = {props.navigation}
                   center = {logo}
                   right={lang}
                   left={back} 
                   leftstyle={{width:16,height:14,marginLeft:8}}
               />
                <Text style={[styles.heading,{marginTop:responsiveHeight(2)}]} >Record Video At Least 1 Minute</Text>
       
                <View  >
                    {video != ''?
                        <View style={{width:'90%',height:199,marginTop:responsiveHeight(3),borderRadius:10,alignSelf:'center'}} >
                            <VideoPlayer
                                video={{uri:video}}
                                customStyles={{borderRadius:10}}
                            // video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                                videoWidth={1600}
                                videoHeight={900}
                                thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                            />
                        </View>
                     :
                    <TouchableOpacity onPress={()=>setcameraopen(true)}>
                       <Image
                           source={add_video}
                           style={{alignSelf:'center',width:307,height:165,borderRadius:10,marginTop:responsiveHeight(3)}}
                       />
                    </TouchableOpacity>
                    } 

                    
                    
                </View>
                   <View style={{marginTop:responsiveHeight(28)}} >
                       <GradButton navigation={()=>props.navigation.goBack()} txt = {'Done'}/>
                   </View>
            </View>   
            
           )
    }

    
}
export default Rqtext; 