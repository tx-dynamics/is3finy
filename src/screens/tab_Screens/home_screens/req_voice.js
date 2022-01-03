import React,{useState,useEffect,useRef} from 'react'
import {View,Text,TextInput,ImageBackground,Platform,PermissionsAndroid,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
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
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useIsFocused} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header';
import GradButton from '../../../components/gradient_button';
import RQButton from '../../../components/request_button';
import {logo,lang,
    back,start,stop,playicpn,pause,
    add} from '../../../assets';
import styles from './styles';
import RNFetchBlob from 'rn-fetch-blob'

function Rqvoice (props){

    const dirs = RNFetchBlob.fs.dirs;
    const path = Platform.select({
    ios: 'hello.m4a',
    android: `${dirs.CacheDir}/hello.mp3`,
});

    const audioRecorderPlayer = useRef(new AudioRecorderPlayer())
    const [input, setinput] = useState('')
    const [recordSecs, setrecordSecs] = useState(0)
    const [recordTime, setrecordTime] = useState('00:00')
    const [recording, setrecording] = useState(false)
    const [play, setplay] = useState(false)
    const [isplay, setisplay] = useState(false)
    // const [ispause, setispause] = useState(false)
    const [duration, setduration] = useState('00:00')
    const [playtime, setplaytime] = useState('00:00')
    const [audio, setaudio] = useState('')

    async function onStartRecord () {
        setrecording(true)
        if (Platform.OS === 'android') {
          try {
            const grants = await PermissionsAndroid.requestMultiple([
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
              PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            ]);
    
            console.log('write external stroage', grants);
    
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
        settimer()
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
        console.log(result);
      };

      function settimer(){
        let interval;
        var secs = 0;
        const startTimer = () => {
          // console.log(recording);
          interval = setInterval(() => {
            // console.log(secs);
            secs = secs + 1;
  
            if (secs === 5) {
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

      async function onStopRecord  ()  {
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
        console.log("called here",result);
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
      
    //   onStopPlay = async () => {
    //     console.log('onStopPlay');
    //     this.audioRecorderPlayer.stopPlayer();
    //     this.audioRecorderPlayer.removePlayBackListener();
    //   };


    return(
     <View>
         <Header leftnavigation = {()=>props.navigation.goBack()} leftstyle={{width:16,height:14,marginLeft:8}} rightnavigation = {props.navigation} center = {logo} right={lang} left={back}  />
         <Text style={[styles.heading,{marginTop:responsiveHeight(2)}]} >Record Voice At Least 1 Minute</Text>
            <View style={styles.record} >
              {isplay?
                <>
                {isplay?
                <Text style={styles.time} >{playtime}</Text>
                :
                <Text style={styles.time} >{duration}</Text>
                }
                </>
              :
              <Text style={styles.time} >{recordTime}</Text>
                
              }
            </View>
            {recording?
            <Text style={[styles.time,{marginTop:responsiveHeight(5),alignSelf:'center'}]} >Recording. . .</Text>
            :
            <Text style={[styles.time,{marginTop:responsiveHeight(5),alignSelf:'center'}]} >Record</Text>
            }
            {play?
                <>{isplay?
                        <TouchableOpacity onPress={()=>onPausePlay()} >
                            <Image
                            source={pause}
                            style={[styles.voicebtn,{tintColor:'black'}]}
                            />
                        </TouchableOpacity>
                    :
                        <TouchableOpacity onPress={()=>onStartPlay()} >
                            <Image
                            source={playicpn}
                            style={[styles.voicebtn,{tintColor:'black'}]}
                            />
                        </TouchableOpacity>
                }
                </>
                
            :
            <>
            {recording?
                <TouchableOpacity onPress={()=>onStopRecord()} >
                    <Image
                    source={stop}
                    style={styles.voicebtn}
                    />
                </TouchableOpacity>
                
            :
                <TouchableOpacity onPress={()=>onStartRecord()}>
                    <Image
                    source={start}
                    style={styles.voicebtn}
                    />
                </TouchableOpacity>
                }
            </>
            }
            {recording?
            <View style={{marginTop:responsiveHeight(8)}} >
                <GradButton  disable={true} txt = {'Save'}/>
            </View>
            :
            <View style={{marginTop:responsiveHeight(8)}} >
                <GradButton navigation={()=>props.navigation.goBack()} disable={false} txt = {'Save'}/>
            </View>
            }
            
     </View>   
     
    )
}
export default Rqvoice; 