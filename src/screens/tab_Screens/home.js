import React,{useState,useEffect,useRef} from 'react'
import {View,Text,PermissionsAndroid,ImageBackground,Modal,TextInput,Image,ScrollView,FlatList,TouchableOpacity} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import AudioRecorderPlayer, {
AVEncoderAudioQualityIOSType,
AVEncodingOption,
AudioEncoderAndroidType,
AudioSet,
AudioSourceAndroidType,
PlayBackType,
RecordBackType,
} from 'react-native-audio-recorder-player';
import LinearGradient from 'react-native-linear-gradient';
import {useIsFocused} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNFetchBlob from 'rn-fetch-blob'
import Header from '../../components/header';
import GradButton from '../../components/gradient_button';
import RQButton from '../../components/request_button';
import {logo,lang,bullet,save,start,stop,playfig,dele,note,
    back,cross,gal,cam,flip,flash,camcros,
    add_pic,text,
    pic,support,
    add_video,
    voice,videoa,playvidz,
    pause} from '../../assets';
import styles from './styles';
var RNFS = require('react-native-fs');
import DocumentPicker from 'react-native-document-picker';
import { RNCamera } from 'react-native-camera';
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import VideoPlayer from 'react-native-video-player'
import { createThumbnail } from "react-native-create-thumbnail";
import LanguageModal from '../../components/lang_modal';







