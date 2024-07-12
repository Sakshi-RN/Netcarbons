import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default StyleSheet.create({
  
  orderContainer: {
    backgroundColor: Colors.WHITE,
    padding: responsiveHeight(2),
    marginVertical: responsiveHeight(2),
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width:'90%',
    paddingHorizontal:responsiveWidth(2)
  },
  orderItem: {
    fontFamily: Fonts.regular,
    fontSize: responsiveFontSize(2.1),
    color: Colors.OFFBLACK,
  },
  orderItemText: {
    fontFamily: Fonts.medium,
    fontSize: responsiveFontSize(2.1),
    color: Colors.OFFBLACK,
    width: responsiveHeight(28),
    marginTop: responsiveHeight(0.5),
  },
  orderDetails: {
    fontFamily: Fonts.regular,
    fontSize: responsiveFontSize(1.5),
    color: Colors.DARKGREY,
    width: responsiveHeight(25),
    marginTop: responsiveHeight(2),
    lineHeight: 17,
  },
  
  image: {
    width: 75,
    height: 100,
    resizeMode: "cover",
    marginTop: responsiveHeight(5),
  },
});
