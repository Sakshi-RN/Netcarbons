import { Platform, StyleSheet } from 'react-native'
import { Colors } from '../../theme/colors'
import { Fonts } from '../../theme/fonts'

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // borderRadius: 50,
    borderColor:Colors.LIGHTGREYOFF,
    borderWidth:1,
    // opacity: 0.7,
    // height: 50,
    backgroundColor: Colors.PLACEHOLDERBLUE,
    alignItems: 'center',
    // shadowColor: "#000000",
    // shadowOffset: {
    // width: 0,
    // height: 3,
    // },
    // shadowOpacity:  0.17,
    // shadowRadius: 3.05,
    // elevation: 5
    // borderWidth:1,
    // borderColor:Colors.GREY,
    // borderRadius:30
  },
  inputBox: {
    flex: 1,
    fontSize:15,
    // paddingHorizontal: 15,
    // fontFamily: MANROPE_FONT,
    // fontWeight: FONT_WEIGHT_LIGHT,
    // letterSpacing: 0.5,
    // borderColor:Colors.LIGHTGREYOFF,
    // borderWidth:1,
    // marginBottom: Platform.OS == "ios" ? 0 : 10,
    paddingBottom: Platform.OS == "ios" ? 15: 12,
    paddingTop:Platform.OS == "ios" ? 15: 12,
    paddingHorizontal:15,
    borderRadius:50,
    fontFamily:Fonts.regular,
    color:Colors.black
  },
  leftIcon: {
    width: 45,
    height: 50,
    // borderRightColor: BABY_PINK_SHADE,
    // borderRightWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon: {
    width: 80,
    height: 50,
    alignItems:'flex-end',
    paddingRight:10,
    // borderLeftColor: BABY_PINK_SHADE,
    // borderLeftWidth: 2,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  rightText: {
    width: 70,
    height: 50,
    // backgroundColor: BABY_PINK_SHADE,
    // borderLeftColor: BABY_PINK_SHADE,
    borderLeftWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  descriptionBox: {
    height: 120,
    justifyContent: 'flex-start',
  },
})

export default styles
