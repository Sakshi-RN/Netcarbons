import { Platform, StyleSheet } from 'react-native'
import { Colors } from '../../theme/colors'
import { Fonts } from '../../theme/fonts'

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor:Colors.LIGHTGREYOFF,
    borderWidth:1,
    backgroundColor: Colors.PLACEHOLDERBLUE,
    alignItems: 'center',
  },
  inputBox: {
    flex: 1,
    fontSize:15,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon: {
    width: 80,
    height: 50,
    alignItems:'flex-end',
    paddingRight:10,
    justifyContent: 'center',
  },
  rightText: {
    width: 70,
    height: 50,

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
