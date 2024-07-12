import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
        padding: 16,
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
        marginTop: responsiveHeight(3)
    },
    couponContainer: {
        marginVertical: 10,
        alignItems: 'center',
    },
    inputButtonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: responsiveHeight(2)
    },
    couponInput: {
        flex: 1,
        borderColor: Colors.GRAY,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: Colors.WHITE,
        marginRight: 10,
    },
    applyButton: {
        backgroundColor: Colors.OFFBLACK,
        padding: 10,
        borderRadius: 5,
    },
    applyButtonText: {
        color: Colors.WHITE,
        fontFamily: Fonts.medium,
    },
    summaryContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: responsiveHeight(2)
    },
    totalItemsText: {
        fontFamily: Fonts.medium,
        fontSize: responsiveFontSize(2.3),
        color: Colors.OFFBLACK,
    },
    DiscountText: {
        fontFamily: Fonts.regular,
        fontSize: responsiveFontSize(2),
        color: Colors.PastelGreen,
        marginTop: responsiveHeight(2)
    },
    CartText: {
        fontFamily: Fonts.regular,
        fontSize: responsiveFontSize(2),
        color: Colors.OFFBLACK,
        marginVertical: responsiveHeight(1)

    },
    orderTotalText: {
        fontFamily: Fonts.medium,
        fontSize: responsiveFontSize(2.5),
        color: Colors.OFFBLACK,
        marginVertical: responsiveHeight(1)
    },
    btnContainer: {
        paddingHorizontal: responsiveWidth(9),
        paddingVertical: responsiveHeight(2),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.OFFBLACK
    },
    btnText: {
        color: Colors.WHITE,
        fontSize: responsiveFontSize(2),
        fontFamily: Fonts.medium
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        height: responsiveHeight(7),
        borderColor: Colors.lightgrey,
        borderWidth: 1.3,
        width: '60%',
        paddingHorizontal: responsiveWidth(3),
        justifyContent: 'space-between'

    },
    input: {
        width: '80%',
    },

    plusIcon: {
        fontSize: responsiveFontSize(4),
        fontFamily: Fonts.medium,
        color: Colors.WHITE,
    },
    floatingButton: {

        width: responsiveWidth(12),
        height: responsiveWidth(12),
        borderRadius: responsiveWidth(6),
        backgroundColor: Colors.OFFBLACK,
        justifyContent: 'center',
        alignItems: 'center',

    },
    blankView: {
        height: responsiveHeight(8)
    },
    removeBtn: {
        backgroundColor: Colors.WHITE,
        paddingHorizontal: responsiveWidth(7),
        paddingVertical: responsiveHeight(2),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.OFFBLACK
    },
    removebtnText: {
        color: Colors.OFFBLACK,
        fontSize: responsiveFontSize(2),
        fontFamily: Fonts.medium
    },
    containerEmptyCart: {
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(10),
        borderRadius: 8,
        backgroundColor: Colors.WHITE,
        paddingVertical: responsiveHeight(3),
        marginTop: responsiveHeight(3),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.lightgrey
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
        fontSize: responsiveFontSize(2.2)
    },

});
