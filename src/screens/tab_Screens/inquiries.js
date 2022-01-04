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
import RQButton from '../../components/request_button';
import {logo,lang,bullet,pic,text,video,voice,
    info,gpay,
    back,
    } from '../../assets';
import styles from './styles';
import Inquiry from '../../components/inquiry'
const data = [
    {
        date:'Mon,11,2022',
        inquiry_method:[
            {
                type:'txt',
                img:text
            },
            {
                type:'pic',
                img:pic
            }
        ]
    },
    {
        date:'Mon,11,2022',
        inquiry_method:[
            {
                type:'video',
                img:video
            },
            {
                type:'voice',
                img:voice
            }
        ]
    }
]

function inquires (props){

    const [arr, setArr] = useState([])
    const [isselected, setisselected] = useState(false)

    useEffect(() => {
        // console.log(listarr);
        setArr(data)

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
            rightComponent={
                <TouchableOpacity 
                onPress={()=>props.navigation.goBack()} 
                style={{}} >
                    <Image
                        source={info}
                        style={{width:22,height:22,marginLeft:8,tintColor:'black'}}
                    />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={{color:'black',fontFamily:'Poppins',fontSize:14,fontWeight:'500'}} >Inquiries</Text>
            }
            
        /> 

        <FlatList
            style={{ height:'50%',width:'100%' ,flex:1,alignSelf:'center',marginTop:responsiveHeight(3)}}
            data={data}
            renderItem={({ item,index }) => 
               <Inquiry  item = {item} navigation={()=>props.navigation.navigate('ScreenStack',{screen:'Status'})}  />
            }
            keyExtractor={item => item.id}
        />
    </View>
       
     
    )
}
export default inquires;  