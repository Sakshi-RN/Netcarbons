import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { dynamicSize } from "../../../utilities/helpers";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: 10
    },
    scrolViewWrapper: {
        flex: 1,
        backgroundColor: Colors.white,
        margin: 20
    },

    topBanner: {
        flexDirection: 'column',
        height: 89
    },
    loginContainer: {
        alignSelf: 'center'
    },
    headerRowAdjust: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    usernameText: {
        fontSize: 20,
        marginTop: 10,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium,
        alignSelf: 'center'
    },
    rowWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15
    },
    contentLightText: {
        color: Colors.SECONDARY,
        fontFamily: Fonts.regular,
        marginTop: 10,
        alignSelf: 'center',
    },
    contentDarkText: {
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium,
        alignSelf: 'center',
        marginTop: 10,
    },
    otpInput: {
        width: '100%',
        height: 100,
    },
    underlineStyleBase: {
        width: 47,
        height: 74,
        borderWidth: 0,
        borderWidth: 1,
        borderColor: Colors.LIGHTGREY,
        fontSize: 32,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium
    },
    underlineStyleHighLighted: {
        borderColor: Colors.OFFBLACK
    },
    otpWrapper: {
        width: '100%',
        paddingBottom: 20
    },
    requestNewCodeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'

    },
    requestNewWrap: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center'
    },
    timerText: {
        color: "#B7323B",
        fontFamily: Fonts.medium,
        marginTop: 10,
        marginLeft: 3,
        fontSize: 15
    },
    verifyButtonWrapper: {
        marginVertical: 20,
    },
    resendText: {
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium,
        textDecorationLine: 'underline'
    },
    pandaBottomRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    skipText: {
        fontSize: 18,
        lineHeight: 22.01,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium
    },
    errortext: {
        fontSize: 15,
        color: Colors.RED,
        fontFamily: Fonts.medium,
        marginTop: 10,
        alignSelf: 'center'
    }

});
