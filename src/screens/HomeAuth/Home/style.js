import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { dynamicSize } from "../../../utilities/helpers";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    topBanner: {
        backgroundColor: Colors.WHITE,
        flex: 1
    },
    heightBottom: {
        height: responsiveHeight(8),
    },
    loginContainer: {
        flex: 1,
        bottom:responsiveHeight(3)
    },

    shoppingCartRow: {
        flexDirection: 'row',
        width: responsiveWidth(18),
        alignItems: 'center',
        justifyContent: 'center'

    },
    backgroundStyle: {
        height: responsiveHeight(10),
        paddingTop: responsiveHeight(2),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(5)


    },
    CartButton: {
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(10)

    },
    wishlistButton: {
        marginTop: responsiveHeight(3),
        marginRight: responsiveWidth(-5)

    },
    badgeContainer: {
        position: 'absolute',
        right: -7,
        top: -8,
        backgroundColor: Colors.DARKRED,
        borderRadius: 8,
        width: 15,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: Colors.WHITE,
        fontSize: responsiveFontSize(1.5),
        fontFamily: Fonts.regular
    },
    bottomRowAdjust: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
    },
    bottomButtonAdjust: {
        position: 'absolute',
        bottom: 30,
        right: 0
    },
    bottomRow: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        paddingHorizontal: dynamicSize(8, true),
    },
    plusIconWrapper: {
        width: 70,
        height: 70,
        backgroundColor: Colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35
    },
    percentIconButton: {
        width: 70,
        height: 70,
        backgroundColor: Colors.WHITE,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    crossIconButton: {
        width: 70,
        height: 70,
        backgroundColor: "#75B1DC",
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
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
        paddingTop: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(3)

    },
    hedaerBottomStyle: {
        top: responsiveHeight(-8)
    },

    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-start',
    },
    modalContent: {
        width: '90%',
        height: '100%',
        backgroundColor: Colors.WHITE,
        position: 'absolute',
        top: 0,
    },
});


