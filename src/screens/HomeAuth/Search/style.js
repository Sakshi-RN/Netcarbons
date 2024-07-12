import { StyleSheet } from "react-native";
import { Fonts } from "../../../theme/fonts";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from "../../../theme/colors";


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.WHITE,

  },
  searchInput: {
    margin: responsiveWidth(5),
    height: responsiveHeight(8),
    borderColor: Colors.GREY,
    borderWidth: 0.5,
    paddingHorizontal: responsiveWidth(3),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  input: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: Fonts.medium,
    color: Colors.BLACK,
    width: responsiveWidth(70)
  },
  suggestionText: {
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.medium,
    color: Colors.BLACK,
    marginLeft: 20,
    marginTop: 10
  },
  loginContainer:{
   flex:1

  },
  errorText:{
    alignSelf:'center',
    fontSize: responsiveFontSize(3),
    fontFamily: Fonts.regular,
    color: Colors.DARKGREY,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},

});
