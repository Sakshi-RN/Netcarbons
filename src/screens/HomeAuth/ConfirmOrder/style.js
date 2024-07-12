import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    content: {
        marginHorizontal: responsiveWidth(5),
        paddingBottom: responsiveHeight(10),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: responsiveHeight(1.8),
    },
    buttonContainer: {
        position: 'absolute',
        bottom: responsiveHeight(3),
        width: '100%',
        paddingHorizontal: responsiveWidth(5),
    },
    choosePaymentText: {
        color: Colors.OFFBLACK,
        fontSize: responsiveFontSize(2.5),
        fontFamily: Fonts.medium,
    },
    reviewOrderText: {
        color: Colors.SECONDARY,
        marginTop: responsiveHeight(1.5),
        fontFamily: Fonts.regular,
        marginBottom:responsiveHeight(2.5)
    },
    paymentContainer: {
        padding: responsiveWidth(4),
        borderWidth: 1,
        borderColor:Colors.lightgrey,
        marginTop: responsiveHeight(2),
        paddingTop:0
    },
    paymentText: {
        fontSize: responsiveFontSize(2.2),
        fontFamily: Fonts.regular,
    },
    paymentRow: {
        width: responsiveWidth(40),
    },
    cardText: {
        fontSize: responsiveFontSize(2),
        fontFamily: Fonts.regular,
    },
    detailText: {
        fontSize: responsiveFontSize(2.2),
        fontFamily: Fonts.regular,
        marginTop: responsiveHeight(2.5),
    },
    billContainer: {
        backgroundColor: Colors.bilBox,
        padding: responsiveWidth(5),
        marginBottom: responsiveHeight(2),
    },
    summaryText: {
        fontSize: responsiveFontSize(2.3),
        fontFamily: Fonts.medium,
    },
    summaryItemText: {
        fontSize: responsiveFontSize(2),
        fontFamily: Fonts.medium,
    },
    SubtotalText:{
        fontSize: responsiveFontSize(2),
        fontFamily: Fonts.medium, 
        color:Colors.SECONDARY
    },
    editBtn: {
        color: Colors.PastelGreen,
        fontSize: responsiveFontSize(2.3),
        fontFamily: Fonts.medium,
    },
});
