import {StyleSheet, Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:'#2C2C2C',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  splashStyle: {
    justifyContent:'center',
    height: '100%',
    marginTop:responsiveScreenHeight(28),
    width: Dimensions.get('window').width,
  },
  container:{
    // width:'90%',
    marginTop:responsiveHeight(5),
    // alignSelf:'center'
  },
  heading:{
      textAlign:'center',
      fontWeight:'700',
      fontSize:18,
      fontFamily:'Poppins',
      color:'black',
      marginTop:10
  },
  rqBtn:{
    justifyContent:'center',
    width:321,
    height:51,
    borderRadius:10,
    backgroundColor:'rgba(108, 226, 0, 0.1)',
    alignSelf:'center'
  },
  rqtxt:{
    fontSize:14,
    fontWeight:'600',
    fontFamily:'Poppins',
    width:'75%',
    marginLeft:13,
    color:'black'
  },
    selectiontxt:{
      fontFamily:'Poppins',
      fontWeight:'500',
      color:'black',
      fontSize:14,
      margin:15,
      textAlign:'center'
    },
    selectionCont:{
      width:314,
      height:170,
      backgroundColor:'rgba(108, 226, 0, 0.1)',
      alignItems:'center',
      marginTop:responsiveHeight(5),
      alignSelf:'center',
      borderRadius:10

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
        borderRadius:10,
        backgroundColor:'rgba(108, 226, 0, 0.1)'
    },
    input:{
        color:'black',
        alignSelf:'center',
        fontSize:16,
        fontWeight:'600',
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
    container:{
      // width:'90%',
      marginTop:responsiveHeight(5),
      // alignSelf:'center'
    },
    bullet:{width:11,height:11,marginTop:6,marginLeft:20},
    bulletxt:{color:'black',marginLeft:20,fontSize:14,fontWeight:'500',fontFamily:'Poppins'},
    bullent_cont:{alignItems:'center',justifyContent:'center',width:18,height:18,borderRadius:100,borderWidth:2,borderColor:'#6CE200',marginLeft:responsiveWidth(4)},
    bullet_inside:{width:12,height:12,borderRadius:100,backgroundColor:'#6CE200'},
    paytxt:{width:'66%',fontFamily:'Lato',fontSize:16,fontWeight:'500',marginLeft:responsiveWidth(4),color:'black'},
    modalcontainer:{
      marginTop: '50%',
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
      height:269
      },
      modaltxt:{fontSize:13,fontWeight:'400',fontFamily:'Poppins',textAlign:'center',color:'black'},
      profcont:{marginTop:responsiveHeight(4),alignItems:'center'},
      dp:{
        width:91,
        height:91,
        alignSelf:'center'
      }
});
export default styles;
