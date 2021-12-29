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
    back,cross,flip,flash,
    add_video} from '../../../assets';
import styles from './styles';
import { Stopwatch, Timer } from "react-native-stopwatch-timer";



function Rqtext (props){

    const camera = useRef(null)
    const [input, setinput] = useState('')
    const [video, setvideo] = useState('')
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
        setisstopwatch(false)
        // default to mp4 for android as codec is not set
        const { uri, codec = "mp4" } = await camera.current.recordAsync();
        console.log(uri);
        console.log("timer start");
      let interval;
      var secs = 0;
      const startTimer = (uri) => {
        // console.log(recording);
        interval = setInterval(() => {
          console.log(secs);
          secs = secs + 1;

          if (secs === 60) {
            console.log("calling");
            // setisdisable(false);
            // setindex(true);
            setontimer(false);
            clearInterval(interval);

            // setRecording(recording);
            setTimeout(() => {
              alert('stopped called')
              stopRecording();
            }, 500);
            console.log("called");
          } else {
            setvideo(uri);
          }
        }, 1000);
      };
      clearInterval(interval);
      startTimer(uri);

      setvideo(uri);
    }
    
    function stopRecording() {
        setrecording(false)
        setstopwatchReset(true)
        setontimer(false)

        camera.current.stopRecording();
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
                <TouchableOpacity onPress={()=>setcameraopen(false)} style={{position:'absolute',top:responsiveHeight(8),width:50,height:30,left:30,right:0,bottom:0}} >
                    <Image
                        source={camcros}
                        style={{width:28.8,height:28.8}}
                    />
                     
                </TouchableOpacity>
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
                <TouchableOpacity onPress={()=> recording?stopRecording():startRecording()} style={{width:50,height:50,alignSelf:'center',borderWidth:2,justifyContent:'center',alignItems:'center',borderColor:'white',backgroundColor:'transparent',borderRadius:100}} >
                    {recording?
                        <View style={{width:42,height:42,alignSelf:'center',alignSelf:'center',backgroundColor:'#FF6666',borderRadius:100}} />
                    :
                        <View style={{width:42,height:42,alignSelf:'center',alignSelf:'center',backgroundColor:'white',borderRadius:100}} />
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>flipcamera()} style={{alignSelf:'center'}} >
                    <Image
                        source={flip}
                        style={{width:28,height:28,alignSelf:'center',marginLeft:responsiveWidth(28)}}
                    />
                </TouchableOpacity>
                    </View>
                </View>
               
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
               />
                <Text style={[styles.heading,{marginTop:responsiveHeight(2)}]} >Record Video At Least 1 Minute</Text>
       
                <View  >
                       
                    <TouchableOpacity onPress={()=>setcameraopen(true)}>
                       <Image
                           source={add_video}
                           style={{alignSelf:'center',width:307,height:165,borderRadius:10,marginTop:responsiveHeight(3)}}
                       />
                    </TouchableOpacity>
                    
                </View>
                   <View style={{marginTop:responsiveHeight(28)}} >
                       <GradButton navigation={()=>props.navigation.goBack()} txt = {'Done'}/>
                   </View>
            </View>   
            
           )
    }

    
}
export default Rqtext; 