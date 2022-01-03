import {StyleSheet, Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height:'100%',
  },
  bd:{height:'100%',width:'100%'},
  bg_color:{backgroundColor:'#000000AF',height:'100%'},
  container:{
    alignItems:'center',
    marginTop:responsiveHeight(10),
  },
  signup:{width:'90%',height:51,borderRadius:10,alignSelf:'center',justifyContent:'center',alignItems:'center'},
  contary:
  {
    flexDirection:'row',
    width:125,height:44,
    borderRadius:8,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    marginTop:responsiveHeight(5),
    borderWidth:2,
    borderColor:'#FFFFFF'},
  heading:{
      textAlign:'center',
      fontWeight:'700',
      fontSize:18,
      fontFamily:'Poppins',
      color:'black',
      marginTop:10
  },
  
    next:{
      width:32.38,
      height:32.38,
      alignSelf:'center',
      marginTop:responsiveHeight(3)
    },
    processingCont:{
      width:335,
      height:238,
      backgroundColor:'rgba(108, 226, 0, 0.1)',
      alignItems:'center',
      marginTop:responsiveHeight(5),
      alignSelf:'center',
      borderRadius:10

    },
    ellipse:{
      alignSelf:'center',
      justifyContent:'center',
      alignItems:'center',
      width:84,
      height:84,
      borderRadius:100,
      borderColor:'#6CE200',
      borderWidth:2,
      backgroundColor:'transparent',
      marginTop:responsiveHeight(2)
    },
    cat_con:{
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    cat:{
      width:127,
      height:94,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'rgba(108, 226, 0, 0.1)'
    },
    cat_txt:{
      fontSize:16,
      fontWeight:'600',
      fontFamily:'Poppins',
      color:'black'
    },
    inputConatiner:{
        width:335,
        height:48,
        alignSelf:'center',
        marginTop:25,
        borderRadius:4,
        backgroundColor:'rgba(172, 172, 172, 0.49)'
    },
    input:{
        color:'white',
        fontSize:16,
        fontWeight:'500',
        marginLeft:responsiveHeight(2),
        fontFamily:'Poppins'
    },
    watsapp:{
      width:207,
      height:49,
      alignSelf:'center',
      justifyContent:'center',
      backgroundColor:'rgba(108, 226, 0, 0.1)',
      borderRadius:10,
      flexDirection:'row',
      marginTop:responsiveHeight(14)
    },
    watsapp_icon:{
      alignSelf:'center',
      width:20,
      height:19.93
    },
    sContainer: {
      flex: 1,
      backgroundColor: "#FFFFFF"
    },
    sTextItem: {
      color:'black',
      width: "85%",
      // height:30,
      fontWeight:'500', 
      fontFamily:'Poppins',
      marginLeft:15,
      // backgroundColor:'red',
      // textAlignfoVertical: "center",
      fontSize: 14
    },
    sSearchBar: {
      color:'black',
      paddingHorizontal: 10,
      margin: 10,
      height: 50,
      borderColor: "gray",
      borderWidth: 1,
      fontSize: 18
    },
    borderStyleBase: {
        width: 30,
        height: 45
      },
     
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
     
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
      },
     
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
      modalcontainer:{
        marginTop: '30%',
        bottom: 0,
        // position: 'absolute',
        width: '90%',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor: '#F8F8F8',
        borderRadius: 15,
        // borderTopRightRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        height:470
        },
        modaltxt:{fontSize:13,fontWeight:'400',fontFamily:'Poppins',textAlign:'center',color:'black'}
});
export default styles;
