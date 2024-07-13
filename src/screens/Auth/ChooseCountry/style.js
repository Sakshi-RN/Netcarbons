import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { dynamicSize } from "../../../utilities/helpers";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,

    },
    welcomeContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    centerWelcomeWrapper: {
        // flexDirection:'column',
        // alignItems:'center'
    },
    btnWrapper: {
        marginVertical: 20,
        marginHorizontal: 20
    },
    titleText: {
        fontSize: 28,
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium,
        alignSelf: 'center',
        textAlign: 'center'
    },
    subTitleText: {
        fontSize: 17,
        color: Colors.SECONDARY,
        fontFamily: Fonts.regular,
        marginTop: responsiveHeight(1),
        alignSelf: 'center',
        textAlign: 'center'
    },
    logoWrapper: {
        position: 'absolute',
        top: Platform.OS == "ios" ? 70 : 20,
        left: 0,
        right: 0,
        alignItems: 'center'
    },
    titleWrapper: {
        alignItems: 'center',
        paddingTop: 0
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 4,
        color: Colors.OFFBLACK,
        paddingHorizontal: 8,
    },
    countryDropdownWrapper: {
        paddingHorizontal: dynamicSize(12, true)
    },
    placeholderStyle: {
        fontSize: 15,
        lineHeight: 21,
        fontFamily: Fonts.regular,
        color: Colors.DARKGREY
    },
    selectedTextStyle: {
        fontSize: 18,
        lineHeight: 21,
        fontFamily: Fonts.regular,
        color: Colors.OFFBLACK,

    },
    iconStyle: {
        marginRight: 5
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 15,
        lineHeight: 21,
        fontFamily: Fonts.regular,
        color: Colors.OFFBLACK
    }
});
