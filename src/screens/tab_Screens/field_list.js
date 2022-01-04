import React,{useState,useRef,useEffect} from 'react'
import {View,Text,TouchableOpacity,TextInput,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {useIsFocused} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';
import GradButton from '../../components/gradient_button';
import RQButton from '../../components/request_button';
import {logo,lang,bullet,call,text,
    check,
    checked,
    back,
    add} from '../../assets';
import styles from './styles';
import FieldSelect from '../../components/field_select';

const listarr = [
    {
        'id':1,
        'name':'General',
        'selected':false
    },
    {
        'id':2,
        'name':'Dermatology',
        'selected':false
    },
    {
        'id':3,
        'name':'Hepatology',
        'selected':false
    },
    {
        'id':4,
        'name':'Hematology',
        'selected':false
    },
    {
        'id':5,
        'name':'Cardiology',
        'selected':false
    },
    {
        'id':6,
        'name':'Neurology',
        'selected':false
    },
    {
        'id':7,
        'name':'Pulmonology',
        'selected':false
    },
    {
        'id':8,
        'name':'Endocrinology',
        'selected':false
    },
    {
        'id':9,
        'name':'Rheumatology',
        'selected':false
    },
    {
        'id':10,
        'name':'Immunology',
        'selected':false
    },
    {
        'id':11,
        'name':'Urology',
        'selected':false
    },
    {
        'id':12,
        'name':'Neurosurgery',
        'selected':false
    },
    {
        'id':13,
        'name':'Transplation',
        'selected':false
    },
    {
        'id':14,
        'name':'Breast surgery',
        'selected':false
    },
    {
        'id':15,
        'name':'Bariatric surgery',
        'selected':false
    },
    {
        'id':16,
        'name':'ENT surgery',
        'selected':false
    },

]


function list (props){
    const [searchTerm, setsearchTerm] = useState('')
    const [arr, setArr] = useState([])
    const [isselected, setisselected] = useState(false)
    const arry = useRef(listarr)

    useEffect(() => {
        // console.log(listarr);
        setArr(listarr)

    }, [])

    function searchFilterFunction (val){
        setsearchTerm(val)
        const res = arry.current.filter((item)=>{
            const  itemData = item.name.toUpperCase()
            const  textData = val.toUpperCase()
            return itemData.indexOf(textData) >  -1;
        })
        setArr(res)
    }

    function setitem(selected,id){
        // alert('called')
        var res = []
        if(!selected){
        res = arry.current.map((item)=>{
            if(item.id === id){
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
         res = arry.current.map((item)=>{
                return{
                    ...item,
                    selected:false
                }
            })
        setisselected(false)
        }

        setArr(res)

    }

    return(
     <View style={{flex:1}} >
         <Header  leftstyle={{width:16,height:14,margin:8}} leftnavigation = {()=>props.navigation.goBack()} rightnavigation = {props.navigation} center = {logo} right={lang} left={back}  />
         <View style={styles.sContainer}>

              <View style={styles.inputConatiner} >
                <TextInput
                    value={searchTerm}
                    placeholderTextColor={'grey'}
                    placeholder={"Search"}
                    onChangeText={value => searchFilterFunction (value)}
                    style={[styles.input,{alignSelf:'flex-start',marginLeft:10}]}
                />
            </View>
            <FlatList
                style={{ height:'50%',width:'100%' ,flex:1,alignSelf:'center',marginTop:responsiveHeight(3)}}
                data={arr}
                renderItem={({ item,index }) => 
                    <FieldSelect item={item} setItem={()=>setitem(item.selected,item.id)} />
                }
                keyExtractor={item => item.id}
            />
            {isselected?
            <View style={{marginTop:responsiveHeight(3),marginBottom:responsiveHeight(3),backgroundColor:'#FFFFFF'}} >
                <GradButton navigation={()=>props.navigation.navigate('ScreenStack',{screen:'Processing'})} txt = {'Next'}/>
            </View>
            :
            null
        }
        </View>
        
        
     </View>   
     
    )
}
export default list; 