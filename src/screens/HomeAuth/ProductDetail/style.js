import { Platform, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { dynamicSize, height } from "../../../utilities/helpers";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrolViewWrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    marginBottom:30
  },
  loginContainer: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Platform.OS == "ios" ? 0 : 0,
    marginTop: -20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productTitle: {
    fontSize: 32,
    lineHeight: 37.54,
    color: Colors.OFFBLACK,
    fontFamily: Fonts.medium,
  },
  productContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: dynamicSize(12, true),
  },
  priceWrapper: {
    flexDirection: "row",
    width: "100%",
  },
  priceLeft: {
    width: "60%",
  },
  ratingRight: {
    width: "40%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  priceRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  usdText: {
    fontSize: 18,
    lineHeight: 22.01,
    color: Colors.OFFBLACK,
    fontFamily: Fonts.regular,
    marginRight: 10,
  },
  cuttingText: {
    fontSize: 18,
    lineHeight: 22.01,
    color: Colors.SECONDARY,
    fontFamily: Fonts.regular,
    textDecorationLine: "line-through",
    marginRight: 10,
  },
  tabWrapperRow: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 20,
  },
  tabLeft: {
    width: "10%",
    flexDirection: "column",
  },
  tabContentRight: {
    width: "90%",
    flexDirection: "column",
    paddingLeft: 10,
  },
  tabButton: {
    paddingVertical: 15,
  },
  descHeaderText: {
    fontSize: 18,
    lineHeight: 22.01,
    color: Colors.OFFBLACK,
    fontFamily: Fonts.medium,
    marginBottom: 10,
  },
  tabFirstContent: {
    paddingVertical: 10,
    flex:1,
    height:450
  },
  descText: {
    fontSize: 15,
    lineHeight: 21.94,
    color: Colors.SECONDARY,
    fontFamily: Fonts.regular,
    marginBottom: 30,
  },
  secondTabText: {
    fontSize: 15,
    lineHeight: 21.94,
    color: Colors.SECONDARY,
    fontFamily: Fonts.regular,
    marginBottom: 10,
  },
  LearnRow: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 8,
  },
  learnLeft: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  learnRight: {
    width: "50%",
  },
  bottomConatiner: {
    flexDirection: "column",
    paddingHorizontal: dynamicSize(12, true),
    paddingVertical: 20,
    backgroundColor: Colors.WHITE,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
      },
      android: {
        elevation: 5,
      },
    }),
  },
  qunatityRow: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.WHITE,
    paddingVertical: responsiveHeight(3),
    justifyContent: "space-between",
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        shadowColor: Colors.SECONDARY,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  quantityLeft: {
    width: "30%",
    justifyContent: "center",
  },
  quantityCenter: {
    width: "10%",
  },
  quantityRight: {
    width: "60%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  qtyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    paddingVertical: responsiveHeight(1.5),
    alignItems: "center",
    borderColor: Colors.OFFBLACK,
    paddingHorizontal: responsiveWidth(5),
    width: "50%",
  },
  minusTextStyle: {
    fontSize: responsiveFontSize(2.7),
    color: Colors.OFFBLACK,
    fontFamily: Fonts.medium,
  },
  heartIconButton: {
    width: 60,
    height: 60,
    borderColor: Colors.SECONDARY,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  secondTabRow: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },
  secondTabLeft: {
    width: "20%",
    paddingTop: 8,
  },
  secondTabRight: {
    width: "80%",
    paddingLeft: 10,
  },
  standardRow: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  standardText: {
    fontSize: 18,
    lineHeight: 22.01,
    color: Colors.OFFBLACK,
    fontFamily: Fonts.medium,
    marginBottom: 10,
  },
  downloadFileWrapper: {
    flexDirection: "row",
    width: "100%",
    paddingBottom: 20,
  },
  downloadLeft: {
    width: "60%",
  },
  downloadRight: {
    width: "40%",
  },
  examplePdfRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  fileNameText: {
    fontSize: 16,
    lineHeight: 25.01,
    color: Colors.OFFBLACK,
    fontFamily: Fonts.medium,
  },
  totalMbText: {
    fontSize: 16,
    lineHeight: 23.73,
    color: Colors.SECONDARY,
    fontFamily: Fonts.regular,
  },
  reviewContainer: {
    flexDirection: "row",
    width: "100%",
    borderBottomColor: Colors.LIGHTGREYOFF,
    borderBottomWidth: 1,
  },
  reviewLeft: {
    width: "20%",
  },
  reviewRight: {
    width: "80%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  ReviewNameRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent:'space-between'
  },
  reviewNameText: {
    fontSize: 16,
    lineHeight: 25.01,
    color: Colors.OFFBLACK,
    fontFamily: Fonts.medium,
    marginRight: 10,
  },
  dateText: {
    fontSize: 16,
    lineHeight: 25.01,
    color: Colors.SECONDARY,
    fontFamily: Fonts.medium,
  },
  mapView: {
    flexDirection: "row",
  },
  noReviewsRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
