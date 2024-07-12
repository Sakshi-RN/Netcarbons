import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { dynamicSize } from "../../../utilities/helpers";
import { responsiveHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    backgroundStyle: {
        height: responsiveHeight(10),
        paddingTop:responsiveHeight(2)
    },
    headerHeight: {
        backgroundColor: 'red',
        Bottom:40,

    },
    scrolViewWrapper: {
        flex: 1,
        backgroundColor: Colors.white,
        padding:responsiveScreenWidth(5)
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
        paddingTop:responsiveHeight(3)
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
        flexDirection: 'row',
        paddingTop: 15
    },
    error: {
        fontSize: 15,
        color: Colors.RED,
        fontFamily: Fonts.medium,

    }
});
