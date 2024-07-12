import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { dynamicSize } from "../../../utilities/helpers";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    scrolViewWrapper: {
        flex: 1,
        backgroundColor: Colors.white,
        marginHorizontal: 20
    },
    backgroundStyle: {
        height: responsiveHeight(10),
        paddingTop: responsiveHeight(2)
    },
    topBanner: {
        flexDirection: 'column',
        height: 89
    },
    headerRowAdjust: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    loginContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: dynamicSize(12, true),
        paddingTop: Platform.OS == "ios" ? 30 : 0
    },
    chooseAmountLabel: {
        fontSize: 24,
        marginTop: responsiveHeight(4),
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium,
        alignSelf: 'center'
    },
    calculateVectorCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    productSelectedColumn: {
        alignItems: 'center',
        paddingVertical: responsiveHeight(4)
    },
    productSelectedText: {
        fontSize: 18,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium,
        marginVertical: responsiveHeight(2)
    },
    productDescText: {
        fontSize: 16,
        lineHeight: 25,
        color: Colors.SECONDARY,
        fontFamily: Fonts.regular
    },
    bottomButtonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20

    },
    bottomRowLeft: {
        width: '49%'
    },
    bottomRowRight: {
        width: '49%'
    },
    chooseProductButton: {
        borderWidth: 1,
        borderColor: Colors.OFFBLACK,
        paddingHorizontal: responsiveWidth(3),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: responsiveHeight(2)

    },
    chooseProductText: {
        fontSize: 16,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium
    },
    buynowButton: {
        paddingHorizontal: responsiveWidth(10),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: responsiveHeight(2),
        backgroundColor: Colors.OFFBLACK
    },
    buyNowText: {
        fontSize: 16,
        color: Colors.WHITE,
        fontFamily: Fonts.medium,
    }


});
