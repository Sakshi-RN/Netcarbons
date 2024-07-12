import {StyleSheet} from "react-native";
import { Fonts } from "../../../theme/fonts";
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';


export default StyleSheet.create({
  container: {
      flex: 1,
  },
  text: {
      fontFamily: Fonts.regular,
      fontSize: responsiveFontSize(2),
      marginHorizontal: responsiveHeight(3),
      lineHeight:responsiveHeight(3),
      marginBottom:responsiveHeight(1)
  },

});
