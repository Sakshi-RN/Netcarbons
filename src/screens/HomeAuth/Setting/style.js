import {StyleSheet} from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: responsiveFontSize(2.3),
    margin: responsiveHeight(2),
  },
  separator: {
    backgroundColor: Colors.lightgrey,
    height: responsiveHeight(0.3),
  },
});