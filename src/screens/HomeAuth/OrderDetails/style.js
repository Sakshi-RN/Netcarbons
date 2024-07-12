/* eslint-disable prettier/prettier  */
import { StyleSheet } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: responsiveHeight(5),

  },
  scrollContainer: {
    backgroundColor: Colors.WHITE,
  },
  flexRowJB: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
  },
  cardtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgrey,
    marginTop: responsiveHeight(2),
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexItemsStart: {
    alignItems: 'flex-start',
  },
  container: {
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2),
    backgroundColor: Colors.WHITE,
  },
  infoTitles: {
    fontSize: responsiveFontSize(2.2),
    color: '#989898',
    fontFamily: Fonts.regular,
  },
  infoValues: {
    fontSize: responsiveFontSize(2),
    color: Colors.BLACK,
    fontFamily: Fonts.regular,
  },
  descriptionTitle: {
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.medium,
    color: Colors.BLACK,
    marginTop:responsiveHeight(2)
  },
  description: {
    marginVertical: responsiveHeight(1),
    color: '#989898',
    fontFamily: Fonts.regular,
    lineHeight:responsiveHeight(3)
  },
  mv05: {
    marginVertical: responsiveHeight(0.5),
  },
  mv1: {
    marginVertical: responsiveHeight(1),
  },
  imageWrapper: {
    width: responsiveWidth(25),
    height: responsiveHeight(20),
    marginRight: responsiveWidth(2),
    bottom:responsiveHeight(6)
  },
  ph2: {
    paddingHorizontal: responsiveWidth(2),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  download: {
    fontSize: responsiveFontSize(2),
    color: Colors.DARKRED,
    marginHorizontal: responsiveWidth(2),
  },
  purchaseOrderContainer: {
    backgroundColor: Colors.WHITE,
  },
  labelText: {
    fontFamily: Fonts.medium,
    fontSize: responsiveFontSize(2),
  },
  valueText: {
    fontFamily: Fonts.regular,
    fontSize: responsiveFontSize(2),
    marginVertical: responsiveHeight(0.5),
  },
  purchaseOrderDetails: {
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(2),
    marginVertical: responsiveHeight(2),
    backgroundColor: Colors.socialColor,
  },
  detailText: {
    fontFamily: Fonts.regular,
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
  },
  widthStyle: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    backgroundColor: Colors.lightgrey,
    height: 1,
    marginTop: responsiveHeight(2),
    width: '100%',
  },
  
  manageButton: {
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(3),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: responsiveHeight(1),
  },
  cancelButton: {
    backgroundColor: Colors.OFFBLACK,
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(3),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: responsiveHeight(1),
  },
  reviewButton: {
    backgroundColor: Colors.PastelGreen,
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(3),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: responsiveHeight(1),
  },
  buttonText: {
    fontSize: responsiveFontSize(2),
    color: Colors.WHITE,
    fontFamily: Fonts.regular,
  },
  buttonIcon: {
    marginHorizontal: responsiveWidth(3),
  },
  buttonContainer:{
    marginVertical:responsiveFontSize(2)
  },
  certificateContainer:{
    borderBottomColor: Colors.lightgrey,
    borderBottomWidth:0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),

  }
});