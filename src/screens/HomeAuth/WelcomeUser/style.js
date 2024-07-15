import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { dynamicSize } from "../../../utilities/helpers";
import { responsiveHeight,responsiveWidth } from "react-native-responsive-dimensions";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    welcomeContainer: {
        top: responsiveHeight(-10)
    },
    centerWelcomeWrapper: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    btnWrapper: {
        width: '100%',
        marginVertical: 10,
        paddingBottom: Platform.OS == "ios" ? 20 : 0,
        paddingHorizontal: dynamicSize(12, true),
    },
    titleText: {
        fontSize: 30,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium,

    },
    subTitleText: {
        fontSize: 15,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.regular,
        marginTop: Platform.OS == "ios" ? 20 : 5,
        marginBottom: 15,
        fontFamily: Fonts.medium
    },
    logoWrapper: {
        position: 'absolute',
        top: Platform.OS == "ios" ? 60 : 20,
        left: 0,
        right: 0
    },
    titleWrapper: {
        paddingHorizontal: dynamicSize(8, true),
        top:responsiveHeight(-13)
    },
    profileImage: {
        width: responsiveWidth(15),
        height: responsiveWidth(15),
        borderRadius: responsiveWidth(8),
       
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: dynamicSize(10, true),
    },
    onethreeText: {
        fontSize: 16,
        lineHeight: 23.73,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.regular
    },
    headerRowAdjust: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    rowbannerFirst: {
        top:responsiveHeight(-7)
    },
    rowbannerSecond: {
        top:responsiveHeight(-3)

    },
    ImageUploadRow: {
        flexDirection: 'row',
        paddingLeft: 15,
        marginTop: Platform.OS == "ios" ? -25 : -40
    },
    CameraUploadIconBox: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: Colors.SECONDARY
    }
});
