import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  headerText: {
    fontFamily: Fonts.regular,
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(1),
    alignSelf: "center",
    color: Colors.PRIMARY,
  },
  scrollView: {
    paddingVertical: responsiveHeight(2),
  },
  orderContainer: {
    backgroundColor: Colors.WHITE,
    padding: responsiveHeight(2),
    marginTop: responsiveHeight(1.5),
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    borderRadius: 12,
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
    fontSize: responsiveFontSize(2.1),
    color: Colors.SECONDARY,
  },
  btnText: {
    color: Colors.black,
    fontSize: responsiveFontSize(2),
    letterSpacing: 0.3,
    fontFamily: Fonts.medium,
  },
  button: {
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(1.5),
    borderColor: Colors.OFFBLACK,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveHeight(2),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginRight: responsiveWidth(2),
  },
  priceRow: {
    alignItems: "flex-start",
    width: responsiveHeight(28),
    marginTop: responsiveHeight(2),
  },
  marginTop: {
    marginTop: responsiveHeight(2),
  },
  incrementContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.WHITE,
    width: responsiveWidth(30),
    paddingVertical: responsiveHeight(1.5),
    shadowColor: Colors.LIGHTGREY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  quantity: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: Fonts.medium,
    color: Colors.OFFBLACK,
  },
  heartIcon: {
    position: "absolute",
    right: responsiveWidth(1),
    bottom: responsiveHeight(-1),
  },
  deltIcon: {
    marginTop: responsiveHeight(2),
  },
  image: {
    width: 105,
    height: 105,
    borderRadius: 8,
    resizeMode: "cover",
  },
});
