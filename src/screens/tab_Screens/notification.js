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
import Inquiry from '../../components/inquiry'
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
               <>
               {item.date?
                    <Text style={{fontFamily:'Poppins',fontWeight:'500',fontSize:14,color:'rgba(114, 114, 114, 1)'}} >{item.date}</Text> 
               :
                    <View style={{width:'90%',height:61,flexDirection:'row',alignSelf:'center'}} >
                        <View style={{flex:0.2}} >
                            <Image
                                source={notific}
                                style={{width:21,height:21}}
                            />
                        </View>
                        <View>
                            <Text style={{fontFamily:'Poppins',fontWeight:'500',fontSize:14,color:'black'}} >{item.status}</Text>
                            <Text style={{fontFamily:'Roboto',fontWeight:'300',fontSize:10,color:'rgba(0, 0, 0, 0.5)'}} >{item.messgae}</Text>
                        </View>
                    </View>
               }
               </>
            }
            keyExtractor={item => item.id}
        />
    </View>
       
     
    )
}
export default notification;  