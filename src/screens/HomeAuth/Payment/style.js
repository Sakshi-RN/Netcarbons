import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { dynamicSize } from "../../../utilities/helpers";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    headerStyles: {
        marginTop: responsiveHeight(-4)
    },
    content: {
        marginHorizontal: responsiveWidth(5),
        paddingBottom: responsiveHeight(20),
    },
    scrolViewWrapper: {
        flex: 1,
        backgroundColor: Colors.white
    },
    topBanner: {
        flexDirection: 'column',
        height: 89
    },
    loginContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: dynamicSize(12, true),
        paddingTop: Platform.OS == "ios" ? 30 : 0
    },
    loginText: {
        fontSize: 18,
        lineHeight: 22.01,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium
    },
    loginDescText: {
        fontSize: 16,
        lineHeight: 23.73,
        color: Colors.SECONDARY,
        fontFamily: Fonts.regular
    },
    labelText: {
        fontSize: 16,
        lineHeight: 25.01,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium,
        marginBottom: 10
    },
    inputWrapper: {
        paddingTop: 30
    },
    loginButtonWrapper: {
        paddingHorizontal: dynamicSize(12, true),
        paddingTop: 10,
        paddingBottom: 10
    },
    loginButtonAdjustment: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 80
    },
    headerRowAdjust: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    termsRow: {
        flexDirection: 'row',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20
    },
    termsLeft: {
        width: '20%',
        // justifyContent:'center',
        justifyContent: 'flex-start',
        paddingTop: 5
    },
    termsRight: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    termsText: {
        fontSize: 16,
        lineHeight: 25.01,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium,
        marginTop: 2,
        marginBottom: 10
    },
    termsDescText: {
        fontSize: 15,
        lineHeight: 21.94,
        color: Colors.SECONDARY,
        fontFamily: Fonts.regular,
    },
    passwordStrengthRow: {
        paddingTop: 15
    },
    cancelButtonText: {
        fontSize: 18,
        lineHeight: 22.01,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium
    },
    checkoutCount: {
        fontSize: 14,
        lineHeight: 22.01,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium
    },
    bottomSlideContainer: {
        backgroundColor: '#F2F2F2',
        paddingHorizontal: responsiveWidth(5),
        paddingBottom: responsiveHeight(10),
        paddingTop: responsiveHeight(3),
        flex: 1,

    },
    coupenSlider: {
        backgroundColor: '#F2F2F2',
        paddingHorizontal: responsiveWidth(5),
        paddingBottom: responsiveHeight(3),
        paddingTop: responsiveHeight(3),
        flex: 1,


    },
    couponRow: {
        flexDirection: 'row',
        width: '100%'
    },
    couponInputWrapper: {
        width: '50%'
    },
    discountWrapper: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10
    },
    addCouponText: {
        fontSize: 16,
        lineHeight: 25.01,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium
    },
    changeCurrencyButton: {
        flexDirection: 'column',
        marginBottom: 10
    },
    totalItemCountText: {
        fontSize: 15,
        lineHeight: 21.94,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium,
        marginBottom: 5
    },
    orderTotalText: {
        fontSize: 15,
        lineHeight: 21.94,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium,
        marginBottom: 10
    },
    discountText: {
        fontSize: 15,
        lineHeight: 21.94,
        color: '#7BA986',
        fontFamily: Fonts.medium,
        marginRight: 10
    },
    deleteIcon: {
        width: 45,
        height: 45,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: "#B7323B",
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartTotalText: {
        fontSize: 15,
        lineHeight: 21.94,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.regular,
        marginBottom: 5,
        marginTop: 5
    },
    lineStyles: {
        height: 1.5,
        backgroundColor: Colors.lightgrey,
        marginTop: responsiveHeight(1)
    },
    dotContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    circleDot: {
        height: 15,
        width: 15,
        borderRadius: 8,
        backgroundColor: Colors.grey,
        marginHorizontal: 5,
        top: responsiveHeight(-35)
    },
    activecircleDot: {
        height: 15,
        width: 15,
        borderRadius: 8,
        backgroundColor: Colors.OFFBLACK,
        marginHorizontal: 5,
        top: responsiveHeight(-35)
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(3)

    },
    radioCircle: {
        height: 15,
        width: 15,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: Colors.BLACK,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE
    },
    selectedCircle: {
        backgroundColor: Colors.BLACK,
        borderWidth: 4,
        borderColor: Colors.SECONDARY,
    },
    radioTextContainer: {
        flex: 1,
    },
    optionText: {
        fontSize: responsiveFontSize(2),
        color: Colors.SECONDARY,
        fontFamily: Fonts.regular,
        lineHeight: 22

    },
    optionAmount: {
        fontSize: 16,
        marginTop: responsiveHeight(1.5),
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: responsiveHeight(3)
    },
    backButton: {
        backgroundColor: Colors.WHITE,
        borderColor: Colors.BLACK,
        borderWidth: 1,
        paddingVertical: responsiveHeight(2),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: responsiveWidth(13)
    },
    payButton: {
        backgroundColor: Colors.OFFBLACK,
        paddingVertical: 15,
        alignItems: 'center',
        paddingVertical: responsiveHeight(2),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: responsiveWidth(13)

    },
    buttonText: {
        color: Colors.WHITE,
        fontSize: 18,
        fontFamily: Fonts.medium,
    },
    buttonWhiteText: {
        color: Colors.BLACK,
        fontSize: 18,
        fontFamily: Fonts.medium
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
        marginTop: responsiveHeight(1),

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
        fontSize: responsiveFontSize(2),
        color: Colors.OFFBLACK,
        marginTop: responsiveHeight(1)
    },
    DiscountText: {
        fontFamily: Fonts.regular,
        fontSize: responsiveFontSize(2),
        color: Colors.PastelGreen,
        marginTop: responsiveHeight(1)
    },
    CartText: {
        fontFamily: Fonts.regular,
        fontSize: responsiveFontSize(2),
        color: Colors.OFFBLACK,
        marginTop: responsiveHeight(1)

    },
    orderTotalText: {
        fontFamily: Fonts.medium,
        fontSize: responsiveFontSize(2),
        color: Colors.OFFBLACK,
        marginTop: responsiveHeight(1)
    },
    btnContainer: {
        paddingHorizontal: responsiveWidth(8),
        paddingVertical: responsiveHeight(1.5),
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
        height: responsiveHeight(6),
        borderColor: Colors.lightgrey,
        borderWidth: 1.3,
        width: '55%',
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
    removeBtn: {
        backgroundColor: Colors.WHITE,
        paddingHorizontal: responsiveWidth(6),
        paddingVertical: responsiveHeight(1.3),
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
        marginTop: responsiveHeight(3)
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
        paddingHorizontal: responsiveWidth(20),
        backgroundColor: Colors.OFFBLACK,
        paddingVertical: responsiveHeight(1.5),
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
