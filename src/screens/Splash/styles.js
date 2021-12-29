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
  bullet:{width:11,height:11,marginTop:6,marginLeft:20},
  bulletxt:{color:'black',marginLeft:20,fontSize:14,fontWeight:'500',fontFamily:'Poppins'},
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
    modaltxt:{fontSize:13,fontWeight:'400',fontFamily:'Poppins',textAlign:'center',color:'black'}
});
export default styles;
