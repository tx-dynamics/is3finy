import React,{useState,useEffect,useRef} from 'react'
import {View,TouchableOpacity,Text,TextInput,Modal,ImageBackground,RefreshControl,PermissionsAndroid,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
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
import {logo,lang,save,
    back,cross,gal,cam,flip,flash,camcros,
    add_pic} from '../../../assets';
import styles from './styles';
import DocumentPicker from 'react-native-document-picker';
import { BlurView } from "@react-native-community/blur";
var RNFS = require('react-native-fs');

const image = [
    add_pic,
    add_pic,
    
]

function Rqtext (props){

    const isFocused = useIsFocused();
    const camera = useRef(null)
    const [input, setinput] = useState('')
    const [images, setimages] = useState([ add_pic,add_pic])
    const [single, setsingle] = useState('')
    const [ismodal, setismodal] = useState(false)
    const [capture, setcapture] = useState(false)
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
        return ()=> {setimages([])}
    }, [isFocused])

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

    async function takePicture () {
        const options = { quality: 0.5, base64: true };
        const data = await camera.current.takePictureAsync(options);
        //  eslint-disable-next-line
        setsingle(data.uri)
        setcapture(true)
        
        // console.log(data);
      };

    function savepic(){
    var res = images.map((item,index)=>{
        if(item === add_pic){
            images.splice(item[index],1)
            // console.log("true");
            // return image.push(imageUri)
            return [...images,single]   
        }
    })
    setTimeout(() => {
        // console.log(res);
        setimages(res[0])                
    }, 2000);
    setcapture(false)
    setcameraopen(false)
    }

    // async function _pickImage  ()  {


    //     let pickerResult = await ImagePicker.launchImageLibraryAsync({
    //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //       base64: true,
    //       allowsEditing: true,
    //     })
    
    //     if (!pickerResult.cancelled) {
    
    //       console.log('***********************');
    
    //       let imageUri = pickerResult ? `data:image/jpg;base64,${pickerResult.base64}` : null
    //       imageUri && { uri: imageUri }
    //         var res = images.map((item,index)=>{
    //             if(item === add_pic){
    //                 images.splice(item[index],1)
    //                 // console.log("true");
    //                 // return image.push(imageUri)
    //                 return [...images,imageUri]   
    //             }
    //         })
    //         setTimeout(() => {
    //             // console.log(res);
    //             setimages(res[0])                
    //         }, 2000);
        
    //     }
    //   }
    
    // async function _takePhoto  ()  {
    //     const {
    //       status: cameraPerm
    //     } = await Permissions.askAsync(Permissions.CAMERA)
    //     const {
    //       status: cameraRollPerm
    //     } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    //     // only if user allows permission to camera AND camera roll
    //     if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
    //       let pickerResult = await ImagePicker.launchCameraAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //         quality: 0.5,
    //         base64: true,
    //         allowsEditing: true,
    //         // ratio:
    //         aspect: [1, 1],
    //       })
    //       if (!pickerResult.cancelled) {
    //         let imageUri = pickerResult ? `data:image/jpg;base64,${pickerResult.base64}` : null
    //             // let image = []
    //             let imauri = "WERWRE%$%#$$$$$$$$$$$$%#$%#$5"
    //             var res = images.map((item,index)=>{
    //                 if(item === add_pic){
    //                     images.splice(item[index],1)
    //                     // console.log("true");
    //                     // return image.push(imageUri)
    //                     return [...images,imageUri]   
    //                 }
    //             })
    //             setTimeout(() => {
    //                 // console.log(res);
    //                 setimages(res[0])                
    //             }, 2000);
               
    //       }
    //     }
    //   }

    async function onImages() {
        try {
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
            setTimeout(() => {
                savepic()
            }, 3000);
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
        // console.log(images[1]);
        //   var res = images.map((item,index)=>{
        //       if(index === indx){
        //           return images.splice(index,1)
        //       }
        //   })
        res.push(add_pic)
        // setTimeout(() => {
            // console.log(res);
            setimages(res)            
        // }, 500);  
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
         <Text style={[styles.heading,{marginTop:responsiveHeight(2)}]} >Add At Least 2 Pictures</Text>
         <View  >
             {/* {images.length > 0? */}
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
                            style={{width:156,height:143,margin:15}}
                        />
                    </TouchableOpacity>
                    :
                    <ImageBackground key={index} source={{ uri: item }} style={{ width: 156, height: 143,margin:15 }} imageStyle={{ borderRadius: 10 }} >
                        <View style={{ alignSelf: 'flex-end', flex: 0.5 }}>
                            <TouchableOpacity onPress={() => remove_image(index)} style={{width:15,height:15,alignItems:'center',margin:10}}  >
                            <Image
                                source={cross}
                                style={{width:11.27,height:11.27}}
                            />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    }
                    </>
            }
            />
            {/* :null} */}
         </View>
            <View style={{marginTop:responsiveHeight(28)}} >
                <GradButton navigation={()=>props.navigation.goBack()} txt = {'Done'}/>
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
     </View>   
    )
    }
}
export default Rqtext; 