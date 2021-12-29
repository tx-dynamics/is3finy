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
    inputConatiner:{
        width:'90%',
        height:308,
        alignSelf:'center',
        marginTop:20,
        borderRadius:10,
        backgroundColor:'rgba(108, 226, 0, 0.1)'
    },
    input:{
        color:'black',
        alignSelf:'flex-start',
        margin:16,
        fontSize:12,
        fontWeight:'400',
        fontFamily:'Poppins'
    },
    maxtxt:{
        alignSelf:'flex-end',
        color:'black',
        marginRight:10
    },
    record:{
      width:100,
      height:100,
      borderRadius:100,
      backgroundColor:'rgba(108, 226, 0, 0.1)',
      marginTop:responsiveHeight(10),
      alignItems:'center',
      alignSelf:'center',
      justifyContent:'center'
    },
    time:{
      fontFamily:'Poppins',
      fontWeight:'600',
      color:'black',
      fontSize:18
    },
    voicebtn:{
      width:40,
      height:40,
      marginTop:responsiveHeight(3),
      alignSelf:'center'
    }
});
export default styles;