function home (props){


    const dirs = RNFetchBlob.fs.dirs;
    const path = Platform.select({
        ios: 'hello.m4a',
        android: `${dirs.CacheDir}/hello.mp3`,
    });



    const [disable, setdisable] = useState()
    const [txttoggle, settxttoggle] = useState(false)
    const [phototoggle, setphototoggle] = useState(false)
    const [videotoggle, setvideotoggle] = useState(false)
    const [voicetoggle, setvoicetoggle] = useState(false)
    const [videoopen, setvideoopen] = useState(false)
    const [ismodal, setismodal] = useState(false)
    const camera = useRef(null)
    const videocam = useRef(null)
    const [images, setimages] = useState([ add_pic,add_pic])
    const [single, setsingle] = useState('')
    const [capture, setcapture] = useState(false)
    const [cameraopen, setcameraopen] = useState(false)
    const [flipcam, setflipcam] = useState(false)
    const [toggleTorch, settoggleTorch] = useState(false)
    const [current, setcurrent] = useState(RNCamera.Constants.Type.front)
    const [currentFlash, setcurrentFlash] = useState(RNCamera.Constants.FlashMode.off)
    const [isstopwatch, setisstopwatch] = useState(false);
    const [ontimer, setontimer] = useState(false);
    const [stopwatchReset, setstopwatchReset] = useState(false);
    const [video, setvideo] = useState([{icon:add_video},{icon:add_video}])
    const [singlevideo, setsinglevideo] = useState('')
    const [savesinglevideo, setsavesinglevideo] = useState('')
    const [showVideo, setshowVideo] = useState(false)
    const [playvideo, setplayvideo] = useState(false)
    const [recording, setrecording] = useState(false)
    const [thumbnail, setThumbnail] = useState('');
    const [timeStamp, setTimeStamp] = useState('1000');

    const audioRecorderPlayer = useRef(new AudioRecorderPlayer())
    const [audios, setaudios] = useState([{icon:voice},{icon:voice}])
    const [recordSecs, setrecordSecs] = useState(0)
    const [recordTime, setrecordTime] = useState('00:00')
    const [audiorecording, setaudiorecording] = useState(false)
    const [play, setplay] = useState(false)
    const [isplay, setisplay] = useState(false)
    // const [ispause, setispause] = useState(false)
    const [duration, setduration] = useState('00:00')
    const [playtime, setplaytime] = useState('00:00')
    const [audio, setaudio] = useState('')

    const [lanmodal, setlanmodal] = useState(false)
    const [country, setCountry] = useState('Unknown');

    // useEffect(() => {

    //     if(txttoggle || phototoggle && txttoggle || videotoggle && txttoggle ||voicetoggle){
    //         console.log('true');
    //     }else{
    //         console.log('false');
    //     }

    // }, [disable]);
    


    function flipcamera (){
        setflipcam(!flipcam)
        if(!flipcam){
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

    async function takePicture () {
        const options = { quality: 0.5, base64: true };
        const data = await camera.current.takePictureAsync(options);
        //  eslint-disable-next-line
        setsingle(data.uri)
        setcapture(true)
        
        // console.log(data);
      };

    function savepic(img=''){
        // console.log('local img',img);
        if(images[0] === add_pic){
            console.log('1');
            images.splice(0,1)
            setimages([...images,img?img:single])
            return
        }else if(images[1] === add_pic){
            console.log('2');
            images.splice(1,1)
            setimages([...images,img?img:single])
            return
        }else{
            console.log('3');
            return
        }
    // var res = images.map((item,index)=>{
    //     if(item === add_pic){
    //         images.splice(item[index],1)
    //         // console.log("true");
    //         // return image.push(imageUri)
    //         return [...images,img?img:single]   
    //     }
    // })
    // console.log(res);
    // setTimeout(() => {
    //     // console.log(res);
    //     setimages(res[0] != undefined ? res[0] : res[1] )                
    // }, 1000);
    setcapture(false)
    setcameraopen(false)
    }

   async function savevideoz(thumb,videosingle){
    console.log('called savr videoz',thumb,videosingle);
    let singe = {
        file:videosingle,
        thumbnail:thumb,
        isplay:false
    }

    if(video[0].icon === add_video){
        console.log('1');
        video.splice(0,1)
        setvideo([...video,singe])
        return
    }else if(video[1].icon === add_video){
        console.log('2');
        video.splice(1,1)
        setvideo([...video,singe])
        return
    }else{
        console.log('3');
        return
    }

    // video.map((item,index)=>{
    //     if(item.icon === add_video){
    //         video.splice(item[index],1)
    //         console.log("true");
    //         // return image.push(imageUri)
    //         // console.log([...video,singe])   
    //         setvideo([...video,singe])                
               
    //     }
        // console.log(res);
        // setTimeout(() => {
        //     console.log(res);
        //     alert(JSON.stringify(res))
        //     // setvideo(typeof res[0] === Array ? res[0]:res)                
        //     setvideo(res)                
        // }, 2000);
    // })
   }

    async function generateThumbnail(path) {
        if (!path) {
            return;
        }
    
        // setIsLoading(true);
    
        try {
            const response = await createThumbnail({
            url: path,
            timeStamp: parseInt(timeStamp, 10),
            });
            // setThumbnail(response.path);
            savevideoz(response.path,path)
        } catch (err) {
            console.error(err);
        } finally {
        //   setIsLoading(false);
        }
        }

    async function startRecording() {
        setsinglevideo('')
        setstopwatchReset(false)
        
        // this.setState({ recording: true });
        setrecording(true)
        setontimer(true)
        // setstopwatchReset(false)
        let recor = false
        settimer(recor)
        // default to mp4 for android as codec is not set
        const { uri, codec = "mp4" } = await videocam.current.recordAsync();
        generateThumbnail(uri)
        // console.log(uri);
        // setvideo( video.concat(uri) );
        setsinglevideo(uri)
        console.log("timer start");
     
    }

    function settimer(recor){
        let interval;
        var secs = 0;
        const startTimer = () => {
          // console.log(recording);
          interval = setInterval(() => {
            // console.log(secs);
            secs = secs + 1;
  
            if (secs === 60 ) {
              console.log("calling");
              // setisdisable(false);
              // setindex(true);
              setontimer(false);
              clearInterval(interval);
  
              // setRecording(recording);
              setTimeout(() => {
                // alert('stopped called')
                stoprecording();
              }, 500);
            //   console.log("called");
            } else {
                // console.log('timer working ',secs);  
            //   setvideo(uri);\
            if(recor){
                secs = 60
                setontimer(false);
                clearInterval(interval);
                // alert('cleared interval as well')
            }else{
                // console.log('timer working 2');
            }
            // alert('calling else of timer')
            }
          }, 1000);
        };

        clearInterval(interval);
        startTimer();
  
    }
    
    function stoprecording() {
        let recor = true
        settimer(recor)
        setrecording(false)
        setstopwatchReset(true)
        setontimer(false)
        setshowVideo(true)
        // console.log(videocam.current);
        // videocam.current.stopRecording();
    }

   
    async function onImages() {
        try {
        const res = await DocumentPicker.pickMultiple({
            type: [DocumentPicker.types.images],
        });
        let arr = [];
        var img 
        res.map(item => {
            RNFS.readFile(item.uri, 'base64').then(async(res) => {
            // img = await setsingle(`data:image/png;base64,${res}`);
            img = await (`data:image/png;base64,${res}`)
            });
            // arr.push({
            // photoName: item.name,
            // photoLabel: item.name,
            // photoSize: item.size,
            // photo: url,
            // });
            setTimeout(() => {
                // console.log(img);
                savepic(img)
            }, 500);
        });
        setismodal(false);
        // settype('photos');
        // console.log('Images', single);
        // setphotos(arr);
        } catch (err) {
        if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
        } else {
            throw err;
        }
        }
    }

    function remove_image(index){
    //   alert(index)
        if(index === 0 ){
        var res = images.splice(index+1,1)

        }else{
        var res = images.splice(index-1,1)

        }
    
    res.push(add_pic)
    // setTimeout(() => {
        // console.log(res);
        setimages(res)            
    // }, 500);  
    }

    function videoremove(index){
        if(index === 0 ){
            var res = video.splice(index+1,1)
    
            }else{
            var res = video.splice(index-1,1)
    
            }
        res.push({icon:add_video})
        setvideo(res)
        // res.push(add_pic)
        // setTimeout(() => {
            // console.log(res);
            // setimages(res)
    }

    function audioremove(index){
        if(index === 0 ){
            var res = audios.splice(index+1,1)
    
            }else{
            var res = audios.splice(index-1,1)
    
            }
        res.push({icon:voice})
        // console.log(res);

        setaudios(res)
        // res.push(add_pic)
        // setTimeout(() => {
            // console.log(res);
            // setimages(res)
    }
   
    async function onStartRecord () {
        setrecording(true)
        if (Platform.OS === 'android') {
          try {
            const grants = await PermissionsAndroid.requestMultiple([
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
              PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            ]);
    
            // console.log('write external stroage', grants);
    
            if (
              grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
                PermissionsAndroid.RESULTS.GRANTED &&
              grants['android.permission.READ_EXTERNAL_STORAGE'] ===
                PermissionsAndroid.RESULTS.GRANTED &&
              grants['android.permission.RECORD_AUDIO'] ===
                PermissionsAndroid.RESULTS.GRANTED
            ) {
              console.log('permissions granted');
            } else {
              console.log('All required permissions not granted');
              return;
            }
          } catch (err) {
            console.warn(err);
            return;
          }
        }
        const audioSet: AudioSet = {
            AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
            AudioSourceAndroid: AudioSourceAndroidType.MIC,
            AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
            AVNumberOfChannelsKeyIOS: 2,
            AVFormatIDKeyIOS: AVEncodingOption.aac,
          };
        const meteringEnabled = false;
    
        const result = await audioRecorderPlayer.current.startRecorder(undefined,audioSet,meteringEnabled);
        // setaudiotimer()
        audioRecorderPlayer.current.addRecordBackListener((e:RecordBackType) => {
            setrecordSecs(e.currentPosition)
            setrecordTime(
                audioRecorderPlayer.current.mmss(
                Math.floor(e.currentPosition),
                )
            )
            //   this.setState({
        //     recordSecs: e.currentPosition,
        //     recordTime: this.audioRecorderPlayer.mmssss(
        //       Math.floor(e.currentPosition),
        //     ),
        //   });
          return;
        });
        // setaudio(result)
        // console.log(result);
      };

      function setaudiotimer(){
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
              // setontimer(false);
              clearInterval(interval);
  
              // setRecording(recording);
              setTimeout(() => {
                // alert('stopped called')
                onStopRecord();
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

    async function onStopRecord  (indx)  {
    
    const result = await audioRecorderPlayer.current.stopRecorder();
    audioRecorderPlayer.current.removeRecordBackListener();
    setrecordSecs(0)
    // audioRecorderPlayer.addPlayBackListener((e:RecordBackType) => {
    // setduration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
    // })
    // this.setState({
    //   recordSecs: 0,
    // });
    // setaudio(result)
    var res = audios.map((item,index)=>{
        if(index === indx){
            // console.log('called');
            return{
                ...item.singe,
                isrecordingaudio:false,
                file:result
            }
        }else{
            return{...item}
        }
    })  
    // console.log(res);
    setaudios(res)
    // console.log("called here",result);
    setrecording(false)
    setplay(true)
    };
    
      async function onStartPlay ()  {
        setisplay(true)
        console.log('onStartPlay');
        const msg = await audioRecorderPlayer.current.startPlayer();
        console.log(msg);
        audioRecorderPlayer.current.addPlayBackListener((e) => {
         setplaytime(audioRecorderPlayer.current.mmss(Math.floor(e.currentPosition))),
         setduration(audioRecorderPlayer.current.mmss(Math.floor(e.duration)));
        //  this.setState({
        //     currentPositionSec: e.currentPosition,
        //     currentDurationSec: e.duration,
        //     playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        //     duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
        //   });
          return;
        });
        // if(playtime ===duration){
        //   audioRecorderPlayer.current.stopPlayer();
        //   audioRecorderPlayer.current.removePlayBackListener();
        // }
      };
      
      async function onPausePlay  ()  {
        setisplay(false)

        await audioRecorderPlayer.current.pausePlayer();

      };


    function saveaudio(){
        // console.log("before splaice",audios);
        let singe = {
            isrecordingaudio:true,
            isplay:false
        }
    // var res = []
    
    // var res = audios.map((item,index)=>{
    //     if(item.icon === voice){
    //         audios.splice(item[index],1)
    //         // console.log("true");
    //         // return image.push(imageUri)
    //         return [...audios,singe]
    //         // return res.push(singe)   
    //     }
    //     else{
    //         return
    //     }
    // })

    // let  v1 = audios[0]

    // v1[0].key

    if(audios[0].icon === voice){
        console.log('1');
        audios.splice(0,1)
        setaudios([...audios,singe])
        return
    }else if(audios[1].icon === voice){
        console.log('2');
        audios.splice(1,1)
        setaudios([...audios,singe])
        return
    }else{
        console.log('3');
        return
    }


    // if(res.includes(undefined)){
    //     res = res.filter(function( element ) {
    //         return element !== undefined;
    //     });
    // }
    // setTimeout(() => {
    //     console.log("after splpice",res);
    //     // setaudios(res )                
    //     setaudios(res[0] != undefined ? res[0] : res[1] )                
    // }, 2000);
    }

    function setplayer(indx,singplay){
        if(singplay){
            var res = audios.map((item,index)=>{
                if(index === indx){
                    return{...item,isplay:false}
                }else{
                    return{...item}
                }
            })
            onPausePlay()
            setaudios(res)
        }else{
            var res = audios.map((item,index)=>{
                if(index === indx){
                    return{...item,isplay:true}
                }else{
                    return{...item}
                }
            })
            onStartPlay()
            setaudios(res)
        }
        
    }


      if(cameraopen){
        return(
            <>
            {capture?
                <Image 
                    source={{uri:single}}
                    style={{width:'100%',height:'85%'}}    
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
                {capture?
                    <TouchableOpacity onPress={()=>setcapture(false)} style={{position:'absolute',top:responsiveHeight(8),width:50,height:30,left:30,right:0,bottom:0}} >
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
                <View style={{ flex: 1,justifyContent:'space-around',backgroundColor:'black', flexDirection: "row", justifyContent: "center" }}>
                
                {capture?null:
                <TouchableOpacity onPress={toggleFlash} style={{alignSelf:'center'}} >
                    <Image
                        source={flash}
                        style={{width:28,height:28,alignSelf:'center',marginRight:responsiveWidth(28)}}
                    />
                </TouchableOpacity>
                }
                <TouchableOpacity onPress={()=> capture? savepic(): takePicture()} style={{width:50,height:50,alignSelf:'center',borderWidth:2,justifyContent:'center',alignItems:'center',borderColor:'white',backgroundColor:'transparent',borderRadius:100}} >
                    {capture?
                        <Image
                            source={save}
                            style={{width:22.37,height:22.5,alignSelf:'center'}}
                        />
                    :
                        <View style={{width:42,height:42,alignSelf:'center',alignSelf:'center',backgroundColor:'white',borderRadius:100}} />
                    }
                </TouchableOpacity>
                {capture?null:
                    <TouchableOpacity onPress={()=>flipcamera()} style={{alignSelf:'center'}} >
                        <Image
                            source={flip}
                            style={{width:28,height:28,alignSelf:'center',marginLeft:responsiveWidth(28)}}
                        />
                    </TouchableOpacity>
                }
            </View>
               
            </>
        )
        }else if(videoopen){
            return(
                <>
                {showVideo?
                <VideoPlayer
                    video={{uri:singlevideo}}
                // video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                    videoWidth={1600}
                    videoHeight={2350}
                    thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                />
                :
                <RNCamera
                ref={videocam}
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
                    <TouchableOpacity onPress={()=>setvideoopen(false)} style={{position:'absolute',top:responsiveHeight(8),width:50,height:30,left:30,right:0,bottom:0}} >
                        <Image
                            source={camcros}
                            style={{width:28.8,height:28.8}}
                        />
                        
                    </TouchableOpacity>
                    }
                    
                    {showVideo?
                    <View style={{flex:1,backgroundColor:'black',justifyContent: "center"}} >
                        <TouchableOpacity onPress={()=> {
                            setvideoopen(false)
                            setshowVideo(false)
                            } } style={{width:50,height:50,alignSelf:'center',borderWidth:2,justifyContent:'center',alignItems:'center',borderColor:'white',backgroundColor:'transparent',borderRadius:100}} >
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
                            <TouchableOpacity onPress={()=>  recording?stoprecording():startRecording()} style={{width:50,height:50,alignSelf:'center',borderWidth:2,justifyContent:'center',alignItems:'center',borderColor:'white',backgroundColor:'transparent',borderRadius:100}} >
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
        }else if(playvideo){
            return(
                <View style={{flex:1,backgroundColor:'black'}}>
                <VideoPlayer
                    video={{uri:savesinglevideo}}
                // video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                    videoWidth={1600}
                    videoHeight={2350}
                    thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                />
                
                
                    {/* {showVideo?
                    <TouchableOpacity onPress={()=>{
                        setshowVideo(false)
                        }} style={{position:'absolute',top:responsiveHeight(8),width:50,height:30,left:30,right:0,bottom:0}} >
                        <Image
                            source={camcros}
                            style={{width:28.8,height:28.8}}
                        />
                        
                    </TouchableOpacity>
                    : */}
                    <TouchableOpacity onPress={()=>{
                        setplayvideo(false)
                        setsavesinglevideo('')}} style={{position:'absolute',top:responsiveHeight(8),width:50,height:30,left:30,right:0,bottom:0}} >
                        <Image
                            source={camcros}
                            style={{width:28.8,height:28.8}}
                        />
                        
                    </TouchableOpacity>
                    {/* } */}
                
                </View>
            )
        }else{  

        return(
        <ScrollView>
            <View>
            <Header leftnavigation = {()=>props.navigation.navigate('ScreenStack',{screen:'Contact'})}  rightnavigation={()=>setlanmodal(true)} center = {logo} right={lang} left={support}  />
            <Text style={styles.heading} >Put your request {'\n'} Keep it brief and Simple ,{'\n'} Select any two types</Text>
            <View style={styles.container} >
                {txttoggle?
                    <View  style={[styles.rqBtn,{height:121,justifyContent:'flex-start'}]}   >
                        <View style={{flexDirection:'row'}}> 
                            <Image
                                source={text}
                                style={{width:15,height:17,marginLeft:10,marginTop:15}}
                            />
                            <TextInput 
                            multiline={true}
                            maxLength={180}
                            placeholderTextColor={'grey'}
                            placeholder='Text'
                            style={[styles.rqtxt,{width:'85%',justifyContent:'flex-start',fontSize:12,fontWeight:'500'}]} />
                            
                        </View>
                    </View>
                :
                    <RQButton 
                        navigation={()=>settxttoggle(true)}
                        img = {text}
                        txt = {'Text'}
                        style={{width:15,height:17,alignSelf:'center',marginLeft:10}} />
                }
            </View>
                <View style={[styles.container,{marginTop:responsiveHeight(3)}]} >
                {phototoggle?
                        <View  style={[styles.rqBtn,{height:198,justifyContent:'flex-start'}]}   >
                            <View style={{flexDirection:'row',marginTop:responsiveHeight(2)}}> 
                            <Image
                                source={text}
                                style={{width:15,height:17,marginLeft:10}}
                            />
                            <Text 
                            style={[styles.rqtxt,{}]} >Picture</Text>
                            
                        </View>
                            <FlatList
                            style={{ alignSelf:'center' }}
                            numColumns={2}
                            // showsVerticalScrollIndicator={false}
                            data={images}
                            renderItem={({ item, index }) =>
                                <>
                                {item === add_pic?
                                <TouchableOpacity onPress={()=>setismodal(true)} style={{alignItems:'center',justifyContent:'center'}} >
                                    <Image
                                        source={item}
                                        style={{width:134,height:134,margin:15}}
                                    />
                                </TouchableOpacity>
                                :
                                <ImageBackground key={index} source={{ uri: item }} style={{ width: 134, height: 134,margin:15 }} imageStyle={{ borderRadius: 10 }} >
                                    <View style={{ alignSelf: 'flex-end', flex: 0.5 }}>
                                        <TouchableOpacity onPress={() => remove_image(index)} style={{width:15,height:15,alignItems:'center',margin:10}}  >
                                        <Image
                                            source={cross}
                                            style={{width:11.27,height:11.27,tintColor:'black'}}
                                        />
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                                }
                                </>
                        }
                        />
                        </View>
                    :
                    <RQButton 
                        navigation={()=>setphototoggle(true)}
                        img = {pic}
                        txt = {'Picture'}
                        style={{width:17,height:16,alignSelf:'center',marginLeft:10}} />
                    }
                </View>
                <View style={[styles.container,{marginTop:responsiveHeight(3)}]} >
                    {videotoggle?
                    <View  style={[styles.rqBtn,{height:198,justifyContent:'flex-start',marginBottom:responsiveHeight(2)}]}   >
                        <View style={{flexDirection:'row',marginTop:responsiveHeight(2)}}> 
                            <Image
                                source={text}
                                style={{width:15,height:17,marginLeft:10}}
                            />
                            <Text 
                            style={[styles.rqtxt,{}]} >Video</Text>
                            
                        </View>
                        <View  >
                        <FlatList
                            style={{ alignSelf:'center' }}
                            numColumns={2}
                            // showsVerticalScrollIndicator={false}
                            data={video}
                            renderItem={({ item, index }) =>
                                <>
                                {!item.icon?
                                <ImageBackground source={{ uri: item.thumbnail }} style={{ width: 134, height: 134,margin:15 }} imageStyle={{ borderRadius: 10 }} >
                                    <View style={{ alignSelf: 'flex-end', flex: 0.5 }}>
                                        <TouchableOpacity onPress={() => videoremove(0)} style={{width:15,height:15,alignItems:'center',margin:10}}  >
                                        <Image
                                            source={cross}
                                            style={{width:11.27,height:11.27,tintColor:'black'}}
                                        />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ alignSelf: 'center', flex: 1 }}>
                                        <TouchableOpacity onPress={async() =>{ 
                                        await setsavesinglevideo(item.file)
                                        setTimeout(() => {
                                            setplayvideo(true)
                                        }, 500);
                                    }} style={{width:15,height:15,alignItems:'center',margin:10}}  >
                                        <Image
                                            source={playvidz}
                                            style={{width:23,height:23}}
                                        />
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                                :
                                    <TouchableOpacity  key={index} onPress={async()=>{
                                        setvideoopen(true)
                                        }} style={{alignItems:'center',justifyContent:'center'}} >
                                        <Image
                                            source={item.icon}
                                            style={{width:134,height:134,margin:15}}
                                        />
                                    </TouchableOpacity>
                                
                                }
                                </>
                        }
                        />
                        
                    </View>
                    </View>
                    :
                    <RQButton 
                    navigation={()=>setvideotoggle(true)}
                    img = {videoa}
                    txt = {'Video'}
                    style={{width:15,height:10,alignSelf:'center',marginLeft:10}} />
                }
                </View>
                <View style={[styles.container,{marginTop:responsiveHeight(3)}]} >
                    {voicetoggle?
                    <View  style={[styles.rqBtn,{height:200,justifyContent:'flex-start',marginBottom:responsiveHeight(2)}]}   >
                        <View style={{flexDirection:'row',marginTop:responsiveHeight(2)}}> 
                            <Image
                                source={voice}
                                style={{width:11.37,height:15.83,alignSelf:'center',marginLeft:10}}
                            />
                            <Text 
                            style={[styles.rqtxt,{}]} >Voice</Text>
                        </View>
                        <View>
                            <FlatList
                            style={{ alignSelf:'center'}}
                            // showsVerticalScrollIndicator={false}
                            data={audios}
                            renderItem={({ item, index }) =>
                            <>
                                {!item.icon?
                                <View style={[styles.rqBtn,{width:'90%',backgroundColor:'transparent',alignSelf:'flex-start',marginVertical:10,marginLeft:8}]} >
                                        {item.isrecordingaudio?
                                            <View style={{flexDirection:'row',alignItems:'center',width:332,height:35}} >
                                                <TouchableOpacity onPress={()=>onStopRecord(index)} style={{flex:0.12}} >
                                                    <Image
                                                        source={stop}
                                                        style={{width:25,height:25,alignSelf:'center'}}
                                                    />
                                                </TouchableOpacity>
                                                <View style={{flex:0.6}} >
                                                    <Image
                                                        source={note}
                                                        style={{width:181.04,height:25}}
                                                    />
                                                </View>
                                                <View style={{flex:0.1}} >
                                                    <Text style={{textAlign:'center',fontWeight:'400',fontSize:11,color:'#989898',alignSelf:'center'}} >{recordTime}</Text>
                                                </View>
                                                <View style={{flex:0.1}} ></View>
                                            </View>
                                        :
                                        <View style={{flexDirection:'row',alignItems:'center',width:332,height:35}} >
                                            <TouchableOpacity onPress={()=>setplayer(index,item.isplay)} style={{flex:0.12}} >

                                                <Image
                                                    source={item.isplay?pause:playfig}
                                                    style={{width:22,height:22,alignSelf:'center',tintColor:item.isplay?'#7CFF04':null}}
                                                />
                                            </TouchableOpacity>
                                            <View style={{flex:0.6}} >
                                                <Image
                                                    source={note}
                                                    style={{width:181.04,height:25,tintColor:item.isplay?null:'grey'}}
                                                />
                                            </View>
                                            <View style={{flex:0.1}} >
                                                {item.isplay?
                                                    <>
                                                    {item.isplay?
                                                        <Text style={{textAlign:'center',fontWeight:'400',fontSize:11,color:'#989898',alignSelf:'center'}} >{playtime}</Text>
                                                    :
                                                        <Text style={{textAlign:'center',fontWeight:'400',fontSize:11,color:'#989898',alignSelf:'center'}} >{duration}</Text>
                                                    }
                                                    </>                                                
                                                :
                                                <Text style={{textAlign:'center',fontWeight:'400',fontSize:11,color:'#989898',alignSelf:'center'}} >{recordTime}</Text>
                                                }
                                            </View>
                                            <TouchableOpacity onPress={()=>audioremove(index)} style={{flex:0.13,justifyContent:'center',height:25}} >
                                            <Image
                                                    source={dele}
                                                    style={{width:12.75,height:13.16,alignSelf:'center'}}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        }
                                </View>
                                //  <Text style={[styles.rqtxt,{fontSize:14,marginTop:8,textAlign:'center',width:'100%',marginLeft:0}]} >object created</Text>
                                 :     
                                <TouchableOpacity onPress={()=>{
                                    saveaudio()
                                    onStartRecord()
                                    }} style={{marginVertical:10}} >
                                    <Image
                                        source={item.icon}
                                        style={{width:20,height:25.83,alignSelf:'center'}}
                                    />
                                    <Text style={[styles.rqtxt,{fontSize:14,marginTop:8,textAlign:'center',width:'100%',marginLeft:0}]} >Add Your Recording</Text>
                                </TouchableOpacity>
                                  
                                }
                            </>
                            }/>
                        </View>
                    </View>
                    :
                    <RQButton 
                        navigation={()=>setvoicetoggle(true)}
                        img = {voice}
                        txt = {'Voice'}
                        style={{width:11.37,height:15.83,alignSelf:'center',marginLeft:10}} />
                    }
                </View>
                <View style={{marginTop:responsiveHeight(8),marginBottom:responsiveHeight(5)}} >
                    <GradButton navigation={()=>props.navigation.navigate('Selection')} txt = {'Next'}/>
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
                    // style={styles.absolute}
                    // viewRef={this.state.viewRef}
                    // blurType="light"
                    // blurAmount={10}
                    // reducedTransparencyFallbackColor="white"
                    style={{
                        height: '100%',
                        // marginTop:25,
                        backgroundColor: 'rgba(64, 77, 97, 0.5)',
                    }}>
                <View
                    style={{
                    marginTop: 'auto',
                    bottom: 0,
                    position: 'absolute',
                    width: '100%',
                    backgroundColor: '#F8F8F8',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 10,
                    }}>
                    <View
                    style={{
                        width: '100%',
                        height: 120,
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        justifyContent: 'space-between',
                        // borderBottomWidth:1,borderColor:'black'
                    }}>
                    <View
                        style={{
                        justifyContent: 'center',
                        height: '50%',
                        alignSelf: 'center',
                        width: '50%',
                        }}>
                        <TouchableOpacity
                        onPress={()=>setcameraopen(true)}
                        style={{
                            // width: '10%',
                            alignSelf: 'center',

                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Image
                            source={cam}
                            // resizeMode="contain"
                            style={{
                            width: 33,
                            height: 33,
                            // marginBottom:4
                            }}
                        />
                        <Text style={{fontSize:14,fontWeight:'400',color:'black'}}>Camera</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                        justifyContent: 'center',
                        height: '50%',
                        alignSelf: 'center',
                        width: '50%',
                        }}>
                        <TouchableOpacity
                        onPress={()=>onImages()}
                        style={{
                            // width: '10%',
                            alignSelf: 'center',

                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Image
                            source={gal}
                            // resizeMode="cover"
                            style={{
                                marginTop:-10,
                                width: 42,
                                height: 48,
                            }}
                        />
                        <Text style={{fontSize:14,fontWeight:'400',color:'black',marginTop:-10}} >Gallery</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    <TouchableOpacity
                        onPress={()=>setismodal(false)}
                        style={{
                            borderTopWidth:0.8,
                            width:'80%',
                            alignSelf:'center',
                            alignItems:'center',
                            borderColor:'#a9a9a9'
                        }}
                    >
                        <Text style={{margin:10,color:'rgba(4, 4, 4, 0.23)'}} >Cancel</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>
            {lanmodal?
                <LanguageModal ismodal={lanmodal} setmodal={()=>setlanmodal(!lanmodal)} country={country} selectcountry={(val)=>setCountry(val)} />
            :null}
        </ScrollView>   
        
        )
        }
}
export default home; 