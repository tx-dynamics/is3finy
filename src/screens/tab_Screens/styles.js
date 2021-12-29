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
        width:'90%',
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
});
export default styles;
