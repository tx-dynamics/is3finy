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
import {logo,lang,notific,
    info,gpay,
    back,
    } from '../../assets';
import styles from './styles';
import Notify from '../../components/notification'
const data = [
    {
        date:'Mon,11,2022',
    },
    {
        status:'Response Receieved',
        messgae:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi aliquet commodo egestas tempus, urna sed in fames id. Tortor eros porttitor at nisl, bibendum.'        
    },
    {
        status:'Response Receieved',
        messgae:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi aliquet commodo egestas tempus, urna sed in fames id. Tortor eros porttitor at nisl, bibendum.'        
    },
    {
        status:'Response Receieved',
        messgae:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi aliquet commodo egestas tempus, urna sed in fames id. Tortor eros porttitor at nisl, bibendum.'        
    },
    {
        date:'Yesterday',
    },
    {
        status:'Response Receieved',
        messgae:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi aliquet commodo egestas tempus, urna sed in fames id. Tortor eros porttitor at nisl, bibendum.'        
    },
    {
        status:'Response Receieved',
        messgae:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi aliquet commodo egestas tempus, urna sed in fames id. Tortor eros porttitor at nisl, bibendum.'        
    },
    {
        status:'Response Receieved',
        messgae:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi aliquet commodo egestas tempus, urna sed in fames id. Tortor eros porttitor at nisl, bibendum.'        
    },
    
]

function notification (props){

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
            leftComponent={
                <TouchableOpacity 
                onPress={()=>props.navigation.goBack()} 
                style={{}} >
                    <Image
                        source={back}
                        style={{width:16,height:14,marginLeft:8,tintColor:'black'}}
                    />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={{color:'black',fontFamily:'Poppins',fontSize:14,fontWeight:'500'}} >Notifications</Text>
            }
            
        /> 

        <FlatList
            style={{ height:'50%',width:'100%' ,flex:1,alignSelf:'center',marginTop:responsiveHeight(3)}}
            data={data}
            renderItem={({ item,index }) => 
                <Notify item = {item} />
            }
            keyExtractor={item => item.id}
        />
    </View>
       
     
    )
}
export default notification;  