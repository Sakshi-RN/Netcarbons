import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    padding: 5,
    paddingVertical: responsiveHeight(2)
  },
  headerText: {
    fontFamily: Fonts.regular,
    fontSize: responsiveFontSize(2.5),
    color: Colors.OFFBLACK,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerEmptyCart: {
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(5),
    borderRadius: 8,
    backgroundColor: Colors.WHITE,
    paddingVertical: responsiveHeight(3),
    marginTop: responsiveHeight(3),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    marginHorizontal: responsiveWidth(5)
  },
  imageEmptyCart: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  titleEmptyCart: {
    color: Colors.OFFBLACK,
    fontFamily: Fonts.regular,
    fontSize: responsiveFontSize(2.4),
    marginVertical: responsiveHeight(3)
  },

  goShopButtonEmptyCart: {
    alignItems: 'center',
    width: responsiveWidth(60),
    backgroundColor: Colors.OFFBLACK,
    height: responsiveHeight(8),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonIconEmptyCart: {
    backgroundColor: Colors.OFFBLACK,
    padding: 10,
    borderRadius: 5,
  },
  buttonTextEmptyCart: {
    color: Colors.WHITE,
    fontFamily: Fonts.regular,
    fontSize: responsiveFontSize(2.2),
    textAlign: 'center'
  },
});
